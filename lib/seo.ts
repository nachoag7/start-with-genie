// lib/seo.ts
export const site = {
  name: "Start With Genie",
  url: "https://startwithgenie.com",
  ogImage: "https://startwithgenie.com/og/cover.jpg", // ensure this exists
  titleTemplate: "%s · Start With Genie"
};

export const defaultMeta = {
  title: "The New Way to Start Your Business",
  description:
    "Launch your LLC with Genie — a $49 dashboard that gives you step-by-step state filing, an EIN guide, and a ready-to-use operating agreement. No upsells.",
};

export const defaultSeo = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 628,
        alt: "Start With Genie – Business launch dashboard"
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@startwithgenie",
    creator: "@startwithgenie",
    title: defaultMeta.title,
    description: defaultMeta.description,
    image: site.ogImage
  }
}; 