import React from 'react'
import type { Metadata } from 'next'
import HomePageClient from '../components/HomePageClient'
import { site, defaultMeta } from '../lib/seo'

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: "Genie LLC, LLC formation, start LLC, business formation, LLC registration, online LLC, $49 LLC, business startup, entrepreneur, small business",
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "Genie LLC - Start Your Business" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [site.ogImage],
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Genie LLC - Start Your LLC Online for Just $49",
      "description": defaultMeta.description,
      "url": site.url,
      "mainEntity": {
        "@type": "Service",
        "name": "LLC Formation Service",
        "provider": {
          "@type": "Organization",
          "name": "Genie LLC"
        },
        "description": "Professional LLC formation guidance and document preparation service",
        "url": site.url,
        "areaServed": "United States",
        "serviceType": "Business Formation",
        "offers": {
          "@type": "Offer",
          "price": "49",
          "priceCurrency": "USD",
          "description": "Complete LLC formation package including guidance, documents, and support"
        }
      }
    })
  }
}

export default function Home() {
  return <HomePageClient />
} 
 
 
 
 
 