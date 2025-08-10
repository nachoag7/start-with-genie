'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../components/ui/Button'
import PremiumButton from '../components/ui/PremiumButton'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Zap, LayoutDashboard, HeadphonesIcon, FileText, ShieldOff, GaugeCircle, User, BadgeDollarSign, CheckCircle, CheckCircle2, ShieldCheck, Sparkles, Timer as TimerIcon, ArrowRightLeft, XCircle, Users, ThumbsUp, Shield, BarChart, DollarSign, Banknote, Rocket, Briefcase, KeyRound, ScrollText, ClipboardCheck, Bot, BadgeCheck, ListChecks, Clock, Quote, Star } from 'lucide-react'
import Footer from '../components/Footer'
import Head from 'next/head'
import EINGuidePopup from '../components/EINGuidePopup'
import { useEINPopup } from '../hooks/useEINPopup'
import Timer from '../components/Timer'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import WhatsIncludedStack from '../components/WhatsIncludedStack'
import GenieChat from '../components/GenieChat'
import FounderNote from '../components/FounderNote'
import FAQ from '../components/FAQ'

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
      
      <div className="light-surface min-h-screen flex flex-col">
        

        
        <main className="flex-1">
          
          {/* Hero Section */}
          <Hero />

          {/* Testimonial Section - High Trust Design */}
          <Testimonials />

          {/* What's Included Section */}
          <WhatsIncludedStack />
          
          {/* Dashboard Preview Video - "See How Genie Works in 60 Seconds" */}
          <div className="w-full px-4 mt-4">
            <DashboardPreviewVideo />
          </div>
          
          {/* Founder's Message Section */}
          <FounderNote />
          
          {/* AI Assistant Section with Video Demo */}
          <section className="w-full bg-white py-32 flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Column 1: Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl md:text-[36px] font-bold text-neutral-900 tracking-tight leading-tight">
                    Stuck? Get answers in seconds.
                  </h2>
                  
                  <div className="max-w-[560px]">
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      No more searching through confusing forums or waiting for email replies. Our AI assistant is trained on the LLC formation process to give you instant clarity whenever you need it, 24/7.
                    </p>
                  </div>
                  
                  <ul className="space-y-5">
                    <motion.li 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
                          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-green-500"/>
                          <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900">24/7 Availability</span>
                        <span className="block text-neutral-500 text-sm mt-0.5">Always there when you need help</span>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
                          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-green-500"/>
                          <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900">Instant answers, no delays</span>
                        <span className="block text-neutral-500 text-sm mt-0.5">Get clarity immediately, not tomorrow</span>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
                          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-green-500"/>
                          <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900">Trained on state-specific rules</span>
                        <span className="block text-neutral-500 text-sm mt-0.5">Knows your state's requirements inside out</span>
                      </div>
                    </motion.li>
                  </ul>
                </motion.div>
                
                {/* Column 2: Genie Assistant Demo */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="relative w-full max-w-lg">
                    <GenieChat 
                      avatarSrc="/genie-preview.png"
                      userName=""
                      userState=""
                      isDemo={true}
                    />
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
              
              {/* Desktop View - Table */}
              <div className="hidden md:block">
                <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700 border-b border-neutral-200">Feature</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700 border-b border-neutral-200">Start With Genie</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700 border-b border-neutral-200">Traditional Filing Services</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-6 py-4 border-b border-neutral-200">
                          <strong className="text-neutral-900">Control</strong>
                        </td>
                        <td className="px-6 py-4 border-b border-neutral-200 text-neutral-700">
                          You file directly and stay in full control.
                        </td>
                        <td className="px-6 py-4 border-b border-neutral-200 text-neutral-700">
                          A third party files for you, often with delays.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 border-b border-neutral-200">
                          <strong className="text-neutral-900">Clarity</strong>
                        </td>
                        <td className="px-6 py-4 border-b border-neutral-200 text-neutral-700">
                          A clear system so you understand every step.
                        </td>
                        <td className="px-6 py-4 border-b border-neutral-200 text-neutral-700">
                          A confusing process with little to no insight.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 border-b border-neutral-200">
                          <strong className="text-neutral-900">Price</strong>
                        </td>
                        <td className="px-6 py-4 border-b border-neutral-200 text-neutral-700">
                          $49 flat fee. No upsells.
                        </td>
                        <td className="px-6 py-4 border-b border-neutral-200 text-neutral-700">
                          $0 to $500+ with hidden fees and surprise charges.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 border-b border-neutral-200">
                          <strong className="text-neutral-900">Operating Agreement</strong>
                        </td>
                        <td className="px-6 py-4 border-b border-neutral-200 text-neutral-700">
                          Included in your kit, fully customizable.
                        </td>
                        <td className="px-6 py-4 border-b border-neutral-200 text-neutral-700">
                          Almost always a separate, expensive add-on.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">
                          <strong className="text-neutral-900">Speed</strong>
                        </td>
                        <td className="px-6 py-4 text-neutral-700">
                          Instant access to your documents and tools.
                        </td>
                        <td className="px-6 py-4 text-neutral-700">
                          Days or weeks of processing and waiting.
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                      <p className="text-neutral-700">A clear system so you understand every step.</p>
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
                      <p className="text-neutral-700">$49 flat fee. No upsells.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-700">$0 to $500+ with hidden fees and surprise charges.</p>
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
                      <p className="text-neutral-700">Instant access to your documents and tools.</p>
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
          

          
          <div className="w-full max-w-4xl mx-auto border-t border-neutral-200 mt-12 mb-8"></div>
          
          {/* Final CTA */}
          <section className="w-full max-w-xl mx-auto px-4 py-5 text-center" data-cta-section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Ready to launch your LLC in minutes?</h2>
            <Link href="/checkout">
              <PremiumButton size="md" className="w-full max-w-xs mx-auto">
                Start My LLC for $49
              </PremiumButton>
            </Link>
          </section>
          
          {/* FAQ Section */}
          <FAQ />
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
    <section id="how-it-works" className="w-full flex flex-col items-center justify-center py-3">
      <h2 className="text-center text-2xl font-semibold mb-2">
        See How Genie Works in 30 Seconds
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
      <div className="text-center mt-6" data-cta-section>
        <Link href="/checkout">
          <PremiumButton size="md" className="w-full max-w-xs">
            Start My LLC for $49
          </PremiumButton>
        </Link>
      </div>
    </section>
  );
} 
 
 
 
 
 