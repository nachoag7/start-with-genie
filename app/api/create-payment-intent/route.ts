import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
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
 
 
 
 
 
 
 
 
 
 
 
 