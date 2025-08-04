"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap } from "lucide-react";
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

export default function LLCForOnlineCoursesPage() {
  return (
    <SeoPageLayout>
      <div id="llc-for-online-courses">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            LLC for Online Courses: Complete Setup Guide
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Learn how to set up an LLC for your online course business. Protect your assets, optimize taxes, and build a professional brand for your educational content.
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

        {/* Why Online Course Creators Need LLCs */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Online Course Creators Need LLCs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Liability Protection
                </h3>
                <p className="text-gray-700 mb-4">
                  Online course creators face unique risks that make LLC protection essential.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protect against refund disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Shield from copyright claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protect against platform issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Separate business and personal assets</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-green-600" />
                  Tax Benefits
                </h3>
                <p className="text-gray-700 mb-4">
                  Online course businesses can benefit from LLC tax advantages and deductions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Deduct course creation costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Write off equipment and software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Pass-through taxation benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Home office deductions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Types of Online Course Businesses */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Types of Online Course Businesses That Benefit from LLCs
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Skill-Based Courses</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Teaching practical skills like coding, design, marketing, or business strategies.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Programming tutorials</li>
                      <li>• Graphic design courses</li>
                      <li>• Digital marketing training</li>
                      <li>• Business strategy workshops</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">LLC Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Professional credibility</li>
                      <li>• Asset protection</li>
                      <li>• Tax advantages</li>
                      <li>• Brand building</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Certification Programs</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Offering professional certifications or continuing education credits.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Professional certifications</li>
                      <li>• Continuing education</li>
                      <li>• Industry-specific training</li>
                      <li>• Compliance courses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">LLC Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Regulatory compliance</li>
                      <li>• Professional image</li>
                      <li>• Liability protection</li>
                      <li>• Partnership opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Membership Sites</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Creating ongoing educational communities with recurring revenue.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Monthly membership programs</li>
                      <li>• Exclusive content communities</li>
                      <li>• Coaching programs</li>
                      <li>• Mastermind groups</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">LLC Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Recurring revenue protection</li>
                      <li>• Community management</li>
                      <li>• Subscription handling</li>
                      <li>• Professional structure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Setting Up LLC for Online Courses */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Setting Up Your LLC for Online Courses
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Choose the Right Business Name
                </h3>
                <p className="text-gray-700 mb-4">
                  Your business name should reflect your educational focus and be memorable for students.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Check domain name availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Search trademark database</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consider your target audience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Keep it professional and educational</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Include Education-Specific Provisions
                </h3>
                <p className="text-gray-700 mb-4">
                  Your operating agreement should address the unique aspects of online education businesses.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Provisions:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Refund and cancellation policies</li>
                      <li>• Intellectual property ownership</li>
                      <li>• Student privacy protection</li>
                      <li>• Content licensing terms</li>
                      <li>• Platform partnership agreements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Consider:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Educational compliance</li>
                      <li>• Student support policies</li>
                      <li>• Content update procedures</li>
                      <li>• Certification requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tax Considerations */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Tax Considerations for Online Course LLCs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Deductible Expenses</h3>
                <p className="text-gray-700">
                  Online course businesses can deduct equipment, software, and content creation costs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Calculator className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Home Office Deduction</h3>
                <p className="text-gray-700">
                  If you create courses from home, you can deduct a portion of your housing costs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <TrendingUp className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Pass-Through Taxation</h3>
                <p className="text-gray-700">
                  LLC profits pass through to your personal tax return, avoiding double taxation.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Common Challenges */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Common Challenges for Online Course Businesses
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Legal Challenges
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Refund and chargeback disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Copyright infringement claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Platform policy changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Student privacy regulations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Business Challenges
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>High customer acquisition costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Content creation and updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Platform dependency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Student support demands</span>
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
              Best Practices for Online Course LLCs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Quality Content</h3>
                <p className="text-gray-700">
                  Create high-quality, valuable content that reduces refund requests and builds reputation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Clear Policies</h3>
                <p className="text-gray-700">
                  Establish clear refund, privacy, and usage policies to protect your business.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Download className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
                <p className="text-gray-700">
                  Provide excellent student support to reduce disputes and build loyalty.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Need help setting up your online course LLC? Our <Link href="/how-to-start-an-llc" className="text-blue-600 hover:underline">step-by-step guide</Link> shows you exactly what to do.
              </p>
            </div>
          </div>
        </motion.section>

        {/* How Genie Helps */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How Start With Genie Helps Online Course Creators
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  We provide guidance on setting up LLCs specifically for online course businesses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Legal Protection</h3>
                <p className="text-gray-700">
                  Our resources help you understand the legal implications of online education.
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
                Ready to form your online course LLC? Our <Link href="/llc-for-ebook-sales" className="text-blue-600 hover:underline">ebook sales guide</Link> helps you understand the options.
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
              Ready to Form Your Online Course LLC?
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
              <Link href="/llc-for-ebook-sales">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Ebook Sales Guide
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