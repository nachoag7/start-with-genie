import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { withRateLimit, apiLimiter } from '../../../../lib/rate-limit';
import crypto from 'crypto';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Secure token comparison to prevent timing attacks
function secureTokenComparison(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

// Enhanced admin authentication check
function isAdmin(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const adminToken = process.env.ADMIN_API_TOKEN;
  
  if (!adminToken) {
    console.error('ADMIN_API_TOKEN not configured');
    return false;
  }
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  
  const providedToken = authHeader.substring(7); // Remove 'Bearer ' prefix
  return secureTokenComparison(providedToken, adminToken);
}

async function handleTestRequest(request: NextRequest) {
  // Check admin authentication
  if (!isAdmin(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  try {
    // Test database connection
    const { data, error } = await supabase
      .from('leads')
      .select('count')
      .limit(1);

    if (error) {
      console.error('Database connection error:', error);
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: 'ok',
      message: 'Leads API is working correctly',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const GET = withRateLimit(handleTestRequest, apiLimiter); 