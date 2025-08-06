'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Zap, LayoutDashboard, HeadphonesIcon, FileText, ShieldOff, GaugeCircle, User, BadgeDollarSign, CheckCircle, CheckCircle2, ShieldCheck, Sparkles, Timer as TimerIcon, ArrowRightLeft, XCircle, Users, ThumbsUp, Shield, BarChart, DollarSign, Banknote, Rocket, Briefcase, KeyRound, ScrollText, ClipboardCheck, Bot, BadgeCheck, ListChecks, Clock, Quote, Star } from 'lucide-react'
import Footer from '../components/Footer'
import Head from 'next/head'
import EINGuidePopup from '../components/EINGuidePopup'
import { useEINPopup } from '../hooks/useEINPopup'
import Timer from '../components/Timer'

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
    answer: "You get access to your own personalized dashboard, with your state-specific instructions, EIN guide, an operating agreement, and support from Genie."
  }
]

const featureDetails = [
  {
    label: 'Step-by-step LLC filing instructions',
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
    label: 'Personalized progress dashboard',
    description: 'See your LLC formation status, next steps, and important documents all in one place.'
  },
  {
    label: 'Genie Assistant for instant help',
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

const whyLLCItems = [
  { icon: Shield, title: 'Personal Protection', text: 'Keep your personal assets (like your car or savings) safe if your business gets sued or falls into debt.' },
  { icon: BarChart, title: 'Serious Business Signal', text: 'Show clients, banks, and partners you’re not just winging it — you’re official.' },
  { icon: DollarSign, title: 'Flexible Taxes', text: 'Choose how you’re taxed — as a sole proprietor, partnership, or corporation.' },
  { icon: Banknote, title: 'Business Bank Accounts', text: 'Most banks require an LLC to open a separate business account and build credit.' },
  { icon: FileText, title: 'Contracts + Trust', text: 'Look more professional and trustworthy when sending deals or sending invoices.' },
  { icon: Rocket, title: 'Side Hustle → Real Business', text: 'An LLC is the first big step in turning what you’re doing into something long-term.' },
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
      margin: '32px auto 24px',
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
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">Why Start With Genie?</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
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
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">How We Compare</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
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
  image?: string
  imageAlt?: string
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
      className={`w-full ${bgColor} py-12 md:py-16`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
          {/* Text Content */}
          <div className="flex-1 space-y-4">
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
          </div>
          {/* Image */}
          {image && (
            <motion.div 
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            >
              <img src={image} alt={imageAlt} className="rounded-2xl shadow-2xl w-1/3 h-auto object-cover" />
            </motion.div>
          )}
        </div>
        {/* Conditionally render children if no image is provided */}
        {children && !image && <div className="mt-8">{children}</div>}
      </div>
    </motion.section>
  )
}

function AboutLLCSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-x-20 gap-y-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpStagger}
        >
          {/* Left Column */}
          <motion.div 
            className="space-y-4 max-w-[560px]"
            variants={fadeUpItem}
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">What is an LLC?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                A Limited Liability Company (LLC) gives your business legal protection and flexible tax options — without the complexity of a corporation. If you’re starting something real, it’s the smartest first step to make it official.
              </p>
              <p>
                Whether you’re freelancing, launching a service, or growing your side hustle, an LLC helps you build with confidence.
              </p>
              <p>
                It also opens the door to important tools — like a business bank account, contracts, and business credit. It’s how you separate your business life from your personal life and take your venture seriously from day one.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-4 max-w-[560px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: 0.7, ease: "easeOut" },
              },
            }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Why People Form LLCs</h2>
            <ul className="space-y-3">
              {whyLLCItems.map((item, idx) => (
                <motion.li 
                  key={item.title} 
                  className="flex items-start gap-3"
                  variants={fadeUpItem}
                >
                  <div className="w-4 h-4 flex-shrink-0 mt-[3px] flex items-center justify-center">
                    <item.icon className="w-full h-full text-green-500" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base">{item.title}</h4>
                    <p className="text-gray-500 leading-snug text-sm">{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}



export default function Home() {
  const router = useRouter()
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)
  const [openCard, setOpenCard] = useState<number | null>(null)
  const [flashIndex, setFlashIndex] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const heroRef = useRef<HTMLDivElement>(null)
  const { showPopup, closePopup, markEmailSubmitted } = useEINPopup();

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

  const scrollToCTA = () => {
    const firstCTA = document.querySelector('[data-cta-section]');
    if (firstCTA) {
      firstCTA.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Start With Genie – Launch Your LLC for $49</title>
        <meta name="description" content="Start your LLC for just $49 with Start With Genie – a clean, modern assistant that gives you everything you need to form your business legally. No upsells. No confusion." />
        <link rel="canonical" href="https://www.startwithgenie.com/" />
      </Head>
      
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        
        {/* STICKY NAVBAR */}
        <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-2 md:px-0 sticky top-0 z-10 backdrop-blur-sm bg-neutral-50/80 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 rounded-lg hover:bg-[#f2f2f2] transition-all duration-200 active:scale-95">
              <img src="/genie-preview.png" alt="Genie Logo" className="h-8 w-8 md:h-10 md:w-10 rounded-full opacity-90" />
            </Link>
            <span className="text-base md:text-lg font-medium text-neutral-900 tracking-tight">Start With Genie</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/checkout" className="inline-block">
              <Button 
                className="text-sm font-semibold py-2 px-4 md:py-2.5 md:px-5"
                size="sm"
              >
                Start Now
              </Button>
            </Link>
            <Link href="/login">
              <span className="text-sm text-neutral-500 hover:text-neutral-900 transition">Sign In</span>
            </Link>
          </div>
        </nav>
        
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          
          {/* Hero Section */}
          <motion.section
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full max-w-4xl mx-auto flex flex-col items-center gap-0 pt-1 pb-0 relative min-h-0 md:min-h-0 flex justify-center"
          >
            <motion.img 
              src="/genie-og.png" 
              alt="Genie Mascot" 
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain drop-shadow-lg mb-1 opacity-90" 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            />
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl text-center text-neutral-900 leading-tight tracking-tight font-semibold px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              The Easiest Way To Start an LLC with No Hidden Fees
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-neutral-500 text-center max-w-2xl leading-relaxed px-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              We give you a crystal-clear, step-by-step roadmap to form your LLC yourself. Get personalized state instructions, your operating agreement, and an EIN guide—everything you need, for one flat $49 fee.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
              className="flex flex-col items-center"
            >
              <Button 
                className="mt-4 px-8 py-3 text-lg"
                onClick={handleGetStarted}
              >
                Start My LLC for $49
              </Button>
              <p className="text-sm text-gray-500 mt-2 mb-4 text-center">
                Flat rate. No surprise fees. Just what you need.
              </p>
            </motion.div>
          </motion.section>

          {/* Testimonial Section - High Trust Design */}
          <section className="mt-3 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto py-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-8 text-center">From Overwhelmed to Officially Launched</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Melissa */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                
                {/* Content Area - Flex grow to push footer to bottom */}
                <div className="flex-1 flex flex-col">
                  {/* Headline */}
                  <h3 className="font-bold text-lg text-neutral-900 mb-4">
                    "Didn't know where to start until I found this."
                  </h3>
                  
                  {/* Body Text */}
                  <p className="text-neutral-700 leading-relaxed flex-1">
                    "I googled for a while and got nowhere. Gave this a shot and got it done for cheap so I recommend."
                  </p>
                </div>
                
                {/* Footer - Always at bottom */}
                <div className="mt-6">
                  <hr className="border-gray-200 mb-4" />
                  <div className="flex items-center">
                    <img 
                      src="https://ui-avatars.com/api/?name=Melissa+R&background=6366f1&color=fff&size=40" 
                      alt="Melissa R" 
                      className="w-10 h-10 rounded-full"
                    />
                                          <div className="ml-3">
                        <div className="font-semibold text-neutral-900">Melissa R.</div>
                        <div className="text-sm text-neutral-600">Opening her first Etsy shop</div>
                      </div>
                  </div>
                </div>
              </div>
              
              {/* David */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                
                {/* Content Area - Flex grow to push footer to bottom */}
                <div className="flex-1 flex flex-col">
                  {/* Headline */}
                  <h3 className="font-bold text-lg text-neutral-900 mb-4">
                    "Honestly? Just made things simpler."
                  </h3>
                  
                  {/* Body Text */}
                  <p className="text-neutral-700 leading-relaxed flex-1">
                    "I didn't know what I was doing at all but the process was pretty clear so it wasn't that hard"
                  </p>
                </div>
                
                {/* Footer - Always at bottom */}
                <div className="mt-6">
                  <hr className="border-gray-200 mb-4" />
                  <div className="flex items-center">
                    <img 
                      src="https://ui-avatars.com/api/?name=David+M&background=10b981&color=fff&size=40" 
                      alt="David M" 
                      className="w-10 h-10 rounded-full"
                    />
                                          <div className="ml-3">
                        <div className="font-semibold text-neutral-900">David M.</div>
                        <div className="text-sm text-neutral-600">Opening an online business</div>
                      </div>
                  </div>
                </div>
              </div>
              
              {/* Eric */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                
                {/* Content Area - Flex grow to push footer to bottom */}
                <div className="flex-1 flex flex-col">
                  {/* Headline */}
                  <h3 className="font-bold text-lg text-neutral-900 mb-4">
                    "Helped me stop overthinking."
                  </h3>
                  
                  {/* Body Text */}
                  <p className="text-neutral-700 leading-relaxed flex-1">
                    "Saw this and figured I'd give it a try instead of paying other brands much more, i was pretty satisfied and saved a lot."
                  </p>
                </div>
                
                {/* Footer - Always at bottom */}
                <div className="mt-6">
                  <hr className="border-gray-200 mb-4" />
                  <div className="flex items-center">
                    <img 
                      src="https://ui-avatars.com/api/?name=Eric+J&background=f59e0b&color=fff&size=40" 
                      alt="Eric J" 
                      className="w-10 h-10 rounded-full"
                    />
                                          <div className="ml-3">
                        <div className="font-semibold text-neutral-900">Eric J.</div>
                        <div className="text-sm text-neutral-600">First-time business owner</div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8" data-cta-section>
              <Button 
                className="bg-[#1E40AF] text-white text-lg font-semibold py-4 px-8 rounded-xl shadow hover:bg-[#1E3A8A] transition w-full max-w-xs"
                onClick={handleGetStarted}
              >
                Start My LLC for $49
              </Button>
            </div>
          </section>

          {/* Updated What's Included section with new benefit-focused descriptions */}
          <section className="w-full bg-white py-8 flex flex-col items-center justify-center border-t border-neutral-100">
            <div className="max-w-4xl w-full px-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">What's Included</h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 32,
                  }}
                >
                  <motion.div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, minHeight: 80 }}>
                    <span className="flex items-center justify-center" style={{ minWidth: 32, color: '#888', marginTop: 2 }}>
                      <FileText size={22} strokeWidth={2} />
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#18181b', lineHeight: 1.35, marginBottom: 2 }}>
                        Step-by-step state filing instructions
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#555', fontWeight: 400, lineHeight: 1.6 }}>
                        Personalized for your state so you know exactly what to file, where, and when — no guesswork.
                      </div>
                    </div>
                  </motion.div>
                  <motion.div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, minHeight: 80 }}>
                    <span className="flex items-center justify-center" style={{ minWidth: 32, color: '#888', marginTop: 2 }}>
                      <BadgeCheck size={22} strokeWidth={2} />
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#18181b', lineHeight: 1.35, marginBottom: 2 }}>
                        EIN application walkthrough
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#555', fontWeight: 400, lineHeight: 1.6 }}>
                        We'll guide you through getting your federal tax ID fast — skip the confusion and do it in minutes.
                      </div>
                    </div>
                  </motion.div>
                  <motion.div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, minHeight: 80 }}>
                    <span className="flex items-center justify-center" style={{ minWidth: 32, color: '#888', marginTop: 2 }}>
                      <ScrollText size={22} strokeWidth={2} />
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#18181b', lineHeight: 1.35, marginBottom: 2 }}>
                        Customizable Operating Agreement
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#555', fontWeight: 400, lineHeight: 1.6 }}>
                        Pre-filled and lawyer-inspired, ready to personalize in minutes to protect your business and structure.
                      </div>
                    </div>
                  </motion.div>
                  <motion.div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, minHeight: 80 }}>
                    <span className="flex items-center justify-center" style={{ minWidth: 32, color: '#888', marginTop: 2 }}>
                      <ListChecks size={22} strokeWidth={2} />
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#18181b', lineHeight: 1.35, marginBottom: 2 }}>
                        LLC launch checklist
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#555', fontWeight: 400, lineHeight: 1.6 }}>
                        Track every step from setup to launch so nothing slips through the cracks.
                      </div>
                    </div>
                  </motion.div>
                  <motion.div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, minHeight: 80 }}>
                    <span className="flex items-center justify-center" style={{ minWidth: 32, color: '#888', marginTop: 2 }}>
                      <LayoutDashboard size={22} strokeWidth={2} />
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#18181b', lineHeight: 1.35, marginBottom: 2 }}>
                        Dashboard access
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#555', fontWeight: 400, lineHeight: 1.6 }}>
                        All your documents, guides, and next steps in one clean, easy-to-use workspace.
                      </div>
                    </div>
                  </motion.div>
                  <motion.div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, minHeight: 80 }}>
                    <span className="flex items-center justify-center" style={{ minWidth: 32, color: '#888', marginTop: 2 }}>
                      <Sparkles size={22} strokeWidth={2} />
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#18181b', lineHeight: 1.35, marginBottom: 2 }}>
                        The Genie assistant
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#555', fontWeight: 400, lineHeight: 1.6 }}>
                        Smart AI help whenever you're stuck — answers in seconds, available 24/7.
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Dashboard Preview Video - "See How Genie Works in 60 Seconds" */}
          <div className="w-full px-4 mt-4">
            <DashboardPreviewVideo />
          </div>
          
          {/* Founder's Message Section */}
          <section className="w-full bg-[#F7F7F7] py-20 flex flex-col items-center justify-center">
            <div className="max-w-[700px] w-full px-4 text-center">
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                For Founders, By a Founder
              </motion.h2>
              
              <motion.div
                className="space-y-6 text-lg md:text-xl text-neutral-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p>Starting a business should feel empowering.</p>
                <p>For me, it was just overwhelming.</p>
                <p>I was tired of the confusing packages and hidden fees.</p>
                <p>I realized we just need a clear system to do it ourselves.</p>
                <p>So I created the antidote: a single $49 system that puts you in complete control.</p>
                <p>It's everything you need to launch with confidence.</p>
                <p>Nothing more, nothing less.</p>
              </motion.div>
              
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-semibold text-neutral-900 mb-1">Ignacio Aguilar</p>
                <p className="text-base text-neutral-600">Founder, Start With Genie</p>
              </motion.div>
            </div>
          </section>
          
          {/* AI Assistant Section with Video Demo */}
          <section className="w-full bg-white py-20 flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Column 1: Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                    Stuck? Get answers in seconds.
                  </h2>
                  
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    No more searching through confusing forums or waiting for email replies. Our AI assistant is trained on the LLC formation process to give you instant clarity whenever you need it, 24/7.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">24/7 Availability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Instant answers, no delays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Trained on state-specific rules</span>
                    </li>
                  </ul>
                </motion.div>
                
                {/* Column 2: Video Demo */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="relative w-full max-w-lg">
                    <motion.video
                      src="/genie-assistant.mov"
                      autoPlay
                      muted
                      loop
                      controls
                      controlsList="nodownload noremoteplayback"
                      disablePictureInPicture
                      playsInline
                      preload="metadata"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="rounded-2xl shadow-2xl w-full aspect-video bg-black object-cover"
                      style={{ outline: 'none', border: 'none', padding: 0 }}
                      onLoadedMetadata={(e) => {
                        if (e.currentTarget) {
                          e.currentTarget.playbackRate = 2.0;
                        }
                      }}
                      title="A screen recording of the Start With Genie AI assistant answering a question."
                    >
                      Your browser does not support the video tag.
                    </motion.video>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Genie vs. Old Way Comparison Chart */}
          <section className="w-full bg-white py-20 flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full px-4">
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                Genie vs. The Old Way
              </motion.h2>
              
              {/* Desktop View - 3 Column Grid */}
              <div className="hidden md:grid md:grid-cols-3 md:gap-8">
                {/* Column Headers */}
                <div className="text-center pb-4">
                  <h3 className="text-lg font-semibold text-neutral-700">Feature</h3>
                </div>
                <div className="text-center pb-4">
                  <h3 className="text-lg font-semibold text-neutral-700">Start With Genie</h3>
                </div>
                <div className="text-center pb-4">
                  <h3 className="text-lg font-semibold text-neutral-700">Traditional Filing Services</h3>
                </div>
                
                {/* Control Row */}
                <div className="py-4 border-b border-neutral-200">
                  <h4 className="font-semibold text-neutral-900">Control</h4>
                </div>
                <div className="py-4 border-b border-neutral-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">You file directly and stay in full control.</p>
                  </div>
                </div>
                <div className="py-4 border-b border-neutral-200">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">A third party files for you, often with delays.</p>
                  </div>
                </div>
                
                {/* Clarity Row */}
                <div className="py-4 border-b border-neutral-200">
                  <h4 className="font-semibold text-neutral-900">Clarity</h4>
                </div>
                <div className="py-4 border-b border-neutral-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">A clear roadmap so you understand every step.</p>
                  </div>
                </div>
                <div className="py-4 border-b border-neutral-200">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">A confusing process with little to no insight.</p>
                  </div>
                </div>
                
                {/* Price Row */}
                <div className="py-4 border-b border-neutral-200">
                  <h4 className="font-semibold text-neutral-900">Price</h4>
                </div>
                <div className="py-4 border-b border-neutral-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">$49 flat fee. That's it. No upsells.</p>
                  </div>
                </div>
                <div className="py-4 border-b border-neutral-200">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">$0 to $500+ with a maze of surprise fees & upsells.</p>
                  </div>
                </div>
                
                {/* Operating Agreement Row */}
                <div className="py-4 border-b border-neutral-200">
                  <h4 className="font-semibold text-neutral-900">Operating Agreement</h4>
                </div>
                <div className="py-4 border-b border-neutral-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">Included in your kit, fully customizable.</p>
                  </div>
                </div>
                <div className="py-4 border-b border-neutral-200">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">Almost always a separate, expensive add-on.</p>
                  </div>
                </div>
                
                {/* Speed Row */}
                <div className="py-4">
                  <h4 className="font-semibold text-neutral-900">Speed</h4>
                </div>
                <div className="py-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">Instant access to your documents and map.</p>
                  </div>
                </div>
                <div className="py-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">Days or weeks of processing and waiting.</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile View - Stacked Layout */}
              <div className="md:hidden space-y-8">
                {/* Control Block */}
                <div className="bg-white rounded-lg border border-neutral-200 p-6">
                  <h4 className="font-semibold text-neutral-900 text-lg mb-4">Control</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-700">You file directly and stay in full control.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-700">A third party files for you, often with delays.</p>
                    </div>
                  </div>
                </div>
                
                {/* Clarity Block */}
                <div className="bg-white rounded-lg border border-neutral-200 p-6">
                  <h4 className="font-semibold text-neutral-900 text-lg mb-4">Clarity</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-700">A clear roadmap so you understand every step.</p>
                    </div>
                                         <div className="flex items-start gap-3">
                       <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                       <p className="text-neutral-700">A confusing process with little to no insight.</p>
                     </div>
                  </div>
                </div>
                
                {/* Price Block */}
                <div className="bg-white rounded-lg border border-neutral-200 p-6">
                  <h4 className="font-semibold text-neutral-900 text-lg mb-4">Price</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-700">$49 flat fee. That's it. No upsells.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-700">$0 to $500+ with a maze of surprise fees & upsells.</p>
                    </div>
                  </div>
                </div>
                
                {/* Operating Agreement Block */}
                <div className="bg-white rounded-lg border border-neutral-200 p-6">
                  <h4 className="font-semibold text-neutral-900 text-lg mb-4">Operating Agreement</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-700">Included in your kit, fully customizable.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-700">Almost always a separate, expensive add-on.</p>
                    </div>
                  </div>
                </div>
                
                {/* Speed Block */}
                <div className="bg-white rounded-lg border border-neutral-200 p-6">
                  <h4 className="font-semibold text-neutral-900 text-lg mb-4">Speed</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-700">Instant access to your documents and map.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-700">Days or weeks of processing and waiting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <CompareSection />
          
          {/* What You Don't Get Section */}
          <section className="w-full max-w-3xl mx-auto flex flex-col items-center py-5 md:py-6 px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-neutral-900 mb-2">
              What You Don't Get
            </h2>
            <p className="text-base md:text-lg text-neutral-600 text-center mb-5">
              We cut out the stuff that makes other LLC setups slow, confusing, and overpriced.
            </p>
            <ul className="w-full max-w-md mx-auto flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-neutral-800 text-base md:text-lg">Confusing packages</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-neutral-800 text-base md:text-lg">Surprise fees</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-neutral-800 text-base md:text-lg">Endless upsells</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-neutral-800 text-base md:text-lg font-medium">
                  Just what you need — for $49 flat
                </span>
              </li>
            </ul>
          </section>
          
          <div className="w-full max-w-4xl mx-auto border-t border-neutral-200 mt-12 mb-8"></div>
          
          {/* Final CTA */}
          <section className="w-full max-w-xl mx-auto px-4 py-5 text-center" data-cta-section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Ready to launch your LLC in minutes?</h2>
            <Button 
              className="w-full max-w-xs mx-auto"
              onClick={handleGetStarted}
            >
              Start My LLC for $49
            </Button>
          </section>
          
          {/* FAQ Section - use landing page style and content */}
          <section className="w-full max-w-2xl mx-auto px-4 py-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4 text-center">FAQs</h2>
            <details className="mb-4 bg-white rounded-lg shadow-sm p-4">
              <summary className="font-medium text-gray-900 cursor-pointer">Do you file the LLC for me?</summary>
              <div className="mt-2 text-gray-700 text-sm">
                We don't — and that's intentional. Start With Genie gives you everything you need to file your LLC yourself in under 15 minutes. It's faster, clearer, and puts you in full control.
              </div>
            </details>
            <details className="mb-4 bg-white rounded-lg shadow-sm p-4">
              <summary className="font-medium text-gray-900 cursor-pointer">What do I actually get for $49?</summary>
              <div className="mt-2 text-gray-700 text-sm">
                You get everything you need to launch your LLC the right way:<br />
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Personalized state filing instructions</li>
                  <li>A guide to getting your EIN (free from the IRS)</li>
                  <li>A customizable operating agreement</li>
                  <li>A launch checklist</li>
                  <li>Access to the Genie assistant if you get stuck</li>
                </ul>
              </div>
            </details>
            <details className="mb-4 bg-white rounded-lg shadow-sm p-4">
              <summary className="font-medium text-gray-900 cursor-pointer">Is this legit? Can I really do it myself?</summary>
              <div className="mt-2 text-gray-700 text-sm">
                Yes — you don't need a lawyer or a $300+ service to start an LLC. Genie is built for people who want to move fast, skip the upsells, and keep full control. Everything is DIY-friendly, and we guide you through every step.
              </div>
            </details>
          </section>
        </main>
        <Footer />
      </div>
      
      {/* EIN Guide Popup */}
      <EINGuidePopup 
        isOpen={showPopup} 
        onClose={closePopup} 
        sourcePage="home" 
        markEmailSubmitted={markEmailSubmitted}
      />
    </>
  )
} 

function DashboardPreviewVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set playback speed to 1.25x on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
    }
  }, []);

  // Play video when it comes into view (Framer Motion)
  // User can pause/resume after that
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Sync play/pause state if user uses native controls
  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  return (
    <section className="w-full flex flex-col items-center justify-center py-3">
      <h2 className="text-center text-2xl font-semibold mb-2">
        See How Genie Works in 60 Seconds
      </h2>
      <div className="relative w-full flex justify-center">
        <motion.video
          ref={videoRef}
          src="/Dashboard-preview.mp4"
          autoPlay
          muted
          loop
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          playsInline
          preload="metadata"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-2xl w-full max-w-[720px] aspect-video bg-black object-cover"
          style={{ outline: 'none', border: 'none', padding: 0 }}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
        />
        {/* Only download, PiP, and remote playback are removed; all other native controls remain */}
      </div>
      <p className="text-gray-500 text-sm mt-2 text-center max-w-md">
        Get personalized instructions, EIN help, and downloads in one clean dashboard.
      </p>
    </section>
  );
} 
 
 
 
 
 