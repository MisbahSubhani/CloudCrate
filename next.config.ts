import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Modern way to handle external packages (replaces experimental.serverComponentsExternalPackages)
  serverExternalPackages: ['@prisma/client'],
  
  // Optional webpack optimization for Prisma
  webpack: (config) => {
    config.externals = [...(config.externals || []), '@prisma/client'];
    return config;
  },
  
  // Add any other production optimizations here
  output: 'standalone', // Recommended for Docker deployments
};

export default nextConfig;