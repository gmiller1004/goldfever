import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/gold-fever-e-book";
const effectiveBasePath = basePath === "" ? undefined : basePath;

const nextConfig: NextConfig = {
  basePath: effectiveBasePath,
  async redirects() {
    if (!effectiveBasePath) return [];
    return [
      {
        source: "/",
        destination: effectiveBasePath,
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
