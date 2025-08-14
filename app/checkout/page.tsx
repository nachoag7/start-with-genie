"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../lib/stripe";
import Checkout2Col from "../../components/Checkout2Col";

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  // Get client secret from URL params or fetch from API
  useEffect(() => {
    const urlClientSecret = searchParams.get('client_secret');
    
    if (urlClientSecret) {
      setClientSecret(urlClientSecret);
      setError(null);
    } else {
      // Fallback to fetching from API
      fetch("/api/create-payment-intent", { method: "POST" })
        .then(res => {
          if (!res.ok) {
            return res.json().then(data => {
              throw new Error(data.error || 'Failed to create payment intent');
            });
          }
          return res.json();
        })
        .then(data => {
          if (data.clientSecret) {
            setClientSecret(data.clientSecret);
            setError(null);
          }
        })
        .catch(err => {
          console.error('Payment intent error:', err);
          setError(err.message);
        });
    }
  }, [searchParams]);

  const appearance = {
    variables: {
      fontSizeBase: "16px",
      borderRadius: "12px",
      spacingUnit: "10px",
      colorText: "#111",
      colorTextPlaceholder: "#9CA3AF",
    },
    rules: {
      ".Input": { minHeight: "44px", padding: "10px 12px" },
      ".Label": { fontSize: "12px", marginBottom: "6px", color: "#525252" },
      ".Tab, .Block": { padding: "10px 12px", borderRadius: "12px" },
      ".Input:focus": { boxShadow: "0 0 0 2px rgba(37,99,235,0.25)" },
    },
    labels: "above" as const,
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">Payment setup error. Please try again.</div>
      </div>
    );
  }

  // Show payment form immediately, clientSecret will load in background
  if (!clientSecret) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-8 min-h-[100svh]">
        <section className="mx-auto w-full max-w-[720px]">
          <h1 className="text-center font-semibold text-[clamp(20px,2.1vw,26px)] leading-tight tracking-[-0.01em]">
            Everything you need to launch your business, guided step by step.
          </h1>
          <p className="mt-1 text-center text-[15px] leading-snug text-neutral-600">
            All in one clean, personalized dashboard.
          </p>

          <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="text-center text-gray-600 py-8">
              Setting up payment form...
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8 min-h-[100svh]">
      <section className="mx-auto w-full max-w-[720px]">
        <h1 className="text-center font-semibold text-[clamp(20px,2.1vw,26px)] leading-tight tracking-[-0.01em]">
          Everything you need to launch your business, guided step by step.
        </h1>
        <p className="mt-1 text-center text-[15px] leading-snug text-neutral-600">
          All in one clean, personalized dashboard.
        </p>

        <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
            <Checkout2Col />
          </Elements>
        </div>
      </section>
    </main>
  );
} 
 
 
 