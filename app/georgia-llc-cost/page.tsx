import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Button } from '../../components/ui/Button'
import Footer from '../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Georgia LLC Cost: The $100 Fee + A Secret to Save You Time',
  description: 'Everyone pays the $100 GA state fee. But what if you could skip the paperwork headache? Learn about the fees & how services like Genie LLC make it simple.',
  keywords: 'Georgia LLC cost, Georgia LLC fees, Georgia LLC formation cost, Georgia business formation, Georgia LLC filing fee, Georgia LLC annual fee',
  openGraph: {
    title: 'Georgia LLC Cost: The $100 Fee + A Secret to Save You Time',
    description: 'Everyone pays the $100 GA state fee. But what if you could skip the paperwork headache? Learn about the fees & how services like Genie LLC make it simple.',
    url: 'https://startwithgenie.com/georgia-llc-cost',
    siteName: 'Genie LLC',
    images: [{ url: 'https://startwithgenie.com/og/cover.jpg', width: 1200, height: 630, alt: 'Georgia LLC Cost Guide' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgia LLC Cost: The $100 Fee + A Secret to Save You Time',
    description: 'Everyone pays the $100 GA state fee. But what if you could skip the paperwork headache? Learn about the fees & how services like Genie LLC make it simple.',
    images: ['https://startwithgenie.com/og/cover.jpg'],
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Georgia LLC Cost: The $100 Fee + A Secret to Save You Time",
      "description": "Everyone pays the $100 GA state fee. But what if you could skip the paperwork headache? Learn about the fees & how services like Genie LLC make it simple.",
      "image": "https://startwithgenie.com/og/cover.jpg",
      "author": {
        "@type": "Organization",
        "name": "Genie LLC"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Genie LLC",
        "logo": {
          "@type": "ImageObject",
          "url": "https://startwithgenie.com/brandmark-design.png"
        }
      },
      "datePublished": "2025-01-01",
      "dateModified": "2025-01-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://startwithgenie.com/georgia-llc-cost"
      }
    })
  }
}

export default function GeorgiaLLCCostPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              How Much Does an LLC Cost in Georgia? A No-Nonsense 2025 Guide
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              So, you're ready to launch your business in the Peach State! Exciting times. Forming a Limited Liability Company (LLC) is a fantastic way to protect your personal assets. But the big question on your mind is probably: "What's this actually going to cost me?"
            </p>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Let's cut through the clutter and break down the real Georgia LLC cost. We'll cover the essential state fees and the optional costs you might encounter.
            </p>
          </section>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            <h2 className="text-3xl font-bold text-neutral-900 mt-16 mb-8">The Main Event: Mandatory Georgia State Fees</h2>
            <p>
              These are the non-negotiable costs you'll pay directly to the Georgia Secretary of State.
            </p>

            <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">1. Articles of Organization Filing Fee: $100</h3>
            <p>
              This is the big one. To officially create your LLC, you must file a document called the Articles of Organization. Think of this as your business's birth certificate.
            </p>
            <ul>
              <li><strong>Cost:</strong> $100 (if filed online)</li>
              <li><strong>Payment:</strong> Paid once to the Georgia Corporations Division when you first form your LLC.</li>
              <li><strong>Pro Tip:</strong> Filing online is the fastest and most common method. While mail-in options exist, they can be slower and slightly more expensive ($110). Stick with the online filing for efficiency.</li>
            </ul>
            <p>
              This initial fee officially puts your LLC on the map. Once the state approves your Articles, you're in business!
            </p>

            <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">2. Annual Registration Fee: $50</h3>
            <p>
              Your financial commitment doesn't stop after the initial filing. To keep your LLC in good standing with the state, you must file an Annual Registration every year.
            </p>
            <ul>
              <li><strong>Cost:</strong> $50</li>
              <li><strong>When It's Due:</strong> Every year between January 1st and April 1st.</li>
              <li><strong>Heads Up!</strong> Don't miss this deadline. Failing to file on time can result in a $25 late fee and could eventually lead to the state administratively dissolving your LLC. Set a calendar reminder!</li>
            </ul>
            <p>
              So, for your first year, you're looking at a minimum total of $150 ($100 for formation + $50 for the first annual registration).
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-16 mb-8">Potential & Optional LLC Costs in Georgia</h2>
            <p>
              Beyond the state-mandated fees, you might run into other expenses. These aren't required for everyone, but they are common and important to budget for.
            </p>

            <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">Registered Agent Service: $0 - $150+ per year</h3>
            <p>
              Georgia law requires every LLC to have a registered agent. This is a person or company designated to receive official legal and state documents on behalf of your business.
            </p>
            <ul>
              <li><strong>Option 1: Be Your Own Agent ($0):</strong> You can serve as your own registered agent if you're a Georgia resident with a physical street address (not a P.O. Box). This is the cheapest option, but it means your personal address becomes public record, and you must be available during all business hours.</li>
              <li><strong>Option 2: Hire a Commercial Registered Agent ($100 - $150/year):</strong> Many business owners choose this route. A professional service handles all your official mail, keeps your home address private, and ensures you never miss a critical document. The peace of mind is often worth the cost.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">Trade Name (DBA) Registration: $25+</h3>
            <p>
              If you plan to operate your business under a name that's different from your official LLC name (e.g., your LLC is "Peach State Enterprises LLC," but you do business as "Atlanta's Best Coffee"), you'll need to register a "Doing Business As" (DBA) or trade name.
            </p>
            <ul>
              <li><strong>Cost:</strong> The fee varies by county but is typically around $25 - $40.</li>
              <li><strong>Process:</strong> This is usually filed with the Clerk of the Superior Court in the county where your main business office is located.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">Other Potential Expenses to Consider:</h3>
            <ul>
              <li><strong>LLC Formation Services:</strong> If you want to skip the paperwork, you can hire a service to file for you. Companies like ZenBusiness or Bizee offer various packages. For a more direct, no-fuss approach, a service like Genie LLC focuses purely on fast and simple filing without the complex upsells.</li>
              <li><strong>Business Licenses and Permits:</strong> Depending on your industry and location, you may need specific local, state, or federal licenses to operate legally. Costs vary widely.</li>
              <li><strong>Lawyer Fees:</strong> If you have a complex business structure or partnership, consulting with a lawyer to draft your operating agreement could cost a few hundred to a few thousand dollars, but it can save you massive headaches later.</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-16 mb-8">Georgia LLC Cost: The Bottom Line</h2>
            <p>
              Let's recap the costs to get your Georgia LLC up and running.
            </p>

            <div className="bg-blue-50 p-8 rounded-lg my-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-blue-200">
                    <th className="text-left py-2 font-semibold">Fee Item</th>
                    <th className="text-left py-2 font-semibold">Cost</th>
                    <th className="text-left py-2 font-semibold">Frequency</th>
                    <th className="text-left py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-100">
                    <td className="py-2"><strong>Articles of Organization</strong></td>
                    <td className="py-2"><strong>$100</strong></td>
                    <td className="py-2">One-Time</td>
                    <td className="py-2">Mandatory state fee to form the LLC.</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2"><strong>Annual Registration</strong></td>
                    <td className="py-2"><strong>$50</strong></td>
                    <td className="py-2">Annually</td>
                    <td className="py-2">Mandatory state fee to stay in good standing.</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2"><strong>Registered Agent</strong></td>
                    <td className="py-2"><strong>$0 - $150+</strong></td>
                    <td className="py-2">Annually</td>
                    <td className="py-2">Optional if you act as your own agent.</td>
                  </tr>
                  <tr>
                    <td className="py-2"><strong>Trade Name (DBA)</strong></td>
                    <td className="py-2"><strong>$25+</strong></td>
                    <td className="py-2">One-Time</td>
                    <td className="py-2">Only if you use a fictitious business name.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 my-10">
              <p className="mb-0">
                <strong>The Bottom Line:</strong> At a minimum, you must budget $100 for the initial filing and $50 every year after that. While other costs can add up, starting an LLC in Georgia is a very affordable and powerful step toward building your business and protecting your future. Good luck!
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg my-12 text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Register Your Georgia LLC Today for $49</h3>
              <p className="text-lg text-neutral-600 mb-6">
                Cheaper, faster, and simpler than LegalZoom or ZenBusiness.
              </p>
              <Link href="/onboarding">
                <button className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-8 py-4 text-base font-medium text-white hover:bg-[#2f6fe0] transition-all duration-200 hover:scale-105 shadow-[0_6px_18px_rgba(59,130,246,0.35)]">
                  Personalize My LLC Setup
                </button>
              </Link>
              <p className="text-sm text-neutral-500 mt-4">
                Full refund if it doesn't save you time and money.
              </p>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
} 