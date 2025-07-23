'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'
import Footer from '../../components/Footer'

export default function EtsyLLCGuidePage() {
  return (
    <SeoPageLayout>
      <div id="do-etsy-sellers-need-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Selling on Etsy?
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto font-semibold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              Make it official with a $49 LLC — no upsells, no lawyers.
            </motion.p>
          </div>
        </section>

        {/* Why Etsy Sellers Form LLCs */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-6 text-center">Why Etsy Sellers Form LLCs</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8 text-center">
              Running a shop on Etsy feels simple — until you start thinking about taxes, bank accounts, or what happens if a customer sues.
            </p>
            <div className="space-y-8">
              <div>
                <div className="font-semibold text-lg text-neutral-900 mb-1">Protects your personal assets</div>
                <div className="text-neutral-600 text-base">If something goes wrong — like a legal dispute or a refund issue — an LLC helps shield your savings, car, or personal credit.</div>
              </div>
              <div>
                <div className="font-semibold text-lg text-neutral-900 mb-1">Makes you look professional</div>
                <div className="text-neutral-600 text-base">Clients, brands, and even Etsy itself take you more seriously when your business has a real legal name.</div>
              </div>
              <div>
                <div className="font-semibold text-lg text-neutral-900 mb-1">Helps you handle taxes & banking</div>
                <div className="text-neutral-600 text-base">You’ll need an EIN (tax ID) and business bank account to stay organized and legit — and many banks require an LLC first.</div>
              </div>
              <div>
                <div className="font-semibold text-lg text-neutral-900 mb-1">Grows with your business</div>
                <div className="text-neutral-600 text-base">Whether you sell handmade art or dropship supplies, an LLC gives you the foundation to grow beyond just a hobby.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Start With Genie Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">Start With Genie</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8 font-semibold">
              A $49 assistant that walks you through LLC setup — step-by-step.
            </p>
            {/* Checklist */}
            <div className="mt-6 space-y-4 text-left max-w-xl mx-auto mb-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-neutral-700 text-base">State-specific LLC filing instructions</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-neutral-700 text-base">Free EIN help</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-neutral-700 text-base">Operating agreement (standard template)</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-neutral-700 text-base">Launch checklist</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-neutral-700 text-base">Fast dashboard — all docs downloadable</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-neutral-700 text-base">Clear next steps (no upsells, no confusion)</span>
              </div>
            </div>
            <Link href="/checkout">
              <div className="flex justify-center">
                <Button size="lg" className="text-lg bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none flex items-center gap-2 px-8 py-3">
                  Start Your LLC for $49
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Link>
          </div>
        </section>

        {/* Why Etsy Sellers Love It Section - now its own section for consistent spacing */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Why Etsy Sellers Love It</h3>
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left max-w-xl mx-auto shadow-sm space-y-3">
              <p className="text-gray-700 italic text-sm md:text-base">“I just wanted to start selling legally — not deal with a lawyer.”</p>
              <p className="text-gray-700 italic text-sm md:text-base">“Genie showed me exactly how to file my LLC and get my EIN in under an hour.”</p>
              <p className="text-gray-700 italic text-sm md:text-base">“Way cheaper and faster than LegalZoom. And no spammy upsells.”</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </SeoPageLayout>
  )
} 