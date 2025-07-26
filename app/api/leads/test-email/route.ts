import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Test email with improved template
    const { error: emailError } = await resend.emails.send({
      from: 'Start With Genie <hello@startwithgenie.com>',
      to: [email],
      subject: 'Test: Improved EIN Guide Email',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Test Email</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <tr>
                    <td style="padding: 40px 30px;">
                      <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #1f2937; font-size: 24px; font-weight: 600; margin-bottom: 10px; margin-top: 0;">
                          Test Email - Improved Template
                        </h1>
                        <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 0;">
                          This is a test of the improved email template with better deliverability.
                        </p>
                      </div>
                      
                      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                        <h2 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 15px; margin-top: 0;">
                          Improvements Made:
                        </h2>
                        <ul style="color: #374151; line-height: 1.6; padding-left: 20px; margin: 0;">
                          <li>Proper HTML structure with DOCTYPE</li>
                          <li>Table-based layout for email clients</li>
                          <li>Plain text version included</li>
                          <li>Better sender address</li>
                          <li>Responsive design</li>
                        </ul>
                      </div>
                      
                      <div style="text-align: center; margin-bottom: 30px;">
                        <a href="https://www.startwithgenie.com" 
                           style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 16px;">
                          Visit Start With Genie
                        </a>
                      </div>
                      
                      <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
                        <p style="color: #6b7280; font-size: 14px; text-align: center; margin: 0;">
                          This email should now have better deliverability and land in your inbox instead of spam.
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
      text: `Test Email - Improved Template

This is a test of the improved email template with better deliverability.

Improvements Made:
• Proper HTML structure with DOCTYPE
• Table-based layout for email clients
• Plain text version included
• Better sender address
• Responsive design

Visit Start With Genie: https://www.startwithgenie.com

This email should now have better deliverability and land in your inbox instead of spam.

Best regards,
The Start With Genie Team`,
    });

    if (emailError) {
      console.error('Test email error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send test email', details: emailError },
        { status: 500 }
      );
    }

    console.log(`Test email sent successfully to ${email}`);
    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent with improved template' 
    });
  } catch (error) {
    console.error('Test email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 