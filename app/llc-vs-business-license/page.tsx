"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon, Key, Car as CarIcon, UserCheck as UserCheckIcon2, Store, AlertTriangle as AlertTriangleIcon3, Package, AlertTriangle as AlertTriangleIcon4, DollarSign as DollarSignIcon, Truck, FileText as FileTextIcon4, Phone, MapPin as MapPinIcon2, Building as BuildingIcon2 } from "lucide-react";
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

export default function LLCVsBusinessLicensePage() {
  return (
    <SeoPageLayout>
      <div id="llc-vs-business-license">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            LLC vs Business License: What's the Difference?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            LLCs and business licenses aren't the same. Here's what each does, when you need both, and how to keep it simple and legal.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Want a clean setup? Start With Genie walks you through it →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* LLC = Legal Business Entity */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              LLC = Legal Business Entity
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                You form an LLC with your <strong>state</strong>.<br />
                This gives you:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Legal protection (limited liability)</span>
                </li>
                <li className="flex items-start gap-2">
                  <BuildingIcon2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>The right to operate under a business name</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>The ability to open a business bank account</span>
                </li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  It does <strong>not</strong> give you permission to operate locally.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Business License = Permission to Operate */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Business License = Permission to Operate
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                You get a business license from your <strong>city or county</strong>.<br />
                This:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <FileTextIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Makes you legally registered to operate in your location</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>May be required before accepting payments or advertising</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPinIcon2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Often includes zoning rules and home-based business limits</span>
                </li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-700 font-medium">
                  <strong>One is state-level (LLC).</strong><br />
                  <strong>The other is local (license).</strong><br />
                  <strong>You often need both.</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* When You Might Only Need an LLC */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Might Only Need an LLC
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Freelancers working fully online</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Businesses in cities with no general license requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Pre-launch or planning phase (not actively selling yet)</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* When You Definitely Need Both */}
        <motion.section 
          className="py-12 px-4 bg-red-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Definitely Need Both
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Selling physical products or in-person services</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Renting a space or running from home</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Regulated industries (food, finance, childcare)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Collecting or remitting sales tax</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/can-i-sell-without-a-business-license" className="text-blue-600 hover:underline font-medium">
                  Can I sell without a license? →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bottom Line: Comparison Table */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Bottom Line:
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700"></th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">LLC</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Business License</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-gray-700">Filed with</td>
                    <td className="py-3 px-4 text-gray-600">State</td>
                    <td className="py-3 px-4 text-gray-600">City or County</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-gray-700">Purpose</td>
                    <td className="py-3 px-4 text-gray-600">Legal entity</td>
                    <td className="py-3 px-4 text-gray-600">Legal permission to operate</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">Required?</td>
                    <td className="py-3 px-4 text-gray-600">Often</td>
                    <td className="py-3 px-4 text-gray-600">Depends on location/industry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Want to Set It Up the Right Way */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Want to Set It Up the Right Way?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Start With Genie gives you a clean checklist.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start With Genie gives you a clean checklist →
              </Button>
            </Link>
            <div className="mt-6">
              <Link href="/when-to-get-business-license-llc" className="text-blue-600 hover:underline font-medium">
                Next: When to get your license after forming your LLC →
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
              <Link href="/do-you-need-a-license-with-an-llc">
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