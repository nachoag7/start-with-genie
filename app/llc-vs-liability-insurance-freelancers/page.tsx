"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon, Key, Car as CarIcon, UserCheck as UserCheckIcon2, Store, AlertTriangle as AlertTriangleIcon3, Package, AlertTriangle as AlertTriangleIcon4, DollarSign as DollarSignIcon, Truck, FileText as FileTextIcon4, Phone, MapPin as MapPinIcon2, Building as BuildingIcon2, Package as PackageIcon, DollarSign as DollarSignIcon2, Calendar as CalendarIcon2, AlertTriangle as AlertTriangleIcon5, ShoppingBag as ShoppingBagIcon, DollarSign as DollarSignIcon3, Shield as ShieldIcon3, CreditCard as CreditCardIcon2, TrendingUp as TrendingUpIcon2, AlertTriangle as AlertTriangleIcon6, AlertTriangle as AlertTriangleIcon7, Shield as ShieldIcon4, FileText as FileTextIcon5, DollarSign as DollarSignIcon4, Calendar as CalendarIcon3, Globe as GlobeIcon, User as UserIcon, AlertTriangle as AlertTriangleIcon8, FileText as FileTextIcon6, Shield as ShieldIcon5, CreditCard as CreditCardIcon3, AlertTriangle as AlertTriangleIcon9, FileText as FileTextIcon7, Shield as ShieldIcon6, AlertTriangle as AlertTriangleIcon10, DollarSign as DollarSignIcon5, Calendar as CalendarIcon4, CreditCard as CreditCardIcon4, Shield as ShieldIcon7, FileText as FileTextIcon8, CreditCard as CreditCardIcon5, BookOpen as BookOpenIcon, Shield as ShieldIcon8, Shield as ShieldIcon9, AlertTriangle as AlertTriangleIcon11, DollarSign as DollarSignIcon6, CreditCard as CreditCardIcon6, AlertTriangle as AlertTriangleIcon12, DollarSign as DollarSignIcon7, CreditCard as CreditCardIcon7 } from "lucide-react";
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

export default function LLCVsLiabilityInsuranceFreelancersPage() {
  return (
    <SeoPageLayout>
      <div id="llc-vs-liability-insurance-freelancers">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            LLC vs Liability Insurance for Freelancers: What's Better?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Not sure if you need an LLC, insurance, or both? Here's how each protects freelancers—and when to use one or the other.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start With Genie makes the LLC part simple →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* What an LLC Protects */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What an LLC Protects
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    It does:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ShieldIcon9 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Separates your personal + business life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldIcon9 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Limits legal risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CreditCardIcon6 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Required to open business accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSignIcon6 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Helps with taxes and client credibility</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    But:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangleIcon11 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Doesn't protect from <em>everything</em></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangleIcon11 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Won't stop someone from filing a lawsuit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What Liability Insurance Covers */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What Liability Insurance Covers
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    It does:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <DollarSignIcon7 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Helps cover legal costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldIcon9 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Covers client claims, mistakes, injuries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CreditCardIcon7 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Can be affordable with the right provider</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    But:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangleIcon12 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Doesn't replace an LLC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangleIcon12 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Won't separate your assets legally</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Which Should You Get First */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Which Should You Get First?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Situation</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-gray-700">You want legal structure</td>
                    <td className="py-3 px-4 text-gray-600">→ Start with an LLC</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-gray-700">You work in a risky field</td>
                    <td className="py-3 px-4 text-gray-600">→ Add insurance early</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">You want full protection</td>
                    <td className="py-3 px-4 text-gray-600">→ Do both, but don't wait</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Link href="/can-i-get-sued-as-a-freelancer" className="text-blue-600 hover:underline font-medium">
                LLC protects your base →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Protecting Yourself Doesn't Have to Be Hard */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Protecting Yourself Doesn't Have to Be Hard
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Start With Genie gives you the fast, clean way to get legal protection today.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Form your LLC in minutes →
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
              Ready to Protect Yourself?
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
              <Link href="/how-freelancers-can-legally-protect-themselves">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Protection Guide
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