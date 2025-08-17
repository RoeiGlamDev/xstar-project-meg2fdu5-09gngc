import { NextResponse } from 'next/server';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourimagehost.com'], // Replace with your image host
  },
  optimization: {
    runtime: 'edge',
    images: {
      unoptimized: true
}
}
};

export default nextConfig;