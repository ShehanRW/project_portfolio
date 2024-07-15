/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  output:"export",
  basePath: '/shehanrw.github.io/project_portfolio', 
  assetPrefix: '/shehanrw.github.io/project_portfolio',
  async redirects() {
    return [
      {
        source: '/shehanrw.github.io/project_portfolio',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
  