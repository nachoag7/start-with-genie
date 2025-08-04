"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book } from "lucide-react";
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

export default function LLCForEbookSalesPage() {
  return (
    <SeoPageLayout>
      <div id="llc-for-ebook-sales">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            LLC for Ebook Sales: Complete Setup Guide
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Learn how to set up an LLC for your ebook business. Protect your intellectual property, optimize taxes, and build a professional brand for your digital publishing.
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

        {/* Why Ebook Authors Need LLCs */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Ebook Authors Need LLCs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Liability Protection
                </h3>
                <p className="text-gray-700 mb-4">
                  Ebook authors face unique risks that make LLC protection essential.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protect against copyright claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Shield from defamation lawsuits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protect against refund disputes</span>
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
                  Ebook businesses can benefit from LLC tax advantages and deductions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Deduct writing and publishing costs</span>
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

        {/* Types of Ebook Businesses */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Types of Ebook Businesses That Benefit from LLCs
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Fiction Authors</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Novelists and fiction writers selling their creative works online.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Romance novels</li>
                      <li>• Science fiction</li>
                      <li>• Mystery and thriller</li>
                      <li>• Fantasy and adventure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">LLC Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Copyright protection</li>
                      <li>• Professional image</li>
                      <li>• Tax advantages</li>
                      <li>• Brand building</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Non-Fiction Authors</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Writers creating educational, how-to, or informational content.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Self-help books</li>
                      <li>• Business guides</li>
                      <li>• Cookbooks and recipes</li>
                      <li>• Technical manuals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">LLC Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Liability protection</li>
                      <li>• Professional credibility</li>
                      <li>• Tax deductions</li>
                      <li>• Partnership opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Publishing Companies</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Businesses that publish multiple authors or create series of books.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Multi-author publishing</li>
                      <li>• Book series creation</li>
                      <li>• Anthology publishing</li>
                      <li>• Niche market publishing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">LLC Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Multiple author management</li>
                      <li>• Revenue distribution</li>
                      <li>• Professional structure</li>
                      <li>• Scalable business model</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Setting Up LLC for Ebook Sales */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Setting Up Your LLC for Ebook Sales
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Choose the Right Business Name
                </h3>
                <p className="text-gray-700 mb-4">
                  Your business name should reflect your publishing focus and be memorable for readers.
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
                    <span>Keep it professional and literary</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Include Publishing-Specific Provisions
                </h3>
                <p className="text-gray-700 mb-4">
                  Your operating agreement should address the unique aspects of ebook publishing businesses.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Provisions:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Copyright ownership</li>
                      <li>• Royalty distribution</li>
                      <li>• Refund and return policies</li>
                      <li>• Content licensing terms</li>
                      <li>• Platform partnership agreements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Consider:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Multi-author arrangements</li>
                      <li>• International publishing rights</li>
                      <li>• Content update procedures</li>
                      <li>• Translation rights</li>
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
              Tax Considerations for Ebook LLCs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Deductible Expenses</h3>
                <p className="text-gray-700">
                  Ebook businesses can deduct writing, editing, and publishing costs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Calculator className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Home Office Deduction</h3>
                <p className="text-gray-700">
                  If you write from home, you can deduct a portion of your housing costs.
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
              Common Challenges for Ebook Businesses
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
                    <span>Copyright infringement claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Defamation lawsuits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Platform policy changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>International publishing rights</span>
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
                    <span>High competition in publishing</span>
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
                    <span>Marketing and promotion costs</span>
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
              Best Practices for Ebook LLCs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Book className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Quality Content</h3>
                <p className="text-gray-700">
                  Create high-quality, valuable content that builds reputation and reduces legal issues.
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
                  Provide excellent reader support to reduce disputes and build loyalty.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Need help setting up your ebook LLC? Our <Link href="/how-to-start-an-llc" className="text-blue-600 hover:underline">step-by-step guide</Link> shows you exactly what to do.
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
              How Start With Genie Helps Ebook Authors
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  We provide guidance on setting up LLCs specifically for ebook publishing businesses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Legal Protection</h3>
                <p className="text-gray-700">
                  Our resources help you understand the legal implications of ebook publishing.
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
                Ready to form your ebook LLC? Our <Link href="/llc-for-online-courses" className="text-blue-600 hover:underline">online course guide</Link> helps you understand the options.
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
              Ready to Form Your Ebook LLC?
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
              <Link href="/llc-for-online-courses">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Online Course Guide
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