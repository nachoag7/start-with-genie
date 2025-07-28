import React from "react";
import Link from "next/link";
import { Building2, CreditCard, FileText, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do You Need an LLC to Open a Business Bank Account?",
  description: "Wondering if you need an LLC to open a business bank account? Here's what you need to know before you walk into a bank or apply online.",
};

export default function LLCBankAccountPage() {
  return (
    <main className="bg-gray-50 min-h-screen w-full flex flex-col">
      {/* Home Page Nav Bar */}
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-2 md:px-0 sticky top-0 z-10 backdrop-blur-sm bg-neutral-50/80 border-b border-neutral-100">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 rounded-lg hover:bg-[#f2f2f2] transition-all duration-200 active:scale-95">
            <img src="/genie-preview.png" alt="Genie Logo" className="h-8 w-8 md:h-10 md:w-10 rounded-full opacity-90" />
          </Link>
          <span className="text-base md:text-lg font-medium text-neutral-900 tracking-tight">Start With Genie</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/compare">
            <span className="text-sm text-neutral-500 hover:text-neutral-900 transition">Compare</span>
          </Link>
          <Link href="/login">
            <span className="text-sm text-neutral-500 hover:text-neutral-900 transition">Sign In</span>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Do You Need an LLC to Open a Business Bank Account?</h1>
        <p className="text-lg text-neutral-700 mb-8">
          Opening a business bank account is one of the first real steps of launching your company. But do you actually need to form an LLC first? Here's what you should know.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
          Start Your LLC for $49
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Why Most Banks Ask for LLC Documents */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Building2 className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Why Most Banks Ask for LLC Documents</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">
          Most banks (even online ones like Mercury or Relay) ask for:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Your LLC formation documents (Articles of Organization)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Your EIN (Employer Identification Number)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Your operating agreement (sometimes optional)</span>
          </li>
        </ul>
        <p className="text-lg text-neutral-700 mb-4">
          Having an LLC makes your business more legitimate in the eyes of a bank and separates your personal and business finances.
        </p>
        <div className="mt-6">
          <Link href="/how-to-get-an-ein-for-your-llc" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            How to Get an EIN for Your LLC
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Can You Open a Business Bank Account Without an LLC */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CreditCard className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Can You Open a Business Bank Account Without an LLC?</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">
          Technically yes — sole proprietors can often use their SSN and business name to open an account.
        </p>
        <p className="text-lg text-neutral-700 mb-4">
          But:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <span>You'll likely be treated as a personal account</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <span>You won't have legal separation from your business</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <span>You may be restricted on which banks or platforms you can use</span>
          </li>
        </ul>
      </section>

      {/* Payment Platforms Prefer LLCs */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <ShieldCheck className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Payment Platforms Prefer LLCs</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">
          Services like Stripe, PayPal, and Square often expect a legal business entity, especially if you scale.
        </p>
        <p className="text-lg text-neutral-700 mb-4">
          Having an LLC:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Boosts trust</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Helps with verification</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Gives access to full platform features</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/compare" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            Compare LLC Filing Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* What You Actually Need to Open a Bank Account */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <FileText className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">What You Actually Need to Open a Bank Account</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">
          Once your LLC is formed, you'll typically need:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Your Articles of Organization</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Your EIN</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Operating Agreement (optional but recommended)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>A business address</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/how-to-start-an-llc" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            How to Start an LLC
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">The Bottom Line</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          You don't <em>need</em> an LLC to open a business bank account, but it makes everything easier, cleaner, and more scalable — especially if you want to keep your finances separate and build long-term.
        </p>
        <p className="text-lg text-neutral-700 mb-6">
          Genie gives you everything you need to get started:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Personalized LLC filing instructions</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>EIN setup help</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>A free operating agreement</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Instant dashboard access</span>
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-4">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Ready to open your business bank account the right way?</h3>
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-base md:text-lg font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
            Start Your LLC for $49
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-3">No upsells, just what you actually need.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
} 