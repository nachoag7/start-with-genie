import React from 'react'
import Link from 'next/link'
import { ShieldCheck, FileCheck2, Banknote, HelpCircle, ListChecks } from 'lucide-react'
import SeoPageLayout from '../../components/SeoPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Depop Business Hub 2025 | Taxes, LLC, and Licensing Made Simple',
  description: 'The central hub for Depop sellers who want to run their shop like a business. Learn about Depop taxes, 1099-K, business licenses, and how an LLC helps.',
  openGraph: {
    title: 'Depop Business Hub 2025 | Taxes, LLC, and Licensing Made Simple',
    description: 'The central hub for Depop sellers who want to run their shop like a business. Learn about Depop taxes, 1099-K, business licenses, and how an LLC helps.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depop Business Hub 2025 | Taxes, LLC, and Licensing Made Simple',
    description: 'The central hub for Depop sellers who want to run their shop like a business. Learn about Depop taxes, 1099-K, business licenses, and how an LLC helps.',
  },
}

export default function DepopPage() {
  return (
    <SeoPageLayout>
      <main className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* Page Content */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Depop Business Hub
        </h1>
        
        <p className="text-lg text-gray-700 mb-8">
          Depop is one of the fastest-growing resale platforms, but many sellers don't realize they're also running a business. That means taxes, potential licenses, and decisions about business structure all come into play.
        </p>

        <p className="text-lg text-gray-700 mb-8">
          This hub brings together everything you need to know — from <strong>Depop tax forms</strong> to <strong>LLC benefits</strong> — and shows how <strong>Genie LLC</strong> can help you build the right foundation.
        </p>

        <p className="text-lg text-gray-700 mb-8">
          <Link href="https://www.startwithgenie.com/" className="text-blue-600 hover:text-blue-800 underline">Start my LLC for $49</Link>
        </p>

        {/* Your Depop Business Resources */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Depop Business Resources</h2>
          <p className="text-gray-700 mb-4">
            Here are the core guides every Depop seller should read:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><Link href="/depop-tax-form" className="text-blue-600 hover:text-blue-800 underline">Depop Tax Form Guide</Link> – Everything about the 1099-K, Schedule C, and reporting rules</li>
            <li><Link href="/depop-llc" className="text-blue-600 hover:text-blue-800 underline">LLC for Depop Sellers</Link> – Why an LLC makes sense and how to set one up</li>
            <li><Link href="/depop-business-license" className="text-blue-600 hover:text-blue-800 underline">Depop Business License vs LLC</Link> – Understanding local requirements vs legal structure</li>
            <li><Link href="/depop-taxes" className="text-blue-600 hover:text-blue-800 underline">Depop Taxes Overview</Link> – Income reporting, deductions, and simple record-keeping tips</li>
          </ul>
        </section>

        {/* Casual Selling vs Running a Business */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Casual Selling vs. Running a Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Casual Selling</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Mixes personal and Depop income</li>
                <li>Misses valuable tax deductions</li>
                <li>Unclear financial records</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Real Business</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Runs under an LLC for separation and protection</li>
                <li>Opens a business bank account with an EIN</li>
                <li>Tracks income and deductions for clean tax reporting</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Learn more in the <Link href="/depop-llc" className="text-blue-600 hover:text-blue-800 underline">LLC for Depop Sellers guide</Link>
          </p>
        </section>

        {/* Why Depop Sellers Choose an LLC */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Depop Sellers Choose an LLC</h2>
          <p className="text-gray-700 mb-4">
            An LLC isn't required to sell on Depop, but once you're earning consistent money, it's the best way to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Keep business and personal money separate</li>
            <li>Make tax filing easier</li>
            <li>Protect your personal assets</li>
            <li>Build credibility when scaling beyond casual sales</li>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do Depop sellers need a business license?</h3>
              <p className="text-gray-700">It depends on your city or state. Some locations require a local license once you pass certain sales thresholds.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is an LLC required to sell on Depop?</h3>
              <p className="text-gray-700">No, but forming an LLC separates your finances, simplifies taxes, and protects your personal assets.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the Depop 1099-K threshold in 2025?</h3>
              <p className="text-gray-700">Most Depop sellers will receive a 1099-K if they earn $600 or more in gross sales.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can minors form an LLC for Depop?</h3>
              <p className="text-gray-700">Yes. In most states, minors can form an LLC with parent or guardian involvement.</p>
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
            <Link href="/depop-taxes" className="block text-blue-600 hover:text-blue-800 underline">
              Depop Taxes Overview
            </Link>
          </div>
        </section>

        {/* Final Word */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Word on Running a Depop Business</h2>
          <p className="text-gray-700 mb-4">
            Selling on Depop is more than just clearing out your closet — it can become a real income stream. With that comes taxes, licenses, and financial responsibilities. The easiest way to handle it all? Form an LLC and run your shop like a business from day one.
          </p>
          <p className="text-gray-700 mb-4">
            With <strong>Genie LLC</strong>, you can do it for just $49 and gain the clarity and confidence to grow.
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
                  "name": "Do Depop sellers need a business license?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on your city or state. Some locations require a local license once you pass certain sales thresholds."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is an LLC required to sell on Depop?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, but forming an LLC separates your finances, simplifies taxes, and protects your personal assets."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the Depop 1099-K threshold in 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most Depop sellers will receive a 1099-K if they earn $600 or more in gross sales."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can minors form an LLC for Depop?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. In most states, minors can form an LLC with parent or guardian involvement."
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