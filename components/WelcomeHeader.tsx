"use client";
import React from "react";
import { formatAppleStyle } from "../lib/utils";

export function ProgressRing({ value }: { value: number }) {
  const size = 44, stroke = 5, r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, value));
  const offset = c - (clamped / 100) * c;
  return (
    <svg width={size} height={size} className="drop-shadow">
      <circle cx={size/2} cy={size/2} r={r} stroke="rgba(0,0,0,0.08)" strokeWidth={stroke} fill="none" />
      <circle
        cx={size/2} cy={size/2} r={r}
        stroke="url(#grad)"
        strokeWidth={stroke} fill="none"
        strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset}
        className="motion-soft"
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function WelcomeHeader({
  firstName,
  businessName,
  state,
  progressPercent,
  updatedAt,
}: {
  firstName?: string | null;
  businessName?: string | null;
  state?: string | null;
  progressPercent: number; // 0..100
  updatedAt?: Date | string | null;
}) {
  const greeting = firstName ? `Welcome back, ${firstName}!` : "Welcome back!";
  const line = businessName
    ? `Everything you need to launch ${businessName} is right here.`
    : "Everything you need to launch is right here.";
  const ts = updatedAt ? formatAppleStyle(updatedAt) : null;

  return (
    <section className="fade-in-up">
      <div className="flex items-center gap-4">
        <div className="shrink-0"><ProgressRing value={progressPercent} /></div>
        <div className="flex-1">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">{greeting}</h2>
          <p className="text-sm text-gray-600">{line}</p>
          {ts && <p className="text-xs text-gray-400 mt-1">{ts}</p>}
        </div>
      </div>
    </section>
  );
}