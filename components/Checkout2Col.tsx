"use client";

import { useEffect, useState, FormEvent } from "react";
import {
  PaymentElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import PremiumButton from "./ui/PremiumButton";

// helper function for currency formatting
const formatUSD = (cents: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    cents / 100
  );

export default function Checkout2Col({
  amountCents = 4900, // $49.00 default
}: {
  amountCents?: number;
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // Optional: Apple Pay / Google Pay (shows only if available)
  const [paymentRequest, setPaymentRequest] = useState<any>(null);

  useEffect(() => {
    if (!stripe) return;
    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: { label: "Start With Genie", amount: amountCents },
      requestPayerName: true,
      requestPayerEmail: true,
    });
    pr.canMakePayment().then((res) => {
      if (res) setPaymentRequest(pr);
    });
  }, [stripe, amountCents]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: { email, name },
        },
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="w-full text-[16px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 items-start">
        {/* LEFT: Email + Billing Name */}
        <div className="grid gap-4 content-start">
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
        </div>

        {/* RIGHT: PRB optional + PaymentElement */}
        <div className="grid gap-3 content-start">
          {paymentRequest && (
            <div className="mb-1">
              <PaymentRequestButtonElement options={{ paymentRequest }} />
            </div>
          )}
          <div className="rounded-xl border border-black/10 p-3 transition-shadow duration-150 hover:shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
            <PaymentElement
              options={{
                fields: { billingDetails: "never" },
                layout: "tabs",
              }}
            />
          </div>
        </div>
      </div>

      {/* Total row above button */}
      <div className="mt-4 flex items-center justify-between text-[15px] font-medium">
        <span>Total</span>
        <span>{formatUSD(amountCents)}</span>
      </div>

      {/* Pay button */}
      <PremiumButton
        type="submit"
        disabled={loading || !stripe}
        size="md"
        className="mt-3 w-full"
      >
        {loading ? "Processing…" : "Pay Now"}
      </PremiumButton>

      {/* Trust line below button */}
      <p className="mt-2 flex items-center justify-center gap-2 text-sm text-neutral-500">
        Payments securely processed by Stripe
      </p>
    </form>
  );
}