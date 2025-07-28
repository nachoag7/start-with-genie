"use client";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../lib/stripe";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import CheckoutOverview from "../../components/CheckoutOverview";
import CheckoutForm from "../../components/CheckoutForm";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<'overview' | 'checkout'>('overview');
  const [clientSecret, setClientSecret] = useState<string | undefined>(undefined);
  const router = useRouter();

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
    <div className="min-h-screen relative">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => {
          if (window.history.length > 1) {
            router.back();
          } else {
            router.push("/");
          }
        }}
        className="absolute top-8 left-4 sm:top-10 sm:left-6 z-20 flex items-center text-gray-500 hover:text-blue-700 text-sm sm:text-base font-medium transition-colors gap-1 sm:gap-2 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ textDecoration: 'none', fontWeight: 500 }}
      >
        <span className="text-base sm:text-lg">←</span> Back
      </button>

      <AnimatePresence mode="wait">
        {currentStep === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-16 sm:pt-20"
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
            className="pt-16 sm:pt-20"
          >
            <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
              <CheckoutForm onBack={handleBackToOverview} />
            </Elements>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
 
 
 