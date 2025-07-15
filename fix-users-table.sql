-- Fix users table by adding missing columns
-- Run this in your Supabase SQL editor

-- Add missing columns to users table
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS business_address TEXT,
ADD COLUMN IF NOT EXISTS partner_name TEXT,
ADD COLUMN IF NOT EXISTS ownership_primary TEXT,
ADD COLUMN IF NOT EXISTS ownership_partner TEXT;

-- Update existing rows to have default values for new columns
UPDATE users 
SET 
  business_address = COALESCE(business_address, 'Not specified'),
  ownership_primary = COALESCE(ownership_primary, '100'),
  ownership_partner = COALESCE(ownership_partner, '0')
WHERE business_address IS NULL OR ownership_primary IS NULL OR ownership_partner IS NULL;

-- Add constraints for ownership columns
ALTER TABLE users 
ADD CONSTRAINT check_ownership_primary CHECK (ownership_primary ~ '^[0-9]+$'),
ADD CONSTRAINT check_ownership_partner CHECK (ownership_partner ~ '^[0-9]+$');

-- Verify the table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'users' 
ORDER BY ordinal_position; 