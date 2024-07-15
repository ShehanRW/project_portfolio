/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
          basePath: '/project_portfolio/home',
          assetPrefix: '/project_portfolio/home/',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  