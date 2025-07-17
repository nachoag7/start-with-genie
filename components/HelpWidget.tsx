import React, { useState } from 'react';
import ContactSupportModal from './ContactSupportModal';
import { Mail } from 'lucide-react';
import { Button } from './ui/Button';

export default function HelpWidget() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Minimized Floating Button */}
      {!open && (
        <button
          className="bg-white shadow-lg rounded-full px-6 py-3 text-base font-semibold text-primary-700 flex items-center gap-2 border border-gray-200 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-primary-300"
          style={{ minWidth: 120 }}
          onClick={() => setOpen(true)}
          aria-label="Open Help"
        >
          <Mail className="w-5 h-5 text-primary-600" />
          Need Help?
        </button>
      )}
      {/* Expanded Help Widget (only support card) */}
      {open && (
        <div
          className="bg-white shadow-2xl rounded-2xl p-0 w-[350px] max-w-[95vw] flex flex-col border border-gray-200 animate-fade-in"
          style={{ minHeight: 220 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Mail className="h-7 w-7 text-primary-600" />
              <span className="font-bold text-gray-900 text-lg">Contact Support</span>
            </div>
            <button
              className="text-gray-400 hover:text-gray-600 text-xl font-bold px-2 py-1 rounded-full focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Close Help"
            >
              ×
            </button>
          </div>
          {/* Support Card Only */}
          <div className="px-5 py-6 flex flex-col gap-2">
            <p className="text-sm text-gray-500 font-light mb-2">Need more help? Reach out to our support team.</p>
            <Button
              variant="outline"
              className="rounded-full px-6 py-2 font-semibold"
              onClick={() => setModalOpen(true)}
            >
              Contact Support
            </Button>
          </div>
        </div>
      )}
      {/* Contact Support Modal */}
      <ContactSupportModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <style jsx>{`
        @media (max-width: 640px) {
          div[role='dialog'], .fixed.z-50 {
            right: 0 !important;
            left: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            max-width: 100vw !important;
            border-radius: 1.25rem 1.25rem 0 0 !important;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.18s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
} 