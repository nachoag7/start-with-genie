import React from 'react'
import type { Metadata } from 'next'
import HomePageClient from '../components/HomePageClient'
import { site, defaultMeta } from '../lib/seo'

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "Start With Genie" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [site.ogImage],
  },
}

export default function Home() {
  return <HomePageClient />
} 
 
 
 
 
 