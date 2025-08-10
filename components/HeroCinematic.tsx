"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function HeroCinematic() {
  return (
    <section className="hero-section text-center px-4 py-16">
      <motion.h1 
        className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Start Your LLC the Clear Way
      </motion.h1>
      <motion.p 
        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        Personalized state steps, an EIN guide, a ready-to-sign operating agreement, and a 24/7 assistant — all for one flat price.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      >
        <Link href="/start">
          <Button className="text-lg px-8 py-3">
            Start My LLC for $49
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}