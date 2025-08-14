-- Separate table for leads that didn't complete the process

-- 0. Add missing columns to existing leads table (if they don't exist)
ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS has_paid BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS payment_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS converted_to_user BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES users(id);

-- 1. Create incomplete_leads table
CREATE TABLE IF NOT EXISTS incomplete_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  source_page TEXT NOT NULL,
  type TEXT DEFAULT 'ein_guide',
  lead_stage TEXT DEFAULT 'email_capture', -- email_capture, onboarding_started, payment_attempted
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notes TEXT,
  tags TEXT[]
);

-- 2. Create indexes for incomplete leads
CREATE INDEX IF NOT EXISTS idx_incomplete_leads_email ON incomplete_leads(email);
CREATE INDEX IF NOT EXISTS idx_incomplete_leads_stage ON incomplete_leads(lead_stage);
CREATE INDEX IF NOT EXISTS idx_incomplete_leads_created_at ON incomplete_leads(created_at);
CREATE INDEX IF NOT EXISTS idx_incomplete_leads_last_activity ON incomplete_leads(last_activity);

-- 3. Create a function to move leads between tables
CREATE OR REPLACE FUNCTION move_lead_to_complete(lead_email TEXT, user_id UUID)
RETURNS VOID AS $$
BEGIN
  -- Move from incomplete_leads to leads table
  INSERT INTO leads (email, source_page, type, has_paid, payment_date, converted_to_user, user_id, created_at)
  SELECT 
    email, 
    source_page, 
    type, 
    true, -- has_paid = true since they completed
    NOW(), -- payment_date
    true, -- converted_to_user = true
    move_lead_to_complete.user_id,
    created_at
  FROM incomplete_leads 
  WHERE email = lead_email;
  
  -- Delete from incomplete_leads
  DELETE FROM incomplete_leads WHERE email = lead_email;
END;
$$ LANGUAGE plpgsql;

-- 4. Create a function to move leads to incomplete
CREATE OR REPLACE FUNCTION move_lead_to_incomplete(lead_email TEXT, source_page TEXT, lead_type TEXT DEFAULT 'ein_guide', stage TEXT DEFAULT 'email_capture')
RETURNS VOID AS $$
BEGIN
  -- Check if lead already exists in incomplete_leads
  IF NOT EXISTS (SELECT 1 FROM incomplete_leads WHERE email = lead_email) THEN
    INSERT INTO incomplete_leads (email, source_page, type, lead_stage)
    VALUES (lead_email, source_page, lead_type, stage);
  ELSE
    -- Update existing incomplete lead
    UPDATE incomplete_leads 
    SET 
      lead_stage = stage,
      last_activity = NOW(),
      updated_at = NOW()
    WHERE email = lead_email;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- 5. Create a view for incomplete lead analysis
CREATE OR REPLACE VIEW incomplete_leads_analysis AS
SELECT 
  lead_stage,
  COUNT(*) as count,
  COUNT(CASE WHEN last_activity > NOW() - INTERVAL '7 days' THEN 1 END) as active_last_7_days,
  COUNT(CASE WHEN last_activity > NOW() - INTERVAL '30 days' THEN 1 END) as active_last_30_days,
  ROUND(AVG(EXTRACT(EPOCH FROM (NOW() - created_at))/86400), 1) as avg_days_since_created
FROM incomplete_leads
GROUP BY lead_stage
ORDER BY count DESC;

-- 6. Create a comprehensive lead status view
CREATE OR REPLACE VIEW lead_status_overview AS
WITH complete_leads AS (
  SELECT 
    'complete_paid' as status,
    COUNT(*) as count
  FROM leads 
  WHERE has_paid = true
  
  UNION ALL
  
  SELECT 
    'complete_unpaid' as status,
    COUNT(*) as count
  FROM leads 
  WHERE has_paid = false
),
incomplete_leads_summary AS (
  SELECT 
    'incomplete_' || lead_stage as status,
    COUNT(*) as count
  FROM incomplete_leads
  GROUP BY lead_stage
)
SELECT * FROM complete_leads
UNION ALL
SELECT * FROM incomplete_leads_summary
ORDER BY count DESC;

-- 7. Add trigger to automatically update incomplete leads when users complete onboarding
CREATE OR REPLACE FUNCTION check_incomplete_leads_on_user_creation()
RETURNS TRIGGER AS $$
BEGIN
  -- If a user is created, check if they were in incomplete_leads
  IF EXISTS (SELECT 1 FROM incomplete_leads WHERE email = NEW.email) THEN
    -- Move them to complete leads table
    PERFORM move_lead_to_complete(NEW.email, NEW.id);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger
DROP TRIGGER IF EXISTS trigger_check_incomplete_leads ON users;
CREATE TRIGGER trigger_check_incomplete_leads
  AFTER INSERT ON users
  FOR EACH ROW
  EXECUTE FUNCTION check_incomplete_leads_on_user_creation(); 