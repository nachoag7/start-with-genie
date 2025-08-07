import React from "react";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book } from "lucide-react";
import SeoPageLayout from "../../components/SeoPageLayout";
import { Button } from "../../components/ui/Button";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LLC for Ebook Sales: Digital Publishing Protection Guide 2025',
  description: 'Do ebook authors need an LLC? Get expert advice on protecting intellectual property, tax benefits, and legal structure for digital publishing. Start your LLC for $49.',
  openGraph: {
    title: 'LLC for Ebook Sales: Digital Publishing Protection Guide 2025',
    description: 'Do ebook authors need an LLC? Get expert advice on protecting intellectual property, tax benefits, and legal structure for digital publishing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLC for Ebook Sales: Digital Publishing Protection Guide 2025',
    description: 'Do ebook authors need an LLC? Get expert advice on protecting intellectual property, tax benefits, and legal structure for digital publishing.',
  },
};

export default function LLCForEbookSalesPage() {
  return (
    <SeoPageLayout>
      <div id="llc-for-ebook-sales">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
          >
            LLC for Ebook Sales: Complete Setup Guide
          </h1>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Learn how to set up an LLC for your ebook business. Protect your intellectual property, optimize taxes, and build a professional brand for your digital publishing.
          </p>
          <div>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start Your LLC for $49 →
              </Button>
            </Link>
          </div>
        </section>

        {/* Why Ebook Authors Need LLCs */}
        <section 
          className="py-12 px-4 bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Ebook Authors Need LLCs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Liability Protection
                </h3>
                <p className="text-gray-700 mb-4">
                  Ebook authors face unique risks that make LLC protection essential.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protect against copyright claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Shield from defamation lawsuits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protect against refund disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Separate business and personal assets</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Tax Benefits
                </h3>
                <p className="text-gray-700 mb-4">
                  LLCs offer significant tax advantages for ebook authors.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Deduct business expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Pass-through taxation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Home office deductions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Equipment and software deductions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When You Need an LLC */}
        <section 
          className="py-12 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When Ebook Authors Need an LLC
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  You Should Form an LLC If:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You're earning $30,000+ annually from ebook sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You have significant personal assets to protect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You're writing controversial or sensitive content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You plan to expand into other publishing ventures</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  You Can Wait If:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>You're just starting out with minimal sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>You have no personal assets to protect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>You're writing non-controversial content only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>You're testing the market with a single book</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Ebook Authors */}
        <section 
          className="py-12 px-4 bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Key Benefits for Ebook Authors
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Legal Protection</h3>
                <p className="text-gray-700">
                  Shield your personal assets from lawsuits related to your content, copyright claims, or refund disputes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tax Advantages</h3>
                <p className="text-gray-700">
                  Deduct business expenses, home office costs, and equipment purchases to reduce your tax burden.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Brand</h3>
                <p className="text-gray-700">
                  Build credibility with readers, publishers, and business partners through a formal business structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Set Up Your LLC */}
        <section 
          className="py-12 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Set Up Your LLC for Ebook Sales
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Step 1: Choose Your Business Name
                </h3>
                <p className="text-gray-700 mb-4">
                  Select a name that reflects your author brand and is available in your state. Consider using your pen name or a creative business name.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Check availability in your state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ensure it's not too similar to existing businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consider your author brand and future books</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-green-600" />
                  Step 2: File Your LLC
                </h3>
                <p className="text-gray-700 mb-4">
                  File Articles of Organization with your state's business filing office. This officially creates your LLC.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Pay the filing fee (varies by state)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Provide your business address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Appoint a registered agent</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  Step 3: Get Your EIN
                </h3>
                <p className="text-gray-700 mb-4">
                  Apply for an Employer Identification Number (EIN) from the IRS. This is your business's tax ID number.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Apply online at IRS.gov (free)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use for business bank accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protect your personal SSN</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-orange-600" />
                  Step 4: Create Operating Agreement
                </h3>
                <p className="text-gray-700 mb-4">
                  Document how your LLC will operate, including ownership structure and management decisions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Define ownership percentages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Outline management structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Establish decision-making processes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Protect Your Ebook Business?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Start With Genie makes LLC formation simple and affordable. Get everything you need to protect your assets and maximize your tax benefits for just $49.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/checkout">
                <Button className="text-lg px-8 py-3">
                  Start Your Ebook LLC for $49 →
                </Button>
              </Link>
              <Link href="/how-to-start-an-llc">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Learn More About LLC Formation
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