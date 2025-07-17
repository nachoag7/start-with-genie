import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

// Client-side Stripe instance
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder'
);

// Server-side Stripe instance - only create if secret key exists
export const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

export const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID || 'price_1OqXqXqXqXqXqXqXqXqXqXqX'; 
 
 
 
 