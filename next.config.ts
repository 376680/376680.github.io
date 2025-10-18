import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
