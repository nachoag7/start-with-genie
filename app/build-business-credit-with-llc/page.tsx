"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, CreditCard, Building, AlertTriangle, Calculator, FileText, TrendingUp, Clock } from "lucide-react";
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

export default function BuildBusinessCreditWithLLCPage() {
  return (
    <SeoPageLayout>
      <div id="build-business-credit-with-llc">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            How to Build Business Credit with an LLC
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Learn how to build business credit from scratch using your LLC. This guide shows you the step-by-step process to establish and grow your business credit score.
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

        {/* What is Business Credit */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What is Business Credit and Why It Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  Business Credit Explained
                </h3>
                <p className="text-gray-700 mb-4">
                  Business credit is separate from your personal credit score. It's based on your LLC's financial history and determines your ability to get business loans, credit cards, and financing.
                </p>
                <p className="text-gray-700">
                  Just like personal credit, business credit is built over time through responsible borrowing and repayment. The key difference is that it's tied to your business entity, not your personal identity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-green-600" />
                  Why Business Credit Matters
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Higher credit limits than personal cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Better terms on business loans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protects your personal credit score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Essential for business growth and scaling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Steps to Build Business Credit */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Steps to Build Business Credit from Scratch
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Form Your LLC and Get an EIN</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The first step is establishing your business entity. You'll need your LLC formation documents and an Employer Identification Number (EIN) from the IRS.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    What You Need
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• LLC Articles of Organization</li>
                    <li>• EIN (free from IRS.gov)</li>
                    <li>• Operating Agreement</li>
                    <li>• Business bank account</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Open a Business Bank Account</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Use your EIN and LLC documents to open a business checking account. This separates your business and personal finances, which is crucial for building business credit.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">What to Bring:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• EIN confirmation letter</li>
                      <li>• LLC formation documents</li>
                      <li>• Operating agreement</li>
                      <li>• Personal ID</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bank Options:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Traditional banks (Chase, Bank of America)</li>
                      <li>• Online banks (BlueVine, Novo)</li>
                      <li>• Credit unions</li>
                      <li>• Local community banks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Establish Trade Credit</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Start with vendors who report to business credit bureaus. These are often easier to get than business credit cards and help establish your credit history.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Easy Trade Credit Options:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Office supplies (Staples, Office Depot)</li>
                      <li>• Shipping supplies (UPS, FedEx)</li>
                      <li>• Business services (Netflix, Adobe)</li>
                      <li>• Equipment financing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How to Apply:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Use your EIN and business name</li>
                      <li>• Provide business bank account info</li>
                      <li>• Start with small purchases</li>
                      <li>• Pay on time every month</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                  <h3 className="text-xl font-semibold">Apply for Business Credit Cards</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Once you have some trade credit history, apply for business credit cards. Start with cards that are easier to get approved for, even if they have lower limits.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Starter Business Cards:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Capital One Spark Cash Select</li>
                      <li>• Chase Ink Business Unlimited</li>
                      <li>• American Express Blue Business Cash</li>
                      <li>• Bank of America Business Advantage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Application Tips:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Apply with your EIN</li>
                      <li>• Use your business address</li>
                      <li>• Have business bank account ready</li>
                      <li>• Be prepared for personal guarantee</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Timeline and Expectations */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Timeline and What to Expect
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Clock className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Months 1-3</h3>
                <p className="text-gray-700 mb-4">
                  Set up your LLC, get your EIN, and open a business bank account. Apply for your first trade credit accounts.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• LLC formation and EIN</li>
                  <li>• Business bank account</li>
                  <li>• First trade credit accounts</li>
                  <li>• Establish business address</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <TrendingUp className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Months 4-6</h3>
                <p className="text-gray-700 mb-4">
                  Apply for your first business credit card. Continue building trade credit and maintaining good payment history.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• First business credit card</li>
                  <li>• Additional trade credit</li>
                  <li>• Regular credit usage</li>
                  <li>• On-time payments</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CreditCard className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Months 7-12</h3>
                <p className="text-gray-700 mb-4">
                  Apply for additional business credit cards and loans. Your business credit score should be established by now.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Additional credit cards</li>
                  <li>• Business loans</li>
                  <li>• Higher credit limits</li>
                  <li>• Better terms available</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Common Mistakes */}
        <motion.section 
          className="py-12 px-4"
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
                  Mixing Personal and Business
                </h3>
                <p className="text-gray-700 mb-4">
                  Using personal credit cards for business expenses or vice versa can hurt both your personal and business credit scores.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Always use business cards for business expenses</li>
                  <li>• Keep separate bank accounts</li>
                  <li>• Use your EIN, not SSN</li>
                  <li>• Maintain clear financial separation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Applying Too Early
                </h3>
                <p className="text-gray-700 mb-4">
                  Applying for business credit cards before establishing any business credit history often leads to rejections or low limits.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Start with trade credit first</li>
                  <li>• Wait 3-6 months after LLC formation</li>
                  <li>• Build some payment history</li>
                  <li>• Have business bank account established</li>
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
              How Start With Genie Helps You Build Business Credit
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">LLC Formation</h3>
                <p className="text-gray-700">
                  Get everything you need to form your LLC properly, including your EIN application guide and operating agreement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Proper Structure</h3>
                <p className="text-gray-700">
                  Our operating agreement helps maintain the legal separation between your personal and business finances.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Flat $49 Rate</h3>
                <p className="text-gray-700">
                  No hidden fees or upsells. Just $49 for everything you need to start building business credit properly.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Ready to start building business credit? Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> shows you exactly what to do next.
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
              Ready to Start Building Business Credit?
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
              <Link href="/does-llc-protect-personal-assets">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Learn About Asset Protection
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