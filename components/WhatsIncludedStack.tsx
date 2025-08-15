"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SectionReveal, StaggerReveal, Item } from "./reveal";

const DEFAULT_FEATURES = [
  {
    title: "Step-by-Step LLC Filing",
    desc: "Personalized to your business so you can file confidently from day one.",
  },
  {
    title: "EIN Walkthrough",
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

  return (
    <section aria-labelledby="whats-included" className="relative py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-0">
        <SectionReveal>
          <h2
            id="whats-included"
            className="text-center text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900"
          >
            Everything you need, nothing you don&apos;t
          </h2>
        </SectionReveal>

        <div ref={ref} className="mt-10 relative">
          {/* vertical rule/path (subtle) */}
          <div
            aria-hidden="true"
            className="absolute left-[24px] top-0 hidden h-full w-px bg-neutral-200/70 md:block"
          />

          <StaggerReveal>
            {features.map((f, i) => (
              <Item key={f.title}>
                <div className="grid grid-cols-[48px_1fr] items-start gap-4 md:gap-6">
                  {/* number */}
                  <div className="relative h-12">
                    <span className="absolute inset-0 select-none text-[28px] font-semibold leading-none text-neutral-200">
                      {i + 1}
                    </span>
                  </div>

                  {/* copy */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 max-w-[60ch] text-[15px] leading-7 text-neutral-600">
                      {f.desc}
                    </p>
                  </div>
                </div>

                {/* divider rhythm */}
                {i < features.length - 1 && (
                  <div className="my-6 h-px bg-neutral-200/50" />
                )}
              </Item>
            ))}
          </StaggerReveal>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link href="/onboarding">
            <button className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-8 py-3 text-base font-medium text-white hover:bg-[#2f6fe0] transition-all duration-200 hover:scale-105 shadow-[0_6px_18px_rgba(59,130,246,0.35)]">
              Get Started Now
            </button>
          </Link>
          <p className="mt-3 text-sm text-neutral-500">
            One payment. Everything included.
          </p>
        </div>
      </div>
    </section>
  );
} 