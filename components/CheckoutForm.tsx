"use client";
import React, { useState, useEffect } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ListChecks,
  DollarSign,
  FileText,
  Zap,
  Lock,
  ArrowRight
} from "lucide-react";
import ContactSupportModal from "./ContactSupportModal";
import { Button } from "./ui/Button";
import Link from "next/link";

// Inline style for CardElement hover/focus
const cardFieldStyle = {
  padding: '0.75rem 1rem',
  border: '1px solid #ccc',
  borderRadius: 8,
  transition: 'border-color 0.2s ease',
  background: 'transparent',
};

// Add a minimal spinner component
function Spinner() {
  return (
    <svg className="animate-spin mr-2 h-5 w-5 text-white" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}

export default function CheckoutForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [inputHover, setInputHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progressText, setProgressText] = useState('');

  useEffect(() => {
    let textTimeout: NodeJS.Timeout;
    if (showProgressBar) {
      setProgress(0);
      setProgressText('Confirming your payment...');
      setTimeout(() => setProgress(60), 200); // Start fill
      textTimeout = setTimeout(() => setProgressText('Redirecting you securely...'), 1500);
    }
    return () => clearTimeout(textTimeout);
  }, [showProgressBar]);

  useEffect(() => {
    if (success) {
      setProgress(100);
    }
  }, [success]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setShowProgressBar(true);
    // Simulate payment
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => router.push("/onboarding"), 900);
    }, 2200);
  }

  // Inline style for input hover/focus
  const inputStyle = {
    fontSize: 15,
    padding: '0.75rem 1rem',
    lineHeight: 1.4,
    border: '1px solid',
    borderColor: inputHover ? '#888' : '#ccc',
    borderRadius: 8,
    transition: 'border-color 0.2s ease',
    background: 'transparent',
  };

  // For hover state on "What You're Getting" list items
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  // Add modal state for support
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const getListItemStyle = (idx: number) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: idx === 4 ? 0 : '0.5rem',
    borderRadius: 6,
    padding: '0.25rem 0.5rem',
    transition: 'background-color 0.2s ease',
    backgroundColor: hoveredIndex === idx ? '#f4f4f4' : 'transparent',
    cursor: 'default',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-50 px-2 py-10"
      style={{
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontSize: 16,
        color: '#18181b',
        background: 'linear-gradient(120deg, #f8fbff 0%, #f3f6fa 100%)',
        backdropFilter: 'blur(2.5px)',
      }}
    >
      <style jsx global>{`
        .__PrivateStripeElement iframe {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
        }
        .__PrivateStripeElement [aria-label*='Country'],
        .__PrivateStripeElement [aria-label*='country'],
        .__PrivateStripeElement select[name*='country'],
        .__PrivateStripeElement label[for*='country'],
        .__PrivateStripeElement [id*='country'],
        .__PrivateStripeElement [data-testid*='country'] {
          display: none !important;
          height: 0 !important;
          min-height: 0 !important;
          max-height: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .footer-link:hover {
          color: #111827 !important;
          text-decoration: underline;
          transition: color 0.2s;
        }
      `}</style>
      <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 bg-white/90 rounded-3xl shadow-2xl border border-gray-100 p-0 md:p-12 items-center justify-center backdrop-blur-md" style={{ boxShadow: '0 8px 32px 0 rgba(60, 80, 180, 0.08)' }}>
        {/* Left: Features List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="w-full md:w-1/2 flex flex-col items-start px-6 py-8 md:py-0 md:pr-10 border-b md:border-b-0 md:border-r border-gray-100"
          style={{ justifyContent: 'center', minHeight: 420 }}
        >
          <h2 className="font-bold text-2xl md:text-2xl mb-5 text-left" style={{ fontWeight: 700, letterSpacing: -0.5 }}>Start With Genie LLC Launch</h2>
          <ul className="flex flex-col gap-4 text-[15.5px] text-gray-800 mb-5 w-full">
            {[
              { icon: <CheckCircle size={21} strokeWidth={2} className="text-blue-600 flex-shrink-0" />, text: 'Built for clarity — no upsells, ever' },
              { icon: <ListChecks size={21} strokeWidth={2} className="text-blue-600 flex-shrink-0" />, text: 'Step-by-step LLC instructions' },
              { icon: <DollarSign size={21} strokeWidth={2} className="text-blue-600 flex-shrink-0" />, text: 'EIN walkthrough' },
              { icon: <FileText size={21} strokeWidth={2} className="text-blue-600 flex-shrink-0" />, text: 'Customizable operating agreement' },
              { icon: <Zap size={21} strokeWidth={2} className="text-blue-600 flex-shrink-0" />, text: 'Instant access after checkout' },
            ].map((item, idx) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.08 }}
                viewport={{ once: true, amount: 0.7 }}
                className="flex items-center gap-3 group cursor-default transition-colors min-h-[28px]"
                style={{}}
              >
                {item.icon}
                <span className="group-hover:text-gray-900 transition-colors text-[16px]">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        {/* Right: Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col items-center gap-7 px-6 py-8"
          style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', fontSize: 17, color: '#18181b', justifyContent: 'center' }}
        >
          <div className="w-full flex flex-col gap-6 items-center">
            <div className="w-full">
              <label htmlFor="email" className="block text-[15px] font-medium text-gray-800 mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="you@email.com"
                autoComplete="email"
                className="w-full text-gray-900 placeholder-[#888] bg-transparent focus:outline-none transition-all duration-150 ease-in-out"
                style={{
                  fontSize: 17,
                  padding: '1.1rem 1.3rem', // Increased padding
                  lineHeight: 1.4,
                  border: '1.5px solid',
                  borderColor: inputHover ? '#2563eb' : '#e5e7eb',
                  borderRadius: 16, // More rounded
                  transition: 'border-color 0.22s, box-shadow 0.22s',
                  background: 'transparent',
                  height: 58,
                  boxShadow: inputHover ? '0 0 0 2px #2563eb22' : '0 2px 12px rgba(60,80,180,0.06)',
                }}
                onMouseEnter={() => setInputHover(true)}
                onMouseLeave={() => setInputHover(false)}
                onFocus={() => setInputHover(true)}
                onBlur={() => setInputHover(false)}
              />
            </div>
            {/* In the form, wrap the payment section in AnimatePresence/motion.div for fade/slide */}
            <AnimatePresence mode="wait">
              {!success && (
                <motion.div
                  key="payment-section"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: loading ? 0.6 : 1, y: 0 }}
                  exit={{ opacity: 0, y: -32, transition: { duration: 0.45, ease: 'easeInOut' } }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full flex flex-col gap-6 items-center"
                  style={{ pointerEvents: loading ? 'none' : 'auto', filter: loading ? 'blur(1.5px)' : 'none' }}
                >
                  <div
                    className="rounded-2xl bg-[#f9fafb] w-full border border-gray-200 shadow-lg"
                    style={{
                      minHeight: 92,
                      marginTop: 2,
                      boxShadow: '0 4px 24px 0 rgba(60, 80, 180, 0.10)',
                      padding: '1.2rem 1.3rem', // More generous padding
                      borderRadius: 20, // More rounded
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Stripe PaymentElement will inherit these styles via appearance config, but we add extra padding/rounding here */}
                    <PaymentElement options={{ layout: 'tabs' }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="border-t border-gray-100 my-2 w-full"></div>
          <div className="flex items-center justify-between mb-1 w-full">
            <span className="text-[15px] text-gray-800">Total</span>
            <span className="text-lg font-bold text-gray-900">$49</span>
          </div>
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="text-red-500 text-sm text-center mb-2"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
          {/* Pay Now Button - updated for white text, blue background, soft hover */}
          <div className="w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              {!showProgressBar && (
                <motion.div
                  key="paynow-btn"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.25, ease: 'easeIn' } }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    className="mt-1 mb-2 flex items-center justify-center gap-2 text-base font-semibold rounded-xl shadow-sm bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white hover:shadow-lg hover:brightness-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                    style={{
                      background: 'linear-gradient(90deg, #3A8DFF 0%, #1F6BFF 100%)',
                      color: '#fff',
                      boxShadow: '0 2px 12px rgba(30,64,175,0.10)',
                    }}
                    disabled={loading}
                  >
                    <span style={{ color: '#fff', transition: 'opacity 0.2s' }}>{loading ? '' : 'Pay Now'}</span>
                    {!loading && <ArrowRight className="w-5 h-5 ml-1" style={{ color: '#fff' }} />}
                  </Button>
                </motion.div>
              )}
              {showProgressBar && (
                <motion.div
                  key="progress-bar"
                  initial={{ opacity: 0, height: 48 }}
                  animate={{ opacity: 1, height: 18 }}
                  exit={{ opacity: 0, height: 0, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full flex flex-col items-center"
                >
                  <motion.div
                    className="rounded-full bg-gradient-to-br from-[#dbeafe] to-[#e0e7ff] overflow-hidden w-full"
                    style={{ height: 8, width: '100%', marginBottom: 8 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#3A8DFF] to-[#1F6BFF]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                      style={{ borderRadius: 8 }}
                    />
                  </motion.div>
                  <AnimatePresence mode="wait">
                    {progressText && (
                      <motion.div
                        key={progressText}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
                        transition={{ duration: 0.32, ease: 'easeOut' }}
                        className="text-xs text-neutral-400 font-medium tracking-wide text-center mt-1"
                        style={{ letterSpacing: 0.1 }}
                      >
                        {progressText}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Secure checkout text */}
          <div className="w-full text-center mt-2">
            <span className="text-xs text-neutral-400 font-medium tracking-wide" style={{ letterSpacing: 0.1 }}>
              Secure checkout by Stripe
            </span>
          </div>
        </form>
      </div>
      {/* Footer */}
      <footer className="w-full max-w-2xl mx-auto py-4 text-center text-gray-400 text-xs mt-8 border-t border-gray-100 flex flex-col items-center">
        <nav className="flex justify-center items-center gap-3 text-xs text-neutral-400 mb-1 mt-2">
          <Link href="/" className="footer-link transition-colors duration-200">
            Home
          </Link>
          <span className="text-neutral-300">•</span>
          <button
            type="button"
            className="footer-link transition-colors duration-200 focus:outline-none"
            onClick={() => setIsSupportModalOpen(true)}
            style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer' }}
          >
            Contact support
          </button>
        </nav>
        <div className="flex items-center gap-2 justify-center mt-1">
          <span>&copy; {new Date().getFullYear()} Start With Genie. All rights reserved.</span>
        </div>
      </footer>
      <ContactSupportModal isOpen={isSupportModalOpen} onClose={() => setIsSupportModalOpen(false)} />
    </motion.div>
  );
} 
 
