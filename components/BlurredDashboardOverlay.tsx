'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lock, Sparkles, CheckCircle, RefreshCw } from 'lucide-react'
import { Button } from './ui/Button'
import { useRouter } from 'next/navigation'

interface BlurredDashboardOverlayProps {
  onUnlock: () => void
  isLoading?: boolean
}

export default function BlurredDashboardOverlay({ onUnlock, isLoading = false }: BlurredDashboardOverlayProps) {
  const router = useRouter()

  const features = [
    'State-specific LLC filing instructions',
    'Personalized EIN application guide', 
    'Custom Operating Agreement',
    'Step-by-step launch checklist',
    'AI-powered Genie assistant',
    'Priority email support'
  ]

  return (
    <div className="relative">
      {/* Blurred background content */}
      <div className="blur-sm pointer-events-none select-none">
        <div className="min-h-screen bg-gray-50">
          {/* This will be the actual dashboard content that gets blurred */}
        </div>
      </div>

      {/* Overlay with unlock CTA */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-md mx-auto text-center px-6 py-8"
        >
          {/* Lock icon */}
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Unlock Your Dashboard
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Get instant access to your personalized LLC setup tools and start building your business today.
          </p>

          {/* Features list */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-sm text-gray-700"
              >
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="text-3xl font-bold text-gray-900">$49</div>
            <div className="text-sm text-gray-500">One-time payment</div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            onClick={onUnlock}
            disabled={isLoading}
            className="w-full mb-4 group relative overflow-hidden"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Unlock Dashboard
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </>
            )}
          </Button>

          {/* Trust indicators */}
          <div className="text-xs text-gray-400 space-y-1">
            <div>✓ 30-day money-back guarantee</div>
            <div>✓ Secure payment via Stripe</div>
            <div>✓ Instant access after payment</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 