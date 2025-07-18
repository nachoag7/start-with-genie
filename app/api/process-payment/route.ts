import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Simulate a successful payment
    // In a real implementation, you would verify the payment with Stripe here
    // and create the user account in Supabase
    
    // For now, just return success
    return NextResponse.json({ 
      success: true,
      message: 'Payment processed successfully',
      userId: 'temp-user-id'
    });

  } catch (error: any) {
    console.error('Process payment error:', error);
    return NextResponse.json(
      { error: 'Payment processing failed' },
      { status: 500 }
    );
  }
} 