import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '../../../lib/stripe';

export async function POST(req: NextRequest) {
  try {
    // Check if Stripe is properly initialized
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please add your Stripe keys to .env.local' },
        { status: 500}
      );
    }

    const { email } = await req.json();
    // $49 in cents
    const amount = 4900;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      receipt_email: email,
      description: 'Start With Genie LLC Formation',
      metadata: { product: 'llc_formation' },
      automatic_payment_methods: { enabled: true },
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
} 
 
 
 
 