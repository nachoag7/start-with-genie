"use client";

import { useEffect, useRef, useState } from "react";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "Do you file the LLC for me?",
    a: "No. Genie is built for founders who want complete control without paying inflated service fees. We give you the exact steps, documents, and guidance so you can file your LLC with clarity and confidence.",
  },
  {
    q: "What do I actually get for $49?",
    a: "A complete founder's launch kit that includes personalized state filing instructions, a clear EIN guide, a customizable operating agreement, and unlimited 24/7 access to the Genie assistant for expert guidance.",
  },
  {
    q: "Is this legit? Can I do it myself?",
    a: "Yes. Every state in the U.S. allows you to file an LLC on your own. Genie makes the process clear and stress free so you can launch without upsells or confusion.",
  },
  {
    q: "What if I get stuck or confused?",
    a: "Your Genie assistant is available anytime to give you instant answers so you can keep moving forward without delays.",
  },
  {
    q: "Is there any ongoing cost?",
    a: "No. One flat $49 payment gives you lifetime access to your instructions, documents, and assistant.",
  },
  {
    q: "How is Genie different from LegalZoom or ZenBusiness?",
    a: "Other companies make money by selling extra services you do not need. Genie is a one time, transparent system that gives you everything required to launch your LLC with confidence.",
  },
];

export default function FAQ() {
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
    <section aria-labelledby="faqs" className="relative py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-0">
        <h2 id="faqs" className="text-center text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          FAQs
        </h2>

        <div ref={rootRef} className="mt-10 divide-y divide-neutral-200/70">
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              i={i}
              q={item.q}
              a={item.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
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
    <div data-animate style={{ transitionDelay: `${70 * i}ms` }} className="faq-row opacity-0 translate-y-[8px]">
      <button
        id={buttonId}
        aria-controls={contentId}
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
      >
        <span className="text-base md:text-lg font-semibold text-neutral-900">{q}</span>
        <span
          className={[
            "mt-1 flex h-6 w-6 items-center justify-center rounded-md border border-neutral-300 text-neutral-500 transition",
            open ? "rotate-45" : "",
          ].join(" ")}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={[
          "overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out grid",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-80",
        ].join(" ")}
      >
        <div className="min-h-0">
          <p className="pb-5 text-[15px] leading-7 text-neutral-600">{a}</p>
        </div>
      </div>
    </div>
  );
} 