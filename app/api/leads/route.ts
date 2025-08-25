import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { withRateLimit, leadLimiter } from '../../../lib/rate-limit';
import { validateAndSanitize, leadSchema } from '../../../lib/validation';
import { withCSRFProtection } from '../../../lib/csrf';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

async function handleLeadSubmission(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validation = validateAndSanitize(leadSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }
    
    const { email, sourcePage, type } = validation.data;
    
    console.log(`Lead submission received: ${email} from ${sourcePage} (type: ${type})`);

    // Check if email already exists (rate limiting)
    const { data: existingLead } = await supabase
      .from('leads')
      .select('id')
      .eq('email', email)
      .eq('type', type || 'ein_guide')
      .single();

    if (existingLead) {
      return NextResponse.json(
        { error: 'Email already submitted' },
        { status: 409 }
      );
    }

    // Save to Supabase incomplete_leads table (they haven't completed the process yet)
    const { error: supabaseError } = await supabase.rpc('move_lead_to_incomplete', {
      lead_email: email,
      source_page: sourcePage,
      lead_type: type || 'ein_guide',
      stage: 'email_capture'
    });

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
        from: 'Start With Genie <hello@startwithgenie.com>',
        to: [email],
        subject: 'Your Updated EIN Guide - Fresh Download Link',
        replyTo: 'hello@startwithgenie.com',
        headers: {
          'List-Unsubscribe': '<mailto:unsubscribe@startwithgenie.com>',
          'X-Priority': '1',
          'X-MSMail-Priority': 'High',
          'Importance': 'High',
          'X-Mailer': 'Start With Genie',
          'Precedence': 'bulk',
          'X-Auto-Response-Suppress': 'OOF, AutoReply',
        },
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="color-scheme" content="light">
            <meta name="supported-color-schemes" content="light">
            <title>Your EIN Guide is Ready</title>
            <style>
              @media only screen and (max-width: 600px) {
                .email-container { width: 100% !important; }
                .email-content { padding: 20px !important; }
              }
            </style>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <tr>
                      <td style="padding: 40px 30px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                          <h1 style="color: #1f2937; font-size: 24px; font-weight: 600; margin-bottom: 10px; margin-top: 0;">
                            Your EIN Guide is Ready
                          </h1>
                          <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 0;">
                            Hi there! Your requested EIN guide is ready for download.<br />
                            This guide will help you get your federal tax ID quickly and correctly.
                          </p>
                        </div>
                        
                        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                          <h2 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 15px; margin-top: 0;">
                            What's in your premium guide:
                          </h2>
                          <ul style="color: #374151; line-height: 1.6; padding-left: 20px; margin: 0;">
                            <li>Step-by-step EIN application process</li>
                            <li>Pre-application checklist</li>
                            <li>Common mistakes to avoid</li>
                            <li>What to do after getting your EIN</li>
                            <li>IRS hours and official resources</li>
                          </ul>
                        </div>
                        
                        <div style="text-align: center; margin-bottom: 30px;">
                          <a href="https://www.startwithgenie.com/ein-guide-premium" 
                             style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 16px;">
                            View My EIN Guide
                          </a>
                        </div>
                        
                        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
                          <p style="color: #6b7280; font-size: 14px; text-align: center; margin: 0;">
                            Ready to form your LLC? 
                            <a href="https://www.startwithgenie.com" style="color: #2563eb; text-decoration: none;">
                              Start With Genie
                            </a> 
                            makes it simple and fast for just $49.
                          </p>
                          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin: 10px 0 0 0;">
                            You received this email because you requested our free EIN guide. 
                            <a href="mailto:unsubscribe@startwithgenie.com" style="color: #9ca3af; text-decoration: none;">Unsubscribe</a>
                          </p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
        text: `Your EIN Guide is Ready

Hi there! Your requested EIN guide is ready for download.
This guide will help you get your federal tax ID quickly and correctly.

What's in your premium guide:
• Step-by-step EIN application process
• Pre-application checklist
• Common mistakes to avoid
• What to do after getting your EIN
• IRS hours and official resources

View My EIN Guide: https://www.startwithgenie.com/ein-guide-premium

Ready to form your LLC? Start With Genie makes it simple and fast for just $49.

---
You received this email because you requested our free EIN guide.
To unsubscribe, reply with "UNSUBSCRIBE" in the subject line.

Best regards,
The Start With Genie Team`,
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Log the error but don't fail the request
        // The lead is still saved in the database
      } else {
        console.log(`EIN guide email sent successfully to ${email}`);
      }
    }

    console.log(`Lead saved successfully: ${email}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const POST = withCSRFProtection(withRateLimit(handleLeadSubmission, leadLimiter)); 