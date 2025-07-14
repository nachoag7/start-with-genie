import React from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'
// Remove Lucide imports, use inline SVGs below

// Minimal SVG icons for steps/trust
const StepUser = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="12" r="5" stroke="#2563eb" strokeWidth="2"/><ellipse cx="16" cy="23" rx="8" ry="5" stroke="#2563eb" strokeWidth="2"/></svg>
)
const StepDoc = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="7" y="5" width="18" height="22" rx="3" stroke="#2563eb" strokeWidth="2"/><line x1="11" y1="11" x2="21" y2="11" stroke="#2563eb" strokeWidth="2"/><line x1="11" y1="16" x2="21" y2="16" stroke="#2563eb" strokeWidth="2"/><line x1="11" y1="21" x2="17" y2="21" stroke="#2563eb" strokeWidth="2"/></svg>
)
const StepList = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="7" y="7" width="18" height="18" rx="3" stroke="#2563eb" strokeWidth="2"/><circle cx="12" cy="12" r="1.5" fill="#2563eb"/><circle cx="12" cy="16" r="1.5" fill="#2563eb"/><circle cx="12" cy="20" r="1.5" fill="#2563eb"/><line x1="16" y1="12" x2="21" y2="12" stroke="#2563eb" strokeWidth="2"/><line x1="16" y1="16" x2="21" y2="16" stroke="#2563eb" strokeWidth="2"/><line x1="16" y1="20" x2="21" y2="20" stroke="#2563eb" strokeWidth="2"/></svg>
)
const CheckAnimated = () => (
  <svg className="h-5 w-5 text-green-500 transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#e0fce0"/><path d="M8 12.5l3 3 5-5" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div />
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Log In</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">Start With Genie</h1>
          <p className="text-gray-600 mb-6 text-center text-lg sm:text-xl">Smart, simple LLC setup — guided every step of the way.</p>
          <Link href="/onboarding">
            <Button size="lg" className="px-12 py-4 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-200 flex items-center justify-center gap-2 mx-auto mb-2 hover:scale-105">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      <div className="border-t border-gray-100" />
      {/* 3-Step Process Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-14">Simple 3-step process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 rounded-full border-2 border-blue-100 bg-blue-50 p-4">
                <StepUser />
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Tell us about your business</h3>
              <p className="text-gray-600">Answer a few simple questions so we can personalize your documents and guidance.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 rounded-full border-2 border-blue-100 bg-blue-50 p-4">
                <StepDoc />
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Get your documents</h3>
              <p className="text-gray-600">Instantly access your LLC Filing Instructions, EIN Guide, and Operating Agreement.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 rounded-full border-2 border-blue-100 bg-blue-50 p-4">
                <StepList />
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Launch with confidence</h3>
              <p className="text-gray-600">Follow personalized steps to file your LLC and launch with confidence.</p>
            </div>
          </div>
          {/* Checklist visually connected to Step 3 */}
          <div id="checklist" className="flex justify-center mt-12">
            <div className="bg-[#F9FAFB] rounded-xl shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] px-8 py-7 max-w-md w-full text-center border border-gray-100 transition-shadow group hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] hover:scale-105">
              <h4 className="text-base sm:text-lg font-bold mb-4">Your LLC Setup Checklist</h4>
              <ul className="space-y-3 text-sm sm:text-base font-medium text-gray-800">
                <li className="flex items-center gap-2 justify-center group hover:bg-green-50 rounded transition-colors px-2 py-1">
                  <CheckCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-200" /> File your LLC
                </li>
                <li className="flex items-center gap-2 justify-center group hover:bg-green-50 rounded transition-colors px-2 py-1">
                  <CheckCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-200" /> Get your EIN
                </li>
                <li className="flex items-center gap-2 justify-center group hover:bg-green-50 rounded transition-colors px-2 py-1">
                  <CheckCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-200" /> Sign your agreement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-100" />
      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-screen-lg w-full flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Start your business with clarity and confidence</h3>
          <p className="text-lg text-gray-600 mb-8">Personalized step-by-step help. No fluff. Just what you need to move forward.</p>
          <Link href="/onboarding">
            <Button size="lg" className="px-12 py-4 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-200 flex items-center justify-center gap-2 mx-auto hover:scale-105">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      <div className="border-t border-gray-100" />
      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-screen-lg mx-auto">
          <h4 className="text-xl font-semibold text-gray-900 mb-8 text-center">Why founders trust Start With Genie</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center gap-2">
              {/* Shield/Check SVG */}
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="#22c55e" strokeWidth="2"/><path d="M9.5 12.5l2 2 3-3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-gray-700 font-medium">Clear step-by-step instructions</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              {/* Doc SVG */}
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2" stroke="#2563eb" strokeWidth="2"/><line x1="8" y1="8" x2="16" y2="8" stroke="#2563eb" strokeWidth="2"/><line x1="8" y1="12" x2="16" y2="12" stroke="#2563eb" strokeWidth="2"/></svg>
              <span className="text-gray-700 font-medium">Personalized documents</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              {/* No fees SVG */}
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#2563eb" strokeWidth="2"/></svg>
              <span className="text-gray-700 font-medium">No hidden fees</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              {/* Star SVG */}
              <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24"><polygon points="12,3 15,10 22,10 17,14 19,21 12,17 5,21 7,14 2,10 9,10" stroke="#facc15" strokeWidth="2" fill="#fef9c3"/></svg>
              <span className="text-gray-700 font-medium">Built for first-time founders</span>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-100" />
      {/* Removed Made For Section for a cleaner layout */}
    </div>
  )
} 