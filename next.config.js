/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  async redirects() {
    return [
      {
        source: '/openings/15min',
        destination: 'https://fantastical.app/andrei00stoica-OGIi/15-min-call',
        permanent: true,
      },
      {
        source: '/openings/30min',
        destination: 'https://fantastical.app/andrei00stoica-OGIi/30-min-call',
        permanent: true,
      },
      {
        source: '/openings/1hr',
        destination: 'https://fantastical.app/andrei00stoica-OGIi/1-hour-call',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
