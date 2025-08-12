import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '../../components/ui/Button'
import PremiumButton from '../../components/ui/PremiumButton'
import Footer from '../../components/Footer'
import SampleDashboardCard from '../../components/SampleDashboardCard'
import { SectionReveal, StaggerReveal, Item } from '../../components/reveal'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, DollarSign, Users, FileText, LayoutDashboard, Bot, ArrowRight, Clock, Zap, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Fastest Way for Dropshippers to Get an LLC and Protect Their Store',
  description: 'If you run a dropshipping store without an LLC, you\'re one payment processor review away from frozen payouts. Get protected in less than an hour for just $49.',
  openGraph: {
    title: 'The Fastest Way for Dropshippers to Get an LLC and Protect Their Store',
    description: 'If you run a dropshipping store without an LLC, you\'re one payment processor review away from frozen payouts. Get protected in less than an hour for just $49.',
    url: 'https://startwithgenie.com/llc-dropshippers',
    images: [
      {
        url: 'https://startwithgenie.com/genie-og.png',
        width: 1200,
        height: 628,
        alt: 'Start With Genie – LLC for Dropshippers',
      },
    ],
  },
  twitter: {
    title: 'The Fastest Way for Dropshippers to Get an LLC and Protect Their Store',
    description: 'If you run a dropshipping store without an LLC, you\'re one payment processor review away from frozen payouts. Get protected in less than an hour for just $49.',
    images: ['https://startwithgenie.com/genie-og.png'],
  },
}

export default function LLCDropshippersPage() {
  const features = [
    {
      icon: <FileText size={24} />,
      title: "Step-by-Step State Filing",
      desc: "Get exact instructions for your state so you can file correctly the first time and stay compliant. No legal headaches. No wondering if you missed a form.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "EIN Walkthrough",
      desc: "Your Federal Tax ID is what lets you open a business bank account and connect payment processors like Stripe and PayPal. We walk you through it in minutes so you can start getting paid under your business.",
    },
    {
      icon: <Shield size={24} />,
      title: "Custom Operating Agreement",
      desc: "A lawyer-inspired template built for ecommerce. Protect your business from disputes and outline exactly who owns what.",
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Clean Founder Dashboard",
      desc: "Every document. Every step. All in one workspace you can access anytime. Perfect for busy store owners who don't want a pile of random files in their inbox.",
    },
    {
      icon: <Bot size={24} />,
      title: "24/7 Genie Assistant",
      desc: "Instant answers when you're stuck. Whether it's \"How do I get my EIN without an SSN?\" or \"Which state should I file in?\" Genie is there 24/7.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Sign up and answer a few questions about your store and state.",
    },
    {
      step: "2",
      title: "Get your personalized LLC setup kit instantly.",
    },
    {
      step: "3",
      title: "Follow the step-by-step guide to file your LLC, get your EIN, and sign your Operating Agreement.",
    },
  ];

  const faqs = [
    {
      q: "Will this work for my Shopify or dropshipping store?",
      a: "Yes. Genie is made for online sellers who don't hold inventory. Every instruction, document, and example is built for ecommerce.",
    },
    {
      q: "Why do dropshippers even need an LLC?",
      a: "An LLC protects your personal assets, helps you pay less in taxes, and makes you look like a serious business to payment processors and suppliers.",
    },
    {
      q: "Can I use this LLC for multiple stores?",
      a: "Yes. One LLC can own multiple Shopify, Amazon, Etsy, or eBay stores.",
    },
    {
      q: "What if I'm outside the US?",
      a: "Genie can help you file in the US and get an EIN without a Social Security Number.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none bg-wave md:bg-center bg-top" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            <SectionReveal>
              <div>
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                  Get Your Dropshipping LLC in Under an Hour. For $49.
                </h1>
                <p className="mt-5 text-lg text-gray-600">
                  Genie doesn't file for you... but it gives you everything you need to legalize your e-com store, for $49. Built for dropshippers who want to avoid frozen payouts, tax headaches, and supplier trust issues.
                </p>
                                 <div className="mt-8 text-center md:text-left">
                   <Link href="/checkout">
                     <PremiumButton size="md" className="inline-block hover:scale-[1.01] hover:shadow-lg transition-all duration-200 ease-smooth group">
                       <span className="relative text-white">
                         Secure My LLC Today
                         <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-smooth"></span>
                       </span>
                     </PremiumButton>
                   </Link>
                 </div>
                <div className="mt-4 text-sm text-gray-500 text-center md:text-left">
                  One-time payment. No hidden fees.
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <div className="flex justify-center">
                <SampleDashboardCard />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why This Matters for Dropshippers
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              When Stripe, PayPal, or your suppliers ask for your LLC documents… you can't tell them, "I'll get back to you in a few weeks." You need it now.
            </p>
          </SectionReveal>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <p className="text-lg text-gray-700 mb-6">
              Without an LLC, you're taking risks every day:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Payment holds that last months</span>
              </li>
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Tax surprises you didn't budget for</span>
              </li>
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Disputes you can't defend against</span>
              </li>
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Suppliers who don't take you seriously</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700">
              Genie doesn't file for you. We give you a clear, personalized system so you can file the right way today and keep every dollar in your control.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What's Included
            </h2>
          </SectionReveal>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <SectionReveal key={index}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>
          </SectionReveal>
          
          <div className="space-y-8">
            {howItWorks.map((step, index) => (
              <SectionReveal key={index}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {step.step}
                  </div>
                  <div>
                    <p className="text-lg text-gray-700">
                      {step.title}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          
          <SectionReveal>
            <p className="text-center text-lg text-gray-600 mt-8">
              Most dropshippers have everything done in under an hour.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionReveal>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Founder's Note
              </h2>
              <p className="text-gray-700 leading-relaxed">
                When I started my first online business, I didn't have an LLC. Payment processors held my payouts for weeks. Taxes were confusing. And I lost deals because I didn't look like a real business.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Every LLC service I found was full of upsells and hidden fees. So I built Genie, a single $49 system that gives you everything you need to file right away and keep total control.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                — Ignacio, Founder
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs
            </h2>
          </SectionReveal>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <SectionReveal key={index}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">
                    {faq.a}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to launch your LLC and protect your dropshipping store?
            </h2>
                         <Link href="/checkout">
               <PremiumButton size="md" className="inline-block hover:scale-[1.01] hover:shadow-lg transition-all duration-200 ease-smooth group">
                 <span className="relative text-white">
                   Secure My LLC Today
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-smooth"></span>
                 </span>
               </PremiumButton>
             </Link>
            <p className="text-sm text-gray-500 mt-4">
              One payment. Everything included.
            </p>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
} 