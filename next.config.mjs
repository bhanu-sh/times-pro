/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
