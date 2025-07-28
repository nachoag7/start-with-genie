"use client";
import React, { useState, useEffect } from "react";
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
  MapPin,
  Calculator,
  Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import EINGuidePopup from "../../components/EINGuidePopup";
import { useEINPopup } from "../../hooks/useEINPopup";

export default function LLCUnder100Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { showPopup, closePopup, markEmailSubmitted } = useEINPopup();

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
            How to Get an LLC for Less Than $100
          </h1>
          <p className="text-lg sm:text-xl text-neutral-700 mb-4 max-w-3xl mx-auto">
            Most Genie users launch their LLC in under 15 minutes.
          </p>
          <div className="flex flex-col items-center w-full space-y-3">
            <Link href="/checkout" className="inline-block">
              <button className="bg-[#1E40AF] text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-[#1E3A8A] transition-all duration-200 hover:shadow-xl active:scale-95">
                Start for $49 →
              </button>
            </Link>
            
            {/* Trust badges with Lucide icons */}
            <div className="flex flex-col items-center space-y-2 px-4 w-full">
              <div className="flex items-center gap-3 text-gray-600">
                <DollarSign className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">Transparent pricing</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">No hidden fees or upsells</span>
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
            
            {/* Yes—You Can Get an LLC for Under $100 */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Yes—You Can Get an LLC for Under $100
              </h2>
              <p className="text-lg text-neutral-700 mb-4">
                It's possible to legally form your LLC for under $100 if you choose the right state and avoid unnecessary add-ons. Unlike platforms with hidden fees and upsells, Genie provides clear instructions and tools for one flat fee.
              </p>
              <p className="text-neutral-700">
                Learn more about <Link href="/cheap-way-to-start-llc" className="text-blue-600 hover:underline font-medium">budget-friendly LLC formation</Link>.
              </p>
            </div>

            {/* Cheapest States to Form an LLC */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Cheapest States to Form an LLC (2025)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Kentucky</span>
                    <span className="text-green-600 font-medium ml-2">$40</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Mississippi</span>
                    <span className="text-green-600 font-medium ml-2">$50</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Arizona</span>
                    <span className="text-green-600 font-medium ml-2">$50</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Colorado</span>
                    <span className="text-green-600 font-medium ml-2">$50</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Missouri</span>
                    <span className="text-green-600 font-medium ml-2">$50</span>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700">
                Genie provides instructions for <strong>all 50 states</strong>. <Link href="/start-llc-fast" className="text-blue-600 hover:underline font-medium">Get started quickly</Link>.
              </p>
            </div>

            {/* What You Don't Need to Pay For */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                What You Don't Need to Pay For
              </h2>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">LegalZoom-style packages</span>
                    <p className="text-sm text-gray-600">Overpriced bundled services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Registered agent services</span>
                    <p className="text-sm text-gray-600">Unless required by your state</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Paid EIN services</span>
                    <p className="text-sm text-gray-600">EIN is free from the IRS</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Unnecessary add-ons</span>
                    <p className="text-sm text-gray-600">Extra services you don't need</p>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700">
                Genie cuts through the noise. <Link href="/compare" className="text-blue-600 hover:underline font-medium">Compare with other services</Link> and <Link href="/llc-myths-debunked" className="text-blue-600 hover:underline font-medium">learn the truth about LLC formation</Link>.
              </p>
            </div>

            {/* What You Actually Need */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                What You Actually Need
              </h2>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">File Articles of Organization</span>
                    <p className="text-sm text-gray-600">Basic formation document</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Get a free EIN from the IRS</span>
                    <p className="text-sm text-gray-600">Federal tax identification number</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Create an Operating Agreement</span>
                    <p className="text-sm text-gray-600">Internal business rules</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Set up a bank account</span>
                    <p className="text-sm text-gray-600">Separate business finances</p>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700">
                Genie gives you everything above. <Link href="/ein-guide" className="text-blue-600 hover:underline font-medium">Get your free EIN guide</Link> and <Link href="/compare" className="text-blue-600 hover:underline font-medium">see how we compare</Link>.
              </p>
            </div>

            {/* Step-by-Step */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Step-by-Step: How to Do It
              </h2>
              <div className="space-y-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <span className="font-semibold text-neutral-900">Pick a low-cost state</span>
                    <p className="text-sm text-gray-600">Choose from states with filing fees under $100</p>
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
                    <span className="font-semibold text-neutral-900">Get a free EIN from the IRS</span>
                    <p className="text-sm text-gray-600">Apply online at irs.gov for immediate results</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <span className="font-semibold text-neutral-900">Use Genie's Operating Agreement</span>
                    <p className="text-sm text-gray-600">Ready-to-sign legal document included</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">5</div>
                  <div>
                    <span className="font-semibold text-neutral-900">Open your business bank account</span>
                    <p className="text-sm text-gray-600">Use your LLC documents and EIN</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">6</div>
                  <div>
                    <span className="font-semibold text-neutral-900">Follow local compliance rules (if needed)</span>
                    <p className="text-sm text-gray-600">Check your state's ongoing requirements</p>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700">
                Learn about <Link href="/llc-vs-sole-proprietorship" className="text-blue-600 hover:underline font-medium">LLC vs sole proprietorship</Link> to understand the benefits.
              </p>
            </div>

            {/* Why Start With Genie Works */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Why Start With Genie Works for Budget-Friendly LLCs
              </h2>
              <p className="text-lg text-neutral-700 mb-4">
                Genie provides everything you need for budget-friendly LLC formation:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Personalized state instructions</span>
                    <p className="text-sm text-gray-600">Step-by-step guidance for your specific state</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">EIN setup guide</span>
                    <p className="text-sm text-gray-600">Walkthrough to get your free federal tax ID</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Operating agreement</span>
                    <p className="text-sm text-gray-600">Ready-to-sign legal document</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Clean dashboard to download everything</span>
                    <p className="text-sm text-gray-600">All documents and guides in one place</p>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700">
                All for $49 — no hidden fees or upsells. <Link href="/start-llc-fast" className="text-blue-600 hover:underline font-medium">Get started quickly</Link>.
              </p>
            </div>

            {/* FAQ */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                FAQ – Forming an LLC for Under $100
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Q: Can I do this myself without a service?</h3>
                  <p className="text-neutral-700 mb-2">A: Yes. Genie shows you exactly how to file directly and save.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Q: Is the EIN really free?</h3>
                  <p className="text-neutral-700 mb-2">A: Yes — we walk you through the IRS site in minutes. <Link href="/ein-guide" className="text-blue-600 hover:underline font-medium">Get your free EIN guide</Link>.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Q: Do I need a registered agent?</h3>
                  <p className="text-neutral-700 mb-2">A: In many states, no. We'll tell you if you do. <Link href="/compare" className="text-blue-600 hover:underline font-medium">Compare services</Link>.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Q: What if my state costs more than $100?</h3>
                  <p className="text-neutral-700 mb-2">A: You'll still save hundreds compared to LegalZoom and ZenBusiness. <Link href="/llc-myths-debunked" className="text-blue-600 hover:underline font-medium">Learn the truth about LLC costs</Link>.</p>
                </div>
              </div>
            </div>

            {/* FINAL CTA */}
            <div className="text-center bg-blue-50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                Start your LLC for less than $100.
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                Genie gives you everything you need—without the fluff.
              </p>
              <Link href="/checkout" className="inline-block">
                <button className="bg-[#1E40AF] text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-[#1E3A8A] transition-all duration-200 hover:shadow-xl active:scale-95">
                  Launch for $49 →
                </button>
              </Link>
                         </div>

         </section>

        {/* EIN POPUP */}
        {showPopup && <EINGuidePopup isOpen={showPopup} onClose={closePopup} sourcePage="llc-under-100" markEmailSubmitted={markEmailSubmitted} />}
      </main>

      <Footer />
    </>
  );
} 