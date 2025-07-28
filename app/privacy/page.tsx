import React from 'react'
import type { Metadata } from 'next'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy – Start With Genie',
  description: 'Learn how Start With Genie collects, uses, and protects your personal information. We take your privacy seriously and never sell your data.',
  openGraph: {
    title: 'Privacy Policy – Start With Genie',
    description: 'Learn how Start With Genie collects, uses, and protects your personal information. We take your privacy seriously and never sell your data.',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full max-w-6xl mx-auto px-4 py-1 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Your privacy matters to us. This policy explains how Start With Genie collects, uses, and protects your information when you use our service. We keep it simple, secure, and transparent.
          </p>
        </section>

        {/* Content Sections */}
        <section className="w-full max-w-4xl mx-auto px-4 py-1">
          <div className="space-y-8">
            {/* Information We Collect */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Information We Collect
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Name, email address, and contact information</li>
                  <li>Business details and LLC formation information</li>
                  <li>Payment information (processed securely through Stripe)</li>
                  <li>Communication history and support requests</li>
                </ul>
                <p>
                  We also automatically collect certain information when you use our service, including IP address, browser type, and usage patterns to improve our service.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                How We Use Your Information
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We use your information to provide and improve our services:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Create and manage your account and dashboard</li>
                  <li>Generate personalized LLC documents and instructions</li>
                  <li>Process payments and provide customer support</li>
                  <li>Send important updates about your LLC formation</li>
                  <li>Improve our service and develop new features</li>
                </ul>
                <p>
                  We never sell your personal information to third parties. Your data is used solely to provide you with the best possible service.
                </p>
              </div>
            </div>

            {/* How We Protect Your Data */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                How We Protect Your Data
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We take your security seriously and implement industry-standard measures to protect your information:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>All data is encrypted in transit and at rest</li>
                  <li>We use secure cloud infrastructure (Supabase) with enterprise-grade security</li>
                  <li>Payment information is processed through Stripe's secure payment system</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Limited access to personal data on a need-to-know basis</li>
                </ul>
                <p>
                  While we implement strong security measures, no method of transmission over the internet is 100% secure. We continuously work to improve our security practices.
                </p>
              </div>
            </div>

            {/* Third-Party Tools */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Third-Party Tools
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We use trusted third-party services to provide our service:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Stripe:</strong> Secure payment processing</li>
                  <li><strong>Supabase:</strong> Database and authentication services</li>
                  <li><strong>Vercel:</strong> Website hosting and performance</li>
                  <li><strong>Microsoft Clarity:</strong> Website analytics (anonymized data only)</li>
                </ul>
                <p>
                  These services have their own privacy policies and security measures. We only share the minimum information necessary for these services to function.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Your Rights
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Export your data in a portable format</li>
                </ul>
                <p>
                  To exercise these rights, contact us at info@startwithgenie.com. We'll respond to your request within 30 days.
                </p>
              </div>
            </div>

            {/* Updates to This Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                Updates to This Policy
              </h2>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. When we make significant changes, we'll notify you by email or through our service.
                </p>
                <p>
                  The date at the bottom of this policy indicates when it was last updated. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center py-8 border-t border-neutral-200 mt-8">
              <p className="text-lg text-neutral-700 mb-2">
                Have questions about your privacy?
              </p>
              <a
                href="mailto:info@startwithgenie.com"
                className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                info@startwithgenie.com
              </a>
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