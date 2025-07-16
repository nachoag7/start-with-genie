'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-2xl bg-white rounded-xl shadow-md p-10 flex flex-col gap-8"
        >
          <h1 className="font-semibold text-3xl text-neutral-900 text-center">About Start With Genie</h1>
          
          <div className="space-y-6 text-neutral-700 leading-relaxed">
            <p>
              Start With Genie is a modern assistant built to make starting your LLC clear, fast, and affordable. 
              We believe every founder deserves guidance without getting upsold or confused by complicated steps.
            </p>
            
            <p>
              Our mission is to put trustworthy tools and plain-language instructions in your hands, 
              so you can launch with clarity and confidence.
            </p>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
} 