'use client';
import {useEffect, useRef} from 'react';

export default function PremiumPolish() {
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spot.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY + window.scrollY;
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    };
    window.addEventListener('mousemove', onMove, {passive:true});
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const top = document.querySelector('#blob-top') as HTMLElement | null;
    const bottom = document.querySelector('#blob-bottom') as HTMLElement | null;
    const onScroll = () => {
      const y = window.scrollY;
      top && (top.style.transform = `translate3d(${y*0.01}px, ${-y*0.02}px, 0)`);
      bottom && (bottom.style.transform = `translate3d(${-y*0.01}px, ${y*0.02}px, 0)`);
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Cursor spotlight */}
      <div
        ref={spot}
        aria-hidden="true"
        className="
          pointer-events-none fixed inset-0 -z-10
          [background:radial-gradient(500px_500px_at_var(--x,50%)_var(--y,20%),rgba(46,131,255,.10),transparent_60%)]
          motion-reduce:!bg-transparent
        "
      />
      {/* Subtle noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            'url(\"data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%272%27/></filter><rect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/></svg>\")',
          backgroundSize: '160px 160px',
        }}
      />
    </>
  );
}