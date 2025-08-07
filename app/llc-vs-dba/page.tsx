import React from "react";
import Link from "next/link";
import { ShieldCheck, BadgeHelp, DollarSign, Users, Building2, CheckCircle, ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLC vs DBA: Business Structure & Liability Protection Guide 2025",
  description: "Should you form an LLC or get a DBA? Compare liability protection, business structure, tax benefits, and legal requirements. Get expert advice for your business. Start your LLC for $49.",
  openGraph: {
    title: "LLC vs DBA: Business Structure & Liability Protection Guide 2025",
    description: "Should you form an LLC or get a DBA? Compare liability protection, business structure, tax benefits, and legal requirements.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "LLC vs DBA: Business Structure & Liability Protection Guide 2025",
    description: "Should you form an LLC or get a DBA? Compare liability protection, business structure, tax benefits, and legal requirements.",
  },
};

export default function LLCvsDBAPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">LLC vs DBA: What's Actually Right for You?</h1>
        <p className="text-lg text-neutral-700 mb-8">
          <strong>Confused between an LLC and a DBA?</strong><br />
          You're not alone—and the internet hasn't made it easier.<br />
          Here's the straightforward guide to understanding what you <em>actually</em> need when starting a business in 2025.
        </p>
        <Link href="/checkout" className="inline-flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
          Start Your LLC for $49
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* What's the Difference Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <BadgeHelp className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">What's the Difference Between an LLC and a DBA?</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">Let's break this down clearly:</p>
        
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-sm font-semibold text-gray-900">Term</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-sm font-semibold text-gray-900">What It Actually Means</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-900 text-sm md:text-base">LLC (Limited Liability Company)</td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base">A legal business structure that protects you personally</td>
                </tr>
                <tr>
                  <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-900 text-sm md:text-base">DBA ("Doing Business As")</td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base">A nickname for your business—<em>not</em> a legal structure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <p className="text-lg text-neutral-700">
          If you want protection, flexibility, and the ability to open a business bank account, <strong>you need an LLC.</strong><br />
          A DBA won't do any of that. It's just a way to operate under a different name.
        </p>
      </section>

      {/* When a DBA Might Be Enough Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">When a DBA <em>Might</em> Be Enough</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">There are a few scenarios where a DBA can work on its own:</p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You're a <strong>freelancer</strong> or <strong>sole proprietor</strong> using your legal name</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You're running a <strong>side hustle</strong> with almost no liability</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You just want to use a different name on invoices or flyers</span>
          </li>
        </ul>
        <p className="text-lg text-neutral-700">
          But remember: with a DBA alone, <em>you and your business are legally the same</em>. If anything goes wrong, it's on you personally.
        </p>
      </section>

      {/* When You Definitely Need an LLC Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <ShieldCheck className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">When You Definitely Need an LLC</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">If any of this sounds like you, <strong>don't skip the LLC</strong>:</p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You're accepting payments as a business name</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You want to <strong>separate your finances</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You're building a <strong>brand</strong>, working with clients, or hiring contractors</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You want to be taken seriously by banks and platforms</span>
          </li>
        </ul>
        <p className="text-lg text-neutral-700">
          An LLC gives you legal protection and legitimacy—<em>without unnecessary complications.</em>
        </p>
      </section>

      {/* Can You Have Both Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Building2 className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Can You Have Both?</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">
          Yes. Many business owners operate under an LLC and file a DBA <em>for branding purposes.</em>
        </p>
        <p className="text-lg text-neutral-700 mb-4">For example:</p>
        <ul className="space-y-2 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You register <strong>Smith Holdings LLC</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>But you file a DBA to operate publicly as <strong>Smith Consulting</strong></span>
          </li>
        </ul>
        <p className="text-lg text-neutral-700">
          This gives you the best of both worlds: legal protection <strong>and</strong> the ability to use the brand name you want.
        </p>
      </section>

      {/* Which One Is Cheaper Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <DollarSign className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Which One Is Cheaper in the Long Run?</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-4">
          A DBA is cheaper <em>up front</em>—usually $10 to $100 depending on your state.<br />
          But it comes with <strong>zero protection</strong>, so even one lawsuit or dispute could wipe you out.
        </p>
        <p className="text-lg text-neutral-700 mb-4">
          An LLC costs more to file (usually $50 to $150) but gives you:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Personal liability protection</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>A real business identity</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Easier banking + tax options</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>More trust with clients and platforms</span>
          </li>
        </ul>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-lg text-blue-900 font-medium">
            💡 <strong>Bottom line:</strong> If you plan to <em>actually grow your business</em>, an LLC is almost always worth it.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 lg:p-12 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">Want the Easiest Way to Set Up an LLC?</h2>
          <p className="text-base md:text-lg text-neutral-700 mb-4 md:mb-6">
            Start With Genie gives you <strong>everything you need to launch your LLC for just $49</strong>—step-by-step instructions, templates, EIN guide, and more.
          </p>
          <p className="text-base md:text-lg text-neutral-700 mb-6 md:mb-8">
            No complications. Just clear guidance in one clean dashboard.
          </p>
          <Link href="/checkout" className="inline-flex items-center gap-2 bg-blue-600 text-white text-base md:text-lg font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
            Start Your LLC with Genie
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </section>

      {/* Next Article Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-lg text-neutral-700">
            <em>Read next: </em>
            <Link href="/best-time-to-start-llc-2025" className="text-blue-600 hover:text-blue-700 underline">
              When's the Best Time to Start an LLC in 2025
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
} 