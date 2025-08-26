'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'

interface SeoPageLayoutProps {
  children: React.ReactNode
  ctaHeadline?: string
  ctaSubhead?: string
  ctaButtonText?: string
  ctaCredibility?: string
}

export default function SeoPageLayout({ 
  children, 
  ctaHeadline = "Register Your LLC Today for $49",
  ctaSubhead = "Cheaper, faster, and simpler than LegalZoom or ZenBusiness.",
  ctaButtonText = "Personalize My LLC Setup",
  ctaCredibility = "Full refund if it doesn't save you time and money."
}: SeoPageLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Use the Navbar component with CTA button */}
      <Navbar bgColor="bg-neutral-50/80" />

      {/* Page Content */}
      <main className="flex-1 pt-16">
        {children}
        
        {/* Standard CTA Section */}
        <div className="bg-blue-50 p-8 rounded-lg my-12 text-center max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">{ctaHeadline}</h3>
          <p className="text-lg text-neutral-600 mb-6">
            {ctaSubhead}
          </p>
          <Link href="/onboarding">
            <button className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-8 py-4 text-base font-medium text-white hover:bg-[#2f6fe0] transition-all duration-200 hover:scale-105 shadow-[0_6px_18px_rgba(59,130,246,0.35)]">
              {ctaButtonText}
            </button>
          </Link>
          <p className="text-sm text-neutral-500 mt-4">
            {ctaCredibility}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
} 