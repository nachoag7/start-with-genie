import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '../../../lib/stripe';
import { z } from 'zod';
import { withCSRFProtection } from '../../../lib/csrf';

// Input validation schema for payment intent
const paymentIntentSchema = z.object({
  email: z.string().email('Please enter a valid email address').min(1).max(255),
});

async function handlePaymentIntent(req: NextRequest) {
  try {
    // Check if Stripe is properly initialized
    if (!stripe) {
      return NextResponse.json(
        { error: 'Payment service is not configured. Please contact support.' },
        { status: 500}
      );
    }

    const body = await req.json();
    
    // Validate input data
    const validation = paymentIntentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input data', details: validation.error.errors },
        { status: 400 }
      );
    }

    const { email } = validation.data;
    
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
    console.error('Payment intent error:', err);
    return NextResponse.json({ error: 'Payment processing failed' }, { status: 500 });
  }
}

export const POST = withCSRFProtection(handlePaymentIntent); 
 
 
 
 