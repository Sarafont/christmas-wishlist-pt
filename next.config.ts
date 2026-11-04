import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/christmas-wishlist-pt",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
