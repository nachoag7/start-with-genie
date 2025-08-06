"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, Clock } from "lucide-react";
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

export default function WhatToDoAfterLLCIsApprovedPage() {
  return (
    <SeoPageLayout>
      <div id="what-to-do-after-llc-is-approved">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            What to Do Right After Your LLC Is Approved
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Congratulations! Your LLC is approved. Now what? Here's your step-by-step checklist to get your business up and running properly.
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

        {/* Immediate Actions */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Immediate Actions (First 24 Hours)
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Get Your EIN</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Apply for your Employer Identification Number (EIN) immediately. This is your business's tax ID and you'll need it for everything else.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">How to Apply:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Go to IRS.gov/EIN</li>
                    <li>• Click "Apply Online Now"</li>
                    <li>• Complete the application (5 minutes)</li>
                    <li>• Receive EIN immediately</li>
                    <li>• Save the confirmation letter</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Open a Business Bank Account</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Open a separate business bank account immediately. This is crucial for maintaining your LLC protection and keeping finances organized.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">What You'll Need:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Your EIN</li>
                      <li>• LLC formation documents</li>
                      <li>• Operating agreement</li>
                      <li>• Government-issued ID</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recommended Banks:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Local credit unions</li>
                      <li>• Online banks (Chase, Bank of America)</li>
                      <li>• Digital banks (BlueVine, Novo)</li>
                      <li>• Compare fees and features</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Set Up Your Operating Agreement</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Create or finalize your operating agreement. This document outlines how your LLC will be managed and protects your limited liability.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Sections to Include:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Member information and ownership percentages</li>
                    <li>• Management structure and decision-making</li>
                    <li>• Profit and loss distribution</li>
                    <li>• Transfer and dissolution procedures</li>
                    <li>• Dispute resolution process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* First Week Actions */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              First Week Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  Financial Setup
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Apply for business credit cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set up accounting software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Transfer any existing business funds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set up payment processing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-green-600" />
                  Business Setup
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Get business insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Apply for necessary licenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set up business email and website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Create business cards and materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tax and Compliance */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Tax and Compliance Requirements
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Tax Setup
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Federal Requirements:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• File Form SS-4 (EIN application)</li>
                      <li>• Choose tax election (default or S-Corp)</li>
                      <li>• Set up quarterly estimated tax payments</li>
                      <li>• Plan for annual tax filing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">State Requirements:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Register for state sales tax (if applicable)</li>
                      <li>• File annual reports</li>
                      <li>• Pay state franchise taxes</li>
                      <li>• Maintain registered agent</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  Record Keeping
                </h3>
                <p className="text-gray-700 mb-4">
                  Set up proper record keeping from day one. This protects your LLC status and makes tax time much easier.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Financial Records:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Bank statements</li>
                      <li>• Receipts and invoices</li>
                      <li>• Expense tracking</li>
                      <li>• Profit/loss statements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legal Records:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Formation documents</li>
                      <li>• Operating agreement</li>
                      <li>• Meeting minutes</li>
                      <li>• Annual reports</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tax Records:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• EIN confirmation</li>
                      <li>• Tax returns</li>
                      <li>• Quarterly payments</li>
                      <li>• Deduction documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Business Operations */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Setting Up Business Operations
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <User className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Client Management</h3>
                <p className="text-gray-700">
                  Set up systems for managing clients, contracts, and invoicing. Consider CRM software for larger operations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Insurance</h3>
                <p className="text-gray-700">
                  Get appropriate business insurance. General liability insurance is often essential for protecting your business.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Building className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Professional Image</h3>
                <p className="text-gray-700">
                  Create a professional business image with a website, business cards, and consistent branding.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Common Mistakes to Avoid */}
        <motion.section 
          className="py-12 px-4 bg-red-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Common Mistakes to Avoid
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Don't Mix Personal and Business
                </h3>
                <p className="text-gray-700 mb-4">
                  Never use your personal bank account or credit cards for business expenses. This can destroy your LLC protection.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Use business accounts only for business</li>
                  <li>• Pay yourself through proper distributions</li>
                  <li>• Keep detailed records of all transactions</li>
                  <li>• Never use personal funds for business</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Don't Ignore Compliance
                </h3>
                <p className="text-gray-700 mb-4">
                  Missing annual reports or tax filings can result in penalties, loss of good standing, or even dissolution.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Set up compliance calendar</li>
                  <li>• File annual reports on time</li>
                  <li>• Pay estimated taxes quarterly</li>
                  <li>• Keep registered agent updated</li>
                </ul>
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
              How Start With Genie Helps You Get Everything Right
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  We provide EIN application guidance and comprehensive operating agreement to get you started properly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Step-by-Step Guidance</h3>
                <p className="text-gray-700">
                  Our detailed instructions help you avoid common mistakes and set up your LLC correctly from day one.
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
              Ready to Form Your LLC?
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
              <Link href="/llc-operating-agreement-explained">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Learn About Operating Agreements
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