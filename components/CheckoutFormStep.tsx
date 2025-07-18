"use client";
import React, { useState, useEffect } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Lock, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import ContactSupportModal from "./ContactSupportModal";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function CheckoutFormStep({ onBack }: { onBack: () => void }) {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [cardName, setCardName] = useState("");
  const [phone, setPhone] = useState("");
  const [inputHover, setInputHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!stripe || !elements) {
      setError("Stripe has not loaded yet. Please try again.");
      setLoading(false);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
          payment_method_data: {
            billing_details: {
              name: cardName,
              email: email,
              phone: phone,
            },
          },
        },
        redirect: 'if_required',
      });

      if (error) {
        // Show Stripe's specific error message
        setError(error.message || "Something went wrong. Please try another card.");
        setLoading(false);
        return;
      }

      if (paymentIntent && paymentIntent.status === 'succeeded') {
        setSuccess(true);
        setTimeout(() => {
          router.push("/onboarding");
        }, 2000);
      } else if (paymentIntent && paymentIntent.status !== 'succeeded') {
        // Show Stripe's status error if available
        setError(`Payment failed or is incomplete. Status: ${paymentIntent.status}`);
        setLoading(false);
      } else {
        setError('Payment failed or is incomplete.');
        setLoading(false);
      }
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-white px-4 py-8"
      >
        <div className="max-w-[480px] w-full text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Payment Successful!
            </h2>
            <p className="text-gray-600">
              Redirecting you to complete your setup...
            </p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-white px-4 py-8 relative"
    >
      {/* Absolute Back to Home Button */}
      <a
        href="/"
        className="absolute top-8 left-6 z-20 flex items-center text-gray-500 hover:text-blue-700 text-base font-medium transition-colors gap-2 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ textDecoration: 'none', fontWeight: 500 }}
      >
        <span className="text-lg">←</span> Back to Home
      </a>
      <div className="max-w-[480px] w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Launch your LLC with confidence.
          </h1>
          <p className="text-sm text-gray-600">
            A flat $49 gets you everything you need to get started.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-gray-400 focus:outline-none transition-all duration-200 text-base"
              placeholder="your@email.com"
            />
          </div>
          {/* Phone Number Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-gray-400 focus:outline-none transition-all duration-200 text-base"
              placeholder="(555) 555-5555"
              autoComplete="tel"
            />
          </div>

          {/* Payment Information Section */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-500 mb-3">
              Payment Information
            </label>
            <div className="space-y-4 bg-white border border-gray-200 rounded-lg px-4 py-5" style={{ boxShadow: '0 1px 4px rgba(31,107,255,0.04)' }}>
              {/* Name on Card Field */}
              <div>
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cardName"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base placeholder-gray-400"
                  placeholder="Full name as shown on card"
                  autoComplete="cc-name"
                  style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 500, fontSize: 16 }}
                />
              </div>
              {/* Stripe Payment Element */}
              <PaymentElement
                options={{
                  layout: "tabs",
                  fields: {
                    billingDetails: "never",
                  },
                }}
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 rounded-lg p-4"
            >
              <div className="flex items-start">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </motion.div>
          )}

          {/* Pay Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Button
              type="submit"
              disabled={loading}
              fullWidth
              className="w-full py-4 text-base font-medium transition-all duration-200 hover:transform hover:-translate-y-0.5"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </div>
              ) : (
                <>
                  Pay Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-6"
          >
            <p className="text-xs text-gray-500 flex items-center justify-center">
              <Lock className="w-3 h-3 mr-1" />
              Powered by Stripe
            </p>
          </motion.div>
        </motion.form>

        {/* Support Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => setShowSupportModal(true)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Need help? Contact support
          </button>
        </motion.div>
      </div>

      <ContactSupportModal
        isOpen={showSupportModal}
        onClose={() => setShowSupportModal(false)}
      />
    </motion.div>
  );
} 
 