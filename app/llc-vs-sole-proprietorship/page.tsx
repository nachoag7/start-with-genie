'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { CheckCircle, XCircle, AlertTriangle, User, ShieldCheck, Users, Briefcase, Hammer, Leaf, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'

export default function LLCvsSoleProprietorshipPage() {
  const comparisonData = [
    {
      feature: 'Personal Liability',
      soleProprietorship: { status: 'no', text: 'No protection' },
      llc: { status: 'yes', text: 'Protected' }
    },
    {
      feature: 'Tax Simplicity',
      soleProprietorship: { status: 'yes', text: 'Simplest' },
      llc: { status: 'yes', text: 'Flexible' }
    },
    {
      feature: 'Legal Setup',
      soleProprietorship: { status: 'yes', text: 'No filing needed' },
      llc: { status: 'warning', text: 'State filing required' }
    },
    {
      feature: 'Business Credibility',
      soleProprietorship: { status: 'warning', text: 'Less formal' },
      llc: { status: 'yes', text: 'More formal' }
    },
    {
      feature: 'Bank Accounts',
      soleProprietorship: { status: 'warning', text: 'Optional' },
      llc: { status: 'yes', text: 'Recommended separate account' }
    }
  ]

  const soleProprietorshipBenefits = [
    'You\'re testing out a small solo project',
    'You want to keep things ultra-simple',
    'You\'re not too worried about liability'
  ]

  const llcBenefits = [
    'You want personal asset protection',
    'You\'re working with business partners',
    'You\'re building long-term and want credibility'
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'yes':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'no':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      default:
        return null
    }
  }

  return (
    <SeoPageLayout>
      <div id="llc-vs-sole-proprietorship">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              LLC vs Sole Proprietorship: What's Right for You?
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              Clear, side-by-side comparisons to help you choose confidently.
            </motion.p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Not sure what to choose?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Most new founders start as sole proprietors or form an LLC—but each has pros and cons. This page walks you through the differences, no jargon.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6 text-center">Side-by-side Comparison</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="overflow-hidden rounded-xl border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-50 border-b border-gray-200">
                <div className="p-6 font-semibold text-neutral-900">Feature</div>
                <div className="p-6 font-semibold text-neutral-900 text-center">Sole Proprietorship</div>
                <div className="p-6 font-semibold text-neutral-900 text-center">LLC</div>
              </div>
              
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="p-6 font-medium text-neutral-900">{row.feature}</div>
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {getStatusIcon(row.soleProprietorship.status)}
                    </div>
                    <span className="text-sm text-neutral-600">{row.soleProprietorship.text}</span>
                  </div>
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {getStatusIcon(row.llc.status)}
                    </div>
                    <span className="text-sm text-neutral-600">{row.llc.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* When Sole Proprietorship Works Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">When a Sole Proprietorship Might Work</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {soleProprietorshipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
                >
                  <User className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-neutral-700 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* When to Form LLC Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">When You Should Form an LLC</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {llcBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
                >
                  <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-neutral-700 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Highlight Box Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
              className="border-l-4 border-blue-600 pl-6 py-4"
            >
              <p className="text-lg text-neutral-700 leading-relaxed">
                <strong>Most founders who plan to grow their business form an LLC</strong>—and Start With Genie makes it fast, affordable, and easy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center pt-8"
            >
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Ready to start your LLC?</h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Start With Genie gives you the documents and guidance to do it right—without confusing steps.
              </p>
              <Link href="/checkout">
                <Button size="lg" className="text-lg">
                  Get Started
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