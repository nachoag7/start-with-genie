import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Premium EIN Guide - Start With Genie',
  description: 'Get your free premium EIN guide with step-by-step instructions, checklists, and expert tips for obtaining your federal tax ID.',
  robots: 'noindex',
};

export default function EINGuidePremiumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="max-w-3xl mx-auto font-inter">
            <h1 className="text-4xl font-semibold mb-4 text-gray-900">
              Get Your Free EIN in Minutes
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your official guide to getting your business ID the right way — fast, safe, and free.<br />
              Made by <strong>Start With Genie</strong>, your $49 personal LLC assistant.
            </p>

            <div className="space-y-8">
              {/* What's an EIN? */}
              <section>
                <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-gray-900">
                  <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 9v2m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                  What's an EIN?
                </h2>
                <p className="text-gray-700 mb-4">
                  An EIN (Employer Identification Number) is like a Social Security Number for your business. You'll need one to:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Open your business bank account</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Use Stripe, Shopify, or PayPal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>File taxes or hire employees</span>
                  </li>
                </ul>
                <p className="text-gray-700 font-semibold">
                  It's 100% free when you apply directly with the IRS.
                </p>
              </section>

              {/* How to Get Your EIN */}
              <section>
                <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-gray-900">
                  <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.542-.942 3.31.826 2.368 2.368a1.724 1.724 0 0 0 1.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.942 1.542-.826 3.31-2.368 2.368a1.724 1.724 0 0 0-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.542.942-3.31-.826-2.368-2.368a1.724 1.724 0 0 0-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.942-1.542.826-3.31 2.368-2.368a1.724 1.724 0 0 0 2.573-1.066Z"/>
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                  How to Get Your EIN
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                  <li>Go to <a href="https://irs.gov/ein" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">irs.gov/ein</a></li>
                  <li>Click "Apply Online Now" (desktop only)</li>
                  <li>Select "Limited Liability Company (LLC)"</li>
                  <li>Enter your state, members, and your SSN</li>
                  <li>Choose "Started a new business"</li>
                  <li>Get your EIN instantly and download the PDF</li>
                </ol>
                <p className="text-gray-700 font-semibold">
                  IRS Hours: Monday–Friday, 7AM–10PM EST
                </p>
              </section>

              {/* Checklist Before You Start */}
              <section>
                <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-gray-900">
                  <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 11v3.586l1.293 1.293a1 1 0 0 0 1.414 0L13 14.586V11a1 1 0 0 0-1-1H9z" />
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M16 3v4" />
                  </svg>
                  Checklist Before You Start
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Your LLC is already formed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>You're on a desktop/laptop (not mobile)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>You have your SSN ready</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>You can finish in one sitting (no save)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>It's during IRS business hours</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Common Mistakes to Avoid */}
              <section>
                <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-gray-900">
                  <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 9v2m0 4h.01"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  Common Mistakes to Avoid
                </h2>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" stroke="#EF4444" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span>Don't pay — EINs are free from the IRS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" stroke="#EF4444" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span>Don't apply before your LLC is approved</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" stroke="#EF4444" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span>Don't use 3rd party websites — only <a href="https://irs.gov/ein" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">irs.gov/ein</a></span>
                  </li>
                </ul>
              </section>

              {/* After You Get Your EIN */}
              <section>
                <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-gray-900">
                  <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4v6h6"/>
                    <path d="M20 20v-6h-6"/>
                    <path d="M4 20 10 14"/>
                    <path d="M14 10 20 4"/>
                  </svg>
                  After You Get Your EIN
                </h2>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Open your business bank account</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Connect Stripe or Shopify</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Track expenses, file taxes, apply for credit</span>
                  </li>
                </ul>
                <p className="text-gray-700 font-semibold">
                  Pro tip: Save your EIN letter — you'll need it often.
                </p>
              </section>

              {/* Want Help With the Rest? */}
              <section>
                <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-gray-900">
                  <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 8h14"/>
                    <path d="M5 16h14"/>
                    <path d="M12 3v18"/>
                  </svg>
                  Want Help With the Rest?
                </h2>
                <div className="bg-gray-100 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Start With Genie</strong> is your $49 personal LLC assistant. We give you everything you need to launch your business the right way:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>State-specific filing instructions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>A customizable operating agreement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="18" height="18" stroke="#6B7280" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>A clean dashboard that guides you step-by-step</span>
                    </li>
                  </ul>
                  <a 
                    href="https://www.startwithgenie.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow"
                  >
                    Start My LLC
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 