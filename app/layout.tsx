import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://startwithgenie.com'),
  title: 'Start With Genie — Fast, Clear LLC Formation',
  description: 'Start your business with clarity. Step-by-step guidance, essential documents, and no upsells — just what you need to launch your LLC right.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Start With Genie — Fast, Clear LLC Formation',
    description: 'Start your business with clarity. Step-by-step guidance, essential documents, and no upsells — just what you need to launch your LLC right.',
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
    title: 'Start With Genie — Fast, Clear LLC Formation',
    description: 'Start your business with clarity. Step-by-step guidance, essential documents, and no upsells — just what you need to launch your LLC right.',
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* Fallback meta tags for universal preview compatibility */}
        <meta name="description" content="Start your business with clarity. Step-by-step guidance, essential documents, and no upsells — just what you need to launch your LLC right." />
        <meta property="og:title" content="Start With Genie — Fast, Clear LLC Formation" />
        <meta property="og:description" content="Start your business with clarity. Step-by-step guidance, essential documents, and no upsells — just what you need to launch your LLC right." />
        <meta property="og:image" content="https://startwithgenie.com/genie-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:url" content="https://startwithgenie.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Start With Genie — Fast, Clear LLC Formation" />
        <meta name="twitter:description" content="Start your business with clarity. Step-by-step guidance, essential documents, and no upsells — just what you need to launch your LLC right." />
        <meta name="twitter:image" content="https://startwithgenie.com/genie-og.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Start With Genie",
              "url": "https://startwithgenie.com",
              "logo": "https://startwithgenie.com/genie-og.png",
              "sameAs": [
                "https://www.facebook.com/startwithgenie"
              ]
            })
          }}
        />
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
