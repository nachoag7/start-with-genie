import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Check if Stripe secret key exists
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('STRIPE_SECRET_KEY not found in environment variables');
}

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

export async function POST(req: NextRequest) {
  // Return error if Stripe is not configured
  if (!stripe) {
    return NextResponse.json({ 
      error: 'Stripe is not configured. Please set STRIPE_SECRET_KEY in your environment variables.' 
    }, { status: 500 });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 4900, // $49 in cents
      currency: 'usd',
      
      // 👇 Disable Link by only allowing 'card'
      payment_method_types: ['card'],
      
      metadata: {
        product: 'Start With Genie - LLC Setup',
      },
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 
 
 
 
 
 
 
 
 
 
 
 
 
 
 