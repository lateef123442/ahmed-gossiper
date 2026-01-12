/** @type {import('next').NextConfig} */
const nextConfig = {
  // Point to new src directory
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  experimental: {
    appDir: true,
  },
}

export default nextConfig