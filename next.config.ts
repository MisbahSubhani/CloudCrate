import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Prisma to work with Next.js
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  
  // Optional but recommended for better Prisma performance
  webpack: (config) => {
    config.externals = [...(config.externals || []), '@prisma/client'];
    return config;
  },

  // Other standard Next.js config options can go here
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;