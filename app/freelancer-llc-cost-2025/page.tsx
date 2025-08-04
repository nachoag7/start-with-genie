"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, DollarSign, AlertTriangle, Calculator, Shield, FileText, Building, CreditCard, TrendingUp } from "lucide-react";
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

export default function FreelancerLLCCost2025Page() {
  return (
    <SeoPageLayout>
      <div id="freelancer-llc-cost-2025">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            What It Really Costs to Start an LLC as a Freelancer in 2025
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Find out the real cost of forming an LLC as a freelancer—including state fees, EIN costs, and hidden upsells from LegalZoom.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start your LLC for $49 flat — no hidden fees →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* One-Time Costs Section */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              One-Time Costs: State Filing Fees (with Ranges)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  State Filing Fees
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">California</span>
                    <span className="font-semibold">$70</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Texas</span>
                    <span className="font-semibold">$300</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">New York</span>
                    <span className="font-semibold">$200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Florida</span>
                    <span className="font-semibold">$125</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Most Other States</span>
                    <span className="font-semibold">$100-200</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> These are the official state fees. Additional services like expedited filing, name reservations, or registered agent services cost extra.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Additional Costs
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">EIN (IRS)</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Operating Agreement</span>
                    <span className="font-semibold">$0-200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Registered Agent</span>
                    <span className="font-semibold">$0-150/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Business Bank Account</span>
                    <span className="font-semibold">$0-50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Business License (if required)</span>
                    <span className="font-semibold">$0-500</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Good news:</strong> Most freelancers can handle their own registered agent duties and get a free EIN online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Hidden Upsells Section */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Common Hidden Upsells from Competitors
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Legal Advice and Consultation
                </h3>
                <p className="text-gray-700 mb-4">
                  Many services offer "legal consultation" for an additional $100-300. While this might seem valuable, most freelancers don't need complex legal advice for basic LLC formation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      What They Charge
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Legal consultation: $150-300</li>
                      <li>• Document review: $100-200</li>
                      <li>• Ongoing legal support: $50-100/month</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      What You Actually Need
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Clear step-by-step instructions</li>
                      <li>• Properly formatted documents</li>
                      <li>• State-specific guidance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-purple-600" />
                  Registered Agent Services
                </h3>
                <p className="text-gray-700 mb-4">
                  Registered agent services can cost $100-150 per year. While convenient, most freelancers can serve as their own registered agent if they have a physical address in their state.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">When You Need a Registered Agent:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• You don't have a physical address in your state</li>
                    <li>• You travel frequently and might miss important mail</li>
                    <li>• You want privacy (agent's address on public records)</li>
                    <li>• Your state requires a commercial registered agent</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Document Preparation Services
                </h3>
                <p className="text-gray-700 mb-4">
                  Services often charge extra for "premium" document preparation, expedited filing, or additional business documents you might not need.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Common Upsells:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Expedited filing: $50-200</li>
                      <li>• Name reservation: $25-50</li>
                      <li>• Business license research: $100-200</li>
                      <li>• Tax ID application: $50-100</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What's Actually Free:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• EIN application (IRS.gov)</li>
                      <li>• Basic filing forms (state websites)</li>
                      <li>• Name availability search</li>
                      <li>• Standard processing (1-2 weeks)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* EINs and Operating Agreements Section */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How EINs and Operating Agreements Factor In
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-green-600" />
                  EIN (Employer Identification Number)
                </h3>
                <p className="text-gray-700 mb-4">
                  Your EIN is like a Social Security number for your business. It's required for opening a business bank account and filing taxes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Completely free from IRS.gov</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Takes about 5 minutes online</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Available immediately</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Don't pay third parties $50-100 for this</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Operating Agreement
                </h3>
                <p className="text-gray-700 mb-4">
                  While not legally required in most states, an operating agreement is highly recommended. It helps maintain liability protection and provides clarity on business structure.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Included with Start With Genie</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Protects liability protection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Required for some banks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Don't pay $100-300 for basic templates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Cost Comparison Section */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Genie vs LegalZoom vs ZenBusiness Cost Breakdown
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Start With Genie</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$49</div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Step-by-step guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Operating agreement included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>EIN application guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No hidden fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>State filing fees extra</span>
                  </li>
                </ul>
                <div className="text-xs text-gray-500">
                  * You file directly with your state
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-gray-600">LegalZoom</h3>
                <div className="text-3xl font-bold text-gray-600 mb-4">$79 + $99</div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>They file for you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Operating agreement: +$99</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>EIN service: +$79</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Registered agent: +$159/year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Upsells throughout process</span>
                  </li>
                </ul>
                <div className="text-xs text-gray-500">
                  * Total can exceed $400+ with upsells
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-gray-600">ZenBusiness</h3>
                <div className="text-3xl font-bold text-gray-600 mb-4">$0 + $199</div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>They file for you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Operating agreement: +$199</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>EIN service: +$99</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Registered agent: +$119/year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Complex pricing structure</span>
                  </li>
                </ul>
                <div className="text-xs text-gray-500">
                  * "Free" filing with expensive add-ons
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Genie Section */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Genie is the Simplest Flat-Fee Option
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Transparent Pricing
                </h3>
                <p className="text-gray-700 mb-4">
                  One price, no surprises. You know exactly what you're paying for, and there are no hidden fees or aggressive upsells during the process.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• $49 flat rate for all guidance and documents</li>
                  <li>• State filing fees are clearly explained</li>
                  <li>• No pressure to buy additional services</li>
                  <li>• Everything you need included</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Better Value
                </h3>
                <p className="text-gray-700 mb-4">
                  You save money by filing directly with your state (avoiding service fees) while getting professional guidance and all necessary documents.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Save $100-300 vs. LegalZoom/ZenBusiness</li>
                  <li>• Learn the process for future reference</li>
                  <li>• Maintain control over your filing</li>
                  <li>• No ongoing subscription fees</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Ready to see our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> to understand exactly what you get?
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
              Start Your LLC for $49 Flat
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              No hidden fees, no upsells, no confusion. Just everything you need to form your LLC properly for one simple price.
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