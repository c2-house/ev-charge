const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xijlspuywuyfsjloqhno.supabase.co',
        pathname: '/storage/v1/object/public/ev-charge/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/used-cars',
        destination: '/used-cars/2024-03',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = withContentlayer(nextConfig);
