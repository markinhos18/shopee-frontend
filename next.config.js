/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['ecommerceshopnode.herokuapp.com'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
};

module.exports = nextConfig;
