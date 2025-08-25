import React from 'react';
import Link from 'next/link';
import SeoPageLayout from '../../components/SeoPageLayout';

export default function OnlyFansTaxesPage() {
  return (
    <SeoPageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            OnlyFans Taxes Explained 2025
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            If you earn money on OnlyFans, you are self-employed in the eyes of the IRS. That means your earnings are taxable and you're responsible for filing correctly. This guide explains what taxes apply, what forms you'll receive, common mistakes to avoid, and how forming an LLC can make tax season easier.
          </p>

          <hr className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Taxes Apply to OnlyFans Creators
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Federal Income Tax</strong> — applied to your total taxable income.</li>
              <li><strong>Self-Employment Tax</strong> — 15.3% that covers Social Security and Medicare.</li>
              <li><strong>State Income Tax</strong> — varies depending on where you live.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Unlike employees, taxes are not withheld from your payouts. It's your responsibility to set aside money and file.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Forms You'll Receive
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>1099-NEC</strong> — Issued if you earn more than $600 in a year.</li>
              <li><strong>Schedule C (Form 1040)</strong> — Where you report your income and expenses.</li>
              <li><strong>Schedule SE</strong> — Where you calculate self-employment tax.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Keep these forms safe. They're required to file accurately.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Common Tax Mistakes
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Not setting aside money throughout the year.</li>
              <li>Mixing personal and business accounts.</li>
              <li>Missing estimated quarterly payments.</li>
              <li>Forgetting to log deductible expenses.</li>
            </ol>
          </section>

          <hr className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Forming an LLC Helps at Tax Time
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Keeps income and expenses separate.</li>
              <li>Strengthens deductions if audited.</li>
              <li>Makes it easier to open a business bank account.</li>
              <li>Provides future flexibility to elect S-Corp taxation to reduce self-employment tax.</li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Related Reading
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/onlyfans-tax-write-offs" className="text-blue-600 hover:text-blue-800 underline">
                  OnlyFans Tax Write Offs
                </Link>
              </li>
              <li>
                <Link href="/onlyfans-business-license" className="text-blue-600 hover:text-blue-800 underline">
                  OnlyFans Business License
                </Link>
              </li>
              <li>
                <Link href="/llc-for-onlyfans-creators" className="text-blue-600 hover:text-blue-800 underline">
                  LLC for OnlyFans Creators
                </Link>
              </li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              FAQ: OnlyFans Taxes
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do OnlyFans Creators Pay Taxes?
                </h3>
                <p className="text-gray-700">Yes. All income from OnlyFans is taxable self-employment income.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How Much Should I Save for Taxes?
                </h3>
                <p className="text-gray-700">A safe guideline is 25–30% of your earnings.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Does OnlyFans Send a 1099?
                </h3>
                <p className="text-gray-700">Yes, if you earn over $600 in a year.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do I Need to Pay Quarterly Taxes?
                </h3>
                <p className="text-gray-700">Yes, most self-employed individuals must pay four times a year.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can an LLC Lower My Taxes?
                </h3>
                <p className="text-gray-700">An LLC won't reduce taxes automatically but gives you the option to elect S-Corp status later, which can save thousands.</p>
              </div>
            </div>
          </section>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do OnlyFans Creators Pay Taxes?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. All income from OnlyFans is taxable self-employment income." }
                },
                {
                  "@type": "Question",
                  "name": "How Much Should I Save for Taxes?",
                  "acceptedAnswer": { "@type": "Answer", "text": "A safe guideline is 25–30% of your earnings." }
                },
                {
                  "@type": "Question",
                  "name": "Does OnlyFans Send a 1099?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you earn over $600 in a year." }
                },
                {
                  "@type": "Question",
                  "name": "Do I Need to Pay Quarterly Taxes?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, most self-employed individuals must pay four times a year." }
                },
                {
                  "@type": "Question",
                  "name": "Can an LLC Lower My Taxes?",
                  "acceptedAnswer": { "@type": "Answer", "text": "An LLC won't reduce taxes automatically but gives you the option to elect S-Corp status later, which can save thousands." }
                }
              ]
            })
          }}
        />
      </div>
    </SeoPageLayout>
  );
} 