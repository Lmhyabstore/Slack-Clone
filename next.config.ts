import type { NextConfig } from "next";

let baseUrl;

switch (process.env.NEXT_PUBLIC_STAGE?.trim()) {
  case "DEV":
    baseUrl = "https://google.com/";
    break;
  case "TEST":
    baseUrl = "https://google.com/";
    break;
  case "PROD":
    baseUrl = "hhttps://google.com/";
    break;
  default:
    baseUrl = "https://google.com/";
    break;
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
