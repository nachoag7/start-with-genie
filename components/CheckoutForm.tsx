"use client";
import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";

interface CheckoutFormProps {
  fieldGap?: number;
}

export default function CheckoutForm({ fieldGap = 14 }: CheckoutFormProps) {
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
      router.push("/dashboard");
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
    <form onSubmit={handleSubmit} className="w-full">
      <div style={{ display: "grid", rowGap: fieldGap }}>
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
        <div className="rounded-2xl bg-white w-full border border-gray-200 p-4">
          <PaymentElement options={{ layout: 'tabs' }} />
        </div>
      </div>
      
      <div className="border-t border-gray-100 my-3 w-full"></div>
      <div className="flex items-center justify-between mb-3 w-full">
        <span className="text-gray-800">Total</span>
        <span className="text-lg font-bold text-gray-900">$49</span>
      </div>
      {error && <div className="text-red-500 text-sm mb-3">{error}</div>}
      <Button type="submit" fullWidth disabled={loading || !stripe}>
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
} 
 
 
