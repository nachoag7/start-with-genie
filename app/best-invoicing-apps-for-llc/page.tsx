"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone } from "lucide-react";
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

export default function BestInvoicingAppsForLLCPage() {
  return (
    <SeoPageLayout>
      <div id="best-invoicing-apps-for-llc">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Best Invoicing Apps for LLCs: Get Paid Faster
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Find the perfect invoicing app for your LLC. Compare features, pricing, and ease of use to get paid faster and manage your business finances effectively.
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

        {/* Why You Need Invoicing Software */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Your LLC Needs Professional Invoicing Software
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Professional Image
                </h3>
                <p className="text-gray-700 mb-4">
                  Professional invoices help establish credibility and trust with clients, making you look more established than you might be.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Branded invoices with your logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consistent formatting and design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional payment terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Automated payment reminders</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-green-600" />
                  Faster Payments
                </h3>
                <p className="text-gray-700 mb-4">
                  Good invoicing software helps you get paid faster with automated reminders and easy payment options.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Online payment processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Automatic payment reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Payment tracking and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Multiple payment methods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Top Invoicing Apps */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Top Invoicing Apps for LLCs
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">FreshBooks</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  User-friendly invoicing software designed for freelancers and small businesses. Excellent for time tracking and expense management.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Very user-friendly interface</li>
                      <li>• Excellent time tracking</li>
                      <li>• Great mobile app</li>
                      <li>• Good customer support</li>
                      <li>• Multiple payment gateways</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Higher cost ($15-$50/month)</li>
                      <li>• Limited advanced features</li>
                      <li>• Limited customization</li>
                      <li>• Fewer integrations than some</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Freelancers, consultants, and small service businesses that need simple, effective invoicing with time tracking.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">QuickBooks Online</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Comprehensive accounting software with excellent invoicing features. Perfect for businesses that need full accounting integration.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Full accounting integration</li>
                      <li>• Excellent reporting</li>
                      <li>• Strong mobile app</li>
                      <li>• Many integrations</li>
                      <li>• Professional invoicing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Higher cost ($30-$200/month)</li>
                      <li>• Can be overwhelming</li>
                      <li>• Steep learning curve</li>
                      <li>• Overkill for simple invoicing</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Established businesses that need comprehensive accounting with invoicing included.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Wave</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Free invoicing software with basic features. Great for new businesses with limited budgets.
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
                      <li>• Basic invoicing only</li>
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
                  <h3 className="text-xl font-semibold">Zoho Invoice</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Part of the Zoho ecosystem, offering good invoicing features with reasonable pricing.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Good pricing ($15/month)</li>
                      <li>• Professional templates</li>
                      <li>• Good mobile app</li>
                      <li>• Multiple payment gateways</li>
                      <li>• Integrates with Zoho CRM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Limited advanced features</li>
                      <li>• Smaller user community</li>
                      <li>• Fewer integrations</li>
                      <li>• Basic reporting</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Small businesses that want professional invoicing without the complexity of full accounting software.
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
              Essential Features for LLC Invoicing Software
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Send className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Online Payment Processing</h3>
                <p className="text-gray-700">
                  Accept credit cards, ACH transfers, and digital payments directly through your invoices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Zap className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Automated Reminders</h3>
                <p className="text-gray-700">
                  Automatic payment reminders help you get paid faster without manual follow-up.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Smartphone className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Mobile App</h3>
                <p className="text-gray-700">
                  Create and send invoices on the go with a good mobile app.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Professional Templates</h3>
                <p className="text-gray-700">
                  Customizable invoice templates that reflect your brand and look professional.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Calculator className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Tax Calculations</h3>
                <p className="text-gray-700">
                  Automatic tax calculations and multiple tax rates for different clients or services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <TrendingUp className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Reporting & Analytics</h3>
                <p className="text-gray-700">
                  Track payment history, outstanding invoices, and cash flow with detailed reports.
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
              How to Choose the Right Invoicing App
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
                      <li>• Invoice Ninja</li>
                      <li>• Zoho Invoice (limited)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Low Cost ($10-30/month):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• FreshBooks</li>
                      <li>• Zoho Invoice</li>
                      <li>• Invoice2go</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium ($30+/month):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• QuickBooks Online</li>
                      <li>• Xero</li>
                      <li>• Sage Business Cloud</li>
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
                      <li>• Basic invoicing</li>
                      <li>• Payment processing</li>
                      <li>• Payment reminders</li>
                      <li>• Basic reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Complex Needs:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Time tracking</li>
                      <li>• Expense management</li>
                      <li>• Multiple tax rates</li>
                      <li>• Advanced reporting</li>
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
              Tips for Implementing Invoicing Software
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
                    <span>Set up your business profile completely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Add your logo and branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set up payment gateways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Create invoice templates</span>
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
                    <span>Not setting up payment gateways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Using generic invoice templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Not setting up payment reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Ignoring mobile app setup</span>
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
              How Start With Genie Helps You Set Up Professional Invoicing
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  We provide guidance on setting up proper business banking and invoicing systems for your LLC.
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
                Ready to form your LLC? Our <Link href="/llc-bookkeeping-for-beginners" className="text-blue-600 hover:underline">bookkeeping guide</Link> shows you how to set up proper invoicing.
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
              Ready to Form Your LLC and Set Up Professional Invoicing?
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
              <Link href="/best-accounting-tools-for-llc">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Best Accounting Software
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