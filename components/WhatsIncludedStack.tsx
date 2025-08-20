"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SectionReveal, StaggerReveal, Item } from "./reveal";

const DEFAULT_FEATURES = [
  {
    title: "Guided LLC Registration",
    desc: "Personalized to your business so you can file confidently from day one.",
  },
  {
    title: "Expedited EIN Application",
    desc: "Get your federal tax ID in minutes.",
  },
  {
    title: "Custom Operating Agreement",
    desc: "A lawyer-inspired template built for solo founders.",
  },
  {
    title: "Clean Founder Dashboard",
    desc: "All your documents and next steps in one place.",
  },
  {
    title: "24/7 Genie Assistant",
    desc: "Instant answers whenever you're stuck.",
  },
];

interface WhatsIncludedStackProps {
  features?: Array<{ title: string; desc: string }>;
}

export default function WhatsIncludedStack({ features = DEFAULT_FEATURES }: WhatsIncludedStackProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-animate]"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
} 