import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    // Get lead conversion analysis
    const { data: conversionData, error: conversionError } = await supabase
      .from('lead_conversion_analysis')
      .select('*');

    if (conversionError) {
      console.error('Error fetching conversion data:', conversionError);
    }

    // Get lead funnel data
    const { data: funnelData, error: funnelError } = await supabase
      .from('lead_funnel')
      .select('*')
      .single();

    if (funnelError) {
      console.error('Error fetching funnel data:', funnelError);
    }

    // Get recent leads with payment status
    const { data: recentLeads, error: leadsError } = await supabase
      .from('leads')
      .select(`
        id,
        email,
        source_page,
        type,
        has_paid,
        payment_date,
        converted_to_user,
        created_at
      `)
      .order('created_at', { ascending: false })
      .limit(50);

    if (leadsError) {
      console.error('Error fetching recent leads:', leadsError);
    }

    // Get recent users with payment status
    const { data: recentUsers, error: usersError } = await supabase
      .from('users')
      .select(`
        id,
        email,
        full_name,
        business_name,
        has_paid,
        payment_date,
        status,
        created_at
      `)
      .order('created_at', { ascending: false })
      .limit(50);

    if (usersError) {
      console.error('Error fetching recent users:', usersError);
    }

    // Get incomplete leads analysis
    const { data: incompleteAnalysis, error: incompleteError } = await supabase
      .from('incomplete_leads_analysis')
      .select('*');

    if (incompleteError) {
      console.error('Error fetching incomplete leads analysis:', incompleteError);
    }

    // Get lead status overview (using simple view)
    const { data: statusOverview, error: statusError } = await supabase
      .from('simple_lead_status_overview')
      .select('*');

    if (statusError) {
      console.error('Error fetching lead status overview:', statusError);
    }

    return NextResponse.json({
      success: true,
      data: {
        conversion_analysis: conversionData || [],
        funnel_data: funnelData || {},
        recent_leads: recentLeads || [],
        recent_users: recentUsers || [],
        incomplete_leads_analysis: incompleteAnalysis || [],
        lead_status_overview: statusOverview || [],
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
} 