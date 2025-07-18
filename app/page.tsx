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
    description: 'Personalize and print a simple LLC Operating Agreement — ready to sign.'
  },
  {
    label: 'Personalized dashboard to track your progress',
    description: 'See your LLC formation status, next steps, and important documents all in one place.'
  },
  {
    label: 'Genie Assistant included for instant guidance',
    description: 'Instant answers with our Genie Assistant — no upsells or hidden fees.'
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
    subtitle: 'Know exactly where to file, what to submit, and how to move forward — no confusion.'
  },
  {
    icon: <LayoutDashboard size={22} strokeWidth={2} />,
    title: 'Custom dashboard with smart progress tracking',
    subtitle: 'Stay organized with a simple dashboard that shows exactly what’s done and what’s next.'
  },
  {
    icon: <HeadphonesIcon size={22} strokeWidth={2} />,
    title: 'Built-in AI assistant',
    subtitle: 'Get answers from Genie as you go — no delays, no confusion.'
  },
  {
    icon: <Sparkles size={22} strokeWidth={2} />,
    title: 'Documents built to launch',
    subtitle: 'Includes your LLC filing instructions, EIN guide, and operating agreement — everything you need to set up your business, ready to go.'
  },
];

const compareItems = [
  {
    icon: <ShieldCheck size={22} strokeWidth={2} />,
    title: 'No hidden fees, ever',
    subtitle: 'One flat price. No upsells. No fine print.'
  },
  {
    icon: <GaugeCircle size={22} strokeWidth={2} />,
    title: 'Built for clarity',
    subtitle: 'Our steps are obsessively designed to be clear, simple, and stress-free.'
  },
  {
    icon: <Users size={22} strokeWidth={2} />,
    title: 'Genie-powered help',
    subtitle: 'Answers when you need them. Right inside your dashboard.'
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

function PreviewSection({ 
  title, 
  subtitle, 
  image, 
  imageAlt, 
  bgColor = "bg-gray-50",
  reverse = false,
  children
}: {
  title: string
  subtitle: string
  image: string
  imageAlt: string
  bgColor?: string
  reverse?: boolean
  children?: React.ReactNode
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`w-full ${bgColor} py-24`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
            {children}
          </div>
          
          {/* Image with error handling and fallback */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full max-w-3xl mx-auto"
          >
            <img
              src={image}
              alt={imageAlt}
              className="rounded-xl border border-gray-200 shadow-sm w-full h-auto object-contain"
              loading="eager"
              decoding="sync"
              onError={(e) => {
                // Fallback to a clean placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback placeholder */}
            <div 
              className="hidden rounded-xl border border-gray-200 shadow-sm w-full h-64 bg-gray-50 flex items-center justify-center"
              style={{ display: 'none' }}
            >
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gray-200 mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <p className="text-sm font-medium">Preview Image</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function WhatsIncludedLinear() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-900">What's Included</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-4">Everything you need to get your business off the ground — nothing you don't.</p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {featureDetails.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white/80 backdrop-blur-sm p-6 min-h-[220px] h-full w-full flex flex-col justify-center items-center transition-all duration-300 hover:shadow-xl hover:backdrop-blur-md hover:bg-white/90">
                <div className="transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 w-full">
                  <h3 className="text-lg font-medium text-gray-900 text-center">
                    {item.label}
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center px-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out w-full">
                  <p className="text-sm text-gray-500 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
    router.push('/checkout')
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
            <Link href="/" className="p-2 rounded-lg hover:bg-[#f2f2f2] transition-all duration-200 active:scale-95">
              <img src="/genie-preview.png" alt="Genie Logo" className="h-10 w-10 rounded-full opacity-90" />
            </Link>
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
          <motion.img 
            src="/genie-og.png" 
            alt="Genie Mascot" 
            className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-lg mb-2 opacity-90" 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          />
          <motion.h1 
            className="text-4xl md:text-5xl text-center text-neutral-900 leading-tight tracking-tight font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            Finally making it official?
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-neutral-500 text-center max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          >
            We’ll walk you through forming your LLC — clearly, quickly, and without the upsells.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          >
            <Button 
              className="mt-6 px-8 py-3 text-lg"
              onClick={handleGetStarted}
            >
              Get Started for $49 →
            </Button>
            <p className="mt-4 text-sm text-gray-500 text-center">Everything you need. One price.</p>
          </motion.div>
        </motion.section>
        
        {/* What is an LLC Section */}
        <PreviewSection
          title="What is an LLC?"
          subtitle="A simple way to protect your business and stay legally compliant."
          image="/images/llc-illustration.svg"
          imageAlt="LLC Illustration"
        >
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                A Limited Liability Company (LLC) gives your business legal protection and flexible tax options — without the complexity of a corporation. If you’re starting something real, it’s the smartest first step to make it official.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you’re freelancing, launching a service, or growing your side hustle, an LLC helps you build with confidence.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">Why People Form LLCs</h3>
              <p className="text-gray-600">Smart protections and benefits — even if you’re just getting started.</p>
              <ul className="space-y-4">
                {[
                  { icon: '🛡️', title: 'Personal Protection', text: 'Keep your personal assets (like your car or savings) safe if your business gets sued or falls into debt.' },
                  { icon: '📈', title: 'Serious Business Signal', text: 'Show clients, banks, and partners you’re not just winging it — you’re official.' },
                  { icon: '💸', title: 'Flexible Taxes', text: 'Choose how you’re taxed — as a sole proprietor, partnership, or corporation.' },
                  { icon: '🏦', title: 'Business Bank Accounts', text: 'Most banks require an LLC to open a separate business account and build credit.' },
                  { icon: '📄', title: 'Contracts + Trust', text: 'Look more professional and trustworthy when signing deals or sending invoices.' },
                  { icon: '🚀', title: 'Side Hustle → Real Business', text: 'An LLC is the first big step in turning what you’re doing into something long-term.' },
                ].map(item => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="text-2xl mt-1">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PreviewSection>

        <WhyGenieSection />
        <CompareSection />
        
        <PreviewSection
          title="Your Business Dashboard"
          subtitle="Track progress and stay organized — all in one place."
          image="/Dashboard1.png"
          imageAlt="Dashboard preview showing progress tracking and document management"
          bgColor="bg-gray-50"
        />
        
        <PreviewSection
          title="Launch-Ready Documents"
          subtitle="Everything you need, beautifully packaged and ready to download."
          image="/Document-Preview.png"
          imageAlt="Document preview showing LLC filing instructions and operating agreement"
          bgColor="bg-white"
          reverse={true}
        />
        
        {/* Genie Assistant Preview Section */}
        <PreviewSection
          title="Your Genie Assistant"
          subtitle="Ask anything about your LLC setup and get instant support from Genie."
          image="/Help-preview.png"
          imageAlt="Genie assistant chat interface showing helpful responses"
          bgColor="bg-gray-50"
        />
        
        <div className="w-full max-w-4xl mx-auto border-t border-neutral-200 mt-16 mb-12"></div>
        
        <WhatsIncludedLinear />
        
        <section className="w-full bg-white py-16 flex flex-col items-center justify-center mt-10 border-t border-neutral-100">
          <h2 className="text-3xl text-neutral-900 font-semibold leading-tight tracking-tight mb-6 text-center">Ready to Launch Your Business?</h2>
          <Button 
            className="px-10 py-4 text-lg w-full max-w-xs"
            onClick={handleGetStarted}
          >
            Get Started →
          </Button>
        </section>
        
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
 
 
 
 