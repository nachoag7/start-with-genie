import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { Button } from '../../components/ui/Button'
import { FileText, CreditCard, ScrollText, ClipboardCheck, LayoutDashboard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works – Start With Genie',
  description: 'See how Start With Genie helps you launch your LLC step-by-step — with instructions, documents, and a clean dashboard made for founders.',
  openGraph: {
    title: 'How It Works – Start With Genie',
    description: 'See how Start With Genie helps you launch your LLC step-by-step — with instructions, documents, and a clean dashboard made for founders.',
  },
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full max-w-6xl mx-auto px-4 py-1 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 leading-tight">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            See exactly what you get — and how fast you'll be up and running.
          </p>
        </section>

        {/* Product Preview Video */}
        <section className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-4">
            <video 
              className="w-full rounded-lg shadow-lg" 
              controls
              autoPlay
              muted
              poster="/Dashboard1.png"
            >
              <source src="/Dashboard-preview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-neutral-500 text-center">
              This is your Genie dashboard — personalized for your state, with every step mapped out.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="w-full max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8 text-center">
            What's Included
          </h2>
          <div className="space-y-4">
            {/* Step-by-step filing instructions */}
            <div className="flex items-start gap-4">
              <FileText className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  Step-by-step filing instructions
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Tailored for your state — no guessing or Googling required.
                </p>
              </div>
            </div>

            {/* EIN guide */}
            <div className="flex items-start gap-4">
              <CreditCard className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  EIN guide
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Everything you need to apply online in 5 minutes.
                </p>
              </div>
            </div>

            {/* Operating agreement */}
            <div className="flex items-start gap-4">
              <ScrollText className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  Operating agreement
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Downloadable template — edit and use instantly.
                </p>
              </div>
            </div>

            {/* Launch checklist */}
            <div className="flex items-start gap-4">
              <ClipboardCheck className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  Launch checklist
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Stay organized and move fast with our founder-ready checklist.
                </p>
              </div>
            </div>

            {/* Your own dashboard */}
            <div className="flex items-start gap-4">
              <LayoutDashboard className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  Your own dashboard
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  All your documents and steps in one clean place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Don't Do */}
        <section className="w-full max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 text-center">
            What We Don't Do
          </h2>
          <p className="text-neutral-700 leading-relaxed text-center">
            Start With Genie gives you everything you need to file confidently — but we don't file for you, and we don't upsell you on extras you don't need.
          </p>
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
            Ready to launch?
          </h2>
          <Link href="/checkout">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg transition-colors duration-200">
              Get Started for $49
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
} 