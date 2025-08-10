"use client";

import Image from "next/image";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string; // /public/...
  stars?: number; // 0-5
  tone?: "butter" | "cotton" | "mist"; // background tone variant
  tilt?: -2 | -1 | 0 | 1 | 2; // slight rotation
};

export default function TestimonialNote({
  quote,
  name,
  role,
  avatar,
  stars = 5,
  tone = "butter",
  tilt = 0,
}: Testimonial) {
  const toneClass =
    tone === "butter"
      ? "bg-[#FFF8D9]"
      : tone === "cotton"
      ? "bg-[#F7FBFF]"
      : "bg-[#F8F6FF]"; // mist (very pale lilac)

  const tiltClass =
    tilt === -2 ? "-rotate-[2deg]" :
    tilt === -1 ? "-rotate-[1deg]" :
    tilt === 1  ? "rotate-[1deg]"  :
    tilt === 2  ? "rotate-[2deg]"  : "";

  return (
    <figure
      className={[
        "relative rounded-[18px] p-5 md:p-6",
        toneClass,
        "note-texture",
        "shadow-[0_14px_28px_rgba(0,0,0,0.08)]",
        "border border-black/5",
        tiltClass,
      ].join(" ")}
    >
      {/* "tape" accent (optional but subtle) */}
      <span
        aria-hidden
        className="absolute left-1/2 top-0 h-3 w-16 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-neutral-300/60 backdrop-blur-sm"
      />

      {/* stars (simple dots—premium + minimal) */}
      <div className="mb-3 flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
        ))}
      </div>

      <blockquote className="text-[15px] leading-7 text-neutral-800">
        <span className="select-none text-neutral-400">"</span>
        {quote}
        <span className="select-none text-neutral-400">"</span>
      </blockquote>

      {/* footer */}
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
          <Image src={avatar} alt={`${name} avatar`} fill className="object-cover" />
        </span>
        <div className="leading-tight">
          <div className="font-medium text-neutral-900">{name}</div>
          <div className="text-[13px] text-neutral-500">{role}</div>
        </div>
      </figcaption>

      {/* soft bottom curl shadow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 -bottom-3 h-3 rounded-[999px] bg-black/5 blur-md"
      />
    </figure>
  );
} 