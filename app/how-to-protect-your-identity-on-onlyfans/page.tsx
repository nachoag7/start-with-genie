'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, CheckCircle, XCircle, ArrowRight, Eye, Key, Phone, Mail } from 'lucide-react'
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

export default function HowToProtectYourIdentityOnOnlyFansPage() {
  return (
    <>
      <Head>
        <title>How to Protect Your Identity as an OnlyFans Creator</title>
        <meta name="description" content="Want to stay private on OnlyFans? Learn how to use an LLC, EIN, and other tools to protect your real name and info." />
      </Head>
      
      <SeoPageLayout>
        <div id="how-to-protect-your-identity-on-onlyfans">
          {/* Hero Section */}
          <section className="hero-section text-center px-4 py-16">
            <motion.h1 
              className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              How to Stay Private as an OnlyFans Creator (Without Hiding Your Face)
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              Want to keep your real name and address private while building your OnlyFans business? Here's how to protect your identity legally and effectively.
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

          {/* Why Your Name and Address Get Exposed */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Why Your Name and Address Get Exposed Without an LLC
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-6">
                  When you operate as a sole proprietor (which is the default), your personal information becomes public record in several ways:
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Business Licenses</h3>
                      <p className="text-gray-700">
                        Many cities require business licenses for online businesses. These applications typically require your real name and address, which become public records.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tax Returns</h3>
                      <p className="text-gray-700">
                        When you file taxes as a sole proprietor, your real name and address are on the tax return. While tax returns aren't public, the information can be accessed in certain circumstances.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Banking Information</h3>
                      <p className="text-gray-700">
                        Business bank accounts often require your real identity. While account details are private, the business name and address may appear in public records.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Payment Processing</h3>
                      <p className="text-gray-700">
                        Payment processors like Stripe or PayPal require real identity verification. This information can potentially be accessed through legal processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Using a Registered Agent */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Using a Registered Agent to Hide Your Address
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    What a Registered Agent Does
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A registered agent is a person or service that receives legal documents on behalf of your LLC. They act as your business's official point of contact with the state.
                  </p>
                  <p className="text-gray-700 mb-4">
                    When you form an LLC with a registered agent service, their address becomes your business's public address instead of your home address.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Your home address stays private</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Legal documents go to the agent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You can be your own agent (but address becomes public)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Cost and Options
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Registered agent services typically cost $50-150 per year. You have several options:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-900">Professional Service</h4>
                      <p className="text-sm text-blue-700">$50-150/year, full privacy protection</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-green-900">Be Your Own Agent</h4>
                      <p className="text-sm text-green-700">Free, but your address becomes public</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-purple-900">Family/Friend</h4>
                      <p className="text-sm text-purple-700">Free, but they need a business address</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Getting an EIN */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Getting an EIN So You Don't Give Out Your SSN
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-6">
                  An EIN (Employer Identification Number) is like a Social Security number for your business. It's free to get and helps protect your personal SSN.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Key className="w-5 h-5 text-blue-600" />
                      Why You Need an EIN
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Open business bank accounts without sharing your SSN</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Apply for business credit cards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>File business tax returns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Protect your personal SSN from exposure</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      How to Get Your EIN
                    </h3>
                    <p className="text-gray-700 mb-4">
                      You can get an EIN for free from the IRS website in about 10 minutes:
                    </p>
                    <ol className="space-y-2 text-gray-700">
                      <li>1. Go to the IRS EIN application</li>
                      <li>2. Fill out the online form</li>
                      <li>3. Receive your EIN immediately</li>
                      <li>4. Use it for all business activities</li>
                    </ol>
                    <p className="text-gray-700 mt-4">
                      <Link href="/how-to-get-an-ein-for-onlyfans" className="text-blue-600 hover:underline">Get our step-by-step EIN guide</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Business Bank Account */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                How to Open a Business Bank Account Safely
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    Choose the Right Bank
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Not all banks are creator-friendly. Look for banks that:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Have experience with online businesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Don't require large minimum balances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Offer online banking and mobile apps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Have reasonable fees for small businesses</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Required Documents
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You'll typically need these documents to open a business account:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Your LLC formation documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Your EIN (not your SSN)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Your driver's license or passport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Your operating agreement</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-purple-600" />
                    Privacy Considerations
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Even with a business account, some information may still be accessible:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Bank statements may show your name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Tax returns require your real identity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Legal proceedings may reveal identity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Common Mistakes */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Common Mistakes That Expose Creators
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Using Your Real Name on Business Documents
                  </h3>
                  <p className="text-gray-700">
                    <strong>Mistake:</strong> Using your real name on LLC formation documents when you want privacy.<br />
                    <strong>Solution:</strong> Use your business name on all public documents. Your real name only appears on tax returns and bank applications.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Not Using a Registered Agent
                  </h3>
                  <p className="text-gray-700">
                    <strong>Mistake:</strong> Being your own registered agent, which makes your home address public.<br />
                    <strong>Solution:</strong> Use a registered agent service ($50-150/year) to keep your address private.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Mixing Personal and Business Finances
                  </h3>
                  <p className="text-gray-700">
                    <strong>Mistake:</strong> Using your personal bank account for business income.<br />
                    <strong>Solution:</strong> Open a separate business bank account and keep all business transactions separate.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Not Getting an EIN
                  </h3>
                  <p className="text-gray-700">
                    <strong>Mistake:</strong> Using your SSN for business banking and tax purposes.<br />
                    <strong>Solution:</strong> Get a free EIN from the IRS and use it for all business activities.
                  </p>
                </div>
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

          {/* Internal Links */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Related Guides
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/llc-for-onlyfans-creators" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Should You Start an LLC?</h3>
                  <p className="text-gray-600 text-sm">Honest breakdown for OnlyFans creators</p>
                </Link>
                <Link href="/how-to-get-an-ein-for-onlyfans" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Get Your EIN</h3>
                  <p className="text-gray-600 text-sm">Step-by-step guide for creators</p>
                </Link>
                <Link href="/onlyfans-llc-launch-checklist" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Launch Checklist</h3>
                  <p className="text-gray-600 text-sm">Everything you need to launch legally</p>
                </Link>
                <Link href="/llc-vs-sole-prop-for-onlyfans-creators" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">LLC vs Sole Proprietorship</h3>
                  <p className="text-gray-600 text-sm">Which structure is safer?</p>
                </Link>
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