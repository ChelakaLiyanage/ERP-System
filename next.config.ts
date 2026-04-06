import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */

  output: "export",
   assetPrefix:
    process.env.NODE_ENV === "development"
      ? undefined
      : "./",
};

export default nextConfig;
