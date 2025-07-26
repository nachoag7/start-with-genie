const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function setupLeadsTable() {
  try {
    console.log('Setting up leads table...');

    // Create the leads table
    const { error: createTableError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS leads (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          email TEXT NOT NULL,
          source_page TEXT NOT NULL,
          type TEXT DEFAULT 'ein_guide',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `
    });

    if (createTableError) {
      console.error('Error creating table:', createTableError);
      return;
    }

    // Create indexes
    const { error: indexError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
        CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
        CREATE INDEX IF NOT EXISTS idx_leads_source_page ON leads(source_page);
      `
    });

    if (indexError) {
      console.error('Error creating indexes:', indexError);
      return;
    }

    console.log('✅ Leads table setup complete!');
    console.log('Table structure:');
    console.log('- id: UUID (primary key)');
    console.log('- email: TEXT (required)');
    console.log('- source_page: TEXT (required)');
    console.log('- type: TEXT (default: ein_guide)');
    console.log('- created_at: TIMESTAMP');
    console.log('- updated_at: TIMESTAMP');

  } catch (error) {
    console.error('Setup failed:', error);
  }
}

// Run the setup
setupLeadsTable(); 