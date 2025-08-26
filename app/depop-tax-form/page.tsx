import React from 'react'
import Link from 'next/link'
import { ShieldCheck, FileCheck2, Banknote, HelpCircle, ListChecks } from 'lucide-react'
import SeoPageLayout from '../../components/SeoPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Depop Tax Form Guide 2025 | Depop 1099-K, Schedule C, and LLC Tips',
  description: 'Complete 2025 guide to Depop tax forms. Learn about the 1099-K, Schedule C, Depop taxes, deductions, and why an LLC helps sellers stay organized.',
  openGraph: {
    title: 'Depop Tax Form Guide 2025 | Depop 1099-K, Schedule C, and LLC Tips',
    description: 'Complete 2025 guide to Depop tax forms. Learn about the 1099-K, Schedule C, Depop taxes, deductions, and why an LLC helps sellers stay organized.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depop Tax Form Guide 2025 | Depop 1099-K, Schedule C, and LLC Tips',
    description: 'Complete 2025 guide to Depop tax forms. Learn about the 1099-K, Schedule C, Depop taxes, deductions, and why an LLC helps sellers stay organized.',
  },
}

export default function DepopTaxFormPage() {
  return (
    <SeoPageLayout>
      <main className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* Page Content */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Depop Tax Form: The Complete 2025 Guide
        </h1>
        
        <p className="text-lg text-gray-700 mb-8">
          If you're selling on Depop, you may be wondering: Do I need to pay taxes? Will Depop send me a tax form? The short answer: yes. Whether you get a <strong>Depop 1099-K</strong> or not, you're responsible for reporting income. This guide covers everything about the <strong>Depop tax form</strong>, which forms matter, and how setting up an <strong>LLC for Depop sellers</strong> can simplify the process.
        </p>

        {/* Do Depop Sellers Get a Tax Form */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Depop Sellers Get a Tax Form?</h2>
          <p className="text-gray-700 mb-4">
            In 2025, if you make over <strong>$600 in gross sales</strong> on Depop, you'll receive a <strong>Form 1099-K</strong> from Depop's payment processor. A copy also goes to the IRS.
          </p>
          <p className="text-gray-700 mb-4">Key points sellers should know:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>The 1099-K reports <strong>gross sales</strong> before fees, refunds, or shipping</li>
            <li>Even if you don't get a 1099-K, you must still report all <strong>Depop income</strong></li>
            <li>Depop may notify you in-app if you're close to the threshold</li>
          </ul>
          <p className="text-gray-700">
            Looking for more detail on expenses and filing? Check our <Link href="/depop-taxes" className="text-blue-600 hover:text-blue-800 underline">Depop Taxes Overview</Link>.
          </p>
        </section>

        {/* Which Depop Tax Forms Apply */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Depop Tax Forms Apply in 2025?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Form 1099-K</strong> – Sent by Depop if you pass the reporting threshold</li>
            <li><strong>Schedule C (Form 1040)</strong> – Where Depop sellers report profit and expenses</li>
            <li><strong>Schedule SE</strong> – Used to calculate self-employment tax</li>
            <li><strong>State Tax Forms</strong> – Some states have lower thresholds and their own filing rules</li>
          </ul>
          <p className="text-gray-700">
            Related: <Link href="/depop-llc" className="text-blue-600 hover:text-blue-800 underline">LLC for Depop Sellers</Link>
          </p>
        </section>

        {/* How to File Depop Taxes Step by Step */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to File Depop Taxes Step by Step</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold shrink-0 mt-1">1</span>
              <div>
                <h3 className="font-semibold text-gray-900">Track sales</h3>
                <p className="text-gray-700">Record gross income including refunds and shipping fees</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold shrink-0 mt-1">2</span>
              <div>
                <h3 className="font-semibold text-gray-900">Track expenses</h3>
                <p className="text-gray-700">Deductible costs include Depop fees, shipping labels, packaging, and inventory</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold shrink-0 mt-1">3</span>
              <div>
                <h3 className="font-semibold text-gray-900">File Schedule C</h3>
                <p className="text-gray-700">Report profit/loss from your Depop business</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold shrink-0 mt-1">4</span>
              <div>
                <h3 className="font-semibold text-gray-900">Pay self-employment tax</h3>
                <p className="text-gray-700">Required if profits exceed $400</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Strong record-keeping makes it easier to claim deductions and avoid mistakes.
          </p>
        </section>

        {/* Why an LLC Helps */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why an LLC Helps Depop Sellers at Tax Time</h2>
          <p className="text-gray-700 mb-4">
            While you can report Depop taxes as an individual, many sellers form an LLC to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Separate personal and business income</li>
            <li>Keep bookkeeping clean for <strong>Depop tax reporting</strong></li>
            <li>Open a business bank account for Depop earnings</li>
            <li>Gain basic liability protection</li>
          </ul>
          <p className="text-gray-700 mb-4">
            That's where <strong>Genie LLC</strong> comes in: a $49 flat-rate service that gives you everything you need to launch an LLC. No upsells, no fluff — just a clear path to getting your business set up.
          </p>
          <p className="text-gray-700">
            <Link href="https://www.startwithgenie.com/" className="text-blue-600 hover:text-blue-800 underline">Start my LLC for $49</Link>
          </p>
        </section>

        {/* Depop Taxes for Minors */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Depop Taxes for Minors</h2>
          <p className="text-gray-700 mb-4">
            Many Depop sellers are under 18. If you're a minor and pass the $600 threshold, Depop will still issue a 1099-K. Typically, parents or guardians include this income on their return. If you're serious about selling, you can form an LLC with a parent's help in most states.
          </p>
          <p className="text-gray-700">
            Read next: <Link href="/depop-business-license" className="text-blue-600 hover:text-blue-800 underline">Depop Business License</Link>
          </p>
        </section>

        {/* Quick Checklist */}
        <section className="mb-8 bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <ListChecks className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Quick Checklist for Depop Taxes</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Record every Depop sale</li>
            <li>• Save receipts for shipping and supplies</li>
            <li>• Report income even without a 1099-K</li>
            <li>• File Schedule C and pay self-employment tax</li>
            <li>• Consider forming an LLC for clarity and separation</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions About the Depop Tax Form</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does Depop always send a 1099-K?</h3>
              <p className="text-gray-700">Only if you cross the IRS threshold. But you must still report all Depop income.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I don't report Depop earnings?</h3>
              <p className="text-gray-700">The IRS can issue penalties and interest. Always report income, even from side hustles.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What deductions can Depop sellers claim?</h3>
              <p className="text-gray-700">Depop fees, shipping, packaging, inventory purchased for resale, and in some cases home office expenses.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do minors selling on Depop pay taxes?</h3>
              <p className="text-gray-700">Yes. Depop will issue a 1099-K if you cross the threshold, and the income must be reported.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is an LLC required for Depop?</h3>
              <p className="text-gray-700">Not required, but it makes separating income, opening a bank account, and tracking taxes far easier.</p>
            </div>
          </div>
        </section>

        {/* Related Reading */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="space-y-2">
            <Link href="/depop-llc" className="block text-blue-600 hover:text-blue-800 underline">
              LLC for Depop Sellers
            </Link>
            <Link href="/depop-business-license" className="block text-blue-600 hover:text-blue-800 underline">
              Depop Business License
            </Link>
            <Link href="/depop-taxes" className="block text-blue-600 hover:text-blue-800 underline">
              Depop Taxes Overview
            </Link>
          </div>
        </section>

        {/* Final Word */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Word on the Depop Tax Form</h2>
          <p className="text-gray-700 mb-4">
            Understanding the <strong>Depop tax form</strong> is essential if you're earning on the platform. Whether you receive a <strong>1099-K</strong> or not, you must file taxes and report your income. The smartest move? Treat your shop like a real business. With <strong>Genie LLC</strong>, you can form an LLC for just $49, keep your finances separate, and enter tax season with confidence.
          </p>
          <p className="text-gray-700">
            <Link href="https://www.startwithgenie.com/" className="text-blue-600 hover:text-blue-800 underline">Start my LLC for $49</Link>
          </p>
        </section>

        {/* JSON-LD FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Does Depop always send a 1099-K?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Only if you cross the IRS threshold. But you must still report all Depop income."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if I don't report Depop earnings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The IRS can issue penalties and interest. Always report income, even from side hustles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What deductions can Depop sellers claim?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depop fees, shipping, packaging, inventory purchased for resale, and in some cases home office expenses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do minors selling on Depop pay taxes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Depop will issue a 1099-K if you cross the threshold, and the income must be reported."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is an LLC required for Depop?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not required, but it makes separating income, opening a bank account, and tracking taxes far easier."
                  }
                }
              ]
            })
          }}
        />
      </main>
    </SeoPageLayout>
  )
} 