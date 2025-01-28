/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Optional, but ensures more robust code
    images: {
      domains: ['assets.nobroker.in'], // Ensure this domain is added
    },
  };
  
  module.exports = nextConfig;
  