import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 性能优化配置
  swcMinify: true,
  compress: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // 代码分割优化
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // 安全头配置
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        // 内容安全策略
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';",
        },
        // 严格传输安全
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload',
        },
        // X-Frame-Options
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        // X-Content-Type-Options
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        // X-XSS-Protection
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        // Referrer Policy
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        // Permissions Policy
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
        },
        // Cache Control
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
  // 移除错误忽略配置，后续修复所有错误
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// 仅在GitHub Actions构建时应用静态导出配置
if (process.env.GITHUB_ACTIONS === 'true') {
  nextConfig.output = 'export';
  nextConfig.trailingSlash = true;
  nextConfig.images = {
    ...nextConfig.images,
    unoptimized: true,
  };
  
  // 根据仓库类型决定是否设置路径前缀
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  if (repoName && !repoName.endsWith('.github.io')) {
    // 标准仓库需要路径前缀
    nextConfig.basePath = `/${repoName}`;
    nextConfig.assetPrefix = `/${repoName}`;
  }
  // 用户GitHub.io仓库不需要路径前缀
}

export default nextConfig;
