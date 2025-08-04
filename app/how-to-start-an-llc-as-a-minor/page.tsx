"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, User, Building, AlertTriangle, FileText, Users, Clock, TrendingUp, BookOpen, Zap, Star, ArrowUpRight } from "lucide-react";
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

export default function HowToStartLLCAsMinorPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-start-llc-as-minor">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            How to Start an LLC as a Minor (2025 Guide)
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            You don't need to wait until you're 18 to build something real. Here's exactly how teens and minors can launch an LLC—legally, cleanly, and with control.
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

        {/* What This Guide Covers */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What This Guide Covers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Legal Workarounds
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Whether minors can legally own an LLC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Smart workarounds with or without parents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>What states allow it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>How to protect yourself</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Mistakes to Avoid
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Common pitfalls and how to avoid them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Risks of doing it wrong</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>How to maintain control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Best business ideas for teens</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Can Minors Start an LLC */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Can Minors Start an LLC?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-lg text-gray-700 mb-6">
                In most states, minors (under 18) <strong>can't file an LLC directly.</strong> But that doesn't mean you're blocked.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Why Not?
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>State laws require legal contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Minors usually can't sign them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Banks, IRS, or vendors might reject your info</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                    The Solution
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use legal workarounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Involve a parent or guardian</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Start without LLC, then upgrade</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  See full state-by-state breakdown here →
                </p>
                <Link href="/can-a-minor-form-an-llc" className="text-blue-600 hover:underline font-medium">
                  Can a Minor Form an LLC?
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3 Real Ways Teens Can Launch */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              3 Real Ways Teens Can Launch a Business Anyway
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Involve a Parent or Guardian</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Have your parent file the LLC in their name and list you as a manager or member.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">What they do:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• File the LLC in their name</li>
                      <li>• List you as a manager or member</li>
                      <li>• Create a written agreement</li>
                      <li>• Transfer control when you turn 18</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What you do:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Run the business day-to-day</li>
                      <li>• Make all business decisions</li>
                      <li>• Keep profits and control</li>
                      <li>• Learn real business skills</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/how-to-involve-a-parent-in-your-llc" className="text-blue-600 hover:underline font-medium">
                    Full guide here: How to Involve a Parent in Your LLC →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Use a Trusted Adult as a Temporary Owner</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  They act as the "legal face" of the business while you operate it.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">How it works:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• They act as the legal face</li>
                      <li>• You operate the business</li>
                      <li>• They sign a private agreement</li>
                      <li>• Gives you future ownership</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Important:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Not perfect, but legal</li>
                      <li>• Keep agreement offline</li>
                      <li>• Trust is essential</li>
                      <li>• Document everything</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Run It Without an LLC (Then Upgrade)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Start with sole proprietorship or under your parent's name, validate the idea, then form the LLC when you're 18.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Start with:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sole proprietorship</li>
                      <li>• Under parent's name</li>
                      <li>• Validate the idea</li>
                      <li>• Build customer base</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Then upgrade:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Form LLC when you're 18</li>
                      <li>• Transfer everything over</li>
                      <li>• Keep all your customers</li>
                      <li>• Maintain momentum</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/teen-business-workarounds" className="text-blue-600 hover:underline font-medium">
                    Real examples in Teen Business Workarounds →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Risks of Doing It Wrong */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              The Risks of Doing It Wrong
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-red-200">
                <XCircle className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Bank Account Shut Down</h3>
                <p className="text-gray-700">
                  Your bank account could get shut down if they discover you're operating illegally.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-red-200">
                <XCircle className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Client Refusals</h3>
                <p className="text-gray-700">
                  Clients might refuse contracts if they can't verify your business legitimacy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-red-200">
                <XCircle className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Lose Control</h3>
                <p className="text-gray-700">
                  You could lose control of your business if proper legal structure isn't in place.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-700 font-medium">
                Protecting yourself early is worth it—even if it takes an extra step.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Best Business Ideas */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Best Business Ideas Teens Can Start with an LLC
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Product-Based Businesses
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Resell products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Small brand (clothing, Etsy, Shopify)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Digital goods or courses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Handmade products</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Service-Based Businesses
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Design services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tutoring or coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Social media management</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/business-ideas-for-teens-with-llc" className="text-blue-600 hover:underline font-medium">
                Full list here → Business Ideas for Teens with LLC
              </Link>
            </div>
          </div>
        </motion.section>

        {/* What to Tell Your Parent */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What to Tell Your Parent
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-lg text-gray-700 mb-6">
                A lot of teens give up because they don't know how to explain it. Here's a script that works:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-800 italic">
                  "I've been working on a business, and I want to do it right. But since I'm under 18, I need your help filing it. I'm happy to make you the legal owner for now, but I'll be the one running things day to day."
                </p>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-700">
                  If they're hesitant, share this guide. It's made to help them understand.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              FAQ
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-3">Can a 17-year-old file an LLC?</h3>
                <p className="text-gray-700">
                  Not directly in most states—but you can use a parent workaround.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-3">Will I be taxed if my parent is the legal owner?</h3>
                <p className="text-gray-700">
                  Your parent might get the 1099 or tax notice. Set expectations and track income properly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-3">Can I get an EIN if I'm a minor?</h3>
                <p className="text-gray-700">
                  Not personally—but your LLC (owned by an adult) can.
                </p>
              </div>
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
              Want to Do It the Smart Way?
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              If you're ready to start clean and legally protected, Start With Genie gives you the full playbook:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Personalized Filing Instructions</h3>
                <p className="text-gray-700">
                  Step-by-step guidance tailored to your specific situation and state requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">EIN and Tax ID Setup</h3>
                <p className="text-gray-700">
                  Complete guidance on getting your EIN and setting up proper tax identification.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Users className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Parent Involvement Templates</h3>
                <p className="text-gray-700">
                  Templates and agreements for properly involving a parent while maintaining your control.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                All step-by-step, no upsells. Just $49 for everything you need.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Final Note */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Final Note from the Creator
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-lg text-gray-700 mb-6">
                I built this because I was 17, trying to figure all of this out—and there was no clear answer.
              </p>
              <p className="text-gray-700 mb-6">
                If this helped, share it with someone else trying to build early.
              </p>
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  Your age doesn't stop you.
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  Clarity does.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/teen-business-workarounds" className="text-blue-600 hover:underline font-medium">
                Explore more teen business guides →
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
              Ready to Start Your LLC the Right Way?
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
              <Link href="/teen-business-workarounds">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Teen Business Workarounds
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