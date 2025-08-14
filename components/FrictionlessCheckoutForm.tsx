'use client'

import React, { useState, FormEvent } from 'react'
import {
  PaymentElement,
  LinkAuthenticationElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import PremiumButton from './ui/PremiumButton'

export default function FrictionlessCheckoutForm({ 
  onSuccess 
}: { 
  onSuccess: () => void 
}) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    })

    if (error) {
      console.error('Payment error:', error)
      setLoading(false)
    } else {
      // Payment succeeded, call onSuccess
      onSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email field with Link authentication - hidden label */}
      <div>
        <LinkAuthenticationElement
          options={{
            defaultValues: {
              email: email,
            },
          }}
          onChange={(e) => setEmail(e.value.email)}
        />
      </div>

      {/* Payment element with automatic payment methods */}
      <div>
        <PaymentElement
          options={{
            layout: 'tabs',
            fields: {
              billingDetails: 'never', // Hide billing details, use email from LinkAuthenticationElement
            },
          }}
        />
      </div>

      {/* Total */}
      <div className="flex items-center justify-between py-3 border-t border-gray-100">
        <span className="text-lg font-medium text-gray-900">Total</span>
        <span className="text-lg font-bold text-gray-900">$49.00</span>
      </div>

      {/* Pay button */}
      <PremiumButton
        type="submit"
        disabled={loading || !stripe || !email}
        size="lg"
        className="w-full"
      >
        {loading ? 'Processing...' : 'Unlock my dashboard for $49'}
      </PremiumButton>

      {/* Trust indicators */}
      <div className="text-center space-y-2">
        <p className="text-xs text-gray-500">
          Secure by Stripe • Instant access • No upsells
        </p>
      </div>
    </form>
  )
} 