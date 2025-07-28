import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Validate that required environment variables are present
if (!supabaseUrl || supabaseUrl === 'your_supabase_url_here') {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is required. Please add your Supabase URL to .env.local')
}

if (!supabaseAnonKey || supabaseAnonKey === 'your_supabase_anon_key_here') {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is required. Please add your Supabase anon key to .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          full_name: string
          email: string
          business_name: string
          state: string
          status: string
          business_address: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          full_name: string
          email: string
          business_name: string
          state: string
          status?: string
          business_address: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          email?: string
          business_name?: string
          state?: string
          status?: string
          business_address?: string
          created_at?: string
          updated_at?: string
        }
      }
      documents: {
        Row: {
          id: string
          user_id: string
          doc_type: string
          url: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          doc_type: string
          url: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          doc_type?: string
          url?: string
          created_at?: string
        }
      }
    }
  }
} 