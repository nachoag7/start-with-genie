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
  const handleButtonClick = () => {
    console.log('CTA button clicked in BlurredDashboardOverlay');
    console.log('onUnlock function:', onUnlock);
    console.log('isLoading:', isLoading);
    
    try {
      onUnlock();
      console.log('onUnlock called successfully');
    } catch (error) {
      console.error('Error calling onUnlock:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-2xl mx-auto text-center px-4 sm:px-6 py-4 sm:py-6 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg"
    >
      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        That's it, there! Your LLC Setup Dashboard is ready.
      </h3>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
        Get everything you need to register your business confidently, LLC, EIN, and Operating Agreement included.
      </p>

      {/* CTA Button */}
      <PremiumButton
        onClick={handleButtonClick}
        size="lg"
        className="w-full max-w-lg mx-auto text-base sm:text-lg py-3 sm:py-4"
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

      {/* Test button for debugging */}
      <button
        onClick={() => {
          console.log('Test button clicked');
          onUnlock();
        }}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Test Payment Modal
      </button>

      {/* Trust line */}
      <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
        Instant access. No upsells.
      </p>
    </motion.div>
  )
} 