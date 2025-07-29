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
  Timer as TimerIcon,
  Check,
  User,
  HelpCircle,
  MapPin,
  Scale,
  Play
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";
import EINGuidePopup from "../../components/EINGuidePopup";
import { useEINPopup } from "../../hooks/useEINPopup";
import Timer from "../../components/Timer";
import { Button } from "../../components/ui/Button";

export default function StartLLCFastPage() {
  const [timeSpent, setTimeSpent] = useState("0:00");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { showPopup, closePopup, markEmailSubmitted } = useEINPopup();
  const router = useRouter();

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
      {/* Back Button */}
      <button
        type="button"
        onClick={() => {
          if (window.history.length > 1) {
            router.back();
          } else {
            router.push("/");
          }
        }}
        className="absolute top-8 left-4 sm:top-10 sm:left-6 z-20 flex items-center text-gray-500 hover:text-blue-700 text-sm sm:text-base font-medium transition-colors gap-1 sm:gap-2 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ textDecoration: 'none', fontWeight: 500 }}
      >
        <span className="text-base sm:text-lg">←</span> Back
      </button>

      {/* STICKY NAVBAR */}
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-2 md:px-0 sticky top-0 z-10 backdrop-blur-sm bg-neutral-50/80 border-b border-neutral-100">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 rounded-lg hover:bg-[#f2f2f2] transition-all duration-200 active:scale-95">
            <img src="/genie-preview.png" alt="Genie Logo" className="h-8 w-8 md:h-10 md:w-10 rounded-full opacity-90" />
          </Link>
          <span className="text-base md:text-lg font-medium text-neutral-900 tracking-tight">Start With Genie</span>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="/checkout" className="inline-block">
            <Button 
              className="text-sm font-semibold py-2 px-4 md:py-2.5 md:px-5"
              size="sm"
            >
              Start Now
            </Button>
          </Link>
          <Link href="/login">
            <span className="text-sm text-neutral-500 hover:text-neutral-900 transition">Sign In</span>
          </Link>
        </div>
      </nav>

      <main className="bg-gray-50 min-h-screen pt-16 sm:pt-20">
        {/* HERO SECTION */}
        <section className="w-full max-w-4xl mx-auto px-4 pt-4 pb-6 text-center flex flex-col items-center justify-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 leading-tight mt-0">
            Launch Your LLC Instantly — Simple, Affordable, No Hidden Fees
          </h1>
          <p className="text-lg sm:text-xl text-neutral-700 mb-4 max-w-3xl mx-auto">
            Everything you need to launch your LLC — including EIN and a ready-to-sign operating agreement — for just <span className="text-2xl font-bold text-blue-600">$49</span>.
          </p>
          
          {/* Checkmark bullets */}
          <div className="flex flex-col items-center space-y-2 mb-6">
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-medium">Free EIN guide</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-medium">Operating agreement</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-medium">Personalized dashboard</span>
            </div>
          </div>

          <div className="flex flex-col items-center w-full space-y-3">
            <Link href="/checkout" className="inline-block">
              <Button 
                className="text-xl font-semibold py-4 px-8"
                size="xl"
              >
                Start My LLC for $49
              </Button>
            </Link>
            
            {/* Risk reversal */}
            <p className="text-sm text-gray-600 max-w-md">
              <strong>No upsells. No hidden fees. 100% Satisfaction Guaranteed — or your money back.</strong>
            </p>
            
            {/* Timer below risk reversal */}
            <div className="w-full mt-2">
              <Timer className="text-gray-400 text-center text-xs font-light" />
            </div>
          </div>
        </section>

        {/* URGENCY + TIME-BASED MESSAGING */}
        <section className="w-full max-w-4xl mx-auto px-4 py-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4 text-center">
            Fastest Way to Start an LLC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-neutral-900">File your LLC online — usually same-day</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-neutral-900">Get your EIN instantly (IRS hours)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-neutral-900">Start doing business legally in 24–48 hrs</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Most users finish their LLC setup in under 15 minutes. Start yours now and be ready to launch in 24–48 hours.
          </p>
        </section>

        {/* TESTIMONIALS */}
        <section className="w-full max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 text-center">
            What Founders Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Alex R.</p>
                  <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Verified User</span>
                </div>
              </div>
              <p className="text-neutral-700 mb-3 italic">
                "Saved me $300 compared to LegalZoom. Done in 10 minutes, no upsells at all. Had my EIN the same day."
              </p>
              <p className="text-sm text-gray-600 font-medium">Digital Marketing Consultant</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Jordan T.</p>
                  <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Verified User</span>
                </div>
              </div>
              <p className="text-neutral-700 mb-3 italic">
                "LegalZoom wanted $299 and said it would take days. Genie got me going the same night — EIN, agreement, all of it."
              </p>
              <p className="text-sm text-gray-600 font-medium">Shopify Store Owner</p>
            </div>
          </div>
        </section>

        {/* BENEFITS-ORIENTED COPY */}
        <section className="w-full max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 text-center">
            Why Choose the Fastest Way to Start an LLC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Launch Your Business Faster</h3>
                <p className="text-sm text-gray-600">Get everything instantly after purchase</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Avoid Costly Mistakes</h3>
                <p className="text-sm text-gray-600">Get precise, state-specific guidance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Simplify Tax Compliance</h3>
                <p className="text-sm text-gray-600">Obtain your free EIN effortlessly</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ScrollText className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Protect Your Assets</h3>
                <p className="text-sm text-gray-600">Receive a ready-to-sign operating agreement</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Monitor className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Stay Organized & In Control</h3>
                <p className="text-sm text-gray-600">Track everything from your dashboard</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Quick LLC Formation</h3>
                <p className="text-sm text-gray-600">Most users complete everything in one sitting</p>
              </div>
            </div>
          </div>
        </section>

        {/* DASHBOARD PREVIEW */}
        <section className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
              See Your Personalized Dashboard
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Get instant access to filing steps, EIN guide, operating agreement, and the Genie assistant — all in one place.
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-[720px] rounded-[10px] shadow-lg overflow-hidden">
              <video
                src="/Dashboard-preview.mp4"
                autoPlay
                muted
                loop
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                playsInline
                preload="metadata"
                className="w-full aspect-video bg-black object-cover"
                style={{ outline: 'none', border: 'none', padding: 0 }}
              />
            </div>
          </div>
          
          {/* CTA below video */}
          <div className="text-center">
            <Link href="/checkout" className="inline-flex items-center gap-2 mb-4">
              <Button 
                className="text-xl font-semibold py-4 px-8"
                size="xl"
              >
                Ready to start? Let's launch your LLC for $49
              </Button>
              <ArrowRight className="w-5 h-5 text-[#3A8DFF]" />
            </Link>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="w-full max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 text-center">
            How Fast Can You Launch?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">File your LLC online — usually same-day</h3>
                <p className="text-sm text-gray-600">Most states process online filings immediately</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Get your EIN instantly (IRS hours)</h3>
                <p className="text-sm text-gray-600">Apply online and receive your tax ID immediately</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Open a bank account with your docs</h3>
                <p className="text-sm text-gray-600">Use your LLC documents to set up business banking</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Start doing business legally in 24–48 hrs</h3>
                <p className="text-sm text-gray-600">You can begin operations as soon as you're filed</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="w-full max-w-4xl mx-auto px-4 py-8 text-center bg-gray-100 rounded-xl mx-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
            Need Your LLC Fast? Don't Wait for a Lawyer.
          </h2>
          <p className="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
            Start With Genie gives you everything you need to launch your business in the next 30 minutes — all for $49.
          </p>
          <Link href="/checkout" className="inline-flex items-center gap-2">
            <Button 
              className="text-xl font-semibold py-4 px-8"
              size="xl"
            >
              Start My LLC Now
            </Button>
            <ArrowRight className="w-5 h-5 text-[#3A8DFF]" />
          </Link>
        </section>

        {/* FAQ */}
        <section className="w-full max-w-3xl mx-auto px-4 py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                Can I start my LLC today?
              </summary>
              <div className="px-5 pb-5 text-neutral-700">
                Yes — most states let you file online instantly. Genie gives you the exact steps and links.
              </div>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                How fast can I get an EIN?
              </summary>
              <div className="px-5 pb-5 text-neutral-700">
                In minutes if you apply online during IRS hours.
              </div>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                What if I need help during the process?
              </summary>
              <div className="px-5 pb-5 text-neutral-700">
                Our support team is ready to help.
              </div>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                Are there any hidden fees?
              </summary>
              <div className="px-5 pb-5 text-neutral-700">
                No. You pay $49 total — no upsells or surprises.
              </div>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                What documents do I receive?
              </summary>
              <div className="px-5 pb-5 text-neutral-700">
                You'll get your LLC filing instructions, EIN application guide, operating agreement template, and access to your personalized dashboard.
              </div>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                What states do you support?
              </summary>
              <div className="px-5 pb-5 text-neutral-700">
                We support all 50 states and provide state-specific guidance for each one.
              </div>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                How does this compare to LegalZoom or a lawyer?
              </summary>
              <div className="px-5 pb-5 text-neutral-700">
                LegalZoom charges $299+ and often delays filings. Lawyers cost $500-2000. We give you the same outcome for $49 with instant access.
              </div>
            </details>
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="p-5 cursor-pointer font-semibold text-neutral-900 hover:bg-gray-50 transition">
                Is this faster than LegalZoom?
              </summary>
              <div className="px-5 pb-5 text-neutral-700">
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