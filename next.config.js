/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove assetPrefix for Netlify - it can cause issues with static assets
  // assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
  basePath: '',
  // Ensure static generation works properly
  experimental: {
    // Enable static exports
    esmExternals: false,
  },
  // Disable image optimization for static export
  generateEtags: false,
}

module.exports = nextConfig
