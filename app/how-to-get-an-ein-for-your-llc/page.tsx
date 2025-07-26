'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { CheckCircle, ArrowRight, CreditCard, Building2, FileText, ShieldCheck, Users, Banknote } from 'lucide-react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'
import { useEINPopup } from '../../hooks/useEINPopup'
import EINGuidePopup from '../../components/EINGuidePopup'

export default function EINGuidePage() {
  const { showPopup, closePopup, markEmailSubmitted } = useEINPopup();
  
  const benefits = [
    'Open a business bank account',
    'Hire employees and set up payroll',
    'File federal and state taxes properly',
    'Apply for business credit and loans',
    'Protect your personal information'
  ]

  const steps = [
    {
      number: '1',
      title: 'Visit the IRS EIN application page',
      description: 'Go to the official IRS website and click "Apply Online Now" to begin your application.',
      link: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
      linkText: 'IRS EIN Portal'
    },
    {
      number: '2',
      title: 'Select your entity type',
      description: 'Choose "Limited Liability Company (LLC)" as your business structure.',
    },
    {
      number: '3',
      title: 'Fill in your LLC details',
      description: 'Provide your LLC name, address, members, and other required information.',
    },
    {
      number: '4',
      title: 'Submit and receive instantly',
      description: 'Complete the application and download your EIN confirmation letter immediately.',
    }
  ]

  const genieFeatures = [
    'Guided EIN application walkthrough',
    'Pre-filled forms with your LLC info',
    'Instant EIN confirmation',
    'Step-by-step instructions',
    'No confusing legal jargon'
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

  return (
    <SeoPageLayout>
      <div id="how-to-get-an-ein-for-your-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              How to Get an EIN for Your LLC
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              A clear, step-by-step guide to getting your Employer Identification Number (EIN) from the IRS — no confusion, no legal jargon.
            </motion.p>
          </div>
        </section>

        {/* What is an EIN Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Is an EIN?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                An Employer Identification Number (EIN) is like a Social Security Number for your business. It's issued by the IRS and is used to identify your LLC for tax and banking purposes. Think of it as your business's unique fingerprint for all official transactions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why You Need One Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why You Need an EIN</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
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

        {/* Steps Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">How to Get an EIN (Step-by-Step)</h2>
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
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-[#3A8DFF]">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900">{step.title}</h3>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                      {step.link && (
                        <a
                          href={step.link}
                          className="text-blue-600 underline ml-1 hover:text-blue-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {step.linkText}
                        </a>
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Genie CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why Most Founders Use Genie to File Their EIN</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Filing for your EIN manually works — but it's easy to make mistakes or waste hours figuring it out. Genie gives you a faster, clearer way.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 mb-12"
            >
              {genieFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-neutral-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center pt-8"
            >
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Need help filing your EIN?</h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Start With Genie gives you guided instructions included in your LLC setup.
              </p>
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
      
      {/* EIN Guide Popup */}
      <EINGuidePopup
        isOpen={showPopup}
        onClose={closePopup}
        sourcePage="/how-to-get-an-ein-for-your-llc"
        markEmailSubmitted={markEmailSubmitted}
      />
    </SeoPageLayout>
  )
}