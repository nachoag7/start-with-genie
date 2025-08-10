"use client";

import { SectionReveal } from "./reveal";

export default function Divider() {
  return (
    <SectionReveal delay={0.04}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-neutral-200/60" />
      </div>
    </SectionReveal>
  );
} 