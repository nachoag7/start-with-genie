// app/compare/page.tsx
'use client';

import React from 'react';
import SeoPageLayout from '../../components/SeoPageLayout';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';
import { CheckCircle, XCircle, FileText, ListChecks, UserCheck, ShieldCheck, BadgeCheck, MessageCircle, Lock, Undo2 } from 'lucide-react';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function ComparePage() {
  return (
    <>
      <Head>
        <title>Start With Genie – Launch Your LLC for $49</title>
        <meta
          name="description"
          content="Start your LLC for just $49 with Start With Genie – a clean, modern assistant that gives you everything you need to form your business legally. No upsells. No confusion."
        />
        <meta property="og:title" content="Start With Genie – Launch Your LLC for $49" />
        <meta property="og:description" content="A $49 assistant to help you launch your LLC step-by-step. No lawyers, no upsells." />
        <meta property="og:image" content="/genie-preview.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SeoPageLayout>
        {/* 1. Hero Section */}
        <section className="w-full max-w-2xl mx-auto text-center py-24 px-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight leading-tight" style={{letterSpacing: '-0.01em'}}>You don’t need to spend $199 to start your LLC.</h1>
          <p className="text-lg md:text-2xl text-neutral-600 mb-10 max-w-xl mx-auto font-normal" style={{lineHeight: '1.5'}}>Most founders get tricked by confusing packages and hidden fees. Start With Genie gives you everything you need to launch — for just $49.</p>
          <Link href="/checkout">
            <Button size="xl" className="text-xl font-semibold px-10 py-5 rounded-full bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] shadow-lg hover:brightness-110 focus:ring-4 focus:ring-blue-400 mb-5">
              Start My LLC for $49
            </Button>
          </Link>
          <div className="text-base text-neutral-500 mt-2 max-w-md mx-auto">Built for founders who almost used LegalZoom, ZenBusiness, or Incfile — and wanted a faster, cleaner option.</div>
        </section>

        {/* 2. Comparison Table */}
        <section className="w-full max-w-5xl mx-auto py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 text-center">How Start With Genie compares to other LLC services</h2>
          <p className="text-lg text-neutral-600 mb-8 text-center">A fair look at what you get — and what you don’t — with typical online filing services.</p>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100 bg-white">
            <table className="min-w-full text-base">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left font-semibold text-gray-700 text-lg w-1/3">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-700 text-lg w-1/3">Start With Genie</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-700 text-lg w-1/3">Typical Services</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Price */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-5 font-medium text-neutral-900">Price</td>
                  <td className="px-6 py-5 text-center font-medium"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> $49 flat</span></td>
                  <td className="px-6 py-5 text-center font-medium"><span className="inline-flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500" /> $0 → $200+ in upsells</span></td>
                </tr>
                {/* EIN help */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-5 font-medium text-neutral-900">EIN help</td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Included</span></td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Available (usually a paid add-on)</span></td>
                </tr>
                {/* Operating agreement */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-5 font-medium text-neutral-900">Operating agreement</td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Included</span></td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Available (usually a paid add-on)</span></td>
                </tr>
                {/* Filing instructions */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-5 font-medium text-neutral-900">Filing instructions</td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Personalized for your state</span></td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500" /> Generic or minimal</span></td>
                </tr>
                {/* Upsells */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-5 font-medium text-neutral-900">Upsells</td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> None</span></td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500" /> Frequent add-ons and packages</span></td>
                </tr>
                {/* Filing service */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-5 font-medium text-neutral-900">Filing service</td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500" /> Self-guided</span></td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Filing handled for you</span></td>
                </tr>
                {/* Support */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-5 font-medium text-neutral-900">Support</td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> AI assistant included</span></td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Varies — usually email/phone</span></td>
                </tr>
                {/* Delivery speed */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-5 font-medium text-neutral-900">Delivery speed</td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Instant access</span></td>
                  <td className="px-6 py-5 text-center"><span className="inline-flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500" /> Often delayed or behind upsell steps</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. What You Actually Get */}
        <section className="w-full max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">Everything included in your $49 setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-7 h-7 text-green-600 mb-2" />
              <div className="font-medium text-neutral-900">Personalized LLC Filing Instructions</div>
              <div className="text-sm text-neutral-600">Step-by-step based on your state</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-7 h-7 text-green-600 mb-2" />
              <div className="font-medium text-neutral-900">EIN Guide</div>
              <div className="text-sm text-neutral-600">How to get your federal tax ID fast</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <FileText className="w-7 h-7 text-green-600 mb-2" />
              <div className="font-medium text-neutral-900">Operating Agreement</div>
              <div className="text-sm text-neutral-600">Ready-to-sign legal document</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <ListChecks className="w-7 h-7 text-green-600 mb-2" />
              <div className="font-medium text-neutral-900">Startup Checklist</div>
              <div className="text-sm text-neutral-600">Know what to do after filing</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <UserCheck className="w-7 h-7 text-green-600 mb-2" />
              <div className="font-medium text-neutral-900">Genie Assistant</div>
              <div className="text-sm text-neutral-600">Ask questions, get instant answers</div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/checkout">
              <Button size="lg" className="text-lg px-8 py-3">Start for $49</Button>
            </Link>
          </div>
        </section>

        {/* 4. Social Proof */}
        <section className="w-full max-w-2xl mx-auto py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">Real People, Real Relief</h2>
          <div className="space-y-6">
            <blockquote className="bg-white rounded-xl shadow-sm p-6 text-left border-l-4 border-blue-500">
              “I was 3 clicks away from paying $300 on another site. Genie showed me I only needed $49.”<br />
              <span className="block mt-2 text-sm text-neutral-500">– Olivia M., Ohio</span>
            </blockquote>
            <blockquote className="bg-white rounded-xl shadow-sm p-6 text-left border-l-4 border-blue-500">
              “I finished my LLC setup in under 15 minutes.”<br />
              <span className="block mt-2 text-sm text-neutral-500">– Daniel S., Texas</span>
            </blockquote>
            <blockquote className="bg-white rounded-xl shadow-sm p-6 text-left border-l-4 border-blue-500">
              “Genie made it so easy. I wish I’d found it before wasting time on other sites.”<br />
              <span className="block mt-2 text-sm text-neutral-500">– Priya R., California</span>
            </blockquote>
          </div>
        </section>

        {/* 5. Why It Works */}
        <section className="w-full max-w-2xl mx-auto py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">Why founders are choosing Genie instead</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-1" />Built to save you time — no upsells or fluff</li>
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-1" />Transparent pricing ($49 flat)</li>
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-1" />Instant delivery + always-on assistant</li>
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-1" />Doesn’t file for you — empowers you to do it yourself</li>
          </ul>
        </section>

        {/* 6. Final CTA */}
        <section className="w-full max-w-2xl mx-auto text-center py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Ready to launch your LLC?</h2>
          <p className="text-lg text-neutral-600 mb-8">No upsells. No law firm fees. Just clean guidance for $49.</p>
          <Link href="/checkout">
            <Button size="lg" className="text-lg px-8 py-3">Start My LLC Setup</Button>
          </Link>
        </section>

        {/* 7. Footer Trust Elements */}
        <section className="w-full max-w-2xl mx-auto py-10 px-4">
          <div className="text-xs text-neutral-400 text-center mt-2">Start With Genie is not a law firm and does not provide legal advice.</div>
        </section>
        <Footer />
      </SeoPageLayout>
    </>
  );
} 