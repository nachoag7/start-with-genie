"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, ShoppingCart, Building, AlertTriangle, Calculator, FileText, CreditCard, TrendingUp } from "lucide-react";
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

export default function LLCForShopifyStoresPage() {
  return (
    <SeoPageLayout>
      <div id="llc-for-shopify-stores">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Do You Need an LLC to Run a Shopify Store?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Shopify store owners face unique legal considerations. Here's when an LLC makes sense for your e-commerce business.
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

        {/* Shopify Store Considerations */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Shopify Stores Need Extra Protection
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-blue-600" />
                  E-commerce Liability Risks
                </h3>
                <p className="text-gray-700 mb-4">
                  Shopify stores face unique risks that brick-and-mortar businesses don't. Product liability, shipping issues, customer disputes, and data breaches can all lead to lawsuits.
                </p>
                <p className="text-gray-700">
                  An LLC separates your personal assets from your business, protecting your home, savings, and other personal property if your store faces legal trouble.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-green-600" />
                  When an LLC is Essential
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You're selling physical products (especially food, supplements, or electronics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Your store processes customer data or payment information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You're earning $30,000+ annually from your store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You have significant personal assets to protect</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefits for Shopify Stores */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Benefits of an LLC for Shopify Store Owners
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Product Liability Protection</h3>
                <p className="text-gray-700">
                  If a customer gets injured by your product or sues for damages, an LLC protects your personal assets. This is especially important for stores selling food, supplements, or electronics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Tax Advantages</h3>
                <p className="text-gray-700">
                  LLCs offer better tax treatment for e-commerce businesses. You can deduct more expenses, potentially save on self-employment taxes, and have more flexibility in how you're taxed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CreditCard className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Business Credit</h3>
                <p className="text-gray-700">
                  An LLC helps you build business credit separate from your personal credit. This can be valuable for business loans, credit cards, and financing inventory or equipment.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* When You Can Wait */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Can Wait to Form an LLC
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Just Starting Out
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're testing the market with a few products and earning less than $20,000 annually, you can start as a sole proprietor. Focus on validating your business model first.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Keep startup costs low</li>
                  <li>• Test product-market fit</li>
                  <li>• Learn the e-commerce ropes</li>
                  <li>• Build your customer base</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Low-Risk Products
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're selling digital products, printables, or low-risk physical items (like stickers or simple crafts), the liability risk is much lower.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Digital downloads</li>
                  <li>• Printables and templates</li>
                  <li>• Simple crafts and accessories</li>
                  <li>• Low-value physical items</li>
                </ul>
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
              Tax Considerations for Shopify Store Owners
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Sole Proprietorship Taxes
                </h3>
                <p className="text-gray-700 mb-4">
                  As a sole proprietor, you'll pay self-employment taxes on your Shopify income. You can deduct business expenses, but the process is straightforward.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• File Schedule C with your personal tax return</li>
                  <li>• Pay quarterly estimated taxes</li>
                  <li>• Deduct Shopify fees, inventory, shipping, etc.</li>
                  <li>• Simpler record-keeping initially</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  LLC Tax Benefits
                </h3>
                <p className="text-gray-700 mb-4">
                  LLCs offer more tax flexibility for e-commerce businesses. You can choose pass-through taxation or elect to be taxed as an S-Corp for potential savings.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• More business expense deductions</li>
                  <li>• Better separation of business and personal finances</li>
                  <li>• Potential S-Corp election for savings</li>
                  <li>• More professional tax structure</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Inventory and Business Credit */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Inventory Financing and Business Credit
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Why Business Credit Matters for Shopify Stores
                </h3>
                <p className="text-gray-700 mb-4">
                  As your Shopify store grows, you'll need financing for inventory, equipment, and expansion. An LLC helps you build business credit separate from your personal credit.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Business Credit Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Higher credit limits for inventory purchases</li>
                      <li>• Better terms on business loans</li>
                      <li>• Separate from personal credit score</li>
                      <li>• More financing options as you scale</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">When You'll Need It:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Scaling inventory for seasonal spikes</li>
                      <li>• Purchasing equipment or software</li>
                      <li>• Expanding to new product lines</li>
                      <li>• Hiring employees or contractors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Decide */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Decide If Your Shopify Store Needs an LLC
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Ask Yourself These Questions:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Product & Liability Risk</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Are you selling physical products?</li>
                      <li>• Do your products have safety concerns?</li>
                      <li>• Are you selling food, supplements, or electronics?</li>
                      <li>• Do you process customer data?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Business Growth</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Are you earning $30,000+ annually?</li>
                      <li>• Do you plan to scale significantly?</li>
                      <li>• Will you need inventory financing?</li>
                      <li>• Do you have significant personal assets?</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  If you answered "yes" to most of these questions, an LLC is likely worth the investment. Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> can help you get started.
                </p>
              </div>
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
              Ready to Protect Your Shopify Store?
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
              <Link href="/llc-for-onlyfans-creators">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Learn About Creator LLCs
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