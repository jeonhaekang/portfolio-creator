/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts"],
  images: {
    domains: ["firebasestorage.googleapis.com"]
  }
};

module.exports = nextConfig;
