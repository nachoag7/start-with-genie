"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import DocumentsSection from "./DocumentsSection";
import GenieChat from "./GenieChat";
import UnlockModal from "./UnlockModal";
import { useModal } from "./ModalContext";
import { DocumentContent } from "./DocumentContent";


// Sample user data for James White in North Dakota
const sampleUser = {
  id: "sample-user-id",
  firstName: "James",
  businessName: "Prairie Tech Solutions LLC",
  state: "North Dakota",
  email: "james.white@example.com",
  fullName: "James White",
  businessAddress: "123 Main Street, Fargo, ND 58102",
  full_name: "James White",
  business_name: "Prairie Tech Solutions LLC",
  business_address: "123 Main Street, Fargo, ND 58102",
  status: "active",
  is_solo_owner: "yes"
};

// Sample documents data with pre-generated PDFs
const sampleDocs = [
  {
    id: "llc-instructions",
            title: "Guided LLC Registration",
    description: "Personalized plan to form your LLC",
    viewHref: "#",
    pdfHref: "/sample-pdfs/LLC-Filing-Instructions-Prairie-Tech-Solutions-LLC.pdf"
  },
  {
    id: "ein-guide", 
            title: "Guided EIN Application",
    description: "Get your Tax ID fast",
    viewHref: "#",
    pdfHref: "/sample-pdfs/EIN-Guide-Prairie-Tech-Solutions-LLC.pdf"
  },
  {
    id: "operating-agreement",
    title: "Operating Agreement", 
    description: "Personalized template included",
    viewHref: "#",
    pdfHref: "/sample-pdfs/Operating-Agreement-Prairie-Tech-Solutions-LLC.pdf"
  }
];

// Document content is now handled by the DocumentContent component

// All document content is now handled by the DocumentContent component

export default function CompactDashboardCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [unlockModalOpen, setUnlockModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<any>(null);
  
  // Use modal context to hide navbar when modals are open
  const { setModalOpen } = useModal();


  const handleViewDoc = (doc: any) => {
    let content;
    
    if (doc.id === "llc-instructions") {
      content = <DocumentContent type="llc-instructions" user={sampleUser} />;
    } else if (doc.id === "ein-guide") {
      content = <DocumentContent type="ein-guide" user={sampleUser} />;
    } else if (doc.id === "operating-agreement") {
      content = <DocumentContent type="operating-agreement" user={sampleUser} />;
    }

    setModalContent({ 
      title: doc.title, 
      content: content || <div>Content not available</div>
    });
    setIsModalOpen(true);
    setModalOpen(true);
  };

  const handleDownloadDoc = (doc: any) => {
    setSelectedDoc(doc);
    setUnlockModalOpen(true);
    setModalOpen(true);
  };

  return (
    <div className="relative w-full max-w-4xl">

      
      <div className="p-8 sm:p-10 lg:p-12">
        
        {/* Dashboard Title */}
        <section className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Everything You Need, In One Dashboard
          </h2>
        </section>
        


        {/* Documents Section */}
        <section className="mb-10">
          <DocumentsSection 
            docs={sampleDocs}
            onView={handleViewDoc}
            onDownload={handleDownloadDoc}
            compact={true}
          />
        </section>

        {/* Genie Chat */}
        <section className="mb-10">
          <GenieChat 
            avatarSrc="/genie-preview.png" 
            userName={sampleUser.fullName}
            userState={sampleUser.state}
            maxMessages={1}
            compact={true}
          />
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-base sm:text-lg font-semibold text-neutral-900 mb-3">
            Ready to Start Your LLC With Confidence?
          </h2>
          <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
            Unlock your personalized dashboard
          </p>
          
          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-8 py-4 text-base font-medium text-white hover:bg-[#2f6fe0] transition-all duration-200 hover:scale-105 shadow-[0_6px_18px_rgba(59,130,246,0.35)]"
          >
            Get Instant Access for $49
          </Link>
        </section>

        {/* Genie Policy Card */}
        <section className="text-center mt-6">
          <div 
            style={{
              maxWidth: '400px',
              margin: '0 auto',
              padding: '16px',
              textAlign: 'center',
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          >
            <p style={{
              fontWeight: '600',
              fontSize: '14px',
              margin: '0'
            }}>
              Covered by <Link href="/refund" className="text-blue-600 hover:text-blue-800 underline">The Genie Policy</Link>
            </p>
            <p style={{
              fontSize: '12px',
              color: '#4b5563',
              marginTop: '4px',
              marginBottom: '0'
            }}>
              If our kit doesn't save you time and money, get a full refund. It's that simple.
            </p>
          </div>
        </section>
      </div>

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
            onClick={() => {
              setIsModalOpen(false);
              setModalOpen(false);
            }}
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
                onClick={() => {
                  setIsModalOpen(false);
                  setModalOpen(false);
                }}
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
                This document is for informational and educational purposes only. It is not legal, tax, or financial advice. Genie LLC is not a law firm and does not provide legal services. You should consult a qualified attorney, accountant, or advisor to ensure this document is appropriate for your specific situation.
                <div style={{ marginTop: 6, fontSize: 11, color: '#aaa' }}>Generated by Genie LLC</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unlock Modal for Downloads */}
      <UnlockModal 
        open={unlockModalOpen} 
        onClose={() => {
          setUnlockModalOpen(false);
          setModalOpen(false);
        }} 
        docTitle={selectedDoc?.title || "Document"}
      />
    </div>
  );
} 