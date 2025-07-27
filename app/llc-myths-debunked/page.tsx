import React from "react";
import Link from "next/link";
import { XCircle, CheckSquare, AlertCircle, FileText, ListChecks, BookOpen } from "lucide-react";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLC Myths Debunked – What You Actually Need to Start",
  description: "Most people overcomplicate LLC formation. We break down the most common myths and show you what you actually need to launch your LLC — fast, clear, and affordable.",
};

export default function LLCMythsDebunked() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">LLC Myths Debunked: What You Really Need to Know</h1>
        <p className="text-lg text-neutral-700 mb-6">Most people overcomplicate it. Here’s what actually matters when starting an LLC in 2025.</p>
        <Link href="/checkout" className="w-full max-w-xs">
          <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-blue-700 transition">Start Your LLC for $49</button>
        </Link>
        <div className="text-sm text-gray-500 mt-2">Instant delivery — no upsells, no delays.</div>
      </section>

      {/* Top 7 LLC Myths (Debunked) - moved here */}
      <section className="w-full max-w-2xl mx-auto px-4 py-5">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 text-center">The Top 7 LLC Myths (Debunked)</h2>
        <div className="space-y-8">
          {[
            {
              myth: "You need a lawyer to start an LLC",
              truth: "You can do it yourself in minutes with the right steps. Most people overpay for help they don’t need.",
            },
            {
              myth: "LLCs are expensive",
              truth: "State filing fees are usually under $150. Tools like Genie cover everything else for $49 flat.",
            },
            {
              myth: "An LLC protects everything",
              truth: "LLCs protect your personal assets — but only if you separate business and personal finances correctly.",
            },
            {
              myth: "You need an accountant to get an EIN",
              truth: "Getting an EIN is free and only takes a few minutes using the IRS site.",
            },
            {
              myth: "You need to be making money before starting",
              truth: "You can (and often should) create your LLC before launching so your brand and assets are protected.",
            },
            {
              myth: "It takes weeks to get set up",
              truth: "Most people can finish their LLC setup in under 15 minutes with a clear plan.",
            },
            {
              myth: "You’ll get sued without an LLC",
              truth: "Not necessarily. But without one, your personal finances are on the line if something does go wrong.",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-3 py-2">
              <div className="flex items-center gap-3 text-red-600 font-bold text-lg md:text-xl">
                <XCircle size={28} className="min-w-[28px] min-h-[28px] max-w-[28px] max-h-[28px]" />
                <span>Myth:</span>
                <span className="font-extrabold">{item.myth}</span>
              </div>
              <div className="flex items-center gap-3 text-green-700 text-base md:text-lg font-semibold">
                <CheckSquare size={28} className="text-green-600 min-w-[28px] min-h-[28px] max-w-[28px] max-h-[28px]" />
                <span className="font-bold">Truth:</span>
                <span className="font-medium">{item.truth}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What You Actually Need */}
      <section className="w-full max-w-2xl mx-auto px-4 pt-2 pb-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">What You Actually Need to Start</h2>
        <ul className="bg-white rounded-xl shadow p-6 space-y-3 text-base">
          {[
            "Choose your state",
            "File your Articles of Organization",
            "Get an EIN from the IRS",
            "Create your Operating Agreement",
            "Open a business bank account",
            "Keep business finances separate",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckSquare className="w-5 h-5 text-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="text-base text-gray-700 mt-4 mb-6 text-center">
          Genie gives you clear instructions, downloadable templates, and your own dashboard to guide you through each step.
        </div>
        <div className="flex flex-col items-center">
          <Link href="/checkout" className="w-full max-w-xs">
            <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-blue-700 transition">Start My LLC Now for $49</button>
          </Link>
          <div className="text-sm text-gray-500 mt-1">You’ll be done in 15 minutes — no upsells, no waiting.</div>
        </div>
      </section>

      {/* What Happens When You Fall for the Myths */}
      <section className="w-full max-w-3xl mx-auto px-4 py-5">
        <h2 className="text-xl font-semibold text-neutral-900 mb-3 text-center">What Happens When You Fall for the Myths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-red-500 font-semibold mb-2">
              <AlertCircle className="w-5 h-5" />
              <span>If you fall for the myths:</span>
            </div>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Overpay $300+ for stuff you didn’t need</li>
              <li>Wait weeks instead of launching today</li>
              <li>Lose momentum or stay stuck in research</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
              <AlertCircle className="w-5 h-5 text-green-600" />
              <span>If you skip the noise:</span>
            </div>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>File today with confidence</li>
              <li>Get your EIN in minutes</li>
              <li>Protect your idea and start building</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What You Get with Start With Genie */}
      <section className="w-full max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">What You Get with Start With Genie</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <FileText className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">State Filing Instructions</div>
            <div className="text-sm text-gray-500">Personalized for your state, no guesswork</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <ListChecks className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">Free EIN Guide</div>
            <div className="text-sm text-gray-500">Step-by-step walkthrough, updated for 2025</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <BookOpen className="w-7 h-7 text-blue-600 mb-2" />
            <div className="font-medium text-neutral-900">Operating Agreement</div>
            <div className="text-sm text-gray-500">Editable, lawyer-style template included</div>
          </div>
        </div>
        <div className="text-base text-gray-700 mt-4 text-center">
          No upsells. No packages. Just everything you actually need to launch.
        </div>
      </section>

      {/* Real Founder Reviews */}
      <section className="w-full max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">What Founders Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <div className="font-bold text-neutral-900">Victoria Aguilar <span className="font-normal text-gray-500">— Poshmark Seller</span></div>
            <div className="text-neutral-700 italic">“Genie made it ridiculously simple. I was up and running in 10 minutes. No extra fees, no confusion.”</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <div className="font-bold text-neutral-900">Justin G. <span className="font-normal text-gray-500">— Founder of DM Dad</span></div>
            <div className="text-neutral-700 italic">“I almost paid $300 to LegalZoom. Glad I found this — it’s cleaner, faster, and honestly better.”</div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <Link href="/checkout" className="w-full max-w-xs">
            <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-blue-700 transition">Start My LLC for $49</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
} 