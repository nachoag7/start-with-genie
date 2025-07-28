import React from "react";
import Link from "next/link";
import { FileText, CreditCard, ShieldCheck, CheckCircle, AlertCircle, ArrowRight, Zap } from "lucide-react";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLC Documents You Actually Need to Start Your Business",
  description: "Confused about what documents you need to form an LLC? Here's a clear, step-by-step guide to everything you'll need to file, open accounts, and stay compliant.",
};

export default function LLCDocumentsRequiredPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">LLC Documents You Actually Need to Start Your Business</h1>
        <p className="text-lg text-neutral-700 mb-8">
          Confused about what documents you need to form an LLC? Here's a clear, step-by-step guide to everything you'll need to file, open accounts, and stay compliant.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
          Start Your LLC for $49
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* What Documents Are Required to Form an LLC */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <FileText className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">What Documents Are Required to Form an LLC?</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          When forming an LLC, you'll typically need the following core documents:
        </p>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Articles of Organization</h3>
            <p className="text-neutral-700 mb-3">
              The official document filed with your state to create the LLC. Also called a Certificate of Formation in some states.
            </p>
            <Link href="/how-to-start-an-llc" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              How to Start an LLC
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">EIN (Employer Identification Number)</h3>
            <p className="text-neutral-700 mb-3">
              Issued by the IRS — it's required to open a business bank account, hire employees, or pay taxes.
            </p>
            <Link href="/how-to-get-an-ein-for-your-llc" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              How to Get an EIN for Your LLC
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Operating Agreement</h3>
            <p className="text-neutral-700 mb-3">
              Not always required, but highly recommended — even for single-member LLCs. Defines ownership, responsibilities, and operating procedures.
            </p>
            <Link href="/do-you-need-an-operating-agreement" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              Do You Need an Operating Agreement?
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Optional But Helpful LLC Documents */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <ShieldCheck className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Optional But Helpful LLC Documents</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">Registered Agent Consent Form</h3>
              <p className="text-neutral-700 mb-2">Some states require this to confirm your registered agent has agreed to accept legal documents.</p>
              <Link href="/what-is-a-registered-agent" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                What Is a Registered Agent?
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">LLC Membership Certificates</h3>
              <p className="text-neutral-700">Optional for internal use, especially with multiple owners — can document ownership share.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">Initial Resolutions</h3>
              <p className="text-neutral-700">Internal notes for opening bank accounts or approving key actions — not legally required but useful for recordkeeping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Need After Formation */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CreditCard className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">What You'll Need After Formation</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">
          Once your LLC is officially formed, you'll likely need:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Your filed Articles of Organization</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Your EIN letter from the IRS</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Your Operating Agreement</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>A business bank account</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/llc-bank-account" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            Do You Need an LLC to Open a Business Bank Account?
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why Most Founders Get Stuck */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <AlertCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Why Most Founders Get Stuck</h2>
        </div>
        <p className="text-lg text-neutral-700">
          It's not the legal forms that trip people up — it's the messy process. Many sites try to upsell every document, and others don't tell you what you really need.
        </p>
      </section>

      {/* Genie Gives You All of It */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Genie Gives You All of It</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          Start With Genie gives you everything you need in one place:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Step-by-step filing instructions for your state</span>
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
            <span>A dashboard to keep everything organized</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>No upsells, no delays</span>
          </li>
        </ul>
        
        {/* CTA Section */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
            Start Your LLC for $49
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-3">The fast, clean way to get your LLC documents done — with confidence.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
} 