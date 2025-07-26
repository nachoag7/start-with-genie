-- Create leads table for EIN guide email submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  source_page TEXT NOT NULL,
  type TEXT DEFAULT 'ein_guide',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_source_page ON leads(source_page);
CREATE INDEX IF NOT EXISTS idx_leads_email_type ON leads(email, type);

-- Add RLS (Row Level Security) policies if needed
-- ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Insert a test record (optional)
-- INSERT INTO leads (email, source_page, type) VALUES ('test@example.com', '/test', 'ein_guide'); 