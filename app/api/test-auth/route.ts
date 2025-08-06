import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ 
        success: false, 
        error: 'Email and password are required'
      }, { status: 400 })
    }

    // Test Supabase auth sign in
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      console.error('Authentication error:', error)
      return NextResponse.json({ 
        success: false, 
        error: error.message,
        code: error.status
      }, { status: 400 })
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Authentication successful',
      user: data.user ? { id: data.user.id, email: data.user.email } : null
    })
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 