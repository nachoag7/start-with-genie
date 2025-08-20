"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal, StaggerReveal, Item } from "./reveal";

type QA = { q: string; a: string };

const DEFAULT_FAQS: QA[] = [
  {
    q: "What do I get for $49?",
    a: "Guided LLC registration, expedited EIN application, a customized operating agreement, and your Genie dashboard with support. Most services charge $300+.",
  },
  {
    q: "Do you file the LLC for me?",
    a: "No. Genie gives you the exact steps so you file fast and avoid inflated fees.",
  },
  {
    q: "Is this legit?",
    a: "Yes. It's the same process lawyers and filing services use, just simplified and affordable.",
  },
  {
    q: "What if I get stuck?",
    a: "Your Genie assistant guides you step by step and answers questions anytime. There's also a friendly support team one email away.",
  },
  {
    q: "How is Genie different?",
    a: "Others profit from $300+ add-ons. Genie gives you everything upfront for $49.",
  },
  {
    q: "Why only $49?",
    a: "Because LLC setup doesn't need to be expensive. Genie is built to give founders clarity and confidence at a fair price.",
  },
];

interface FAQProps {
  faqs?: QA[];
}

export default function FAQ({ faqs = DEFAULT_FAQS }: FAQProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(0); // open first by default

  // fade-in on scroll
  useEffect(() => {
    const root = rootRef.current;
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
      { threshold: 0.15 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section aria-labelledby="faqs" className="relative -mt-16 pt-1 pb-10">
      <div className="mx-auto max-w-3xl px-6 lg:px-0">
        <SectionReveal>
          <h2 id="faqs" className="text-center text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
            FAQs
          </h2>
        </SectionReveal>

        <div ref={rootRef} className="mt-2 divide-y divide-neutral-200/70">
          <StaggerReveal>
            {faqs.map((item, i) => (
              <Item key={i}>
                <FAQItem
                  i={i}
                  q={item.q}
                  a={item.a}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              </Item>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  i, q, a, open, onToggle,
}: { i: number; q: string; a: string; open: boolean; onToggle: () => void }) {
  const contentId = `faq-content-${i}`;
  const buttonId = `faq-button-${i}`;

  return (
    <div>
      <button
        id={buttonId}
        aria-controls={contentId}
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
      >
        <span className="text-base md:text-lg font-semibold text-neutral-900">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-1 flex h-6 w-6 items-center justify-center rounded-md border border-neutral-300 text-neutral-500"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <motion.div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{ 
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0.8
        }}
        transition={{ 
          height: { duration: 0.2, ease: [0.22, 0.61, 0.36, 1] },
          opacity: { duration: 0.15, ease: [0.22, 0.61, 0.36, 1] }
        }}
        className="overflow-hidden"
      >
        <div className="pb-5">
          <p className="text-[15px] leading-7 text-neutral-600">{a}</p>
        </div>
      </motion.div>
    </div>
  );
} 