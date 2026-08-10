import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/filtech-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;