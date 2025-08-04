"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, FileText, Building, User, CreditCard, Shield, Calculator, MapPin, Clock, CheckSquare, DollarSign } from "lucide-react";
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

export default function FreelancerLLCSetupGuidePage() {
  return (
    <SeoPageLayout>
      <div id="freelancer-llc-setup-guide">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            How to Start an LLC as a Freelancer in 2025
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            A simple step-by-step guide for freelancers to start an LLC, from choosing a name to filing and getting your EIN.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Skip the guesswork. Set up your LLC with step-by-step help →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* What You Need Section */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What You Need Before You File
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-green-600" />
                  Essential Information
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Your full legal name and address</li>
                  <li>• Business name (with 2-3 backup options)</li>
                  <li>• Business purpose/description</li>
                  <li>• State where you'll form the LLC</li>
                  <li>• Payment method for filing fees</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Time Investment
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Research and name selection: 1-2 hours</li>
                  <li>• Filing Articles of Organization: 15 minutes</li>
                  <li>• Getting EIN: 5 minutes</li>
                  <li>• Setting up business bank account: 1-2 hours</li>
                  <li>• Creating operating agreement: 30 minutes</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Step-by-Step Section */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Step-by-Step: Pick State, Register Name, File Articles
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Choose Your State</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  For most freelancers, form your LLC in the state where you live and work. This avoids the complexity and cost of foreign LLC registration.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Pro Tip
                  </h4>
                  <p className="text-sm text-gray-700">
                    Only consider forming in Delaware or Nevada if you have specific tax or legal reasons. For freelancers, your home state is almost always the best choice.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Check Name Availability</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Search your state's business name database to ensure your chosen name is available. Most states require "LLC" or "Limited Liability Company" in the name.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Check for exact matches and similar names</li>
                  <li>• Avoid names that could be confused with existing businesses</li>
                  <li>• Have 2-3 backup options ready</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">File Articles of Organization</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  This is the official document that creates your LLC. You'll need to provide basic information about your business and pay the filing fee.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Required Information:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• LLC name and address</li>
                      <li>• Member names and addresses</li>
                      <li>• Registered agent information</li>
                      <li>• Business purpose</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Filing Fees:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Most states: $100-200</li>
                      <li>• California: $70</li>
                      <li>• Texas: $300</li>
                      <li>• New York: $200</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* EIN and Bank Account Section */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Get Your EIN and Set Up Business Bank Account
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  Employer Identification Number (EIN)
                </h3>
                <p className="text-gray-700 mb-4">
                  Your EIN is like a Social Security number for your business. It's required for opening a business bank account and filing taxes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Free to obtain from IRS.gov</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Takes about 5 minutes online</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Available immediately</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  Business Bank Account
                </h3>
                <p className="text-gray-700 mb-4">
                  Separate your business and personal finances. This is crucial for maintaining liability protection and simplifying accounting.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Bring your EIN and LLC documents</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Consider online banks for lower fees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Set up business credit card</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Operating Agreement Section */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Operating Agreement and Tax Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  Operating Agreement
                </h3>
                <p className="text-gray-700 mb-4">
                  While not legally required in most states, an operating agreement is highly recommended. It helps maintain liability protection and provides clarity on business structure.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Defines ownership percentages</li>
                  <li>• Outlines management structure</li>
                  <li>• Establishes voting procedures</li>
                  <li>• Protects liability protection</li>
                  <li>• Required for some banks and investors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-green-600" />
                  Tax Considerations
                </h3>
                <p className="text-gray-700 mb-4">
                  LLCs offer tax flexibility. By default, single-member LLCs are taxed as sole proprietorships, but you can elect different tax treatment.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pass-through taxation (default)</li>
                  <li>• Potential S-Corp election for savings</li>
                  <li>• Business expense deductions</li>
                  <li>• Quarterly estimated tax payments</li>
                  <li>• Separate business and personal expenses</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How Genie Simplifies Section */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How Start With Genie Simplifies the Entire Process
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Step-by-Step Guidance</h3>
                <p className="text-gray-700">
                  We walk you through every step with clear instructions, checklists, and state-specific requirements. No guesswork, no confusion.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">All Documents Included</h3>
                <p className="text-gray-700">
                  Get your operating agreement, EIN application guide, and all necessary forms. Everything you need in one place.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Flat $49 Rate</h3>
                <p className="text-gray-700">
                  No hidden fees, no upsells, no surprise charges. Just $49 for everything you need to form your LLC properly.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                See our <Link href="/freelancer-llc-cost-2025" className="text-blue-600 hover:underline">detailed cost breakdown</Link> to understand how we compare to LegalZoom and other services.
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
              Ready to Start Your Freelancer LLC?
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
              <Link href="/freelancer-llc-need">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Learn More About LLCs
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