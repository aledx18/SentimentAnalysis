/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://sentiment-analysis-liart.vercel.app/api/:path*'
      }
    ]
  }
}

module.exports = nextConfig
