"use client";
import React from "react";
import { DollarSign, AlertCircle, CheckCircle, XCircle, FileText, BookOpen, ScrollText, ListChecks, UserCheck, Bot, Timer, LayoutDashboard, Send, Quote } from "lucide-react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Image from "next/image";
import EINGuidePopup from "../../components/EINGuidePopup";
import { useEINPopup } from "../../hooks/useEINPopup";

export default function ComparePage() {
  const { showPopup, closePopup, markEmailSubmitted } = useEINPopup();
  
  return (
    <main className="bg-gray-50 min-h-screen w-full flex flex-col">
      {/* LOGO TOP-LEFT */}
      <div className="w-full flex items-center justify-start px-4 pt-4 pb-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/genie-preview.png" alt="Start With Genie Logo" width={40} height={40} className="rounded-full" />
          <span className="sr-only">Start With Genie Home</span>
        </Link>
      </div>
      {/* HERO SECTION */}
      <section className="w-full max-w-xl mx-auto px-4 py-10 flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight">Almost paid LegalZoom $299? Here's the smarter way.</h1>
        <p className="text-lg text-neutral-700 mb-6">Start With Genie gives you everything you need to launch your LLC for just $49 — no upsells, no law firm, no confusion.</p>
        <Link href="/checkout" className="w-full">
          <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-blue-700 transition mb-2">Start My LLC for $49</button>
          </Link>
        <div className="text-sm text-gray-500 mt-1">Instant delivery — no waiting, no lawyers needed.</div>
        {/* TRUST SIGNAL */}
        <div className="flex items-center justify-center gap-2 text-green-700 text-sm font-medium mt-4">
          <Timer className="w-4 h-4 text-green-600" /> Most users finish in under 15 minutes
        </div>
      </section>

      {/* WHY PEOPLE LEAVE LEGALZOOM */}
      <section className="w-full max-w-xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4 text-center">Why people switch from LegalZoom to Genie</h2>
        <ul className="space-y-3">
          {[
            "Didn't realize it would be $300+",
            "Got upsold at every step",
            "Confusing packages",
            "Wanted to launch today"
          ].map((reason, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-neutral-800">
              <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Real People, Real Relief testimonial section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">Real People, Real Relief</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Olivia M. */}
          <div className="flex flex-col bg-white rounded-xl shadow p-6 border-l-4 border-blue-600 hover:bg-blue-50 transition">
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-5 h-5 text-blue-400" />
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">OM</span>
            </div>
            <div className="font-bold text-neutral-900 mb-2 text-lg">"Saved me $250 instantly"</div>
            <div className="text-neutral-700 mb-2">"I almost paid LegalZoom $299. Genie gave me everything for $49. Super clear and fast."</div>
            <div className="text-xs text-gray-400 mt-auto">— Olivia M., Ohio</div>
          </div>
          {/* Daniel S. */}
          <div className="flex flex-col bg-white rounded-xl shadow p-6 border-l-4 border-blue-600 hover:bg-blue-50 transition">
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-5 h-5 text-blue-400" />
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">DS</span>
            </div>
            <div className="font-bold text-neutral-900 mb-2 text-lg">"LLC done in 15 minutes"</div>
            <div className="text-neutral-700 mb-2">"I finished my LLC setup in one sitting. No upsells, no confusion. Highly recommend."</div>
            <div className="text-xs text-gray-400 mt-auto">— Daniel S., Texas</div>
          </div>
          {/* Priya R. */}
          <div className="flex flex-col bg-white rounded-xl shadow p-6 border-l-4 border-blue-600 hover:bg-blue-50 transition">
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-5 h-5 text-blue-400" />
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">PR</span>
            </div>
            <div className="font-bold text-neutral-900 mb-2 text-lg">"Wish I found Genie sooner"</div>
            <div className="text-neutral-700 mb-2">"Genie made everything so simple. I wasted hours on other sites before this."</div>
            <div className="text-xs text-gray-400 mt-auto">— Priya R., California</div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW SECTION - move up */}
      <section className="w-full max-w-xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">See what Genie actually looks like</h2>
        <div className="bg-white rounded-2xl shadow p-4 flex justify-center items-center">
          <video
            src="/Dashboard-preview.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="rounded-xl w-full max-w-full h-auto object-cover"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="text-xs text-gray-400 mt-2">Preview: Genie dashboard experience</div>
      </section>

      {/* CTA SECTION - move here */}
      <section className="w-full max-w-xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Ready to launch your LLC in minutes?</h2>
        <Link href="/checkout" className="w-full">
          <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-blue-700 transition">Start My LLC for $49</button>
        </Link>
      </section>

      {/* COMPARISON SECTION - move down */}
      <section className="w-full max-w-2xl mx-auto px-2 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">How Start With Genie Compares to Other LLC Services</h2>
        {/* Mobile: Stacked scrollable cards */}
        <div className="flex flex-col gap-6 md:hidden">
          {/* Start With Genie Card */}
          <div className="bg-white rounded-2xl shadow p-5 border border-gray-100">
            <h3 className="font-bold text-neutral-900 text-lg mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Start With Genie</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-gray-400" /> $49 flat</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> EIN Help: Included</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> Operating Agreement: Included</li>
              <li className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-gray-400" /> Filing Instructions: Personalized</li>
              <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-green-600" /> Upsells: None</li>
              <li className="flex items-center gap-2"><Send className="w-5 h-5 text-gray-400" /> Filing: Self-guided</li>
              <li className="flex items-center gap-2"><Bot className="w-5 h-5 text-gray-400" /> Support: AI assistant</li>
              <li className="flex items-center gap-2"><Timer className="w-5 h-5 text-gray-400" /> Delivery: Instant</li>
            </ul>
          </div>
          {/* Typical Services Card */}
          <div className="bg-white rounded-2xl shadow p-5 border border-gray-100">
            <h3 className="font-bold text-neutral-700 text-lg mb-3 flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500" /> Typical Services</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-gray-400" /> $0–$200+ in upsells</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> EIN Help: Usually extra</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> Operating Agreement: Usually extra</li>
              <li className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-gray-400" /> Filing Instructions: Generic</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-red-500" /> Upsells: Frequent add-ons</li>
              <li className="flex items-center gap-2"><Send className="w-5 h-5 text-gray-400" /> Filing: Done-for-you</li>
              <li className="flex items-center gap-2"><Bot className="w-5 h-5 text-gray-400" /> Support: Email/phone</li>
              <li className="flex items-center gap-2"><Timer className="w-5 h-5 text-gray-400" /> Delivery: Often delayed</li>
            </ul>
          </div>
        </div>
        {/* Desktop: Side-by-side cards */}
        <div className="hidden md:grid grid-cols-2 gap-6 mt-6">
          {/* Start With Genie Card */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h3 className="font-bold text-neutral-900 text-lg mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Start With Genie</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-gray-400" /> $49 flat</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> EIN Help: Included</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> Operating Agreement: Included</li>
              <li className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-gray-400" /> Filing Instructions: Personalized</li>
              <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-green-600" /> Upsells: None</li>
              <li className="flex items-center gap-2"><Send className="w-5 h-5 text-gray-400" /> Filing: Self-guided</li>
              <li className="flex items-center gap-2"><Bot className="w-5 h-5 text-gray-400" /> Support: AI assistant</li>
              <li className="flex items-center gap-2"><Timer className="w-5 h-5 text-gray-400" /> Delivery: Instant</li>
            </ul>
          </div>
          {/* Typical Services Card */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h3 className="font-bold text-neutral-700 text-lg mb-3 flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500" /> Typical Services</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-gray-400" /> $0–$200+ in upsells</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> EIN Help: Usually extra</li>
              <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-400" /> Operating Agreement: Usually extra</li>
              <li className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-gray-400" /> Filing Instructions: Generic</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-red-500" /> Upsells: Frequent add-ons</li>
              <li className="flex items-center gap-2"><Send className="w-5 h-5 text-gray-400" /> Filing: Done-for-you</li>
              <li className="flex items-center gap-2"><Bot className="w-5 h-5 text-gray-400" /> Support: Email/phone</li>
              <li className="flex items-center gap-2"><Timer className="w-5 h-5 text-gray-400" /> Delivery: Often delayed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED SECTION */}
      <section className="w-full max-w-xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">Everything included in your $49 setup</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <FileText className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Personalized LLC Filing Instructions</div>
              <div className="text-sm text-gray-500">Step-by-step, based on your state</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <ScrollText className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">EIN Guide</div>
              <div className="text-sm text-gray-500">How to get your federal tax ID fast</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <BookOpen className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Operating Agreement</div>
              <div className="text-sm text-gray-500">Ready-to-sign legal document</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <ListChecks className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Startup Checklist</div>
              <div className="text-sm text-gray-500">Know what to do after filing</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <Bot className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Genie Assistant</div>
              <div className="text-sm text-gray-500">Ask questions, get instant answers</div>
            </div>
          </div>
          {/* 6th card: Personalized Dashboard */}
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
            <LayoutDashboard className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-medium text-neutral-900">Your Personalized Dashboard</div>
              <div className="text-sm text-gray-500">Everything in one place — access your documents, progress, and the Genie assistant.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="w-full max-w-xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-semibold text-neutral-900 mb-2">Ready to launch your LLC in 15 minutes?</h2>
        <p className="text-base text-neutral-700 mb-4">No upsells. No law firm fees. Just clean guidance for $49.</p>
        <Link href="/checkout" className="w-full">
          <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-blue-700 transition">Start My LLC Now</button>
          </Link>
        </section>

      {/* FOOTER */}
        <Footer />
      
      {/* EIN Guide Popup */}
      <EINGuidePopup 
        isOpen={showPopup}
        onClose={closePopup}
        sourcePage="/compare"
        markEmailSubmitted={markEmailSubmitted}
      />
    </main>
  );
} 