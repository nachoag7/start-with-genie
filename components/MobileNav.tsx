"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // lock body scroll
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // esc to close + focus management
  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* trigger (thin lines, minimal) */}
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white/70 backdrop-blur transition hover:bg-white/90 md:hidden"
      >
        <span className="relative block h-[14px] w-[18px]">
          <span className="absolute inset-x-0 top-0 h-[1.5px] bg-neutral-900 rounded"></span>
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-neutral-900 rounded"></span>
          <span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-neutral-900 rounded"></span>
        </span>
      </button>

      {/* overlay */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* slide-over panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={[
          "fixed right-0 top-0 z-50 h-dvh w-[88%] max-w-[420px] outline-none md:hidden",
          "transition-transform duration-300 ease-[cubic-bezier(.22,.61,.36,1)]",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div
          ref={panelRef}
          className="relative flex h-full flex-col gap-4 rounded-l-2xl border-l border-white/20 bg-white/70 px-5 pb-5 pt-4 shadow-[0_30px_80px_rgba(0,0,0,.20)] backdrop-blur-xl"
        >
          {/* top bar */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium tracking-wide text-neutral-500">Menu</span>
            <button
              ref={closeBtnRef}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-8 w-8 place-items-center rounded-md border border-black/10 bg-white/70 transition hover:bg-white"
            >
              {/* thin plus -> close */}
              <span className="relative block h-[16px] w-[16px]">
                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-neutral-900 rounded rotate-45"></span>
                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-neutral-900 rounded -rotate-45"></span>
              </span>
            </button>
          </div>

          {/* links */}
          <nav className="mt-2 flex-1">
            <ul className="space-y-1.5">
              {NAV_LINKS.map((l, i) => (
                <li
                  key={l.href}
                  style={{ animationDelay: `${60 * i}ms` }}
                  className="menu-reveal opacity-0 translate-y-[6px]"
                >
                  <Link
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block rounded-lg px-2 py-3 text-[15px] font-medium text-neutral-900 transition hover:bg-white/80 hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* bottom actions */}
          <div className="mt-auto space-y-2">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block w-full rounded-lg border border-black/10 bg-white/70 px-3 py-2.5 text-center text-[15px] font-medium text-neutral-900 transition hover:bg-white"
            >
              Log In
            </Link>
            <Link
              href="/start"
              onClick={() => setOpen(false)}
              className="block w-full rounded-lg bg-[#3b82f6] px-3 py-2.5 text-center text-[15px] font-medium text-white transition hover:bg-[#2f6fe0] shadow-[0_6px_18px_rgba(59,130,246,0.35)]"
            >
              Get Started
            </Link>
          </div>

          {/* subtle gradient edge */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-l-2xl ring-1 ring-black/10" />
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-l-2xl bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </aside>
    </>
  );
} 