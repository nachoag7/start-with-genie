"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users } from "lucide-react";
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

export default function CanMySpouseBeOnMyLLCPage() {
  return (
    <SeoPageLayout>
      <div id="can-my-spouse-be-on-my-llc">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Can My Spouse Be on My LLC? Complete Guide
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Learn how to add your spouse to your LLC, the tax implications, and whether it's the right choice for your business. Everything you need to know about spouse LLC ownership.
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

        {/* Can Your Spouse Be on Your LLC */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Can Your Spouse Be on Your LLC?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-blue-600" />
                  Yes, Absolutely
                </h3>
                <p className="text-gray-700 mb-4">
                  Your spouse can absolutely be a member of your LLC. In fact, it's quite common for married couples to own businesses together.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Spouses can be co-owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Can be added during formation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Can be added later</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No special restrictions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  How to Add Your Spouse
                </h3>
                <p className="text-gray-700 mb-4">
                  The process varies depending on when you want to add your spouse and your state's requirements.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>During LLC formation (easiest)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>File amendment with state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Update operating agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Notify IRS of changes</span>
                  </li>
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
              Tax Implications of Adding Your Spouse
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Single-Member LLC Tax Treatment</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  If you and your spouse are the only members, you may qualify for single-member LLC tax treatment.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Simpler tax filing</li>
                      <li>• No separate business return</li>
                      <li>• Schedule C on personal return</li>
                      <li>• Less paperwork</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Only you and spouse as members</li>
                      <li>• Community property state</li>
                      <li>• Both spouses must consent</li>
                      <li>• Must file election with IRS</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Partnership Tax Treatment</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Most spouse-owned LLCs are taxed as partnerships, requiring a separate business tax return.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">What this means:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• File Form 1065</li>
                      <li>• Each spouse gets Schedule K-1</li>
                      <li>• Report on personal returns</li>
                      <li>• More complex filing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Considerations:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Higher tax preparation costs</li>
                      <li>• More detailed record keeping</li>
                      <li>• Separate business bank account</li>
                      <li>• Professional help recommended</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Community Property States</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  In community property states, special rules apply to spouse-owned businesses.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Community Property States:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Arizona</li>
                      <li>• California</li>
                      <li>• Idaho</li>
                      <li>• Louisiana</li>
                      <li>• Nevada</li>
                      <li>• New Mexico</li>
                      <li>• Texas</li>
                      <li>• Washington</li>
                      <li>• Wisconsin</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Special Rules:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• May qualify for single-member treatment</li>
                      <li>• Different ownership rules</li>
                      <li>• Special tax elections available</li>
                      <li>• Consult tax professional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pros and Cons */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Pros and Cons of Adding Your Spouse to Your LLC
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Pros
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Shared ownership and decision-making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Both spouses can sign contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Shared liability protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Easier succession planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Both can open business accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Shared tax benefits</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Cons
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>More complex tax filing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Higher tax preparation costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Potential disagreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>More paperwork and compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Both liable for business debts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Divorce complications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Add Your Spouse */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Add Your Spouse to Your LLC
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  During LLC Formation (Easiest)
                </h3>
                <p className="text-gray-700 mb-4">
                  The easiest time to add your spouse is during the initial LLC formation process.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>List both spouses on Articles of Organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Include both in Operating Agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Both apply for EIN together</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No additional filing fees</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Adding Later (More Complex)
                </h3>
                <p className="text-gray-700 mb-4">
                  If you need to add your spouse after formation, the process is more involved.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Steps Required:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• File amendment with state</li>
                      <li>• Update Operating Agreement</li>
                      <li>• Notify IRS of changes</li>
                      <li>• Update business accounts</li>
                      <li>• Update contracts/licenses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Costs:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• State filing fees ($50-200)</li>
                      <li>• Legal assistance (optional)</li>
                      <li>• Tax preparation costs</li>
                      <li>• Time and paperwork</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* When to Consider */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When to Consider Adding Your Spouse
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Both Work in Business</h3>
                <p className="text-gray-700">
                  If both spouses actively participate in the business, shared ownership makes sense.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Estate Planning</h3>
                <p className="text-gray-700">
                  Shared ownership can simplify succession planning and estate transfers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Tax Benefits</h3>
                <p className="text-gray-700">
                  In some cases, shared ownership can provide tax advantages for the family.
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
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How Start With Genie Helps You Set Up Spouse-Owned LLCs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Complete Setup</h3>
                <p className="text-gray-700">
                  We provide guidance on setting up LLCs with multiple members, including spouse-owned businesses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Legal Protection</h3>
                <p className="text-gray-700">
                  Our resources help you understand the legal implications of shared ownership.
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
                Ready to form your LLC? Our <Link href="/llc-for-family-business" className="text-blue-600 hover:underline">family business guide</Link> helps you set up the right structure.
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
              Ready to Form Your LLC with Your Spouse?
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
              <Link href="/llc-for-family-business">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Family Business Guide
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