"use client";

import { useEffect } from "react";

export default function OnboardingStartModal({
  open,
  onBegin,
  onClose,
}: {
  open: boolean;
  onBegin: () => void;   // rename from onContinue if needed
  onClose?: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!open}
        onClick={() => onClose?.()}
        className={[
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />
      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Welcome"
        className={[
          "fixed inset-0 z-50 grid place-items-center px-4",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          className={[
            "w-full max-w-md rounded-2xl border border-black/10 bg-white/80 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl",
            "transition duration-250 ease-[cubic-bezier(.22,.61,.36,1)]",
            open ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]",
          ].join(" ")}
        >
          <div className="p-6 sm:p-8 text-center">
            {/* Minimal brand check (no icon library) */}
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              aria-hidden="true"
              className="mx-auto"
            >
              <circle cx="28" cy="28" r="26" fill="#3B82F6" opacity="0.10" />
              <path
                d="M19 29.5l6 5.5L37 22"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Linear-style copy */}
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900">
              Your LLC Launch Starts Here
            </h2>
            <p className="mt-2 text-[15px] leading-7 text-neutral-600">
              We've prepared your personalized plan. Next, we'll collect a few details so you can launch with clarity and confidence.
            </p>

            <button
              onClick={onBegin}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2f6fe0] active:scale-[0.99]"
            >
              Begin Setup
            </button>

            <p className="mt-3 text-xs text-neutral-500">
              One-time $49. No surprise fees. Instant access to your kit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 