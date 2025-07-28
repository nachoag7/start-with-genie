import React from 'react'
import type { Metadata } from 'next'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Refund Policy – Start With Genie',
  description: 'Our refund policy is simple: because our product is delivered instantly, we generally don\'t offer refunds. But if something goes wrong, reach out.',
  openGraph: {
    title: 'Refund Policy – Start With Genie',
    description: 'Our refund policy is simple: because our product is delivered instantly, we generally don\'t offer refunds. But if something goes wrong, reach out.',
  },
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full max-w-6xl mx-auto px-4 py-1 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 leading-tight">
            Refund Policy
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            We believe in keeping things straightforward. Start With Genie delivers digital tools instantly, so we typically don't offer refunds. That said — if something didn't work right, we want to make it right.
          </p>
        </section>

        {/* Content Sections */}
        <section className="w-full max-w-4xl mx-auto px-4 py-1">
          <div className="space-y-8">
            {/* No Automatic Refunds */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                No Automatic Refunds
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  Because your Genie dashboard, documents, and guides are delivered immediately after purchase, all sales are considered final.
                </p>
              </div>
            </div>

            {/* Exceptions */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Exceptions
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We may make exceptions in rare cases — for example, if:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>You were charged but never received access</li>
                  <li>There was a technical issue preventing use</li>
                  <li>You reached out before unlocking the dashboard</li>
                </ul>
                <p>
                  If any of this applies, email us at info@startwithgenie.com and we'll take a look.
                </p>
              </div>
            </div>

            {/* Our Promise */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Our Promise
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We're not here to trap you with policies. If you had a bad experience, reach out. We'll always try to help.
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