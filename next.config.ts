import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/members",
        destination: "/czlonkowie",
        permanent: true,
      },
    ];
  },

  //reactCompiler: true,
};

export default nextConfig;
