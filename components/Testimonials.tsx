"use client";

import TestimonialNote from "./TestimonialNote";

const notes = [
  {
    quote:
      "Didn't know where to start until I found this. I tried for weeks, then Genie made it simple and I filed with confidence.",
    name: "Dave G.",
    role: "Opened his first Etsy shop",
    avatar: "/reviewers/dave-g.jpg",
    tone: "butter" as const,
    tilt: -1 as const,
  },
  {
    quote:
      "Honestly, just made things simpler. I finally understood each step and didn't second-guess myself.",
    name: "Mohammad A.",
    role: "Opening an online business",
    avatar: "/reviewers/mohammad-a.png",
    tone: "cotton" as const,
    tilt: 1 as const,
  },
  {
    quote:
      "Helped me stop overthinking. Clear, direct, and no upsells. I felt in control the whole time.",
    name: "Justin G.",
    role: "First-time business owner",
    avatar: "/reviewers/justin-g.jpg",
    tone: "mist" as const,
    tilt: 2 as const,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          From Overwhelmed to Officially Launched
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {notes.map((n, i) => (
            <div key={i} className="note-in" style={{ animationDelay: `${80 * i}ms` }}>
              <TestimonialNote {...n} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}