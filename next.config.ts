import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // disables Next.js image optimization API
  },
};

export default nextConfig;
