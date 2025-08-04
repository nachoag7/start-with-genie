"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon, Key, Car as CarIcon, UserCheck as UserCheckIcon2, Store, AlertTriangle as AlertTriangleIcon3 } from "lucide-react";
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

export default function DoYouNeedALicenseWithAnLLCPage() {
  return (
    <SeoPageLayout>
      <div id="do-you-need-a-license-with-an-llc">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Do I Need a Business License with My LLC?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Starting an LLC doesn't always mean you need a business license. Here's when you do, when you don't, and how to stay compliant in your state.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Need help? Start With Genie guides you step-by-step →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* What's the Difference */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What's the Difference?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold">LLC = Legal Entity</h3>
                </div>
                <p className="text-gray-700">
                  Filed with your state to create a company.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <FileTextIcon className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold">Business License = Legal Permission to Operate</h3>
                </div>
                <p className="text-gray-700">
                  Issued by your <strong>city, county, or state</strong> depending on where and what you do.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Key className="w-6 h-6 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-blue-700 font-medium">
                    <strong>Forming an LLC is like getting the keys to a car.</strong><br />
                    <strong>A business license is like having a driver's license.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* You Might Not Need One If */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              You Might Not Need One If…
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                You're operating:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>As a solo freelancer online (design, writing, editing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Below a certain income threshold in your city</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>In a state/city that doesn't require general licenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Without a storefront, office, or physical footprint</span>
                </li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-700">
                  Many online businesses <strong>can legally operate</strong> with an LLC and no extra license—<strong>but only if local rules allow.</strong>
                </p>
              </div>
              <div className="mt-4">
                <Link href="/start-llc-without-business-license" className="text-blue-600 hover:underline font-medium">
                  Here's how to check →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* You Likely Need One If */}
        <motion.section 
          className="py-12 px-4 bg-red-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              You Likely Need One If…
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                You're:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon3 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Selling physical products (online or in person)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon3 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Working with clients face-to-face</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon3 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Using a name different from your own (DBA rules)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon3 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Operating in a regulated field (health, food, childcare, trades)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon3 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Collecting sales tax</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                Every city is different—but most require <strong>some kind of registration</strong>.
              </p>
            </div>
          </div>
        </motion.section>

        {/* How to Know for Sure */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Know for Sure (In 5 Minutes)
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Search your city's license portal</h3>
                </div>
                <p className="text-gray-700">
                  Example: <code className="bg-gray-100 px-2 py-1 rounded">Los Angeles business license</code> or <code className="bg-gray-100 px-2 py-1 rounded">Georgia seller's permit</code>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Look for:</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <FileTextIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>General business license</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Home className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Home-based business license</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Receipt className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Sales tax certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Zoning clearance (if working from home)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Apply (or file exemption)</h3>
                </div>
                <p className="text-gray-700">
                  Some places only need a simple form. Others will auto-approve you with your LLC.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What Happens if You Skip It */}
        <motion.section 
          className="py-12 px-4 bg-yellow-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What Happens if You Skip It?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You may get fined by your city or county</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Your bank or payment processor may shut you down</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You could lose protections your LLC is supposed to give</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>It may block access to Stripe, PayPal, or online marketplaces</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Still Not Sure */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Still Not Sure?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Start With Genie gives you the full launch checklist—including links to your state and city sites, plus how to stay compliant.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Launch your LLC the smart way →
              </Button>
            </Link>
            <div className="mt-6">
              <Link href="/start-llc-without-business-license" className="text-blue-600 hover:underline font-medium">
                Or read our full guide: Can I start an LLC without a license? →
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
              <Link href="/can-i-sell-without-a-business-license">
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