'use client';

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { RefreshCw } from "lucide-react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const verifyAndRedirect = async () => {
      const clientSecret = searchParams.get("payment_intent_client_secret");
      if (!clientSecret) {
        // Handle missing client secret, maybe redirect to an error page
        router.push("/checkout");
        return;
      }

      const stripe = await stripePromise;
      if (!stripe) {
        // Handle Stripe not loading
        router.push("/checkout"); // Or an error page
        return;
      }

      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

      if (paymentIntent && paymentIntent.status === 'succeeded') {
        router.push("/onboarding");
      } else {
        // Handle failed or pending payment
        router.push("/checkout"); // Or a payment failure page
      }
    };

    verifyAndRedirect();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fbff] to-[#f3f6fa]">
      <div className="flex flex-col items-center gap-4 text-gray-600">
        <RefreshCw className="w-10 h-10 animate-spin text-blue-500" />
        <p className="font-semibold text-lg">Verifying your payment...</p>
        <p className="text-sm">Please wait, you will be redirected shortly.</p>
      </div>
    </div>
  );
} 
 


    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-xl shadow-sm max-w-md w-full mx-auto p-8 flex flex-col items-center gap-6 border border-gray-100"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.2 }}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-2"
        >
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h2 className="text-xl font-semibold text-gray-900 text-center">Payment Successful!</h2>
        <p className="text-gray-600 text-center">Thank you for your purchase. You're one step closer to launching your business.</p>
        <Link href="/checkout" className="w-full">
          <Button size="lg" fullWidth>
            Get Started
          </Button>
        </Link>
      </motion.div>
    </div>
  );
} 
 



    verifyAndRedirect();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fbff] to-[#f3f6fa]">
      <div className="flex flex-col items-center gap-4 text-gray-600">
        <RefreshCw className="w-10 h-10 animate-spin text-blue-500" />
        <p className="font-semibold text-lg">Verifying your payment...</p>
        <p className="text-sm">Please wait, you will be redirected shortly.</p>
      </div>
    </div>
  );
} 
 

