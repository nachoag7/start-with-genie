'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import PremiumButton from './ui/PremiumButton'

interface BlurredDashboardOverlayProps {
  onUnlock: () => void
  isLoading?: boolean
}

export default function BlurredDashboardOverlay({ onUnlock, isLoading = false }: BlurredDashboardOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-md mx-auto text-center px-6 py-8"
        >
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            That's it, there! Your LLC Setup Dashboard is ready.
          </h3>

          {/* Subtitle */}
          <p className="text-gray-600 mb-6">
            Get everything you need to launch your business confidently, LLC filing, EIN setup, and Operating Agreement included.
          </p>

          {/* CTA Button */}
          <PremiumButton
            onClick={onUnlock}
            size="lg"
            className="w-full max-w-md mx-auto text-lg py-4"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <span className="relative text-white">
                Unlock my dashboard for $49
              </span>
            )}
          </PremiumButton>

          {/* Trust line */}
          <p className="text-sm text-gray-500 mt-3">
            Instant access. No upsells.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 