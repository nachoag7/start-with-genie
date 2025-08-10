'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, CheckCircle, XCircle, ArrowRight } from 'lucide-react'
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

export default function LLCForOnlyFansCreatorsPage() {
  return (
    <>
      <Head>
        <title>LLC for OnlyFans Creators – Should You File One?</title>
        <meta name="description" content="Learn if starting an LLC makes sense for your OnlyFans business. Clear, honest answers about taxes, privacy, and protection for creators." />
      </Head>
      
      <SeoPageLayout>
        <div id="llc-for-onlyfans-creators">
          {/* Hero Section */}
          <section className="hero-section text-center px-4 py-16">
            <motion.h1 
              className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Should You Start an LLC for OnlyFans? Here's the Honest Breakdown
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              Wondering if an LLC makes sense for your OnlyFans business? Here's the straight talk about protection, privacy, taxes, and when it's worth the investment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-col gap-4 items-center"
            >
              <Link href="https://www.startwithgenie.com">
                <Button className="text-lg px-8 py-3">
                  Get Started With Genie →
                </Button>
              </Link>
              <Link href="/#see-how-genie-works" className="text-blue-600 hover:text-blue-700 underline text-sm">
                See how it works
              </Link>
            </motion.div>
          </section>

          {/* What an LLC Actually Does */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                What an LLC Actually Does (In Plain Language)
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-6">
                  An LLC is like a legal shield between you and your business. Think of it as creating a separate "business you" that can:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Protect Your Personal Assets
                    </h3>
                    <p className="text-gray-700 mb-4">
                      If someone sues your business, they can only go after your business assets, not your personal savings, car, or home.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5 text-green-600" />
                      Give You a Business Identity
                    </h3>
                    <p className="text-gray-700 mb-4">
                      You can operate under a business name, open business bank accounts, and build business credit separate from your personal finances.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-purple-600" />
                      Offer Tax Flexibility
                    </h3>
                    <p className="text-gray-700 mb-4">
                      You can choose how to be taxed—as a sole proprietor, partnership, or corporation—depending on what saves you the most money.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-orange-600" />
                      Add Privacy Protection
                    </h3>
                    <p className="text-gray-700 mb-4">
                      With a registered agent, your personal address stays private. Your business address becomes public, but not your home address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Why Creators Use LLCs */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Why OnlyFans Creators Use LLCs
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Protection from Lawsuits
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Content creators face unique risks. An LLC protects your personal assets if someone sues your business for copyright issues, contract disputes, or other legal matters.
                  </p>
                  <p className="text-gray-700">
                    <strong>Real example:</strong> If a client claims you violated terms of service and sues, they can only go after your business assets, not your personal savings.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-600" />
                    Privacy and Anonymity
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Many creators want to keep their real name and address private. An LLC with a registered agent helps you maintain anonymity while staying compliant.
                  </p>
                  <p className="text-gray-700">
                    <strong>How it works:</strong> Your registered agent's address becomes public, not your home address. Learn more in our <Link href="/how-to-protect-your-identity-on-onlyfans" className="text-blue-600 hover:underline">privacy guide</Link>.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-purple-600" />
                    Better Tax Treatment
                  </h3>
                  <p className="text-gray-700 mb-4">
                    LLCs offer more tax deductions and flexibility than operating as a sole proprietor. You can deduct business expenses, home office costs, and more.
                  </p>
                  <p className="text-gray-700">
                    <strong>Tax benefits:</strong> Equipment, software, travel, and other business expenses become deductible, potentially saving you thousands.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-orange-600" />
                    Professional Banking
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Business bank accounts are easier to get with an LLC. This keeps your business and personal finances separate, making tax time much easier.
                  </p>
                  <p className="text-gray-700">
                    <strong>Banking benefits:</strong> Separate business credit cards, easier loan approval, and cleaner financial records for tax purposes.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* What Changes When You Form One */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                What Changes When You Form an LLC
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    You'll Need an EIN
                  </h3>
                  <p className="text-gray-700 mb-4">
                    An EIN is like a Social Security number for your business. You'll use it instead of your personal SSN for business banking and taxes.
                  </p>
                  <p className="text-gray-700">
                    <Link href="/how-to-get-an-ein-for-onlyfans" className="text-blue-600 hover:underline">Get your EIN guide here</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-green-600" />
                    Business Name and Branding
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You can operate under your business name instead of your personal name. This adds professionalism and can help with branding.
                  </p>
                  <p className="text-gray-700">
                    Example: "Creative Content LLC" instead of "John Smith"
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-purple-600" />
                    Separate Business Banking
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You'll need a business bank account. This keeps your business and personal finances completely separate.
                  </p>
                  <p className="text-gray-700">
                    Benefits: Cleaner records, easier taxes, professional appearance
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    Different Tax Filing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You'll file business taxes separately from personal taxes. This can be more complex but often saves money.
                  </p>
                  <p className="text-gray-700">
                    Most single-member LLCs file as sole proprietors initially
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* When to Wait, When to File */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                When to Wait, When to File
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    File an LLC if:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• You're earning $1,000+ monthly consistently</li>
                    <li>• You have significant personal assets to protect</li>
                    <li>• You want privacy/anonymity</li>
                    <li>• You're planning to scale your business</li>
                    <li>• You have multiple income streams</li>
                    <li>• You want to build business credit</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    Wait if:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• You're just starting out (under $500/month)</li>
                    <li>• You're testing the waters</li>
                    <li>• You have minimal personal assets</li>
                    <li>• You're not sure about long-term commitment</li>
                    <li>• You're in a state with high filing fees</li>
                    <li>• You're comfortable with current privacy level</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Common Myths */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Common Myths Creators Hear
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    "You need a lawyer to form an LLC"
                  </h3>
                  <p className="text-gray-700">
                    <strong>False.</strong> You can file your LLC directly with your state for $50-200. Lawyers charge $500-2000 for the same service. Most creators don't need legal help for basic LLC formation.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    "LLCs are expensive to maintain"
                  </h3>
                  <p className="text-gray-700">
                    <strong>False.</strong> Most states have minimal annual fees ($0-50). The main costs are filing fees ($50-200) and optional registered agent services ($50-150/year).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    "You need an LLC to be anonymous"
                  </h3>
                  <p className="text-gray-700">
                    <strong>Partially true.</strong> An LLC helps, but you also need a registered agent service for full privacy. Your business address becomes public, but your home address stays private.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    "OnlyFans requires an LLC"
                  </h3>
                  <p className="text-gray-700">
                    <strong>False.</strong> OnlyFans doesn't require an LLC. You can operate as a sole proprietor. An LLC is optional but recommended for protection and privacy.
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
                <Link href="/how-to-protect-your-identity-on-onlyfans" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">How to Protect Your Identity</h3>
                  <p className="text-gray-600 text-sm">Stay private as an OnlyFans creator</p>
                </Link>
                <Link href="/how-to-get-an-ein-for-onlyfans" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Get Your EIN</h3>
                  <p className="text-gray-600 text-sm">Step-by-step EIN guide for creators</p>
                </Link>
                <Link href="/llc-vs-sole-prop-for-onlyfans-creators" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">LLC vs Sole Proprietorship</h3>
                  <p className="text-gray-600 text-sm">Which structure is safer?</p>
                </Link>
                <Link href="/onlyfans-llc-launch-checklist" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Launch Checklist</h3>
                  <p className="text-gray-600 text-sm">Everything you need to launch legally</p>
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