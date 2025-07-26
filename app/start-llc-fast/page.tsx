"use client";
import React, { useState, useEffect } from "react";
import { 
  Clock, 
  Zap, 
  FileText, 
  BadgeCheck, 
  ScrollText, 
  Monitor, 
  Calendar,
  DollarSign,
  CheckCircle,
  Quote,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Timer as TimerIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import EINGuidePopup from "../../components/EINGuidePopup";
import { useEINPopup } from "../../hooks/useEINPopup";
import Timer from "../../components/Timer";

export default function StartLLCFastPage() {
  const [timeSpent, setTimeSpent] = useState("0:00");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { showPopup, closePopup, markEmailSubmitted } = useEINPopup();

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      setTimeSpent(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

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
        <section className="w-full max-w-4xl mx-auto px-4 pt-4 pb-8 text-center flex flex-col items-center justify-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight mt-0">
            Start Your LLC Fast — The Clear, No-Upsell Way
          </h1>
          <p className="text-lg sm:text-xl text-neutral-700 mb-6 max-w-3xl mx-auto">
            Get everything you need to launch your LLC — fast, affordable, and frustration-free.
          </p>
          <div className="flex flex-col items-center w-full space-y-4">
            <Link href="/checkout" className="inline-block">
              <button className="bg-blue-600 text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-xl active:scale-95">
                Start My LLC for $49
              </button>
            </Link>
            
            {/* Trust badges with Lucide icons */}
            <div className="flex flex-col items-center space-y-2 px-4 w-full">
              <div className="flex items-center gap-3 text-gray-600">
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">EIN included</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">Operating agreement ready to use</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <TimerIcon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">Most users finish in under 15 minutes</span>
              </div>
            </div>
            
            {/* Timer below trust bullets - reduced hierarchy */}
            <div className="w-full mt-2">
              <Timer className="text-gray-400 text-center text-xs font-light" />
            </div>
          </div>
        </section>

        {/* WHY TIME-SENSITIVE FOUNDERS USE GENIE */}
        <section className="w-full max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-center">
            Why Time-Sensitive Founders Use Genie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Instant access, no waiting</h3>
                <p className="text-sm text-gray-600">Get everything you need immediately after purchase</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">State-specific instructions included</h3>
                <p className="text-sm text-gray-600">Personalized steps for your exact state requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BadgeCheck className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">EIN guide, get it free from the IRS</h3>
                <p className="text-sm text-gray-600">Step-by-step guide to get your federal tax ID</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ScrollText className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Operating agreement included</h3>
                <p className="text-sm text-gray-600">Ready-to-sign legal document for your LLC</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Ready in under 30 minutes</h3>
                <p className="text-sm text-gray-600">Most users complete everything in one sitting</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Monitor className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Personalized dashboard</h3>
                <p className="text-sm text-gray-600">Track progress and access all documents in one place</p>
              </div>
            </div>
          </div>
        </section>

        {/* DASHBOARD PREVIEW */}
        <section className="w-full max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              See Exactly What You'll Get
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Your Genie dashboard is unlocked instantly. Filing steps, EIN guide, operating agreement, and the Genie assistant — all in one place.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto">
            <video
              src="/Dashboard-preview.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-xl"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="w-full max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-center">
            What Founders Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-600">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-5 h-5 text-blue-400" />
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">AR</span>
              </div>
              <p className="text-neutral-700 mb-3 italic">
                "I was quoted $350 to start my LLC. Genie gave me the same exact outcome for $49 — and I had everything ready the same day."
              </p>
              <p className="text-sm text-gray-600 font-medium">— Alex R., Digital Marketing Consultant</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-600">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-5 h-5 text-blue-400" />
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">JT</span>
              </div>
              <p className="text-neutral-700 mb-3 italic">
                "LegalZoom wanted $299 and said it would take days. Genie got me going the same night — EIN, agreement, all of it."
              </p>
              <p className="text-sm text-gray-600 font-medium">— Jordan T., Shopify Store Owner</p>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="w-full max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-center">
            How Fast Can You Launch?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">File your LLC online — usually same-day</h3>
                <p className="text-sm text-gray-600">Most states process online filings immediately</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Get your EIN instantly (IRS hours)</h3>
                <p className="text-sm text-gray-600">Apply online and receive your tax ID immediately</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Open a bank account with your docs</h3>
                <p className="text-sm text-gray-600">Use your LLC documents to set up business banking</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Start doing business legally in 24–48 hrs</h3>
                <p className="text-sm text-gray-600">You can begin operations as soon as you're filed</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="w-full max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            Need Your LLC Fast? Don't Wait for a Lawyer.
          </h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Start With Genie gives you everything you need to launch your business in the next 30 minutes — all for $49.
          </p>
          <Link href="/checkout" className="inline-flex items-center gap-2">
            <button className="bg-blue-600 text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition">
              Start My LLC Now
            </button>
            <ArrowRight className="w-5 h-5 text-blue-600" />
          </Link>
        </section>

        {/* FAQ */}
        <section className="w-full max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-6 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                Can I start my LLC today?
              </summary>
              <div className="px-6 pb-6 text-neutral-700">
                Yes — most states let you file online instantly. Genie gives you the exact steps and links.
              </div>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-6 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                How fast can I get an EIN?
              </summary>
              <div className="px-6 pb-6 text-neutral-700">
                In minutes if you apply online during IRS hours.
              </div>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-6 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                Is this faster than LegalZoom?
              </summary>
              <div className="px-6 pb-6 text-neutral-700">
                Yes — they often delay filings unless you pay extra. Genie gives you control and speed.
              </div>
            </details>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      
      {/* EIN Guide Popup */}
      <EINGuidePopup 
        isOpen={showPopup}
        onClose={closePopup}
        sourcePage="/start-llc-fast"
        markEmailSubmitted={markEmailSubmitted}
      />
      </main>
    </>
  );
} 