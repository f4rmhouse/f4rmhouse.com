/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'f4-public.s3.eu-central-1.amazonaws.com',
        pathname: '/public/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'f4-public.s3.eu-central-1.amazonaws.com',
        pathname: '/artifacts/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uxwing.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
