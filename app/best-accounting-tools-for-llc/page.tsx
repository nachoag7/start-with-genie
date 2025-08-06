"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, Monitor } from "lucide-react";
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

export default function BestAccountingToolsForLLCPage() {
  return (
    <SeoPageLayout>
      <div id="best-accounting-tools-for-llc">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Best Accounting Software for Small Business LLCs
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Find the perfect accounting software for your LLC. Compare features, pricing, and ease of use to manage your business finances effectively.
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

        {/* Why You Need Accounting Software */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Your LLC Needs Accounting Software
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Legal Protection
                </h3>
                <p className="text-gray-700 mb-4">
                  Proper accounting helps maintain your LLC's limited liability protection by demonstrating clear separation between business and personal finances.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Separate business and personal transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maintain proper financial records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Demonstrate business legitimacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protect against legal challenges</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-green-600" />
                  Tax Benefits
                </h3>
                <p className="text-gray-700 mb-4">
                  Good accounting software helps you maximize deductions, track expenses, and file taxes accurately and on time.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Track all business expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maximize tax deductions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prepare accurate tax returns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Meet quarterly tax deadlines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Top Accounting Software Options */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Top Accounting Software for LLCs
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">QuickBooks Online</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The most popular accounting software for small businesses. Offers comprehensive features with excellent support.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Comprehensive feature set</li>
                      <li>• Excellent mobile app</li>
                      <li>• Strong customer support</li>
                      <li>• Integrates with many tools</li>
                      <li>• Automatic bank reconciliation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Higher cost ($30-$200/month)</li>
                      <li>• Can be overwhelming for beginners</li>
                      <li>• Steep learning curve</li>
                      <li>• Limited customization</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Established businesses with complex accounting needs and budget for premium software.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">FreshBooks</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  User-friendly accounting software designed for freelancers and small businesses. Excellent for invoicing and expense tracking.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Very user-friendly interface</li>
                      <li>• Excellent invoicing features</li>
                      <li>• Great mobile app</li>
                      <li>• Good customer support</li>
                      <li>• Time tracking included</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Limited advanced features</li>
                      <li>• Higher cost for larger businesses</li>
                      <li>• Limited inventory management</li>
                      <li>• Fewer integrations than QuickBooks</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Freelancers, consultants, and small service businesses that need simple, effective invoicing.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Wave</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Free accounting software with basic features. Great for new businesses with limited budgets.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Completely free</li>
                      <li>• Easy to use</li>
                      <li>• Good basic features</li>
                      <li>• No hidden fees</li>
                      <li>• Automatic bank reconciliation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Limited advanced features</li>
                      <li>• No inventory management</li>
                      <li>• Limited customer support</li>
                      <li>• May outgrow quickly</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> New businesses, freelancers, and small businesses with tight budgets.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                  <h3 className="text-xl font-semibold">Xero</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Cloud-based accounting software popular outside the US. Good for businesses with international operations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Excellent international features</li>
                      <li>• Strong multi-currency support</li>
                      <li>• Good mobile app</li>
                      <li>• Real-time collaboration</li>
                      <li>• Comprehensive reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Less popular in US</li>
                      <li>• Limited US-specific features</li>
                      <li>• Higher cost than some alternatives</li>
                      <li>• Smaller user community</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Businesses with international operations or those who prefer cloud-based solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features to Look For */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Essential Features for LLC Accounting Software
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Monitor className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Bank Reconciliation</h3>
                <p className="text-gray-700">
                  Automatically match your bank transactions with your accounting records to ensure accuracy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Expense Tracking</h3>
                <p className="text-gray-700">
                  Easily categorize and track all business expenses for tax deductions and financial planning.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CreditCard className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Invoicing</h3>
                <p className="text-gray-700">
                  Create and send professional invoices, track payments, and manage accounts receivable.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Calculator className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Tax Preparation</h3>
                <p className="text-gray-700">
                  Generate reports and export data to make tax filing easier and more accurate.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Data Security</h3>
                <p className="text-gray-700">
                  Ensure your financial data is protected with encryption and secure cloud storage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <User className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">User Access</h3>
                <p className="text-gray-700">
                  Control who can access your financial data and what they can do with it.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Choose */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Choose the Right Accounting Software
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  Consider Your Budget
                </h3>
                <p className="text-gray-700 mb-4">
                  Start with free or low-cost options if you're just beginning. You can always upgrade as your business grows.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Free Options:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Wave</li>
                      <li>• GnuCash</li>
                      <li>• Akaunting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Low Cost ($10-30/month):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• FreshBooks</li>
                      <li>• Zoho Books</li>
                      <li>• Sage Business Cloud</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium ($30+/month):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• QuickBooks Online</li>
                      <li>• Xero</li>
                      <li>• NetSuite</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-green-600" />
                  Assess Your Business Needs
                </h3>
                <p className="text-gray-700 mb-4">
                  Consider your business size, complexity, and specific requirements when choosing software.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Simple Needs:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Basic expense tracking</li>
                      <li>• Simple invoicing</li>
                      <li>• Bank reconciliation</li>
                      <li>• Basic reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Complex Needs:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Inventory management</li>
                      <li>• Multi-user access</li>
                      <li>• Advanced reporting</li>
                      <li>• Third-party integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Implementation Tips */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Tips for Implementing Accounting Software
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Getting Started
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Start with a clean slate (new fiscal year)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set up your chart of accounts properly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Connect your business bank account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Import historical data if needed</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Common Mistakes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Not backing up data regularly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Mixing personal and business transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Not reconciling accounts monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Ignoring software updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How Genie Helps */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How Start With Genie Helps You Set Up Proper Accounting
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  We provide guidance on setting up proper business banking and accounting systems for your LLC.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Legal Protection</h3>
                <p className="text-gray-700">
                  Our resources help you maintain proper separation between business and personal finances.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Flat $49 Rate</h3>
                <p className="text-gray-700">
                  No hidden fees or upsells. Just $49 for everything you need to form your LLC and get started properly.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Ready to form your LLC? Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> shows you exactly what to do.
              </p>
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
              Ready to Form Your LLC and Set Up Proper Accounting?
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
              <Link href="/llc-bookkeeping-for-beginners">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Bookkeeping for Beginners
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