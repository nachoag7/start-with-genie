"use client";
import React, { useState } from "react";
import { 
  DollarSign, 
  CheckCircle, 
  XCircle, 
  FileText, 
  BadgeCheck, 
  ScrollText, 
  Monitor,
  Quote,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Timer as TimerIcon,
  Calculator,
  Zap,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";



export default function CheapWayToStartLLCPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <>
      {/* STICKY NAVBAR */}
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

      <main className="bg-gray-50 min-h-screen">
        {/* HERO SECTION */}
        <section className="w-full max-w-4xl mx-auto px-4 pt-4 pb-6 text-center flex flex-col items-center justify-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 leading-tight mt-0">
            The Cheapest Way to Start an LLC in 2025
          </h1>
          <p className="text-lg sm:text-xl text-neutral-700 mb-4 max-w-3xl mx-auto">
            Start your LLC for $49—includes filing instructions, EIN help, and your operating agreement.
          </p>
          <div className="flex flex-col items-center w-full space-y-3">
            <Link href="/checkout" className="inline-block">
              <button className="bg-[#1E40AF] text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-[#1E3A8A] transition-all duration-200 hover:shadow-xl active:scale-95">
                Get Started Now →
              </button>
            </Link>
            
            {/* Trust badges with Lucide icons */}
            <div className="flex flex-col items-center space-y-2 px-4 w-full">
              <div className="flex items-center gap-3 text-gray-600">
                <DollarSign className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">No hidden fees</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">Everything included for $49</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <TimerIcon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">Most users finish in under 15 minutes</span>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="w-full max-w-4xl mx-auto px-4 py-8">
          
          {/* Want to Start an LLC Without Overspending? */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              Want to Start an LLC Without Overspending?
            </h2>
            <p className="text-lg text-neutral-700 mb-4">
              Most platforms like LegalZoom or ZenBusiness charge $199–$300+ with unnecessary extras. Genie shows users the leanest way to do it themselves, step-by-step.
            </p>
            <p className="text-neutral-700">
              <Link href="/compare" className="text-blue-600 hover:underline font-medium">Compare our approach with other services</Link>.
            </p>
          </div>

          {/* What Makes an LLC Expensive */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              What Makes an LLC Expensive (And How to Avoid It)
            </h2>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">Hidden filing service fees</span>
                  <p className="text-sm text-gray-600">Third-party services charge extra to file for you</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">Registered agent upcharges</span>
                  <p className="text-sm text-gray-600">Often unnecessary in many states</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">Paid EIN filing services</span>
                  <p className="text-sm text-gray-600">EIN is completely free from the IRS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">Confusing legal packages</span>
                  <p className="text-sm text-gray-600">Bundled services you don't actually need</p>
                </div>
              </div>
            </div>
            <p className="text-neutral-700">
              Genie eliminates all of these by guiding users to file directly. <Link href="/llc-myths-debunked" className="text-blue-600 hover:underline font-medium">Learn the truth about LLC formation</Link> and <Link href="/llc-under-100" className="text-blue-600 hover:underline font-medium">see how to do it for under $100</Link>.
            </p>
          </div>

          {/* The Real Costs to Form an LLC */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              The Real Costs to Form an LLC
            </h2>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <Calculator className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">State filing fee</span>
                  <p className="text-sm text-gray-600">Varies: $40–$300 depending on your state</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">Free EIN from the IRS</span>
                  <p className="text-sm text-gray-600">100% free federal tax identification number</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">Free or DIY Operating Agreement</span>
                  <p className="text-sm text-gray-600">Simple document you can create yourself</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calculator className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">Optional business licenses</span>
                  <p className="text-sm text-gray-600">May be required depending on your business type</p>
                </div>
              </div>
            </div>
            <p className="text-neutral-700">
              Genie includes everything you need for $49 flat—no upsells, no lawyers.
            </p>
          </div>

          {/* Step-by-Step */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              Step-by-Step: The Cheapest Way to Start an LLC
            </h2>
            <div className="space-y-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <span className="font-semibold text-neutral-900">Choose your state and check the filing fee</span>
                  <p className="text-sm text-gray-600">Research costs in your target state</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <span className="font-semibold text-neutral-900">File directly through your state's website</span>
                  <p className="text-sm text-gray-600">Use official state portals, not third-party services</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <span className="font-semibold text-neutral-900">Get your free EIN online</span>
                  <p className="text-sm text-gray-600">Apply at irs.gov for immediate results</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <span className="font-semibold text-neutral-900">Use Genie's operating agreement template</span>
                  <p className="text-sm text-gray-600">Ready-to-sign legal document included</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <span className="font-semibold text-neutral-900">Open a business bank account</span>
                  <p className="text-sm text-gray-600">Use your LLC documents and EIN</p>
                </div>
              </div>
            </div>
            <p className="text-neutral-700">
              <Link href="/start-llc-fast" className="text-blue-600 hover:underline font-medium">Get started quickly</Link> and learn about <Link href="/llc-vs-sole-proprietorship" className="text-blue-600 hover:underline font-medium">LLC vs sole proprietorship</Link>.
            </p>
          </div>

          {/* How Start With Genie Makes It Even Cheaper */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              How Start With Genie Makes It Even Cheaper
            </h2>
            <p className="text-lg text-neutral-700 mb-4">
              For just $49, Genie gives you:
            </p>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">State-specific filing instructions</span>
                  <p className="text-sm text-gray-600">Step-by-step guidance for your exact state</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">A free EIN guide</span>
                  <p className="text-sm text-gray-600">Walkthrough to get your free federal tax ID</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">A professional Operating Agreement</span>
                  <p className="text-sm text-gray-600">Ready-to-sign legal document</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">A dashboard to download everything</span>
                  <p className="text-sm text-gray-600">All documents and guides in one place</p>
                </div>
              </div>
            </div>
            <p className="text-neutral-700">
              This avoids $200–$300 packages from competitors. <Link href="/compare" className="text-blue-600 hover:underline font-medium">See how we compare</Link>.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              FAQ – Starting an LLC Cheaply
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Q: What's the cheapest state to form an LLC?</h3>
                <p className="text-neutral-700 mb-2">A: States like Kentucky, Mississippi, and Colorado have sub-$100 filing fees. <Link href="/llc-under-100" className="text-blue-600 hover:underline font-medium">See the cheapest states</Link>.</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Q: Do I need to pay for an EIN?</h3>
                <p className="text-neutral-700 mb-2">A: Never. It's 100% free from the IRS. <Link href="/ein-guide" className="text-blue-600 hover:underline font-medium">Get your free EIN guide</Link>.</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Q: Can I do this all myself?</h3>
                <p className="text-neutral-700 mb-2">A: Yes. Genie guides you step-by-step. You don't need a lawyer. <Link href="/llc-myths-debunked" className="text-blue-600 hover:underline font-medium">Learn the truth about LLC formation</Link>.</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Q: Is $49 really all I pay?</h3>
                <p className="text-neutral-700 mb-2">A: Yes. That includes every document and instruction. No subscriptions. <Link href="/start-llc-fast" className="text-blue-600 hover:underline font-medium">Get started quickly</Link>.</p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="text-center bg-blue-50 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
              Start your LLC the smart, affordable way.
            </h2>
            <p className="text-lg text-neutral-700 mb-6">
              Genie gives you everything you need—fast, clear, and no upsells.
            </p>
            <Link href="/checkout" className="inline-block">
              <button className="bg-[#1E40AF] text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-[#1E3A8A] transition-all duration-200 hover:shadow-xl active:scale-95">
                Launch Your LLC for $49 →
              </button>
            </Link>
          </div>

        </section>

        {/* EIN POPUP */}

      </main>

      <Footer />
    </>
  );
} 