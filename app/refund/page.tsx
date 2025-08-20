import React from 'react'
import type { Metadata } from 'next'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Genie Policy – Start With Genie',
  description: 'The Genie Guarantee: If we don\'t save you time and money, you get a full refund. It\'s that simple.',
  openGraph: {
    title: 'Genie Policy – Start With Genie',
    description: 'The Genie Guarantee: If we don\'t save you time and money, you get a full refund. It\'s that simple.',
  },
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full max-w-6xl mx-auto px-4 py-1 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 leading-tight">
            Genie Policy
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            If we don't save you time and money, you get a full refund. It's that simple.
          </p>
        </section>

        {/* Content Sections */}
        <section className="w-full max-w-4xl mx-auto px-4 py-1">
          <div className="space-y-8">
            {/* Our Core Promise */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Our Core Promise
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  The entire purpose of Genie is to save you two critical resources when starting your business: time and money. We are so confident in our guided process, our tools, and the value we provide that we back our service with a straightforward guarantee.
                </p>
                <p>
                  If you use Genie to set up your LLC and honestly feel that it did not save you time or money compared to traditional methods, we will issue a full refund.
                </p>
              </div>
            </div>

            {/* How Our Guarantee Works */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                How Our Guarantee Works
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We want you to be completely satisfied with the value you receive. To request a refund based on our guarantee, we simply ask for two things:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Use the Service:</strong> Make a good-faith effort to complete the LLC formation process using your Genie dashboard. Our guarantee applies after you've had a chance to experience the service.</li>
                  <li><strong>Share Your Feedback:</strong> Send an email to info@startwithgenie.com within 30 days of your purchase. In the email, just briefly explain why you feel the service didn't deliver on its promise of saving you time or money. Your feedback is essential for helping us improve.</li>
                </ul>
                <p>
                  There are no forms to fill out or hoops to jump through. We trust our customers and are committed to this promise.
                </p>
              </div>
            </div>

            {/* For Technical Glitches & Billing Errors */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                For Technical Glitches & Billing Errors
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  Of course, if you encounter any technical issues, you are entitled to a swift resolution. Please contact us immediately for a full refund if:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>You were charged but did not receive access to your dashboard.</li>
                  <li>A major technical error prevented you from using the service as intended.</li>
                  <li>You were accidentally double-billed or experienced another payment error.</li>
                </ul>
              </div>
            </div>

            {/* Our Commitment to You */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Our Commitment to You
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We're not just selling a product; we're providing a launchpad for your business. This guarantee is our commitment to being a valuable partner on your journey. We're confident that Genie will be a great investment, and we're willing to stand behind that promise.
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-4">
              <p className="text-sm text-neutral-500">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 