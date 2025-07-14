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
    description: 'Launch your business with a simple step-by-step assistant. LLC setup, EIN guide, and docs included. $49 flat.',
    url: 'https://startwithgenie.com',
    siteName: 'Start With Genie',
    images: [
      {
        url: '/genie-og.png',
        width: 1200,
        height: 628,
        alt: 'Start With Genie Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start With Genie',
    description: 'Simple, clear LLC setup for $49. No upsells, just guidance.',
    images: ['/genie-og.png'],
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
} 