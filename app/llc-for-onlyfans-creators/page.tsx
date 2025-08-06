"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, Eye } from "lucide-react";
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

export default function LLCForOnlyFansCreatorsPage() {
  return (
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
            Do You Need an LLC as an OnlyFans Creator?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            OnlyFans creators face unique privacy and legal considerations. Here's how an LLC can protect your income and identity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start Your LLC for $49 →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Privacy and Legal Considerations */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Privacy and Legal Considerations for OnlyFans Creators
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  Privacy Protection
                </h3>
                <p className="text-gray-700 mb-4">
                  OnlyFans creators often want to protect their real identity from being publicly associated with their content. An LLC can help create a legal barrier between your personal and business activities.
                </p>
                <p className="text-gray-700">
                  While OnlyFans handles payments and issues 1099-K forms, an LLC provides additional privacy protection and helps separate your business finances from your personal finances.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-green-600" />
                  When an LLC Makes Sense
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You're earning $20,000+ annually from content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You want to protect your real identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You have significant personal assets to protect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You plan to expand to other platforms or services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefits for Content Creators */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Benefits of an LLC for OnlyFans Creators
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Privacy Protection</h3>
                <p className="text-gray-700">
                  An LLC can help protect your real identity by creating a legal separation between your personal and business activities. This is especially important for content creators who value privacy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Tax Advantages</h3>
                <p className="text-gray-700">
                  LLCs offer more tax flexibility than sole proprietorships. You can deduct business expenses more easily and potentially save on self-employment taxes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CreditCard className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Business Credit</h3>
                <p className="text-gray-700">
                  An LLC helps you build business credit separate from your personal credit. This can be valuable for future business loans, credit cards, or other financing needs.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* When You Can Wait */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Can Wait to Form an LLC
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Just Starting Out
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're new to content creation and earning less than $10,000 annually, you can start as a sole proprietor. Focus on building your audience and content strategy first.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Keep startup costs low</li>
                  <li>• Focus on content quality</li>
                  <li>• Build your audience</li>
                  <li>• Learn the business side gradually</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Low Privacy Concerns
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're comfortable with your real identity being associated with your content and don't have significant personal assets, the privacy benefits of an LLC may be less critical.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• You're open about your identity</li>
                  <li>• Minimal personal assets to protect</li>
                  <li>• Simple tax situation</li>
                  <li>• No plans for business expansion</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tax Considerations */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Tax Considerations for OnlyFans Creators
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Sole Proprietorship Taxes
                </h3>
                <p className="text-gray-700 mb-4">
                  As a sole proprietor, you'll pay self-employment taxes on your OnlyFans income. OnlyFans issues 1099-K forms for tax purposes, and you can deduct business expenses.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• File Schedule C with your personal tax return</li>
                  <li>• Pay quarterly estimated taxes</li>
                  <li>• Deduct business expenses (equipment, software, etc.)</li>
                  <li>• Simpler record-keeping initially</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  LLC Tax Benefits
                </h3>
                <p className="text-gray-700 mb-4">
                  LLCs offer more tax flexibility. You can choose pass-through taxation or elect to be taxed as an S-Corp for potential savings.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Same tax rate as sole proprietorship initially</li>
                  <li>• More business expense deductions</li>
                  <li>• Potential S-Corp election for savings</li>
                  <li>• Better separation of business and personal finances</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Privacy and Identity Protection */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Privacy and Identity Protection
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-green-600" />
                  How an LLC Protects Your Privacy
                </h3>
                <p className="text-gray-700 mb-4">
                  While an LLC doesn't make you completely anonymous, it creates a legal separation between your personal and business activities. This can help protect your real identity in certain situations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Privacy Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Legal separation from personal identity</li>
                      <li>• Business name on public records</li>
                      <li>• Separate business bank account</li>
                      <li>• Professional business structure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Important Limitations:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Not completely anonymous</li>
                      <li>• Tax returns still require real name</li>
                      <li>• Bank accounts need real identity</li>
                      <li>• Legal proceedings may reveal identity</li>
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
              How to Decide If You Need an LLC
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Ask Yourself These Questions:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Income & Privacy</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Are you earning $20,000+ annually?</li>
                      <li>• Do you want to protect your real identity?</li>
                      <li>• Are you concerned about privacy?</li>
                      <li>• Do you plan to expand to other platforms?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Asset Protection</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Do you have significant personal assets?</li>
                      <li>• Are you concerned about liability risks?</li>
                      <li>• Do you want to build business credit?</li>
                      <li>• Do you plan to hire contractors or employees?</li>
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
              Ready to Protect Your Content Business?
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
              <Link href="/llc-for-upwork-freelancers">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Learn About Freelancer LLCs
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