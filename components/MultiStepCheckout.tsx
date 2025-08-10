"use client";

import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PremiumButton from "./ui/PremiumButton";
import SecondaryButton from "./ui/SecondaryButton";

interface MultiStepCheckoutProps {
  onBack?: () => void;
}

export default function MultiStepCheckout({ onBack }: MultiStepCheckoutProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (step === 1 && email && name) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (onBack) {
      onBack();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    
    setLoading(true);
    
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: { email, name },
        },
        return_url: `${window.location.origin}/onboarding`,
      },
    });

    if (error) setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full text-[16px]">
      {step === 1 ? (
        // Step 1: Contact Information
        <div className="space-y-6">
          <div>
            <label className="mb-1 block text-[12px] text-neutral-600">Email</label>
            <input
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              className="h-11 w-full rounded-xl border border-black/10 px-3 outline-none
                         placeholder:text-neutral-400
                         transition-all duration-150
                         focus:border-transparent focus:ring-2 focus:ring-blue-500/30
                         hover:border-black/20"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-[12px] text-neutral-600">Billing Name</label>
            <input
              type="text"
              required
              autoComplete="cc-name"
              className="h-11 w-full rounded-xl border border-black/10 px-3 outline-none
                         placeholder:text-neutral-400
                         transition-all duration-150
                         focus:border-transparent focus:ring-2 focus:ring-blue-500/30
                         hover:border-black/20"
              placeholder="Name on card"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <PremiumButton
            type="button"
            onClick={handleNext}
            disabled={!email || !name}
            size="lg"
            className="w-full"
          >
            Continue to Payment
          </PremiumButton>
        </div>
      ) : (
        // Step 2: Payment Information
        <div className="space-y-6">
          <div className="rounded-xl border border-black/10 p-3 transition-shadow duration-150 hover:shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
            <PaymentElement
              options={{
                fields: { billingDetails: "never" },
                layout: "tabs",
              }}
            />
          </div>

          {/* Total row */}
          <div className="flex items-center justify-between text-[15px] font-medium">
            <span>Total</span>
            <span>$49.00</span>
          </div>

          {/* Button row with back button */}
          <div className="flex gap-3">
            <SecondaryButton
              type="button"
              onClick={handleBack}
              size="lg"
              variant="outline"
              className="flex-1"
            >
              Back
            </SecondaryButton>
            <PremiumButton
              type="submit"
              disabled={loading || !stripe}
              size="lg"
              className="flex-1"
            >
              {loading ? "Processing…" : "Pay Now"}
            </PremiumButton>
          </div>

          {/* Trust line */}
          <p className="flex items-center justify-center gap-2 text-sm text-neutral-500">
            Payments securely processed by Stripe
          </p>
        </div>
      )}
    </form>
  );
} 