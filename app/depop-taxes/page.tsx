import React from 'react'
import Link from 'next/link'
import { ShieldCheck, FileCheck2, Banknote, HelpCircle, ListChecks } from 'lucide-react'
import SeoPageLayout from '../../components/SeoPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Depop Taxes 2025 | Deductions, 1099-K, and Filing Basics',
  description: 'Everything Depop sellers should know about taxes in 2025. Learn how Depop income is reported, what deductions apply, how the 1099-K works, and why an LLC helps.',
  openGraph: {
    title: 'Depop Taxes 2025 | Deductions, 1099-K, and Filing Basics',
    description: 'Everything Depop sellers should know about taxes in 2025. Learn how Depop income is reported, what deductions apply, how the 1099-K works, and why an LLC helps.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depop Taxes 2025 | Deductions, 1099-K, and Filing Basics',
    description: 'Everything Depop sellers should know about taxes in 2025. Learn how Depop income is reported, what deductions apply, how the 1099-K works, and why an LLC helps.',
  },
}

export default function DepopTaxesPage() {
  return (
    <SeoPageLayout>
      <main className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* Page Content */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Depop Taxes: What Sellers Need to Know in 2025
        </h1>
        
        <p className="text-lg text-gray-700 mb-8">
          If you earn money on Depop, the IRS considers it taxable income. That means you need to track your earnings, understand how <strong>Depop taxes</strong> work, and know what you can deduct. This guide gives you a clear breakdown of Depop income, common deductions, and when it makes sense to form an LLC for your shop.
        </p>

        {/* What Income to Report from Depop */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Income to Report from Depop</h2>
          <p className="text-gray-700 mb-4">
            Whether or not you get a <strong>Depop 1099-K</strong>, you must report all business income. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Gross sales from Depop</li>
            <li>Shipping income charged to buyers</li>
            <li>Any refunds or returns (these reduce total income but should be tracked)</li>
          </ul>
          <p className="text-gray-700">
            For a detailed breakdown of forms: <Link href="/depop-tax-form" className="text-blue-600 hover:text-blue-800 underline">Depop Tax Form Guide</Link>
          </p>
        </section>

        {/* Common Depop Tax Deductions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Depop Tax Deductions</h2>
          <p className="text-gray-700 mb-4">
            Depop sellers can lower taxable income by deducting legitimate business expenses, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Depop selling fees</li>
            <li>Payment processing fees (PayPal, Stripe, etc.)</li>
            <li>Shipping labels and postage costs</li>
            <li>Packaging materials (boxes, tape, bags)</li>
            <li>Inventory purchased for resale</li>
            <li>A portion of your home office if used exclusively for your Depop shop</li>
          </ul>
          <p className="text-gray-700">
            Keeping receipts is critical — deductions are only valid if you can prove them.
          </p>
        </section>

        {/* The Depop 1099-K and Thresholds */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Depop 1099-K and Thresholds</h2>
          <p className="text-gray-700 mb-4">
            In 2025, most sellers who earn <strong>$600 or more</strong> in gross sales will receive a <strong>1099-K</strong>. This form is also sent to the IRS, so it's important to match your reported income to what appears on the form.
          </p>
          <p className="text-gray-700 mb-4">
            Even if you don't receive a 1099-K, you're still required to file taxes on your Depop income.
          </p>
          <p className="text-gray-700">
            Related: <Link href="/depop-llc" className="text-blue-600 hover:text-blue-800 underline">LLC for Depop Sellers</Link>
          </p>
        </section>

        {/* Simple Record-Keeping Tips */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Simple Record-Keeping Tips</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Use a spreadsheet or accounting app to log each sale</li>
            <li>Save receipts for shipping and supplies</li>
            <li>Keep business and personal finances separate</li>
            <li>Reconcile your records monthly to avoid surprises at tax season</li>
          </ul>
        </section>

        {/* When to Consider an LLC for Depop Taxes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Consider an LLC for Depop Taxes</h2>
          <p className="text-gray-700 mb-4">
            An LLC isn't required, but it can make handling <strong>Depop taxes</strong> much smoother:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Keeps personal and business income separate</li>
            <li>Simplifies deductions and record keeping</li>
            <li>Makes it easy to open a business bank account</li>
            <li>Adds credibility as your Depop shop grows</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Genie LLC</strong> guides you through filing your LLC for a $49 flat-rate fee that gives you everything you need to launch an LLC.
          </p>
          <p className="text-gray-700">
            <Link href="https://www.startwithgenie.com/" className="text-blue-600 hover:text-blue-800 underline">Start my LLC for $49</Link>
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Depop Taxes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I have to pay taxes if I sell casually on Depop?</h3>
              <p className="text-gray-700">Yes. Any profit from Depop sales counts as taxable income.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will Depop send me a 1099-K?</h3>
              <p className="text-gray-700">Yes, if you make $600 or more in gross sales in 2025.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I don't report Depop income?</h3>
              <p className="text-gray-700">The IRS can issue penalties and interest. Always report your earnings.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can Depop sellers deduct clothing costs?</h3>
              <p className="text-gray-700">Only if the clothing was purchased specifically for resale. Personal clothing doesn't qualify.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is forming an LLC required for Depop taxes?</h3>
              <p className="text-gray-700">No, but it makes taxes easier and helps protect your personal assets.</p>
            </div>
          </div>
        </section>

        {/* Related Reading */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="space-y-2">
            <Link href="/depop-tax-form" className="block text-blue-600 hover:text-blue-800 underline">
              Depop Tax Form Guide
            </Link>
            <Link href="/depop-llc" className="block text-blue-600 hover:text-blue-800 underline">
              LLC for Depop Sellers
            </Link>
            <Link href="/depop-business-license" className="block text-blue-600 hover:text-blue-800 underline">
              Depop Business License vs LLC
            </Link>
          </div>
        </section>

        {/* Final Word */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Word on Depop Taxes</h2>
          <p className="text-gray-700 mb-4">
            If you sell on Depop, you're running a business — and businesses pay taxes. The good news is that deductions can lower what you owe, and forming an LLC makes everything from bookkeeping to banking easier.
          </p>
          <p className="text-gray-700 mb-4">
            With <strong>Genie LLC</strong>, you can start your LLC for just $49 and run your Depop shop like a real business.
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
                  "name": "Do I have to pay taxes if I sell casually on Depop?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Any profit from Depop sales counts as taxable income."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will Depop send me a 1099-K?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you make $600 or more in gross sales in 2025."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if I don't report Depop income?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The IRS can issue penalties and interest. Always report your earnings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Depop sellers deduct clothing costs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Only if the clothing was purchased specifically for resale. Personal clothing doesn't qualify."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is forming an LLC required for Depop taxes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, but it makes taxes easier and helps protect your personal assets."
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