/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'f4-public.s3.eu-central-1.amazonaws.com',
        pathname: '/public/assets/**',
      },
    ],
  },
};

module.exports = nextConfig;
