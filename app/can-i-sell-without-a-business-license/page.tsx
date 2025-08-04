"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon, Key, Car as CarIcon, UserCheck as UserCheckIcon2, Store, AlertTriangle as AlertTriangleIcon3, Package, AlertTriangle as AlertTriangleIcon4, DollarSign as DollarSignIcon, Truck, FileText as FileTextIcon4, Phone } from "lucide-react";
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

export default function CanISellWithoutABusinessLicensePage() {
  return (
    <SeoPageLayout>
      <div id="can-i-sell-without-a-business-license">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Can I Sell Without a Business License?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Want to start selling online or locally without a license? Here's when you can, when you shouldn't, and how to get legal fast.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Need help getting started? Start With Genie walks you through it →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* First: What Are You Selling */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              First: What Are You Selling?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Not every type of sale triggers a licensing requirement.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    You might not need a license if:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You're selling <strong>digital products</strong> on Gumroad, Etsy, or your own site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You're flipping things casually (resale under $600/year)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You're testing an idea before committing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You're in a city/state with <strong>no general business license law</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    But if you're:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Selling <strong>physical products regularly</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Handling <strong>sales tax</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Shipping <strong>goods across state lines</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Making over ~$1,000–$5,000 depending on your city</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4 font-medium">
                    ...you'll probably need one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What Kinds of Licenses Might Be Required */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What Kinds of Licenses Might Be Required?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileTextIcon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">General business license</h3>
                <p className="text-gray-700">(your city or county)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Home className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Home occupation permit</h3>
                <p className="text-gray-700">(if operating from home)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Receipt className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Seller's permit</h3>
                <p className="text-gray-700">or sales tax registration</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Package className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Reseller certificate</h3>
                <p className="text-gray-700">(if you're buying wholesale)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Industry-specific license</h3>
                <p className="text-gray-700">(food, childcare, cosmetics, finance)</p>
              </div>
            </div>
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-700 font-medium">
                These vary by state and city—there's no one-size-fits-all.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What Happens If You Skip the License */}
        <motion.section 
          className="py-12 px-4 bg-red-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What Happens If You Skip the License?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Honestly? A lot of people do—<strong>especially when just starting.</strong><br />
                But here's what could happen:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon4 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>A fine from your city or county</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon4 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Forced closure or cease-and-desist letter</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon4 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Trouble getting a Stripe, PayPal, or bank account</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon4 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Risk of losing your LLC protections</span>
                </li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  And if something goes wrong? You'll be personally liable.
                </p>
              </div>
              <div className="mt-4">
                <Link href="/do-you-need-a-license-with-an-llc" className="text-blue-600 hover:underline font-medium">
                  More on LLC vs license →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* So What Should You Do */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              So What Should You Do?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-lg font-semibold">If you're testing an idea:</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Keep sales low</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use platforms like Gumroad, Etsy, or Ko-fi that don't require licenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Track your earnings</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold">If you're serious:</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Form an LLC (or sole prop)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Look up your city's licensing requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Get compliant early—it's usually cheap and fast</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Final Rule: Don't Guess */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Final Rule: Don't Guess
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                When in doubt:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Search className="w-6 h-6 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-700">Search: <code className="bg-gray-100 px-2 py-1 rounded">your city + business license</code></h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-700">Or call your local small business office</h3>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-700 font-medium">
                  Better to <strong>file a $30 license</strong> than deal with a <strong>$300 fine</strong>.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Want a Clean, Legal Start */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Want a Clean, Legal Start?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Start With Genie gives you everything you need to start your business the right way—step-by-step, with clarity and compliance.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Launch your LLC and stay legal →
              </Button>
            </Link>
            <div className="mt-6">
              <Link href="/when-to-get-business-license-llc" className="text-blue-600 hover:underline font-medium">
                Already have an LLC? Here's when to get licensed →
              </Link>
            </div>
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
              <Link href="/start-llc-without-business-license">
                <Button variant="outline" className="text-lg px-8 py-3">
                  License Guide
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