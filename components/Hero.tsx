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
  subtitle = "Answer a few questions and get a personalized guide to file your LLC, get your EIN, and sign your Operating Agreement. If it doesn't save you time and money, get a full refund within 7 days"
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
    return isMobile ? "Need an LLC?" : "Confused about launching your business?";
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
            {subtitle}
          </p>

          <div className="mt-8">
            <Link href="/onboarding">
              <PremiumButton size="md" className="inline-block hover:scale-[1.01] hover:shadow-lg transition-all duration-200 ease-smooth">
                <span className="text-white">
                  See how easy it is
                </span>
              </PremiumButton>
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