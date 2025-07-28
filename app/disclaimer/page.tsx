import React from 'react'
import type { Metadata } from 'next'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Disclaimer – Start With Genie',
  description: 'Start With Genie is not a law firm and does not provide legal or tax advice. Learn what our product is — and isn\'t — here.',
  openGraph: {
    title: 'Disclaimer – Start With Genie',
    description: 'Start With Genie is not a law firm and does not provide legal or tax advice. Learn what our product is — and isn\'t — here.',
  },
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full max-w-6xl mx-auto px-4 py-1 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 leading-tight">
            Disclaimer
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Start With Genie was built to give founders a simpler, faster way to start their LLC — but it's important to be clear about what we do and don't provide.
          </p>
        </section>

        {/* Content Sections */}
        <section className="w-full max-w-4xl mx-auto px-4 py-1">
          <div className="space-y-8">
            {/* Not a Law Firm */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Not a Law Firm
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We are not a law firm and do not provide legal advice. Nothing on this site — including our documents, guides, emails, or chat assistant — should be interpreted as legal advice.
                </p>
                <p>
                  If you need personalized legal or tax guidance, we recommend speaking with a licensed attorney or accountant.
                </p>
              </div>
            </div>

            {/* Informational Purposes Only */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Informational Purposes Only
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  All content and tools on Start With Genie are provided for general informational purposes only. They're designed to help you confidently navigate the LLC formation process on your own — not to serve as professional advice.
                </p>
              </div>
            </div>

            {/* No Filing Services */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                No Filing Services
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We do not submit filings to your state, the IRS, or any government agency. We guide you through the process, but you are responsible for submitting your own forms.
                </p>
              </div>
            </div>

            {/* Use at Your Own Risk */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Use at Your Own Risk
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We aim to keep everything accurate and helpful, but we make no guarantees. Using our tools is at your own discretion and risk.
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-4">
              <p className="text-sm text-neutral-500">
                Last updated: July 28, 2025
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 