"use client";

import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string; // /public/avatars/...
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I googled for a while and got nowhere. Gave this a shot and got it done for cheap so I recommend.",
    name: "Dave G.",
    role: "Opening his first Etsy shop",
    avatar: "/reviewers/dave-g.jpg",
  },
  {
    quote:
      "I didn't know what I was doing at all but the process was pretty clear so it wasn't that hard.",
    name: "Mohammad A.",
    role: "Opening an online business",
    avatar: "/reviewers/mohammad-a.png",
  },
  {
    quote:
      "Saw this and figured I'd give it a try instead of paying other brands much more. I was satisfied and saved a lot.",
    name: "Justin G.",
    role: "First-time business owner",
    avatar: "/reviewers/justin-g.jpg",
  },
];

export default function TestimonialsLinear() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          From Overwhelmed to Officially Launched
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="t-fade-up" style={{ animationDelay: `${i * 90}ms` }}>
              <Card {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ quote, name, role, avatar }: Testimonial) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/70 p-6 shadow-[0_6px_26px_rgba(0,0,0,0.06)] backdrop-blur transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)]">
      {/* subtle quote watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 text-[120px] font-serif leading-none text-neutral-200/40 select-none"
      >
        &ldquo;
      </div>

      {/* quote */}
      <blockquote className="relative text-[15px] leading-7 text-neutral-800">
        "{quote}"
      </blockquote>

      {/* footer with avatar (kept) */}
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
          <Image src={avatar} alt={`${name} avatar`} fill className="object-cover" />
        </span>
        <div className="leading-tight">
          <div className="font-medium text-neutral-900">{name}</div>
          <div className="text-[13px] text-neutral-500">{role}</div>
        </div>
      </figcaption>

      {/* soft top divider for rhythm */}
      <div aria-hidden className="absolute left-6 right-6 top-[54%] h-px bg-neutral-200/60 opacity-0" />
    </figure>
  );
} 