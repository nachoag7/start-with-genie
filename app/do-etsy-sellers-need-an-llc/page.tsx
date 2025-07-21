'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'

export default function EtsyLLCGuidePage() {
  const whenToConsider = [
    'You’re making consistent monthly revenue',
    'You’re spending on inventory, ads, or tools',
    'You want cleaner books come tax time',
    'You’re nervous about personal liability',
    'You’re planning to grow your shop beyond Etsy'
  ];

  const steps = [
    {
      number: '1',
      title: 'Pick your state',
      description: 'Use your home state unless you have a reason to choose another (e.g. Delaware or Wyoming).',
    },
    {
      number: '2',
      title: 'Name your business',
      description: 'Include “LLC” and make sure the name is available on your state’s website.',
    },
    {
      number: '3',
      title: 'Appoint a registered agent',
      description: 'This is someone (you or a service) who can receive legal mail on behalf of your LLC.',
    },
    {
      number: '4',
      title: 'File your Articles of Organization',
      description: 'This is the official document that creates your LLC. It usually costs $50–$200 depending on the state.',
    },
    {
      number: '5',
      title: 'Draft an Operating Agreement',
      description: 'This document outlines how your business will run and is recommended even if it’s not required.',
    },
    {
      number: '6',
      title: 'Apply for an EIN',
      description: 'Get your Employer Identification Number from the IRS (free). You’ll use it for taxes and banking.',
    },
    {
      number: '7',
      title: 'Open a business bank account',
      description: 'This keeps your business and personal finances separate, protects your liability shield, and makes taxes easier.',
    }
  ];

  const whyLLCHelps = [
    'Limited liability protection',
    'Clean separation of personal and business finances',
    'Flexible tax options',
    'Easier access to banking and credit',
    'Looks more professional and legitimate'
  ];

  const genieFeatures = [
    'Personalized state filing instructions',
    'EIN walkthrough',
    'Operating Agreement',
    'Business launch checklist',
    'Auto-filled docs',
    'Clean dashboard and downloadable PDFs'
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
      <div id="do-etsy-sellers-need-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Do Etsy Sellers Need an LLC?
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              If you’re selling on Etsy and starting to see consistent orders, you’re probably wondering if you need to make things more official. The truth is, Etsy doesn’t require an LLC — but many sellers choose to form one anyway. Why? Because once money starts flowing, so does risk, responsibility, and tax complexity. Forming an LLC can protect your personal finances, help you stay organized, and make your shop feel like a real business (because it is). This guide breaks down what an LLC does, whether it makes sense for your shop, and how to start one — step-by-step.
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Is an LLC, and Why Does It Matter for Etsy Sellers?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                A Limited Liability Company (LLC) is a simple legal structure that separates your business from you personally.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Without one, you’re operating as a sole proprietor by default — which means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>You’re personally liable for business debts or legal claims</li>
                <li>All income and expenses are mixed with your personal finances</li>
                <li>It can be harder to grow, hire, or work with suppliers</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                With an LLC, you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed">
                <li>Protect your personal assets</li>
                <li>Keep business and personal money separate</li>
                <li>Gain access to more flexible tax options</li>
                <li>Look more legit to customers, vendors, and lenders</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* When to Consider Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">When Should You Consider Setting Up an LLC?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t need one when you’re just testing the waters. But it might be time if:
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
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">How to Start an LLC for Your Etsy Shop</h2>
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
        
        {/* Why Forming an LLC Helps Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why Forming an LLC Helps Etsy Sellers</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {whyLLCHelps.map((benefit, index) => (
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
                Start With Genie gives you everything you need to set up your LLC — without the upsells, hidden fees, or legal confusion.
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
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <p className="text-lg font-semibold text-neutral-800 leading-relaxed mb-8">
              All for $49 — flat rate. No fluff.
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

export default function EtsyLLCGuidePage() {
  const whenToConsider = [
    'You’re making consistent monthly revenue',
    'You’re spending on inventory, ads, or tools',
    'You want cleaner books come tax time',
    'You’re nervous about personal liability',
    'You’re planning to grow your shop beyond Etsy'
  ];

  const steps = [
    {
      number: '1',
      title: 'Pick your state',
      description: 'Use your home state unless you have a reason to choose another (e.g. Delaware or Wyoming).',
    },
    {
      number: '2',
      title: 'Name your business',
      description: 'Include “LLC” and make sure the name is available on your state’s website.',
    },
    {
      number: '3',
      title: 'Appoint a registered agent',
      description: 'This is someone (you or a service) who can receive legal mail on behalf of your LLC.',
    },
    {
      number: '4',
      title: 'File your Articles of Organization',
      description: 'This is the official document that creates your LLC. It usually costs $50–$200 depending on the state.',
    },
    {
      number: '5',
      title: 'Draft an Operating Agreement',
      description: 'This document outlines how your business will run and is recommended even if it’s not required.',
    },
    {
      number: '6',
      title: 'Apply for an EIN',
      description: 'Get your Employer Identification Number from the IRS (free). You’ll use it for taxes and banking.',
    },
    {
      number: '7',
      title: 'Open a business bank account',
      description: 'This keeps your business and personal finances separate, protects your liability shield, and makes taxes easier.',
    }
  ];

  const whyLLCHelps = [
    'Limited liability protection',
    'Clean separation of personal and business finances',
    'Flexible tax options',
    'Easier access to banking and credit',
    'Looks more professional and legitimate'
  ];

  const genieFeatures = [
    'Personalized state filing instructions',
    'EIN walkthrough',
    'Operating Agreement',
    'Business launch checklist',
    'Auto-filled docs',
    'Clean dashboard and downloadable PDFs'
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
      <div id="do-etsy-sellers-need-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Do Etsy Sellers Need an LLC?
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              If you’re selling on Etsy and starting to see consistent orders, you’re probably wondering if you need to make things more official. The truth is, Etsy doesn’t require an LLC — but many sellers choose to form one anyway. Why? Because once money starts flowing, so does risk, responsibility, and tax complexity. Forming an LLC can protect your personal finances, help you stay organized, and make your shop feel like a real business (because it is). This guide breaks down what an LLC does, whether it makes sense for your shop, and how to start one — step-by-step.
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Is an LLC, and Why Does It Matter for Etsy Sellers?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                A Limited Liability Company (LLC) is a simple legal structure that separates your business from you personally.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Without one, you’re operating as a sole proprietor by default — which means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>You’re personally liable for business debts or legal claims</li>
                <li>All income and expenses are mixed with your personal finances</li>
                <li>It can be harder to grow, hire, or work with suppliers</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                With an LLC, you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed">
                <li>Protect your personal assets</li>
                <li>Keep business and personal money separate</li>
                <li>Gain access to more flexible tax options</li>
                <li>Look more legit to customers, vendors, and lenders</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* When to Consider Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">When Should You Consider Setting Up an LLC?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t need one when you’re just testing the waters. But it might be time if:
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
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">How to Start an LLC for Your Etsy Shop</h2>
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
        
        {/* Why Forming an LLC Helps Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why Forming an LLC Helps Etsy Sellers</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {whyLLCHelps.map((benefit, index) => (
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
                Start With Genie gives you everything you need to set up your LLC — without the upsells, hidden fees, or legal confusion.
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
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <p className="text-lg font-semibold text-neutral-800 leading-relaxed mb-8">
              All for $49 — flat rate. No fluff.
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

export default function EtsyLLCGuidePage() {
  const whenToConsider = [
    'You’re making consistent monthly revenue',
    'You’re spending on inventory, ads, or tools',
    'You want cleaner books come tax time',
    'You’re nervous about personal liability',
    'You’re planning to grow your shop beyond Etsy'
  ];

  const steps = [
    {
      number: '1',
      title: 'Pick your state',
      description: 'Use your home state unless you have a reason to choose another (e.g. Delaware or Wyoming).',
    },
    {
      number: '2',
      title: 'Name your business',
      description: 'Include “LLC” and make sure the name is available on your state’s website.',
    },
    {
      number: '3',
      title: 'Appoint a registered agent',
      description: 'This is someone (you or a service) who can receive legal mail on behalf of your LLC.',
    },
    {
      number: '4',
      title: 'File your Articles of Organization',
      description: 'This is the official document that creates your LLC. It usually costs $50–$200 depending on the state.',
    },
    {
      number: '5',
      title: 'Draft an Operating Agreement',
      description: 'This document outlines how your business will run and is recommended even if it’s not required.',
    },
    {
      number: '6',
      title: 'Apply for an EIN',
      description: 'Get your Employer Identification Number from the IRS (free). You’ll use it for taxes and banking.',
    },
    {
      number: '7',
      title: 'Open a business bank account',
      description: 'This keeps your business and personal finances separate, protects your liability shield, and makes taxes easier.',
    }
  ];

  const whyLLCHelps = [
    'Limited liability protection',
    'Clean separation of personal and business finances',
    'Flexible tax options',
    'Easier access to banking and credit',
    'Looks more professional and legitimate'
  ];

  const genieFeatures = [
    'Personalized state filing instructions',
    'EIN walkthrough',
    'Operating Agreement',
    'Business launch checklist',
    'Auto-filled docs',
    'Clean dashboard and downloadable PDFs'
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
      <div id="do-etsy-sellers-need-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Do Etsy Sellers Need an LLC?
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              If you’re selling on Etsy and starting to see consistent orders, you’re probably wondering if you need to make things more official. The truth is, Etsy doesn’t require an LLC — but many sellers choose to form one anyway. Why? Because once money starts flowing, so does risk, responsibility, and tax complexity. Forming an LLC can protect your personal finances, help you stay organized, and make your shop feel like a real business (because it is). This guide breaks down what an LLC does, whether it makes sense for your shop, and how to start one — step-by-step.
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Is an LLC, and Why Does It Matter for Etsy Sellers?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                A Limited Liability Company (LLC) is a simple legal structure that separates your business from you personally.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Without one, you’re operating as a sole proprietor by default — which means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>You’re personally liable for business debts or legal claims</li>
                <li>All income and expenses are mixed with your personal finances</li>
                <li>It can be harder to grow, hire, or work with suppliers</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                With an LLC, you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed">
                <li>Protect your personal assets</li>
                <li>Keep business and personal money separate</li>
                <li>Gain access to more flexible tax options</li>
                <li>Look more legit to customers, vendors, and lenders</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* When to Consider Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">When Should You Consider Setting Up an LLC?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t need one when you’re just testing the waters. But it might be time if:
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
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">How to Start an LLC for Your Etsy Shop</h2>
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
        
        {/* Why Forming an LLC Helps Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why Forming an LLC Helps Etsy Sellers</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {whyLLCHelps.map((benefit, index) => (
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
                Start With Genie gives you everything you need to set up your LLC — without the upsells, hidden fees, or legal confusion.
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
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <p className="text-lg font-semibold text-neutral-800 leading-relaxed mb-8">
              All for $49 — flat rate. No fluff.
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