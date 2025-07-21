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
 

