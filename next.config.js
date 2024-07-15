/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  output: 'export', // For GitHub Pages deployment
  basePath: '/your-repo', // Replace with your repo name if deploying to a subfolder
  assetPrefix: '/your-repo',
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
  