import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In – Start With Genie',
  description: 'Sign in to your Start With Genie dashboard to access your LLC setup, documents, and personalized guidance.',
  robots: 'noindex, nofollow'
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 