import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  
  // Serve Storybook static build
  async rewrites() {
    return [
      {
        source: '/storybook-static',
        destination: '/storybook-static/index.html',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
