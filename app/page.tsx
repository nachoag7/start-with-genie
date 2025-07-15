'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Start With Genie — Simple, Guided LLC Setup Without the Legal Headache</title>
        <meta name="description" content="Get clear, step-by-step instructions to launch your LLC. No confusing legal jargon, no hidden fees — just your business set up right, with the guidance of your silent assistant." />
        <meta property="og:title" content="Start With Genie — Simple, Guided LLC Setup Without the Legal Headache" />
        <meta property="og:description" content="Get clear, step-by-step instructions to launch your LLC. No confusing legal jargon, no hidden fees — just your business set up right, with the guidance of your silent assistant." />
        <meta property="og:image" content="https://startwithgenie.com/genie-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://startwithgenie.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Start With Genie — Simple, Guided LLC Setup Without the Legal Headache" />
        <meta name="twitter:description" content="Get clear, step-by-step instructions to launch your LLC. No confusing legal jargon, no hidden fees — just your business set up right, with the guidance of your silent assistant." />
        <meta name="twitter:image" content="https://startwithgenie.com/genie-preview.png" />
      </Head>
      <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-4">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 py-20"
        >
          <h1 className="font-semibold text-4xl md:text-5xl text-center text-neutral-900 leading-tight">
            Start Your LLC Effortlessly
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 text-center max-w-2xl">
            The fastest, most elegant way to form your business. Modern, guided, and always on your side.
          </p>
          <Button className="mt-4 shadow-sm">Get Started</Button>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-8 py-12"
        >
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4">
            <h2 className="font-semibold text-2xl text-neutral-900">Why Start With Genie?</h2>
            <ul className="text-neutral-700 space-y-2">
              <li>• Lightning-fast LLC filing in any state</li>
              <li>• Modern dashboard to track your progress</li>
              <li>• Concierge support and Genie Assistant</li>
              <li>• All documents, always accessible</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4">
            <h2 className="font-semibold text-2xl text-neutral-900">How We Compare</h2>
            <ul className="text-neutral-700 space-y-2">
              <li>• No hidden fees or upsells</li>
              <li>• Apple/Linear-inspired UI</li>
              <li>• Real human support</li>
              <li>• Transparent, flat pricing</li>
            </ul>
          </div>
        </motion.section>
      </main>
    </>
  )
} 