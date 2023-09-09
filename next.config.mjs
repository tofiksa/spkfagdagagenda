/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  experimental: {
    appDir: true,
    fontLoader: true, // This enables Next.js to handle font loading
  },
}

export default nextConfig
