'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '../lib/stripe'
import FrictionlessCheckoutForm from './FrictionlessCheckoutForm'

interface FrictionlessCheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function FrictionlessCheckoutModal({ 
  isOpen, 
  onClose, 
  onSuccess 
}: FrictionlessCheckoutModalProps) {
  const [clientSecret, setClientSecret] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen && !clientSecret) {
      setIsLoading(true)
      setError(null)
      
      fetch('/api/create-payment-intent', { method: 'POST' })
        .then(res => {
          if (!res.ok) {
            return res.json().then(data => {
              throw new Error(data.error || 'Failed to create payment intent')
            })
          }
          return res.json()
        })
        .then(data => {
          if (data.clientSecret) {
            setClientSecret(data.clientSecret)
          }
        })
        .catch(err => {
          console.error('Payment intent error:', err)
          setError(err.message)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [isOpen, clientSecret])

  const handleSuccess = () => {
    onSuccess()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          style={{ backdropFilter: 'blur(4px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Unlock your dashboard</h2>
                <p className="text-sm text-gray-500">Get everything you need to launch your business confidently</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors text-2xl font-light"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Setting up payment...</p>
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-red-600 mb-4">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-blue-600 hover:underline"
                  >
                    Try again
                  </button>
                </div>
              ) : clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <FrictionlessCheckoutForm onSuccess={handleSuccess} />
                </Elements>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 