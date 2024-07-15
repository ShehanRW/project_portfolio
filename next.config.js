/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/project_portfolio/home',
  assetPrefix: '/project_portfolio/home/',
  transpilePackages: ['three'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
  