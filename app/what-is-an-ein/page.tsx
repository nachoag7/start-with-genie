import React from "react";
import SeoPageLayout from "../../components/SeoPageLayout";
import { HelpCircle, Banknote, Users, FileText, BadgeCheck, CreditCard, ArrowRight, Shield, AlertTriangle, CheckCircle, Clock, DollarSign, Building, User, Lock, Unlock } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'What is an EIN? Employer Identification Number Guide 2025',
  description: 'What is an EIN? Get expert guidance on Employer Identification Numbers, why your LLC needs one, and how to apply for free. Start your LLC for $49.',
  openGraph: {
    title: 'What is an EIN? Employer Identification Number Guide 2025',
    description: 'What is an EIN? Get expert guidance on Employer Identification Numbers, why your LLC needs one, and how to apply for free.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is an EIN? Employer Identification Number Guide 2025',
    description: 'What is an EIN? Get expert guidance on Employer Identification Numbers, why your LLC needs one, and how to apply for free.',
  },
}

export default function WhatIsEINPage() {
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
        <section className="section" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2>What Is an EIN?</h2>
          <p>
            An EIN (Employer Identification Number) is a 9-digit number issued by the IRS to identify your business for tax purposes—like a Social Security Number for your company. Think of it as your business's unique fingerprint in the eyes of the government.
          </p>
          <p>
            Every business entity, including LLCs, corporations, partnerships, and sole proprietorships, can obtain an EIN. It's completely free to apply for and serves as your business's primary identifier for all tax-related activities.
          </p>
          <p>
            The EIN format is XX-XXXXXXX, where X represents numbers. For example: 12-3456789. This number stays with your business for its entire lifetime and is used for everything from opening bank accounts to filing tax returns.
          </p>
        </section>
        <div className="section-gap" />

        {/* Section: Do You Need an EIN for Your LLC? */}
        <section className="section" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2>Do You Need an EIN for Your LLC?</h2>
          <p>
            While not every LLC is legally required to have an EIN, there are several situations where you'll definitely need one. Here are the most common scenarios:
          </p>
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
          <p>
            Even if you're a single-member LLC with no employees, getting an EIN is still highly recommended. It helps separate your business identity from your personal identity, which is crucial for maintaining the liability protection that makes LLCs so valuable.
          </p>
        </section>
        <div className="section-gap" />

        {/* Section: Benefits of Having an EIN */}
        <section className="section" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2>Benefits of Having an EIN</h2>
          <p>
            Beyond the legal requirements, having an EIN offers several important advantages for your business:
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Shield size={18} style={{ color: '#999' }} />
            <span><strong>Privacy Protection:</strong> Using an EIN instead of your SSN keeps your personal information private</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Building size={18} style={{ color: '#999' }} />
            <span><strong>Professional Credibility:</strong> Banks, vendors, and customers view businesses with EINs as more established</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <CreditCard size={18} style={{ color: '#999' }} />
            <span><strong>Business Credit Building:</strong> Essential for establishing business credit separate from personal credit</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <User size={18} style={{ color: '#999' }} />
            <span><strong>Employee Hiring:</strong> Required for payroll taxes and employment verification</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <DollarSign size={18} style={{ color: '#999' }} />
            <span><strong>Tax Advantages:</strong> Simplifies tax filing and can provide additional deduction opportunities</span>
          </div>
        </section>
        <div className="section-gap" />

        {/* Section: How to Get an EIN */}
        <section className="section" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2>How to Get an EIN</h2>
          <p>
            You can apply for an EIN for free on the IRS website—but if you've never done it before, it can be confusing. That's why many first-time founders use a guided assistant.
          </p>
          <h3>Step-by-Step Process:</h3>
          <ol style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Prepare Your Information:</strong> You'll need your business name, address, and responsible party information
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Choose Your Application Method:</strong> Online (fastest), fax, or mail
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Complete the Application:</strong> Form SS-4 with all required details
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Submit and Receive:</strong> Online applications get immediate approval
            </li>
            <li>
              <strong>Save Your EIN:</strong> Store it securely - you'll use it for all business activities
            </li>
          </ol>
          <p>
            The online application typically takes 5-10 minutes and provides immediate results. Fax applications take 4-5 business days, while mail applications can take 4-6 weeks.
          </p>
        </section>
        <div className="section-gap" />

        {/* Section: Common Mistakes to Avoid */}
        <section className="section" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2>Common Mistakes to Avoid</h2>
          <p>
            When applying for an EIN, avoid these common pitfalls that can delay or complicate your application:
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <AlertTriangle size={18} style={{ color: '#ff6b6b' }} />
            <span><strong>Incorrect Business Information:</strong> Ensure your business name and address match your LLC filing exactly</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <AlertTriangle size={18} style={{ color: '#ff6b6b' }} />
            <span><strong>Wrong Responsible Party:</strong> The responsible party must be a real person, not another business entity</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <AlertTriangle size={18} style={{ color: '#ff6b6b' }} />
            <span><strong>Multiple Applications:</strong> Don't apply multiple times - one EIN per business entity</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <AlertTriangle size={18} style={{ color: '#ff6b6b' }} />
            <span><strong>Not Saving the EIN:</strong> Print or save your EIN immediately - the IRS won't resend it</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <AlertTriangle size={18} style={{ color: '#ff6b6b' }} />
            <span><strong>Using Personal SSN:</strong> Always use your EIN for business activities, never your personal SSN</span>
          </div>
        </section>
        <div className="section-gap" />

        {/* CTA Section */}
        <div className="cta-section">
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