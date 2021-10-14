/** @type {import('next').NextConfig} */

const defaultFallbackUrl = 'https://tamudatathon.com/:path*';


module.exports = {
  reactStrictMode: true,
  basePath: "/qr",
  async rewrites() {
    return {
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: '/:path*',
          basePath: false,
          destination: process.env.FALLBACK_URL || defaultFallbackUrl
        }
      ]
    };
  }
}
