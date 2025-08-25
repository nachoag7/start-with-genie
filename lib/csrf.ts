import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// CSRF token generation
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

// CSRF token validation
export function validateCSRFToken(token: string, storedToken: string): boolean {
  if (!token || !storedToken) {
    return false;
  }
  return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(storedToken));
}

// CSRF middleware for API routes
export function withCSRFProtection(
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  return async (req: NextRequest): Promise<NextResponse> => {
    // Only apply CSRF protection to state-changing methods
    if (req.method === 'GET' || req.method === 'HEAD') {
      return handler(req);
    }

    const csrfToken = req.headers.get('x-csrf-token');
    const sessionToken = req.cookies.get('csrf-token')?.value;

    if (!csrfToken || !sessionToken) {
      return NextResponse.json(
        { error: 'CSRF token missing' },
        { status: 403 }
      );
    }

    if (!validateCSRFToken(csrfToken, sessionToken)) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }

    return handler(req);
  };
}

// Set CSRF token in response
export function setCSRFToken(response: NextResponse): NextResponse {
  const token = generateCSRFToken();
  response.cookies.set('csrf-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600, // 1 hour
  });
  return response;
} 