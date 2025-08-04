"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, Handshake, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon } from "lucide-react";
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

export default function TeenBusinessWorkaroundsPage() {
  return (
    <SeoPageLayout>
      <div id="teen-business-workarounds">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Business Workarounds for Teens Under 18
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Too young to legally form an LLC? Here are real strategies teens use to launch businesses before 18—with or without a parent.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Need help getting started? Try Start With Genie →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Why Teens Hit Legal Walls */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Teens Hit Legal Walls
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                If you're under 18, most states and platforms will block you from:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Forming an LLC</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Signing contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Opening business accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Getting a Stripe or PayPal account</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                But those are <strong>legal technicalities—not dealbreakers.</strong><br />
                Here's how teens actually work around them.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Workaround 1: Parent or Adult File the LLC */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              1. Have a Parent or Adult File the LLC
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                This is the most common path. You stay the operator, but an adult is the official member.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    You:
                  </h3>
                  <p className="text-gray-700">Run the business</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Users2Icon className="w-5 h-5 text-green-600" />
                    Them:
                  </h3>
                  <p className="text-gray-700">Sign forms, help open accounts</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Once you turn 18, you can legally take over.
              </p>
              <Link href="/how-to-involve-a-parent-in-your-llc" className="text-blue-600 hover:underline font-medium">
                How to structure this properly →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Workaround 2: Manager-Managed LLC */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              2. Use a Manager-Managed LLC
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                In some states, you can list an adult as the <em>manager</em> of the LLC, while you stay behind the scenes.
              </p>
              <p className="text-gray-700 mb-6">
                This lets the adult:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Sign legal forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Open bank and Stripe accounts</span>
                </li>
              </ul>
              <p className="text-gray-700">
                You handle day-to-day work without being the official owner (yet). This structure can be updated later.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Workaround 3: Start as a Sole Proprietor */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              3. Start as a Sole Proprietor
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                You don't technically need an LLC to start.<br />
                You can launch as a sole proprietor, especially if:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You're doing low-risk services (like tutoring or freelancing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You're under your parent's tax umbrella</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You're not yet hitting $10K+ in income</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Later, convert to an LLC when you're older.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Workaround 4: Form Under Trust or Family Business */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              4. Form the LLC Under a Trust or Family Business
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Some families create a trust or umbrella business that legally owns the new LLC.
              </p>
              <p className="text-gray-700 mb-6">
                This is more complex but gives long-term flexibility. You'll need:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>A trusted adult to set it up</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Legal or tax help to structure it right</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Not common, but useful for teens building something big.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Workaround 5: Use Adult-Owned Accounts */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              5. Use Adult-Owned Accounts to Launch
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                If your business depends on tools like:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CreditCardIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Stripe</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCardIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">PayPal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCardIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Etsy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCardIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Shopify</span>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                ...you'll need someone 18+ to open the accounts.<br />
                But you can:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Run the operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Manage fulfillment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Receive payments through the adult's bank, then transfer funds</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                <strong>It's legal</strong>—as long as the adult is involved and aware.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Important: Trust Matters */}
        <motion.section 
          className="py-12 px-4 bg-yellow-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Important: Trust Matters
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Whoever you involve—make sure they're reliable.<br />
                You're trusting them with:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Legal documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Financial control</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Your vision</span>
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                It's worth writing a simple agreement (even handwritten) to protect your role.
              </p>
              <Link href="/how-to-involve-a-parent-in-your-llc" className="text-blue-600 hover:underline font-medium">
                Tips for involving a parent or adult →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* You Can Still Build Real Momentum */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              You Can Still Build Real Momentum
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <p className="text-lg text-gray-700 mb-6">
                Don't let paperwork stop you.<br />
                These are workarounds, not shortcuts—and plenty of founders got started this way.
              </p>
              <p className="text-gray-700 mb-6">
                When you're ready to set things up the right way…
              </p>
              <Link href="/checkout">
                <Button className="text-lg px-8 py-3">
                  Start With Genie walks you through it step-by-step →
                </Button>
              </Link>
              <div className="mt-6">
                <Link href="/how-to-start-an-llc-if-youre-under-18" className="text-blue-600 hover:underline font-medium">
                  Or go back to the full guide →
                </Link>
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
              Ready to Start Your Business?
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
              <Link href="/can-a-minor-form-an-llc">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Minor LLC Guide
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