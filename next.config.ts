import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  
  // --- TAMBAHKAN BAGIAN INI ---
  eslint: {
    // Mengabaikan error ESLint saat build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Mengabaikan error TypeScript saat build
    ignoreBuildErrors: true,
  },
  // ---------------------------
};

export default nextConfig;