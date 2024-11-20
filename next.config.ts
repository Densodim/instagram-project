import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'mobile-review.com',
      port: '',
      pathname: '/all/wp-content/uploads/**',
    },
      {
        protocol: "https",
        hostname: "celes.club"
      }],
  },
  /* config options here */
}

export default nextConfig
