import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Start With Genie',
  description: 'Smart, simple LLC setup — guided every step of the way.',
  icons: {
    icon: '/genie-mascot.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full border-b border-gray-100 bg-white">
          <div className="max-w-4xl mx-auto flex items-center px-4 py-3 gap-3">
            <img src="/genie-mascot.png" alt="Genie Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
            <span className="font-bold text-lg sm:text-2xl tracking-tight text-gray-900">Start With Genie</span>
            {/* ...rest of nav... */}
          </div>
        </header>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
} 