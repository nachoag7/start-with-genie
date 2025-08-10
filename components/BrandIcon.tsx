'use client';
import { HTMLAttributes } from 'react';

type BrandIconProps = {
  children: React.ReactNode; // pass the SVG path(s) only
  size?: number; // px
  badge?: boolean; // show glass badge behind icon
} & HTMLAttributes<HTMLDivElement>;

export default function BrandIcon({ children, size = 24, badge = true, className, ...rest }: BrandIconProps) {
  return (
    <div
      className={["inline-flex items-center justify-center select-none", badge ? "rounded-xl p-2 bg-white/60 dark:bg-neutral-900/50 backdrop-blur border border-white/70 dark:border-white/10 shadow-[0_8px_24px_-12px_rgba(46,131,255,.25)]" : "" , "transition-transform duration-150 hover:scale-[1.02]"].join(' ')}
      {...rest}
    >
      <svg
        width={size} height={size} viewBox="0 0 24 24" fill="none"
        className="block"
      >
        {/* gradient stroke + subtle fill */}
        <defs>
          <linearGradient id="brand-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7DB7FF"/>
            <stop offset="100%" stopColor="#2E83FF"/>
          </linearGradient>
        </defs>
        <g
          stroke="url(#brand-stroke)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g opacity=".1" fill="#2E83FF">{/* faint fill underlay */}
            {children}
          </g>
          <g fill="none">
            {children}
          </g>
        </g>
      </svg>
    </div>
  );
}