"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, AlertCircle } from "lucide-react";
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

export default function CommonLLCMistakesToAvoidPage() {
  return (
    <SeoPageLayout>
      <div id="common-llc-mistakes-to-avoid">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Common LLC Mistakes to Avoid
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Learn the most common mistakes new LLC owners make and how to avoid them. These simple errors can cost you thousands and put your protection at risk.
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

        {/* Most Common Mistakes */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              The Most Common LLC Mistakes
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Mixing Personal and Business Finances</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  This is the biggest mistake that can destroy your LLC protection. Using your personal bank account for business transactions or vice versa can "pierce the corporate veil."
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    What Not to Do
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Pay business expenses from personal account</li>
                    <li>• Deposit business income into personal account</li>
                    <li>• Use personal credit card for business purchases</li>
                    <li>• Write personal checks from business account</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    What to Do Instead
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Open a separate business bank account</li>
                    <li>• Use business credit cards for business expenses</li>
                    <li>• Pay yourself through proper distributions</li>
                    <li>• Keep detailed records of all transactions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Not Getting an EIN</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Many LLC owners skip getting an Employer Identification Number (EIN) and use their Social Security Number instead. This can cause tax issues and limit business opportunities.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Problems This Causes
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Can't open business bank accounts</li>
                    <li>• Limits business credit opportunities</li>
                    <li>• Tax filing complications</li>
                    <li>• Privacy concerns (exposing SSN)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    The Solution
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Apply for EIN immediately after LLC formation</li>
                    <li>• Use EIN for all business transactions</li>
                    <li>• Keep EIN separate from personal SSN</li>
                    <li>• Use EIN for tax filings</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Ignoring Annual Requirements</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  LLCs have ongoing compliance requirements that many owners forget about. Missing these deadlines can result in penalties, loss of good standing, or even dissolution.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Common Requirements:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Annual reports to state</li>
                      <li>• State tax filings</li>
                      <li>• Registered agent fees</li>
                      <li>• Operating agreement updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Consequences:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Late fees and penalties</li>
                      <li>• Loss of good standing</li>
                      <li>• Administrative dissolution</li>
                      <li>• Loss of liability protection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                  <h3 className="text-xl font-semibold">Poor Record Keeping</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Inadequate record keeping can destroy your LLC protection and cause serious tax problems. Courts can pierce the corporate veil if you can't prove proper business separation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Records You Need:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Meeting minutes and resolutions</li>
                      <li>• Financial statements</li>
                      <li>• Tax returns and filings</li>
                      <li>• Operating agreement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Organization Tips:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Use accounting software</li>
                      <li>• Keep digital copies</li>
                      <li>• Regular record reviews</li>
                      <li>• Professional organization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Legal Structure Mistakes */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Legal Structure Mistakes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  Choosing the Wrong State
                </h3>
                <p className="text-gray-700 mb-4">
                  Many people form LLCs in Delaware or Nevada thinking it's better, but this often creates unnecessary complexity and costs for small businesses.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Higher formation costs</li>
                  <li>• Additional registered agent fees</li>
                  <li>• More complex tax filings</li>
                  <li>• Unnecessary for most small businesses</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  Incomplete Operating Agreement
                </h3>
                <p className="text-gray-700 mb-4">
                  Using a generic operating agreement or skipping it entirely can cause major problems if disputes arise or if you want to add partners later.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Unclear ownership structure</li>
                  <li>• No dispute resolution process</li>
                  <li>• Difficult to add partners</li>
                  <li>• Potential legal conflicts</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tax Mistakes */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Tax and Financial Mistakes
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Calculator className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Not Paying Quarterly Taxes</h3>
                <p className="text-gray-700">
                  LLC owners often forget to pay quarterly estimated taxes, leading to penalties and large tax bills at year-end.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Mixing Personal and Business Expenses</h3>
                <p className="text-gray-700">
                  Using business funds for personal expenses or vice versa can cause serious tax problems and legal issues.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Poor Expense Documentation</h3>
                <p className="text-gray-700">
                  Not keeping proper receipts and documentation for business expenses can lead to lost deductions and audit problems.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Avoid These Mistakes */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Avoid These Common Mistakes
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Set Up Proper Systems from Day One
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Financial Systems:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Open business bank account immediately</li>
                      <li>• Get business credit card</li>
                      <li>• Set up accounting software</li>
                      <li>• Create expense tracking system</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legal Systems:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Get EIN right after formation</li>
                      <li>• Create proper operating agreement</li>
                      <li>• Set up compliance calendar</li>
                      <li>• Establish record-keeping system</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Maintain Proper Separation
                </h3>
                <p className="text-gray-700 mb-4">
                  The key to maintaining your LLC protection is keeping your business and personal affairs completely separate.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Financial Separation:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Never use personal accounts for business</li>
                      <li>• Pay yourself through proper distributions</li>
                      <li>• Keep business and personal expenses separate</li>
                      <li>• Use business accounts for all business transactions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Operational Separation:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Use business name on all documents</li>
                      <li>• Have separate business address</li>
                      <li>• Use business email and phone</li>
                      <li>• Keep business records organized</li>
                    </ul>
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
              How Start With Genie Helps You Avoid These Mistakes
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  We provide everything you need for proper LLC formation, including EIN application guidance and a comprehensive operating agreement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Step-by-Step Guidance</h3>
                <p className="text-gray-700">
                  Our detailed instructions help you avoid common mistakes and set up your LLC correctly from the start.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Flat $49 Rate</h3>
                <p className="text-gray-700">
                  No hidden fees or upsells. Just $49 for everything you need to form your LLC properly and avoid costly mistakes.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Ready to form your LLC the right way? Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> shows you exactly what to do next.
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
              Ready to Form Your LLC the Right Way?
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
              <Link href="/how-to-correct-llc-filing-errors">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Learn How to Fix Mistakes
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