/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'raw.githubusercontent.com',
      'firebasestorage.googleapis.com',
      'play-lh.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
