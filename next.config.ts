import path from 'node:path';
import type { Configuration as WebpackConfig } from 'webpack';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Sass
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    additionalData: `
    @use "styles/_settings" as *;
    @use "styles/_mixins"   as *;
  `,
  },

  // Webpack alias
  webpack: (config: WebpackConfig) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;
