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
    // Check if current date is Tuesday, August 13, 2025 (Eastern Time)
    const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })).toDateString();
    const targetDate = 'Tue Aug 13 2025';
    const isDiscountDay = today === targetDate;
    
    // Calculate amount (apply 50% discount if it's the target date)
    const baseAmount = 4900; // $49 in cents
    const amount = isDiscountDay ? Math.round(baseAmount * 0.5) : baseAmount;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      
      // 👇 Disable Link by only allowing 'card'
      payment_method_types: ['card'],
      
      metadata: {
        product: 'Start With Genie - LLC Setup',
        ...(isDiscountDay && { 
          discount_applied: 'H1VrFS1A_50_percent',
          original_amount: baseAmount.toString(),
          discount_date: today 
        }),
      },
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 
 
 
 
 
 
 
 
 
 
 
 
 
 
 