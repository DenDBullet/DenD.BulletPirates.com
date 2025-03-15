/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/booking', // Use the correct public-facing URL
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
