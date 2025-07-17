'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function LoadingPage() {
  const router = useRouter()
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        router.push('/dashboard')
      }, 300) // Wait for fade out animation
    }, 1800)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <AnimatePresence mode="wait">
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Animated top progress bar */}
          <motion.div
            className="fixed top-0 left-0 h-[1px] bg-gradient-to-r from-blue-500 to-blue-600 z-50"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          {/* Main content container */}
          <div className="flex flex-col items-center space-y-12 px-6">
            {/* Logo with sophisticated animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1
              }}
              className="relative"
            >
              <Link href="/" className="p-2 rounded-lg hover:bg-[#f2f2f2] transition-all duration-200 active:scale-95">
                <img src="/genie-preview.png" alt="Genie Logo" className="h-10 w-10 rounded-full opacity-90" />
              </Link>
            </motion.div>

            {/* Animated dots spinner */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-neutral-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Status message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-[#4a4a4a] font-medium text-base tracking-wide">
                Preparing your dashboard...
              </p>
            </motion.div>
          </div>

          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 