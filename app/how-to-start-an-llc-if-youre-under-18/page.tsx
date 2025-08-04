"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon } from "lucide-react";
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

export default function HowToStartAnLLCIfYoureUnder18Page() {
  return (
    <SeoPageLayout>
      <div id="how-to-start-an-llc-if-youre-under-18">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            How to Start an LLC if You're Under 18 (2025 Guide)
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Yes, teens can start a business. Here's exactly how to start an LLC if you're under 18—plus workarounds, legal tips, and how to involve your parents.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Get step-by-step help with Start With Genie →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Can a Minor Legally Form an LLC */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Can a Minor Legally Form an LLC?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  The Legal Reality
                </h3>
                <p className="text-gray-700 mb-4">
                  Most states don't explicitly allow or prohibit minors from forming LLCs. But here's the catch: even if it's legally possible, platforms like LegalZoom or Stripe will usually block underage users.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Some states are more flexible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Parent involvement often required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Platform restrictions apply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Workarounds exist</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  State Variations
                </h3>
                <p className="text-gray-700 mb-4">
                  Some states—like California and Delaware—have been more flexible, especially if you involve a parent as the official signer. In other states, it's much harder without adult backing.
                </p>
                <div className="mt-4">
                  <Link href="/can-a-minor-form-an-llc" className="text-blue-600 hover:underline font-medium">
                    See a breakdown here →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Age Matters */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Age Matters (and When It Doesn't)
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  The Contract Issue
                </h3>
                <p className="text-gray-700 mb-4">
                  Under 18, you can't legally enter into contracts in most states. And forming an LLC means signing binding paperwork with the state, the IRS, and banks.
                </p>
                <p className="text-gray-700 mb-4">
                  But that doesn't mean you're out of options. Here's how some teens do it:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Parent or guardian signs on your behalf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use a "manager-managed" LLC where the adult is the official operator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Transfer ownership once you turn 18</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You don't have to give up control—you just need a legal structure that works.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Real Workarounds */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Real Workarounds Teens Actually Use
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Here's what actually works in the real world:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Users2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Parent Involvement</h3>
                <p className="text-gray-700">
                  Have a parent or trusted adult form the LLC, then manage it with you.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <UserCheck className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Legal Structure</h3>
                <p className="text-gray-700">
                  Make them the legal member, but handle operations yourself.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Monitor className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Platform Workarounds</h3>
                <p className="text-gray-700">
                  Use platforms that don't require ID to set up simple online businesses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileTextIcon className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Sole Proprietorship</h3>
                <p className="text-gray-700">
                  Start as a sole proprietor and convert later.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                You can find a full guide to these workarounds here:
              </p>
              <Link href="/teen-business-workarounds" className="text-blue-600 hover:underline font-medium">
                Business workarounds for teens →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Step-by-Step Process */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Step-by-Step: How to Start an LLC Anyway
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Even if you're under 18, here's how teens are starting LLCs today:
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Pick a name</h3>
                </div>
                <p className="text-gray-700">
                  Something clean, available in your state, and domain-ready.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Involve a parent or guardian</h3>
                </div>
                <p className="text-gray-700">
                  They'll need to sign the forms and maybe act as the official "member."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">File your LLC with the state</h3>
                </div>
                <p className="text-gray-700">
                  Each state has an online portal. It usually takes 1–2 weeks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                  <h3 className="text-xl font-semibold">Get your EIN (Tax ID)</h3>
                </div>
                <p className="text-gray-700">
                  Required to open a bank account or file taxes. You'll need the adult's SSN to request it through the IRS site.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">5</div>
                  <h3 className="text-xl font-semibold">Open a business bank account</h3>
                </div>
                <p className="text-gray-700">
                  Some banks won't allow minors on the account. Use the adult's name, then add yourself as a signer if allowed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">6</div>
                  <h3 className="text-xl font-semibold">Sign up for platforms and tools</h3>
                </div>
                <p className="text-gray-700">
                  Shopify, Stripe, PayPal, etc. will need someone 18+ on the account—but once set up, you can run the business.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Want help through this process?
              </p>
              <Link href="/checkout">
                <Button className="text-lg px-8 py-3">
                  Start With Genie makes it simple →
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* How to Involve a Parent */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Involve a Parent or Guardian (Without Losing Control)
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Involving a parent doesn't mean giving up your business.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  You Can:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Make them the official "member"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set up a manager-managed LLC and have them listed as manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sign a side agreement that you control operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Transfer full ownership to yourself when you turn 18</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Learn More
                </h3>
                <p className="text-gray-700 mb-4">
                  Learn how other teens do it:
                </p>
                <Link href="/how-to-involve-a-parent-in-your-llc" className="text-blue-600 hover:underline font-medium">
                  How to involve your parent in your LLC →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Business Ideas */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Business Ideas Teens Are Actually Launching
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Here are real businesses teens have launched using an LLC setup:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Monitor className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Digital</h3>
                <p className="text-gray-700">
                  YouTube editing, UGC content, dropshipping
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Users className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Local</h3>
                <p className="text-gray-700">
                  Car detailing, tutoring, lawn care
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Services</h3>
                <p className="text-gray-700">
                  Logo design, AI automation, Etsy shops
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                All of these are possible even before you turn 18—with the right setup.
              </p>
              <Link href="/business-ideas-for-teens-with-llc" className="text-blue-600 hover:underline font-medium">
                Get inspired →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Final Tip */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Final Tip: You Don't Have to Wait
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <p className="text-lg text-gray-700 mb-6">
                Starting young is an advantage—not a disadvantage. You'll hit bumps with legal forms and platforms, but the process is 100% doable if you involve the right adult and structure it correctly.
              </p>
              <p className="text-gray-600 mb-6">
                Need a simple, private way to start?
              </p>
              <Link href="/checkout">
                <Button className="text-lg px-8 py-3">
                  Start With Genie gives you every step →
                </Button>
              </Link>
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
              Ready to Start Your LLC?
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