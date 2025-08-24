"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Guided LLC Registration",
    desc:
      "Personalized for your state so you know exactly what to file, where, and when — zero guesswork.",
  },
  {
    title: "Guided EIN Application",
    desc:
      "Get your federal tax ID fast with a clear, founder-friendly flow. Finish in minutes without confusion.",
  },
  {
    title: "Customizable Operating Agreement",
    desc:
      "Lawyer-inspired and pre-filled to protect your business from day one. Personalize it in minutes.",
  },
  {
    title: "Dashboard access",
    desc:
      "All your documents, guides, and next steps in one clean workspace designed for speed and clarity.",
  },
  {
    title: "The Genie assistant",
    desc:
      "24/7 AI guidance whenever you're stuck. Instant answers so you keep moving forward.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 lg:px-8 py-20">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          What's Included
        </h2>
      </div>

      {/* Linear-style list with faint background */}
      <div className="linear-surface mt-12">
        <ul className="space-y-8">
          {items.map(({ title, desc }, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: i * 0.08 
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="py-4">
                <h3 className="text-lg font-medium leading-6 text-neutral-900">
                  {title}
                  <span className="block h-px w-0 bg-[#3b82f6]"></span>
                </h3>
                <p className="mt-2 text-base leading-6 text-neutral-600">
                  {desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
} 