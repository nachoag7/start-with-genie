import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://startwithgenie.com'),
  title: 'Start With Genie – Launch Your LLC for $49',
  description: 'A flat $49 assistant that gives you everything you need to start your LLC — no upsells, no fluff.',
  icons: {
    icon: '/favicon.ico?v=2',
  },
  openGraph: {
    title: 'Start With Genie – Launch Your LLC for $49',
    description: 'A flat $49 assistant that gives you everything you need to start your LLC — no upsells, no fluff.',
    url: 'https://startwithgenie.com',
    siteName: 'Start With Genie',
    images: [
      {
        url: 'https://startwithgenie.com/genie-og.png',
        width: 1200,
        height: 628,
        alt: 'Start With Genie Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start With Genie – Launch Your LLC for $49',
    description: 'A flat $49 assistant that gives you everything you need to start your LLC — no upsells, no fluff.',
    images: ['https://startwithgenie.com/genie-og.png'],
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Start With Genie",
      "url": "https://startwithgenie.com",
      "logo": "https://startwithgenie.com/genie-og.png",
      "sameAs": [
        "https://www.facebook.com/startwithgenie"
      ]
    })
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        {/* If you want to add more <link> or <meta> tags, add them here inside <head> */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Removed global header/nav to prevent duplication on dashboard and other signed-in pages */}
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
