import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Exclude canvas from client-side bundle if it's not used
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
    }
    
    // Handle browser-only packages for SSR
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        'fabric': 'commonjs fabric',
        'html2canvas': 'commonjs html2canvas',
        'file-saver': 'commonjs file-saver',
      });
    }
    
    return config;
  },
};

export default nextConfig;
