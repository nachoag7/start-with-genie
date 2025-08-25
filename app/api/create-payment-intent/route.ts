import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '../../../lib/supabase';
import { z } from 'zod';
import { withCSRFProtection } from '../../../lib/csrf';

// Input validation schema for payment intent creation
const createPaymentIntentSchema = z.object({
  email: z.string().email('Please enter a valid email address').min(1).max(255).optional(),
});

// Check if Stripe secret key exists
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('STRIPE_SECRET_KEY not found in environment variables');
}

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

async function handleCreatePaymentIntent(req: NextRequest) {
  // Return error if Stripe is not configured
  if (!stripe) {
    return NextResponse.json({ 
      error: 'Payment service is not configured. Please contact support.' 
    }, { status: 500 });
  }

  try {
    const body = await req.json();
    
    // Validate input data
    const validation = createPaymentIntentSchema.safeParse(body);
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
      // Enable Stripe Link + wallets automatically for frictionless experience
      automatic_payment_methods: { enabled: true },
      metadata: {
        product: 'Start With Genie - LLC Setup',
        ...(email && { customer_email: email }),
        ...(isDiscountDay && { 
          discount_applied: 'H1VrFS1A_50_percent',
          original_amount: baseAmount.toString(),
          discount_date: today 
        }),
      },
    });
    
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    console.error('Payment intent creation error:', err);
    return NextResponse.json({ error: 'Payment processing failed' }, { status: 500 });
  }
}

export const POST = withCSRFProtection(handleCreatePaymentIntent); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 