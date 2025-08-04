"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon, Key, Car as CarIcon, UserCheck as UserCheckIcon2, Store, AlertTriangle as AlertTriangleIcon3, Package, AlertTriangle as AlertTriangleIcon4, DollarSign as DollarSignIcon, Truck, FileText as FileTextIcon4, Phone, MapPin as MapPinIcon2, Building as BuildingIcon2, Package as PackageIcon, DollarSign as DollarSignIcon2, Calendar as CalendarIcon2, AlertTriangle as AlertTriangleIcon5, ShoppingBag as ShoppingBagIcon, DollarSign as DollarSignIcon3, Shield as ShieldIcon3, CreditCard as CreditCardIcon2, TrendingUp as TrendingUpIcon2, AlertTriangle as AlertTriangleIcon6, AlertTriangle as AlertTriangleIcon7, Shield as ShieldIcon4, FileText as FileTextIcon5, DollarSign as DollarSignIcon4, Calendar as CalendarIcon3, Globe as GlobeIcon, User as UserIcon } from "lucide-react";
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

export default function CanIGetSuedAsAFreelancerPage() {
  return (
    <SeoPageLayout>
      <div id="can-i-get-sued-as-a-freelancer">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Can I Get Sued as a Freelancer Without an LLC?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Freelancing without an LLC? Here's what clients can legally sue you for, how to protect yourself, and when it's time to form an LLC.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Need to protect yourself? Start With Genie helps freelancers form an LLC fast →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Why This Matters More Than You Think */}
        <motion.section 
          className="py-12 px-4 bg-red-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why This Matters More Than You Think
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Freelancers don't expect to get sued—until they do.
              </p>
              <p className="text-gray-700 mb-6">
                But clients can sue you over:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon7 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Missed deadlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon7 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Project "disputes"</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon7 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Data leaks</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon7 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Refund disagreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon7 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>IP issues</span>
                </li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  And if you don't have an LLC, they're suing <strong>you personally.</strong>
                </p>
              </div>
              <div className="mt-4">
                <Link href="/what-can-clients-sue-freelancers-for" className="text-blue-600 hover:underline font-medium">
                  Here's what clients can actually sue you for →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Do Contracts Cover You */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Do Contracts Cover You?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Not fully. A contract helps, but it:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Doesn't stop a lawsuit from being filed</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Doesn't protect your personal assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Still requires you to defend yourself legally</span>
                </li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-700 font-medium">
                  The only thing that truly separates your personal life from your business risk is an LLC.
                </p>
              </div>
              <div className="mt-4">
                <Link href="/freelance-contract-lawsuit-protection" className="text-blue-600 hover:underline font-medium">
                  Read more: Do freelance contracts actually protect you? →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Real Examples of Freelancers Getting Sued */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Real Examples of Freelancers Getting Sued
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-start gap-3">
                  <UserIcon className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">A designer charged $8K for branding</h3>
                    <p className="text-gray-600">Client filed for a refund after launch.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-start gap-3">
                  <FileTextIcon5 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">A copywriter delivered work late</h3>
                    <p className="text-gray-600">The client lost a campaign and blamed them.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-start gap-3">
                  <GlobeIcon className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">A social media manager was accused of violating a platform's TOS</h3>
                    <p className="text-gray-600">None had an LLC. All were personally responsible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What an LLC Actually Does */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What an LLC Actually Does
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  It does:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ShieldIcon4 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Separates your business and personal assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldIcon4 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Makes it harder to sue you directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldIcon4 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Makes you look more professional and credible</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  It doesn't:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Protect you from <em>everything</em></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Stop you from being sued at all</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-700 font-medium">
                But it gives you a <strong>legal shield</strong>, especially when combined with contracts and basic insurance.
              </p>
            </div>
            <div className="mt-4">
              <Link href="/how-freelancers-can-legally-protect-themselves" className="text-blue-600 hover:underline font-medium">
                See how to protect yourself as a freelancer →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* When to Form an LLC as a Freelancer */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When to Form an LLC as a Freelancer
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <DollarSignIcon4 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You're making more than ~$1,000/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>You're working with clients in different states</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileTextIcon className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>You're signing long-term contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>You're using Stripe, PayPal, or business tools</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Want Legal Peace of Mind */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Want Legal Peace of Mind?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Start With Genie gives you a clean, step-by-step way to protect yourself in under an hour.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start your LLC today →
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