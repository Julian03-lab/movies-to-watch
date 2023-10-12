/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "placehold.co",
      "image.tmdb.org",
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
