import React from "react";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard } from "lucide-react";
import SeoPageLayout from "../../components/SeoPageLayout";
import { Button } from "../../components/ui/Button";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LLC for Upwork Freelancers: Protection & Tax Guide 2025',
  description: 'Do Upwork freelancers need an LLC? Get expert advice on liability protection, tax benefits, and when to form an LLC for your freelance business. Start your LLC for $49.',
  openGraph: {
    title: 'LLC for Upwork Freelancers: Protection & Tax Guide 2025',
    description: 'Do Upwork freelancers need an LLC? Get expert advice on liability protection, tax benefits, and when to form an LLC for your freelance business.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLC for Upwork Freelancers: Protection & Tax Guide 2025',
    description: 'Do Upwork freelancers need an LLC? Get expert advice on liability protection, tax benefits, and when to form an LLC for your freelance business.',
  },
}

export default function LLCForUpworkFreelancersPage() {
  return (
    <SeoPageLayout>
      <div id="llc-for-upwork-freelancers">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
          >
            Do You Need an LLC for Freelancing on Upwork?
          </h1>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Upwork freelancers often wonder if an LLC is worth the investment. Here's what actually matters for your situation.
          </p>
          <div>
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Start Your LLC for $49 →
              </Button>
            </Link>
          </div>
        </section>

        {/* What Upwork Freelancers Need to Know */}
        <section 
          className="py-12 px-4 bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What Upwork Freelancers Need to Know About LLCs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Upwork's Payment Structure
                </h3>
                <p className="text-gray-700 mb-4">
                  Upwork handles payments through their platform, which means you're already getting some protection. They issue 1099-K forms for tax purposes, and many freelancers operate as sole proprietors without issues.
                </p>
                <p className="text-gray-700">
                  However, as your income grows or you start working with larger clients outside of Upwork, an LLC becomes more valuable for liability protection and tax flexibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-green-600" />
                  When an LLC Makes Sense
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You're earning $50,000+ annually from freelancing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You work with clients outside of Upwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You want to build business credit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You have significant personal assets to protect</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Upwork Freelancers */}
        <section 
          className="py-12 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Benefits of an LLC for Upwork Freelancers
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Liability Protection</h3>
                <p className="text-gray-700">
                  Even though Upwork provides some protection, an LLC protects your personal assets if a client sues you or if you face other legal issues outside the platform.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Tax Advantages</h3>
                <p className="text-gray-700">
                  LLCs offer more tax flexibility than sole proprietorships. You can deduct business expenses more easily and potentially save on self-employment taxes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CreditCard className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Business Credit</h3>
                <p className="text-gray-700">
                  An LLC helps you build business credit separate from your personal credit, which can be valuable for future business loans or credit cards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When You Don't Need an LLC */}
        <section 
          className="py-12 px-4 bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              When You Don't Need an LLC (Yet)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Just Starting Out
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're new to freelancing on Upwork and earning less than $20,000 annually, you can start as a sole proprietor. Focus on building your skills and client base first.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Keep your startup costs low</li>
                  <li>• Focus on building your portfolio</li>
                  <li>• Learn the business side gradually</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Only Upwork Income
                </h3>
                <p className="text-gray-700 mb-4">
                  If all your income comes through Upwork and you don't have significant personal assets, the platform's built-in protections might be sufficient for now.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Upwork handles payment protection</li>
                  <li>• Platform provides dispute resolution</li>
                  <li>• Simpler tax filing as sole proprietor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Considerations */}
        <section 
          className="py-12 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Tax Considerations for Upwork Freelancers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Sole Proprietorship Taxes
                </h3>
                <p className="text-gray-700 mb-4">
                  As a sole proprietor, you'll pay self-employment taxes (15.3%) on your Upwork income. You can deduct business expenses, but the process is straightforward.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• File Schedule C with your personal tax return</li>
                  <li>• Pay quarterly estimated taxes</li>
                  <li>• Deduct business expenses (software, equipment, etc.)</li>
                  <li>• Simpler record-keeping</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  LLC Tax Benefits
                </h3>
                <p className="text-gray-700 mb-4">
                  LLCs offer more tax flexibility. You can choose pass-through taxation or elect to be taxed as an S-Corp for potential savings.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Same tax rate as sole proprietorship initially</li>
                  <li>• More business expense deductions</li>
                  <li>• Potential S-Corp election for savings</li>
                  <li>• Better separation of business and personal finances</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Decide */}
        <section 
          className="py-12 px-4 bg-blue-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Decide If You Need an LLC
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Ask Yourself These Questions:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Income & Growth</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Are you earning $50,000+ annually?</li>
                      <li>• Do you expect your income to grow significantly?</li>
                      <li>• Are you planning to hire contractors or employees?</li>
                      <li>• Do you work with clients outside of Upwork?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Asset Protection</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Do you have significant personal assets?</li>
                      <li>• Are you concerned about liability risks?</li>
                      <li>• Do you work in a high-risk industry?</li>
                      <li>• Do you want to build business credit?</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  If you answered "yes" to most of these questions, an LLC is likely worth the investment. Our <Link href="/freelancer-llc-setup-guide" className="text-blue-600 hover:underline">step-by-step setup guide</Link> can help you get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 px-4 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Ready to Protect Your Upwork Business?
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
              <Link href="/llc-for-shopify-stores">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Learn About Shopify LLCs
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