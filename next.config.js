/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_APP_STRAPI_URL: process.env.NEXT_APP_STRAPI_URL,
  }
}

module.exports = nextConfig
