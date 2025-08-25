'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from './ui/Button'
import { PremiumButton } from './ui/PremiumButton'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, HeadphonesIcon, FileText, ShieldCheck, Sparkles, DollarSign, Users } from 'lucide-react'
import dynamic from 'next/dynamic'

// Lazy-load components
const Footer = dynamic(() => import('./Footer'), { ssr: true })
const GenieChat = dynamic(() => import('./GenieChat'), { ssr: false })

import Hero from './Hero'
import HowItWorks from './HowItWorks'
import CompactDashboardCard from './CompactDashboardCard'
import WhatsIncludedStack from './WhatsIncludedStack'

import FAQ from './FAQ'
import PremiumChecklist from './PremiumChecklist'
import TrustBadge from './TrustBadge'

import Divider from './Divider'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What do I get for $49?",
    answer: "Guided LLC registration, guided EIN application, a customized operating agreement, and your Genie dashboard with support. Most services charge $300+."
  },
  {
    question: "Do you file the LLC for me?",
    answer: "No. Genie gives you the exact steps so you file fast and avoid inflated fees."
  },
  {
    question: "Is this legit?",
    answer: "Yes. It's the same process lawyers and filing services use, just simplified and affordable."
  },
  {
    question: "What if I get stuck?",
    answer: "Your Genie assistant guides you step by step and answers questions anytime."
  },
  {
    question: "Any ongoing costs?",
    answer: "No. One-time $49, lifetime access. No upsells."
  },
  {
    question: "How is Genie different?",
    answer: "Others profit from $300+ add-ons. Genie gives you everything upfront for $49."
  },
  {
    question: "Why only $49?",
    answer: "Because LLC setup doesn't need to be expensive. Genie is built to give founders clarity and confidence at a fair price."
  }
]

const featureDetails = [
  {
          label: 'Guided LLC Registration',
    description: 'Get clear, personalized filing steps based on your state so you can confidently submit your LLC without confusion.'
  },
  {
          label: 'Guided EIN Application',
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
    subtitle: 'Stay organized with a simple dashboard that shows exactly what\'s done and what\'s next.'
  },
  {
    icon: <HeadphonesIcon size={22} strokeWidth={2} />,
    title: 'Built-in AI assistant',
    subtitle: 'Get answers from Genie as you go — no delays, no confusion.'
  },
  {
    icon: <Sparkles size={22} strokeWidth={2} />,
    title: 'Documents built to launch',
    subtitle: 'Everything you need to register your business, Guided LLC Registration, Guided EIN Application, an operating agreement and your AI powered assistant'
  },
];

const compareItems = [
  {
    feature: 'Filing instructions',
    genie: 'Clear, personalized steps',
    legalzoom: 'Generic templates',
    rocket: 'Basic guidance'
  },
  {
          feature: 'Guided EIN Application',
    genie: 'Step-by-step walkthrough',
    legalzoom: 'Basic instructions',
    rocket: 'Minimal guidance'
  },
  {
    feature: 'Operating agreement',
    genie: 'Customizable template',
    legalzoom: 'Generic template',
    rocket: 'Basic template'
  },
  {
    feature: 'Progress tracking',
    genie: 'Smart dashboard',
    legalzoom: 'None',
    rocket: 'None'
  },
  {
    feature: 'AI assistant',
    genie: 'Built-in Genie',
    legalzoom: 'None',
    rocket: 'None'
  },
  {
    feature: 'Price',
    genie: '$49 flat',
    legalzoom: '$299+',
    rocket: '$99+'
  }
];

const compareCard = (idx: number, col: string) => {
  const item = compareItems[idx];
  const value = item[col as keyof typeof item];
  const isGenie = col === 'genie';
  
  return (
    <div className={`px-4 py-3 text-sm ${isGenie ? 'bg-blue-50 text-blue-900 font-medium' : 'text-gray-600'}`}>
      {value}
    </div>
  );
};

function SectionDivider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16" />
  );
}

function WhyGenieSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose Genie?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We built Genie because existing solutions are either too expensive or too confusing. Here's what makes us different.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyGenieItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompareSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Genie compares
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Genie stacks up against the competition
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-4">
            <div className="px-4 py-4 bg-gray-50 text-gray-900 font-semibold text-sm">
              Feature
            </div>
            <div className="px-4 py-4 bg-blue-50 text-blue-900 font-semibold text-sm">
              Genie
            </div>
            <div className="px-4 py-4 bg-gray-50 text-gray-900 font-semibold text-sm">
              LegalZoom
            </div>
            <div className="px-4 py-4 bg-gray-50 text-gray-900 font-semibold text-sm">
              Rocket Lawyer
            </div>
          </div>
          
          {compareItems.map((item, index) => (
            <div key={index} className="grid grid-cols-4 border-t border-gray-200">
              <div className="px-4 py-3 text-sm font-medium text-gray-900">
                {item.feature}
              </div>
              {compareCard(index, 'genie')}
              {compareCard(index, 'legalzoom')}
              {compareCard(index, 'rocket')}
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {subtitle}
            </p>
            {children}
          </div>
          {image && (
            <div className="flex-1">
              <img 
                src={image} 
                alt={imageAlt || title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AboutLLCSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is an LLC?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Limited Liability Company (LLC) is a business structure that protects your personal assets while keeping things simple.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Asset Protection
            </h3>
            <p className="text-gray-600">
              Your personal assets are protected from business liabilities
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
              <DollarSign size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Tax Flexibility
            </h3>
            <p className="text-gray-600">
              Choose how you want to be taxed (sole proprietor, partnership, or corporation)
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Easy Management
            </h3>
            <p className="text-gray-600">
              Simple structure with minimal paperwork and compliance requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface HomePageClientProps {
  heroTitle?: string;
  heroSubtitle?: string;
  customFaqs?: Array<{ q: string; a: string }>;
  customFeatures?: Array<{ title: string; desc: string }>;
}

export default function HomePageClient({ 
  heroTitle,
  heroSubtitle,
  customFaqs,
  customFeatures
}: HomePageClientProps = {}) {
  const router = useRouter()


  return (
    <div className="min-h-screen bg-white">
      <Hero title={heroTitle} subtitle={heroSubtitle} />
      
      <HowItWorks />
      
      {/* Dashboard Sample */}
      <section className="py-20 bg-white">
        <div className="flex justify-center">
          <CompactDashboardCard />
        </div>
      </section>
      
      <WhatsIncludedStack features={customFeatures} />
      
      <FAQ faqs={customFaqs} />
      
      <Footer />
      

    </div>
  );
}

 