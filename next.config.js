/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  // basePath: '/shehanrw.github.io/project_portfolio', 
  // assetPrefix: '/shehanrw.github.io/project_portfolio',
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
  