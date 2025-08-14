-- Add payment status tracking to users table
-- Run this in your Supabase SQL editor

-- Add has_paid column to users table
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS has_paid BOOLEAN DEFAULT FALSE;

-- Add payment_date column to track when payment was made
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS payment_date TIMESTAMP WITH TIME ZONE;

-- Update existing users to have has_paid = false (they need to pay)
UPDATE users 
SET has_paid = FALSE 
WHERE has_paid IS NULL;

-- Create index for payment status queries
CREATE INDEX IF NOT EXISTS idx_users_has_paid ON users(has_paid);
CREATE INDEX IF NOT EXISTS idx_users_payment_date ON users(payment_date); 