'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Zap, LayoutDashboard, HeadphonesIcon, FileText, ShieldOff, GaugeCircle, User, BadgeDollarSign, CheckCircle, ShieldCheck, Sparkles, Timer, ArrowRightLeft, XCircle, Users, ThumbsUp } from 'lucide-react'
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

const featureDetails = [
  {
    label: 'Step-by-step LLC filing instructions tailored to your state',
    description: 'Get clear, personalized filing steps based on your state so you can confidently submit your LLC without confusion.'
  },
  {
    label: 'IRS EIN setup walkthrough',
    description: 'Follow a simple, guided process to obtain your EIN from the IRS, with tips for every step.'
  },
  {
    label: 'Customizable operating agreement',
    description: 'Download a lawyer-vetted operating agreement, personalized for your LLC and ready to sign.'
  },
  {
    label: 'Personalized dashboard to track your progress',
    description: 'See your LLC formation status, next steps, and important documents all in one place.'
  },
  {
    label: 'Friendly support + Genie Assistant included',
    description: 'Get answers fast with built-in support and an AI assistant, no upsells or hidden fees.'
  },
  {
    label: 'Startup launch checklist',
    description: 'Stay organized with a step-by-step checklist to launch your business the right way.'
  },
];

const whyGenieItems = [
  {
    icon: <FileText size={22} strokeWidth={2} />,
    title: 'Clear state-specific filing steps',
    subtitle: 'Actionable LLC filing instructions tailored to your state, with no legal jargon.'
  },
  {
    icon: <LayoutDashboard size={22} strokeWidth={2} />,
    title: 'Custom dashboard with smart progress tracking',
    subtitle: 'Know exactly what’s done and what’s next — everything stays organized.'
  },
  {
    icon: <HeadphonesIcon size={22} strokeWidth={2} />,
    title: 'Concierge support + AI assistant',
    subtitle: 'Friendly help when you need it, from real people and our Genie assistant.'
  },
  {
    icon: <Sparkles size={22} strokeWidth={2} />,
    title: 'Documents built to launch',
    subtitle: 'Operating agreement and EIN guide ready for banks, partners, and tax setup.'
  },
];

const compareItems = [
  {
    icon: <ShieldCheck size={22} strokeWidth={2} />,
    title: 'No hidden fees, ever',
    subtitle: 'Everything you need to form your LLC — no upsells, surprises, or shady fine print.'
  },
  {
    icon: <GaugeCircle size={22} strokeWidth={2} />,
    title: 'Built for clarity',
    subtitle: 'Our dashboard and steps are obsessively designed to be clear and stress-free.'
  },
  {
    icon: <Users size={22} strokeWidth={2} />,
    title: 'Real human support',
    subtitle: 'Message us anytime — we’re real people who actually respond.'
  },
  {
    icon: <BadgeDollarSign size={22} strokeWidth={2} />,
    title: 'Flat-rate, fast access',
    subtitle: 'You pay once. You get everything. And you get it instantly.'
  },
];

const fadeUpStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const whyGenieParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};
const whyGenieCard = idx => ({
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: idx * 0.1 },
  },
});
const iconBounce = {
  hidden: { y: -10, scale: 1.1, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.38, stiffness: 340, damping: 18 },
  },
};
const compareParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};
const compareCard = (idx, col) => {
  // col: 0 = left, 1 = right
  const xVal = col === 0 ? -24 : 24;
  return {
    hidden: { opacity: 0, x: xVal },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: idx * 0.1 },
    },
  };
};

function SectionDivider() {
  return (
    <div style={{
      width: '100%',
      maxWidth: 800,
      margin: '48px auto 32px',
      height: 1,
      background: 'linear-gradient(90deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.04) 100%)',
    }} />
  );
}

function WhyGenieSection() {
  return (
    <motion.div
      variants={whyGenieParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ maxWidth: 800, margin: '0 auto', width: '100%' }}
    >
      <SectionDivider />
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">Why Start With Genie?</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
        }}
      >
        {whyGenieItems.map((item, idx) => (
          <motion.div
            key={item.title}
            variants={fadeUpItem}
            whileHover="hover"
            initial="rest"
            animate="rest"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 18,
              minHeight: 80,
              padding: '0 0 0 0',
              background: 'none',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 0,
              transition: 'all 0.25s ease-in-out',
              cursor: 'default',
            }}
          >
            <motion.span
              className="flex items-center justify-center"
              style={{ minWidth: 32, color: '#888', marginTop: 2, transition: 'all 0.25s ease-in-out' }}
              variants={{
                rest: { x: 0 },
                hover: { x: 2 },
              }}
            >
              {item.icon}
            </motion.span>
            <div style={{ flex: 1 }}>
              <motion.div
                style={{ fontSize: '1.05rem', fontWeight: 600, color: '#18181b', lineHeight: 1.35, marginBottom: 2, transition: 'color 0.25s ease-in-out' }}
                variants={{
                  rest: { color: '#18181b' },
                  hover: { color: '#111' },
                }}
              >
                {item.title}
              </motion.div>
              <div style={{ fontSize: '0.95rem', color: '#555', fontWeight: 400, lineHeight: 1.6 }}>{item.subtitle}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function CompareSection() {
  return (
    <motion.div
      variants={fadeUpStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ maxWidth: 800, margin: '0 auto', width: '100%' }}
    >
      <SectionDivider />
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">How We Compare</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
        }}
      >
        {compareItems.map((item, idx) => (
          <motion.div
            key={item.title}
            variants={fadeUpItem}
            whileHover="hover"
            initial="rest"
            animate="rest"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 18,
              minHeight: 80,
              padding: '0 0 0 0',
              background: 'none',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 0,
              transition: 'all 0.25s ease-in-out',
              cursor: 'default',
            }}
          >
            <motion.span
              className="flex items-center justify-center"
              style={{ minWidth: 32, color: '#888', marginTop: 2, transition: 'all 0.25s ease-in-out' }}
              variants={{
                rest: { x: 0 },
                hover: { x: 2 },
              }}
            >
              {item.icon}
            </motion.span>
            <div style={{ flex: 1 }}>
              <motion.div
                style={{ fontSize: '1.05rem', fontWeight: 600, color: '#18181b', lineHeight: 1.35, marginBottom: 2, transition: 'color 0.25s ease-in-out' }}
                variants={{
                  rest: { color: '#18181b' },
                  hover: { color: '#111' },
                }}
              >
                {item.title}
              </motion.div>
              <div style={{ fontSize: '0.95rem', color: '#555', fontWeight: 400, lineHeight: 1.6 }}>{item.subtitle}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function WhatsIncludedLinear() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What’s Included</h2>
      <div
        className="w-full"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
        }}
      >
        {featureDetails.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.09, ease: 'easeOut' }}
            className="relative group"
            style={{
              minHeight: 160,
              padding: '32px 24px',
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'background 200ms ease, box-shadow 200ms ease',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
            whileHover={{
              background: '#f9f9f9',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div style={{ width: '100%', minHeight: 32, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AnimatePresence initial={false} mode="wait">
                {hoveredIdx !== idx && (
                  <motion.span
                    key="title"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4, transition: { duration: 0.2, ease: 'easeIn' } }}
                    transition={{ duration: 0.2, ease: 'easeIn' }}
                    style={{
                      fontSize: 18,
                      fontWeight: 500,
                      color: '#111',
                      minHeight: 32,
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.label}
                  </motion.span>
                )}
                {hoveredIdx === idx && (
                  <motion.span
                    key="desc"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.05, ease: 'easeOut' } }}
                    exit={{ opacity: 0, y: 4, transition: { duration: 0.15, ease: 'easeIn' } }}
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      color: '#666',
                      lineHeight: 1.6,
                      minHeight: 32,
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.description}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const router = useRouter()
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)
  const [openCard, setOpenCard] = useState<number | null>(null)
  const [flashIndex, setFlashIndex] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Dismiss description on outside click
  useEffect(() => {
    if (openCard === null) return;
    function handleClick(e: MouseEvent) {
      if (!cardRefs.current[openCard!]?.contains(e.target as Node)) {
        setOpenCard(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [openCard])

  // Handle card click: flash opacity, open/close description
  const handleCardClick = (idx: number) => {
    setFlashIndex(idx)
    setTimeout(() => setFlashIndex(null), 60)
    setOpenCard(openCard === idx ? null : idx)
  }

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
        <WhyGenieSection />
        <CompareSection />
        
        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto border-t border-neutral-200 mt-16 mb-12"></div>
        
        {/* What's Included Section */}
        <WhatsIncludedLinear />
        
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