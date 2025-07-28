import { NextRequest, NextResponse } from 'next/server'

interface RateLimitConfig {
  windowMs: number
  maxRequests: number
  message?: string
}

class RateLimiter {
  private requests: Map<string, { count: number; resetTime: number }> = new Map()
  public config: RateLimitConfig

  constructor(config: RateLimitConfig) {
    this.config = config
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now()
    const record = this.requests.get(identifier)

    if (!record || now > record.resetTime) {
      // First request or window expired
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + this.config.windowMs,
      })
      return true
    }

    if (record.count >= this.config.maxRequests) {
      return false
    }

    record.count++
    return true
  }

  getRemainingTime(identifier: string): number {
    const record = this.requests.get(identifier)
    if (!record) return 0
    return Math.max(0, record.resetTime - Date.now())
  }

  cleanup() {
    const now = Date.now()
    this.requests.forEach((record, key) => {
      if (now > record.resetTime) {
        this.requests.delete(key)
      }
    })
  }
}

// Create rate limiters for different endpoints
const authLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // 5 attempts per 15 minutes
  message: 'Too many authentication attempts. Please try again later.',
})

const apiLimiter = new RateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 100, // 100 requests per minute
  message: 'Too many requests. Please try again later.',
})

const leadLimiter = new RateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 3, // 3 lead submissions per hour
  message: 'Too many lead submissions. Please try again later.',
})

// Cleanup expired records every 5 minutes
setInterval(() => {
  authLimiter.cleanup()
  apiLimiter.cleanup()
  leadLimiter.cleanup()
}, 5 * 60 * 1000)

export function withRateLimit(
  handler: (req: NextRequest) => Promise<NextResponse>,
  limiter: RateLimiter = apiLimiter
) {
  return async (req: NextRequest) => {
    const identifier = await getClientIdentifier(req)
    
    if (!limiter.isAllowed(identifier)) {
      const remainingTime = limiter.getRemainingTime(identifier)
      return NextResponse.json(
        { 
          error: limiter.config.message || 'Rate limit exceeded',
          retryAfter: Math.ceil(remainingTime / 1000)
        },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil(remainingTime / 1000).toString(),
            'X-RateLimit-Limit': limiter.config.maxRequests.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(Date.now() + remainingTime).toISOString(),
          }
        }
      )
    }

    return handler(req)
  }
}

async function getClientIdentifier(req: NextRequest): Promise<string> {
  // Use IP address as primary identifier
  const ip = req.headers.get('x-forwarded-for') || 
             req.headers.get('x-real-ip') || 
             'unknown'
  
  // For authentication endpoints, also consider the email if available
  if (req.url.includes('/api/auth') || req.url.includes('/login')) {
    try {
      const body = await req.clone().json()
      const email = body?.email
      if (email) {
        return `${ip}:${email}`
      }
    } catch {
      // If we can't parse the body, just use IP
    }
  }
  
  return ip
}

export { authLimiter, apiLimiter, leadLimiter } 