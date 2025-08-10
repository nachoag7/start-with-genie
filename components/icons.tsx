import BrandIcon from './BrandIcon';

// Shield icon
export const IconShield = (props: any) => (
  <BrandIcon {...props}>
    <path d="M12 3l6 2v5c0 5-3.3 8-6 9-2.7-1-6-4-6-9V5l6-2z"/>
  </BrandIcon>
);

// Clock icon
export const IconClock = (props: any) => (
  <BrandIcon {...props}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 2"/>
  </BrandIcon>
);

// Sparkles icon
export const IconSparkles = (props: any) => (
  <BrandIcon {...props}>
    <path d="M12 3l1.6 3.8L17 8l-3.4 1.2L12 13l-1.6-3.8L7 8l3.4-1.2L12 3z"/>
    <path d="M5 15l.8 1.9L8 18l-1.7.6L5 21l-.8-2.4L2 18l2.2-.1L5 15z"/>
    <path d="M19 13l.8 1.9L22 16l-1.7.6L19 19l-.8-2.4L16 16l2.2-.1L19 13z"/>
  </BrandIcon>
);

// Dollar sign icon
export const IconDollar = (props: any) => (
  <BrandIcon {...props}>
    <path d="M12 2v20"/>
    <path d="M17 7a4 4 0 00-4-3H9a3 3 0 000 6h6a3 3 0 010 6h-5a4 4 0 01-4-3"/>
  </BrandIcon>
);

// Check circle icon
export const IconCheckCircle = (props: any) => (
  <BrandIcon {...props}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M9 12l2 2 4-4"/>
  </BrandIcon>
);

// Zap icon
export const IconZap = (props: any) => (
  <BrandIcon {...props}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </BrandIcon>
);

// FileText icon
export const IconFileText = (props: any) => (
  <BrandIcon {...props}>
    <path d="M14 3v4a1 1 0 001 1h4"/>
    <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"/>
    <path d="M9 9h1"/>
    <path d="M9 13h6"/>
    <path d="M9 17h6"/>
  </BrandIcon>
);

// User icon
export const IconUser = (props: any) => (
  <BrandIcon {...props}>
    <circle cx="12" cy="7" r="4"/>
    <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
  </BrandIcon>
);

// Headphones icon
export const IconHeadphones = (props: any) => (
  <BrandIcon {...props}>
    <path d="M3 14h3a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a9 9 0 0118 0v7a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3"/>
  </BrandIcon>
);

// Rocket icon
export const IconRocket = (props: any) => (
  <BrandIcon {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </BrandIcon>
);

// BarChart icon
export const IconBarChart = (props: any) => (
  <BrandIcon {...props}>
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </BrandIcon>
);

// Star icon
export const IconStar = (props: any) => (
  <BrandIcon {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </BrandIcon>
);

// Bot icon
export const IconBot = (props: any) => (
  <BrandIcon {...props}>
    <path d="M12 8V4H8"/>
    <rect width="16" height="12" x="4" y="8" rx="2"/>
    <path d="M2 14h2"/>
    <path d="M20 14h2"/>
    <path d="M15 13v2"/>
    <path d="M9 13v2"/>
  </BrandIcon>
);

// Users icon
export const IconUsers = (props: any) => (
  <BrandIcon {...props}>
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </BrandIcon>
);

// Timer icon
export const IconTimer = (props: any) => (
  <BrandIcon {...props}>
    <circle cx="12" cy="13" r="8"/>
    <path d="M12 9v4l2 2"/>
    <path d="M5 5l14 14"/>
    <path d="M9 7l6-6"/>
  </BrandIcon>
);

// Quote icon
export const IconQuote = (props: any) => (
  <BrandIcon {...props}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </BrandIcon>
);