import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start an LLC – Step-by-Step Guide',
  description: 'Learn how to start an LLC the clean way. A simple, no-fluff guide that walks you through it step by step.',
  openGraph: {
    title: 'How to Start an LLC – Step-by-Step Guide',
    description: 'Learn how to start an LLC the clean way. A simple, no-fluff guide that walks you through it step by step.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start an LLC – Step-by-Step Guide',
    description: 'Learn how to start an LLC the clean way. A simple, no-fluff guide that walks you through it step by step.',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
 
 
 
 