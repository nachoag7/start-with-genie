'use client'

import React from 'react'
import Footer from '../../components/Footer'
import { CheckCircle, User, PackageOpen } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        {/* Header Section with logo to the left */}
        <section className="w-full max-w-6xl mx-auto px-4 py-1">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img 
              src="/genie-preview.png" 
              alt="Start With Genie" 
              className="h-8 w-8 md:h-10 md:w-10 rounded-full opacity-90"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              About Start With Genie
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-6 text-center">
            Built for founders who want clarity — not upsells.
          </p>
        </section>

        {/* Two-Column Layout */}
        <section className="w-full max-w-6xl mx-auto px-4 py-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column - Value Bullets */}
            <div className="space-y-3">
              {/* Value Bullets */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      Clear step-by-step guidance
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Every part of your LLC setup made simple — with zero confusion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <User className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      Made for first-time founders
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      No prior experience needed. You'll know exactly what to do and when.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <PackageOpen className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      No upsells. No packages.
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Just the tools and docs you actually need — all for a flat $49.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Brand Story */}
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Why We Built Genie
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Start With Genie is your personal LLC assistant — built to help you launch confidently.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  We stripped out the noise, the upsells, and the gimmicks. You get step-by-step instructions, your EIN, your agreement, and a dashboard to guide you — built like a product you'd actually want to use.
                </p>
              </div>
              
              {/* Horizontal Divider */}
              <div className="w-24 h-px bg-neutral-200 my-3"></div>
              
              {/* Founder Signature */}
              <div className="text-right">
                <p className="text-sm text-neutral-500 italic">
                  — Ignacio Aguilar, Founder of Start With Genie
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 
 
 
 