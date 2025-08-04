"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon, Key, Car as CarIcon, UserCheck as UserCheckIcon2, Store, AlertTriangle as AlertTriangleIcon3, Package, AlertTriangle as AlertTriangleIcon4, DollarSign as DollarSignIcon, Truck, FileText as FileTextIcon4, Phone, MapPin as MapPinIcon2, Building as BuildingIcon2, Package as PackageIcon, DollarSign as DollarSignIcon2, Calendar as CalendarIcon2, AlertTriangle as AlertTriangleIcon5, ShoppingBag as ShoppingBagIcon, DollarSign as DollarSignIcon3, Shield as ShieldIcon3, CreditCard as CreditCardIcon2, TrendingUp as TrendingUpIcon2, AlertTriangle as AlertTriangleIcon6, AlertTriangle as AlertTriangleIcon7, Shield as ShieldIcon4, FileText as FileTextIcon5, DollarSign as DollarSignIcon4, Calendar as CalendarIcon3, Globe as GlobeIcon, User as UserIcon, AlertTriangle as AlertTriangleIcon8, FileText as FileTextIcon6, Shield as ShieldIcon5, CreditCard as CreditCardIcon3, AlertTriangle as AlertTriangleIcon9 } from "lucide-react";
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

export default function WhatCanClientsSueFreelancersForPage() {
  return (
    <SeoPageLayout>
      <div id="what-can-clients-sue-freelancers-for">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            What Can Clients Actually Sue Freelancers For?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Wondering what clients can legally sue freelancers for? Here's what you're liable for—and how to protect yourself before it happens.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Need a legal shield? Form your LLC with Start With Genie →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Common Legal Risks for Freelancers */}
        <motion.section 
          className="py-12 px-4 bg-red-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Common Legal Risks for Freelancers
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Clients can sue freelancers for:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon8 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Missed deadlines or project abandonment</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon8 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Breach of contract</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon8 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Copyright or IP violations</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon8 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Refund or payment disputes</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon8 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Defamation, privacy breaches, or negligence</span>
                </li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  Even if you didn't do anything malicious—you're still legally exposed.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Real-World Scenarios */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Real-World Scenarios
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-start gap-3">
                  <UserIcon className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">A designer who used unlicensed fonts</h3>
                    <p className="text-gray-600">Got sued for copyright infringement</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-start gap-3">
                  <MonitorIcon className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">A developer who delivered broken code</h3>
                    <p className="text-gray-600">Client sued for damages and lost revenue</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-start gap-3">
                  <FileTextIcon6 className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">A content writer accused of plagiarism</h3>
                    <p className="text-gray-600">Faced legal action for copyright violation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 font-medium">
                All got sued. None had an LLC.
              </p>
            </div>
            <div className="mt-4">
              <Link href="/can-i-get-sued-as-a-freelancer" className="text-blue-600 hover:underline font-medium">
                Should you form one? →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* How to Reduce the Risk */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Reduce the Risk
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <FileTextIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Always use a signed contract</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldIcon5 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use your own original work</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Get clear on deliverables and deadlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCardIcon3 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Separate business from personal accounts</span>
                </li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-700 font-medium">
                  And yes—<strong>form an LLC</strong> if you want real protection.
                </p>
              </div>
              <div className="mt-4">
                <Link href="/how-freelancers-can-legally-protect-themselves" className="text-blue-600 hover:underline font-medium">
                  How to legally protect yourself as a freelancer →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Protect Yourself Before It Happens */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Protect Yourself Before It Happens
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Start With Genie gives you a clean path to protection.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start With Genie gives you a clean path to protection →
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
              <Link href="/can-i-get-sued-as-a-freelancer">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Risk Assessment
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