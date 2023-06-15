/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh4.ggpht.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.ggpht.com',
      },
      {
        protocol: 'https',
        hostname: 'lh5.ggpht.com',
      },
      {
        protocol: 'https',
        hostname: 'lh6.ggpht.com',
      },
    ],
  },
}

module.exports = nextConfig
