import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/jjtrading",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
