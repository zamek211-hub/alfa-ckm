import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async redirects() {
    return [
      {
        source: "/members",
        destination: "/czlonkowie",
        permanent: true,
      },
      {
        source: "/member",
        destination: "/czlonkowie",
        permanent: true,
      },
      {
        source: "/members/:path*",
        destination: "/czlonkowie",
        permanent: true,
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  //reactCompiler: true,
};

export default nextConfig;