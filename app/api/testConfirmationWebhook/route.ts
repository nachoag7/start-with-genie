import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_HTML = `
<html>
  <body style="background-color: #f7f8f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111827; padding: 40px;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 14px rgba(0,0,0,0.05);">
      <div style="text-align: center;">
        <img src="https://startwithgenie.com/genie-og.png" alt="Genie Logo" width="80" style="margin-bottom: 24px;" />
        <h1 style="font-size: 24px; margin-bottom: 12px; color: #111827;">Welcome to Start With Genie</h1>
        <p style="font-size: 16px; margin-bottom: 24px;">You’re all set — your personalized LLC setup dashboard is ready.<br />Whenever you want to return, just log in using the same email and password you used during sign-up.</p>
        <a href="https://www.startwithgenie.com/login" style="background-color: #2563eb; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; display: inline-block; font-weight: 600; margin-bottom: 24px;">Log In</a>
      </div>
      <ul style="font-size: 16px; color: #111827; margin: 32px 0 24px 0; padding: 0 0 0 24px; text-align: left; line-height: 1.7;">
        <li>State-specific LLC instructions</li>
        <li>EIN guide</li>
        <li>Operating Agreement</li>
        <li>Launch checklist</li>
        <li>Genie assistant for help</li>
      </ul>
      <hr style="margin: 40px 0; border: none; border-top: 1px solid #e5e7eb;" />
      <p style="font-size: 14px; color: #6b7280; text-align: center;">Questions? Just reply to this email or reach us at <a href="mailto:info@startwithgenie.com">info@startwithgenie.com</a></p>
    </div>
  </body>
</html>
`;

export async function POST(req: NextRequest) {
  try {
    const result = await resend.emails.send({
      from: 'Start With Genie <info@startwithgenie.com>',
      to: 'startwithgenie@gmail.com',
      subject: 'Your LLC setup is ready',
      html: EMAIL_HTML,
    });
    console.log('Resend result:', result);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
} 