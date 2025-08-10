"use client";

import Modal from "./Modal";
import Image from "next/image";

export default function BlurPreviewModal({
  open,
  onClose,
  title,
  previewSrc, // png/jpg/pdf preview image
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  previewSrc: string;
}) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="preview-title">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 id="preview-title" className="text-lg font-semibold text-neutral-900">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="grid h-8 w-8 place-items-center rounded-md border border-black/10 bg-white/70 hover:bg-white"
          >
            <span className="relative block h-4 w-4">
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-neutral-900 rotate-45" />
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-neutral-900 -rotate-45" />
            </span>
          </button>
        </div>

        <div className="mt-4 relative overflow-hidden rounded-xl border border-black/10 bg-white">
          {/* blurred preview */}
          <div className="relative aspect-[11/8.5]">
            <Image
              src={previewSrc}
              alt={`${title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 backdrop-blur-md bg-white/30" />
            {/* watermark */}
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="select-none text-4xl sm:text-6xl font-semibold tracking-wide text-neutral-900/10">
                SAMPLE
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-neutral-600">
          This is a preview. Your dashboard generates a fully personalized version for your business and state.
        </p>

        <div className="mt-5 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-sm text-neutral-900 hover:bg-white"
          >
            Close
          </button>
          <a
            href="/start"
            className="rounded-lg bg-[#3b82f6] px-3 py-2 text-sm font-medium text-white hover:bg-[#2f6fe0]"
          >
            Get My Dashboard
          </a>
        </div>
      </div>
    </Modal>
  );
} 