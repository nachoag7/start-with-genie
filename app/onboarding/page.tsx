'use client'

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { US_STATES } from "../../lib/utils";
import { supabase } from "../../lib/supabase";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../../components/Footer'
import { Button } from '../../components/ui/Button'
import PremiumButton from '../../components/ui/PremiumButton'
import { CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import bcrypt from 'bcryptjs';
import { generateLLCFilingInstructions, generateEINGuide, generateOperatingAgreement } from '../../lib/pdf-generator';
import Script from 'next/script';
// Move libraries array outside component to fix performance warning
const GOOGLE_MAPS_LIBRARIES: ("places")[] = ["places"];

// Replace the interface with only the fields used in the new split form
interface OnboardingFormData {
  fullName: string;
  email: string;
  password: string;
  state: string;
  businessName: string;
  businessAddress: string;
}

// Capitalize first letter of each word
function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Add this before the component definition
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function OnboardingPage() {
  // All hooks at the top
  const [view, setView] = useState<'pre' | 'form' | 'success'>('pre');
  const [formStep, setFormStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const [selectedState, setSelectedState] = useState("");
  const autocompleteOptions = { componentRestrictions: { country: 'us' } };
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<OnboardingFormData>({
    mode: "onChange"
  });
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Move these hooks to the top of the component
  const [successFade, setSuccessFade] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper functions must be defined here so they are available in all render branches
  const nextStep = async () => {
    let fieldsToValidate: (keyof OnboardingFormData)[] = [];
    if (formStep === 1) {
      fieldsToValidate = ['fullName', 'email', 'password', 'state'];
      // Check password length before allowing next step
      const passwordValue = watch('password');
      if (!passwordValue || passwordValue.length <= 6) {
        setError('Password must be more than 6 characters.');
        return;
      }
    } else if (formStep === 2) {
      fieldsToValidate = ['businessName', 'businessAddress'];
    }
    const valid = await trigger(fieldsToValidate);
    if (valid && formStep < 2) {
      setError(""); // Clear error if moving forward
      setFormStep(formStep + 1);
    }
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const onSubmit = async (data: OnboardingFormData) => {
    setIsSubmitting(true);
    setError("");
    // Ensure capitalization on submit
    const formattedBusinessName = capitalizeWords(data.businessName);
    data.fullName = capitalizeWords(data.fullName);
    data.businessName = formattedBusinessName;
    data.businessAddress = businessAddress;
    data.state = selectedState || data.state;
    try {
      // 1. Create Supabase Auth user
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
      if (signUpError) {
        setError(signUpError.message);
        setIsSubmitting(false);
        return;
      }
      // 2. Insert into users table using auth user id
      const userId = signUpData?.user?.id;
      if (!userId) {
        setError('Could not get user ID after sign up.');
        setIsSubmitting(false);
        return;
      }
      const { error: insertError } = await supabase.from("users").insert({
        id: userId,
        full_name: data.fullName,
        email: data.email,
        business_name: data.businessName,
        state: data.state,
        status: "pending",
        business_address: data.businessAddress,
      });
      if (insertError) {
        setError(insertError.message);
        setIsSubmitting(false);
        return;
      }
      
      // 3. Brief loading state then redirect
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 4. Redirect to dashboard in preview mode
      router.push('/dashboard?preview=true');
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const extractStateFromAddress = (address: string) => {
    // Try to match state abbreviation or full name
    for (const s of US_STATES) {
      if (address.includes(s.value) || address.includes(s.label)) {
        return s.value;
      }
    }
    return '';
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      const formatted = place.formatted_address || '';
      setBusinessAddress(formatted);
      setValue('businessAddress', formatted, { shouldValidate: true });
      // Extract state from address string
      const detectedState = extractStateFromAddress(formatted);
      setSelectedState(detectedState);
      setValue('state', detectedState, { shouldValidate: true });
    }
  };

  // Fire confetti on pre-form screen mount
  React.useEffect(() => {
    if (view === 'pre') {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        scalar: 1.1,
        ticks: 180,
        zIndex: 9999,
        colors: ['#3A8DFF', '#1F6BFF', '#7DD3FC', '#F3F4F6'],
      });
    }
  }, [view]);

  // Move this useEffect to the top level, after all useState declarations
  useEffect(() => {
    if (view === 'success') {
      setSuccessFade(true); // Always reset fade on entering success
      const fadeTimeout = setTimeout(() => setSuccessFade(false), 1800);
      const redirectTimeout = setTimeout(() => {
        console.log('Redirecting to /dashboard');
        router.push('/dashboard');
      }, 2200);
      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(redirectTimeout);
      };
    }
  }, [view, router]);

  // Conditional rendering instead of early return
  let content: JSX.Element = <></>;
  if (view === 'pre') {
    content = (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-lg w-full mx-auto bg-white/90 rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-12 border border-gray-100 backdrop-blur-md"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-3xl font-semibold text-gray-900 text-center leading-tight mt-4"
          >
            Let's get your LLC launch tailored to you.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-lg text-gray-600 text-center leading-relaxed max-w-md"
          >
            We just need a few quick details to generate your documents and steps.
          </motion.p>
          <PremiumButton
            size="lg"
            className="w-full"
            onClick={() => setView('form')}
          >
            Continue
          </PremiumButton>
        </motion.div>
      </div>
    );
  } else if (view === 'success') {
    // In the render, just use conditional rendering for the success screen, not conditional hook calls
    content = (
      <AnimatePresence mode="wait">
        <motion.div
          key="success-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: successFade ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-lg w-full mx-auto bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 border border-gray-100 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 420, damping: 22, delay: 0.1 }}
              className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-2 shadow-sm"
            >
              <CheckCircle className="w-12 h-12 text-blue-600" strokeWidth={2.5} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="text-2xl font-semibold text-gray-900 text-center"
            >
              You’re ready.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="text-base text-gray-600 text-center"
            >
              Your personalized instructions and documents are now available.
            </motion.p>
            {/* Button removed: redirect is handled by useEffect */}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  } else {
    // Main form content (existing code)
    const renderStep1 = () => (
      <motion.div
        key="step1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-neutral-600 mb-1 block">
              Your full name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-base bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="John Smith"
              {...register("fullName", { required: "Full name is required" })}
              value={fullName}
              onChange={e => {
                const value = capitalizeWords(e.target.value);
                setFullName(value);
                setValue('fullName', value, { shouldValidate: true });
              }}
              aria-label="Your full name"
              required
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-600 mb-1 block">
              Email address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-base bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="john@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              aria-label="Email address"
              required
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-600 mb-1 block">
              Create a password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-base bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
              aria-label="Create a password"
              required
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <PremiumButton
          type="button"
          onClick={nextStep}
          size="md"
          className="mt-2 w-full"
        >
          Continue
        </PremiumButton>
      </motion.div>
    );

    const renderStep2 = () => (
      <motion.div
        key="step2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-neutral-600 mb-1 block">
              LLC name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-base bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Acme Corporation"
              {...register("businessName", { required: "Business name is required" })}
              value={businessName}
              onChange={e => {
                const value = capitalizeWords(e.target.value);
                setBusinessName(value);
                setValue('businessName', value, { shouldValidate: true });
              }}
              aria-label="Business name"
              required
            />
            {errors.businessName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.businessName.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-600 mb-1 block">
              Business address
            </label>
            {GOOGLE_MAPS_API_KEY ? (
              <LoadScript
                googleMapsApiKey={GOOGLE_MAPS_API_KEY as string}
                libraries={GOOGLE_MAPS_LIBRARIES}
              >
                <Autocomplete
                  onLoad={setAutocomplete}
                  onPlaceChanged={onPlaceChanged}
                  options={autocompleteOptions}
                >
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-base bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="123 Main St, Denver, CO 80202"
                    {...register("businessAddress", { required: "Business address is required" })}
                    value={businessAddress}
                    onChange={e => {
                      setBusinessAddress(e.target.value);
                      setValue('businessAddress', e.target.value, { shouldValidate: true });
                      const detectedState = extractStateFromAddress(e.target.value);
                      setSelectedState(detectedState);
                      setValue('state', detectedState, { shouldValidate: true });
                    }}
                    aria-label="Business address"
                    required
                  />
                </Autocomplete>
              </LoadScript>
            ) : (
              <input
                type="text"
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-base bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="123 Main St, Denver, CO 80202"
                {...register("businessAddress", { required: "Business address is required" })}
                value={businessAddress}
                onChange={e => {
                  setBusinessAddress(e.target.value);
                  setValue('businessAddress', e.target.value, { shouldValidate: true });
                  const detectedState = extractStateFromAddress(e.target.value);
                  setSelectedState(detectedState);
                  setValue('state', detectedState, { shouldValidate: true });
                }}
                aria-label="Business address"
                required
              />
            )}
            {errors.businessAddress && (
              <p className="text-xs text-red-500 mt-1">
                {errors.businessAddress.message}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-neutral-600 mb-1 block">
              What state are you registering in?
            </label>
            <select
              {...register('state', { required: 'State is required' })}
              value={selectedState}
              onChange={e => setSelectedState(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-base bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            >
              <option value="">Select a state</option>
              {US_STATES.map(state => (
                <option key={state.value} value={state.value}>{state.label}</option>
              ))}
            </select>
            {errors.state && (
              <span className="text-xs text-red-500 mt-1 block">{errors.state.message}</span>
            )}
          </div>
        </div>
        <div className="mt-2">
          <PremiumButton
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full px-8 py-4 text-base font-medium transition-all duration-300 ease-in-out"
          >
            <span className="text-white text-center">
              {isSubmitting ? "Setting up..." : "Get Started"}
            </span>
          </PremiumButton>
        </div>
      </motion.div>
    );

    content = (
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="max-w-lg mx-auto px-6 py-16 space-y-8"
          >
            {/* Progress Indicator */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center space-x-2">
                  {[1, 2].map((step) => (
                    <React.Fragment key={step}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-base font-medium transition-colors ${
                          step <= formStep
                            ? 'bg-blue-600 text-white'
                            : 'bg-neutral-200 text-neutral-500'
                        }`}
                      >
                        {step}
                      </div>
                      {step < 2 && (
                        <div
                          className={`w-12 h-0.5 transition-colors ${
                            step < formStep ? 'bg-blue-600' : 'bg-neutral-200'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <h1 className="text-2xl font-semibold text-neutral-800 mb-2">Let's Get Your LLC Started</h1>
              <p className="text-sm text-neutral-500">Step {formStep} of 2</p>
            </div>
            
            {!GOOGLE_MAPS_API_KEY && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-md text-xs"
              >
                <strong>Note:</strong> Address autocomplete is disabled. You can still enter your address manually.
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <AnimatePresence mode="wait">
                {formStep === 1 && renderStep1()}
                {formStep === 2 && renderStep2()}
              </AnimatePresence>
            </form>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md p-3"
              >
                {error}
              </motion.div>
            )}
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-795342123/fw8RCKgq1fcaEI_Ljd9A',
        transaction_id: ''
      });
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=AW-795342123`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', 'AW-795342123');
        `}
      </Script>
      {content}
    </>
  );
}
 




