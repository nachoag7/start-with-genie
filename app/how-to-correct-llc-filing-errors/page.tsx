"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, Wrench } from "lucide-react";
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

export default function HowToCorrectLLCFilingErrorsPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-correct-llc-filing-errors">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            How to Fix Mistakes in Your LLC Filing
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Made a mistake in your LLC filing? Don't panic. Here's how to fix common errors and get your LLC back on track.
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

        {/* Common Filing Errors */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Common LLC Filing Errors and How to Fix Them
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Wrong Business Name</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  One of the most common mistakes is filing with a business name that's already taken or doesn't meet state requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      The Problem
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Name already exists in your state</li>
                      <li>• Name doesn't include "LLC" or "Limited Liability Company"</li>
                      <li>• Name contains restricted words</li>
                      <li>• Filing gets rejected</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      The Solution
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Check name availability first</li>
                      <li>• File Articles of Correction</li>
                      <li>• Or file new Articles of Organization</li>
                      <li>• Update all business documents</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Incorrect Registered Agent Information</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Many people list themselves as registered agent but use the wrong address or contact information.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Common Mistakes
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Using P.O. Box address</li>
                      <li>• Wrong phone number</li>
                      <li>• Outdated email address</li>
                      <li>• Agent not available during business hours</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      How to Fix
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• File Statement of Change</li>
                      <li>• Update with physical address</li>
                      <li>• Ensure agent is available</li>
                      <li>• Consider professional service</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Wrong Business Purpose</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Some states require specific business purpose descriptions, and vague or incorrect descriptions can cause issues.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Problem Examples
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• "Any lawful business" (too vague)</li>
                      <li>• Purpose doesn't match actual business</li>
                      <li>• Missing required language</li>
                      <li>• Inappropriate business activities</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Correct Approach
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Be specific about your business</li>
                      <li>• Use industry-appropriate language</li>
                      <li>• File Articles of Correction</li>
                      <li>• Update operating agreement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Fix Different Types of Errors */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Fix Different Types of Filing Errors
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  Minor Errors (Easy to Fix)
                </h3>
                <p className="text-gray-700 mb-4">
                  Small mistakes like typos or minor address changes can usually be fixed with a simple correction filing.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>File Articles of Correction with your state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Pay small filing fee (usually $10-$50)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Update your operating agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Notify banks and other institutions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Major Errors (More Complex)
                </h3>
                <p className="text-gray-700 mb-4">
                  Serious errors like wrong business name or purpose may require more extensive correction procedures.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>File new Articles of Organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Dissolve old LLC and form new one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Transfer all assets and contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Update all business relationships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Step-by-Step Correction Process */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Step-by-Step Process to Fix Filing Errors
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Identify the Error</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  First, determine exactly what's wrong with your filing. Check your Articles of Organization against state requirements.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What to Check:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Business name compliance</li>
                    <li>• Registered agent information</li>
                    <li>• Business purpose description</li>
                    <li>• Member/manager information</li>
                    <li>• Filing date and signatures</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Choose the Right Correction Method</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Different errors require different correction methods. Some can be fixed with a simple filing, others require more extensive procedures.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Articles of Correction:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Minor typos and errors</li>
                      <li>• Address changes</li>
                      <li>• Contact information updates</li>
                      <li>• Small administrative errors</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">New Filing Required:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Major name changes</li>
                      <li>• Business purpose changes</li>
                      <li>• Structural changes</li>
                      <li>• Multiple significant errors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">File the Correction</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Submit the appropriate correction form to your state's business filing office. Most states have online filing systems.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Required Information:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• LLC name and file number</li>
                      <li>• Description of the error</li>
                      <li>• Corrected information</li>
                      <li>• Filing fee payment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Filing Options:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Online filing (fastest)</li>
                      <li>• Mail-in forms</li>
                      <li>• In-person filing</li>
                      <li>• Professional service</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                  <h3 className="text-xl font-semibold">Update Your Business Records</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  After the correction is approved, update all your business documents and notify relevant parties of the changes.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Documents to Update:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Operating agreement</li>
                      <li>• Business bank accounts</li>
                      <li>• Insurance policies</li>
                      <li>• Contracts and agreements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Parties to Notify:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Banks and financial institutions</li>
                      <li>• Clients and vendors</li>
                      <li>• Insurance companies</li>
                      <li>• Tax authorities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Prevention Tips */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Prevent Filing Errors in the First Place
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Do Your Research</h3>
                <p className="text-gray-700">
                  Check your state's specific requirements before filing. Each state has different rules for LLC formation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Use Professional Services</h3>
                <p className="text-gray-700">
                  Consider using a professional service like Start With Genie to ensure proper filing and avoid common mistakes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <User className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Double-Check Everything</h3>
                <p className="text-gray-700">
                  Review all information carefully before submitting. Small typos can cause big problems later.
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
              How Start With Genie Helps You Avoid Filing Errors
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Expert Guidance</h3>
                <p className="text-gray-700">
                  Our step-by-step process helps you avoid common filing mistakes and ensures proper LLC formation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  We provide everything you need, including EIN application guidance and comprehensive operating agreement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Flat $49 Rate</h3>
                <p className="text-gray-700">
                  No hidden fees or upsells. Just $49 for everything you need to form your LLC correctly the first time.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Ready to form your LLC correctly? Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> shows you exactly what to do.
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
              Ready to Form Your LLC Correctly?
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