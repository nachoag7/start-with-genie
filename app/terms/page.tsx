import React from 'react'
import type { Metadata } from 'next'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions – Start With Genie',
  description: 'These terms explain how Start With Genie works, what we\'re responsible for, and what you agree to when using our service.',
  openGraph: {
    title: 'Terms & Conditions – Start With Genie',
    description: 'These terms explain how Start With Genie works, what we\'re responsible for, and what you agree to when using our service.',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full max-w-6xl mx-auto px-4 py-1 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Welcome to Start With Genie. These terms outline what you agree to by using our service, and what we're responsible for. We've kept things as clear and simple as possible.
          </p>
        </section>

        {/* Content Sections */}
        <section className="w-full max-w-4xl mx-auto px-4 py-1">
          <div className="space-y-8">
            {/* What You're Agreeing To */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                What You're Agreeing To
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  By using Start With Genie, you agree to follow these terms and use the platform lawfully. If you don't agree, you shouldn't use the service.
                </p>
              </div>
            </div>

            {/* Not a Law Firm */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Not a Law Firm
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  Start With Genie is not a law firm and does not provide legal advice. We provide tools, guides, and templates to help you confidently handle your LLC setup — but nothing here should be considered legal counsel.
                </p>
              </div>
            </div>

            {/* What We Provide */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                What We Provide
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  For a one-time flat fee, we provide:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Step-by-step instructions tailored to your state</li>
                  <li>An EIN guide to help you apply with the IRS</li>
                  <li>A downloadable Operating Agreement</li>
                  <li>Access to a personalized dashboard</li>
                </ul>
                <p>
                  We do not file any forms on your behalf or act as your agent.
                </p>
              </div>
            </div>

            {/* Your Responsibilities */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Your Responsibilities
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  You're responsible for:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Using the information correctly and following your state's official instructions</li>
                  <li>Filing your own documents with your state or the IRS</li>
                  <li>Making sure your LLC stays compliant over time</li>
                </ul>
              </div>
            </div>

            {/* Payments & Refunds */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Payments & Refunds
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  All payments are securely processed through Stripe. Because our product is digital and delivered instantly, we do not offer refunds once the dashboard is unlocked.
                </p>
                <p>
                  If something goes wrong or you need help, email us at info@startwithgenie.com and we'll do our best to help.
                </p>
              </div>
            </div>

            {/* Availability & Changes */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Availability & Changes
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We may update or pause parts of the service from time to time — for example, to improve features or content. We'll give reasonable notice if anything major changes.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Limitation of Liability
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We do our best to provide accurate, useful tools — but we're not liable for any losses, errors, or missed filings. You agree to use Start With Genie at your own risk.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Contact
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  If you have questions about these terms, contact us at info@startwithgenie.com.
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