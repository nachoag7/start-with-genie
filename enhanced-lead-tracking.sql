-- Enhanced Lead Tracking for Better Paid vs Unpaid Separation

-- 1. Add payment tracking to leads table
ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS has_paid BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS payment_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS converted_to_user BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES users(id);

-- 2. Create indexes for better querying
CREATE INDEX IF NOT EXISTS idx_leads_has_paid ON leads(has_paid);
CREATE INDEX IF NOT EXISTS idx_leads_payment_date ON leads(payment_date);
CREATE INDEX IF NOT EXISTS idx_leads_converted ON leads(converted_to_user);

-- 3. Create a view for easy paid vs unpaid analysis
CREATE OR REPLACE VIEW lead_conversion_analysis AS
SELECT 
  'free_leads' as lead_type,
  COUNT(*) as count,
  COUNT(CASE WHEN has_paid = true THEN 1 END) as paid_count,
  COUNT(CASE WHEN has_paid = false THEN 1 END) as unpaid_count,
  ROUND(
    (COUNT(CASE WHEN has_paid = true THEN 1 END)::DECIMAL / COUNT(*)::DECIMAL) * 100, 2
  ) as conversion_rate
FROM leads
WHERE converted_to_user = false

UNION ALL

SELECT 
  'onboarded_users' as lead_type,
  COUNT(*) as count,
  COUNT(CASE WHEN has_paid = true THEN 1 END) as paid_count,
  COUNT(CASE WHEN has_paid = false THEN 1 END) as unpaid_count,
  ROUND(
    (COUNT(CASE WHEN has_paid = true THEN 1 END)::DECIMAL / COUNT(*)::DECIMAL) * 100, 2
  ) as conversion_rate
FROM users
WHERE status != 'deleted';

-- 4. Create a function to link leads to users when they convert
CREATE OR REPLACE FUNCTION link_lead_to_user(lead_email TEXT, user_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE leads 
  SET 
    converted_to_user = true,
    user_id = link_lead_to_user.user_id,
    has_paid = (SELECT has_paid FROM users WHERE id = link_lead_to_user.user_id),
    payment_date = (SELECT payment_date FROM users WHERE id = link_lead_to_user.user_id)
  WHERE email = lead_email;
END;
$$ LANGUAGE plpgsql;

-- 5. Create a comprehensive lead funnel view
CREATE OR REPLACE VIEW lead_funnel AS
WITH lead_stats AS (
  SELECT 
    COUNT(*) as total_leads,
    COUNT(CASE WHEN has_paid = true THEN 1 END) as paid_leads,
    COUNT(CASE WHEN converted_to_user = true THEN 1 END) as converted_leads
  FROM leads
),
user_stats AS (
  SELECT 
    COUNT(*) as total_users,
    COUNT(CASE WHEN has_paid = true THEN 1 END) as paid_users,
    COUNT(CASE WHEN has_paid = false THEN 1 END) as unpaid_users
  FROM users
  WHERE status != 'deleted'
)
SELECT 
  ls.total_leads,
  ls.paid_leads,
  ls.converted_leads,
  us.total_users,
  us.paid_users,
  us.unpaid_users,
  ROUND((ls.paid_leads::DECIMAL / ls.total_leads::DECIMAL) * 100, 2) as lead_to_paid_rate,
  ROUND((us.paid_users::DECIMAL / us.total_users::DECIMAL) * 100, 2) as user_to_paid_rate
FROM lead_stats ls, user_stats us; 