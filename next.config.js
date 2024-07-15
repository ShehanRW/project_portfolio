/** @type {import('next').NextConfig} */
const nextConfig = {
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
  