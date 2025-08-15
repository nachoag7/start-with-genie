"use client";

import Modal from "./Modal";

export default function UnlockModal({
  open,
  onClose,
  docTitle,
}: {
  open: boolean;
  onClose: () => void;
  docTitle: string;
}) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="unlock-title">
      <div className="p-6">
        <h3 id="unlock-title" className="text-lg font-semibold text-neutral-900">
          Unlock Your Personalized Kit
        </h3>
        <p className="mt-2 text-[15px] leading-7 text-neutral-600">
          Get instant access to your own personalized documents. One flat price.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-neutral-500">Everything you need to launch — for <span className="font-medium text-neutral-900">$49</span>.</div>
          <div className="flex gap-2">
            <a
              href="/start"
              className="rounded-lg bg-[#3b82f6] px-3 py-2 text-sm font-medium text-white hover:bg-[#2f6fe0] shadow-[0_6px_18px_rgba(59,130,246,0.35)]"
            >
              Get My Dashboard
            </a>
            <button
              onClick={onClose}
              className="rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-sm text-neutral-900 hover:bg-white"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
} 