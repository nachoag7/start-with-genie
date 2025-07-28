"use client";
import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

interface CheckoutFormProps {
  onBack: () => void;
}

export default function CheckoutForm({ onBack }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [billingName, setBillingName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError("");

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        payment_method_data: {
          billing_details: {
            name: billingName,
            email: email,
          },
        },
      },
      redirect: "if_required",
    });

    if (error) {
      setError(error.message || "An unexpected error occurred.");
      setLoading(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      router.push("/onboarding");
    } else {
      setLoading(false);
    }
  };

  const inputStyle = {
    fontSize: 15,
    padding: '0.75rem 1rem',
    lineHeight: 1.4,
    border: '1px solid #ccc',
    borderRadius: 8,
    transition: 'border-color 0.2s ease',
    background: 'transparent',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-50 px-2 py-10"
    >
      <div className="absolute top-8 left-6">
        <Button onClick={onBack} variant="ghost" className="text-gray-600 hover:text-gray-900">
          ← Back
        </Button>
      </div>

      {/* Headline + Subline */}
      <div className="mb-0 text-center px-4 sm:px-0">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          You're 15 minutes away from launching your business.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          Get instant access to your personal LLC assistant.
        </p>
      </div>

      {/* Mini Testimonial */}
      <div className="mb-5 mt-0 text-center px-4 sm:px-0 text-sm text-gray-600 italic flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-quote w-4 h-4 mb-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 12h4v4H5zM15 12h4v4h-4z"/>
        </svg>
        "I thought it'd take hours, but I had my LLC and EIN sorted in one sitting. The dashboard made it way easier than I expected."
        <span className="mt-1 not-italic font-medium text-gray-800">— Jack White, Shopify seller</span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
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
              className="w-full"
              style={inputStyle}
            />
          </div>
          <div className="w-full">
            <label htmlFor="billingName" className="block text-[15px] font-medium text-gray-800 mb-1">Billing Name</label>
            <input
              id="billingName"
              type="text"
              value={billingName}
              onChange={e => setBillingName(e.target.value)}
              required
              placeholder="Name on card"
              autoComplete="name"
              className="w-full"
              style={inputStyle}
            />
          </div>
          <div
            className="rounded-2xl bg-[#f9fafb] w-full border border-gray-200 shadow-inner p-4"
          >
            <PaymentElement options={{ layout: 'tabs' }} />
          </div>
        </div>
        <div className="border-t border-gray-100 my-4 w-full"></div>
        <div className="flex items-center justify-between mb-4 w-full">
          <span className="text-gray-800">Total</span>
          <span className="text-lg font-bold text-gray-900">$49</span>
        </div>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <Button type="submit" fullWidth disabled={loading || !stripe}>
          {loading ? "Processing..." : "Pay Now"}
        </Button>
        {/* Secure Checkout Text */}
        <p className="text-xs text-center text-gray-500 mt-2 px-4 sm:px-0">
          Secure checkout powered by Stripe
        </p>
      </form>

      {/* FAQ Block */}
      <div className="mt-10 border-t border-gray-200 pt-6 px-4 sm:px-0 w-full max-w-2xl mx-auto">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 text-center mb-4">Common questions</h3>
        <div className="space-y-4 max-w-xl mx-auto text-sm sm:text-base text-gray-700">
          <div>
            <h4 className="font-medium text-gray-800">What do I get after payment?</h4>
            <p className="mt-1 text-gray-600">Instant access to your Genie dashboard with personalized state filing instructions, a guided EIN setup, a pre-filled operating agreement, and a checklist to launch your LLC.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Is this a filing service?</h4>
            <p className="mt-1 text-gray-600">Nope — Genie is your personal assistant, not a filing service. You get everything you need to file it yourself in minutes, without upsells or legal fees.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">How fast is it?</h4>
            <p className="mt-1 text-gray-600">Most users complete their setup in under 15 minutes. You’ll get instant access as soon as you check out.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 
 
 
