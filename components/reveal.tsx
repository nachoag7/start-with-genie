"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const ease = [0.22, 0.61, 0.36, 1];

export function SectionReveal({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.08, ease, duration: 0.4 }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function Item({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.35, ease, delay }}
    >
      {children}
    </motion.div>
  );
} 