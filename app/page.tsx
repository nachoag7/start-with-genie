import React from 'react'
import type { Metadata } from 'next'
import HomePageClient from '../components/HomePageClient'

export const metadata: Metadata = {
  title: 'The New Way to Start Your Business',
  description: 'Register your LLC with Genie\'s guidance, get everything you need for $49',
  openGraph: {
    title: 'The New Way to Start Your Business',
    description: 'Register your LLC with Genie\'s guidance, get everything you need for $49',
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
    description: 'Register your LLC with Genie\'s guidance, get everything you need for $49',
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
      "description": "Register your LLC with Genie's guidance, get everything you need for $49",
    }),
  },
}

export default function Home() {
  return <HomePageClient />
} 
 
 
 
 
 