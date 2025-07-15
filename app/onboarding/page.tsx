"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { US_STATES } from "../../lib/utils";
import { supabase } from "../../lib/supabase";

interface OnboardingFormData {
  fullName: string;
  email: string;
  password: string;
  businessName: string;
  state: string;
  isSoloOwner: string; // "yes" or "no"
  businessType?: string;
  businessAddress: string; // ADDED
  partnerName?: string; // NEW
  ownershipPrimary?: string; // NEW
  ownershipPartner?: string; // NEW
}

export default function OnboardingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [memberCount, setMemberCount] = useState<'single' | 'multi'>('single');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OnboardingFormData>();

  const isSoloOwner = watch('isSoloOwner');

  const onSubmit = async (data: OnboardingFormData) => {
    setIsLoading(true);
    setError("");

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
            business_address: data.businessAddress, // ADDED
            partner_name: data.partnerName || null, // NEW
            ownership_primary: data.ownershipPrimary || null, // NEW
            ownership_partner: data.ownershipPartner || null, // NEW
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
        business_address: data.businessAddress, // ADDED
        partner_name: data.partnerName || null, // NEW
        ownership_primary: data.ownershipPrimary || null, // NEW
        ownership_partner: data.ownershipPartner || null, // NEW
      });

      if (insertError) {
        throw insertError;
      }

      // Redirect to loading page
      router.push("/loading");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Let's get started
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Tell us about your business and we'll create your personalized LLC setup guide.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Name"
              placeholder="Your first name"
              {...register("fullName", { required: "Full name is required" })}
              error={errors.fullName?.message}
            />

            <Input
              label="Email"
              type="email"
              placeholder="Your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={errors.email?.message}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              error={errors.password?.message}
            />

            <Input
              label="Business name"
              placeholder="Name of your business"
              {...register("businessName", { required: "Business name is required" })}
              error={errors.businessName?.message}
            />

            <Input
              label="Business address"
              placeholder="123 Main St, Denver, CO 80202"
              {...register("businessAddress", { required: "Business address is required" })}
              error={errors.businessAddress?.message}
            />

            <Select
              label="Which state are you setting it up in?"
              options={US_STATES}
              {...register("state", { required: "State is required" })}
              error={errors.state?.message}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Who owns the LLC?
              </label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="yes"
                    {...register("isSoloOwner", { required: "Please select an option" })}
                    className="form-radio text-primary-600"
                  />
                  <span className="ml-2">Just me</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="no"
                    {...register("isSoloOwner", { required: "Please select an option" })}
                    className="form-radio text-primary-600"
                  />
                  <span className="ml-2">Me and a partner</span>
                </label>
              </div>
              {errors.isSoloOwner && (
                <p className="text-sm text-red-600 mt-1">{errors.isSoloOwner.message}</p>
              )}
            </div>

            {isSoloOwner === 'no' && (
              <>
                <Input
                  label="Second member's name"
                  placeholder="Partner's full name"
                  {...register('partnerName', { required: "Partner's name is required" })}
                  error={errors.partnerName?.message}
                />
                <div className="flex gap-4">
                  <Input
                    label="Your ownership %"
                    type="number"
                    min="1"
                    max="99"
                    step="1"
                    {...register('ownershipPrimary', { required: 'Required', min: 1, max: 99 })}
                    error={errors.ownershipPrimary?.message}
                  />
                  <Input
                    label="Partner's ownership %"
                    type="number"
                    min="1"
                    max="99"
                    step="1"
                    {...register('ownershipPartner', { required: 'Required', min: 1, max: 99 })}
                    error={errors.ownershipPartner?.message}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">Percentages must add up to 100.</div>
              </>
            )}

            <Input
              label="Business type (optional)"
              placeholder="What do you do? (optional)"
              {...register("businessType")}
              error={errors.businessType?.message}
            />

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating your account..." : "Get Started"}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/login">
                <Button variant="outline" className="w-full">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 