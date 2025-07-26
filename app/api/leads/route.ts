import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, sourcePage, type } = await request.json();

    if (!email || !sourcePage) {
      return NextResponse.json(
        { error: 'Email and sourcePage are required' },
        { status: 400 }
      );
    }

    // Save to Supabase leads table
    const { error: supabaseError } = await supabase
      .from('leads')
      .insert([
        {
          email,
          source_page: sourcePage,
          type: type || 'ein_guide',
          created_at: new Date().toISOString(),
        }
      ]);

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      );
    }

    // Send EIN guide email
    if (type === 'ein_guide') {
      const { error: emailError } = await resend.emails.send({
        from: 'Start With Genie <noreply@startwithgenie.com>',
        to: [email],
        subject: 'Your Free EIN Guide is Here 📄',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1f2937; font-size: 24px; font-weight: 600; margin-bottom: 10px;">
                Your EIN Guide is Ready! 📄
              </h1>
              <p style="color: #6b7280; font-size: 16px; line-height: 1.5;">
                Thanks for requesting your free EIN guide. Here's everything you need to get your federal tax ID.
              </p>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
              <h2 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 15px;">
                What's in your guide:
              </h2>
              <ul style="color: #374151; line-height: 1.6; padding-left: 20px;">
                <li>Step-by-step instructions for getting your EIN</li>
                <li>Common mistakes to avoid</li>
                <li>What to do after you get your EIN</li>
                <li>Links to official IRS resources</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-bottom: 30px;">
              <a href="https://www.startwithgenie.com/pdfs/ein-guide.pdf" 
                 style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500;">
                📥 Download Your EIN Guide
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 14px; text-align: center;">
                Need help with your LLC setup? 
                <a href="https://www.startwithgenie.com" style="color: #2563eb; text-decoration: none;">
                  Start With Genie
                </a> 
                gives you everything you need for just $49.
              </p>
            </div>
          </div>
        `,
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't fail the request if email fails, just log it
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 