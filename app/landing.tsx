"use client";
import React from "react";
import Link from "next/link";
import { Quote, FileText, BookOpen, ListChecks, LayoutDashboard, Bot, CheckCircle, XCircle, Timer, ClipboardCheck, User, Sparkles, DollarSign } from "lucide-react";
import TrustBadge from "../components/TrustBadge";

export default function Landing() {
  return (
    <main className="bg-gray-50 min-h-screen w-full">
      {/* 1. Hero Section */}
      <section className="w-full max-w-xl mx-auto px-4 py-12 flex flex-col items-center text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">Finally making it official?</h1>
        <p className="text-lg text-neutral-700">Everything you need to launch your LLC — without upsells, delays, or confusion.</p>
        <Link href="/checkout" className="w-full">
          <button className="w-full bg-[#1E40AF] text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-[#1E3A8A] transition">Start My LLC for $49</button>
        </Link>
        <div className="text-sm text-gray-500">We don’t file for you, but you’ll have everything you need to do it in under 15 minutes.</div>
      </section>

      {/* 2. Dashboard Preview Video */}
      <section className="w-full max-w-2xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">See how simple it actually is</h2>
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-black flex items-center justify-center">
          <video
            src="/dashboard-preview.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
            style={{ maxHeight: 400 }}
          />
        </div>
      </section>

      {/* 3. Testimonial Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">What founders are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Victoria */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center gap-2">
            <Quote className="w-6 h-6 text-blue-400 mb-2" />
            <div className="font-bold text-neutral-900">Victoria Aguilar, Poshmark Seller</div>
            <div className="text-neutral-700 italic">“Genie guided me through getting my LLC set up in 15 minutes. I didn’t feel overwhelmed for a second.”</div>
          </div>
          {/* Justin */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center gap-2">
            <Quote className="w-6 h-6 text-blue-400 mb-2" />
            <div className="font-bold text-neutral-900">Justin G, Founder of DM Dad</div>
            <div className="text-neutral-700 italic">“I’ve launched multiple brands and this is by far the easiest way I’ve ever set up an LLC. Clean, fast, and actually helpful.”</div>
          </div>
          {/* Lauren */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center gap-2">
            <Quote className="w-6 h-6 text-blue-400 mb-2" />
            <div className="font-bold text-neutral-900">Lauren M, Freelance Designer</div>
            <div className="text-neutral-700 italic">“Legal stuff usually stresses me out, but Genie broke everything down so clearly. I got it done between client calls.”</div>
          </div>
        </div>
      </section>

      {/* 4. Why Start With Genie */}
      <section className="w-full py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">Built to launch, not confuse</h2>
        <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-2">
          <div className="min-w-[220px] bg-white rounded-xl shadow p-5 flex flex-col items-center snap-center">
            <FileText className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">Personalized state filing guide</div>
          </div>
          <div className="min-w-[220px] bg-white rounded-xl shadow p-5 flex flex-col items-center snap-center">
            <ClipboardCheck className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">Step-by-step EIN walkthrough</div>
          </div>
          <div className="min-w-[220px] bg-white rounded-xl shadow p-5 flex flex-col items-center snap-center">
            <BookOpen className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">Operating agreement included</div>
          </div>
          <div className="min-w-[220px] bg-white rounded-xl shadow p-5 flex flex-col items-center snap-center">
            <LayoutDashboard className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">Dashboard with everything in one place</div>
          </div>
          <div className="min-w-[220px] bg-white rounded-xl shadow p-5 flex flex-col items-center snap-center">
            <XCircle className="w-7 h-7 text-red-400 mb-2" />
            <div className="font-medium text-neutral-900">No upsells, ever</div>
          </div>
          <div className="min-w-[220px] bg-white rounded-xl shadow p-5 flex flex-col items-center snap-center">
            <Sparkles className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">Instant access</div>
          </div>
        </div>
      </section>

      {/* 5. What You Don’t Get */}
      <section className="w-full max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">What You’ll Never Deal With</h2>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2 text-neutral-700"><XCircle className="w-5 h-5 text-red-400" /> Surprise fees</li>
          <li className="flex items-center gap-2 text-neutral-700"><XCircle className="w-5 h-5 text-red-400" /> Confusing packages</li>
          <li className="flex items-center gap-2 text-neutral-700"><XCircle className="w-5 h-5 text-red-400" /> Legal jargon</li>
          <li className="flex items-center gap-2 text-neutral-700"><XCircle className="w-5 h-5 text-red-400" /> Sales calls</li>
          <li className="flex items-center gap-2 text-neutral-700"><XCircle className="w-5 h-5 text-red-400" /> Slow delivery</li>
        </ul>
      </section>

      {/* 6. Comparison Table */}
      <section className="w-full py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">How Start With Genie Compares to Other LLC Services</h2>
        <div className="flex overflow-x-auto space-x-4 px-4 snap-x snap-mandatory md:hidden">
          {/* Mobile: horizontal cards */}
          <div className="min-w-[260px] bg-white rounded-xl shadow p-5 flex flex-col gap-2 snap-center">
            <div className="font-bold text-blue-700 text-lg mb-1 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Start With Genie</div>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-gray-400" /> $49 flat</li>
              <li className="flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-gray-400" /> EIN Help: Included</li>
              <li className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-gray-400" /> Operating Agreement: Included</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> Filing Instructions: Personalized</li>
              <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-green-600" /> Upsells: None</li>
              <li className="flex items-center gap-2"><User className="w-5 h-5 text-gray-400" /> Filing: Self-guided</li>
              <li className="flex items-center gap-2"><Bot className="w-5 h-5 text-gray-400" /> Support: AI assistant</li>
              <li className="flex items-center gap-2"><Timer className="w-5 h-5 text-gray-400" /> Delivery: Instant</li>
            </ul>
          </div>
          <div className="min-w-[260px] bg-white rounded-xl shadow p-5 flex flex-col gap-2 snap-center">
            <div className="font-bold text-neutral-700 text-lg mb-1 flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500" /> Typical Services</div>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-gray-400" /> $0–$200+ in upsells</li>
              <li className="flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-gray-400" /> EIN Help: Usually extra</li>
              <li className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-gray-400" /> Operating Agreement: Usually extra</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> Filing Instructions: Generic</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-red-500" /> Upsells: Frequent add-ons</li>
              <li className="flex items-center gap-2"><User className="w-5 h-5 text-gray-400" /> Filing: Done-for-you</li>
              <li className="flex items-center gap-2"><Bot className="w-5 h-5 text-gray-400" /> Support: Email/phone</li>
              <li className="flex items-center gap-2"><Timer className="w-5 h-5 text-gray-400" /> Delivery: Often delayed</li>
            </ul>
          </div>
        </div>
        {/* Desktop: grid layout */}
        <div className="hidden md:grid grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <div className="font-bold text-blue-700 text-lg mb-1 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Start With Genie</div>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-gray-400" /> $49 flat</li>
              <li className="flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-gray-400" /> EIN Help: Included</li>
              <li className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-gray-400" /> Operating Agreement: Included</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> Filing Instructions: Personalized</li>
              <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-green-600" /> Upsells: None</li>
              <li className="flex items-center gap-2"><User className="w-5 h-5 text-gray-400" /> Filing: Self-guided</li>
              <li className="flex items-center gap-2"><Bot className="w-5 h-5 text-gray-400" /> Support: AI assistant</li>
              <li className="flex items-center gap-2"><Timer className="w-5 h-5 text-gray-400" /> Delivery: Instant</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <div className="font-bold text-neutral-700 text-lg mb-1 flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500" /> Typical Services</div>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-gray-400" /> $0–$200+ in upsells</li>
              <li className="flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-gray-400" /> EIN Help: Usually extra</li>
              <li className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-gray-400" /> Operating Agreement: Usually extra</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> Filing Instructions: Generic</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-red-500" /> Upsells: Frequent add-ons</li>
              <li className="flex items-center gap-2"><User className="w-5 h-5 text-gray-400" /> Filing: Done-for-you</li>
              <li className="flex items-center gap-2"><Bot className="w-5 h-5 text-gray-400" /> Support: Email/phone</li>
              <li className="flex items-center gap-2"><Timer className="w-5 h-5 text-gray-400" /> Delivery: Often delayed</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4 max-w-xl mx-auto">
          We don’t hide essentials behind premium tiers. Everything is included up front for a flat $49.
        </div>
      </section>

      {/* 7. Document Preview */}
      <section className="w-full max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">You’ll Walk Away With These</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <BookOpen className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">Operating Agreement</div>
            <div className="text-sm text-gray-500">Legitimize your business structure</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <FileText className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">State Filing Instructions</div>
            <div className="text-sm text-gray-500">Step-by-step based on your state</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <ClipboardCheck className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">EIN Guide</div>
            <div className="text-sm text-gray-500">How to get your federal tax ID quickly and confidently</div>
          </div>
        </div>
      </section>

      {/* 8. Genie Assistant Section */}
      <section className="w-full max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4 text-center">Your personal LLC assistant, built in</h2>
        <div className="text-base text-neutral-700 text-center max-w-xl mx-auto">
          Inside your dashboard, your assistant is always available to guide you. Ask questions, get answers, and move forward with confidence — no delays, no stress.
        </div>
      </section>

      {/* 9. What’s Included */}
      <section className="w-full max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">Everything in Your $49 Setup</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <FileText className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Personalized LLC guide</div>
              <div className="text-sm text-gray-500">Step-by-step, based on your state</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <ClipboardCheck className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Step-by-step EIN help</div>
              <div className="text-sm text-gray-500">How to get your federal tax ID fast</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <BookOpen className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Operating agreement</div>
              <div className="text-sm text-gray-500">Ready-to-sign legal document</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <LayoutDashboard className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Dashboard access</div>
              <div className="text-sm text-gray-500">All your documents, guides, and next steps in one place</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <Bot className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Personal LLC assistant</div>
              <div className="text-sm text-gray-500">Instant help when you need it</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <Sparkles className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Instant delivery</div>
              <div className="text-sm text-gray-500">Access everything right away</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Call to Action */}
      <section className="w-full max-w-xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Let’s form your LLC — no delays, no fluff</h2>
        <Link href="/checkout" className="w-full">
          <button className="w-full bg-[#1E40AF] text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-[#1E3A8A] transition">Start My LLC for $49</button>
        </Link>
        <TrustBadge />
        <div className="text-sm text-gray-500 mt-2">No upsells. No middlemen. Just everything you need to launch in minutes.</div>
      </section>

      {/* 11. FAQs */}
      <section className="w-full max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">FAQs</h2>
        <details className="mb-4 bg-white rounded-lg shadow-sm p-4">
          <summary className="font-medium text-gray-900 cursor-pointer">What exactly is <strong>The Genie Policy</strong>?</summary>
          <div className="mt-2 text-gray-700 text-sm">
            The Genie Policy is our commitment to your success and satisfaction. We're confident that our LLC formation kit provides immense value by saving you time and money. If for any reason you feel it hasn't, just send us an email and we'll process a full, no-questions-asked refund. Your purchase is 100% risk-free.
          </div>
        </details>
        <details className="mb-4 bg-white rounded-lg shadow-sm p-4">
          <summary className="font-medium text-gray-900 cursor-pointer">Do you file the LLC for me?</summary>
          <div className="mt-2 text-gray-700 text-sm">
            We don’t — and that’s intentional. Start With Genie gives you everything you need to file your LLC yourself in under 15 minutes. It’s faster, clearer, and puts you in full control.
          </div>
        </details>
      </section>
    </main>
  );
} 