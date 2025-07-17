import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-100 py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-3">
          <p className="text-sm text-neutral-500">
            <a 
              href="mailto:info@startwithgenie.com" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              info@startwithgenie.com
            </a>
          </p>
          <nav className="flex justify-center items-center gap-4 text-sm text-neutral-500">
            <Link href="/" className="hover:text-neutral-900 transition-colors duration-200">
              Home
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/about" className="hover:text-neutral-900 transition-colors duration-200">
              About
            </Link>
          </nav>
          <p className="text-xs text-neutral-400">
            © 2025 Start With Genie
          </p>
        </div>
      </div>
    </footer>
  )
} 
 
 
 
 