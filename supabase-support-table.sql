-- Create support_messages table for contact form submissions
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS support_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_support_messages_email ON support_messages(email);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_support_messages_status ON support_messages(status);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_support_messages_created_at ON support_messages(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE support_messages ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting new messages (for the API)
CREATE POLICY "Allow insert for authenticated users" ON support_messages
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows reading messages (for admin dashboard - optional)
-- You can modify this based on your admin requirements
CREATE POLICY "Allow read for authenticated users" ON support_messages
  FOR SELECT USING (true);

-- Create a policy that allows updating messages (for admin dashboard - optional)
CREATE POLICY "Allow update for authenticated users" ON support_messages
  FOR UPDATE USING (true);

-- Add a comment to describe the table
COMMENT ON TABLE support_messages IS 'Stores contact form submissions from the support modal'; 
 
 
 
 