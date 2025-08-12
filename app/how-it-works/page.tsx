import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { SectionReveal } from '../../components/reveal'
import PremiumButton from '../../components/ui/PremiumButton'
import Footer from '../../components/Footer'
import HowItWorksVideo from './HowItWorksVideo'

export const metadata: Metadata = {
  title: 'See How Genie Works in 30 Seconds',
  description: 'Watch how Genie helps you set up your LLC with personalized instructions, EIN help, and downloads in one clean dashboard.',
  openGraph: {
    title: 'See How Genie Works in 30 Seconds',
    description: 'Watch how Genie helps you set up your LLC with personalized instructions, EIN help, and downloads in one clean dashboard.',
    url: 'https://startwithgenie.com/how-it-works',
    images: [
      {
        url: 'https://startwithgenie.com/genie-og.png',
        width: 1200,
        height: 628,
        alt: 'Start With Genie – How It Works',
      },
    ],
  },
  twitter: {
    title: 'See How Genie Works in 30 Seconds',
    description: 'Watch how Genie helps you set up your LLC with personalized instructions, EIN help, and downloads in one clean dashboard.',
    images: ['https://startwithgenie.com/genie-og.png'],
  },
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <HowItWorksVideo />
      <Footer />
    </div>
  )
} 