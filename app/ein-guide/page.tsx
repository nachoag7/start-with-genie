"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit } from "lucide-react";
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

export default function EINGuidePage() {
  return (
    <SeoPageLayout>
      <div id="ein-guide">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Free EIN Guide: Get Your Business Tax ID in Minutes
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Learn how to get your EIN (Employer Identification Number) for free from the IRS. Step-by-step instructions for LLC owners and small businesses.
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

        {/* What is an EIN */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What is an EIN (Employer Identification Number)?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileDigit className="w-5 h-5 text-blue-600" />
                  Business Tax ID
                </h3>
                <p className="text-gray-700 mb-4">
                  An EIN is a unique 9-digit number assigned by the IRS to identify your business for tax purposes. Think of it as a Social Security Number for your business.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Required for most LLCs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Free to obtain from the IRS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Used for business bank accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Required for hiring employees</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-green-600" />
                  When You Need One
                </h3>
                <p className="text-gray-700 mb-4">
                  Most LLCs need an EIN, especially if you plan to open a business bank account or hire employees.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Opening a business bank account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Hiring employees or contractors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Filing business tax returns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Applying for business credit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Get EIN */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Get Your EIN for Free
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Gather Required Information</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Before applying, make sure you have all the necessary information ready.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Business Information:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Legal business name</li>
                      <li>• Business address</li>
                      <li>• Type of business entity</li>
                      <li>• Date business started</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personal Information:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Your Social Security Number</li>
                      <li>• Your name and address</li>
                      <li>• Your phone number</li>
                      <li>• Email address</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Apply Online (Recommended)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The fastest and easiest way to get your EIN is through the IRS website.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Steps:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Go to IRS.gov/EIN</li>
                      <li>• Click "Apply Online Now"</li>
                      <li>• Complete the application</li>
                      <li>• Receive EIN immediately</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Instant EIN number</li>
                      <li>• No waiting time</li>
                      <li>• Free service</li>
                      <li>• Available 24/7</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Alternative Methods</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  If you can't apply online, there are other options available.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">By Phone:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Call (800) 829-4933</li>
                      <li>• Available 6am-11pm ET</li>
                      <li>• Monday through Friday</li>
                      <li>• Receive EIN immediately</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">By Mail/Fax:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Download Form SS-4</li>
                      <li>• Fill out completely</li>
                      <li>• Mail or fax to IRS</li>
                      <li>• Wait 4-6 weeks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Common Mistakes */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Common EIN Application Mistakes to Avoid
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Using Personal SSN for Business
                </h3>
                <p className="text-gray-700 mb-4">
                  Never use your personal Social Security Number for business transactions once you have an EIN.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">What NOT to do:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Use SSN on business checks</li>
                      <li>• Give SSN to vendors</li>
                      <li>• Use SSN for business credit</li>
                      <li>• Mix personal and business taxes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What to do instead:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Use EIN for all business transactions</li>
                      <li>• Keep SSN private</li>
                      <li>• Use EIN for business credit</li>
                      <li>• Separate personal and business finances</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Not Getting EIN Early Enough
                </h3>
                <p className="text-gray-700 mb-4">
                  Get your EIN as soon as you form your LLC to avoid delays in opening bank accounts or hiring employees.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Apply for EIN immediately after LLC formation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use EIN for business bank account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Provide EIN to vendors and clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use EIN for all business tax filings</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Waiting Too Long to Apply
                </h3>
                <p className="text-gray-700 mb-4">
                  You can apply for an EIN as soon as you have your LLC formation documents. Don't wait until you need it.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Apply immediately if:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• You have LLC formation documents</li>
                      <li>• You plan to open a business account</li>
                      <li>• You want to hire employees</li>
                      <li>• You need business credit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Don't wait if:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• You need to open bank account</li>
                      <li>• You want to hire contractors</li>
                      <li>• You need business credit cards</li>
                      <li>• You're filing business taxes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What to Do After Getting EIN */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What to Do After Getting Your EIN
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Open Business Bank Account</h3>
                <p className="text-gray-700">
                  Use your EIN to open a dedicated business checking account. This helps maintain liability protection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CreditCard className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Apply for Business Credit</h3>
                <p className="text-gray-700">
                  Use your EIN to establish business credit separate from your personal credit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Calculator className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">File Business Taxes</h3>
                <p className="text-gray-700">
                  Use your EIN for all business tax filings, including quarterly estimated taxes.
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
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How Start With Genie Helps You Get Your EIN
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Step-by-Step Guidance</h3>
                <p className="text-gray-700">
                  We provide detailed instructions for getting your EIN, including exactly what information you need.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  Our LLC formation process includes guidance on getting your EIN and setting up proper business banking.
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
                Ready to form your LLC? Our <Link href="/forgot-to-get-ein" className="text-blue-600 hover:underline">EIN recovery guide</Link> helps if you forgot to get one.
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
              Ready to Form Your LLC and Get Your EIN?
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
              <Link href="/forgot-to-get-ein">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Forgot to Get EIN?
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