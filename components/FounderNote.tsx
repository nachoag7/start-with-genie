"use client";

export default function FounderNote() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        {/* Eyebrow */}
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-500">
          For Founders, by a Founder
        </p>

        {/* Headline */}
        <h2 className="mt-4 text-3xl md:text-[34px] font-semibold tracking-tight text-neutral-900">
          Starting a business should feel empowering.
        </h2>

        {/* Body */}
        <div className="founder-prose mx-auto mt-6 text-[17px] leading-8 text-neutral-600">
          <p>For me, it was just overwhelming.</p>
          <p className="mt-3">
            I was tired of the confusing packages and hidden fees.
          </p>
          <p className="mt-3">
            I realized we just need a clear map to do it ourselves.
          </p>
          <p className="mt-3">
            So I created the antidote: a single $49 system that puts you in complete control.
          </p>
          <p className="mt-3">
            It's everything you need to launch with confidence.
          </p>
          <p className="mt-3">Nothing more, nothing less.</p>
        </div>

        {/* Signature */}
        <div className="mt-10">
          <div className="mx-auto w-12 border-t border-neutral-200" />
          <div className="mt-4 text-sm">
            <div className="font-semibold text-neutral-900">Ignacio Aguilar</div>
            <div className="text-neutral-500">Founder, Start With Genie</div>
          </div>
        </div>
      </div>

      {/* faint vertical rule behind the section (optional, Linear vibe) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-px -translate-x-1/2 bg-neutral-200/60"
      />
    </section>
  );
} 