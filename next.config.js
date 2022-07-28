/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['ecommerceshopnode.herokuapp.com'],
  },
  // pageExtensions: ['index.tsx', 'index.ts', 'index.jsx', 'index.js']
};

module.exports = nextConfig;
