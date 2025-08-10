"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import PremiumButton from "./ui/PremiumButton";
import SampleDashboardCard from "./SampleDashboardCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16">
      {/* mesh wave background */}
      <div className="absolute inset-0 pointer-events-none bg-wave" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left: copy */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              The New Way to Start Your Business
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              We don't file for you, but we give you everything you need to set up your business with confidence. Personalized LLC filing instructions, EIN setup, and a customizable operating agreement — all for just $49.
            </p>

            <div className="mt-8 text-center md:text-left">
              <Link href="/checkout">
                <PremiumButton size="md" className="inline-block">
                  Start My LLC for $49
                </PremiumButton>
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-4 text-sm text-gray-500 text-center md:text-left">
              Flat rate. No surprise fees. Just what you need.
            </div>
          </div>

          {/* Right: dashboard preview */}
          <div>
            <div className="mt-6 md:mt-0 flex justify-center">
              <SampleDashboardCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}