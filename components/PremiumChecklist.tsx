"use client";

import { motion, useReducedMotion } from "framer-motion";

type Item = {
  title: string;
  subtitle?: string;
};

export default function PremiumChecklist({
  items,
  className = "",
  ariaLabel = "Key points",
}: {
  items: Item[];
  className?: string;
  ariaLabel?: string;
}) {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 6 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
        duration: 0.35,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const itemVar = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 0.61, 0.36, 1] } },
  };

  return (
    <motion.ul
      role="list"
      aria-label={ariaLabel}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={["space-y-5", className].join(" ")}
    >
      {items.map((it, i) => (
        <motion.li
          key={i}
          variants={itemVar}
          className="flex items-start"
        >
          <div className="min-w-0">
            <div className="text-[15px] font-medium leading-6 text-neutral-900">
              {it.title}
            </div>
            {it.subtitle && (
              <div className="mt-0.5 text-sm leading-6 text-neutral-500">
                {it.subtitle}
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
} 