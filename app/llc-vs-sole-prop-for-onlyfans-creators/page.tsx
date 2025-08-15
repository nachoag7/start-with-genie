'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, CheckCircle, XCircle, ArrowRight, Scale, User as UserIcon } from 'lucide-react'
import SeoPageLayout from '../../components/SeoPageLayout'
import { Button } from '../../components/ui/Button'
import Footer from '../../components/Footer'


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

export default function LLCVsSolePropForOnlyFansCreatorsPage() {
  return (
    <>
      <SeoPageLayout>
        <div id="llc-vs-sole-prop-for-onlyfans-creators">
          {/* Hero Section */}
          <section className="hero-section text-center px-4 py-16">
            <motion.h1 
              className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              LLC vs Sole Proprietorship for OnlyFans – What's Safer?
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              Should you stay a sole proprietor or form an LLC? Here's the honest comparison for OnlyFans creators, with real examples and clear recommendations.
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

          {/* What's the Actual Difference */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                What's the Actual Difference?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-blue-600" />
                    Sole Proprietorship
                  </h3>
                  <p className="text-gray-700 mb-4">
                    This is what you are by default when you start earning money. You and your business are legally the same entity.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>No filing fees or paperwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Simple tax filing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>No liability protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Personal assets at risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Limited privacy protection</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-green-600" />
                    Limited Liability Company (LLC)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A separate legal entity that provides protection between you and your business.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Liability protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Privacy protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Professional appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Filing fees ($50-200)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>More complex setup</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Liability, Taxes, and Visibility */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Liability, Taxes, and Visibility
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Liability Protection
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Sole Proprietorship</h4>
                      <p className="text-gray-700 mb-3">
                        If someone sues your business, they can go after your personal assets (savings, car, home).
                      </p>
                      <p className="text-gray-700">
                        <strong>Risk:</strong> A client could sue you for $50,000 and potentially take your personal savings.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">LLC</h4>
                      <p className="text-gray-700 mb-3">
                        If someone sues your business, they can only go after your business assets.
                      </p>
                      <p className="text-gray-700">
                        <strong>Protection:</strong> Your personal assets are shielded from business lawsuits.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Tax Treatment
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Sole Proprietorship</h4>
                      <p className="text-gray-700 mb-3">
                        You pay the same tax rate as an LLC initially. File Schedule C with your personal tax return.
                      </p>
                      <p className="text-gray-700">
                        <strong>Tax rate:</strong> Same as LLC (your personal income tax rate)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">LLC</h4>
                      <p className="text-gray-700 mb-3">
                        You pay the same tax rate initially, but have more flexibility for future tax elections.
                      </p>
                      <p className="text-gray-700">
                        <strong>Tax rate:</strong> Same as sole prop initially, but can elect S-Corp later
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-purple-600" />
                    Privacy and Visibility
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Sole Proprietorship</h4>
                      <p className="text-gray-700 mb-3">
                        Your real name and address are directly associated with your business activities.
                      </p>
                      <p className="text-gray-700">
                        <strong>Privacy:</strong> Limited. Your personal information is more exposed.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">LLC</h4>
                      <p className="text-gray-700 mb-3">
                        You can use a business name and registered agent to protect your personal information.
                      </p>
                      <p className="text-gray-700">
                        <strong>Privacy:</strong> Much better. Your home address can stay private.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* When Staying a Sole Prop Makes Sense */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                When Staying a Sole Proprietorship Makes Sense
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-6">
                  Not every creator needs an LLC immediately. Here's when staying a sole proprietor is smart:
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      You're Just Starting Out
                    </h3>
                    <p className="text-gray-700 mb-4">
                      If you're earning under $500/month and testing the waters, focus on building your audience first.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Keep startup costs low</li>
                      <li>• Focus on content quality</li>
                      <li>• Learn the business side gradually</li>
                      <li>• Form LLC when you're earning consistently</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      You Have Minimal Assets
                    </h3>
                    <p className="text-gray-700 mb-4">
                      If you don't have significant personal assets to protect, the liability protection is less critical.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• No home ownership</li>
                      <li>• Limited savings</li>
                      <li>• No significant personal assets</li>
                      <li>• Can upgrade to LLC later</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      You're Comfortable with Privacy Level
                    </h3>
                    <p className="text-gray-700 mb-4">
                      If you're open about your identity and don't mind your real name being associated with your business.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• You're open about your identity</li>
                      <li>• You don't mind public association</li>
                      <li>• You're not concerned about privacy</li>
                      <li>• You can always form LLC later</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      You're in a High-Fee State
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Some states have expensive LLC filing fees ($300+). Wait until you're earning more to justify the cost.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• California ($70 filing + $800 annual)</li>
                      <li>• Texas ($300 filing fee)</li>
                      <li>• New York ($200 filing fee)</li>
                      <li>• Consider forming in a cheaper state</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* When an LLC is Worth the Switch */}
          <motion.section 
            className="py-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                When an LLC is Worth the Switch
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    You're Earning $1,000+ Monthly Consistently
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Once you're earning significant income, the protection and professionalism of an LLC becomes valuable.
                  </p>
                  <p className="text-gray-700">
                    <strong>Why:</strong> You have more to protect, and the filing fees become a smaller percentage of your income.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    You Have Significant Personal Assets
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If you own a home, have substantial savings, or other valuable assets, an LLC protects them from business lawsuits.
                  </p>
                  <p className="text-gray-700">
                    <strong>Protection:</strong> Your personal assets stay safe even if someone sues your business.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-purple-600" />
                    You Want Privacy/Anonymity
                  </h3>
                  <p className="text-gray-700 mb-4">
                    An LLC with a registered agent helps keep your real name and address private from public records.
                  </p>
                  <p className="text-gray-700">
                    <strong>Privacy:</strong> Your home address stays private, and you can operate under a business name.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-orange-600" />
                    You're Planning to Scale
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If you plan to expand to other platforms, hire contractors, or build a larger business, an LLC provides the right foundation.
                  </p>
                  <p className="text-gray-700">
                    <strong>Growth:</strong> Easier to add partners, get business loans, and build business credit.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Real Creator Examples */}
          <motion.section 
            className="py-12 px-4 bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Real Creator Examples
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-blue-600" />
                    Beginner Creator (Stay Sole Prop)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Profile:</strong> Just started, earning $200-500/month, testing different content types
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Focus on building audience</li>
                    <li>• Keep costs low</li>
                    <li>• Learn the business</li>
                    <li>• Form LLC when earning $1K+/month</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    <strong>Recommendation:</strong> Stay sole proprietor for now, form LLC when consistent income
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-green-600" />
                    Established Creator (Form LLC)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Profile:</strong> Earning $5K+/month, own home, have savings, want privacy
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Protect personal assets</li>
                    <li>• Maintain privacy</li>
                    <li>• Professional appearance</li>
                    <li>• Plan for growth</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    <strong>Recommendation:</strong> Form LLC now for protection and privacy
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
                <Link href="/onlyfans-llc-launch-checklist" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Launch Checklist</h3>
                  <p className="text-gray-600 text-sm">Everything you need to launch legally</p>
                </Link>
                <Link href="/how-to-protect-your-identity-on-onlyfans" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Protect Your Identity</h3>
                  <p className="text-gray-600 text-sm">Stay private as an OnlyFans creator</p>
                </Link>
                <Link href="/how-to-get-an-ein-for-onlyfans" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2">Get Your EIN</h3>
                  <p className="text-gray-600 text-sm">Step-by-step guide for creators</p>
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