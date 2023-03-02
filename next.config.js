/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/call",
        destination:
          "https://wyelsbzvsg74mcawahbvgylnem0eghht.lambda-url.eu-central-1.on.aws", // Proxy to Backend
      },
    ];
  },
};
