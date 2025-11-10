/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: true,
      },
    ];
  },
  output: 'export',
  basePath: '/Delphi2025',
  assetPrefix: '/Delphi2025',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
