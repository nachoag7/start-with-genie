"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, Handshake, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2 } from "lucide-react";
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

export default function HowToInvolveAParentInYourLLCPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-involve-a-parent-in-your-llc">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            How to Involve a Parent in Your LLC (For Teens Under 18)
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            If you're under 18, your LLC will likely need adult involvement. Here's how to legally include a parent or guardian—and still run the show.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Need step-by-step help? Try Start With Genie →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Why You Need an Adult Involved */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why You Need an Adult Involved
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                States and platforms usually won't let minors:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>File legal documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Sign binding contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Open business bank accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Register for tools like Stripe or PayPal</span>
                </li>
              </ul>
              <p className="text-gray-700">
                So, your parent or guardian will need to step in—for now.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Your Options: Member or Manager */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Your Options: Member or Manager?
            </h2>
            <p className="text-gray-700 text-center mb-8">
              There are two clean ways to involve a parent:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <UserCheckIcon className="w-5 h-5 text-blue-600" />
                  1. Make them a member (owner)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Their name is on the LLC as the official owner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You run the business, but they legally "own" it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Later, they transfer ownership to you once you're 18</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-green-600" />
                  2. Make them a manager (operator)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You're listed as the member (if allowed), but they handle legal/financial ops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Lets you retain more ownership—if your state allows it</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/can-a-minor-form-an-llc" className="text-blue-600 hover:underline font-medium">
                More on which states allow minors →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* How to Keep Control */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Keep Control (Even if They're Listed)
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Here's what smart teen founders do:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <FileTextIcon2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Write a private agreement</strong> stating that you run day-to-day decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Smartphone className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Use your email and phone</strong> for all business logins and operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Set up business tools with you as the user</strong>, even if their name is on file</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                You're not giving up control—you're working around a legal gap.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What Happens When You Turn 18 */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What Happens When You Turn 18?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Once you're legally an adult, your parent can:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileTextIcon className="w-6 h-6 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-700">File an amendment</h3>
                    <p className="text-gray-600">Remove their name and add yours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCardIcon className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-700">Transfer the EIN and bank accounts</h3>
                    <p className="text-gray-600">To you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Monitor className="w-6 h-6 text-purple-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-700">Update all platform profiles</h3>
                    <p className="text-gray-600">Shopify, Stripe, etc. with your info</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-6">
                It's a simple paperwork process. But planning it early keeps everything smooth.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Should You Involve Anyone Else */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Should You Involve Anyone Else?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                If your parent isn't an option, you can legally involve:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">A trusted sibling</span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">A grandparent</span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">A mentor or close adult family friend</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Just make sure:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>They're reliable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You both understand the risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You trust them with sensitive info like taxes and money</span>
                </li>
              </ul>
              <Link href="/teen-business-workarounds" className="text-blue-600 hover:underline font-medium">
                More workarounds if no parent can help →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Real Talk: Trust First */}
        <motion.section 
          className="py-12 px-4 bg-yellow-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Real Talk: Trust First, Paperwork Second
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-lg text-gray-700 mb-6">
                This is still your business. But you're asking someone to help you make it legal.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-blue-700 font-medium">
                  <strong>So be clear. Be upfront. And write it down.</strong><br />
                  Even a one-page agreement saying "you own the idea, they're helping legally" can avoid a mess later.
                </p>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <ShieldIcon2 className="w-6 h-6 text-green-600" />
                <span>Trust is the foundation—paperwork just protects it.</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Don't Let Legal Stuff Stop You */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Don't Let Legal Stuff Stop You
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <p className="text-lg text-gray-700 mb-6">
                Most people won't even start. But if you're under 18 and willing to do the work, you've already got the edge.
              </p>
              <Link href="/checkout">
                <Button className="text-lg px-8 py-3">
                  Start With Genie helps you do this right—from day one →
                </Button>
              </Link>
              <div className="mt-6">
                <Link href="/how-to-start-an-llc-if-youre-under-18" className="text-blue-600 hover:underline font-medium">
                  Back to the full guide →
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
              <Link href="/how-to-start-an-llc-if-youre-under-18">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Under 18 Guide
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