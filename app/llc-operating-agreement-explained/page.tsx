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

export default function LLCOperatingAgreementExplainedPage() {
  return (
    <SeoPageLayout>
      <div id="llc-operating-agreement-explained">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            What Is an LLC Operating Agreement (and Do You Need One)?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            An operating agreement is the foundation of your LLC. Learn what it is, why you need it, and how it protects your business and personal assets.
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

        {/* What is an Operating Agreement */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What Is an LLC Operating Agreement?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Definition
                </h3>
                <p className="text-gray-700 mb-4">
                  An operating agreement is a legal document that outlines how your LLC will be managed, operated, and governed. Think of it as your LLC's rulebook.
                </p>
                <p className="text-gray-700">
                  While not always required by state law, it's essential for protecting your limited liability and establishing clear business procedures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Why You Need It
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protects your limited liability status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Establishes clear ownership structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Defines profit and loss distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Provides dispute resolution process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Sections of an Operating Agreement */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Key Sections of an Operating Agreement
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Member Information
                </h3>
                <p className="text-gray-700 mb-4">
                  Details about who owns the LLC and their ownership percentages. This is crucial for tax purposes and legal protection.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What to Include:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Names and addresses of all members</li>
                    <li>• Ownership percentages</li>
                    <li>• Initial capital contributions</li>
                    <li>• Member roles and responsibilities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-green-600" />
                  Management Structure
                </h3>
                <p className="text-gray-700 mb-4">
                  Defines how decisions are made and who has authority to act on behalf of the LLC. This prevents confusion and disputes.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Management Types:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Member-managed (all members participate)</li>
                      <li>• Manager-managed (appointed manager)</li>
                      <li>• Voting rights and procedures</li>
                      <li>• Decision-making thresholds</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Decisions:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Major business decisions</li>
                      <li>• Financial commitments</li>
                      <li>• Adding new members</li>
                      <li>• Dissolution procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  Financial Provisions
                </h3>
                <p className="text-gray-700 mb-4">
                  Outlines how money flows through your LLC, including profit distribution, capital calls, and financial record keeping.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Profit/Loss Distribution:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• How profits are divided</li>
                      <li>• Loss allocation methods</li>
                      <li>• Distribution timing</li>
                      <li>• Tax considerations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Financial Management:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Banking and accounting</li>
                      <li>• Capital contribution requirements</li>
                      <li>• Financial reporting</li>
                      <li>• Audit procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-orange-600" />
                  Transfer and Dissolution
                </h3>
                <p className="text-gray-700 mb-4">
                  Defines what happens when members want to leave, sell their interest, or when the LLC needs to be dissolved.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Transfer Provisions:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Right of first refusal</li>
                      <li>• Valuation methods</li>
                      <li>• Approval requirements</li>
                      <li>• Buyout procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dissolution Process:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Triggering events</li>
                      <li>• Asset distribution</li>
                      <li>• Debt settlement</li>
                      <li>• Final tax filings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Do You Need an Operating Agreement */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Do You Need an Operating Agreement?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Yes, You Need One If:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You want to protect your limited liability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You have multiple members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You want clear business procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You plan to add partners later</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You want to avoid state default rules</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  You Don't Need One If:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>You're okay with state default rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>You don't mind potential disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>You're okay with unclear procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>You don't plan to add partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>You're comfortable with legal risks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefits of Having an Operating Agreement */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Benefits of Having an Operating Agreement
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Legal Protection</h3>
                <p className="text-gray-700">
                  Courts are more likely to respect your limited liability if you have a proper operating agreement in place.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <User className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Clear Procedures</h3>
                <p className="text-gray-700">
                  Establishes clear rules for decision-making, profit distribution, and dispute resolution.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Financial Clarity</h3>
                <p className="text-gray-700">
                  Defines how money flows through your business and prevents financial disputes.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Create an Operating Agreement */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Create an Operating Agreement
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Option 1: Use a Professional Service
                </h3>
                <p className="text-gray-700 mb-4">
                  Services like Start With Genie provide comprehensive operating agreements tailored to your specific needs and state requirements.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• State-specific compliance</li>
                    <li>• Professional legal language</li>
                    <li>• Comprehensive coverage</li>
                    <li>• Ongoing support</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Option 2: DIY Templates
                </h3>
                <p className="text-gray-700 mb-4">
                  You can find templates online, but be careful. Generic templates may not address your specific needs or state requirements.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Risks:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• May not be state-specific</li>
                    <li>• Could miss important provisions</li>
                    <li>• Legal language may be unclear</li>
                    <li>• No professional review</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-600" />
                  Option 3: Attorney Drafted
                </h3>
                <p className="text-gray-700 mb-4">
                  For complex situations or multiple members, consider having an attorney draft your operating agreement.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">When to Use:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Multiple members</li>
                      <li>• Complex ownership structure</li>
                      <li>• Significant assets</li>
                      <li>• Unique business needs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cost Considerations:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Attorney fees: $500-$2,000</li>
                      <li>• Ongoing legal support</li>
                      <li>• Custom provisions</li>
                      <li>• Professional review</li>
                    </ul>
                  </div>
                </div>
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
              How Start With Genie Helps You Get the Right Operating Agreement
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Comprehensive Agreement</h3>
                <p className="text-gray-700">
                  We provide a complete operating agreement that covers all essential provisions for your LLC.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Legal Protection</h3>
                <p className="text-gray-700">
                  Our agreement helps protect your limited liability and establishes clear business procedures.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Included in $49</h3>
                <p className="text-gray-700">
                  The operating agreement is included in our flat $49 rate, with no additional fees or upsells.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Ready to form your LLC with a proper operating agreement? Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> shows you exactly what to do.
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
              Ready to Form Your LLC with a Proper Operating Agreement?
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
              <Link href="/how-to-pay-yourself-from-llc">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Learn About Paying Yourself
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