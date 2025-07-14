import React from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Start With Genie — Simple, Guided LLC Setup Without the Legal Headache</title>
        <meta name="description" content="Get clear, step-by-step instructions to launch your LLC. No confusing legal jargon, no hidden fees — just your business set up right, with the guidance of your silent assistant." />
        <meta property="og:title" content="Start With Genie — Simple, Guided LLC Setup Without the Legal Headache" />
        <meta property="og:description" content="Get clear, step-by-step instructions to launch your LLC. No confusing legal jargon, no hidden fees — just your business set up right, with the guidance of your silent assistant." />
        <meta property="og:image" content="https://startwithgenie.com/genie-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://startwithgenie.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Start With Genie — Simple, Guided LLC Setup Without the Legal Headache" />
        <meta name="twitter:description" content="Get clear, step-by-step instructions to launch your LLC. No confusing legal jargon, no hidden fees — just your business set up right, with the guidance of your silent assistant." />
        <meta name="twitter:image" content="https://startwithgenie.com/genie-preview.png" />
      </Head>
      <div className="min-h-screen bg-white flex flex-col justify-between">
        {/* Navigation */}
        {/* HERO SECTION */}
        <section className="w-full bg-white pt-16 pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-8 px-4">
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Start With Genie</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 font-medium">Smart, simple LLC setup — guided every step of the way.</p>
              <Link href="/onboarding">
                <Button size="lg" className="px-8 py-3 text-lg font-semibold shadow-md">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center sm:justify-end mb-8 sm:mb-0">
              <img src="/genie-preview.png" alt="Genie Mascot" className="h-40 w-40 sm:h-56 sm:w-56 object-contain drop-shadow-xl" />
            </div>
          </div>
        </section>
        {/* 3-STEP PROCESS SECTION */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-14">Simple 3-step process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 rounded-full border-2 border-blue-100 bg-blue-50 p-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="12" r="5" stroke="#2563eb" strokeWidth="2"/><ellipse cx="16" cy="23" rx="8" ry="5" stroke="#2563eb" strokeWidth="2"/></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">1. Tell us about your business</h3>
                <p className="text-gray-600">Answer a few short questions so we can personalize everything for you.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 rounded-full border-2 border-blue-100 bg-blue-50 p-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="7" y="5" width="18" height="22" rx="3" stroke="#2563eb" strokeWidth="2"/><line x1="11" y1="11" x2="21" y2="11" stroke="#2563eb" strokeWidth="2"/><line x1="11" y1="16" x2="21" y2="16" stroke="#2563eb" strokeWidth="2"/><line x1="11" y1="21" x2="17" y2="21" stroke="#2563eb" strokeWidth="2"/></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">2. Get your documents</h3>
                <p className="text-gray-600">Your EIN guide, operating agreement, and filing steps are generated instantly.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 rounded-full border-2 border-blue-100 bg-blue-50 p-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="7" y="7" width="18" height="18" rx="3" stroke="#2563eb" strokeWidth="2"/><circle cx="12" cy="12" r="1.5" fill="#2563eb"/><circle cx="12" cy="16" r="1.5" fill="#2563eb"/><circle cx="12" cy="20" r="1.5" fill="#2563eb"/><line x1="16" y1="12" x2="21" y2="12" stroke="#2563eb" strokeWidth="2"/><line x1="16" y1="16" x2="21" y2="16" stroke="#2563eb" strokeWidth="2"/><line x1="16" y1="20" x2="21" y2="20" stroke="#2563eb" strokeWidth="2"/></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">3. Launch with confidence</h3>
                <p className="text-gray-600">Follow clear, personalized instructions to finish your setup.</p>
              </div>
            </div>
          </div>
        </section>
        {/* WHAT YOU GET SECTION */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-14">What’s included</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
                <div className="mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="7" y="5" width="18" height="22" rx="3" stroke="#2563eb" strokeWidth="2"/><line x1="11" y1="11" x2="21" y2="11" stroke="#2563eb" strokeWidth="2"/><line x1="11" y1="16" x2="21" y2="16" stroke="#2563eb" strokeWidth="2"/><line x1="11" y1="21" x2="17" y2="21" stroke="#2563eb" strokeWidth="2"/></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Personalized Documents</h3>
                <p className="text-gray-600">Filing instructions, EIN guide, and operating agreement tailored to your state.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
                <div className="mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="7" y="7" width="18" height="18" rx="3" stroke="#2563eb" strokeWidth="2"/><circle cx="12" cy="12" r="1.5" fill="#2563eb"/><circle cx="12" cy="16" r="1.5" fill="#2563eb"/><circle cx="12" cy="20" r="1.5" fill="#2563eb"/><line x1="16" y1="12" x2="21" y2="12" stroke="#2563eb" strokeWidth="2"/><line x1="16" y1="16" x2="21" y2="16" stroke="#2563eb" strokeWidth="2"/><line x1="16" y1="20" x2="21" y2="20" stroke="#2563eb" strokeWidth="2"/></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Smart Dashboard</h3>
                <p className="text-gray-600">Everything organized in one place. No guesswork, no clutter.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
                <div className="mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" stroke="#2563eb" strokeWidth="2"/><path d="M12 16l3 3 5-5" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Genie Assistant + Support</h3>
                <p className="text-gray-600">AI answers + human help if you get stuck.</p>
              </div>
            </div>
          </div>
        </section>
        {/* FEATURE COMPARISON SECTION */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">Start With Genie vs. LegalZoom</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden mt-6">
                <thead className="bg-gray-50 text-gray-700 font-semibold">
                  <tr>
                    <th className="px-4 py-3">Feature</th>
                    <th className="px-4 py-3 text-center">Start With Genie</th>
                    <th className="px-4 py-3 text-center">LegalZoom</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Personalized state filing steps</td>
                    <td className="px-4 py-3 text-center">✅ Included</td>
                    <td className="px-4 py-3 text-center">❌ Not included</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">LLC filing</td>
                    <td className="py-3 px-4 text-center text-gray-400">❌ Guided self-filing</td>
                    <td className="py-3 px-4 text-center">✅ They file it for you</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">EIN registration help</td>
                    <td className="py-3 px-4 text-center">✅ Free step-by-step guide</td>
                    <td className="py-3 px-4 text-center">✅ Available for extra</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Operating agreement</td>
                    <td className="py-3 px-4 text-center">✅ Included</td>
                    <td className="py-3 px-4 text-center text-gray-400">❌ Often a paid add-on</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Dashboard + AI assistant</td>
                    <td className="py-3 px-4 text-center">✅ Included</td>
                    <td className="py-3 px-4 text-center text-gray-400">❌ Not available</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Human support</td>
                    <td className="py-3 px-4 text-center">✅ Included</td>
                    <td className="py-3 px-4 text-center">✅ Included</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Pricing</td>
                    <td className="py-3 px-4 text-center font-bold">💵 $49 flat</td>
                    <td className="py-3 px-4 text-center font-bold">💵 $199+</td>
                  </tr>
                </tbody>
              </table>
            </div>

{/* Comparison summary (Linear style) */}
<h3 className="text-xl font-semibold mt-8 mb-2">Why founders choose Genie</h3>
<p className="text-base leading-relaxed">
  All the tools to form your LLC, plus AI and human support — for a flat $49.
</p>
<p className="text-base leading-relaxed mt-2">
  LegalZoom files for you, but adds upsells and extras.<br />
  Genie keeps it simple. No fluff. No surprises.
</p>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="bg-gray-50 border-t border-gray-100 py-10 px-4 sm:px-6 lg:px-8 mt-auto">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <div className="text-lg font-semibold text-gray-800">Start With Genie — your silent assistant for LLC setup.</div>
            <a href="mailto:info@startwithgenie.com" className="text-blue-600 hover:underline text-base">info@startwithgenie.com</a>
            <div className="text-xs text-gray-500 max-w-xl mx-auto">Start With Genie is not a law firm and does not provide legal advice. This assistant offers general guidance only.</div>
            <div className="text-xs text-gray-400">© 2025 Start With Genie. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </>
  )
} 