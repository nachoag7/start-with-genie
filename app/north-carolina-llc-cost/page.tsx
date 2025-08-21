import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Button } from '../../components/ui/Button'
import Footer from '../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'North Carolina LLC Cost: The Real Price to Start in 2025',
  description: 'How much does an NC LLC actually cost? We break down the mandatory $125 filing fee, the $200 annual report, and other expenses you need to know about.',
  keywords: 'North Carolina LLC cost, NC LLC fees, North Carolina LLC formation cost, NC business formation, North Carolina LLC filing fee, NC LLC annual fee',
  openGraph: {
    title: 'North Carolina LLC Cost: The Real Price to Start in 2025',
    description: 'How much does an NC LLC actually cost? We break down the mandatory $125 filing fee, the $200 annual report, and other expenses you need to know about.',
    url: 'https://startwithgenie.com/north-carolina-llc-cost',
    siteName: 'Genie LLC',
    images: [{ url: 'https://startwithgenie.com/og/cover.jpg', width: 1200, height: 630, alt: 'North Carolina LLC Cost Guide' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Carolina LLC Cost: The Real Price to Start in 2025',
    description: 'How much does an NC LLC actually cost? We break down the mandatory $125 filing fee, the $200 annual report, and other expenses you need to know about.',
    images: ['https://startwithgenie.com/og/cover.jpg'],
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "North Carolina LLC Cost: The Real Price to Start in 2025",
      "description": "How much does an NC LLC actually cost? We break down the mandatory $125 filing fee, the $200 annual report, and other expenses you need to know about.",
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
        "@id": "https://startwithgenie.com/north-carolina-llc-cost"
      }
    })
  }
}

export default function NorthCarolinaLLCCostPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            How Much Does an LLC Cost in North Carolina? A 2025 Breakdown
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Ready to start your business in the Tar Heel State? Awesome! Forming a Limited Liability Company (LLC) is a smart move to protect your personal assets as you grow. But let's get to the question that's top of mind: "How much is this going to set me back?"
          </p>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
            Let's break down the real North Carolina LLC cost, covering the required state fees and other potential expenses you should budget for.
          </p>
        </section>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-12">
          <h2 className="text-3xl font-bold text-neutral-900 mt-16 mb-8">The Main Event: Mandatory North Carolina State Fees</h2>
          <p>
            These are the non-negotiable costs you'll pay directly to the North Carolina Secretary of State.
          </p>

          <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">1. Articles of Organization Filing Fee: $125</h3>
          <p>
            This is your ticket to entry. To officially form your NC LLC, you must file a document called the Articles of Organization. This filing officially registers your business with the state.
          </p>
          <ul>
            <li><strong>Cost:</strong> $125</li>
            <li><strong>Payment:</strong> Paid once when you first submit your formation documents.</li>
            <li><strong>Pro Tip:</strong> Filing online is the fastest way to get your business up and running. The state's online portal is efficient and gets you a quicker confirmation.</li>
          </ul>
          <p>
            Once your Articles are approved, your business is officially recognized by North Carolina. Congratulations!
          </p>

          <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">2. Annual Report Fee: $200</h3>
          <p>
            This is the most important recurring cost to keep in mind. To maintain your LLC's good standing, North Carolina requires you to file an Annual Report each year.
          </p>
          <ul>
            <li><strong>Cost:</strong> $200</li>
            <li><strong>When It's Due:</strong> Your report is due by April 15th every year, starting the year after your LLC is formed.</li>
            <li><strong>Heads Up!</strong> Don't be late. The state can dissolve your LLC if you fail to file your Annual Report. Mark April 15th on your calendar—it's not just for taxes!</li>
          </ul>
          <p>
            So, your first year will cost a minimum of $125. In your second year and every year after, you'll have the $200 Annual Report fee.
          </p>

          <h2 className="text-3xl font-bold text-neutral-900 mt-16 mb-8">Potential & Optional LLC Costs in North Carolina</h2>
          <p>
            Beyond the state-mandated fees, other common expenses might pop up. These aren't required for every business, but they're important to know about.
          </p>

          <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">Registered Agent Service: $0 - $150+ per year</h3>
          <p>
            By law, every North Carolina LLC must appoint a registered agent. This is an individual or company responsible for receiving official legal notices and state mail on your business's behalf.
          </p>
          <ul>
            <li><strong>Option 1: Be Your Own Agent ($0):</strong> You can be your own registered agent if you are a North Carolina resident with a physical street address in the state (P.O. boxes don't count). It's free, but your address becomes public, and you have to be available during all business hours to receive documents.</li>
            <li><strong>Option 2: Hire a Commercial Registered Agent ($100 - $150/year):</strong> This is a popular choice for privacy and convenience. A professional service handles your important mail, keeps your home address off public record, and gives you the flexibility to travel without worrying about missing a legal notice.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">Assumed Name (DBA) Certificate: $26</h3>
          <p>
            What if you want to operate under a different brand name than your official LLC name? (e.g., Your LLC is "Blue Ridge Ventures LLC," but your storefront is "Asheville Adventure Gear.") You'll need to file for an Assumed Business Name, also known as a DBA ("Doing Business As").
          </p>
          <ul>
            <li><strong>Cost:</strong> $26</li>
            <li><strong>Process:</strong> This is filed with the Register of Deeds in the county where your business is located.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">Other Potential Expenses to Consider:</h3>
          <ul>
            <li><strong>LLC Formation Services:</strong> If you'd rather not deal with state paperwork, you can hire a service to do it for you. Big names like ZenBusiness or Bizee offer packages with various features. For a more straightforward option, a service like Genie LLC focuses on simple, fast filing without the confusing tiered packages and upsells.</li>
            <li><strong>Business Licenses and Permits:</strong> Your industry and location (city/county) may require you to have specific licenses or permits to operate. These costs can vary dramatically, so check with your local government.</li>
            <li><strong>Lawyer Fees:</strong> For complex partnerships or to get a custom operating agreement drafted, consulting a business lawyer is a wise investment. This can range from a few hundred to several thousand dollars but provides critical legal protection.</li>
          </ul>

          <h2 className="text-3xl font-bold text-neutral-900 mt-16 mb-8">North Carolina LLC Cost: The Bottom Line</h2>
          <p>
            Let's do a quick recap of the costs to launch and run your NC LLC.
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
                  <td className="py-2"><strong>$125</strong></td>
                  <td className="py-2">One-Time</td>
                  <td className="py-2">Mandatory state fee to create the LLC.</td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="py-2"><strong>Annual Report</strong></td>
                  <td className="py-2"><strong>$200</strong></td>
                  <td className="py-2">Annually</td>
                  <td className="py-2">Mandatory state fee to stay compliant.</td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="py-2"><strong>Registered Agent</strong></td>
                  <td className="py-2"><strong>$0 - $150+</strong></td>
                  <td className="py-2">Annually</td>
                  <td className="py-2">Optional if you act as your own agent.</td>
                </tr>
                <tr>
                  <td className="py-2"><strong>Assumed Name (DBA)</strong></td>
                  <td className="py-2"><strong>$26</strong></td>
                  <td className="py-2">One-Time</td>
                  <td className="py-2">Only if you use a fictitious business name.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-10">
            <p className="mb-0">
              <strong>The Bottom Line:</strong> At a minimum, budget $125 to get started and $200 every year after that to stay compliant. While other costs can arise, North Carolina offers an affordable environment to officially launch your business and protect your personal assets. You've got this!
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg my-12 text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Register Your North Carolina LLC Today for $49</h3>
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