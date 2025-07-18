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
        },
        redirect: 'if_required',
      });

      if (error) {
        // Handle payment error
        setError(error.message || "Payment failed. Please try again.");
        setLoading(false);
        return;
      }

      if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Payment succeeded
        setSuccess(true);
        setTimeout(() => {
          router.push("/onboarding");
        }, 2000);
      } else {
        // Payment failed or incomplete
        setError("Payment was not completed. Please try again.");
        setLoading(false);
      }
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
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
      className="min-h-screen flex items-center justify-center bg-white px-4 py-8"
    >
      <div className="max-w-[480px] w-full">
        {/* Back Link */}
        <motion.button
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-gray-700 mb-8 transition-colors"
          whileHover={{ x: -2 }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to what's included
        </motion.button>

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

          {/* Payment Information Section */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-500 mb-3">
              Payment Information
            </label>
            <div className="space-y-4">
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