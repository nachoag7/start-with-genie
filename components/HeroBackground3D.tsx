'use client';
import { useEffect, useRef } from 'react';

export default function HeroBackground3D() {
  const spot = useRef<HTMLDivElement>(null);

  // cursor spotlight
  useEffect(() => {
    const el = spot.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY + window.scrollY;
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // gentle parallax on mesh + grid
  useEffect(() => {
    const mesh = document.getElementById('mesh-layer') as HTMLElement | null;
    const grid = document.getElementById('grid-layer') as HTMLElement | null;
    const rays = document.getElementById('rays-layer') as HTMLElement | null;

    const onScroll = () => {
      const y = window.scrollY;
      mesh && (mesh.style.transform = `translate3d(${y * 0.02}px, ${y * 0.04}px, 0)`);
      grid && (grid.style.transform = `translate3d(0, ${y * 0.03}px, 0)`);
      rays && (rays.style.transform = `translate3d(${y * -0.01}px, ${y * 0.02}px, 0)`);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* cursor spotlight */}
      <div
        ref={spot}
        className="fixed inset-0 [background:radial-gradient(420px_420px_at_var(--x,50%)_var(--y,20%),rgba(46,131,255,.12),transparent_60%)] motion-reduce:!bg-transparent"
      />

      {/* soft center glow */}
      <div className="absolute left-1/2 top-[10rem] -translate-x-1/2 -translate-y-1/2 h-[70vh] w-[70vw] max-w-[1200px] rounded-full blur-3xl
        [background:radial-gradient(60%_60%_at_50%_50%,rgba(46,131,255,.28),rgba(46,131,255,.10)_45%,transparent_80%)]" />

      {/* mesh gradient blobs */}
      <div id="mesh-layer" className="absolute -top-32 left-1/2 -translate-x-1/2 h-[90vh] w-[120vw] blur-2xl opacity-60">
        <div className="h-full w-full [background:radial-gradient(40%_50%_at_20%_30%,#7DB7FF33,transparent),radial-gradient(35%_45%_at_80%_30%,#2E83FF26,transparent),radial-gradient(30%_40%_at_60%_70%,#9BC9FF26,transparent)]" />
      </div>

      {/* light rays */}
      <svg id="rays-layer" className="absolute left-1/2 top-10 -translate-x-1/2 opacity-15" width="1400" height="500" viewBox="0 0 1400 500" fill="none">
        <defs>
          <linearGradient id="ray" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B9D7FF" />
            <stop offset="100%" stopColor="#2E83FF" />
          </linearGradient>
        </defs>
        {[...Array(7)].map((_, i) => (
          <path key={i} d={`M0 ${60 + i*50} L1400 ${10 + i*35}`} stroke="url(#ray)" strokeOpacity="0.6" strokeWidth="1"/>
        ))}
      </svg>

      {/* perspective grid plane */}
      <div id="grid-layer" className="absolute inset-x-0 bottom-[-18rem] h-[42rem] [perspective:1200px]">
        <svg className="block mx-auto h-full w-[1800px] opacity-[0.18]" viewBox="0 0 1800 1200">
          <defs>
            <linearGradient id="gridline" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CFE2FF" />
              <stop offset="100%" stopColor="#2E83FF" />
            </linearGradient>
          </defs>
          <g transform="translate(0,200) skewX(-8) rotateX(55)">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={`v${i}`} x1={i*60} y1="0" x2={i*60} y2="1200" stroke="url(#gridline)" strokeWidth="1"/>
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i*60} x2="1800" y2={i*60} stroke="url(#gridline)" strokeWidth="1"/>
            ))}
            <rect x="0" y="0" width="1800" height="1200" fill="url(#grad)" />
          </g>
        </svg>
      </div>

      {/* subtle noise */}
      <div
        className="fixed inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%272%27/></filter><rect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/></svg>")',
          backgroundSize: '160px 160px',
        }}
      />
    </div>
  );
}