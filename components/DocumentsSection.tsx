"use client";

import Link from "next/link";
import React from "react";

type DocItem = {
  id: string;
  title: string;
  description: string;
  // Use whichever your app already has. Cursor: map these from existing code.
  viewHref?: string;
  pdfHref?: string;
};

type Props = {
  docs: DocItem[];
  // If your current page uses callbacks, keep them:
  onView?: (doc: DocItem) => void;
  onDownload?: (doc: DocItem) => void;
};

export default function DocumentsSection({ docs, onView, onDownload }: Props) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Your Personalized Business Formation Kit</h2>
        <p className="text-sm text-gray-500">Custom built for your state, business type, and goals so every document and step is 100% relevant to you.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
        {docs.map((doc) => (
          <div
            key={doc.id}
            className="
              group flex flex-col justify-between
              rounded-2xl border border-gray-200
              bg-gradient-to-b from-white to-slate-50
              backdrop-blur-sm
              p-5 sm:p-6
              shadow-sm motion-soft
              hover:shadow-[0_12px_40px_rgba(2,6,23,0.10)]
              hover:border-blue-200
              will-change-transform hover:-translate-y-0.5
            "
          >
            <div className="min-h-[84px]">
              <h3 className="text-[15px] sm:text-base font-medium text-gray-900 tracking-[-0.01em]">
                {doc.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 leading-6">{doc.description}</p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {/* View (primary pill) */}
              {onView ? (
                <button
                  onClick={() => onView(doc)}
                  className="
                    px-3.5 py-1.5 rounded-full
                    text-white text-sm font-medium
                    bg-gradient-to-r from-blue-600 to-blue-500
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
                    hover:from-blue-700 hover:to-blue-600
                    motion-soft
                  "
                >
                  View
                </button>
              ) : doc.viewHref ? (
                <Link
                  href={doc.viewHref}
                  className="
                    px-3.5 py-1.5 rounded-full
                    text-white text-sm font-medium
                    bg-gradient-to-r from-blue-600 to-blue-500
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
                    hover:from-blue-700 hover:to-blue-600
                    motion-soft
                  "
                >
                  View
                </Link>
              ) : null}

              {/* Download (icon-only with tooltip) */}
              {(onDownload || doc.pdfHref) && (
                <>
                  {onDownload ? (
                    <button
                      onClick={() => onDownload(doc)}
                      title="Download PDF"
                      aria-label="Download PDF"
                      className="
                        w-9 h-9 rounded-full
                        border border-gray-300
                        bg-white/80 text-gray-700
                        hover:bg-white
                        shadow-sm motion-soft
                        flex items-center justify-center
                      "
                    >
                      {/* minimal arrow-down */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        <path d="M7 12l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 20h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={doc.pdfHref!}
                      title="Download PDF"
                      aria-label="Download PDF"
                      className="
                        w-9 h-9 rounded-full
                        border border-gray-300
                        bg-white/80 text-gray-700
                        hover:bg-white
                        shadow-sm motion-soft
                        flex items-center justify-center
                      "
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        <path d="M7 12l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 20h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}