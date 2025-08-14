import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET: Fetch incomplete leads
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const stage = searchParams.get('stage');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = supabase
      .from('incomplete_leads')
      .select('*')
      .order('last_activity', { ascending: false })
      .range(offset, offset + limit - 1);

    if (stage) {
      query = query.eq('lead_stage', stage);
    }

    const { data: incompleteLeads, error } = await query;

    if (error) {
      console.error('Error fetching incomplete leads:', error);
      return NextResponse.json(
        { error: 'Failed to fetch incomplete leads' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: incompleteLeads,
      pagination: {
        limit,
        offset,
        has_more: incompleteLeads.length === limit
      }
    });

  } catch (error) {
    console.error('Incomplete leads API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST: Update incomplete lead stage
export async function POST(request: NextRequest) {
  try {
    const { email, stage, notes, tags } = await request.json();

    if (!email || !stage) {
      return NextResponse.json(
        { error: 'Email and stage are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('incomplete_leads')
      .update({
        lead_stage: stage,
        notes: notes || null,
        tags: tags || null,
        last_activity: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('email', email)
      .select()
      .single();

    if (error) {
      console.error('Error updating incomplete lead:', error);
      return NextResponse.json(
        { error: 'Failed to update incomplete lead' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data
    });

  } catch (error) {
    console.error('Update incomplete lead error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE: Remove incomplete lead
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('incomplete_leads')
      .delete()
      .eq('email', email);

    if (error) {
      console.error('Error deleting incomplete lead:', error);
      return NextResponse.json(
        { error: 'Failed to delete incomplete lead' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Incomplete lead deleted successfully'
    });

  } catch (error) {
    console.error('Delete incomplete lead error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 