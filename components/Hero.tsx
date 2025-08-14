"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import PremiumButton from "./ui/PremiumButton";
import SampleDashboardCard from "./SampleDashboardCard";
import { SectionReveal } from "./reveal";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({ 
  title = "Everything You Need To Launch Your LLC for $49",
  subtitle = "Answer a few short questions and get a personalized step by step guide to file your LLC, get your EIN, and sign your Operating Agreement. If it doesn't save you time and money, get a full refund within 7 days"
}: HeroProps = {}) {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16">
      {/* mesh wave background */}
      <div className="absolute inset-0 pointer-events-none bg-wave md:bg-center bg-top" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left: copy */}
          <SectionReveal>
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                {title}
              </h1>
              <p className="mt-5 text-lg text-gray-600">
                {subtitle}
              </p>

              <div className="mt-8 text-center md:text-left">
                <Link href="/onboarding">
                  <PremiumButton size="md" className="inline-block hover:scale-[1.01] hover:shadow-lg transition-all duration-200 ease-smooth group">
                    <span className="relative text-white">
                      See how easy it is
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-smooth" style={{ animation: 'subtle-underline 0.3s ease-smooth' }}></span>
                    </span>
                  </PremiumButton>
                </Link>
              </div>


            </div>
          </SectionReveal>

          {/* Right: dashboard preview */}
          <SectionReveal delay={0.08}>
            <div>
              <div className="mt-6 md:mt-0 flex justify-center">
                <SampleDashboardCard />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}