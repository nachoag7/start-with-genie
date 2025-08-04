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

export default function ForgotToGetEINPage() {
  return (
    <SeoPageLayout>
      <div id="forgot-to-get-ein">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Forgot to Get an EIN for Your LLC? Start Here.
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Don't worry if you forgot to get an EIN when forming your LLC. It's a common oversight, and it's easy to fix. Here's what you need to do.
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

        {/* What is an EIN and Why You Need It */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What is an EIN and Why You Need It
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  What is an EIN?
                </h3>
                <p className="text-gray-700 mb-4">
                  An Employer Identification Number (EIN) is a nine-digit number issued by the IRS that serves as your business's tax ID. Think of it as a Social Security Number for your business.
                </p>
                <p className="text-gray-700">
                  It's free to get and takes just a few minutes to apply online. You'll receive your EIN immediately upon completion.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-green-600" />
                  Why Your LLC Needs an EIN
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Open business bank accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Apply for business credit cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>File business tax returns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protect your personal SSN</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Get an EIN Now */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Get an EIN for Your Existing LLC
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Gather Required Information</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Before applying, make sure you have all the necessary information ready. This will make the process much faster.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What You'll Need:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Your LLC's legal name (exactly as filed)</li>
                    <li>• Your LLC's business address</li>
                    <li>• Your personal SSN (for the responsible party)</li>
                    <li>• Your LLC's formation date</li>
                    <li>• Your LLC's state of formation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Apply Online (Recommended)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The fastest and easiest way to get an EIN is through the IRS website. You'll receive your EIN immediately upon completion.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Online Application Steps:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Go to IRS.gov/EIN</li>
                      <li>• Click "Apply Online Now"</li>
                      <li>• Complete the application form</li>
                      <li>• Receive EIN immediately</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Alternative Methods:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fax application (4-6 weeks)</li>
                      <li>• Mail application (4-6 weeks)</li>
                      <li>• Phone application (limited hours)</li>
                      <li>• Third-party service</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Update Your Business Records</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Once you have your EIN, update all your business records and start using it for all business transactions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Immediate Actions:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Open business bank account</li>
                      <li>• Apply for business credit cards</li>
                      <li>• Update vendor accounts</li>
                      <li>• File for business licenses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Documentation:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Save EIN confirmation letter</li>
                      <li>• Update operating agreement</li>
                      <li>• Update business contracts</li>
                      <li>• Notify your accountant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Common Issues and Solutions */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Common Issues and Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Application Rejected
                </h3>
                <p className="text-gray-700 mb-4">
                  If your EIN application gets rejected, it's usually due to incorrect information or a duplicate application.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Double-check all information</li>
                  <li>• Ensure LLC name matches exactly</li>
                  <li>• Wait 24 hours before reapplying</li>
                  <li>• Contact IRS if issues persist</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Already Using SSN
                </h3>
                <p className="text-gray-700 mb-4">
                  If you've been using your SSN for business transactions, you can still get an EIN and transition to using it.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Get EIN immediately</li>
                  <li>• Update all business accounts</li>
                  <li>• Notify vendors and clients</li>
                  <li>• Update tax filings going forward</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tax Implications */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Tax Implications of Getting an EIN Late
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Calculator className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Tax Filing</h3>
                <p className="text-gray-700">
                  You can still file your taxes properly even if you got your EIN late. The IRS will accept your return with either number.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Business Deductions</h3>
                <p className="text-gray-700">
                  All legitimate business expenses can still be deducted, regardless of when you got your EIN. Keep good records.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Future Filings</h3>
                <p className="text-gray-700">
                  Once you have your EIN, use it for all future tax filings and business transactions. This is the proper way forward.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Timeline and Next Steps */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Timeline and Next Steps
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  Immediate Actions (Today)
                </h3>
                <p className="text-gray-700 mb-4">
                  Don't wait to get your EIN. The sooner you get it, the sooner you can start building proper business credit and structure.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Today:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Apply for EIN online</li>
                      <li>• Save confirmation letter</li>
                      <li>• Update business records</li>
                      <li>• Plan bank account opening</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">This Week:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Open business bank account</li>
                      <li>• Apply for business credit cards</li>
                      <li>• Update vendor accounts</li>
                      <li>• Notify clients and partners</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Long-term Benefits
                </h3>
                <p className="text-gray-700 mb-4">
                  Getting your EIN opens up many opportunities for your business growth and protection.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Business Growth:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Build business credit</li>
                      <li>• Access business financing</li>
                      <li>• Professional vendor relationships</li>
                      <li>• Better tax structure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Protection:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Protect personal SSN</li>
                      <li>• Separate business identity</li>
                      <li>• Professional appearance</li>
                      <li>• Better liability protection</li>
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
              How Start With Genie Helps You Get Everything Right
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  We provide EIN application guidance and ensure you get everything set up correctly from the start.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Step-by-Step Guidance</h3>
                <p className="text-gray-700">
                  Our detailed instructions help you avoid common mistakes and set up your LLC properly from day one.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Flat $49 Rate</h3>
                <p className="text-gray-700">
                  No hidden fees or upsells. Just $49 for everything you need to form your LLC correctly.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Ready to form your LLC the right way? Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> shows you exactly what to do.
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
              Ready to Get Your EIN and Form Your LLC?
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
              <Link href="/what-to-do-after-llc-is-approved">
                <Button variant="outline" className="text-lg px-8 py-3">
                  What to Do After LLC Approval
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