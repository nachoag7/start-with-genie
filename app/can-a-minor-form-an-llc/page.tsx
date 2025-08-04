"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle } from "lucide-react";
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

export default function CanAMinorFormAnLLCPage() {
  return (
    <SeoPageLayout>
      <div id="can-a-minor-form-an-llc">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Can a Minor Form an LLC? State-by-State Breakdown
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Minors can form LLCs in some states—but it's not simple. Learn where it's allowed, what obstacles you'll face, and smart legal workarounds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Need help navigating this? Start With Genie can help →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Why It's Not a Clear Yes or No */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why It's Not a Clear Yes or No
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Most states don't explicitly say whether minors can form LLCs. But here's the legal snag: contracts signed by minors (under 18) can often be voided. That creates risk for banks, payment processors, and the state itself.
              </p>
              <p className="text-gray-700 mb-6">
                So even if it's technically possible, many platforms will block you from:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Filing formation documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Getting an EIN</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Opening a business bank account</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                The issue isn't just forming the LLC—it's <strong>operating it legally.</strong>
              </p>
            </div>
          </div>
        </motion.section>

        {/* States That Are More Flexible */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              States That Are More Flexible
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Some states are more lenient in practice:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold">California</h3>
                </div>
                <p className="text-gray-700">
                  No explicit minimum age in the LLC law. Involving a parent helps.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold">Delaware</h3>
                </div>
                <p className="text-gray-700">
                  Known for flexibility. Legal structures are easy to tweak.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-semibold">Wyoming</h3>
                </div>
                <p className="text-gray-700">
                  Good for remote filings, but still tricky under 18.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-semibold">Colorado, Texas</h3>
                </div>
                <p className="text-gray-700">
                  Anecdotal success if you involve a legal adult.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-yellow-800">Important Note</h3>
              </div>
              <p className="text-yellow-700">
                No state guarantees approval without adult involvement.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What If Your State Blocks You */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What If Your State Blocks You?
            </h2>
            <p className="text-gray-700 text-center mb-8">
              If your state requires you to be 18+, you've still got options:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Users2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Parent Involvement</h3>
                <p className="text-gray-700">
                  Have a parent or trusted adult file the LLC for you.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Building className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Legal Structure</h3>
                <p className="text-gray-700">
                  Structure it so they're the official member or manager.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <UserCheck className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Future Transfer</h3>
                <p className="text-gray-700">
                  Transfer ownership once you turn 18.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                This isn't uncommon—lots of teen founders do it this way.
              </p>
              <Link href="/teen-business-workarounds" className="text-blue-600 hover:underline font-medium">
                Full guide on teen business workarounds →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* What About Online Platforms */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What About Online Platforms?
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Most filing services (like LegalZoom or Incfile) will <strong>block minors</strong> by default. Same goes for tools like:
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-semibold">Stripe</h3>
                </div>
                <p className="text-gray-700">
                  Requires 18+ and a valid SSN
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-semibold">Shopify</h3>
                </div>
                <p className="text-gray-700">
                  Won't let you open an account as a minor
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-semibold">Banks</h3>
                </div>
                <p className="text-gray-700">
                  Require 18+ for business accounts
                </p>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-700 mb-4">
                The workaround? Have a parent onboard the tools with you.
              </p>
              <Link href="/how-to-involve-a-parent-in-your-llc" className="text-blue-600 hover:underline font-medium">
                How to involve a parent the right way →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* So Can a Minor Start an LLC */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              So Can a Minor Start an LLC?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold">Yes, with help</h3>
                </div>
                <p className="text-gray-700">
                  With proper adult involvement and legal structure.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-semibold">Not alone</h3>
                </div>
                <p className="text-gray-700">
                  Most platforms and states require adult involvement.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 text-center">
                If you're under 18, the best path is this:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">1</div>
                  <span className="text-gray-700">Involve a parent or guardian</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">2</div>
                  <span className="text-gray-700">Choose a flexible state (or work with your home state)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">3</div>
                  <span className="text-gray-700">Set up the LLC in their name, with a plan to take over later</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/how-to-start-an-llc-if-youre-under-18" className="text-blue-600 hover:underline font-medium">
                  Step-by-step guide to starting an LLC under 18 →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Get Help Starting the Right Way */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Get Help Starting the Right Way
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If you're a teen ready to build something real, you don't have to figure this out alone.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start With Genie gives you everything you need to launch your LLC—even if you're under 18. →
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 px-4 text-center bg-gray-50"
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