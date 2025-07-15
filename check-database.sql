-- Check current database structure
-- Run this in your Supabase SQL editor to see what's missing

-- Check if tables exist
SELECT 
  table_name,
  CASE WHEN table_name IS NOT NULL THEN 'EXISTS' ELSE 'MISSING' END as status
FROM information_schema.tables 
WHERE table_name IN ('users', 'documents', 'support_messages')
  AND table_schema = 'public';

-- Check users table structure
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'users' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check documents table structure
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'documents' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check support_messages table structure
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'support_messages' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check if indexes exist
SELECT 
  indexname,
  tablename
FROM pg_indexes 
WHERE tablename IN ('users', 'documents', 'support_messages')
  AND schemaname = 'public'; 