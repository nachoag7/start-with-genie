"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import PremiumButton from "./ui/PremiumButton";
import CompactDashboardCard from "./CompactDashboardCard";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({ 
  title,
  subtitle
}: HeroProps = {}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getTitle = () => {
    if (title) return title; // Use custom title if provided
    return "Confused about registering your LLC?";
  };

  const getSubtitle = () => {
    if (subtitle) return subtitle; // Use custom subtitle if provided
    return "Get a personalized guide to file your LLC, get your EIN, and sign your Operating Agreement for just $49. If it doesn't save you time and money get a full refund.";
  };
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-12">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            {getTitle()}
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            {getSubtitle()}
          </p>

          <div className="mt-8">
            <Link
              href="/onboarding"
              className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-8 py-4 text-base font-medium text-white hover:bg-[#2f6fe0] transition-all duration-200 hover:scale-105 shadow-[0_6px_18px_rgba(59,130,246,0.35)]"
            >
              See how easy it is
            </Link>
          </div>
        </div>

        {/* Dashboard preview below hero */}
        <div className="flex justify-center">
          <CompactDashboardCard />
        </div>
      </div>
    </section>
  );
}