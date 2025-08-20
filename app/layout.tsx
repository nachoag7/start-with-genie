import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClarityAnalytics from '../components/ClarityAnalytics';
import GoogleAnalytics from '../components/GoogleAnalytics';
import ConditionalNavbar from '../components/ConditionalNavbar';
import { ModalProvider } from '../components/ModalContext';
import { site, defaultMeta } from '../lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultMeta.title,
    template: site.titleTemplate,
  },
  description: defaultMeta.description,
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: '/favicon.ico?v=2',
  },
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
  other: {
    'application/ld+json': JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": site.name,
        "url": site.url,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${site.url}/search?q={query}`,
          "query-input": "required name=query"
        },
        "description": defaultMeta.description
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Genie LLC",
        "url": site.url,
        "logo": `${site.url}/brandmark-design.png`,
        "description": "Professional LLC formation service helping entrepreneurs start their businesses with expert guidance for just $49",
        "sameAs": [
          "https://startwithgenie.com"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": `${site.url}/contact`
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        }
      },
      {
        "@context": "https://schema.org",
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
    ])
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