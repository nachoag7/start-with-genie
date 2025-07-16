'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-2xl bg-white rounded-xl shadow-md p-10 flex flex-col gap-8 items-center"
        >
          <img 
            src="/genie-og.png" 
            alt="Genie Mascot" 
            className="w-24 h-24 object-contain drop-shadow-xl mb-4" 
          />
          
          <div className="text-center space-y-4">
            <h1 className="font-semibold text-3xl text-neutral-900">Need help?</h1>
            <p className="text-lg text-neutral-700">We're here for you.</p>
            <p className="text-neutral-600">
              Email us directly at{' '}
              <a 
                href="mailto:info@startwithgenie.com" 
                className="text-[#3B82F6] hover:text-blue-600 transition-colors font-medium"
              >
                info@startwithgenie.com
              </a>
            </p>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
} 