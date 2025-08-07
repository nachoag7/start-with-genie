import React from "react";
import Link from "next/link";
import { Building2, Scale, Calculator, Users, ArrowRight, Zap, CheckCircle, XCircle } from "lucide-react";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLC vs C Corporation: Tax Benefits & Business Structure Guide 2025",
  description: "Should you form an LLC or C Corporation? Compare liability protection, tax benefits, setup costs, and compliance requirements. Get expert advice for your business. Start your LLC for $49.",
  openGraph: {
    title: "LLC vs C Corporation: Tax Benefits & Business Structure Guide 2025",
    description: "Should you form an LLC or C Corporation? Compare liability protection, tax benefits, setup costs, and compliance requirements.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "LLC vs C Corporation: Tax Benefits & Business Structure Guide 2025",
    description: "Should you form an LLC or C Corporation? Compare liability protection, tax benefits, setup costs, and compliance requirements.",
  },
};

export default function LLCvsCCorpPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">LLC vs C Corporation: What's Right for Your Business?</h1>
        <p className="text-lg text-neutral-700 mb-8">
          Wondering if you should form an LLC or a C Corporation? Here's a clear breakdown of the pros, cons, taxes, and filing process for each.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
          Start Your LLC for $49
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* What's the Difference Between an LLC and a C Corp */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Scale className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">What's the Difference Between an LLC and a C Corp?</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          Both LLCs and C Corporations are legal business structures, but they work very differently:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">LLC (Limited Liability Company)</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Pass-through taxation (profits flow to owners)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Simpler management structure</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Flexible ownership rules</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Easier to form and maintain</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">C Corporation</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Double taxation (corporate + personal)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Formal board of directors required</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Can issue stock to raise capital</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>More complex compliance requirements</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* LLC Pros and Cons */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">LLC Pros and Cons</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Pros</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Pass-through taxation (no double taxation)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Simpler formation and maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Flexible management structure</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Personal liability protection</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Cons</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Limited ability to raise capital</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Can't issue stock</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>May not be ideal for large-scale growth</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* C Corporation Pros and Cons */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Building2 className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">C Corporation Pros and Cons</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Pros</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Can issue stock to raise capital</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Ideal for large-scale growth</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Can go public (IPO)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Strong credibility with investors</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Cons</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Double taxation (corporate + personal)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Complex formation and compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Required board of directors</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>More expensive to maintain</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Taxes: LLC vs C Corp */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Calculator className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Taxes: LLC vs C Corp</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">LLC Taxation</h3>
            <p className="text-neutral-700 mb-3">Pass-through taxation means:</p>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Profits flow directly to owners</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>No corporate-level tax</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Owners pay personal income tax</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">C Corp Taxation</h3>
            <p className="text-neutral-700 mb-3">Double taxation means:</p>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Corporation pays corporate tax</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Owners pay personal tax on dividends</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Higher overall tax burden</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Which Is Best for Small Businesses or Startups */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Users className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Which Is Best for Small Businesses or Startups?</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          For most small businesses and startups, an LLC is the better choice because:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Simpler formation and maintenance</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Lower tax burden (no double taxation)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>More flexible management structure</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Easier to convert to C Corp later if needed</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/how-to-start-an-llc" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            How to Start an LLC
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* How to Switch from LLC to C Corp */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <ArrowRight className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">How to Switch from LLC to C Corp</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          If you start with an LLC and later need C Corp benefits, you can convert:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>File Articles of Incorporation</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Transfer LLC assets to the corporation</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Set up board of directors</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Update tax elections with the IRS</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/compare" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            Compare LLC Filing Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 lg:p-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Ready to form your LLC?</h3>
          <p className="text-lg text-neutral-700 mb-6">Most small businesses choose LLCs for their simplicity and tax benefits.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-base md:text-lg font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
            Start Your LLC for $49
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-3">Includes step-by-step filing, EIN help, and your documents.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
} 