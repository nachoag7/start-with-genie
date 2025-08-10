"use client";

import { useState } from "react";
import BlurPreviewModal from "./BlurPreviewModal";
import UnlockModal from "./UnlockModal";

export default function DocumentCard({
  title,
  desc,
  previewSrc, // image path in /public/previews/...
}: {
  title: string;
  desc: string;
  previewSrc: string;
}) {
  const [viewOpen, setViewOpen] = useState(false);
  const [unlockOpen, setUnlockOpen] = useState(false);

  return (
    <>
      <div className="group rounded-2xl border border-black/10 bg-white/70 p-5 shadow-[0_6px_30px_rgba(0,0,0,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
        <div className="text-[15px] font-semibold text-neutral-900">{title}</div>
        <p className="mt-1 text-sm text-neutral-600">{desc}</p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setViewOpen(true)}
            className="rounded-lg border border-black/10 bg-white/70 px-3 py-1.5 text-sm text-neutral-900 hover:bg-white"
          >
            View
          </button>
          <button
            onClick={() => setUnlockOpen(true)}
            className="rounded-lg border border-black/10 bg-white/70 px-3 py-1.5 text-sm text-neutral-900 hover:bg-white"
          >
            Download
          </button>
        </div>
      </div>

      <BlurPreviewModal open={viewOpen} onClose={() => setViewOpen(false)} title={title} previewSrc={previewSrc} />
      <UnlockModal open={unlockOpen} onClose={() => setUnlockOpen(false)} docTitle={title} />
    </>
  );
} 