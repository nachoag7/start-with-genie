import React from "react";
import Link from "next/link";
import { User, FileText, Calculator, Users, ArrowRight, CheckCircle, Building2 } from "lucide-react";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Single-Member LLC? (And Do You Need One?)",
  description: "Starting your business solo? Learn what a single-member LLC is, how it works, and how to form one step-by-step.",
};

export default function SingleMemberLLCPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">What Is a Single-Member LLC?</h1>
        <p className="text-lg text-neutral-700 mb-8">
          Starting your business solo? Learn what a single-member LLC is, how it works, and how to form one step-by-step.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
          Start Your Single-Member LLC for $49
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* What Is a Single-Member LLC */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <User className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">What Is a Single-Member LLC?</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          A single-member LLC is exactly what it sounds like: a limited liability company with just one owner. It's the most popular choice for solo entrepreneurs, freelancers, and small business owners.
        </p>
        <p className="text-lg text-neutral-700 mb-6">
          You get all the benefits of an LLC — personal liability protection, pass-through taxation, and business credibility — but with the simplicity of running it yourself.
        </p>
      </section>

      {/* Why It's Popular for Freelancers and Creators */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Users className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Why It's Popular for Freelancers and Creators</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          Single-member LLCs are especially popular among:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Freelancers and consultants</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Content creators and influencers</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>E-commerce sellers</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Service-based business owners</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Side hustle entrepreneurs</span>
          </li>
        </ul>
        <p className="text-lg text-neutral-700">
          The reason? You get business protection without the complexity of managing multiple owners or a board of directors.
        </p>
      </section>

      {/* Tax Treatment of Single-Member LLCs */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Calculator className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Tax Treatment of Single-Member LLCs</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          Single-member LLCs are treated as "disregarded entities" by the IRS, which means:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Your business income flows directly to your personal tax return</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You file a Schedule C with your personal taxes</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>No separate corporate tax return required</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>You can deduct business expenses on your personal return</span>
          </li>
        </ul>
        <p className="text-lg text-neutral-700">
          This makes tax time much simpler than with corporations or partnerships.
        </p>
      </section>

      {/* How It Compares to Sole Proprietorships */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Building2 className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">How It Compares to Sole Proprietorships</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">Single-Member LLC</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Personal liability protection</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>More professional appearance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Easier to open business accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Same tax treatment as sole prop</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">Sole Proprietorship</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>No personal liability protection</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Less professional appearance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Harder to open business accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Simplest tax treatment</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <Link href="/llc-vs-sole-proprietorship" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            LLC vs Sole Proprietorship
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* What You Need to Form One */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <FileText className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">What You Need to Form One</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          Forming a single-member LLC is straightforward. You'll need:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>A business name (must include "LLC" or similar)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Articles of Organization (filed with your state)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>An EIN (Employer Identification Number)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>An operating agreement (recommended)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>A registered agent (you can be your own)</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/how-to-start-an-llc" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            How to Start an LLC
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Documents You'll Want */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Documents You'll Want (EIN, Operating Agreement)</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          While not always legally required, these documents will make your business stronger:
        </p>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">EIN (Employer Identification Number)</h3>
            <p className="text-neutral-700 mb-3">
              Even though you're a single-member LLC, getting an EIN is highly recommended. It helps you:
            </p>
            <ul className="space-y-2 text-neutral-700 mb-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Open business bank accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Apply for business credit</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Protect your Social Security Number</span>
              </li>
            </ul>
            <Link href="/how-to-get-an-ein-for-your-llc" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              How to Get an EIN for Your LLC
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">Operating Agreement</h3>
            <p className="text-neutral-700 mb-3">
              Even for single-member LLCs, an operating agreement is valuable because it:
            </p>
            <ul className="space-y-2 text-neutral-700 mb-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Helps maintain liability protection</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Documents your business structure</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Makes it easier to add partners later</span>
              </li>
            </ul>
            <Link href="/do-you-need-an-operating-agreement" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              Do You Need an Operating Agreement?
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="mt-6">
          <Link href="/llc-documents-required" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            LLC Documents You Actually Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 lg:p-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Ready to form your single-member LLC?</h3>
          <p className="text-lg text-neutral-700 mb-6">Perfect for solo entrepreneurs who want protection without complexity.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-base md:text-lg font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
            Start Your Single-Member LLC for $49
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-3">Fast, simple, and built just for solo founders.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
} 