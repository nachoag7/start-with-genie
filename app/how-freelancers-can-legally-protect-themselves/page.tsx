"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon, Key, Car as CarIcon, UserCheck as UserCheckIcon2, Store, AlertTriangle as AlertTriangleIcon3, Package, AlertTriangle as AlertTriangleIcon4, DollarSign as DollarSignIcon, Truck, FileText as FileTextIcon4, Phone, MapPin as MapPinIcon2, Building as BuildingIcon2, Package as PackageIcon, DollarSign as DollarSignIcon2, Calendar as CalendarIcon2, AlertTriangle as AlertTriangleIcon5, ShoppingBag as ShoppingBagIcon, DollarSign as DollarSignIcon3, Shield as ShieldIcon3, CreditCard as CreditCardIcon2, TrendingUp as TrendingUpIcon2, AlertTriangle as AlertTriangleIcon6, AlertTriangle as AlertTriangleIcon7, Shield as ShieldIcon4, FileText as FileTextIcon5, DollarSign as DollarSignIcon4, Calendar as CalendarIcon3, Globe as GlobeIcon, User as UserIcon, AlertTriangle as AlertTriangleIcon8, FileText as FileTextIcon6, Shield as ShieldIcon5, CreditCard as CreditCardIcon3, AlertTriangle as AlertTriangleIcon9, FileText as FileTextIcon7, Shield as ShieldIcon6, AlertTriangle as AlertTriangleIcon10, DollarSign as DollarSignIcon5, Calendar as CalendarIcon4, CreditCard as CreditCardIcon4, Shield as ShieldIcon7, FileText as FileTextIcon8, CreditCard as CreditCardIcon5, BookOpen as BookOpenIcon, Shield as ShieldIcon8 } from "lucide-react";
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

export default function HowFreelancersCanLegallyProtectThemselvesPage() {
  return (
    <SeoPageLayout>
      <div id="how-freelancers-can-legally-protect-themselves">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            How to Legally Protect Yourself as a Freelancer
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Freelancing without protection is risky. Here's how to legally protect yourself with an LLC, contracts, insurance, and smart systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start With Genie helps freelancers protect themselves in minutes →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Step 1: Form an LLC */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Step 1: Form an LLC
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <ShieldIcon7 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Separates personal from business assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <Building className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Gives you legal legitimacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldIcon8 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Makes it harder to sue you directly</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/can-i-get-sued-as-a-freelancer" className="text-blue-600 hover:underline font-medium">
                  What an LLC really protects →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Step 2: Use Contracts for Every Project */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Step 2: Use Contracts for Every Project
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Even short gigs need something written:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <FileTextIcon8 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Scope</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Payment terms</span>
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Use a standard contract and adjust as needed.
              </p>
              <div className="mt-4">
                <Link href="/freelance-contract-lawsuit-protection" className="text-blue-600 hover:underline font-medium">
                  What contracts really cover →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Step 3: Set Up a Business Bank Account */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Step 3: Set Up a Business Bank Account
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Don't mix personal + business money.
              </p>
              <p className="text-gray-700 mb-6">
                Use your LLC and EIN to open a clean account.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-700 font-medium">
                  This keeps your finances clean and makes tax time much easier.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Step 4: Keep Records */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Step 4: Keep Records
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Invoices, receipts, revisions, approvals—keep them all.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-700 font-medium">
                  If something goes wrong, documentation is everything.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Step 5: Optional: Get Liability Insurance */}
        <motion.section 
          className="py-12 px-4 bg-purple-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Step 5: Optional: Get Liability Insurance
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                For added protection, especially in high-risk fields (design, dev, video, etc.)
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-purple-700 font-medium">
                  This is extra protection on top of your LLC.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stay Protected the Smart Way */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Stay Protected the Smart Way
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Start With Genie makes this simple. LLC, EIN, and clarity—all in one place.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Get protected today →
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
              <Link href="/llc-vs-liability-insurance-freelancers">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Insurance Guide
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