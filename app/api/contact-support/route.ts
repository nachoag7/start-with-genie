import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { withRateLimit } from '../../../lib/rate-limit';
import { validateAndSanitize, contactSchema, sanitizeHtml } from '../../../lib/validation';

async function handleContactSupport(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate input
    const validation = validateAndSanitize(contactSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;
    
    // Sanitize message content
    const sanitizedMessage = sanitizeHtml(message);

    // Store in Supabase
    const { data: supabaseData, error: supabaseError } = await supabase
      .from('support_messages')
      .insert([
        {
          full_name: name,
          email,
          message: `Subject: ${subject}\n\n${sanitizedMessage}`,
          status: 'new',
        },
      ])
      .select();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      );
    }

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Start With Genie <noreply@startwithgenie.com>',
        to: 'info@startwithgenie.com',
        subject: `Contact Support: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">New Contact Support Message</h2>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #374151; margin-top: 0;">Message Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
                ${sanitizedMessage.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; border: 1px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>Note:</strong> This message was sent from the Start With Genie contact form.
                Please respond to the user at: ${email}
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Resend API error:', emailResponse.status, errorText);
      
      // Even if email fails, we still saved to Supabase, so return success
      // but log the email failure
      return NextResponse.json(
        { 
          message: 'Message received! We\'ll get back to you soon.',
          warning: 'Message saved but email delivery failed'
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully! We\'ll get back to you soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact support API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const POST = withRateLimit(handleContactSupport); 
 
 
 
 