/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.coingecko.com', 'coin-images.coingecko.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.coingecko.com',
          port: '',
          pathname: '/coins/images/**',
        },
      ],
  }
}

module.exports = nextConfig
