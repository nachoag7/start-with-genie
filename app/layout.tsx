import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Start With Genie',
  description: 'Smart, simple LLC setup — guided every step of the way.',
  icons: {
    icon: '/ChatGPT Image Jul 14, 2025, 03_27_13 PM.png',
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
          <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3 gap-3">
            <div className="flex items-center gap-3">
              <img src="/ChatGPT Image Jul 14, 2025, 03_27_13 PM.png" alt="Genie Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
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
  )
} 