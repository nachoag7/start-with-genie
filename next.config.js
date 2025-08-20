/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://maps.googleapis.com https://www.googletagmanager.com https://www.clarity.ms https://www.google-analytics.com https://www.googleadservices.com https://www.pinterest.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.stripe.com https://maps.googleapis.com https://api.openai.com https://xdzmaipfdwkcsxhdapla.supabase.co https://www.google-analytics.com https://analytics.google.com https://www.googleadservices.com https://www.google.com https://www.pinterest.com; frame-src 'self' https://js.stripe.com https://www.googletagmanager.com; worker-src 'self' blob:;",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 
 
 
 
 