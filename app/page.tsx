import React from 'react'
import type { Metadata } from 'next'
import HomePageClient from '../components/HomePageClient'

export const metadata: Metadata = {
  title: 'The New Way to Start Your Business',
  description: 'Launch your LLC with Genie\'s $49 business launch dashboard — we don\'t file for you, but you get everything you need in one place, without the $299+ upsells.',
  openGraph: {
    title: 'The New Way to Start Your Business',
    description: 'Launch your LLC with Genie\'s $49 business launch dashboard — we don\'t file for you, but you get everything you need in one place, without the $299+ upsells.',
    url: 'https://startwithgenie.com/',
    images: [
      {
        url: 'https://startwithgenie.com/genie-og.png',
        width: 1200,
        height: 628,
        alt: 'Start With Genie – Business launch dashboard',
      },
    ],
  },
  twitter: {
    title: 'The New Way to Start Your Business',
    description: 'Launch your LLC with Genie\'s $49 business launch dashboard — we don\'t file for you, but you get everything you need in one place, without the $299+ upsells.',
    images: ['https://startwithgenie.com/genie-og.png'],
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Start With Genie",
      "url": "https://startwithgenie.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://startwithgenie.com/search?q={query}",
        "query-input": "required name=query",
      },
      "description": "Launch your LLC with Genie's $49 business launch dashboard — we don't file for you, but you get everything you need in one place, without the $299+ upsells.",
    }),
  },
}

export default function Home() {
  return <HomePageClient />
} 
 
 
 
 
 