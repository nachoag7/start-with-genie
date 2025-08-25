import React, { useCallback, useMemo, useRef, useEffect } from 'react';

// Hook to debounce function calls
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    ((...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    }) as T,
    [callback, delay]
  );
}

// Hook to throttle function calls
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const lastCall = useRef(0);
  const lastCallTimer = useRef<NodeJS.Timeout>();

  return useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall.current >= delay) {
        callback(...args);
        lastCall.current = now;
      } else {
        if (lastCallTimer.current) {
          clearTimeout(lastCallTimer.current);
        }
        lastCallTimer.current = setTimeout(() => {
          callback(...args);
          lastCall.current = Date.now();
        }, delay - (now - lastCall.current));
      }
    }) as T,
    [callback, delay]
  );
}

// Hook to memoize expensive calculations
export function useMemoizedValue<T>(
  factory: () => T,
  deps: React.DependencyList
): T {
  return useMemo(factory, deps);
}

// Hook to prevent unnecessary re-renders of child components
export function useStableCallback<T extends (...args: any[]) => any>(
  callback: T
): T {
  return useCallback(callback, []);
}

// Hook to cache API responses
export function useApiCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 5 * 60 * 1000 // 5 minutes default
) {
  const cacheRef = useRef<Map<string, { data: T; timestamp: number }>>(new Map());

  return useCallback(async (): Promise<T> => {
    const cached = cacheRef.current.get(key);
    const now = Date.now();

    if (cached && now - cached.timestamp < ttl) {
      return cached.data;
    }

    const data = await fetcher();
    cacheRef.current.set(key, { data, timestamp: now });
    return data;
  }, [key, fetcher, ttl]);
}

// Hook to optimize scroll events
export function useScrollThrottle(
  callback: (scrollY: number) => void,
  delay: number = 16 // ~60fps
) {
  const throttledCallback = useThrottle(callback, delay);

  useEffect(() => {
    const handleScroll = () => {
      throttledCallback(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [throttledCallback]);
}

// Hook to optimize resize events
export function useResizeThrottle(
  callback: (width: number, height: number) => void,
  delay: number = 100
) {
  const throttledCallback = useThrottle(callback, delay);

  useEffect(() => {
    const handleResize = () => {
      throttledCallback(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [throttledCallback]);
}

// Hook to prevent unnecessary re-renders based on prop changes
export function useShallowEqual<T>(value: T): T {
  const ref = useRef<T>(value);
  
  if (!Object.is(ref.current, value)) {
    ref.current = value;
  }
  
  return ref.current;
}

// Hook to batch state updates
export function useBatchState<T>(initialState: T) {
  const [state, setState] = React.useState<T>(initialState);
  const batchRef = useRef<T[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const batchUpdate = useCallback((updates: T[]) => {
    batchRef.current.push(...updates);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      if (batchRef.current.length > 0) {
        setState(batchRef.current[batchRef.current.length - 1]);
        batchRef.current = [];
      }
    }, 0);
  }, []);

  return [state, batchUpdate] as const;
} 