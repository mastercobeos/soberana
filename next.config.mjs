/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'mx.ecoflow.com' },
      { protocol: 'https', hostname: 'www.ecoflow.com' }
    ]
  }
};

export default nextConfig;
