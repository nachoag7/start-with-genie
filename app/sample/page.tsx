"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import DocumentsSection from "../../components/DocumentsSection";
import GenieChat from "../../components/GenieChat";
import UnlockModal from "../../components/UnlockModal";
import PreviewNoticeModal from "../../components/PreviewNoticeModal";
import PremiumButton from "../../components/ui/PremiumButton";
// Using pre-generated sample PDFs instead of dynamic generation



// Sample user data for James White in North Dakota
const sampleUser = {
  firstName: "James",
  businessName: "Prairie Tech Solutions LLC",
  state: "North Dakota",
  email: "james.white@example.com",
  fullName: "James White",
  businessAddress: "123 Main Street, Fargo, ND 58102"
};

// Sample documents data with pre-generated PDFs
const sampleDocs = [
  {
    id: "llc-instructions",
    title: "LLC Filing Instructions",
    description: "Your step by step, state specific filing plan crafted just for your North Dakota business.",
    viewHref: "#",
    pdfHref: "/sample-pdfs/LLC-Filing-Instructions-Prairie-Tech-Solutions-LLC.pdf"
  },
  {
    id: "ein-guide", 
    title: "EIN Guide",
    description: "Your personalized walkthrough to get your federal tax ID fast without confusion.",
    viewHref: "#",
    pdfHref: "/sample-pdfs/EIN-Guide-Prairie-Tech-Solutions-LLC.pdf"
  },
  {
    id: "operating-agreement",
    title: "Operating Agreement", 
    description: "A customizable legal framework designed to match your LLC's unique structure.",
    viewHref: "#",
    pdfHref: "/sample-pdfs/Operating-Agreement-Prairie-Tech-Solutions-LLC.pdf"
  }
];



// Sample content renderers (matching real dashboard format)
const renderSampleLLCContent = () => {
  return (
    <div className="space-y-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2 className="text-2xl font-bold text-gray-900" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
        LLC Filing Instructions for {sampleUser.businessName}
      </h2>
      <div className="text-gray-700" style={{ fontSize: '16px', color: '#374151', marginBottom: '8px' }}>
        Prepared for {sampleUser.fullName} | Forming in {sampleUser.state}
      </div>
      <div className="text-gray-500 text-sm mb-2" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
        Start With Genie – Your personal LLC assistant
      </div>
      <div className="text-gray-500 text-sm mb-4" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        1. Why This Step Matters
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        Filing your Articles of Organization is what officially creates your LLC with the state. Once approved, your business becomes legally recognized and ready to operate.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        2. What You'll Need
      </h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>Business name: {sampleUser.businessName} (your official name must include "LLC," "L.L.C.," or "Limited Liability Company")</li>
        <li style={{ marginBottom: '4px' }}>Owner name(s): {sampleUser.fullName}</li>
        <li style={{ marginBottom: '4px' }}>Business address</li>
        <li style={{ marginBottom: '4px' }}><strong>Address Tip:</strong> You can usually use your home address, but it must be a physical location — no PO Boxes. If you want privacy, a virtual office address may be an option.</li>
        <li style={{ marginBottom: '4px' }}>Registered Agent (you or someone else in {sampleUser.state})</li>
        <li style={{ marginBottom: '4px' }}><strong>What's a Registered Agent?</strong> This is the person or business responsible for receiving legal documents on behalf of your LLC. You can be your own agent if you're a {sampleUser.state} resident with a physical address.</li>
        <li style={{ marginBottom: '4px' }}>Management structure: Member-managed</li>
        <li style={{ marginBottom: '4px' }}>Filing website login (some states require creating an account)</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        3. Filing Details for {sampleUser.state}
      </h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>Filing Fee: $135</li>
        <li style={{ marginBottom: '4px' }}>Processing Time: 1-2 business days</li>
        <li style={{ marginBottom: '4px' }}>Where to File: <span style={{ color: '#2563eb', textDecoration: 'underline' }}>https://sos.nd.gov</span></li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: 600, marginTop: 24, marginBottom: 12, color: '#1f2937' }}>
        4. Step-by-Step Instructions
      </h3>
      <ol className="list-decimal ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '28px', lineHeight: 1.7, textAlign: 'left', maxWidth: '100%', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
        <li style={{ marginBottom: '10px' }}>Go to the link above and create an account (if required)</li>
        <li style={{ marginBottom: '10px' }}>Select "Form a New LLC" or "Articles of Organization"</li>
        <li style={{ marginBottom: '10px' }}>Enter your business and owner information:
          <ul className="list-disc ml-6 mt-2" style={{ paddingLeft: '20px' }}>
            <li>For <strong>Business Name</strong>, enter "{sampleUser.businessName}"</li>
            <li>Under <strong>Principal Office Address</strong>, use your business address</li>
            <li>For <strong>Organizers</strong>, list your name and title (e.g., "{sampleUser.fullName}, Member")</li>
            <li>For <strong>Management Type</strong>, choose "Member-managed"</li>
          </ul>
        </li>
        <li style={{ marginBottom: '10px' }}>Add your Registered Agent information</li>
        <li style={{ marginBottom: '10px' }}>Pay the filing fee online</li>
        <li style={{ marginBottom: '10px' }}>Submit the application and wait for approval</li>
      </ol>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        5. After You File
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        Once approved, you'll receive a confirmation document or certificate from the state. Save this — you'll need it for your EIN, bank account, and taxes.<br/>
        Next step: Apply for your EIN and sign your Operating Agreement.
      </p>
    </div>
  );
};

const renderSampleEINContent = () => {
  return (
    <div className="space-y-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2 className="text-2xl font-bold text-gray-900" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
        EIN Instructions for {sampleUser.businessName}
      </h2>
      <div className="text-gray-700" style={{ fontSize: '16px', color: '#374151', marginBottom: '8px' }}>
        Prepared for {sampleUser.fullName} | Formed in {sampleUser.state}
      </div>
      <div className="text-gray-500 text-sm mb-2" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
        Start With Genie – Your personal LLC assistant
      </div>
      <div className="text-gray-500 text-sm mb-4" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        1. What Is an EIN?
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        An EIN (Employer Identification Number) is a unique ID issued by the IRS. Think of it as your business's Social Security Number — it's required to:<br/>
        - Open a business bank account<br/>
        - File taxes<br/>
        - Hire employees<br/>
        - Apply for business credit<br/>
        Even if you're the only owner, most banks and services will ask for your EIN.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        2. Do You Need One?
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        Most LLCs do need an EIN. Even if you're a single-member LLC with no employees, you'll likely need it for banking, taxes, or applying for licenses.<br/>
        Good news: getting an EIN is completely free and only takes a few minutes.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        3. How to Apply Online (Recommended)
      </h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>The IRS provides a free online application for EINs.</li>
        <li style={{ marginBottom: '4px' }}>Where to apply: <span style={{ color: '#2563eb', textDecoration: 'underline' }}>https://irs.gov/ein</span></li>
        <li style={{ marginBottom: '4px' }}>When: Monday through Friday, 7:00 AM – 10:00 PM EST</li>
        <li style={{ marginBottom: '4px' }}>What you'll need: your name ({sampleUser.fullName}), your business name ({sampleUser.businessName}), business address, business structure: LLC, whether you are the owner</li>
        <li style={{ marginBottom: '4px' }}>The application takes about 10 minutes. You'll receive your EIN immediately after submission.</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        4. After You Apply
      </h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>Save the confirmation letter (CP 575) — this is your proof of EIN</li>
        <li style={{ marginBottom: '4px' }}>You'll need it to open a business bank account, file taxes, and set up payroll</li>
        <li style={{ marginBottom: '4px' }}>Come back to your Genie Dashboard to download your Operating Agreement</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        5. Alternate Filing (Mail or Fax)
      </h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>If you don't have a Social Security Number or can't use the online form: download Form SS-4, fill it out and send it by mail or fax to the IRS</li>
        <li style={{ marginBottom: '4px' }}>This method takes longer, but works for non-U.S. residents and others with special cases.</li>
      </ul>
    </div>
  );
};

const renderSampleOAContent = () => {
  return (
    <div className="space-y-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', position: 'relative' }}>
      <h2 className="text-2xl font-bold text-gray-900" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
        Operating Agreement for {sampleUser.businessName}
      </h2>
      <div className="text-gray-700" style={{ fontSize: '16px', marginBottom: '16px' }}>
        <strong>Company Overview</strong><br />
        <b>Business Name:</b> {sampleUser.businessName}<br />
        <b>Principal Address:</b> {sampleUser.businessAddress}<br />
        <b>State:</b> {sampleUser.state}
      </div>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        1. Introduction
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        This Operating Agreement ("Agreement") is made effective as of the date above by and among the Member of {sampleUser.businessName}, a limited liability company formed under the laws of the State of {sampleUser.state}.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        2. Company Overview
      </h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>Business Name: {sampleUser.businessName}</li>
        <li style={{ marginBottom: '4px' }}>State of Formation: {sampleUser.state}</li>
        <li style={{ marginBottom: '4px' }}>Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</li>
        <li style={{ marginBottom: '4px' }}>Entity Type: Single-Member LLC</li>
        <li style={{ marginBottom: '4px' }}>Managed By: Member-managed</li>
        <li style={{ marginBottom: '4px' }}>Principal Address: {sampleUser.businessAddress}</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        3. Purpose of the LLC
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        The purpose of the LLC is to engage in any lawful business activity permitted under the laws of {sampleUser.state}. The Member may modify the purpose as needed.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        4. Ownership
      </h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>Member: {sampleUser.fullName}</li>
        <li style={{ marginBottom: '4px' }}>This is a Single-Member LLC, owned and operated by {sampleUser.fullName}.</li>
        <li style={{ marginBottom: '4px' }}>Each Member owns an equal share of the LLC unless otherwise agreed in writing.</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        5. Capital Contributions
      </h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>Initial contributions from Member: [Not specified]</li>
        <li style={{ marginBottom: '4px' }}>No additional contributions are required unless agreed in writing by all Members.</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        6. Profit and Loss Allocation
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        All profits and losses will be distributed in proportion to ownership, unless otherwise agreed upon in writing. Distributions will be made at the discretion of the Member.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        7. Management and Voting
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        The LLC is Member-managed. Major decisions (such as admitting new members or dissolving the LLC) require approval by all Members.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        8. Liability Protection
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        Members are not personally liable for the debts or obligations of the LLC. The LLC will indemnify Members to the extent permitted by law.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        9. Ownership Changes
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        No Member may transfer ownership without written consent from the other Members, unless required by law.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        10. Dissolution
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        The LLC may be dissolved upon:<br/>
        - A majority vote by Members<br/>
        - Completion of its business purpose<br/>
        - Only one Member remaining (if multi-member)<br/>
        Upon dissolution, assets will be distributed in this order:<br/>
        1. Creditors<br/>
        2. Taxes<br/>
        3. Members based on ownership
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>
        11. Governing Law
      </h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
        This Agreement is governed by the laws of the State of {sampleUser.state}.
      </p>
    </div>
  );
};

export default function SampleDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [unlockModalOpen, setUnlockModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<any>(null);
  const [showPreviewNotice, setShowPreviewNotice] = useState(false);

  // Check if user has seen the preview notice
  useEffect(() => {
    const hasSeenNotice = localStorage.getItem('seenSampleNotice');
    if (!hasSeenNotice) {
      setShowPreviewNotice(true);
    }
  }, []);

  const handleClosePreviewNotice = () => {
    setShowPreviewNotice(false);
    localStorage.setItem('seenSampleNotice', 'true');
  };

  const handleViewDoc = (doc: any) => {
    let content;
    
    if (doc.id === "llc-instructions") {
      content = renderSampleLLCContent();
    } else if (doc.id === "ein-guide") {
      content = renderSampleEINContent();
    } else if (doc.id === "operating-agreement") {
      content = renderSampleOAContent();
    }

    setModalContent({ 
      title: doc.title, 
      content: content || <div>Content not available</div>
    });
    setIsModalOpen(true);
  };

  const handleDownloadDoc = (doc: any) => {
    setSelectedDoc(doc);
    setUnlockModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Preview Notice Modal */}
      <PreviewNoticeModal 
        open={showPreviewNotice} 
        onClose={handleClosePreviewNotice} 
      />
      
      <main className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
        <aside
          role="note"
          className="mb-4 text-[13px] text-gray-600"
        >
          This is a preview. Your dashboard will be tailored to your business, state, and goals.
        </aside>
        {/* Welcome Header */}
        <section className="fade-in-up">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Welcome back!
              </h2>
              <p className="text-sm text-gray-600">
                Everything you need to launch your business is right here.
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date().toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  hour: 'numeric', 
                  minute: '2-digit',
                  hour12: true 
                }).replace(',', ' at')}
              </p>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="mt-12">
          <DocumentsSection 
            docs={sampleDocs}
            onView={handleViewDoc}
            onDownload={handleDownloadDoc}
          />
        </section>

        {/* Genie Chat */}
        <section className="mt-12 sm:mt-14">
          <GenieChat 
            avatarSrc="/genie-preview.png" 
            userName={sampleUser.fullName}
            userState={sampleUser.state}
            maxMessages={1}
          />
        </section>

        {/* CTA Section */}
        <section className="mt-16 -mx-6 px-6 py-12 bg-gray-100/50">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Ready to Launch Your Business With Confidence?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Unlock your personalized LLC launch kit now and get everything you need to file with clarity — for just $49.
            </p>
            <Link
              href="/onboarding"
              className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-8 py-3 text-base font-medium text-white hover:bg-[#2f6fe0] transition-all duration-200 hover:scale-105 shadow-[0_6px_18px_rgba(59,130,246,0.35)]"
            >
              Get My Full Kit
            </Link>
            <p className="mt-4 text-sm text-neutral-500">
              One-time payment. Instant access.
            </p>
          </div>
        </section>

        {/* Document Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              key="doc-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
              style={{ backdropFilter: 'blur(2px)' }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 lg:p-8"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)', maxWidth: '600px', lineHeight: 1.6, display: 'flex', flexDirection: 'column' }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors text-xl font-bold"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <span aria-hidden="true">×</span>
                </button>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 pr-8" style={{ fontWeight: 700, color: '#1f2937' }}>
                  {modalContent.title}
                </h2>
                <div style={{ maxWidth: 600, margin: '0 auto', lineHeight: 1.6, flex: 1, position: 'relative' }}>
                  <div style={{ filter: 'blur(2px)', opacity: 0.7, userSelect: 'none', pointerEvents: 'none' }}>
                    {modalContent.content}
                  </div>
                  {/* SAMPLE watermark */}
                  <div className="pointer-events-none absolute inset-0 grid place-items-center">
                    <span className="select-none text-4xl sm:text-6xl font-semibold tracking-wide text-neutral-900/20">
                      SAMPLE
                    </span>
                  </div>
                </div>
                {/* Disclaimer */}
                <div style={{ marginTop: 40, fontSize: 12, color: '#888', lineHeight: 1.6, textAlign: 'center', fontFamily: '-apple-system, Arial, sans-serif' }}>
                  This document is for informational and educational purposes only. It is not legal, tax, or financial advice. Start With Genie is not a law firm and does not provide legal services. You should consult a qualified attorney, accountant, or advisor to ensure this document is appropriate for your specific situation.
                  <div style={{ marginTop: 6, fontSize: 11, color: '#aaa' }}>Generated by Start With Genie</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unlock Modal for Downloads */}
        <UnlockModal 
          open={unlockModalOpen} 
          onClose={() => setUnlockModalOpen(false)} 
          docTitle={selectedDoc?.title || "Document"}
        />
      </main>
    </div>
  );
}