import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';

interface UseDataFetchingOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  enabled?: boolean;
  refetchInterval?: number;
  cacheKey?: string;
}

interface UseDataFetchingResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  mutate: (newData: T) => void;
}

// Simple in-memory cache
const cache = new Map<string, { data: any; timestamp: number; ttl: number }>();

export function useDataFetching<T>(
  fetcher: () => Promise<T>,
  options: UseDataFetchingOptions<T> = {}
): UseDataFetchingResult<T> {
  const { onSuccess, onError, enabled = true, refetchInterval, cacheKey } = options;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    // Check cache first
    if (cacheKey) {
      const cached = cache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < cached.ttl) {
        setData(cached.data);
        return;
      }
    }

    setLoading(true);
    setError(null);

    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      const result = await fetcher();
      
      if (!abortControllerRef.current.signal.aborted) {
        setData(result);
        setError(null);
        
        // Cache the result
        if (cacheKey) {
          cache.set(cacheKey, {
            data: result,
            timestamp: Date.now(),
            ttl: 5 * 60 * 1000 // 5 minutes
          });
        }
        
        onSuccess?.(result);
      }
    } catch (err) {
      if (!abortControllerRef.current.signal.aborted) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        onError?.(error);
      }
    } finally {
      if (!abortControllerRef.current.signal.aborted) {
        setLoading(false);
      }
    }
  }, [fetcher, enabled, onSuccess, onError, cacheKey]);

  const refetch = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  const mutate = useCallback((newData: T) => {
    setData(newData);
    if (cacheKey) {
      cache.set(cacheKey, {
        data: newData,
        timestamp: Date.now(),
        ttl: 5 * 60 * 1000
      });
    }
  }, [cacheKey]);

  useEffect(() => {
    if (enabled) {
      fetchData();
    }

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData, enabled]);

  useEffect(() => {
    if (refetchInterval && enabled) {
      intervalRef.current = setInterval(fetchData, refetchInterval);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [fetchData, refetchInterval, enabled]);

  return { data, loading, error, refetch, mutate };
}

// Specialized hook for user data
export function useUserData() {
  return useDataFetching(
    async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (!authUser) {
        throw new Error('User not authenticated');
      }

      const { data: userData, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single();

      if (error) {
        throw error;
      }

      if (!userData) {
        throw new Error('User data not found');
      }

      return userData;
    },
    {
      cacheKey: 'user-data',
      refetchInterval: 30 * 1000 // Refetch every 30 seconds
    }
  );
}

// Specialized hook for documents
export function useDocuments(userId?: string) {
  return useDataFetching(
    async () => {
      if (!userId) {
        throw new Error('User ID required');
      }

      const { data: documents, error } = await supabase
        .from('documents')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return documents;
    },
    {
      cacheKey: `documents-${userId}`,
      enabled: !!userId
    }
  );
}

// Utility to clear cache
export function clearCache(key?: string) {
  if (key) {
    cache.delete(key);
  } else {
    cache.clear();
  }
} 