import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClarityAnalytics from '../components/ClarityAnalytics';

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
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id=GTM-M8FB535K'+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M8FB535K');
              `
            }}
          />
        )}
        {/* Google Ads Global Site Tag (gtag.js) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17379321231"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'AW-17379321231');
                `
              }}
            />
          </>
        )}
        {/* Google Analytics Global Site Tag (gtag.js) for G-RVE4MFWE3J */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-RVEM4FWEJ3" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-RVEM4FWEJ3');
                `
              }}
            />
          </>
        )}
        {/* Pinterest Base Tag removed as it is now loaded via GTM */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {process.env.NODE_ENV === 'production' && (
          <div dangerouslySetInnerHTML={{
            __html: `<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8FB535K" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->`
          }} />
        )}
        {/* Removed global header/nav to prevent duplication on dashboard and other signed-in pages */}
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
        <ClarityAnalytics />
      </body>
    </html>
  );
}