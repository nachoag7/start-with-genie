'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface SeoPageLayoutProps {
  children: React.ReactNode
}

export default function SeoPageLayout({ children }: SeoPageLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Header - Exact same structure as homepage */}
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-2 md:px-0 sticky top-0 z-10 backdrop-blur-sm bg-neutral-50/80 border-b border-neutral-100">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 rounded-lg hover:bg-[#f2f2f2] transition-all duration-200 active:scale-95">
            <img src="/genie-preview.png" alt="Genie Logo" className="h-10 w-10 rounded-full opacity-90" />
          </Link>
          <span className="text-lg font-medium text-neutral-900 tracking-tight">Start With Genie</span>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
} 