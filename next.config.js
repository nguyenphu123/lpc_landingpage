const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: config.base_path !== "/" ? config.base_path : "/",
  trailingSlash: config.site.trailing_slash,
  images: {
    domains: ["res.cloudinary.com"],
  },
  optimization: {
    mergeDuplicateChunks: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        "@sentry": {
          test: /[\\/]node_modules[\\/](@sentry)[\\/]/,
          name: "@sentry",
          priority: 10,
          reuseExistingChunk: false,
        },
      };
    }

    return config;
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://lp.com.vn/",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
