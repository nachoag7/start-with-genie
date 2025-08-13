import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'The 5 States with the Lowest LLC Fees | Find the Cheapest Option',
  description: 'Discover the states with the lowest LLC fees, including initial filing costs and annual report fees. Find the most affordable option for your new business.',
  openGraph: {
    title: 'The 5 States with the Lowest LLC Fees | Find the Cheapest Option',
    description: 'Discover the states with the lowest LLC fees, including initial filing costs and annual report fees. Find the most affordable option for your new business.',
    url: 'https://startwithgenie.com/cheapest-states-to-form-an-llc',
    images: [
      {
        url: 'https://startwithgenie.com/genie-og.png',
        width: 1200,
        height: 628,
        alt: 'Cheapest States to Form an LLC - Start With Genie',
      },
    ],
  },
  twitter: {
    title: 'The 5 States with the Lowest LLC Fees | Find the Cheapest Option',
    description: 'Discover the states with the lowest LLC fees, including initial filing costs and annual report fees. Find the most affordable option for your new business.',
    images: ['https://startwithgenie.com/genie-og.png'],
  },
};

const cheapestStates = [
  {
    state: 'Kentucky',
    filingFee: '$40',
    annualFee: '$15',
    description: 'One of the lowest filing fees in the nation',
    pros: ['Lowest filing fee', 'Reasonable annual fee', 'Business-friendly'],
    cons: ['Limited privacy protections']
  },
  {
    state: 'Arkansas',
    filingFee: '$45',
    annualFee: '$150',
    description: 'Low filing fee but higher annual costs',
    pros: ['Very low filing fee', 'Simple process'],
    cons: ['High annual fee', 'Limited business advantages']
  },
  {
    state: 'Arizona',
    filingFee: '$50',
    annualFee: '$0',
    description: 'No annual fees make this very cost-effective long-term',
    pros: ['No annual fees', 'Good for long-term savings', 'Business-friendly climate'],
    cons: ['Higher initial cost than some options']
  },
  {
    state: 'Mississippi',
    filingFee: '$50',
    annualFee: '$0',
    description: 'No annual fees and simple formation process',
    pros: ['No annual fees', 'Low filing cost', 'Simple requirements'],
    cons: ['Limited business advantages', 'Basic privacy protections']
  },
  {
    state: 'Missouri',
    filingFee: '$50',
    annualFee: '$0',
    description: 'No annual fees and straightforward process',
    pros: ['No annual fees', 'Low filing cost', 'Central location'],
    cons: ['Limited privacy protections', 'Basic business laws']
  }
];

const noAnnualFeeStates = [
  'Arizona', 'Mississippi', 'Missouri', 'New Mexico', 'Ohio', 'South Carolina', 'Texas'
];

export default function CheapestStatesLLCPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="h-14 sm:h-16" />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
            The Cheapest States to Form an LLC
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Discover the states with the lowest LLC fees, including initial filing costs and annual report fees. Find the most affordable option for your new business.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 pb-20">
        
        {/* Introduction */}
        <section className="mb-16">
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Choosing the right state to form your Limited Liability Company (LLC) is a critical decision for any entrepreneur. While many factors come into play, the cost of formation and maintenance is often a top consideration. This guide will break down the states with the lowest LLC fees, helping you make an informed and cost-effective choice for your business.
          </p>
        </section>

        {/* Initial Filing Fees Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            The Cheapest States to Form an LLC: Initial Filing Fees
          </h2>
          
          <p className="text-lg text-neutral-700 mb-8">
            When it comes to the initial, one-time filing fee for creating an LLC, these states offer the lowest costs in the nation:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {cheapestStates.map((state, index) => (
              <div key={state.state} className="border border-neutral-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neutral-900">{state.state}</h3>
                  <span className="text-2xl font-bold text-blue-600">{state.filingFee}</span>
                </div>
                <p className="text-neutral-600 mb-4">{state.description}</p>
                <div className="space-y-2">
                  <div className="text-sm text-green-600">
                    <span>Annual: {state.annualFee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">Multiple States at $50</h3>
            <p className="text-neutral-700 mb-4">
              A number of states offer a low $50 filing fee, making them attractive options for new businesses. These include:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              {['Arizona', 'Colorado', 'Hawaii', 'Iowa', 'Michigan', 'Mississippi', 'Missouri', 'New Mexico'].map((state) => (
                <div key={state} className="text-neutral-700">
                  {state}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* No Annual Fees Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Beyond the Initial Fee: States with No Annual LLC Fees
          </h2>
          
          <p className="text-lg text-neutral-700 mb-6">
            While a low initial filing fee is appealing, it's the recurring annual fees that can add up over time. Some states, while not having the absolute lowest filing fee, offer the significant advantage of no annual report fees. This can lead to substantial long-term savings.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">States with No Annual Fees:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {noAnnualFeeStates.map((state) => (
                <div key={state} className="text-neutral-700">
                  {state}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-neutral-700">
              <strong>Important Note:</strong> Even if a state doesn't have an annual fee, you may still be required to file an annual report or information statement.
            </p>
          </div>
        </section>

        {/* Other Factors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            The "Cheapest" Isn't Always the "Best": Other Factors to Consider
          </h2>
          
          <p className="text-lg text-neutral-700 mb-8">
            While cost is a major factor, it shouldn't be the only one. Here are some other crucial considerations when choosing a state for your LLC:
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Your Home State</h3>
              <p className="text-neutral-700">
                For most small businesses, the best state to form your LLC is your home state. If you form an LLC in a different state but conduct business in your home state, you'll likely have to register your LLC as a "foreign LLC" in your home state. This means you'll be paying fees and dealing with paperwork in two states.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Registered Agent Fees</h3>
              <p className="text-neutral-700">
                All LLCs are required to have a registered agent in the state where they are formed. A registered agent is a person or company designated to receive official legal documents and correspondence on behalf of your business. If you don't have a physical address in the state of formation, you'll need to hire a registered agent service, which can cost anywhere from $100 to $300 per year.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Asset Protection and Privacy</h3>
              <p className="text-neutral-700">
                Some states, like Wyoming and Delaware, are known for their business-friendly laws, strong asset protection, and privacy for business owners. While the fees in these states may be higher, the legal advantages can be worth the cost for certain types of businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Comparison of the Most Affordable States for LLCs
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-neutral-200 rounded-lg">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="text-left p-4 font-semibold text-neutral-900">State</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Initial Filing Fee</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Annual Fee</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Key Considerations</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-neutral-200">
                  <td className="p-4 font-medium">Kentucky</td>
                  <td className="p-4">$40</td>
                  <td className="p-4">$15</td>
                  <td className="p-4 text-sm text-neutral-600">One of the lowest filing fees.</td>
                </tr>
                <tr className="border-t border-neutral-200 bg-neutral-50">
                  <td className="p-4 font-medium">Arkansas</td>
                  <td className="p-4">$45</td>
                  <td className="p-4">$150</td>
                  <td className="p-4 text-sm text-neutral-600">Low filing fee, but a higher annual fee.</td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <td className="p-4 font-medium">Arizona</td>
                  <td className="p-4">$50</td>
                  <td className="p-4">$0</td>
                  <td className="p-4 text-sm text-neutral-600">No annual fee.</td>
                </tr>
                <tr className="border-t border-neutral-200 bg-neutral-50">
                  <td className="p-4 font-medium">Mississippi</td>
                  <td className="p-4">$50</td>
                  <td className="p-4">$0</td>
                  <td className="p-4 text-sm text-neutral-600">No annual fee.</td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <td className="p-4 font-medium">Missouri</td>
                  <td className="p-4">$50</td>
                  <td className="p-4">$0</td>
                  <td className="p-4 text-sm text-neutral-600">No annual fee.</td>
                </tr>
                <tr className="border-t border-neutral-200 bg-neutral-50">
                  <td className="p-4 font-medium">New Mexico</td>
                  <td className="p-4">$50</td>
                  <td className="p-4">$0</td>
                  <td className="p-4 text-sm text-neutral-600">No annual fee and offers good privacy.</td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <td className="p-4 font-medium">Wyoming</td>
                  <td className="p-4">$100</td>
                  <td className="p-4">$60+</td>
                  <td className="p-4 text-sm text-neutral-600">Excellent asset protection and privacy.</td>
                </tr>
                <tr className="border-t border-neutral-200 bg-neutral-50">
                  <td className="p-4 font-medium">Delaware</td>
                  <td className="p-4">$90</td>
                  <td className="p-4">$300</td>
                  <td className="p-4 text-sm text-neutral-600">Business-friendly laws and a respected corporate legal system.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Conclusion: Making the Right Choice for Your Business
          </h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-lg text-neutral-700 mb-6">
              For most new entrepreneurs, the most cost-effective and straightforward option is to form their LLC in their home state. However, if you're looking for the absolute lowest costs, states like Kentucky, Arizona, and Mississippi are excellent choices. For businesses seeking enhanced asset protection and privacy, Wyoming and Delaware are worth considering, despite their higher fees.
            </p>
            
            <p className="text-lg text-neutral-700">
              By carefully weighing the initial filing fees, annual costs, and other important factors, you can choose the best state to form your LLC and set your business up for success.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Form Your LLC?
          </h2>
          <p className="text-lg text-neutral-600 mb-6">
            Get everything you need to form your LLC in any state with our comprehensive dashboard.
          </p>
          <Link href="/checkout">
            <button className="inline-flex items-center justify-center rounded-full h-12 px-8 text-base font-medium tracking-tight text-white select-none bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-sm shadow-black/10 transition-all duration-200 ease-out hover:brightness-105 hover:shadow-md hover:shadow-black/15 active:translate-y-[1px] active:brightness-95 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2">
              Get Started for $49
            </button>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
} 