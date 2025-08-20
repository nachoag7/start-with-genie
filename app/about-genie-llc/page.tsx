import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'
import { CheckCircle, Shield, Users, Zap, FileText, HeadphonesIcon, LayoutDashboard, Sparkles, ArrowRight, Star, Clock, DollarSign } from 'lucide-react'
import { site } from '../../lib/seo'

export const metadata: Metadata = {
  title: "About Genie LLC - Professional Business Formation Service",
  description: "Learn about Genie LLC, the trusted business formation service helping entrepreneurs start their LLCs for just $49. Get expert guidance, documents, and support.",
  keywords: "Genie LLC, about Genie LLC, business formation service, LLC formation company, Genie business services, LLC registration service",
  openGraph: {
    title: "About Genie LLC - Professional Business Formation Service",
    description: "Learn about Genie LLC, the trusted business formation service helping entrepreneurs start their LLCs for just $49. Get expert guidance, documents, and support.",
    url: `${site.url}/about-genie-llc`,
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "About Genie LLC" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Genie LLC - Professional Business Formation Service",
    description: "Learn about Genie LLC, the trusted business formation service helping entrepreneurs start their LLCs for just $49.",
    images: [site.ogImage],
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Genie LLC",
      "url": site.url,
      "logo": `${site.url}/brandmark-design.png`,
      "description": "Professional LLC formation service helping entrepreneurs start their businesses with expert guidance for just $49",
      "foundingDate": "2024",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": `${site.url}/contact`
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://startwithgenie.com"
      ]
    })
  }
}

export default function AboutGenieLLC() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Genie LLC</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're the trusted business formation service that's helping thousands of entrepreneurs 
            start their LLCs with confidence. No complicated legal jargon, no hidden fees—just 
            clear guidance and everything you need for $49.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your LLC Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To democratize business formation by making LLC creation accessible, 
              affordable, and straightforward for every entrepreneur.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Protection & Security</h3>
              </div>
              <p className="text-gray-600">
                We help you establish the legal protection your business needs while 
                keeping your personal assets safe from business liabilities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Speed & Efficiency</h3>
              </div>
              <p className="text-gray-600">
                Get your LLC formation process started in minutes, not days. 
                Our streamlined approach saves you time and reduces confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Genie LLC Offers</h2>
            <p className="text-lg text-gray-600">
              Everything you need to start your business, all in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Guided LLC Registration</h3>
              <p className="text-gray-600 text-sm">
                Clear, state-specific filing instructions tailored to your business
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LayoutDashboard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Track your progress and access all documents in one organized place
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Assistant</h3>
              <p className="text-gray-600 text-sm">
                Get instant answers to your questions with our Genie AI assistant
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">EIN Application</h3>
              <p className="text-gray-600 text-sm">
                Step-by-step guidance to get your Employer Identification Number
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operating Agreement</h3>
              <p className="text-gray-600 text-sm">
                Customizable LLC operating agreement ready for your business
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch Checklist</h3>
              <p className="text-gray-600 text-sm">
                Complete checklist to ensure your business launches successfully
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Genie */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Genie LLC?</h2>
            <p className="text-lg text-gray-600">
              We're different from traditional business formation services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  One simple $49 fee covers everything. No hidden costs, no surprise charges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Legal Fees</h3>
                <p className="text-gray-600">
                  We provide guidance and documents, not legal advice. This keeps costs low 
                  while giving you everything you need to file yourself.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">State-Specific Guidance</h3>
                <p className="text-gray-600">
                  Every state has different requirements. We provide personalized 
                  instructions based on your specific state and business type.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  Get help when you need it with our AI assistant and support team. 
                  We're here for you throughout your business journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Business with Genie LLC?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of entrepreneurs who have trusted Genie LLC to help them 
            start their businesses. Get started today for just $49.
          </p>
          <Link href="/start">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Start Your LLC Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 