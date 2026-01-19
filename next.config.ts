import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // <--- Forces static HTML export (creates 'out' folder)
  images: {
    unoptimized: true,   // <--- Required for Cloudflare
  },
  trailingSlash: true,   // <--- Helps with routing
};

export default nextConfig;