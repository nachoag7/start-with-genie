import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const resendApiKey = process.env.RESEND_API_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
}

const supabase = supabaseUrl && supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null

const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, message } = await request.json()

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if Supabase is configured
    if (!supabase) {
      console.error('Supabase not configured')
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      )
    }

    // Log the support message to database
    const { error: dbError } = await supabase
      .from('support_messages')
      .insert([
        {
          full_name: fullName,
          email: email,
          message: message,
          status: 'new'
        }
      ])

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      )
    }

    // Send email notification to support team
    if (resend) {
      try {
        await resend.emails.send({
          from: 'Start With Genie <noreply@startwithgenie.com>',
          to: 'info@startwithgenie.com',
          subject: 'New Support Message from Start With Genie',
          html: `<h2>New Support Message</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>`
        })
      } catch (emailError) {
        console.error('Failed to send support email:', emailError)
        return NextResponse.json(
          { error: 'Failed to send email. Please try emailing info@startwithgenie.com directly.' },
          { status: 500 }
        )
      }
    } else {
      console.error('Resend not configured (missing RESEND_API_KEY)')
      return NextResponse.json(
        { error: 'Email service not configured. Please try emailing info@startwithgenie.com directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact support error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 