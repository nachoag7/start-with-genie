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
      receipt_email: email,
      description: 'Start With Genie LLC Formation',
      metadata: { 
        product: 'llc_formation',
        ...(isDiscountDay && { 
          discount_applied: 'H1VrFS1A_50_percent',
          original_amount: baseAmount.toString(),
          discount_date: today 
        }),
      },
      automatic_payment_methods: { enabled: true },
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
} 
 
 
 
 