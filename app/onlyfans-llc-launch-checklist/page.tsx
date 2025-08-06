'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, CheckCircle, XCircle, ArrowRight, List, CheckSquare, Square, Target } from 'lucide-react'
import SeoPageLayout from '../../components/SeoPageLayout'
import { Button } from '../../components/ui/Button'
import Footer from '../../components/Footer'
import Head from 'next/head'

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

export default function OnlyFansLLCLaunchChecklistPage() {
  return (
    <>
      <Head>
        <title>OnlyFans Business Checklist – Launch with Confidence</title>
        <meta name="description" content="The step-by-step checklist to legally set up your OnlyFans business with an LLC, EIN, and more." />
      </Head>
      
      <SeoPageLayout>
        <div id="onlyfans-llc-launch-checklist">
          {/* Hero Section */}
          <section className="hero-section text-center px-4 py-16">
            <motion.h1 
              className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              OnlyFans Business Checklist – Everything You Need to Launch Legally
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              Don't miss a step. This comprehensive checklist covers everything OnlyFans creators need to set up their business legally and protect themselves.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <Link href="https://www.startwithgenie.com">
                <Button className="text-lg px-8 py-3">
                  Get Started With Genie →
                </Button>
              </Link>
            </motion.div>
          </section>

          {/* Step 1: Choose a Name */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h2 className="text-2xl font-semibold">Choose a Business Name</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Your business name will be on all your legal documents and public records. Choose wisely.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-green-600" />
                      What to Consider
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Professional and memorable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Available in your state</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Not too similar to existing businesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Easy to spell and remember</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      Common Mistakes
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Using your real name (if you want privacy)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Names that are too generic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Not checking availability first</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Names that are hard to pronounce</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-700">
                    <strong>Pro tip:</strong> Check your state's business name database to ensure your chosen name is available before filing.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Step 2: Form Your LLC */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h2 className="text-2xl font-semibold">Form Your LLC</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  This creates the legal foundation for your business and provides liability protection.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-green-600" />
                      What You'll Need
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Business name (from step 1)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Your personal information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Business address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Filing fee ($50-200)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5 text-blue-600" />
                      How to File
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>File directly with your state</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Or use a service like Genie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Receive approval in 1-7 days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Get your formation documents</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-700">
                    <strong>Next step:</strong> Once your LLC is approved, you'll need an EIN. <Link href="/how-to-get-an-ein-for-onlyfans" className="text-green-600 hover:underline">Get your EIN guide here</Link>.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Step 3: Get Your EIN */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h2 className="text-2xl font-semibold">Get Your EIN</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  An EIN is like a Social Security number for your business. It's free and protects your personal SSN.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <FileDigit className="w-5 h-5 text-green-600" />
                      Why You Need It
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Open business bank accounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Protect your personal SSN</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>File business tax returns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Apply for business credit</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      How to Apply
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Go to IRS website (free)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Fill out online form (10 minutes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Receive EIN immediately</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Save the confirmation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-purple-700">
                    <strong>Important:</strong> Only get your EIN from the official IRS website. Never pay for an EIN service.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Step 4: Open Business Bank Account */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                  <h2 className="text-2xl font-semibold">Open a Business Bank Account</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Keep your business and personal finances completely separate. This is crucial for legal protection and tax purposes.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-green-600" />
                      Required Documents
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>LLC formation documents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Your EIN (not SSN)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Driver's license or passport</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Operating agreement</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5 text-blue-600" />
                      What to Look For
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Low or no monthly fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Online banking and mobile app</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Good customer service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Experience with small businesses</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-700">
                    <strong>Pro tip:</strong> Use this account for ALL business income and expenses. Never mix personal and business finances.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Step 5: Consider Registered Agent */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">5</div>
                  <h2 className="text-2xl font-semibold">Consider a Registered Agent</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  A registered agent receives legal documents on behalf of your LLC. This is especially important for privacy.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      Privacy Benefits
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Your home address stays private</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Legal documents go to agent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Professional business address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Compliance monitoring</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                      Cost and Options
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Professional service: $50-150/year</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Be your own agent: Free</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Family/friend: Free</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Your address becomes public if you're your own agent</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-700">
                    <strong>Recommendation:</strong> If you want privacy, use a professional registered agent service. <Link href="/how-to-protect-your-identity-on-onlyfans" className="text-red-600 hover:underline">Learn more about privacy protection</Link>.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Step 6: Track Income and Taxes */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">6</div>
                  <h2 className="text-2xl font-semibold">Track Income and Taxes</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Proper record-keeping is essential for tax compliance and business success.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Receipt className="w-5 h-5 text-green-600" />
                      What to Track
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All business income</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Business expenses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Equipment and software costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Home office expenses</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      Tax Deadlines
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Quarterly estimated taxes (April, June, September, January)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Annual tax return (April 15)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>LLC annual report (varies by state)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Keep records for 3-7 years</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                  <p className="text-indigo-700">
                    <strong>Pro tip:</strong> Use accounting software like QuickBooks or Wave to track everything automatically.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Link to All Cluster Pages */}
          <motion.section 
            className="py-12 px-4 bg-blue-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Complete Your OnlyFans Business Setup
              </h2>
              <p className="text-gray-700 text-center mb-8">
                These guides will help you complete each step of the checklist:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/llc-for-onlyfans-creators" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Should You Start an LLC?</h3>
                  <p className="text-gray-600 text-sm mb-4">Learn if an LLC makes sense for your OnlyFans business</p>
                  <div className="flex items-center text-blue-600">
                    <span className="text-sm">Read guide</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
                <Link href="/how-to-get-an-ein-for-onlyfans" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Get Your EIN</h3>
                  <p className="text-gray-600 text-sm mb-4">Step-by-step guide to getting your EIN for free</p>
                  <div className="flex items-center text-blue-600">
                    <span className="text-sm">Read guide</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
                <Link href="/how-to-protect-your-identity-on-onlyfans" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Protect Your Identity</h3>
                  <p className="text-gray-600 text-sm mb-4">Keep your real name and address private</p>
                  <div className="flex items-center text-blue-600">
                    <span className="text-sm">Read guide</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
                <Link href="/llc-vs-sole-prop-for-onlyfans-creators" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">LLC vs Sole Proprietorship</h3>
                  <p className="text-gray-600 text-sm mb-4">Which business structure is safer for creators?</p>
                  <div className="flex items-center text-blue-600">
                    <span className="text-sm">Read guide</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Genie CTA */}
          <motion.section 
            className="py-12 px-4 bg-blue-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Need help getting it done?
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  Start With Genie is a $49 assistant that gives you everything you need to launch your LLC — personalized filing instructions, EIN help, an operating agreement, and 24/7 AI support.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center mb-6">
                  <span className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    No upsells
                  </span>
                  <span className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    No confusion
                  </span>
                  <span className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Built for creators
                  </span>
                </div>
                <div className="text-center">
                  <Link href="https://www.startwithgenie.com">
                    <Button className="text-lg px-8 py-3">
                      Start with Genie →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <Footer />
        </div>
      </SeoPageLayout>
    </>
  )
} 