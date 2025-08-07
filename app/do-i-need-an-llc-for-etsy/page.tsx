import React from "react";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star, Building as BuildingIcon, FileText as FileTextIcon3, MapPin as MapPinIcon, Search, AlertCircle as AlertCircleIcon, Key, Car as CarIcon, UserCheck as UserCheckIcon2, Store, AlertTriangle as AlertTriangleIcon3, Package, AlertTriangle as AlertTriangleIcon4, DollarSign as DollarSignIcon, Truck, FileText as FileTextIcon4, Phone, MapPin as MapPinIcon2, Building as BuildingIcon2, Package as PackageIcon, DollarSign as DollarSignIcon2, Calendar as CalendarIcon2, AlertTriangle as AlertTriangleIcon5, ShoppingBag as ShoppingBagIcon, DollarSign as DollarSignIcon3, Shield as ShieldIcon3, CreditCard as CreditCardIcon2, TrendingUp as TrendingUpIcon2, AlertTriangle as AlertTriangleIcon6 } from "lucide-react";
import SeoPageLayout from "../../components/SeoPageLayout";
import { Button } from "../../components/ui/Button";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Do Etsy Sellers Need an LLC? Tax & Liability Guide 2025',
  description: 'Do you need an LLC for Etsy? Get expert advice on when Etsy sellers should form an LLC, tax requirements, liability protection, and business setup. Start your LLC for $49.',
  openGraph: {
    title: 'Do Etsy Sellers Need an LLC? Tax & Liability Guide 2025',
    description: 'Do you need an LLC for Etsy? Get expert advice on when Etsy sellers should form an LLC, tax requirements, liability protection, and business setup.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Do Etsy Sellers Need an LLC? Tax & Liability Guide 2025',
    description: 'Do you need an LLC for Etsy? Get expert advice on when Etsy sellers should form an LLC, tax requirements, liability protection, and business setup.',
  },
}

export default function DoINeedAnLLCForEtsyPage() {
  return (
    <SeoPageLayout>
      <div id="do-i-need-an-llc-for-etsy">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
          >
            I Made Money on Etsy — Do I Need an LLC?
          </h1>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Got your first Etsy sale and wondering if you need an LLC? Here's exactly when you do, when you don't, and how to set it up the smart way.
          </p>
          <div>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Want to set things up the smart way? Start With Genie shows you step-by-step →
              </Button>
            </Link>
          </div>
        </section>

        {/* What Happens When You Make Your First Sale */}
        <section 
          className="py-12 px-4 bg-blue-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What Happens When You Make Your First Sale
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Etsy doesn't care if you're legally set up. But the IRS and your state might.
              </p>
              <p className="text-gray-700 mb-6">
                As soon as you:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <DollarSignIcon3 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Make money</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Sell across state lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calculator className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Hit tax thresholds</span>
                </li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  ...you're technically a <strong>business.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Do You Need an LLC */}
        <section 
          className="py-12 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Do You <em>Need</em> an LLC?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Legally?
                </h3>
                <p className="text-red-700 font-bold text-xl">No.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Financially and long-term?
                </h3>
                <p className="text-green-700 font-bold text-xl">Probably.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border mt-8">
              <p className="text-gray-700 mb-6">
                LLCs give you:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <ShieldIcon3 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Protection if something goes wrong</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCardIcon2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>A way to open a business bank account</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUpIcon2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>More credibility when scaling</span>
                </li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-700 font-medium">
                  You can sell on Etsy as a sole proprietor—<strong>but you take on personal risk.</strong>
                </p>
              </div>
              <div className="mt-4">
                <Link href="/etsy-llc-vs-sole-prop" className="text-blue-600 hover:underline font-medium">
                  More on the legal differences here →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* When You Can Hold Off */}
        <section 
          className="py-12 px-4 bg-green-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Can Hold Off
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                You <em>might</em> not need an LLC right away if:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You're just testing things</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You're making under $1,000/year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Your city/state doesn't require a business license</span>
                </li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  But the second you:
                </p>
                <ul className="space-y-2 text-red-700 mt-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangleIcon6 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Want to open a Stripe account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangleIcon6 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>File taxes as a business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangleIcon6 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Work with vendors or contractors</span>
                  </li>
                </ul>
                <p className="text-red-700 font-medium mt-2">
                  ...it's time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Set It Up */}
        <section 
          className="py-12 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Set It Up (In Under an Hour)
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">1</div>
                <span className="text-gray-700">Pick your state (usually your home state)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">2</div>
                <span className="text-gray-700">File your LLC online</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">3</div>
                <span className="text-gray-700">Get your EIN from the IRS (free)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">4</div>
                <span className="text-gray-700">Open a business bank account</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm">5</div>
                <span className="text-gray-700">Link your Etsy account and go</span>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/checkout" className="text-blue-600 hover:underline font-medium">
                Step-by-step Genie setup here →
              </Link>
            </div>
          </div>
        </section>

        {/* Can You Lose Your Etsy Shop Without an LLC */}
        <section 
          className="py-12 px-4 bg-red-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Can You Lose Your Etsy Shop Without an LLC?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    No—
                  </h3>
                  <p className="text-gray-700">Your Etsy shop stays open</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    But you <em>can</em>:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangleIcon6 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Get hit with tax penalties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangleIcon6 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Mix up business and personal finances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangleIcon6 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Get sued personally if something goes wrong</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-700 font-medium">
                  The LLC exists to prevent that.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Word */}
        <section 
          className="py-16 px-4 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Final Word
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If you're serious about selling, protecting yourself, and growing—<strong>get the LLC.</strong><br />
              It's fast, cheap, and makes your life 10x easier down the line.
            </p>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start With Genie walks you through every step →
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 px-4 text-center bg-gray-50"
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
              <Link href="/do-i-need-an-ein-for-etsy">
                <Button variant="outline" className="text-lg px-8 py-3">
                  EIN Guide
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </SeoPageLayout>
  );
} 