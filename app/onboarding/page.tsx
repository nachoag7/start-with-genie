'use client'

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { US_STATES } from "../../lib/utils";
import { supabase } from "../../lib/supabase";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../../components/Footer'

// Move libraries array outside component to fix performance warning
const GOOGLE_MAPS_LIBRARIES: ("places")[] = ["places"];

interface OnboardingFormData {
  fullName: string;
  email: string;
  password: string;
  businessName: string;
  state: string;
  isSoloOwner: string; // "yes" or "no"
  businessType?: string;
  businessAddress: string;
  partnerName?: string;
  ownershipPrimary?: string;
  ownershipPartner?: string;
}

// Capitalize first letter of each word
function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
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

  const isSoloOwner = watch('isSoloOwner');

  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Auto-capitalize as user types
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = capitalizeWords(e.target.value);
    setFullName(value);
    setValue('fullName', value, { shouldValidate: true });
  };
  
  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = capitalizeWords(e.target.value);
    setBusinessName(value);
    setValue('businessName', value, { shouldValidate: true });
  };
  
  const handleBusinessAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessAddress(e.target.value);
    setValue('businessAddress', e.target.value, { shouldValidate: true });
  };
  
  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      const formatted = place.formatted_address || '';
      setBusinessAddress(formatted);
      setValue('businessAddress', formatted, { shouldValidate: true });
      // Extract state from address components
      const stateComponent = place.address_components?.find((c: any) => c.types.includes('administrative_area_level_1'));
      if (stateComponent) {
        const abbr = stateComponent.short_name;
        const full = stateComponent.long_name;
        const match = US_STATES.find(s => s.value === abbr || s.label === full);
        if (match) {
          setSelectedState(match.value);
          setValue('state', match.value, { shouldValidate: true });
        }
      }
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof OnboardingFormData)[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ['fullName', 'email', 'password'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['businessName', 'businessAddress', 'state'];
    }
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = async (data: OnboardingFormData) => {
    setIsLoading(true);
    setError("");

    // Ensure capitalization on submit
    const formattedFullName = capitalizeWords(data.fullName);
    const formattedBusinessName = capitalizeWords(data.businessName);
    data.fullName = formattedFullName;
    data.businessName = formattedBusinessName;
    data.businessAddress = businessAddress;
    data.state = selectedState || data.state;

    // Validate ownership if multi-member
    if (data.isSoloOwner === 'no') {
      const own1 = parseFloat(data.ownershipPrimary || '0');
      const own2 = parseFloat(data.ownershipPartner || '0');
      if (own1 + own2 !== 100) {
        setError('Ownership percentages must add up to 100.');
        setIsLoading(false);
        return;
      }
    }

    try {
      // Create user account with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
            business_name: data.businessName,
            state: data.state,
            is_solo_owner: data.isSoloOwner,
            business_type: data.businessType,
            business_address: data.businessAddress,
            partner_name: data.partnerName || null,
            ownership_primary: data.ownershipPrimary || null,
            ownership_partner: data.ownershipPartner || null,
          },
        },
      });

      if (authError) {
        throw authError;
      }

      // Save user data to users table
      const { error: insertError } = await supabase.from("users").insert({
        id: authData.user?.id,
        full_name: data.fullName,
        email: data.email,
        business_name: data.businessName,
        state: data.state,
        status: "pending",
        is_solo_owner: data.isSoloOwner,
        business_type: data.businessType,
        business_address: data.businessAddress,
        partner_name: data.partnerName || null,
        ownership_primary: data.ownershipPrimary || null,
        ownership_partner: data.ownershipPartner || null,
      });

      if (insertError) {
        throw insertError;
      }

      // Redirect to loading page (dashboard redirect handled by /loading)
      router.push("/loading");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
            className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="John Smith"
            {...register("fullName", { required: "Full name is required" })}
            value={fullName}
            onChange={handleFullNameChange}
            aria-label="Your full name"
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
            className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="john@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            aria-label="Email address"
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
            className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Create a secure password"
            {...register("password", { 
              required: "Password is required", 
              minLength: { value: 6, message: "Password must be at least 6 characters" } 
            })}
            aria-label="Password"
          />
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={nextStep}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition w-full"
      >
        Next →
      </button>
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
            What's your business called?
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Acme Corporation"
            {...register("businessName", { required: "Business name is required" })}
            value={businessName}
            onChange={handleBusinessNameChange}
            aria-label="Business name"
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
                  className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="123 Main St, Denver, CO 80202"
                  value={businessAddress}
                  onChange={handleBusinessAddressChange}
                  required
                  autoComplete="off"
                  name="businessAddress"
                  aria-label="Business address"
                />
              </Autocomplete>
            </LoadScript>
          ) : (
            <input
              type="text"
              className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="123 Main St, Denver, CO 80202"
              value={businessAddress}
              onChange={handleBusinessAddressChange}
              required
              autoComplete="off"
              name="businessAddress"
              aria-label="Business address"
            />
          )}
          {errors.businessAddress && (
            <p className="text-xs text-red-500 mt-1">
              {errors.businessAddress.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-neutral-600 mb-1 block">
            What state are you registering in?
          </label>
          <select
            className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            {...register("state", { required: "State is required" })}
            value={selectedState}
            onChange={e => {
              setSelectedState(e.target.value);
              setValue('state', e.target.value, { shouldValidate: true });
            }}
            aria-label="State selection"
          >
            <option value="">Select a state</option>
            {US_STATES.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="text-xs text-red-500 mt-1">
              {errors.state.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-neutral-600 mb-1 block">
            Brief description of business (optional)
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="e.g., Software development, Consulting, E-commerce"
            {...register("businessType")}
            aria-label="Business type description"
          />
          {errors.businessType && (
            <p className="text-xs text-red-500 mt-1">
              {errors.businessType.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={prevStep}
          className="text-sm text-neutral-500 hover:underline flex-1 text-left"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition flex-1"
        >
          Next →
        </button>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-neutral-600 mb-3 block">
            Who owns the LLC?
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 text-sm text-neutral-700 cursor-pointer">
              <input
                type="radio"
                value="yes"
                {...register("isSoloOwner", { required: "Please select an option" })}
                className="w-4 h-4 rounded-full border border-neutral-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <span>Just me</span>
            </label>
            <label className="flex items-center gap-3 text-sm text-neutral-700 cursor-pointer">
              <input
                type="radio"
                value="no"
                {...register("isSoloOwner", { required: "Please select an option" })}
                className="w-4 h-4 rounded-full border border-neutral-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <span>Me and a partner</span>
            </label>
          </div>
          {errors.isSoloOwner && (
            <p className="text-xs text-red-500 mt-1">
              {errors.isSoloOwner.message}
            </p>
          )}
        </div>

        {isSoloOwner === 'no' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3 pt-2"
          >
            <div>
              <label className="text-sm font-medium text-neutral-600 mb-1 block">
                Partner's full name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Jane Doe"
                {...register('partnerName', { required: "Partner's name is required" })}
                aria-label="Partner's full name"
              />
              {errors.partnerName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.partnerName.message}
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-neutral-600 mb-1 block">
                  Your ownership %
                </label>
                <input
                  type="number"
                  min="1"
                  max="99"
                  step="1"
                  className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="60"
                  {...register('ownershipPrimary', { required: 'Required', min: 1, max: 99 })}
                  aria-label="Your ownership percentage"
                />
                {errors.ownershipPrimary && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.ownershipPrimary.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-600 mb-1 block">
                  Partner's ownership %
                </label>
                <input
                  type="number"
                  min="1"
                  max="99"
                  step="1"
                  className="w-full px-4 py-2 border border-neutral-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="40"
                  {...register('ownershipPartner', { required: 'Required', min: 1, max: 99 })}
                  aria-label="Partner's ownership percentage"
                />
                {errors.ownershipPartner && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.ownershipPartner.message}
                  </p>
                )}
              </div>
            </div>
            <p className="text-xs text-neutral-500">Percentages must add up to 100.</p>
          </motion.div>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={prevStep}
          className="text-sm text-neutral-500 hover:underline flex-1 text-left"
        >
          ← Back
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Creating your account..." : "Get Started"}
        </button>
      </div>
    </motion.div>
  );

  return (
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
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        step <= currentStep
                          ? 'bg-blue-600 text-white'
                          : 'bg-neutral-200 text-neutral-500'
                      }`}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`w-12 h-0.5 transition-colors ${
                          step < currentStep ? 'bg-blue-600' : 'bg-neutral-200'
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-neutral-800 mb-2">Let's Get Your LLC Started</h1>
            <p className="text-sm text-neutral-500">Step {currentStep} of 3</p>
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
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
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

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-neutral-50 text-neutral-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/login">
                <button className="w-full text-sm text-neutral-600 hover:text-neutral-800 hover:underline transition-colors duration-200">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
} 