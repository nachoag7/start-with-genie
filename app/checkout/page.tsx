"use client";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../lib/stripe";
import CheckoutForm from "../../components/CheckoutForm";
import { motion } from "framer-motion";
import { PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutPage() {
  // Only animate if not already animated in this session
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
  const [clientSecret, setClientSecret] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.sessionStorage.getItem("checkoutAnimated")) {
        setShouldAnimate(true);
        window.sessionStorage.setItem("checkoutAnimated", "true");
      }
    }
  }, []);

  // Fetch clientSecret from API on mount
  useEffect(() => {
    fetch("/api/create-payment-intent", { method: "POST" })
      .then(res => res.json())
      .then(data => {
        if (data.clientSecret) setClientSecret(data.clientSecret);
      });
  }, []);

  const appearance = {
    theme: 'none' as any,
    variables: {
      fontFamily: 'Inter, sans-serif',
      fontSizeBase: '16px',
      colorPrimary: '#1e40af',
      colorText: '#111827',
      colorBackground: '#ffffff',
      spacingUnit: '8px',
      borderRadius: '8px',
      colorBorder: '#e5e7eb',
      colorTextSecondary: '#6b7280',
    },
    rules: {
      '.Input': {
        padding: '12px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        backgroundColor: '#f9fafb',
      },
      '.Label': {
        fontWeight: '500',
        color: '#374151',
        fontSize: '14px',
        marginBottom: '4px',
      },
      '.Tab': {
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '12px 16px',
        marginBottom: '6px',
      },
      '.Tab--selected': {
        backgroundColor: '#e0e7ff',
        borderColor: '#1e40af',
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          {shouldAnimate ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <CheckoutForm />
            </motion.div>
          ) : (
            <CheckoutForm />
          )}
        </Elements>
      )}
    </div>
  );
} 
 
 
 
 