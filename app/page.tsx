'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Zap, LayoutDashboard, HeadphonesIcon, FileText, ShieldOff, GaugeCircle, User, BadgeDollarSign } from 'lucide-react'
import Footer from '../components/Footer'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How long does LLC formation take?",
    answer: "Timelines vary by state, but you'll get state-specific guidance inside your dashboard immediately."
  },
  {
    question: "Does Start With Genie file my LLC for me?",
    answer: "No — Genie gives you clear, personalized steps so you can file directly and avoid unnecessary fees."
  },
  {
    question: "Is this a legal service?",
    answer: "Nope. We're not a law firm and don't provide legal advice. We provide clear instructions, documents, and friendly support."
  },
  {
    question: "What's included in the $49?",
    answer: "You get access to your own personalized dashboard, with your state-specific instructions, EIN guide, operating agreement, startup checklist, and support from Genie."
  }
]

export default function Home() {
  const router = useRouter()
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/onboarding')
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Header */}
        <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-2 md:px-0 sticky top-0 z-10 backdrop-blur-sm bg-neutral-50/80 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <img src="/genie-preview.png" alt="Genie Logo" className="h-8 w-8 rounded-full opacity-90" />
            <span className="text-lg font-medium text-neutral-900 tracking-tight">Start With Genie</span>
          </div>
          <Link 
            href="/login" 
            className="text-neutral-500 hover:text-neutral-900 hover:underline transition-all duration-200 font-medium"
          >
            Sign In
          </Link>
        </nav>
        
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6 py-16 relative"
        >
          {/* Genie Mascot */}
          <motion.img 
            src="/genie-og.png" 
            alt="Genie Mascot" 
            className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-lg mb-2 opacity-90" 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          />
          
          {/* Hero Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl text-center text-neutral-900 leading-tight tracking-tight font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            Start Your LLC Effortlessly
          </motion.h1>
          
          {/* Hero Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-neutral-500 text-center max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          >
            The clearest, fastest way to form your LLC — with no hidden steps.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          >
            <Button 
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
              onClick={handleGetStarted}
            >
              Get Started →
            </Button>
          </motion.div>
        </motion.section>
        
        {/* Comparison Sections */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-4xl mx-auto px-4 md:px-0 mt-20"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Why Start With Genie */}
            <div>
              <h2 className="text-lg font-semibold text-neutral-800 mb-4 tracking-tight">
                Why Start With Genie?
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600 leading-snug">Lightning-fast LLC filing in any state</p>
                </div>
                <div className="flex items-start gap-2">
                  <LayoutDashboard className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600 leading-snug">Modern dashboard to track your progress</p>
                </div>
                <div className="flex items-start gap-2">
                  <HeadphonesIcon className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600 leading-snug">Concierge support and Genie Assistant</p>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600 leading-snug">All documents, always accessible</p>
                </div>
              </div>
            </div>
            
            {/* How We Compare */}
            <div>
              <h2 className="text-lg font-semibold text-neutral-800 mb-4 tracking-tight">
                How We Compare
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <ShieldOff className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600 leading-snug">No hidden fees or upsells</p>
                </div>
                <div className="flex items-start gap-2">
                  <GaugeCircle className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600 leading-snug">Built for speed, clarity, and ease of use</p>
                </div>
                <div className="flex items-start gap-2">
                  <User className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600 leading-snug">Real human support</p>
                </div>
                <div className="flex items-start gap-2">
                  <BadgeDollarSign className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600 leading-snug">Transparent, flat pricing</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto border-t border-neutral-200 mt-16 mb-12"></div>
        
        {/* What's Included Section */}
        <motion.section
          id="whats-included"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-4xl mx-auto py-20"
        >
          <h2 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-800 mb-8 text-center">
            What's Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white border border-neutral-200 rounded-md p-4"
            >
              <p className="text-sm text-neutral-600 font-medium">Step-by-step LLC filing instructions tailored to your state</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white border border-neutral-200 rounded-md p-4"
            >
              <p className="text-sm text-neutral-600 font-medium">IRS EIN setup walkthrough</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-white border border-neutral-200 rounded-md p-4"
            >
              <p className="text-sm text-neutral-600 font-medium">Customizable operating agreement</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-white border border-neutral-200 rounded-md p-4"
            >
              <p className="text-sm text-neutral-600 font-medium">Startup launch checklist</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-white border border-neutral-200 rounded-md p-4 sm:col-span-2"
            >
              <p className="text-sm text-neutral-600 font-medium">Friendly support + Genie Assistant included</p>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Bottom CTA Section */}
        <section className="w-full bg-white py-16 flex flex-col items-center justify-center mt-10 border-t border-neutral-100">
          <h2 className="text-3xl text-neutral-900 font-semibold leading-tight tracking-tight mb-6 text-center">Ready to Launch Your Business?</h2>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200 w-full max-w-xs"
            onClick={handleGetStarted}
          >
            Get Started →
          </Button>
        </section>
        
        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-2xl mx-auto py-16"
        >
          <h2 className="text-3xl text-neutral-900 font-semibold leading-tight tracking-tight text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-neutral-900">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-neutral-500 transition-transform duration-200 ${
                      openFAQIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-neutral-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
} 