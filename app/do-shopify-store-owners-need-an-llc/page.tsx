'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'

export default function ShopifyLLCGuidePage() {
  const whenToConsider = [
    'You’re making $1K/month or more',
    'You’re investing in ads, inventory, or software',
    'You want a clean setup for taxes and bookkeeping',
    'You’re worried about risk or chargebacks',
    'You want to scale or hire help down the line'
  ];

  const steps = [
    {
      number: '1',
      title: 'Pick your state',
      description: 'Most people form their LLC in their home state. Some choose Delaware or Wyoming, but local is usually best for ecommerce.',
    },
    {
      number: '2',
      title: 'Name your business',
      description: 'Make sure it’s unique and includes “LLC.” You can check availability through your state’s website.',
    },
    {
      number: '3',
      title: 'Choose a registered agent',
      description: 'This person (you or a service) handles legal mail for your LLC.',
    },
    {
      number: '4',
      title: 'File Articles of Organization',
      description: 'This is the core document that legally creates your LLC. Filing costs typically range from $50 to $200.',
    },
    {
      number: '5',
      title: 'Draft an Operating Agreement',
      description: 'Outlines how your business is structured and run. Optional in some states, but highly recommended.',
    },
    {
      number: '6',
      title: 'Get an EIN (Employer Identification Number)',
      description: 'This is your business’s tax ID, used to file taxes and open a business account. Free through the IRS.',
    },
    {
      number: '7',
      title: 'Open a business bank account',
      description: 'Keeps your finances separate, strengthens your liability protection, and makes tax time easier.',
    }
  ];

  const whyLLCHelps = [
    'Limits your personal liability',
    'Keeps your finances clean',
    'Unlocks better tax flexibility',
    'Makes your store more professional',
    'Builds a real business foundation'
  ];

  const genieFeatures = [
    '✅ Personalized state filing instructions',
    '✅ EIN walkthrough',
    '✅ Operating Agreement',
    '✅ Launch checklist',
    '✅ Auto-filled documents',
    '✅ Clean dashboard with instant downloads'
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
      <div id="do-shopify-sellers-need-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Do Shopify Store Owners Need an LLC?
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              If you’re running a Shopify store and starting to see steady orders, you’ve probably asked yourself: “Should I make this official?” The truth is, Shopify doesn’t require you to form an LLC — but once real money is coming in, forming one can give you peace of mind, protect your personal assets, and set you up for long-term growth. This guide explains what an LLC actually does, why so many store owners form one, and how to set it up step-by-step if you’re ready.
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Is an LLC, and Why It Matters for Shopify Sellers</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                An LLC (Limited Liability Company) is a legal structure that separates you from your business.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Without one, you’re automatically operating as a sole proprietor. That means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>You’re personally liable for anything that goes wrong</li>
                <li>Your personal money and business money are legally the same</li>
                <li>You could face higher tax complications or risk if your store grows quickly</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                With an LLC, you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed">
                <li>Get limited liability protection</li>
                <li>Separate personal and business finances</li>
                <li>Access better tax options as your income grows</li>
                <li>Look more trustworthy to payment processors, partners, and suppliers</li>
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">When Should You Form an LLC for Your Shopify Store?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t need to form one on day one. But it might be time if:
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
            <p className="text-lg text-neutral-600 leading-relaxed mt-4">
              An LLC sets the foundation so you can grow without stress.
            </p>
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">How to Start an LLC for Your Shopify Store</h2>
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why Forming an LLC Helps Shopify Sellers</h2>
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
                Start With Genie gives you everything you need to set up your LLC — step-by-step — without the confusion or expensive upsells.
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
              Flat rate: $49 — no hidden fees, no lawyer jargon.
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

export default function ShopifyLLCGuidePage() {
  const whenToConsider = [
    'You’re making $1K/month or more',
    'You’re investing in ads, inventory, or software',
    'You want a clean setup for taxes and bookkeeping',
    'You’re worried about risk or chargebacks',
    'You want to scale or hire help down the line'
  ];

  const steps = [
    {
      number: '1',
      title: 'Pick your state',
      description: 'Most people form their LLC in their home state. Some choose Delaware or Wyoming, but local is usually best for ecommerce.',
    },
    {
      number: '2',
      title: 'Name your business',
      description: 'Make sure it’s unique and includes “LLC.” You can check availability through your state’s website.',
    },
    {
      number: '3',
      title: 'Choose a registered agent',
      description: 'This person (you or a service) handles legal mail for your LLC.',
    },
    {
      number: '4',
      title: 'File Articles of Organization',
      description: 'This is the core document that legally creates your LLC. Filing costs typically range from $50 to $200.',
    },
    {
      number: '5',
      title: 'Draft an Operating Agreement',
      description: 'Outlines how your business is structured and run. Optional in some states, but highly recommended.',
    },
    {
      number: '6',
      title: 'Get an EIN (Employer Identification Number)',
      description: 'This is your business’s tax ID, used to file taxes and open a business account. Free through the IRS.',
    },
    {
      number: '7',
      title: 'Open a business bank account',
      description: 'Keeps your finances separate, strengthens your liability protection, and makes tax time easier.',
    }
  ];

  const whyLLCHelps = [
    'Limits your personal liability',
    'Keeps your finances clean',
    'Unlocks better tax flexibility',
    'Makes your store more professional',
    'Builds a real business foundation'
  ];

  const genieFeatures = [
    '✅ Personalized state filing instructions',
    '✅ EIN walkthrough',
    '✅ Operating Agreement',
    '✅ Launch checklist',
    '✅ Auto-filled documents',
    '✅ Clean dashboard with instant downloads'
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
      <div id="do-shopify-sellers-need-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Do Shopify Store Owners Need an LLC?
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              If you’re running a Shopify store and starting to see steady orders, you’ve probably asked yourself: “Should I make this official?” The truth is, Shopify doesn’t require you to form an LLC — but once real money is coming in, forming one can give you peace of mind, protect your personal assets, and set you up for long-term growth. This guide explains what an LLC actually does, why so many store owners form one, and how to set it up step-by-step if you’re ready.
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Is an LLC, and Why It Matters for Shopify Sellers</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                An LLC (Limited Liability Company) is a legal structure that separates you from your business.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Without one, you’re automatically operating as a sole proprietor. That means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>You’re personally liable for anything that goes wrong</li>
                <li>Your personal money and business money are legally the same</li>
                <li>You could face higher tax complications or risk if your store grows quickly</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                With an LLC, you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed">
                <li>Get limited liability protection</li>
                <li>Separate personal and business finances</li>
                <li>Access better tax options as your income grows</li>
                <li>Look more trustworthy to payment processors, partners, and suppliers</li>
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">When Should You Form an LLC for Your Shopify Store?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t need to form one on day one. But it might be time if:
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
            <p className="text-lg text-neutral-600 leading-relaxed mt-4">
              An LLC sets the foundation so you can grow without stress.
            </p>
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">How to Start an LLC for Your Shopify Store</h2>
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
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why Forming an LLC Helps Shopify Sellers</h2>
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
                Start With Genie gives you everything you need to set up your LLC — step-by-step — without the confusion or expensive upsells.
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
              Flat rate: $49 — no hidden fees, no lawyer jargon.
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