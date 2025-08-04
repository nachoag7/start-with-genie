"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon, Key, Car as CarIcon, UserCheck as UserCheckIcon2, Store, AlertTriangle as AlertTriangleIcon3, Package, AlertTriangle as AlertTriangleIcon4, DollarSign as DollarSignIcon, Truck, FileText as FileTextIcon4, Phone, MapPin as MapPinIcon2, Building as BuildingIcon2, Package as PackageIcon, DollarSign as DollarSignIcon2, Calendar as CalendarIcon2, AlertTriangle as AlertTriangleIcon5 } from "lucide-react";
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

export default function WhenToGetBusinessLicenseLLCPage() {
  return (
    <SeoPageLayout>
      <div id="when-to-get-business-license-llc">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            When Should You Get a Business License After Forming an LLC?
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Wondering when to get a business license after forming your LLC? Here's the smart timing, what to check, and how to stay compliant.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Want to simplify the whole process? Start With Genie makes it easy →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Forming the LLC Comes First */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Forming the LLC Comes First
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Your first step is to:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>File your LLC with the state</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Get your EIN</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Open your business bank account</span>
                </li>
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-medium">
                  <strong>No license is required yet.</strong><br />
                  That part comes when you're ready to actually operate.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* When to Get the License */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When to Get the License
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <PackageIcon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold">If you're selling online or in-person</h3>
                </div>
                <p className="text-gray-700">Before your first sale</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold">If you're operating in a local space or from home</h3>
                </div>
                <p className="text-gray-700">Before you advertise or open</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSignIcon2 className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-semibold">If you're hitting income thresholds</h3>
                </div>
                <p className="text-gray-700">When your state/city requires reporting</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Know When It's Time */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Know When It's Time
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Check your city or county website</h3>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Search for:</h3>
                </div>
                <p className="text-gray-700">
                  <code className="bg-gray-100 px-2 py-1 rounded">business license + [your city/state]</code>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Look for:</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Home className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Home-based exemptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileTextIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>General business license requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Industry-specific permits</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-700 font-medium">
                <strong>Example:</strong> Many cities only require licenses after $2,000–$5,000 in revenue.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Can You Delay It */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Can You Delay It?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Sometimes.<br />
                But delaying too long can result in:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon5 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Fines</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon5 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Account freezes (Stripe, PayPal, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangleIcon5 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Losing access to legal protections</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Smart Order of Operations */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Smart Order of Operations
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">1</div>
                <span className="text-gray-700">Form your LLC</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">2</div>
                <span className="text-gray-700">Get your EIN</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">3</div>
                <span className="text-gray-700">Open your bank account</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">4</div>
                <span className="text-gray-700">Check licensing requirements</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">5</div>
                <span className="text-gray-700">Apply before selling</span>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/checkout" className="text-blue-600 hover:underline font-medium">
                Need a step-by-step? Start With Genie has you covered →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Cluster Links */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Related Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/can-i-sell-without-a-business-license" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-700 mb-2">Can I sell without a license?</h3>
                <p className="text-gray-600 text-sm">When you can and can't sell legally</p>
              </Link>
              <Link href="/do-you-need-a-license-with-an-llc" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-700 mb-2">Do I need a license with my LLC?</h3>
                <p className="text-gray-600 text-sm">Understanding the difference</p>
              </Link>
              <Link href="/llc-vs-business-license" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-700 mb-2">LLC vs license explained</h3>
                <p className="text-gray-600 text-sm">What each one does</p>
              </Link>
              <Link href="/start-llc-without-business-license" className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-700 mb-2">Start an LLC without a license?</h3>
                <p className="text-gray-600 text-sm">When it's possible and legal</p>
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
              <Link href="/llc-vs-business-license">
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