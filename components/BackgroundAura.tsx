'use client';
import React from 'react';

export default function BackgroundAura() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {/* Radial glow behind hero */}
      <div
        className="
          absolute left-1/2 top-[18rem] -translate-x-1/2 -translate-y-1/2
          h-[60vh] w-[60vw] max-h-[720px] max-w-[1200px]
          rounded-full blur-3xl
          opacity-40 sm:opacity-35 md:opacity-30
          [background:radial-gradient(60%_60%_at_50%_50%,rgba(46,131,255,0.35),rgba(46,131,255,0.12)_45%,rgba(255,255,255,0)_80%)]
          dark:[background:radial-gradient(60%_60%_at_50%_50%,rgba(80,160,255,0.35),rgba(80,160,255,0.12)_45%,rgba(0,0,0,0)_80%)]
        "
      />

      {/* Abstract corner blobs */}
      <svg
        id="blob-top"
        className="absolute -right-24 -top-24 h-[48rem] w-[48rem] opacity-15 blur-2xl"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7DB7FF" />
            <stop offset="100%" stopColor="#2E83FF" />
          </linearGradient>
        </defs>
        <path
          d="M300,40 C430,60 560,170 560,300 C560,430 430,540 300,560 C170,540 60,430 40,300 C60,170 170,60 300,40 Z"
          fill="url(#g1)"
          fillOpacity="0.35"
        />
      </svg>

      <svg
        id="blob-bottom"
        className="absolute -left-24 -bottom-24 h-[44rem] w-[44rem] opacity-15 blur-2xl"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B9D7FF" />
            <stop offset="100%" stopColor="#7DB7FF" />
          </linearGradient>
        </defs>
        <path
          d="M300,60 C420,80 540,180 540,300 C540,420 420,520 300,540 C180,520 80,420 60,300 C80,180 180,80 300,60 Z"
          fill="url(#g2)"
          fillOpacity="0.35"
        />
      </svg>
    </div>
  );
}