# Payment Gateway Implementation

This implementation adds a blurred dashboard with unlock CTA for unpaid users. When they pay $49, the dashboard becomes fully accessible.

## Database Changes

Run the SQL migration to add payment tracking:

```sql
-- Run in Supabase SQL editor
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS has_paid BOOLEAN DEFAULT FALSE;

ALTER TABLE users 
ADD COLUMN IF NOT EXISTS payment_date TIMESTAMP WITH TIME ZONE;

UPDATE users 
SET has_paid = FALSE 
WHERE has_paid IS NULL;

CREATE INDEX IF NOT EXISTS idx_users_has_paid ON users(has_paid);
CREATE INDEX IF NOT EXISTS idx_users_payment_date ON users(payment_date);
```

## How It Works

1. **User Registration**: New users are created with `has_paid = false`
2. **Dashboard Access**: Unpaid users see a blurred dashboard with unlock overlay
3. **Payment Flow**: 
   - User clicks "Unlock Dashboard" 
   - Creates payment intent with user ID in metadata
   - Redirects to Stripe checkout
   - After payment, webhook marks user as paid
   - User is redirected back to dashboard (now unlocked)

## Key Components

### BlurredDashboardOverlay
- Shows blurred dashboard content in background
- Displays unlock CTA with features list
- Handles payment initiation

### Payment Intent API
- Creates Stripe payment intent
- Includes user ID in metadata for webhook processing
- Handles authentication

### Webhook Handler
- Listens for `payment_intent.succeeded` events
- Updates user's `has_paid` status in database
- Sends confirmation email

### Dashboard Logic
- Checks `user.has_paid` status
- Shows blurred overlay for unpaid users
- Refreshes data after successful payment

## Environment Variables Required

```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## Testing

1. Create a new user account
2. Visit `/dashboard` - should see blurred overlay
3. Click "Unlock Dashboard" - redirects to checkout
4. Complete test payment
5. Should redirect back to dashboard (now unlocked)

## Security Notes

- Payment intents include user ID in metadata for webhook verification
- Webhook validates Stripe signature
- User authentication required for payment intent creation
- Database updates only happen via webhook (not client-side) 