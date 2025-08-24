import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, ArrowRight, FileText, DollarSign, Clock, Shield } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'How to File an LLC in Kentucky (2025 Guide + Costs)',
  description: 'Starting an LLC in Kentucky? Learn the exact steps, filing fees, and requirements. Save time and money with this clear 2025 guide to forming your LLC.',
  openGraph: {
    title: 'How to File an LLC in Kentucky (2025 Guide + Costs)',
    description: 'Starting an LLC in Kentucky? Learn the exact steps, filing fees, and requirements. Save time and money with this clear 2025 guide to forming your LLC.',
    url: 'https://startwithgenie.com/how-to-file-an-llc-in-kentucky',
    images: [
      {
        url: 'https://startwithgenie.com/genie-og.png',
        width: 1200,
        height: 628,
        alt: 'How to File an LLC in Kentucky - Start With Genie',
      },
    ],
  },
  twitter: {
    title: 'How to File an LLC in Kentucky (2025 Guide + Costs)',
    description: 'Starting an LLC in Kentucky? Learn the exact steps, filing fees, and requirements. Save time and money with this clear 2025 guide to forming your LLC.',
    images: ['https://startwithgenie.com/genie-og.png'],
  },
};

export default function KentuckyLLCPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="h-14 sm:h-16" />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
            How to File an LLC in Kentucky
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            2025 Guide + Costs
          </p>
          <p className="text-lg text-neutral-700 mb-8 max-w-3xl mx-auto">
            Starting an LLC in Kentucky doesn't have to be complicated or expensive. The process is straightforward if you know the steps and what each one costs. In this guide, we'll break down everything you need to file your Kentucky LLC in 2025.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 pb-20">
        
        {/* Step 1: Name Your LLC */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Step 1: Name Your LLC
          </h2>
          
          <p className="text-lg text-neutral-700 mb-6">
            Kentucky requires your LLC name to:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-700">Be unique and distinguishable from other businesses in the state</span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-700">Include "Limited Liability Company," "LLC," or "L.L.C."</span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-700">Not include restricted terms like "bank" or "insurance" unless you have approval</span>
            </li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-neutral-700">
              <strong>Use the Kentucky Business Name Search</strong> to confirm availability before filing.
            </p>
          </div>
        </section>

        {/* Step 2: Appoint a Registered Agent */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Step 2: Appoint a Registered Agent
          </h2>
          
          <p className="text-lg text-neutral-700 mb-6">
            A registered agent is required for every Kentucky LLC. This is the person or company that receives official documents and service of process on your behalf.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-700">Must have a physical address in Kentucky</span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-700">Can be you, another member, or a professional service</span>
            </li>
          </ul>
        </section>

        {/* Step 3: File Articles of Organization */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Step 3: File Articles of Organization
          </h2>
          
          <p className="text-lg text-neutral-700 mb-6">
            This is the document that officially forms your LLC. You can file online with the Kentucky Secretary of State.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <DollarSign className="text-blue-600 mr-2" size={20} />
                <h3 className="font-semibold text-neutral-900">Filing Fee</h3>
              </div>
              <p className="text-2xl font-bold text-blue-600">$40</p>
              <p className="text-sm text-neutral-600">One of the lowest in the country</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Clock className="text-blue-600 mr-2" size={20} />
                <h3 className="font-semibold text-neutral-900">Processing Time</h3>
              </div>
              <p className="text-2xl font-bold text-blue-600">1-3 days</p>
              <p className="text-sm text-neutral-600">If filed online</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-neutral-700">
              <strong>File here:</strong> Kentucky Secretary of State – Business Filings
            </p>
          </div>
        </section>

        {/* Step 4: Create an Operating Agreement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Step 4: Create an Operating Agreement
          </h2>
          
          <p className="text-lg text-neutral-700 mb-6">
            While Kentucky doesn't legally require an LLC operating agreement, it's highly recommended. This document outlines ownership percentages, profit sharing, and how decisions are made. It helps prevent disputes and keeps your LLC structured.
          </p>
        </section>

        {/* Step 5: Get an EIN from the IRS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Step 5: Get an EIN from the IRS
          </h2>
          
          <p className="text-lg text-neutral-700 mb-6">
            An Employer Identification Number (EIN) is like a Social Security number for your business. You'll need it to:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-700">Open a business bank account</span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-700">Hire employees</span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-700">File federal taxes</span>
            </li>
          </ul>

          <p className="text-lg text-neutral-700">
            The EIN is free and can be obtained directly from the IRS website.
          </p>
        </section>

        {/* Step 6: Stay Compliant */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Step 6: Stay Compliant with Kentucky Requirements
          </h2>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-700"><strong>Annual Report:</strong> Due each year by June 30th. Filing fee is $15.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-700"><strong>Business Licenses:</strong> Depending on your city/county and industry, you may need additional licenses or permits.</span>
            </li>
          </ul>
        </section>

        {/* Kentucky LLC Costs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Kentucky LLC Costs (2025)
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-700">Articles of Organization:</span>
                <span className="font-bold text-neutral-900">$40</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-700">Annual Report:</span>
                <span className="font-bold text-neutral-900">$15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-700">Registered Agent:</span>
                <span className="font-bold text-neutral-900">$0-$300</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-neutral-900">Total cost to form and maintain:</span>
                <span className="text-blue-600">Very affordable</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-neutral-700 mt-6">
            Total cost to form and maintain your LLC in Kentucky is very affordable compared to other states.
          </p>
        </section>

        {/* Should You Use a Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Should You Use a Service?
          </h2>
          
          <p className="text-lg text-neutral-700 mb-6">
            You can file directly through the Kentucky Secretary of State for just $40. If you prefer step-by-step guidance, companies like LegalZoom, ZenBusiness, or Genie LLC provide simplified filing.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-neutral-700">
              <strong>Genie LLC is a $49 flat-rate option</strong> that gives you everything you need to launch — guided state filing instructions, EIN help, and a customized operating agreement — without the upsells.
            </p>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Final Thoughts
          </h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-lg text-neutral-700">
              Kentucky is one of the most affordable states to start an LLC, with low filing and annual fees. Whether you file directly or use a service, the key is making sure your paperwork and compliance steps are handled correctly.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Start Your Kentucky LLC?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Get everything you need to form your LLC in Kentucky with our guided process.
          </p>
          <Link 
            href="/start"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start My LLC
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </section>

      </div>

      <Footer />
    </div>
  );
} 