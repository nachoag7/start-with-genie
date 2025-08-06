'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, CheckCircle, XCircle, ArrowRight, Key, Globe as GlobeIcon, Clock as ClockIcon, Phone } from 'lucide-react'
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

export default function HowToGetAnEINForOnlyFansPage() {
  return (
    <>
      <Head>
        <title>How to Get an EIN for OnlyFans – Step-by-Step Guide</title>
        <meta name="description" content="Everything OnlyFans creators need to know about getting an EIN for tax, banking, and privacy purposes." />
      </Head>
      
      <SeoPageLayout>
        <div id="how-to-get-an-ein-for-onlyfans">
          {/* Hero Section */}
          <section className="hero-section text-center px-4 py-16">
            <motion.h1 
              className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              How to Get an EIN for Your OnlyFans — Step-by-Step Guide
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              Get your EIN in 10 minutes for free. Here's everything OnlyFans creators need to know about protecting your SSN and setting up your business properly.
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

          {/* What an EIN is */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                What an EIN is and Why it Matters for Creators
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-6">
                  An EIN (Employer Identification Number) is a nine-digit number issued by the IRS that serves as your business's tax ID. Think of it as a Social Security Number for your business.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Key className="w-5 h-5 text-blue-600" />
                      Why OnlyFans Creators Need an EIN
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Protect your personal SSN from exposure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Open business bank accounts</span>
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
                        <span>Build business credit separate from personal</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      It's Completely Free
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Getting an EIN is 100% free from the IRS. You don't need to pay any service or company to get one.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-700 font-medium">
                        <strong>Important:</strong> Only get your EIN from the official IRS website. Never pay for an EIN service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Step-by-Step Process */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Step-by-Step: How to Apply (with Links)
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                    <h3 className="text-lg font-semibold">Gather Required Information</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Before applying, make sure you have all the necessary information ready:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Your legal name (as it appears on your SSN card)</li>
                    <li>• Your SSN (you'll need this to apply)</li>
                    <li>• Your business name (if you have an LLC)</li>
                    <li>• Your business address</li>
                    <li>• Your business type (sole proprietorship, LLC, etc.)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                    <h3 className="text-lg font-semibold">Go to the IRS Website</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Visit the official IRS EIN application page:
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-700 font-medium">
                      <strong>Official IRS EIN Application:</strong><br />
                      <a href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                    <h3 className="text-lg font-semibold">Fill Out the Online Form</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The application takes about 10 minutes to complete. You'll need to provide:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Your personal information (name, SSN, address)</li>
                    <li>• Your business information</li>
                    <li>• The reason for applying (starting a business)</li>
                    <li>• Your business address and contact information</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                    <h3 className="text-lg font-semibold">Receive Your EIN Immediately</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Once you submit the application, you'll receive your EIN immediately. Save this number securely - you'll use it for all business activities.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-700 font-medium">
                      <strong>Pro tip:</strong> Print or save the confirmation page. The IRS doesn't send physical EIN cards anymore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Can you get one without an LLC */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Can You Get an EIN Without an LLC?
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-6">
                  <strong>Yes!</strong> You can get an EIN as a sole proprietor (which is what you are by default when you start earning money).
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Sole Proprietorship EIN
                    </h3>
                    <p className="text-gray-700 mb-4">
                      You can get an EIN even if you don't have an LLC. This is perfect for creators who want to:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Protect their SSN from exposure</li>
                      <li>• Open a business bank account</li>
                      <li>• Apply for business credit cards</li>
                      <li>• Keep business and personal finances separate</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5 text-blue-600" />
                      LLC EIN (Recommended)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      If you have an LLC, you'll definitely need an EIN. This provides:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Better privacy protection</li>
                      <li>• More professional appearance</li>
                      <li>• Easier business banking</li>
                      <li>• Better asset protection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* International Creators */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                EIN for International Creators (Yes, It's Possible)
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-6">
                  International creators can get an EIN, but the process is slightly different:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <GlobeIcon className="w-5 h-5 text-blue-600" />
                      Requirements for International Creators
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>You must have a valid reason for needing an EIN</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>You need a US business address (can be a registered agent)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>You must have a valid passport or other ID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>You cannot apply online (must call or mail)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-green-600" />
                      How to Apply as an International Creator
                    </h3>
                    <p className="text-gray-700 mb-4">
                      International creators must call the IRS to apply for an EIN:
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-700">
                        <strong>IRS International EIN Hotline:</strong><br />
                        1-267-941-1099 (not toll-free)<br />
                        Available Monday-Friday, 6:00 AM to 11:00 PM Eastern Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* How Genie Helps */}
          <motion.section 
            className="py-12 px-4 bg-blue-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                How Genie Helps You Get Your EIN Fast and Clean
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <ClockIcon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Step-by-Step Walkthrough</h3>
                  <p className="text-gray-700">
                    We walk you through the entire EIN application process with clear instructions and screenshots.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <Shield className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Privacy Protection</h3>
                  <p className="text-gray-700">
                    Learn how to use your EIN to protect your SSN and keep your personal information private.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <FileText className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Document Templates</h3>
                  <p className="text-gray-700">
                    Get templates for using your EIN in business applications, banking, and tax filings.
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
                <Link href="/how-to-protect-your-identity-on-onlyfans" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Protect Your Identity</h3>
                  <p className="text-gray-600 text-sm">Stay private as an OnlyFans creator</p>
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