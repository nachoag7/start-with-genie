import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Simple admin authentication check
function isAdmin(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const adminToken = process.env.ADMIN_API_TOKEN;
  
  if (!adminToken) {
    console.error('ADMIN_API_TOKEN not configured');
    return false;
  }
  
  return authHeader === `Bearer ${adminToken}`;
}

export async function GET(request: NextRequest) {
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
      return NextResponse.json(
        { error: 'Database connection failed', details: error.message },
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