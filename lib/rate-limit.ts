import { NextRequest, NextResponse } from 'next/server';

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

class RateLimiter {
  private requests: Map<string, { count: number; resetTime: number }> = new Map();
  public config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const record = this.requests.get(identifier);

    if (!record || now > record.resetTime) {
      // Reset or create new record
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + this.config.windowMs,
      });
      return true;
    }

    if (record.count >= this.config.maxRequests) {
      return false;
    }

    record.count++;
    return true;
  }

  getRemaining(identifier: string): number {
    const record = this.requests.get(identifier);
    if (!record) return this.config.maxRequests;
    return Math.max(0, this.config.maxRequests - record.count);
  }

  getResetTime(identifier: string): number {
    const record = this.requests.get(identifier);
    return record ? record.resetTime : Date.now() + this.config.windowMs;
  }
}

// Create rate limiters
export const apiLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100,
});

export const leadLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 10,
});

export const authLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5,
});

// Rate limiting middleware
export function withRateLimit(
  handler: (req: NextRequest) => Promise<NextResponse>,
  limiter: RateLimiter = apiLimiter
) {
  return async (req: NextRequest): Promise<NextResponse> => {
    const identifier = getClientIdentifier(req);
    
    if (!limiter.isAllowed(identifier)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': limiter.getRemaining(identifier).toString(),
            'X-RateLimit-Reset': limiter.getResetTime(identifier).toString(),
            'Retry-After': Math.ceil(limiter.config.windowMs / 1000).toString(),
          }
        }
      );
    }

    const response = await handler(req);
    
    // Add rate limit headers to response
    response.headers.set('X-RateLimit-Remaining', limiter.getRemaining(identifier).toString());
    response.headers.set('X-RateLimit-Reset', limiter.getResetTime(identifier).toString());
    
    return response;
  };
}

// Get client identifier for rate limiting
function getClientIdentifier(req: NextRequest): string {
  // Use IP address as primary identifier
  const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown';
  
  // For authenticated requests, include user ID if available
  const authHeader = req.headers.get('authorization');
  if (authHeader) {
    // Extract user ID from token if possible
    return `${ip}:${authHeader.split(' ')[1]?.slice(0, 8) || 'auth'}`;
  }
  
  return ip;
} 