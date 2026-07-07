/** @type {import('next').NextConfig} */

// CSP: Stripe needs js.stripe.com (script/frame) and api.stripe.com
// (connect). Analytics domains are included but only load when configured.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://www.googletagmanager.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://api.stripe.com https://www.google-analytics.com https://www.facebook.com",
  "frame-src https://js.stripe.com https://hooks.stripe.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://js.stripe.com"
].join('; ');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Content-Security-Policy', value: csp }
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  }
};

export default nextConfig;
