/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig;
