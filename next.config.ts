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

  //reactCompiler: true,
};

export default nextConfig;