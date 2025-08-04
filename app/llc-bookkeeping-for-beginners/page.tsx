"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock } from "lucide-react";
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

export default function LLCBookkeepingForBeginnersPage() {
  return (
    <SeoPageLayout>
      <div id="llc-bookkeeping-for-beginners">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            LLC Bookkeeping for Beginners: Complete Guide
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Learn the basics of bookkeeping for your LLC. From setting up your system to tracking expenses and preparing for taxes - everything you need to know.
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

        {/* Why Bookkeeping Matters */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Proper Bookkeeping is Essential for Your LLC
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Legal Protection
                </h3>
                <p className="text-gray-700 mb-4">
                  Proper bookkeeping helps maintain your LLC's limited liability protection by demonstrating clear separation between business and personal finances.
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
                  Good bookkeeping helps you maximize deductions, track expenses, and file taxes accurately and on time.
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

        {/* Basic Bookkeeping System */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Setting Up Your Basic Bookkeeping System
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Separate Business Bank Account</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Open a dedicated business checking account. Never mix personal and business transactions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">What to do:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Open business checking account</li>
                      <li>• Get business debit card</li>
                      <li>• Set up online banking</li>
                      <li>• Use only for business transactions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What NOT to do:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Use personal account for business</li>
                      <li>• Mix personal and business expenses</li>
                      <li>• Pay personal bills from business account</li>
                      <li>• Use business account for personal purchases</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Choose Your Bookkeeping Method</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Decide whether to use software, spreadsheets, or a combination. Start simple and scale up.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Software Options:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• QuickBooks Online</li>
                      <li>• FreshBooks</li>
                      <li>• Wave (free)</li>
                      <li>• Xero</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Spreadsheet Options:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Google Sheets</li>
                      <li>• Excel</li>
                      <li>• Free templates</li>
                      <li>• Custom tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Manual Options:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Receipt envelopes</li>
                      <li>• Checkbook register</li>
                      <li>• Monthly summaries</li>
                      <li>• Simple ledgers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Set Up Your Chart of Accounts</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Create categories for tracking income and expenses. Start with basic categories and add more as needed.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Income Categories:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sales/Revenue</li>
                      <li>• Service Income</li>
                      <li>• Consulting Fees</li>
                      <li>• Other Income</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expense Categories:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Office Supplies</li>
                      <li>• Software/Subscriptions</li>
                      <li>• Travel/Meals</li>
                      <li>• Marketing/Advertising</li>
                      <li>• Professional Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Essential Bookkeeping Tasks */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Essential Bookkeeping Tasks for Your LLC
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Daily Tasks
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Record all income and expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Save receipts and invoices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Update your checkbook register</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reconcile bank transactions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Monthly Tasks
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reconcile bank statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Review profit and loss statement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Check cash flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Back up your records</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Common Bookkeeping Mistakes */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Common Bookkeeping Mistakes to Avoid
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Mixing Personal and Business Expenses
                </h3>
                <p className="text-gray-700 mb-4">
                  This is the most common and dangerous mistake. It can destroy your LLC's liability protection.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">What NOT to do:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Use personal credit card for business</li>
                      <li>• Pay business expenses from personal account</li>
                      <li>• Mix receipts in same envelope</li>
                      <li>• Use business account for personal purchases</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What to do instead:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Get separate business credit card</li>
                      <li>• Use only business account for business</li>
                      <li>• Keep receipts separate</li>
                      <li>• Reimburse yourself properly</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Not Tracking Everything
                </h3>
                <p className="text-gray-700 mb-4">
                  Every business transaction should be recorded, no matter how small.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Record every sale, even cash sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Save all receipts, even small ones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Track mileage for business travel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Record business meals and entertainment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Procrastinating
                </h3>
                <p className="text-gray-700 mb-4">
                  Bookkeeping gets harder the longer you wait. Small daily tasks prevent big problems later.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Daily (5 minutes):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Record transactions</li>
                      <li>• File receipts</li>
                      <li>• Update checkbook</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Weekly (30 minutes):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Reconcile accounts</li>
                      <li>• Review cash flow</li>
                      <li>• Plan for next week</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Simple Bookkeeping System */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Simple Bookkeeping System for Beginners
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Receipt className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Receipt Management</h3>
                <p className="text-gray-700">
                  Use a simple envelope system or digital app to organize receipts by month and category.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Income Tracking</h3>
                <p className="text-gray-700">
                  Record every payment you receive, including the date, amount, and source of income.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Calculator className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Monthly Summary</h3>
                <p className="text-gray-700">
                  Create a simple monthly report showing total income, total expenses, and net profit.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Need help setting up your LLC? Our <Link href="/how-to-start-an-llc" className="text-blue-600 hover:underline">step-by-step guide</Link> shows you exactly what to do.
              </p>
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
              How Start With Genie Helps You Set Up Proper Bookkeeping
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
                Ready to form your LLC? Our <Link href="/best-accounting-tools-for-llc" className="text-blue-600 hover:underline">accounting tools guide</Link> helps you choose the right software.
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
              Ready to Form Your LLC and Set Up Proper Bookkeeping?
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