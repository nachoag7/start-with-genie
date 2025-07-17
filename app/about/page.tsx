'use client'

import React from 'react'
import Footer from '../../components/Footer'
import Image from 'next/image'
import { CheckCircle, User, PackageOpen } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <main className="about-premium-root">
        <div className="about-premium-2col">
          {/* Left Column: Brand + Visual Identity */}
          <div className="about-premium-left fadeUp-on-scroll">
            <div className="about-premium-title-row element delay-1">
              <Image src="/genie-preview.png" alt="Genie icon" height={32} width={32} style={{ marginRight: 14, verticalAlign: 'middle' }} />
              <h1 className="about-premium-title">
                About Start With Genie
                <span className="about-premium-title-underline" />
              </h1>
            </div>
            <ul className="about-premium-list">
              <li className="about-premium-listitem element delay-3">
                <span className="about-premium-listicon"><CheckCircle size={20} /></span>
                <span>Clear, no-fluff guidance</span>
              </li>
              <li className="about-premium-listitem element delay-4">
                <span className="about-premium-listicon"><User size={20} /></span>
                <span>Built for first-time founders</span>
              </li>
              <li className="about-premium-listitem element delay-5">
                <span className="about-premium-listicon"><PackageOpen size={20} /></span>
                <span>Designed like a real product</span>
              </li>
            </ul>
          </div>
          {/* Right Column: Mission + Backstory */}
          <div className="about-premium-right fadeUp-on-scroll">
            <p className="about-premium-p element delay-2">
              Start With Genie is a modern assistant that helps you start your LLC with confidence—without the noise, upsells, or confusion.
            </p>
            <p className="about-premium-p element delay-3" style={{ marginTop: '1.5rem' }}>
              We built this for founders who value clarity. Instead of bloated filing services, Genie gives you just the tools and documents you actually need—delivered with the polish of a modern product.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 
 
 
 