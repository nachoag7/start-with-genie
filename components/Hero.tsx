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
    return "Register Your LLC With Total Confidence.";
  };

  const getSubtitle = () => {
    if (subtitle) return subtitle; // Use custom subtitle if provided
    return "Get a personalized guide to file your LLC, get your EIN, and sign your Operating Agreement for just $49. If it doesn't save you time and money get a full refund.";
  };
  return (
    <section className="relative overflow-hidden bg-white pt-0 pb-6 sm:pt-0 sm:pb-12">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="max-w-6xl mx-auto mb-4 sm:mb-8">
          <div className="max-w-2xl mx-auto">
            {/* Main Content */}
            <main className="flex flex-col items-center text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mt-0 sm:mt-0 max-w-2xl">
                {getTitle()}
              </h1>

              <p className="mt-2 sm:mt-3 text-gray-600 max-w-lg text-base sm:text-lg">
                Just $49 for the complete kit. If it doesn't save you time and money, get a full refund.
              </p>

              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-500 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800 text-base sm:text-lg">Guided LLC Registration</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-500 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800 text-base sm:text-lg">Guided EIN Application</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-500 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800 text-base sm:text-lg">Customized Operating Agreement</span>
                </li>
              </ul>

              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-8 py-4 text-base font-medium text-white hover:bg-[#2f6fe0] transition-all duration-200 hover:scale-105 shadow-[0_6px_18px_rgba(59,130,246,0.35)]"
              >
                Personalize My LLC Setup
              </Link>
              
              {/* Refund Policy */}
              <div className="mt-4 w-full max-w-md mx-auto text-center">
                <p className="text-base font-semibold text-gray-900 mb-1">
                  Covered by <Link href="/refund" className="text-blue-600 hover:text-blue-800 underline">The Genie Policy</Link>
                </p>
                <p className="text-sm text-gray-600">
                  If our kit doesn't save you time and money, get a full refund. It's that simple.
                </p>
              </div>

              {/* Trust Strip */}
              <div className="flex justify-center mt-2 w-full">
                <div className="inline-flex items-center bg-gray-50 rounded-full px-3 py-1.5 shadow-sm border border-blue-600">
                  <span className="text-xs font-medium text-gray-700 text-center">
                    3 new LLCs started with Genie this week
                  </span>
                </div>
              </div>
            </main>
          </div>
        </div>

      </div>
    </section>
  );
}