const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: config.base_path !== "/" ? config.base_path : "/",
  trailingSlash: config.site.trailing_slash,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/derjssgq9/**',
      },
    ],
  },
};

module.exports = nextConfig;
