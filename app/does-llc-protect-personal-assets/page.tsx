"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, Lock } from "lucide-react";
import SeoPageLayout from "../../components/SeoPageLayout";
import { Button } from "../../components/ui/Button";
import Footer from "../../components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DoesLLCProtectPersonalAssetsPage() {
  return (
    <SeoPageLayout>
      <div id="does-llc-protect-personal-assets">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Does an LLC Protect Your Personal Assets?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Learn what an LLC actually protects and what it doesn't. Here's the truth about liability protection for your personal assets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start your LLC for $49 flat →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* What LLC Protection Actually Covers */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What LLC Protection Actually Covers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Business Liability Protection
                </h3>
                <p className="text-gray-700 mb-4">
                  An LLC protects your personal assets from business-related lawsuits and debts. If someone sues your business, they can only go after your business assets, not your personal property.
                </p>
                <p className="text-gray-700">
                  This includes protection against customer lawsuits, contract disputes, and most business-related legal issues. Your home, personal bank accounts, and other personal assets remain protected.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  What Gets Protected
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Your personal home and real estate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Personal bank accounts and savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Personal vehicles and property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Retirement accounts and investments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What LLC Protection Doesn't Cover */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What LLC Protection Doesn't Cover
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <XCircle className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Personal Guarantees</h3>
                <p className="text-gray-700">
                  If you personally guarantee a business loan or lease, your personal assets are still at risk. The LLC protection doesn't apply to debts you've personally guaranteed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <AlertTriangle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Criminal Acts</h3>
                <p className="text-gray-700">
                  LLC protection doesn't shield you from criminal liability. If you commit fraud or other criminal acts, you can still face personal legal consequences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <User className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Personal Lawsuits</h3>
                <p className="text-gray-700">
                  An LLC doesn't protect you from personal lawsuits unrelated to your business. Car accidents, personal injuries, or other personal legal issues aren't covered.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Maintain Protection */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Maintain Your LLC Protection
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Keep Business and Personal Separate
                </h3>
                <p className="text-gray-700 mb-4">
                  The most important rule is to maintain clear separation between your business and personal finances. This is called "piercing the corporate veil."
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Use separate bank accounts</li>
                  <li>• Don't pay personal expenses from business accounts</li>
                  <li>• Keep detailed business records</li>
                  <li>• Use business credit cards for business expenses</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Maintain Proper Documentation
                </h3>
                <p className="text-gray-700 mb-4">
                  Keep your LLC in good standing and maintain proper business documentation to preserve your liability protection.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• File annual reports on time</li>
                  <li>• Keep operating agreement updated</li>
                  <li>• Maintain meeting minutes</li>
                  <li>• Pay state fees and taxes</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Real-World Examples */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Real-World Examples of LLC Protection
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Protected: Customer Lawsuit
                </h3>
                <p className="text-gray-700 mb-4">
                  A customer sues your business for $50,000 in damages. If you have an LLC and maintain proper separation, the lawsuit can only go after your business assets. Your personal home, savings, and other personal property remain protected.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What's Protected:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Your personal home</li>
                    <li>• Personal bank accounts</li>
                    <li>• Personal vehicles</li>
                    <li>• Retirement accounts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Not Protected: Personal Guarantee
                </h3>
                <p className="text-gray-700 mb-4">
                  You personally guarantee a $100,000 business loan. If your business can't pay, the bank can go after your personal assets because you personally guaranteed the debt.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What's at Risk:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Your personal home</li>
                    <li>• Personal bank accounts</li>
                    <li>• Personal assets</li>
                    <li>• Personal credit score</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* When You Need Additional Protection */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Need Additional Protection
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Consider Business Insurance
                </h3>
                <p className="text-gray-700 mb-4">
                  While an LLC provides legal protection, business insurance provides financial protection. Consider these types of insurance for comprehensive coverage:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Types of Business Insurance:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• General liability insurance</li>
                      <li>• Professional liability insurance</li>
                      <li>• Product liability insurance</li>
                      <li>• Cyber liability insurance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">When You Need It:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• High-risk industries</li>
                      <li>• Client-facing businesses</li>
                      <li>• Product-based businesses</li>
                      <li>• Significant business assets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Decide */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Decide If You Need an LLC for Asset Protection
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Ask Yourself These Questions:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Asset Protection</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Do you have significant personal assets?</li>
                      <li>• Are you concerned about liability risks?</li>
                      <li>• Do you work in a high-risk industry?</li>
                      <li>• Do you have employees or contractors?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Business Structure</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Do you want to separate business and personal finances?</li>
                      <li>• Are you planning to hire employees?</li>
                      <li>• Do you need business credit?</li>
                      <li>• Are you earning $30,000+ annually?</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  If you answered "yes" to most of these questions, an LLC is likely worth the investment. Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> can help you get started.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Ready to Protect Your Personal Assets?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Get everything you need to form your LLC in under 15 minutes. Step-by-step guidance, all documents included, and no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/checkout">
                <Button className="text-lg px-8 py-3">
                  Start My LLC for $49 →
                </Button>
              </Link>
              <Link href="/llc-vs-insurance">
                <Button variant="outline" className="text-lg px-8 py-3">
                  LLC vs Insurance Comparison
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />
      </div>
    </SeoPageLayout>
  );
} 