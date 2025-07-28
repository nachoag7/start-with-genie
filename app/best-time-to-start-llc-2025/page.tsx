import React from "react";
import Link from "next/link";
import { CalendarClock, CheckCircle, Hourglass, CalendarDays, AlertCircle, ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "When's the Best Time to Start an LLC in 2025?",
  description: "Wondering when to file your LLC? This guide breaks down the best time to form an LLC in 2025 based on your goals, taxes, and business type.",
};

export default function BestTimeToStartLLCPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">When's the Best Time to Start an LLC in 2025?</h1>
        <p className="text-lg text-neutral-700 mb-8">
          <strong>Wondering if it's "too soon" to file your LLC?</strong><br />
          Or worried about rushing it too late?<br />
          Here's the step-by-step breakdown of when it actually makes sense to form your LLC—based on where your business is <em>today</em>.
        </p>
        <Link href="/checkout" className="inline-flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
          Start Your LLC for $49
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Why Timing Feels So Uncertain Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CalendarClock className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Why Timing Feels So Uncertain</h2>
        </div>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You don't want to waste money</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You're not sure if you're "legit" enough yet</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You've seen conflicting advice online</span>
          </li>
        </ul>
        <p className="text-lg text-neutral-700">
          We get it. That's exactly why Genie exists—to make this process simple and clear.
        </p>
      </section>

      {/* Signs You're Ready to File Your LLC Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Signs You're Ready to File Your LLC</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">You probably don't need to wait another week if:</p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You're accepting payments or getting paid under a business name</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You've started offering services or selling online</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You want to open a business bank account</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You want a clean paper trail for taxes</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You want your brand to look legit</span>
          </li>
        </ul>
        <p className="text-lg text-neutral-700">
          If that's you, filing your LLC now will <strong>protect your personal assets</strong> and set you up with a clean foundation.
        </p>
      </section>

      {/* When It Might Make Sense to Wait Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Hourglass className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">When It <em>Might</em> Make Sense to Wait</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">In a few cases, it's okay to delay:</p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You're just exploring an idea, haven't made any money</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You're still choosing your business name or domain</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You're planning a soft launch months from now</span>
          </li>
        </ul>
        <p className="text-lg text-neutral-700">
          That said, most of the time waiting only causes more stress and delays. Genie helps you get everything set up in minutes so you can focus on building—not worrying.
        </p>
      </section>

      {/* Best Months to File Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CalendarDays className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Best Months to File (And Why They Matter)</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">January – March</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                <span>Start clean for the tax year</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                <span>Great for new ventures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                <span>Easier bookkeeping</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">April – August</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">🟡</span>
                <span>Mid-year launch? Still a solid time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">🟡</span>
                <span>Some states don't prorate taxes—watch for annual fees</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">September – December</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>Consider waiting if you want to avoid paying a full year of state fees for just a few months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">⚠️</span>
                <span>But: If you need legal protection <em>now</em>, don't wait just to save a small fee</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Most Founders Get Wrong Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <AlertCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">What Most Founders Get Wrong</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">
          Most people delay filing because they're afraid of "doing it wrong."
        </p>
        <p className="text-lg text-neutral-700">
          But if you're already working on your business, building your brand, or taking payments—<strong>you're ready.</strong> And the real risk is not having protection in place.
        </p>
      </section>

      {/* How to File Without Overthinking It Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">How to File Without Overthinking It</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">
          Start With Genie helps you set up your LLC in under 15 minutes.
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Personalized state instructions</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>EIN guide + operating agreement</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Your own dashboard + templates</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Just $49 — no upsells, no complications</span>
          </li>
        </ul>
        
        {/* CTA Button */}
        <div className="text-center mt-8">
          <Link href="/checkout" className="inline-flex items-center gap-2 bg-blue-600 text-white text-base md:text-lg font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
            Start My LLC with Genie
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </section>

      {/* Wondering How Genie Stacks Up Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Wondering How Genie Stacks Up to the Others?</h2>
          <p className="text-lg text-neutral-700 mb-4">
            Still exploring your options?<br />
            See how Genie compares to LegalZoom, ZenBusiness, and others—side by side.
          </p>
          <Link href="/compare" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            Compare LLC Filing Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
} 