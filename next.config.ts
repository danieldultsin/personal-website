import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    X_BEARER_TOKEN: process.env.X_BEARER_TOKEN,
  },
};

export default nextConfig;
