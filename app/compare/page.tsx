"use client";
import React from "react";
import { 
  CheckCircle, 
  XCircle, 
  DollarSign, 
  FileText, 
  BookOpen, 
  Bot, 
  Timer, 
  Send, 
  Quote,
  ScrollText,
  ClipboardCheck,
  ArrowRight,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import EINGuidePopup from "../../components/EINGuidePopup";
import { useEINPopup } from "../../hooks/useEINPopup";

export default function ComparePage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);
  const { showPopup, closePopup, markEmailSubmitted } = useEINPopup();

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How is this different from LegalZoom or ZenBusiness?",
      answer: "Genie gives you everything you need to launch your LLC — no upsells, no confusing packages, no law firm. Just $49 and you're good to go."
    },
    {
      question: "Why does Genie cost so much less?",
      answer: "Most services charge $299+ through upsells. Genie keeps it simple: one flat price with everything included."
    },
    {
      question: "What exactly do I get for $49?",
      answer: "Personalized LLC filing instructions, EIN guide, editable operating agreement, and your own dashboard."
    },
    {
      question: "Do I still need to file the LLC myself?",
      answer: "Yes — Genie is your assistant, not a law firm. We guide you step-by-step so you file directly and confidently."
    },
    {
      question: "What if I need help during the process?",
      answer: "You'll have 24/7 access to our AI assistant, plus email support if you need a human."
    }
  ];

  return (
    <main className="bg-gray-50 min-h-screen w-full flex flex-col">
      {/* NAVBAR - Consistent with homepage */}
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-2 md:px-0 sticky top-0 z-10 backdrop-blur-sm bg-neutral-50/80 border-b border-neutral-100">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 rounded-lg hover:bg-[#f2f2f2] transition-all duration-200 active:scale-95">
            <img src="/genie-preview.png" alt="Genie Logo" className="h-8 w-8 md:h-10 md:w-10 rounded-full opacity-90" />
          </Link>
          <span className="text-base md:text-lg font-medium text-neutral-900 tracking-tight">Start With Genie</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <span className="text-sm text-neutral-500 hover:text-neutral-900 transition">Sign In</span>
          </Link>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="w-full max-w-xl mx-auto px-4 py-5 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
            Why Founders Are Ditching LegalZoom
          </h1>
          <p className="text-lg text-neutral-700 mb-6">
            Start With Genie gives you everything you need to launch your LLC — for just $49. No upsells. No lawyers. No confusion.
          </p>
          <Link href="/checkout" className="w-full">
            <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-blue-700 transition mb-2">
              Start My LLC for $49
            </button>
          </Link>
          <div className="text-sm text-gray-500 mt-1">Most users launch in under 15 minutes.</div>
        </motion.div>
      </section>

      {/* 2. COMPARISON CARDS SECTION */}
      <section className="w-full max-w-2xl mx-auto px-4 py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
            How Start With Genie Compares to Other LLC Services
          </h2>
          
          {/* Mobile: Stacked cards */}
          <div className="flex flex-col gap-6 md:hidden">
            {/* Start With Genie Card */}
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h3 className="font-bold text-neutral-900 text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" /> 
                Start With Genie
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" /> 
                  $49 flat price
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" /> 
                  EIN help included
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" /> 
                  Operating Agreement included
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" /> 
                  24/7 AI assistant
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" /> 
                  Launch in 15 minutes
                </li>
              </ul>
            </div>

            {/* Typical Services Card */}
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h3 className="font-bold text-neutral-700 text-lg mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" /> 
                Typical Services
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> 
                  $299+
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> 
                  Surprise upsells
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> 
                  Confusing packages
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> 
                  No AI help
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> 
                  Slow or unclear process
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop: Side-by-side cards */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {/* Start With Genie Card */}
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h3 className="font-bold text-neutral-900 text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" /> 
                Start With Genie
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" /> 
                  $49 flat price
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" /> 
                  EIN help included
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" /> 
                  Operating Agreement included
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" /> 
                  24/7 AI assistant
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" /> 
                  Launch in 15 minutes
                </li>
              </ul>
            </div>

            {/* Typical Services Card */}
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h3 className="font-bold text-neutral-700 text-lg mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" /> 
                Typical Services
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> 
                  $299+
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> 
                  Surprise upsells
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> 
                  Confusing packages
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> 
                  No AI help
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> 
                  Slow or unclear process
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. VALUE STACK SECTION */}
      <section className="w-full max-w-xl mx-auto px-4 py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
            What You're Getting for $49
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
              <FileText className="w-6 h-6 text-gray-400 mt-1" />
              <div>
                <div className="font-medium text-neutral-900">Filing Instructions</div>
                <div className="text-sm text-gray-500">Step-by-step guidance</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
              <ScrollText className="w-6 h-6 text-gray-400 mt-1" />
              <div>
                <div className="font-medium text-neutral-900">EIN Guide</div>
                <div className="text-sm text-gray-500">Help with your tax ID</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow">
              <BookOpen className="w-6 h-6 text-gray-400 mt-1" />
              <div>
                <div className="font-medium text-neutral-900">Operating Agreement</div>
                <div className="text-sm text-gray-500">Ready-to-edit legal doc</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 mb-4">Total value: $286 — Yours for $49 flat.</p>
            <Link href="/checkout" className="w-full">
              <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-blue-700 transition">
                Start My LLC Now
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 4. TESTIMONIAL SECTION */}
      <section className="w-full max-w-5xl mx-auto px-4 py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
            What Founders Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Victoria A. */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 border-l-4 border-blue-600 hover:bg-blue-50 transition">
              <div className="flex items-center gap-2 mb-3">
                <Quote className="w-5 h-5 text-blue-400" />
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">VA</span>
              </div>
              <div className="font-bold text-neutral-900 mb-2 text-lg">"Genie guided me through getting my LLC in 15 minutes."</div>
              <div className="text-xs text-gray-400 mt-auto">— Victoria A., Shopify Seller</div>
            </div>
            
            {/* Justin G. */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 border-l-4 border-blue-600 hover:bg-blue-50 transition">
              <div className="flex items-center gap-2 mb-3">
                <Quote className="w-5 h-5 text-blue-400" />
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">JG</span>
              </div>
              <div className="font-bold text-neutral-900 mb-2 text-lg">"Cleanest experience I've had setting up a business."</div>
              <div className="text-xs text-gray-400 mt-auto">— Justin G., DM Dad</div>
            </div>
            
            {/* Lauren M. */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 border-l-4 border-blue-600 hover:bg-blue-50 transition">
              <div className="flex items-center gap-2 mb-3">
                <Quote className="w-5 h-5 text-blue-400" />
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">LM</span>
              </div>
              <div className="font-bold text-neutral-900 mb-2 text-lg">"Got it done between client calls."</div>
              <div className="text-xs text-gray-400 mt-auto">— Lauren M., Designer</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. WHY FOUNDERS SWITCH SECTION */}
      <section className="w-full max-w-xl mx-auto px-4 py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
            Why Founders Switch to Genie
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-base text-neutral-700">They don't want to pay $300+ for the same documents</span>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-base text-neutral-700">They're tired of confusing packages and legal jargon</span>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-base text-neutral-700">They just want to get it done — fast and clearly</span>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-base text-neutral-700">They want to feel confident, not upsold</span>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-base text-neutral-700">They need EIN help, too — not just filing</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. FINAL CALLOUT SECTION */}
      <section className="w-full max-w-xl mx-auto px-4 py-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Want to launch today?
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            Genie gives you EIN help, your documents, and your dashboard — all in one place.
          </p>
          <Link href="/checkout" className="w-full">
            <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="w-full max-w-xl mx-auto px-4 py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow border border-gray-100">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="font-medium text-neutral-900">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-4">
                    <div className="text-neutral-700 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
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