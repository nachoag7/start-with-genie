"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, Scale } from "lucide-react";
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

export default function LLCVsInsurancePage() {
  return (
    <SeoPageLayout>
      <div id="llc-vs-insurance">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            LLC vs Liability Insurance: What Actually Protects You?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Many business owners wonder whether they need an LLC, liability insurance, or both. Here's what each actually protects and when you need them.
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

        {/* Understanding the Difference */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Understanding the Key Differences
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  LLC Protection
                </h3>
                <p className="text-gray-700 mb-4">
                  An LLC is a legal structure that creates a separate business entity. It provides legal protection by separating your personal assets from your business liabilities.
                </p>
                <p className="text-gray-700">
                  LLC protection is automatic once you form the entity and maintain proper separation between personal and business finances. It's a one-time setup cost with ongoing compliance requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-green-600" />
                  Liability Insurance
                </h3>
                <p className="text-gray-700 mb-4">
                  Liability insurance is a financial product that pays for covered losses and legal expenses. It provides financial protection but doesn't change your legal structure.
                </p>
                <p className="text-gray-700">
                  Insurance requires ongoing premium payments and only covers specific types of claims outlined in your policy. It's a recurring cost that provides financial backing for covered incidents.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What Each Protects */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What Each Actually Protects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  LLC Protection Covers
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Legal separation of personal and business assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protection from business lawsuits and debts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Personal home, savings, and property protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Business credit building opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tax advantages and flexibility</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-green-600" />
                  Insurance Protection Covers
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Financial payment for covered claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Legal defense costs and settlements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Property damage and bodily injury claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional errors and omissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Business interruption coverage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Cost Comparison */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Cost Comparison: LLC vs Insurance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  LLC Costs
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">One-Time Costs:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• LLC formation: $49 (Start With Genie)</li>
                      <li>• State filing fees: $50-$500</li>
                      <li>• EIN application: Free</li>
                      <li>• Operating agreement: Included</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ongoing Costs:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Annual reports: $0-$300</li>
                      <li>• State taxes: Varies by state</li>
                      <li>• Registered agent: $50-$300/year</li>
                      <li>• Compliance maintenance: Minimal</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  Insurance Costs
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Annual Premiums:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• General liability: $400-$1,500/year</li>
                      <li>• Professional liability: $500-$2,000/year</li>
                      <li>• Cyber liability: $300-$1,200/year</li>
                      <li>• Workers' comp: $500-$3,000/year</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Additional Costs:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Deductibles: $500-$5,000 per claim</li>
                      <li>• Policy limits: May need umbrella coverage</li>
                      <li>• Premium increases after claims</li>
                      <li>• Coverage gaps and exclusions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* When You Need Both */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Need Both LLC and Insurance
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <AlertTriangle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">High-Risk Industries</h3>
                <p className="text-gray-700">
                  Construction, healthcare, food service, and other high-risk industries need both legal protection (LLC) and financial protection (insurance) for comprehensive coverage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <User className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Client-Facing Businesses</h3>
                <p className="text-gray-700">
                  If you work directly with clients or customers, both LLC protection and professional liability insurance provide layers of protection against lawsuits and claims.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Building className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Growing Businesses</h3>
                <p className="text-gray-700">
                  As your business scales and takes on more risk, combining LLC structure with appropriate insurance coverage provides the most comprehensive protection.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* When LLC Alone is Enough */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When an LLC Alone is Sufficient
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Low-Risk Service Businesses
                </h3>
                <p className="text-gray-700 mb-4">
                  Freelancers, consultants, and digital service providers with minimal physical risk can often rely on LLC protection alone, especially when starting out.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Virtual assistants and freelancers</li>
                  <li>• Digital marketing consultants</li>
                  <li>• Online course creators</li>
                  <li>• Software developers</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  When Insurance is Essential
                </h3>
                <p className="text-gray-700 mb-4">
                  Some situations require insurance regardless of LLC status, especially when working with clients who require proof of coverage.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Client contracts require insurance</li>
                  <li>• Working with large corporations</li>
                  <li>• Government contracts</li>
                  <li>• High-value projects</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Real-World Scenarios */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Real-World Protection Scenarios
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  LLC Protection Scenario
                </h3>
                <p className="text-gray-700 mb-4">
                  A client sues your business for $100,000 in damages. With an LLC, the lawsuit can only go after your business assets. Your personal home, savings, and other personal property remain protected.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What's Protected:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Your personal home and real estate</li>
                    <li>• Personal bank accounts and savings</li>
                    <li>• Personal vehicles and property</li>
                    <li>• Retirement accounts and investments</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-blue-600" />
                  Insurance Protection Scenario
                </h3>
                <p className="text-gray-700 mb-4">
                  A customer slips and falls at your business location, requiring $50,000 in medical treatment. Your general liability insurance covers the medical costs and legal defense.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What's Covered:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Medical expenses for the injured party</li>
                    <li>• Legal defense costs</li>
                    <li>• Settlement or judgment amounts</li>
                    <li>• Property damage claims</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Decide */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Decide What You Need
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Ask Yourself These Questions:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Risk Assessment</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Do you work in a high-risk industry?</li>
                      <li>• Do you have significant personal assets?</li>
                      <li>• Do you work directly with clients?</li>
                      <li>• Do clients require proof of insurance?</li>
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
                  Most businesses benefit from starting with an LLC for legal protection, then adding insurance as they grow. Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> can help you get started.
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
              Ready to Protect Your Business?
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
              <Link href="/common-llc-mistakes-to-avoid">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Learn About Common Mistakes
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