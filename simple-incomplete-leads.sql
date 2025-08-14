-- Simple incomplete leads table (works with existing leads table)

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

-- 3. Create a function to move leads to incomplete
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

-- 4. Create a view for incomplete lead analysis
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

-- 5. Create a simple lead status overview (without enhanced leads table)
CREATE OR REPLACE VIEW simple_lead_status_overview AS
WITH incomplete_leads_summary AS (
  SELECT 
    'incomplete_' || lead_stage as status,
    COUNT(*) as count
  FROM incomplete_leads
  GROUP BY lead_stage
),
complete_leads_summary AS (
  SELECT 
    'complete_leads' as status,
    COUNT(*) as count
  FROM leads
)
SELECT * FROM incomplete_leads_summary
UNION ALL
SELECT * FROM complete_leads_summary
ORDER BY count DESC; 