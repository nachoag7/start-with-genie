"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal, StaggerReveal, Item } from "./reveal";

type Row = {
  feature: string;
  genie: string;
  old: string;
};

const ROWS: Row[] = [
  {
    feature: "Control",
    genie: "You file directly and stay in full control.",
    old: "A third party files for you, often with delays.",
  },
  {
    feature: "Clarity",
    genie: "A clear system so you understand every step.",
    old: "A confusing process with little to no insight.",
  },
  {
    feature: "Price",
    genie: "$49 flat fee. No upsells.",
    old: "$0 to $500+ with hidden fees and surprise charges.",
  },
  {
    feature: "Operating Agreement",
    genie: "Included in your kit.",
    old: "Almost always a separate, expensive add-on.",
  },
  {
    feature: "Speed",
    genie: "Instant access to your documents and tools.",
    old: "Days or weeks of processing and waiting.",
  },
];

export default function GenieComparison() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 6 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 0.61, 0.36, 1],
        staggerChildren: prefersReduced ? 0 : 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 0.61, 0.36, 1] } },
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
            Genie vs. The Old Way
          </h2>
        </SectionReveal>

        {/* Desktop: true table for accessibility */}
        <SectionReveal>
          <div className="mt-8 hidden md:block">
            <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/70 backdrop-blur">
              <table className="w-full border-collapse text-left">
                <thead className="text-sm text-neutral-500">
                  <tr className="[&>th]:py-3 [&>th]:px-4">
                    <th className="w-[24%] font-medium">Feature</th>
                    <th className="w-[38%] font-medium">Start With Genie</th>
                    <th className="w-[38%] font-medium">Traditional Filing Services</th>
                  </tr>
                </thead>
                <tbody className="text-[15px] leading-7">
                  {ROWS.map((r, i) => (
                    <tr
                      key={r.feature}
                      className="border-t border-neutral-200/70 align-top hover:bg-neutral-50/40 hover:shadow-xs transition-all duration-200 ease-smooth"
                    >
                      <th scope="row" className="py-4 px-4 font-medium text-neutral-900">
                        {r.feature}
                      </th>
                      <td className="py-4 px-4 text-neutral-700">{r.genie}</td>
                      <td className="py-4 px-4 text-neutral-700">{r.old}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </SectionReveal>

        {/* Mobile: stacked cards for scanning */}
        <div className="mt-8 space-y-4 md:hidden">
          <StaggerReveal>
            {ROWS.map((r) => (
              <Item key={r.feature}>
                <div className="rounded-2xl border border-neutral-200/70 bg-white/70 p-4 backdrop-blur hover:scale-[1.01] hover:shadow-sm transition-all duration-200 ease-smooth">
                  <div className="text-sm font-medium text-neutral-900">{r.feature}</div>

                  <div className="mt-3 grid grid-cols-1 gap-3">
                    <div className="rounded-xl border border-neutral-200/60 p-3">
                      <div className="text-xs uppercase tracking-wide text-neutral-500">
                        Start With Genie
                      </div>
                      <div className="mt-1 text-[15px] leading-7 text-neutral-800">
                        {r.genie}
                      </div>
                    </div>
                    <div className="rounded-xl border border-neutral-200/60 p-3">
                      <div className="text-xs uppercase tracking-wide text-neutral-500">
                        Traditional Filing Services
                      </div>
                      <div className="mt-1 text-[15px] leading-7 text-neutral-800">
                        {r.old}
                      </div>
                    </div>
                  </div>
                </div>
              </Item>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
} 