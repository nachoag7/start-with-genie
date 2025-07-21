"use client";

import React, { useEffect, useRef } from "react";
import SeoPageLayout from "../../components/SeoPageLayout";
import { HelpCircle, Banknote, Users, FileText, BadgeCheck, CreditCard, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/Button";

// FadeIn on scroll utility
function useFadeInOnScroll(ref: React.RefObject<HTMLElement>, delay = 0) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handle = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.style.animation = `fadeIn 0.6s ${delay}s both`;
        }
      });
    };
    const observer = new window.IntersectionObserver(handle, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, delay]);
}

export default function WhatIsEINPage() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(section1Ref);
  useFadeInOnScroll(section2Ref, 0.08);
  useFadeInOnScroll(section3Ref, 0.16);
  useFadeInOnScroll(ctaRef, 0.24);

  return (
    <SeoPageLayout>
      <main
        style={{
          minHeight: "100vh",
          background: "#fafbfc",
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        {/* H1 Header Section */}
        <section className="section" style={{ padding: "4.5rem 0 2.5rem 0" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1.5rem" }}>
            <h1
              className="fadeUp"
              style={{
                fontSize: 32,
                fontWeight: 600,
                textAlign: "center",
                letterSpacing: "-0.01em",
              }}
            >
              What Is an EIN and Why Does Your LLC Need One?
            </h1>
            <p
              className="fadeUp fadeUp-delay-1"
              style={{
                textAlign: "center",
                color: "#666",
                marginTop: "1rem",
                fontSize: 16,
                fontWeight: 400,
                maxWidth: 540,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Simple breakdown of what an EIN is, why it matters, and how to get one—fast.
            </p>
          </div>
        </section>

        {/* Section: What Is an EIN? */}
        <section className="section fadeUp fadeUp-delay-1" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2>What Is an EIN?</h2>
          <p>
            An EIN (Employer Identification Number) is a 9-digit number issued by the IRS to identify your business for tax purposes—like a Social Security Number for your company.
          </p>
        </section>
        <div className="section-gap" />
        {/* Section: Do You Need an EIN for Your LLC? */}
        <section className="section fadeUp fadeUp-delay-2" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2>Do You Need an EIN for Your LLC?</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Banknote size={18} style={{ color: '#999' }} /> Open a business bank account
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Users size={18} style={{ color: '#999' }} /> Hire employees
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <FileText size={18} style={{ color: '#999' }} /> File federal or state taxes
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <BadgeCheck size={18} style={{ color: '#999' }} /> Apply for licenses or permits
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CreditCard size={18} style={{ color: '#999' }} /> Build business credit
            </li>
          </ul>
        </section>
        <div className="section-gap" />
        {/* Section: How to Get an EIN */}
        <section className="section fadeUp fadeUp-delay-3" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2>How to Get an EIN</h2>
          <p>
            You can apply for an EIN for free on the IRS website—but if you’ve never done it before, it can be confusing. That’s why many first-time founders use a guided assistant.
          </p>
        </section>

        {/* CTA Section */}
        <div className="cta-section fadeUp fadeUp-delay-5">
          <h2 className="fadeUp" style={{ fontSize: 20, fontWeight: 500, marginBottom: "1rem" }}>Want to launch your LLC the easy way?</h2>
          <p className="fadeUp fadeUp-delay-1">
            Start With Genie gives you clear LLC instructions, an EIN walkthrough, operating agreement, and a launch checklist—no fluff.
          </p>
          <Link href="/">
            <Button size="lg" className="text-lg bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none flex items-center justify-center gap-2 px-6 py-3">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </main>
    </SeoPageLayout>
  );
}