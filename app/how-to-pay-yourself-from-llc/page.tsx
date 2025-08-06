"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, TrendingUp } from "lucide-react";
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

export default function HowToPayYourselfFromLLCPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-pay-yourself-from-llc">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            How to Pay Yourself from Your LLC (the Right Way)
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Learn the proper ways to pay yourself from your LLC. Understanding distributions, salaries, and tax implications can save you thousands.
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

        {/* Understanding LLC Payment Methods */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Understanding LLC Payment Methods
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  Owner's Draw (Distributions)
                </h3>
                <p className="text-gray-700 mb-4">
                  The most common way for single-member LLCs to pay themselves. You take money out of your business account as needed.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No payroll taxes (self-employment tax only)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Flexible timing and amounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Simple to implement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No W-2 required</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-green-600" />
                  Salary (W-2 Employee)
                </h3>
                <p className="text-gray-700 mb-4">
                  Treating yourself as an employee of your LLC. More complex but can offer benefits and retirement options.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Regular paycheck and benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Easier to get business loans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Retirement plan options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>More professional appearance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Owner's Draw Process */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Take Owner's Draws (Step-by-Step)
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Set Up Proper Business Banking</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  First, ensure you have a separate business bank account. Never mix personal and business finances.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Separate business checking account</li>
                    <li>• Business debit card</li>
                    <li>• Clear separation from personal accounts</li>
                    <li>• Proper record keeping</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Determine Your Draw Amount</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Calculate how much you can safely take out without hurting your business operations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Considerations:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Business cash flow</li>
                      <li>• Operating expenses</li>
                      <li>• Emergency fund needs</li>
                      <li>• Tax obligations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best Practices:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Keep 3-6 months of expenses</li>
                      <li>• Take regular, consistent amounts</li>
                      <li>• Document all transfers</li>
                      <li>• Plan for quarterly taxes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Transfer and Document</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Transfer money from your business account to your personal account and keep proper records.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Transfer Methods:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Bank transfer (ACH)</li>
                      <li>• Business debit card</li>
                      <li>• Check from business account</li>
                      <li>• Wire transfer (for large amounts)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Documentation:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Record date and amount</li>
                      <li>• Note purpose as "owner's draw"</li>
                      <li>• Keep bank statements</li>
                      <li>• Update your books regularly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tax Implications */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Tax Implications of Owner's Draws
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Self-Employment Taxes
                </h3>
                <p className="text-gray-700 mb-4">
                  You'll pay self-employment taxes (15.3%) on your net business income, regardless of how much you draw.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 12.4% for Social Security (up to limit)</li>
                  <li>• 2.9% for Medicare (no limit)</li>
                  <li>• Due quarterly with estimated taxes</li>
                  <li>• Based on net profit, not draw amount</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  Income Tax
                </h3>
                <p className="text-gray-700 mb-4">
                  Your draws are not additional income for tax purposes. You're taxed on your business's net profit.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Taxed on business net income</li>
                  <li>• Draws don't affect tax liability</li>
                  <li>• File Schedule C with 1040</li>
                  <li>• Consider quarterly payments</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Salary vs Draw Comparison */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Salary vs Owner's Draw: Which is Better?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Owner's Draw Advantages
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tax Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• No payroll taxes</li>
                      <li>• Simpler tax filing</li>
                      <li>• More cash flow flexibility</li>
                      <li>• Lower administrative costs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Operational Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• No payroll processing</li>
                      <li>• No W-2 forms</li>
                      <li>• Flexible timing</li>
                      <li>• Easier to manage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Salary Advantages
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Business Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Easier to get business loans</li>
                      <li>• More professional appearance</li>
                      <li>• Better for multiple members</li>
                      <li>• Clear income documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personal Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Regular paycheck</li>
                      <li>• Employee benefits eligibility</li>
                      <li>• Retirement plan options</li>
                      <li>• Better for mortgage applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Common Mistakes */}
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
                  Tax Mistakes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Not paying quarterly estimated taxes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Thinking draws are tax-free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Not keeping proper records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Mixing personal and business funds</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Business Mistakes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Taking too much money out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Not maintaining business reserves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Inconsistent draw amounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Not planning for slow periods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Best Practices */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Best Practices for Paying Yourself
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Maintain Separation</h3>
                <p className="text-gray-700">
                  Always use separate business and personal accounts. Never mix funds or use personal accounts for business expenses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Calculator className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Plan for Taxes</h3>
                <p className="text-gray-700">
                  Set aside money for quarterly estimated taxes. Aim to save 25-30% of your net income for taxes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Keep Good Records</h3>
                <p className="text-gray-700">
                  Document all draws with dates, amounts, and purposes. Use accounting software to track everything.
                </p>
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
              How Start With Genie Helps You Set Up Proper Payment Systems
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  We provide guidance on setting up proper business banking and payment systems for your LLC.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Tax Guidance</h3>
                <p className="text-gray-700">
                  Our resources help you understand tax implications and set up proper payment structures.
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
              Ready to Form Your LLC and Set Up Proper Payment Systems?
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
                  Best Accounting Tools
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