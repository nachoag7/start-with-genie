"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, FileText, User, Building, AlertTriangle, Calculator } from "lucide-react";
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

export default function FreelancerLLCNeedPage() {
  return (
    <SeoPageLayout>
      <div id="freelancer-llc-need">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Do You Need an LLC as a Freelancer in 2025?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            The truth about liability protection, tax benefits, and when it's worth the investment for independent contractors.
          </motion.p>

        </section>

        {/* What is an LLC Section */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What is an LLC and How Does It Apply to Freelancers?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-gray-600" />
                  Limited Liability Company
                </h3>
                <p className="text-gray-700 mb-4">
                  An LLC (Limited Liability Company) is a business structure that separates your personal assets from your business activities. For freelancers, this means your personal savings, home, and other assets are protected if your business faces legal issues or debt.
                </p>
                <p className="text-gray-700">
                  Unlike a sole proprietorship, where you and your business are legally the same entity, an LLC creates a legal barrier between your personal and business finances.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-600" />
                  Freelancer-Specific Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Protection from client lawsuits and disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Professional credibility with larger clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Potential tax advantages and deductions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Easier to scale and hire contractors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Benefits of Forming an LLC as a Freelancer
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Liability Protection</h3>
                <p className="text-gray-700">
                  Your personal assets are protected if a client sues you or if your business faces financial trouble. This is especially important for freelancers working with larger clients or handling sensitive projects.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Tax Flexibility</h3>
                <p className="text-gray-700">
                  Choose between pass-through taxation (like a sole proprietorship) or elect to be taxed as an S-Corp for potential savings. Plus, you can deduct business expenses more easily.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Building className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Professional Credibility</h3>
                <p className="text-gray-700">
                  Many clients prefer working with LLCs over sole proprietorships. It signals stability and professionalism, which can help you land higher-paying projects.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Sole Proprietorship vs LLC: The Real Comparison
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Sole Proprietorship</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Pros
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• No setup costs or filing fees</li>
                      <li>• Simple tax filing</li>
                      <li>• Complete control over decisions</li>
                      <li>• No ongoing compliance requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      Cons
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Personal liability for business debts</li>
                      <li>• Limited credibility with larger clients</li>
                      <li>• Harder to raise capital or get loans</li>
                      <li>• No asset protection</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-green-600">LLC</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Pros
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Personal asset protection</li>
                      <li>• Professional credibility</li>
                      <li>• Tax flexibility and deductions</li>
                      <li>• Easier to scale and hire</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      Cons
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Setup costs and filing fees</li>
                      <li>• More complex tax filing</li>
                      <li>• Ongoing compliance requirements</li>
                      <li>• Administrative overhead</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* When It's Worth It Section */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When an LLC is Worth It for Freelancers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  High-Risk Situations
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Working with large corporations or government clients</li>
                  <li>• Handling sensitive data or intellectual property</li>
                  <li>• Providing professional services (consulting, legal, medical)</li>
                  <li>• Working in industries with high litigation risk</li>
                  <li>• Earning $50,000+ annually from freelancing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Financial Considerations
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• You have significant personal assets to protect</li>
                  <li>• You want to build business credit</li>
                  <li>• You plan to hire employees or contractors</li>
                  <li>• You want to maximize tax deductions</li>
                  <li>• You're scaling beyond occasional side work</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Not sure if an LLC is right for you? Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> can help you decide.
              </p>
            </div>
          </div>
        </motion.section>

        {/* FAQs Section */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              FAQs Freelancers Ask About LLCs
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-3">Do I need an EIN for my freelancer LLC?</h3>
                <p className="text-gray-700">
                  Yes, you'll need an Employer Identification Number (EIN) from the IRS. It's free and takes about 5 minutes to get online. Your EIN is required for opening a business bank account and filing taxes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-3">How much does it cost to start an LLC as a freelancer?</h3>
                <p className="text-gray-700">
                  State filing fees range from $50 to $500, with most states charging $100-200. Additional costs include EIN (free), operating agreement, and potentially a registered agent. Check our <Link href="/freelancer-llc-cost-2025" className="text-blue-600 hover:underline">detailed cost breakdown</Link> for your state.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-3">Can I form an LLC in a different state than where I live?</h3>
                <p className="text-gray-700">
                  Yes, but it's usually not recommended for freelancers. You'll need to register as a foreign LLC in your home state anyway, which adds complexity and cost. Form in your home state unless you have a specific reason not to.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-3">Do I need an operating agreement for a single-member LLC?</h3>
                <p className="text-gray-700">
                  While not legally required in most states, an operating agreement is highly recommended. It helps maintain the liability protection and provides clarity on business structure. It's especially important if you plan to add partners later.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 px-4 text-center bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Ready to Protect Your Freelance Business?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Get everything you need to form your LLC in under 15 minutes. No upsells, no confusion—just the essentials for $49.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/checkout">
                <Button className="text-lg px-8 py-3">
                  Start My LLC for $49 →
                </Button>
              </Link>
              <Link href="/freelancer-llc-setup-guide">
                <Button variant="outline" className="text-lg px-8 py-3">
                  View Setup Guide
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