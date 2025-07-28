'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Footer() {
  const pathname = usePathname()
  const isContactPage = pathname === '/contact'
  const isPrivacyPage = pathname === '/privacy'

  return (
    <footer className="w-full bg-white border-t border-neutral-100 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Support Block - Only show on non-contact and non-privacy pages */}
        {!isContactPage && !isPrivacyPage && (
          <div className="text-center mb-8">
            <a
              href="mailto:info@startwithgenie.com"
              className="text-lg font-medium text-neutral-900 hover:text-blue-600 transition-colors duration-200"
            >
              info@startwithgenie.com
            </a>
          </div>
        )}

        {/* Footer Links */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isContactPage ? 'mb-8' : 'mb-8'}`}>
          {/* PRODUCT */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-neutral-900 mb-4 text-sm uppercase tracking-wide">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
                  Compare
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-neutral-900 mb-4 text-sm uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-neutral-900 mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Copy */}
        <div className="text-center pt-8 border-t border-neutral-100">
          <p className="text-xs text-neutral-500">
            © 2025 Start With Genie. Built for founders, not corporations.
          </p>
        </div>
      </div>
    </footer>
  )
} 
 
 
 
 