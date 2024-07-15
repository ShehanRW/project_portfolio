/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  output: 'export', // For GitHub Pages deployment
  basePath: 'https://shehanrw.github.io/project_portfolio/', // Replace with your repo name if deploying to a subfolder
  assetPrefix: 'https://shehanrw.github.io/project_portfolio/',
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
  