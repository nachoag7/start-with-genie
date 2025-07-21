'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'

export default function UGCLCCGuidePage() {
  const whyCreatorsChooseLLCs = [
    'Protect personal assets in case of disputes or chargebacks',
    'Separate brand income from personal accounts',
    'Work with brands that require a business name or EIN',
    'Look more professional and trustworthy',
    'Avoid messy tax situations at the end of the year'
  ];

  const whenToConsider = [
    'You’re earning over $500/month',
    'You’ve received a 1099 from a brand or platform',
    'You’re working with agencies or long-term contracts',
    'You’re pitching yourself to larger companies',
    'You want to keep your income organized and protected'
  ];

  const steps = [
    {
      number: '1',
      title: 'Choose your state',
      description: 'Most creators file in their home state. Delaware/Wyoming aren’t needed for UGC.',
    },
    {
      number: '2',
      title: 'Pick a business name',
      description: 'Make sure it’s unique and available — and includes “LLC.”',
    },
    {
      number: '3',
      title: 'Appoint a registered agent',
      description: 'This is the person or service that handles legal mail for your business.',
    },
    {
      number: '4',
      title: 'File your Articles of Organization',
      description: 'This is the form that officially creates your LLC. Fees vary by state ($50–$200).',
    },
    {
      number: '5',
      title: 'Create an Operating Agreement',
      description: 'Explains how your business runs — even if it’s just you. Optional but recommended.',
    },
    {
      number: '6',
      title: 'Get an EIN from the IRS',
      description: 'This is your business tax ID number. You’ll need it to invoice brands or open a business account.',
    },
    {
      number: '7',
      title: 'Open a business bank account',
      description: 'Helps you keep everything clean and separate — especially at tax time.',
    }
  ];

  const genieFeatures = [
    '✅ Personalized instructions based on your state',
    '✅ EIN walkthrough',
    '✅ Operating Agreement',
    '✅ Launch checklist',
    '✅ Auto-filled docs',
    '✅ A clean dashboard with all your downloads'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <SeoPageLayout>
      <div id="do-ugc-creators-need-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Do UGC Creators Need an LLC?
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              If you’re creating content for brands — UGC videos, testimonials, or sponsored TikToks — and starting to get paid, it might be time to treat it like a real business. You don’t need an LLC to start doing UGC, but forming one can protect you legally, make taxes cleaner, and help you land more deals. This guide breaks it all down.
            </motion.p>
          </div>
        </section>

        {/* What Is an LLC Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Is an LLC, and Why It Matters for UGC Creators</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                An LLC (Limited Liability Company) is a legal structure that separates your business from your personal life.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Without one, you’re operating as a sole proprietor — which means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>You’re personally liable for anything that goes wrong</li>
                <li>Your business income is tied directly to your name and personal bank account</li>
                <li>It can be harder to work with brands or open a business bank account</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                With an LLC, you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed">
                <li>Get limited liability protection</li>
                <li>Keep your personal and brand money separate</li>
                <li>Look more legit when pitching to brands or agencies</li>
                <li>Make taxes easier and cleaner</li>
              </ul>
            </motion.div>
          </div>
        </section>
        
        {/* Why UGC Creators Choose to Form LLCs Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why UGC Creators Choose to Form LLCs</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {whyCreatorsChooseLLCs.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* When to Consider Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">When Should You Set Up an LLC as a Creator?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t have to do it on day one. But it’s smart to consider if:
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {whenToConsider.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How to Start an LLC Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">How to Start an LLC for UGC Work</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Genie CTA Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Or Skip the Hassle</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Start With Genie gives UGC creators everything they need to set up an LLC — fast and clean.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 mb-12 text-left"
            >
              {genieFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <span className="text-neutral-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <p className="text-lg font-semibold text-neutral-800 leading-relaxed mb-8">
              Flat rate: $49 — no upsells, no confusion.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            >
              <Link href="/">
                <Button size="lg" className="text-lg bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none flex items-center justify-center gap-2 px-6 py-3">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  )
} 

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'

export default function UGCLCCGuidePage() {
  const whyCreatorsChooseLLCs = [
    'Protect personal assets in case of disputes or chargebacks',
    'Separate brand income from personal accounts',
    'Work with brands that require a business name or EIN',
    'Look more professional and trustworthy',
    'Avoid messy tax situations at the end of the year'
  ];

  const whenToConsider = [
    'You’re earning over $500/month',
    'You’ve received a 1099 from a brand or platform',
    'You’re working with agencies or long-term contracts',
    'You’re pitching yourself to larger companies',
    'You want to keep your income organized and protected'
  ];

  const steps = [
    {
      number: '1',
      title: 'Choose your state',
      description: 'Most creators file in their home state. Delaware/Wyoming aren’t needed for UGC.',
    },
    {
      number: '2',
      title: 'Pick a business name',
      description: 'Make sure it’s unique and available — and includes “LLC.”',
    },
    {
      number: '3',
      title: 'Appoint a registered agent',
      description: 'This is the person or service that handles legal mail for your business.',
    },
    {
      number: '4',
      title: 'File your Articles of Organization',
      description: 'This is the form that officially creates your LLC. Fees vary by state ($50–$200).',
    },
    {
      number: '5',
      title: 'Create an Operating Agreement',
      description: 'Explains how your business runs — even if it’s just you. Optional but recommended.',
    },
    {
      number: '6',
      title: 'Get an EIN from the IRS',
      description: 'This is your business tax ID number. You’ll need it to invoice brands or open a business account.',
    },
    {
      number: '7',
      title: 'Open a business bank account',
      description: 'Helps you keep everything clean and separate — especially at tax time.',
    }
  ];

  const genieFeatures = [
    '✅ Personalized instructions based on your state',
    '✅ EIN walkthrough',
    '✅ Operating Agreement',
    '✅ Launch checklist',
    '✅ Auto-filled docs',
    '✅ A clean dashboard with all your downloads'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <SeoPageLayout>
      <div id="do-ugc-creators-need-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Do UGC Creators Need an LLC?
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              If you’re creating content for brands — UGC videos, testimonials, or sponsored TikToks — and starting to get paid, it might be time to treat it like a real business. You don’t need an LLC to start doing UGC, but forming one can protect you legally, make taxes cleaner, and help you land more deals. This guide breaks it all down.
            </motion.p>
          </div>
        </section>

        {/* What Is an LLC Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Is an LLC, and Why It Matters for UGC Creators</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                An LLC (Limited Liability Company) is a legal structure that separates your business from your personal life.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Without one, you’re operating as a sole proprietor — which means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>You’re personally liable for anything that goes wrong</li>
                <li>Your business income is tied directly to your name and personal bank account</li>
                <li>It can be harder to work with brands or open a business bank account</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                With an LLC, you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed">
                <li>Get limited liability protection</li>
                <li>Keep your personal and brand money separate</li>
                <li>Look more legit when pitching to brands or agencies</li>
                <li>Make taxes easier and cleaner</li>
              </ul>
            </motion.div>
          </div>
        </section>
        
        {/* Why UGC Creators Choose to Form LLCs Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why UGC Creators Choose to Form LLCs</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {whyCreatorsChooseLLCs.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* When to Consider Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">When Should You Set Up an LLC as a Creator?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t have to do it on day one. But it’s smart to consider if:
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {whenToConsider.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How to Start an LLC Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">How to Start an LLC for UGC Work</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Genie CTA Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Or Skip the Hassle</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Start With Genie gives UGC creators everything they need to set up an LLC — fast and clean.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 mb-12 text-left"
            >
              {genieFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <span className="text-neutral-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <p className="text-lg font-semibold text-neutral-800 leading-relaxed mb-8">
              Flat rate: $49 — no upsells, no confusion.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            >
              <Link href="/">
                <Button size="lg" className="text-lg bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none flex items-center justify-center gap-2 px-6 py-3">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  )
} 

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'

export default function UGCLCCGuidePage() {
  const whyCreatorsChooseLLCs = [
    'Protect personal assets in case of disputes or chargebacks',
    'Separate brand income from personal accounts',
    'Work with brands that require a business name or EIN',
    'Look more professional and trustworthy',
    'Avoid messy tax situations at the end of the year'
  ];

  const whenToConsider = [
    'You’re earning over $500/month',
    'You’ve received a 1099 from a brand or platform',
    'You’re working with agencies or long-term contracts',
    'You’re pitching yourself to larger companies',
    'You want to keep your income organized and protected'
  ];

  const steps = [
    {
      number: '1',
      title: 'Choose your state',
      description: 'Most creators file in their home state. Delaware/Wyoming aren’t needed for UGC.',
    },
    {
      number: '2',
      title: 'Pick a business name',
      description: 'Make sure it’s unique and available — and includes “LLC.”',
    },
    {
      number: '3',
      title: 'Appoint a registered agent',
      description: 'This is the person or service that handles legal mail for your business.',
    },
    {
      number: '4',
      title: 'File your Articles of Organization',
      description: 'This is the form that officially creates your LLC. Fees vary by state ($50–$200).',
    },
    {
      number: '5',
      title: 'Create an Operating Agreement',
      description: 'Explains how your business runs — even if it’s just you. Optional but recommended.',
    },
    {
      number: '6',
      title: 'Get an EIN from the IRS',
      description: 'This is your business tax ID number. You’ll need it to invoice brands or open a business account.',
    },
    {
      number: '7',
      title: 'Open a business bank account',
      description: 'Helps you keep everything clean and separate — especially at tax time.',
    }
  ];

  const genieFeatures = [
    '✅ Personalized instructions based on your state',
    '✅ EIN walkthrough',
    '✅ Operating Agreement',
    '✅ Launch checklist',
    '✅ Auto-filled docs',
    '✅ A clean dashboard with all your downloads'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <SeoPageLayout>
      <div id="do-ugc-creators-need-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Do UGC Creators Need an LLC?
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              If you’re creating content for brands — UGC videos, testimonials, or sponsored TikToks — and starting to get paid, it might be time to treat it like a real business. You don’t need an LLC to start doing UGC, but forming one can protect you legally, make taxes cleaner, and help you land more deals. This guide breaks it all down.
            </motion.p>
          </div>
        </section>

        {/* What Is an LLC Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Is an LLC, and Why It Matters for UGC Creators</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                An LLC (Limited Liability Company) is a legal structure that separates your business from your personal life.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Without one, you’re operating as a sole proprietor — which means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>You’re personally liable for anything that goes wrong</li>
                <li>Your business income is tied directly to your name and personal bank account</li>
                <li>It can be harder to work with brands or open a business bank account</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                With an LLC, you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed">
                <li>Get limited liability protection</li>
                <li>Keep your personal and brand money separate</li>
                <li>Look more legit when pitching to brands or agencies</li>
                <li>Make taxes easier and cleaner</li>
              </ul>
            </motion.div>
          </div>
        </section>
        
        {/* Why UGC Creators Choose to Form LLCs Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why UGC Creators Choose to Form LLCs</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {whyCreatorsChooseLLCs.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* When to Consider Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">When Should You Set Up an LLC as a Creator?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t have to do it on day one. But it’s smart to consider if:
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {whenToConsider.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How to Start an LLC Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">How to Start an LLC for UGC Work</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Genie CTA Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Or Skip the Hassle</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Start With Genie gives UGC creators everything they need to set up an LLC — fast and clean.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 mb-12 text-left"
            >
              {genieFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <span className="text-neutral-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <p className="text-lg font-semibold text-neutral-800 leading-relaxed mb-8">
              Flat rate: $49 — no upsells, no confusion.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            >
              <Link href="/">
                <Button size="lg" className="text-lg bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none flex items-center justify-center gap-2 px-6 py-3">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  )
} 