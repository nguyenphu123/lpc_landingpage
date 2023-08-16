const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: config.base_path !== "/" ? config.base_path : "/",
  trailingSlash: config.site.trailing_slash,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
