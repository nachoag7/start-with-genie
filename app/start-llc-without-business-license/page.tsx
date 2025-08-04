"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon } from "lucide-react";
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

export default function StartLLCWithoutBusinessLicensePage() {
  return (
    <SeoPageLayout>
      <div id="start-llc-without-business-license">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Do You Need a Business License to Start an LLC?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Confused about whether you need a license to start an LLC? Here's a clear breakdown of when you do, when you don't, and how to launch legally.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Want step-by-step help? Start With Genie makes it easy →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* LLC ≠ Business License */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              LLC ≠ Business License
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                When you form an LLC, you're creating a <strong>legal business entity with the state</strong>.
              </p>
              <p className="text-gray-700 mb-6">
                A business license is something <strong>local governments (cities/counties)</strong> may require <strong>after you form</strong> your LLC.
              </p>
              <p className="text-gray-700 mb-6">
                You can <strong>create an LLC without a license</strong>, but you may not be allowed to <strong>operate or sell legally</strong> without one depending on:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <MapPinIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Your location</span>
                </li>
                <li className="flex items-start gap-2">
                  <BuildingIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Your industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Your business model</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* When You Don't Need a License */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Don't Need a License
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                You may not need a local business license if:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You're doing freelance work online (design, writing, editing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You're selling on Etsy or Gumroad with digital products</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You don't meet income thresholds for your city/state</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You're just forming the LLC to claim the name or open a business bank account (for now)</span>
                </li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-700 font-medium">
                  That said—<strong>always check with your city's website</strong>.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* When You Absolutely Do */}
        <motion.section 
          className="py-12 px-4 bg-red-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Absolutely Do
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                You'll likely need a business license if:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <AlertCircleIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You're working with clients in person (consulting, services, events)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircleIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You're selling physical products in a city</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircleIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You operate in a regulated industry (food, finance, medical, childcare)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircleIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You need a resale certificate or state sales tax ID</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                These are <strong>separate from the LLC itself</strong>—but both are often required.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What Happens if You Skip It */}
        <motion.section 
          className="py-12 px-4"
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
              <p className="text-gray-700 mb-6">
                Skipping a required business license can result in:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Fines from your city/county</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Getting shut down</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Trouble opening a business bank account</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Losing credibility with vendors or clients</span>
                </li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-700 font-medium">
                  <strong>Forming the LLC protects your name and liability.</strong><br />
                  <strong>Getting the license makes you legal in your location.</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Check What You Need */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Check What You Need (Fast)
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Form your LLC</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Register with your state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Get your EIN</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Open a business bank account</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Look up your local business license portal</h3>
                </div>
                <p className="text-gray-700">Search: <code className="bg-gray-100 px-2 py-1 rounded">Your City + business license</code></p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Look for these things:</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <FileTextIcon3 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>General business license</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Home className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Home-based business exemption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShoppingBag className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Seller's permit (if selling goods)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <User className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Any age-specific rules if you're under 18</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Summary: LLC vs License */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Summary: LLC vs License
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700"></th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">LLC</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">License</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-gray-700">Purpose</td>
                    <td className="py-3 px-4 text-gray-600">Legal entity (state-level)</td>
                    <td className="py-3 px-4 text-gray-600">Legal permission to operate (local-level)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-gray-700">Required?</td>
                    <td className="py-3 px-4 text-gray-600">If forming a company</td>
                    <td className="py-3 px-4 text-gray-600">Depends on your city/state/industry</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">When to get it</td>
                    <td className="py-3 px-4 text-gray-600">First</td>
                    <td className="py-3 px-4 text-gray-600">After forming the LLC</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-700">
                You can form an LLC without a license—but don't assume you're good to go until you check local rules.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Want Help Navigating This */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Want Help Navigating This?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Start With Genie gives you everything you need to launch your LLC the right way.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start With Genie gives you everything you need to launch your LLC the right way. →
              </Button>
            </Link>
            <div className="mt-6">
              <Link href="/how-to-start-an-llc-if-youre-under-18" className="text-blue-600 hover:underline font-medium">
                Or go back to our step-by-step LLC guide →
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
              <Link href="/cheapest-way-to-start-an-llc">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Cost Guide
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