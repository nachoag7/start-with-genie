import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClarityAnalytics from '../components/ClarityAnalytics';
import GoogleAnalytics from '../components/GoogleAnalytics';
import ConditionalNavbar from '../components/ConditionalNavbar';
import { ModalProvider } from '../components/ModalContext';
import { defaultSeo } from '../lib/seo';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://startwithgenie.com'),
  title: {
    default: defaultSeo.title,
    template: '%s • Start With Genie',
  },
  description: defaultSeo.description,
  icons: {
    icon: '/favicon.ico?v=2',
  },
  openGraph: {
    ...defaultSeo.openGraph
  },
  twitter: {
    card: "summary_large_image",
    site: defaultSeo.twitter.site,
    creator: defaultSeo.twitter.creator,
    title: defaultSeo.twitter.title,
    description: defaultSeo.twitter.description,
    images: [defaultSeo.twitter.image as any]
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
      "description": defaultSeo.description
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

        {/* Google Ads */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17379321231"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  gtag('config', 'AW-17379321231');
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
        <ModalProvider>
          <ConditionalNavbar />
          {children}
        </ModalProvider>
        <GoogleAnalytics />
        <ClarityAnalytics />
      </body>
    </html>
  );
}