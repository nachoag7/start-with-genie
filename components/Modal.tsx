"use client";

import { ReactNode, useEffect } from "react";
import { useModal } from "./ModalContext";

export default function Modal({
  open,
  onClose,
  children,
  labelledBy = "modal-title",
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy?: string;
}) {
  // Try to use modal context, but don't fail if not available
  let setModalOpen: ((isOpen: boolean) => void) | undefined;
  try {
    const modalContext = useModal();
    setModalOpen = modalContext.setModalOpen;
  } catch {
    // Modal context not available, continue without it
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    setModalOpen?.(true);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      setModalOpen?.(false);
    };
  }, [open, onClose, setModalOpen]);

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
      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={[
          "fixed inset-0 z-50 grid place-items-center px-4",
          "transition duration-200",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          className={[
            "w-full max-w-3xl rounded-2xl border border-black/10 bg-white/80 shadow-[0_40px_100px_rgba(0,0,0,.2)] backdrop-blur-xl",
            "transition transform",
            open ? "scale-100 opacity-100" : "scale-95 opacity-0",
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    </>
  );
} 