const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.chillax.vn",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "chillax.hatbuinho.me",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "chillax.vn",
        port: "",
        pathname: "/admin/assets/**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
};
module.exports = nextConfig;
