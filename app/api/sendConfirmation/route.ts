import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import Stripe from 'stripe';
import { supabase } from '../../../lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_HTML = `
<html>
  <body style="background-color: #f7f8f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111827; padding: 40px;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 14px rgba(0,0,0,0.05);">
      <div style="text-align: center;">
        <img src="https://startwithgenie.com/genie-og.png" alt="Genie Logo" width="80" style="margin-bottom: 24px;" />
        <h1 style="font-size: 24px; margin-bottom: 12px;">Welcome to Start With Genie</h1>
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
  const sig = req.headers.get('stripe-signature');
  const buf = await req.arrayBuffer();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(Buffer.from(buf), sig!, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    const customerEmail = paymentIntent.receipt_email;
    
    if (customerEmail) {
      try {
        // Find user by email
        let { data: user, error: userError } = await supabase
          .from('users')
          .select('id, full_name, business_name')
          .eq('email', customerEmail)
          .single();
        
        let userId = user?.id;
        
        if (!user || userError) {
          // User doesn't exist, create a basic user record
          const { data: newUser, error: createError } = await supabase
            .from('users')
            .insert({
              email: customerEmail,
              full_name: 'LLC Owner', // Default name
              business_name: 'My Business', // Default business name
              state: 'CA', // Default state
              status: 'active',
              has_paid: true,
              payment_date: new Date().toISOString(),
              business_address: 'Not specified',
              is_solo_owner: 'yes',
              ownership_primary: '100',
              ownership_partner: '0',
              checklist_status: [false, false, false]
            })
            .select('id')
            .single();
          
          if (createError) {
            console.error('Error creating user:', createError);
          } else {
            userId = newUser?.id;
          }
        } else {
          // User exists, mark as paid
          const { error: updateError } = await supabase
            .from('users')
            .update({ 
              has_paid: true, 
              payment_date: new Date().toISOString() 
            })
            .eq('id', user.id);
          
          if (updateError) {
            console.error('Error updating user payment status:', updateError);
          }
        }
        
        // Link any existing leads to this user
        if (userId) {
          const { error: linkError } = await supabase.rpc('link_lead_to_user', {
            lead_email: customerEmail,
            user_id: userId
          });
          
          if (linkError) {
            console.error('Error linking lead to user:', linkError);
          }
        }
        
        // Send magic link for passwordless login
        if (userId) {
          const { error: magicLinkError } = await supabase.auth.admin.generateLink({
            type: 'magiclink',
            email: customerEmail,
            options: {
              redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://startwithgenie.com'}/dashboard?payment_success=true`
            }
          });
          
          if (magicLinkError) {
            console.error('Error generating magic link:', magicLinkError);
          }
        }
        
        // Send confirmation email
        await resend.emails.send({
          from: 'Start With Genie <info@startwithgenie.com>',
          to: customerEmail,
          subject: 'Your LLC setup is ready',
          html: EMAIL_HTML,
        });
      } catch (emailErr) {
        console.error('Failed to send confirmation email:', emailErr);
      }
    }
  }

  return NextResponse.json({ received: true });
} 