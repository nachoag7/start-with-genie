"use client";
import React, { useState, useEffect } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

interface CheckoutFormProps {
  onBack: () => void;
}

export default function CheckoutForm({ onBack }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [inputHover, setInputHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setError(error.message || "An unexpected error occurred.");
    }
    setLoading(false);
  };

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
      </form>
    </motion.div>
  );
} 
 
