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
    // Get recent leads (last 50)
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch leads', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      leads: data,
      count: data?.length || 0,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Admin endpoint error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 