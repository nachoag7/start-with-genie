"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;         // e.g. /dashboard-sample.png
  alt?: string;
  href?: string;       // default /sample
  className?: string;
};

export default function InteractivePreviewCard({
  src,
  alt = "Dashboard preview",
  href = "/sample",
  className = "",
}: Props) {
  const router = useRouter();
  const prefersReduced = useReducedMotion();

  // motion values (cursor-driven tilt)
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const scale = useMotionValue(1);

  // silky springs
  const rX = useSpring(rotX, { stiffness: 300, damping: 30, mass: 0.4 });
  const rY = useSpring(rotY, { stiffness: 300, damping: 30, mass: 0.4 });
  const s  = useSpring(scale, { stiffness: 300, damping: 30, mass: 0.4 });

  const glareOpacity = useSpring(0, { stiffness: 200, damping: 25 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  function onPointerMove(e: React.PointerEvent<HTMLButtonElement>) {
    if (prefersReduced) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   // 0..1
    const y = (e.clientY - rect.top)  / rect.height;  // 0..1
    rotX.set((0.5 - y) * 7);  // tilt ranges
    rotY.set((x - 0.5) * 9);
  }

  function onEnter() {
    setHovered(true);
    glareOpacity.set(1);
    scale.set(1.015);
  }
  function onLeave() {
    setHovered(false);
    glareOpacity.set(0);
    rotX.set(0);
    rotY.set(0);
    scale.set(1);
  }

  // reduced motion fallback
  useEffect(() => {
    if (prefersReduced) {
      rotX.set(0); rotY.set(0); scale.set(1);
    }
  }, [prefersReduced, rotX, rotY, scale]);

  return (
    <button
      onClick={() => router.push(href)}
      onPointerMove={onPointerMove}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      className={[
        "group relative w-full select-none rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/60",
        "transition-colors",
        className,
      ].join(" ")}
      aria-label="Open sample dashboard"
    >
      {/* faint animated background gradient */}
      <div aria-hidden className="absolute -inset-x-10 -inset-y-6">
        <div className="absolute left-1/4 top-0 h-40 w-40 animate-gradient-drift rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.12),transparent_70%)] blur-2xl" />
        <div className="absolute right-6 bottom-0 h-48 w-48 animate-gradient-drift-slow rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.10),transparent_70%)] blur-3xl" />
      </div>

      {/* 3D card */}
      <motion.div
        ref={cardRef}
        style={{
          rotateX: prefersReduced ? 0 : rX,
          rotateY: prefersReduced ? 0 : rY,
          scale:    prefersReduced ? 1 : s,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-3xl border border-black/10 bg-white/80 p-2 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-shadow duration-300 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
      >
        <div className="relative overflow-hidden rounded-2xl">
          {/* keep any aspect/sizing but look great with any image */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-contain bg-white"
            />
          </div>

          {/* sliding glare */}
          <motion.div
            aria-hidden
            style={{ opacity: glareOpacity }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 rotate-12 bg-[radial-gradient(120px_80px_at_50%_20%,rgba(255,255,255,0.35),rgba(255,255,255,0)_70%)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </motion.div>

          {/* top edge highlight */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>

        {/* hint */}
        <div
          className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-neutral-900/85 px-3 py-1 text-xs text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100"
          style={{ transform: "translateZ(40px)" }}
        >
          Click to explore
        </div>
      </motion.div>
    </button>
  );
} 