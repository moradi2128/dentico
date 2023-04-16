/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
  env: {
    WP_GRAPHQL_URL: process.env.WP_GRAPHQL_URL,
  },
};

module.exports = nextConfig;
