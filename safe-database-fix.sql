-- Safe database fix - only adds what's missing
-- Run this in your Supabase SQL editor

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Add missing columns to users table (if they don't exist)
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

-- Create documents table if it doesn't exist
CREATE TABLE IF NOT EXISTS documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  doc_type TEXT NOT NULL,
  url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create support_messages table if it doesn't exist
CREATE TABLE IF NOT EXISTS support_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes (only if they don't exist)
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);

CREATE INDEX IF NOT EXISTS idx_documents_user_id ON documents(user_id);
CREATE INDEX IF NOT EXISTS idx_documents_doc_type ON documents(doc_type);
CREATE INDEX IF NOT EXISTS idx_documents_created_at ON documents(created_at);

CREATE INDEX IF NOT EXISTS idx_support_messages_email ON support_messages(email);
CREATE INDEX IF NOT EXISTS idx_support_messages_status ON support_messages(status);
CREATE INDEX IF NOT EXISTS idx_support_messages_created_at ON support_messages(created_at);

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_messages ENABLE ROW LEVEL SECURITY;

-- Create policies only if they don't exist (using DO block to handle errors)
DO $$
BEGIN
    -- Users table policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'users' AND policyname = 'Users can view own profile') THEN
        CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (auth.uid() = id);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'users' AND policyname = 'Users can update own profile') THEN
        CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid() = id);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'users' AND policyname = 'Users can insert own profile') THEN
        CREATE POLICY "Users can insert own profile" ON users FOR INSERT WITH CHECK (auth.uid() = id);
    END IF;
    
    -- Documents table policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'documents' AND policyname = 'Users can view own documents') THEN
        CREATE POLICY "Users can view own documents" ON documents FOR SELECT USING (auth.uid() = user_id);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'documents' AND policyname = 'Users can insert own documents') THEN
        CREATE POLICY "Users can insert own documents" ON documents FOR INSERT WITH CHECK (auth.uid() = user_id);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'documents' AND policyname = 'Users can update own documents') THEN
        CREATE POLICY "Users can update own documents" ON documents FOR UPDATE USING (auth.uid() = user_id);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'documents' AND policyname = 'Users can delete own documents') THEN
        CREATE POLICY "Users can delete own documents" ON documents FOR DELETE USING (auth.uid() = user_id);
    END IF;
    
    -- Support messages table policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'support_messages' AND policyname = 'Allow insert for authenticated users') THEN
        CREATE POLICY "Allow insert for authenticated users" ON support_messages FOR INSERT WITH CHECK (true);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'support_messages' AND policyname = 'Allow read for authenticated users') THEN
        CREATE POLICY "Allow read for authenticated users" ON support_messages FOR SELECT USING (true);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'support_messages' AND policyname = 'Allow update for authenticated users') THEN
        CREATE POLICY "Allow update for authenticated users" ON support_messages FOR UPDATE USING (true);
    END IF;
    
EXCEPTION
    WHEN OTHERS THEN
        -- If any policy creation fails, just continue
        NULL;
END $$;

-- Create or replace the update_updated_at_column function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers (only if they don't exist)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_users_updated_at') THEN
        CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_documents_updated_at') THEN
        CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON documents
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_support_messages_updated_at') THEN
        CREATE TRIGGER update_support_messages_updated_at BEFORE UPDATE ON support_messages
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END $$;

-- Verify the structure
SELECT 'Users table columns:' as info;
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'users' 
ORDER BY ordinal_position;

SELECT 'Tables created:' as info;
SELECT table_name 
FROM information_schema.tables 
WHERE table_name IN ('users', 'documents', 'support_messages')
  AND table_schema = 'public'; 
 
 
 
 