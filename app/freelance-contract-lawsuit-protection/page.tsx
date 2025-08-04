"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon, Key, Car as CarIcon, UserCheck as UserCheckIcon2, Store, AlertTriangle as AlertTriangleIcon3, Package, AlertTriangle as AlertTriangleIcon4, DollarSign as DollarSignIcon, Truck, FileText as FileTextIcon4, Phone, MapPin as MapPinIcon2, Building as BuildingIcon2, Package as PackageIcon, DollarSign as DollarSignIcon2, Calendar as CalendarIcon2, AlertTriangle as AlertTriangleIcon5, ShoppingBag as ShoppingBagIcon, DollarSign as DollarSignIcon3, Shield as ShieldIcon3, CreditCard as CreditCardIcon2, TrendingUp as TrendingUpIcon2, AlertTriangle as AlertTriangleIcon6, AlertTriangle as AlertTriangleIcon7, Shield as ShieldIcon4, FileText as FileTextIcon5, DollarSign as DollarSignIcon4, Calendar as CalendarIcon3, Globe as GlobeIcon, User as UserIcon, AlertTriangle as AlertTriangleIcon8, FileText as FileTextIcon6, Shield as ShieldIcon5, CreditCard as CreditCardIcon3, AlertTriangle as AlertTriangleIcon9, FileText as FileTextIcon7, Shield as ShieldIcon6, AlertTriangle as AlertTriangleIcon10, DollarSign as DollarSignIcon5, Calendar as CalendarIcon4, CreditCard as CreditCardIcon4 } from "lucide-react";
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

export default function FreelanceContractLawsuitProtectionPage() {
  return (
    <SeoPageLayout>
      <div id="freelance-contract-lawsuit-protection">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Do Freelance Contracts Protect You from Lawsuits?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Freelance contracts are important—but do they protect you from being sued? Here's what they cover, what they don't, and how to protect yourself fully.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Want real protection? Start With Genie helps freelancers form LLCs fast →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* What a Contract Does Cover */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What a Contract Does Cover
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <FileTextIcon7 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Scope of work</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSignIcon5 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Payment terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CalendarIcon4 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Project timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldIcon6 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Ownership of deliverables</span>
                </li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-700 font-medium">✅ It helps avoid confusion</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-700 font-medium">✅ It's your first legal line of defense</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What a Contract Doesn't Cover */}
        <motion.section 
          className="py-12 px-4 bg-red-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What a Contract Doesn't Cover
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon10 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Actual legal liability</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon10 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Refund disputes</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon10 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Personal lawsuits</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon10 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Intellectual property errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon10 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Anything that goes beyond your agreement</span>
                </li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  You can still be sued—even with a perfect contract.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What Happens Without One */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What Happens Without One?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>No contract = the client controls the narrative</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>It's hard to prove what was agreed on</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You'll be at a disadvantage from day one</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* When You Still Need an LLC */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Still Need an LLC
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Even with a solid contract, an LLC gives you:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <ShieldIcon6 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Personal liability protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCardIcon4 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>A clean separation between personal and business assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <Building className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Legal credibility when things go south</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/can-i-get-sued-as-a-freelancer" className="text-blue-600 hover:underline font-medium">
                  Can you get sued without one? →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Want to Cover All Bases */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Want to Cover All Bases?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Use a contract + an LLC + clear communication.<br />
              Start With Genie helps you get protected in 30 minutes.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Get started →
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