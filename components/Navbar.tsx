"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/sample", label: "Sample" },
];

interface NavbarProps {
  bgColor?: string;
}

export default function Navbar({ bgColor = "bg-white" }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 border-b border-neutral-200/30 ${bgColor}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/genie-preview.png"
            alt="Start With Genie"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="sr-only">Start With Genie</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <Link href="/checkout">
              <button className="inline-flex items-center justify-center rounded-full h-10 px-6 text-sm font-medium tracking-tight text-white select-none bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-sm shadow-black/10 transition-all duration-200 ease-out hover:brightness-105 hover:shadow-md hover:shadow-black/15 active:translate-y-[1px] active:brightness-95 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2">
                Get Started
              </button>
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full h-10 px-6 border border-gray-300 text-gray-900 hover:bg-gray-50 transition text-sm font-medium tracking-tight"
            >
              Log In
            </Link>
          </div>
        </div>

        {/* Mobile buttons and hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Link href="/checkout">
            <button className="inline-flex items-center justify-center rounded-full h-10 px-6 text-sm font-medium tracking-tight text-white select-none bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-sm shadow-black/10 transition-all duration-200 ease-out hover:brightness-105 hover:shadow-md hover:shadow-black/15 active:translate-y-[1px] active:brightness-95 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2">
              Get Started
            </button>
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full h-10 px-6 border border-gray-300 text-gray-900 hover:bg-gray-50 transition text-sm font-medium tracking-tight"
          >
            Log In
          </Link>
          <button
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-neutral-900/5 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5 text-neutral-700" /> : <Menu className="h-5 w-5 text-neutral-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-neutral-200/30 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col px-4 py-3 gap-3">
            <div className="flex flex-col items-end gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}