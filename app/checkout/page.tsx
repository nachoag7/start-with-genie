"use client";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../lib/stripe";
import { motion, AnimatePresence } from "framer-motion";
import CheckoutOverview from "../../components/CheckoutOverview";
import CheckoutFormStep from "../../components/CheckoutFormStep";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<'overview' | 'checkout'>('overview');
  const [clientSecret, setClientSecret] = useState<string | undefined>(undefined);

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

  const handleContinueToCheckout = () => {
    setCurrentStep('checkout');
  };

  const handleBackToOverview = () => {
    setCurrentStep('overview');
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentStep === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CheckoutOverview onContinue={handleContinueToCheckout} />
          </motion.div>
        )}
        
        {currentStep === 'checkout' && clientSecret && (
          <motion.div
            key="checkout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
              <CheckoutFormStep onBack={handleBackToOverview} />
            </Elements>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
 
 
 