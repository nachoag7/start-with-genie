import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Start With Genie — Fast, Clear LLC Formation',
  description: 'Get step-by-step help to form your LLC — including personalized state instructions, EIN setup guidance, an operating agreement, and a launch checklist. Just $49, no upsells.',
  icons: {
    icon: '/genie-preview.png',
    apple: '/genie-preview.png',
  },
  openGraph: {
    title: 'Start With Genie — Fast, Clear LLC Formation',
    description: 'Get step-by-step help to form your LLC — including personalized state instructions, EIN setup guidance, an operating agreement, and a launch checklist. Just $49, no upsells.',
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
    description: 'Get step-by-step help to form your LLC — including personalized state instructions, EIN setup guidance, an operating agreement, and a launch checklist. Just $49, no upsells.',
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
    <html lang="en">
      <head>
        <link rel="icon" href="/genie-preview.png" />
        {/* Fallback meta tags for universal preview compatibility */}
        <meta property="og:title" content="Start With Genie — Fast, Clear LLC Formation" />
        <meta property="og:description" content="Get step-by-step help to form your LLC — including personalized state instructions, EIN setup guidance, an operating agreement, and a launch checklist. Just $49, no upsells." />
        <meta property="og:image" content="https://startwithgenie.com/genie-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:url" content="https://startwithgenie.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Start With Genie — Fast, Clear LLC Formation" />
        <meta name="twitter:description" content="Get step-by-step help to form your LLC — including personalized state instructions, EIN setup guidance, an operating agreement, and a launch checklist. Just $49, no upsells." />
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
      <body className={inter.className}>
        <header className="w-full border-b border-gray-100 bg-white">
          <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3 gap-3">
            <div className="flex items-center gap-3">
              <img src="/genie-preview.png" alt="Genie Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              <span className="font-bold text-lg sm:text-2xl tracking-tight text-gray-900">Start With Genie</span>
            </div>
            <nav>
              <a href="/login" className="text-blue-700 font-semibold px-4 py-2 rounded hover:bg-blue-50 transition-colors">Log In</a>
            </nav>
          </div>
        </header>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
} 