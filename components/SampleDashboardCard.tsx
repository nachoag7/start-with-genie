"use client";

import Link from "next/link";
import Image from "next/image";

export default function SampleDashboardCard() {
  return (
    <Link
      href="/sample"
      aria-label="Open sample dashboard"
      className="group relative block w-full max-w-[720px] rounded-2xl transition-transform duration-300 ease-out hover:scale-[1.01] focus:scale-[1.01] focus:outline-none"
    >
      {/* gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9EB7FF] via-[#7AA7FF] to-[#9EB7FF] opacity-[0.35] blur-[18px] transition-opacity duration-500 group-hover:opacity-60" />
      <div className="relative rounded-2xl border border-white/10 bg-[radial-gradient(90%_120%_at_10%_-10%,rgba(255,255,255,0.12),rgba(255,255,255,0)_40%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl overflow-hidden">
        {/* Dashboard preview image */}
        <Image
          src="/dashboard-sample.png"
          alt="Dashboard preview"
          width={720}
          height={400}
          className="w-full h-auto object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />

        {/* subtle shine */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div className="shine h-[140%] w-[40%] -translate-y-1/3 -rotate-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  );
} 