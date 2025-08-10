"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function PreviewNoticeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap and accessibility
  useEffect(() => {
    if (!open) return;
    
    const modal = modalRef.current;
    if (!modal) return;

    // Focus the modal
    modal.focus();

    // Handle Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Handle tab key for focus trap
    const handleTab = (e: KeyboardEvent) => {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleTab);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTab);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={[
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />
      
      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-notice-title"
        className={[
          "fixed inset-0 z-50 grid place-items-center px-4",
          "transition duration-200",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          ref={modalRef}
          tabIndex={-1}
          className={[
            "w-full max-w-[460px] rounded-2xl border border-black/10 bg-white/80 shadow-[0_40px_100px_rgba(0,0,0,.2)] backdrop-blur-xl p-6",
            "transition transform",
            open ? "scale-100 opacity-100" : "scale-95 opacity-0",
          ].join(" ")}
        >
          {/* Content */}
          <div className="text-center space-y-4">
            <h2 
              id="preview-notice-title" 
              className="text-xl font-semibold text-neutral-900"
            >
              This is a Preview
            </h2>
            
            <p className="text-[15px] leading-7 text-neutral-600">
              You're viewing a sample dashboard. Your own dashboard will be fully tailored to your business, state, and goals.
            </p>
            
            <p className="text-sm text-neutral-500">
              Explore the documents and Genie assistant, then start your own dashboard.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 rounded-lg bg-[#3b82f6] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#2f6fe0] transition"
            >
              Got it
            </button>
            <Link
              href="/checkout"
              className="flex-1 rounded-lg border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white transition text-center"
            >
              Get My Dashboard
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 