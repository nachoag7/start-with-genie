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
    <section className="relative overflow-hidden bg-white pt-0 pb-6 sm:pt-1 sm:pb-12">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-16">
          <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-8 max-w-lg mx-auto">
            {/* Main Content */}
            <main className="flex flex-col items-start text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mt-2 sm:mt-4 max-w-md">
                {getTitle()}
              </h1>

              <p className="mt-4 sm:mt-6 text-gray-600 max-w-sm">
                Just $49 for the complete kit. If it doesn't save you time and money, get a full refund.
              </p>

              <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800">Guided LLC Registration</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800">Expedited EIN Application</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800">Customized Operating Agreement</span>
                </li>
              </ul>

              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-8 py-4 text-base font-medium text-white hover:bg-[#2f6fe0] transition-all duration-200 hover:scale-105 shadow-[0_6px_18px_rgba(59,130,246,0.35)] mt-6 sm:mt-8 w-full"
              >
                Personalize My LLC Setup
              </Link>
              
              <p className="text-xs text-gray-400 text-center mt-4 w-full">
                Full refund if our kit doesn't save you time and money.
              </p>

              {/* Trust Strip */}
              <div className="flex justify-center mt-3 w-full">
                <div className="inline-flex items-center bg-gray-50 rounded-full px-4 py-2 shadow-sm border border-blue-600">
                  <span className="text-sm font-medium text-gray-700 text-center">
                    3 new LLCs started with Genie this week
                  </span>
                </div>
              </div>
            </main>
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