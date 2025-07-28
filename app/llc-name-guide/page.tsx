import React from "react";
import Link from "next/link";
import { Type, Search, CheckCircle, XCircle, ArrowRight, Lightbulb, FileText } from "lucide-react";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Name Your LLC (With 10 Examples & Tips)",
  description: "Picking an LLC name? Here are naming rules, tips, and examples to help you choose a name that fits—and gets approved.",
};

export default function LLCNameGuidePage() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">What to Name Your LLC (With 10 Examples & Tips)</h1>
        <p className="text-lg text-neutral-700 mb-8">
          Picking an LLC name? Here are naming rules, tips, and examples to help you choose a name that fits—and gets approved.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
          Start Your LLC for $49
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* What Makes a Great LLC Name */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Type className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">What Makes a Great LLC Name?</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          A great LLC name should be:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span><strong>Memorable</strong> — Easy to spell and remember</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span><strong>Available</strong> — Not already taken in your state</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span><strong>Professional</strong> — Represents your brand well</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span><strong>Scalable</strong> — Works as your business grows</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span><strong>Compliant</strong> — Follows state naming rules</span>
          </li>
        </ul>
      </section>

      {/* State Naming Rules You Need to Follow */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <FileText className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">State Naming Rules You Need to Follow</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          Every state has specific rules for LLC names. Here are the most common requirements:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Required Elements</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Must include "LLC," "L.L.C.," or "Limited Liability Company"</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Cannot be identical to existing business names</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Cannot use restricted words without approval</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Restricted Words</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>"Bank," "Insurance," "University" (require licenses)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>"Federal," "National," "United States"</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Words that suggest government affiliation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Check If a Name Is Available */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Search className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">How to Check If a Name Is Available</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          Before filing your LLC, check name availability:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Search your state's Secretary of State website</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Check for exact matches and similar names</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Search domain name availability</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Check social media handle availability</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span>Consider trademark searches for broader protection</span>
          </li>
        </ul>
      </section>

      {/* 10 Example Names (and Why They Work) */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <Lightbulb className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">10 Example Names (and Why They Work)</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">1. "Smith Consulting LLC"</h3>
            <p className="text-neutral-700 mb-2"><strong>Why it works:</strong> Professional, clear, personal brand</p>
            <p className="text-neutral-700">Perfect for freelancers and consultants</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">2. "Blue Sky Digital LLC"</h3>
            <p className="text-neutral-700 mb-2"><strong>Why it works:</strong> Creative, memorable, scalable</p>
            <p className="text-neutral-700">Great for creative agencies and tech companies</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">3. "Green Thumb Landscaping LLC"</h3>
            <p className="text-neutral-700 mb-2"><strong>Why it works:</strong> Descriptive, industry-specific</p>
            <p className="text-neutral-700">Ideal for service-based businesses</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">4. "Peak Performance Fitness LLC"</h3>
            <p className="text-neutral-700 mb-2"><strong>Why it works:</strong> Motivational, clear purpose</p>
            <p className="text-neutral-700">Perfect for fitness and wellness businesses</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">5. "Swift Solutions LLC"</h3>
            <p className="text-neutral-700 mb-2"><strong>Why it works:</strong> Alliterative, professional</p>
            <p className="text-neutral-700">Works for any service business</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">6. "Craft & Co. LLC"</h3>
            <p className="text-neutral-700 mb-2"><strong>Why it works:</strong> Short, memorable, versatile</p>
            <p className="text-neutral-700">Great for retail and creative businesses</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">7. "Next Level Marketing LLC"</h3>
            <p className="text-neutral-700 mb-2"><strong>Why it works:</strong> Aspirational, industry-specific</p>
            <p className="text-neutral-700">Perfect for marketing and growth companies</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">8. "Riverside Properties LLC"</h3>
            <p className="text-neutral-700 mb-2"><strong>Why it works:</strong> Location-based, professional</p>
            <p className="text-neutral-700">Ideal for real estate and location-based businesses</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">9. "Innovate Tech Solutions LLC"</h3>
            <p className="text-neutral-700 mb-2"><strong>Why it works:</strong> Modern, descriptive, scalable</p>
            <p className="text-neutral-700">Great for technology companies</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">10. "Summit Ventures LLC"</h3>
            <p className="text-neutral-700 mb-2"><strong>Why it works:</strong> Aspirational, professional, versatile</p>
            <p className="text-neutral-700">Perfect for holding companies and diverse businesses</p>
          </div>
        </div>
      </section>

      {/* Common Mistakes to Avoid */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <XCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Common Mistakes to Avoid</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">Choosing a name that's too generic</h3>
              <p className="text-neutral-700">"Best Services LLC" is forgettable and hard to trademark</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">Not checking availability thoroughly</h3>
              <p className="text-neutral-700">Similar names can cause confusion and legal issues</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">Using trendy terms that date quickly</h3>
              <p className="text-neutral-700">"Blockchain Solutions LLC" might not age well</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">Making it too long or complicated</h3>
              <p className="text-neutral-700">"John Smith's Professional Consulting Services LLC" is a mouthful</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">Ignoring domain and social media availability</h3>
              <p className="text-neutral-700">Your business name should work across all platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reserve or Register Your LLC Name */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-3 mb-6">
          <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">How to Reserve or Register Your LLC Name</h2>
        </div>
        <p className="text-lg text-neutral-700 mb-6">
          Once you've chosen your name, here's how to secure it:
        </p>
        <ul className="space-y-3 text-lg text-neutral-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span><strong>Name Reservation:</strong> Some states allow you to reserve a name for 30-120 days</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span><strong>LLC Formation:</strong> Your name is officially registered when you file Articles of Organization</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span><strong>Domain Registration:</strong> Secure your website domain immediately</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
            <span><strong>Social Media:</strong> Claim handles on major platforms</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/how-to-start-an-llc" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
            How to Start an LLC
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 lg:p-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Ready to name and form your LLC?</h3>
          <p className="text-lg text-neutral-700 mb-6">Get help with naming tips, state filing steps, and your EIN.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-base md:text-lg font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
            Start Your LLC for $49
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-3">Includes naming tips, state filing steps, and your EIN.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
} 