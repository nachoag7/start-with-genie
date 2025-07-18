"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

interface CheckoutOverviewProps {
  onContinue: () => void;
}

export default function CheckoutOverview({ onContinue }: CheckoutOverviewProps) {
  const features = [
    "Step-by-step LLC filing instructions",
    "EIN walkthrough (Tax ID help)",
    "Customizable operating agreement",
    "Guided setup checklist",
    "Your Genie Assistant — ask anything, 24/7",
    "Instant access after checkout"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-white px-4 py-8"
      style={{
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div 
        className="w-full max-w-[540px] mx-auto text-center"
        style={{ padding: '40px' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 
            className="text-2xl font-semibold text-gray-900 mb-4"
            style={{ fontSize: '24px', fontWeight: 600 }}
          >
            Start With Genie – LLC Launch Kit
          </h1>
          <p 
            className="text-base text-gray-600 max-w-md mx-auto"
            style={{ 
              fontSize: '16px', 
              fontWeight: 400, 
              color: '#666',
              lineHeight: 1.6 
            }}
          >
            Everything you need to launch with clarity — no upsells, ever.
          </p>
        </motion.div>

        {/* Features List - Refined for Perfect Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut"
                }}
                className="flex items-start justify-start"
                style={{ 
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '16px'
                }}
              >
                {/* Icon Container for Perfect Alignment */}
                <div 
                  className="flex-shrink-0"
                  style={{ 
                    minWidth: '24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                  }}
                >
                  <CheckCircle 
                    className="text-gray-400 flex-shrink-0" 
                    strokeWidth={2}
                    style={{ 
                      width: '20px', 
                      height: '20px',
                      color: '#999'
                    }}
                  />
                </div>
                {/* Text Container */}
                <span 
                  className="text-base text-gray-700 text-left"
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: 400, 
                    color: '#333',
                    lineHeight: 1.5,
                    flex: 1
                  }}
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Price Section - Refined for No-Brainer Feel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
          style={{ marginTop: '32px', marginBottom: '16px' }}
        >
          <p 
            className="text-xl font-semibold text-gray-900"
            style={{ 
              fontSize: '21px', 
              fontWeight: 600, 
              color: '#222' 
            }}
          >
            Launch your LLC for a flat $49
          </p>
          <p 
            className="text-sm text-gray-600 mt-2"
            style={{ 
              fontSize: '14px', 
              fontWeight: 400, 
              color: '#666',
              marginBottom: '24px'
            }}
          >
            No upsells. No hidden fees. Just everything you need—done right.
          </p>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-left"
        >
          <a href="/" tabIndex={-1}>
            <Button
              variant="ghost"
              size="md"
              className="pl-0 pr-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-gray-100 rounded-lg flex items-center gap-2 transition-all duration-150"
              style={{ boxShadow: 'none', fontWeight: 500 }}
            >
              <span className="text-lg">←</span> Back to Home
            </Button>
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '32px' }}
        >
          <Button
            onClick={onContinue}
            size="lg"
            className="w-full max-w-md bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] hover:from-[#1F6BFF] hover:to-[#3A8DFF] text-white font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            style={{ boxShadow: '0 2px 8px rgba(31,107,255,0.08)' }}
          >
            Continue to Checkout
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            Secure checkout powered by Stripe
          </p>
        </motion.div>

        {/* Optional: Soft Genie watermark */}
        <div 
          className="absolute bottom-8 right-8 opacity-5 pointer-events-none"
          style={{ opacity: 0.05 }}
        >
          <div className="text-6xl">🧞‍♂️</div>
        </div>
      </div>
    </motion.div>
  );
} 