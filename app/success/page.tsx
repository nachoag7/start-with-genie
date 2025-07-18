'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import confetti from "canvas-confetti";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { XCircle, CheckCircle, RefreshCw } from "lucide-react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'success' | 'failed'>('loading');
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const clientSecret = searchParams.get("payment_intent_client_secret");
        
        if (!clientSecret) {
          setPaymentStatus('failed');
          setError("Payment information not found.");
          return;
        }

        const stripe = await stripePromise;
        if (!stripe) {
          setPaymentStatus('failed');
          setError("Stripe failed to load.");
          return;
        }

        const { paymentIntent, error } = await stripe.retrievePaymentIntent(clientSecret);

        if (error) {
          setPaymentStatus('failed');
          setError(error.message || 'Failed to verify payment status.');
          return;
        }

        if (paymentIntent && paymentIntent.status === 'succeeded') {
          setPaymentStatus('success');
          // Fire confetti for successful payment
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            scalar: 1.1,
            ticks: 200,
            zIndex: 9999,
            colors: ["#3A8DFF", "#1F6BFF", "#7DD3FC", "#F3F4F6"],
          });
        } else {
          setPaymentStatus('failed');
          setError(
            paymentIntent && paymentIntent.status
              ? `Payment failed or is incomplete. Status: ${paymentIntent.status}`
              : 'Payment was not completed successfully.'
          );
        }
      } catch (err) {
        setPaymentStatus('failed');
        setError("Failed to verify payment status.");
      }
    };

    verifyPayment();
  }, [searchParams]);

  if (paymentStatus === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fbff] via-[#eaf1fa] to-[#f3f6fa] px-4">
        <div className="bg-white/90 rounded-3xl shadow-2xl max-w-lg w-full mx-auto p-12 flex flex-col items-center gap-8 border border-gray-100 backdrop-blur-md">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-2">
            <RefreshCw className="w-10 h-10 text-blue-500 animate-spin" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Verifying your payment...
          </h2>
          <p className="text-gray-600 text-center text-base">
            Please wait while we confirm your payment status.
          </p>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fbff] via-[#eaf1fa] to-[#f3f6fa] px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white/90 rounded-3xl shadow-2xl max-w-lg w-full mx-auto p-12 flex flex-col items-center gap-8 border border-gray-100 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 420, damping: 22, delay: 0.2 }}
            className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-2 shadow-sm"
          >
            <XCircle className="w-10 h-10 text-red-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="text-2xl font-semibold text-gray-900 text-center"
          >
            Payment Failed
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className="text-gray-600 text-center text-base"
          >
            {error || "Your payment was not completed successfully. Please try again."}
          </motion.p>
          
          <div className="flex flex-col gap-3 w-full">
            <Link href="/checkout">
              <Button size="lg" fullWidth className="flex items-center justify-center gap-2 text-base font-semibold rounded-xl shadow-sm bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] hover:brightness-110 hover:shadow-md transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Try Again
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="lg" fullWidth className="text-gray-600 hover:text-gray-800">
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fbff] via-[#eaf1fa] to-[#f3f6fa] px-4 relative overflow-hidden">
      {/* Subtle motion blur background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, #3A8DFF22 0%, #fff0 70%)",
          filter: "blur(32px)",
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/90 rounded-3xl shadow-2xl max-w-lg w-full mx-auto p-12 flex flex-col items-center gap-8 border border-gray-100 relative z-10 backdrop-blur-md"
      >
        {/* Apple-style checkmark animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 420, damping: 22, delay: 0.2 }}
          className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-2 shadow-sm"
        >
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            />
          </svg>
        </motion.div>
        {/* Fade-in welcome text */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="text-2xl font-semibold text-gray-900 text-center"
        >
          You're all set. Welcome to Start With Genie.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="text-gray-600 text-center text-base"
        >
          Your payment was successful. Let's get your LLC details to complete your setup.
        </motion.p>
        <Link href="/onboarding" className="w-full">
          <Button size="lg" fullWidth className="mt-2 flex items-center justify-center gap-2 text-base font-semibold rounded-xl shadow-sm bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] hover:brightness-110 hover:shadow-md transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Start Onboarding <span aria-hidden>→</span>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
} 
 

