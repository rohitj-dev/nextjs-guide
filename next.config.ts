import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // experimental: {
  //   appDir: true,
  //   serverActions: true,
  // },
  images: {
    domains: ['cdn.dummyjson.com']
  }
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // output: "standalone",
  // reactStrictMode: true,
  // swcMinify: true,
};

export default nextConfig;
