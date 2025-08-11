import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import ClarityAnalytics from '../../components/ClarityAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://startwithgenie.com'),
  title: {
    default: 'Start With Genie',
    template: '%s • Start With Genie',
  },
  description: 'Launch your LLC with Genie\'s $49 business launch dashboard — we don\'t file for you, but you get everything you need in one place, without the $299+ upsells.',
  icons: {
    icon: '/favicon.ico?v=2',
  },
  openGraph: {
    type: 'website',
    siteName: 'Start With Genie',
    title: 'Start With Genie',
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
    card: 'summary_large_image',
    title: 'Start With Genie',
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
        "query-input": "required name=query"
      },
      "description": "Launch your LLC with Genie's $49 business launch dashboard — we don't file for you, but you get everything you need in one place, without the $299+ upsells."
    })
  }
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ClarityAnalytics />
    </>
  );
} 