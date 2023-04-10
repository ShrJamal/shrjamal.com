/**
 * @link https://nextjs.org/docs/api-reference/next.config.js/introduction
 * @type {import('next').NextConfig}*/
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
}
module.exports = nextConfig
