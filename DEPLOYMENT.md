# GitHub Pages 部署指南 🚀

本指南将帮助你将"小鼠帝国政府网"部署到GitHub Pages。

## 📋 部署前准备

### 1. 创建GitHub仓库

1. 在GitHub上创建新仓库
2. 建议仓库名称：`mouse-empire-gov`
3. 设置为Public（免费用户需要公开仓库才能使用GitHub Pages）
4. **不要**初始化README、.gitignore或license（我们已经有这些文件了）

### 2. 本地Git设置

```bash
# 如果还没有初始化Git仓库
git init

# 添加远程仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/mouse-empire-gov.git

# 添加所有文件
git add .

# 首次提交
git commit -m "Initial commit: 小鼠帝国政府网"

# 推送到main分支
git push -u origin main
```

## ⚙️ 启用GitHub Pages

### 方法1：通过GitHub界面（推荐）

1. 进入你的GitHub仓库
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在"Source"部分选择 **GitHub Actions**

### 方法2：通过命令行

```bash
# 启用GitHub Pages（需要GitHub CLI）
gh api repos/:owner/:repo/pages -X POST -f source[branch]=gh-pages
```

## 🔄 自动部署流程

一旦你推送代码到`main`分支，GitHub Actions会自动：

1. **构建项目**：运行`npm run build`
2. **静态导出**：生成静态文件到`out/`目录
3. **部署到GitHub Pages**：将静态文件部署到GitHub Pages

### 部署状态查看

1. 进入仓库的 **Actions** 标签
2. 查看"Deploy to GitHub Pages"工作流状态
3. 部署完成后，会在Actions页面看到绿色的✅

## 🌐 访问你的网站

部署完成后，你的网站将在以下地址可用：

```
https://YOUR_USERNAME.github.io/mouse-empire-gov/
```

## 🔧 技术实现细节

### Next.js 静态导出配置

本项目使用Next.js 15的静态导出功能：

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',           // 静态导出模式
  trailingSlash: true,        // 添加尾部斜杠
  images: {
    unoptimized: true,        // 禁用图片优化
  },
  basePath: process.env.GITHUB_ACTIONS ? '/mouse-empire-gov' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/mouse-empire-gov' : '',
};
```

### GitHub Actions 工作流

自动化部署包含以下步骤：

1. **环境检测**：自动识别仓库名称
2. **动态配置**：根据仓库名称调整basePath
3. **构建优化**：设置生产环境变量
4. **静态导出**：生成纯静态文件
5. **自动部署**：推送到GitHub Pages

### 关键特性

- ✅ **零配置部署**：推送代码即自动上线
- ✅ **路径自适应**：支持任意仓库名称
- ✅ **静态优化**：快速加载，SEO友好
- ✅ **响应式设计**：适配所有设备
- ✅ **开发友好**：本地开发无影响

### 构建命令说明

```bash
npm run build    # Next.js构建 + 静态导出（一次性完成）
npm start        # 本地预览：npx serve@latest out
npm run dev      # 开发服务器：实时重载
```

## 🔧 自定义配置

### 更改仓库名称

如果你的仓库名称不是`mouse-empire-gov`：

1. **无需手动修改** - GitHub Actions会自动检测仓库名称
2. 项目会自动适配新的路径
3. 构建时会动态设置正确的basePath

### 自定义域名

如果你有自己的域名：

1. 在仓库Settings → Pages中配置自定义域名
2. 更新`next.config.ts`中的`basePath`和`assetPrefix`
3. 重新部署

### 本地开发与生产环境差异

| 特性 | 本地开发 | 生产环境 |
|------|----------|----------|
| basePath | 空（根路径） | `/仓库名称` |
| 资源路径 | 相对路径 | 绝对路径 |
| 构建命令 | `npm run dev` | `npm run build` |
| 服务器 | Next.js dev | GitHub Pages |

## 🐛 常见问题

### 1. 部署失败 - "next start does not work with output export"

**问题**：Actions显示错误 `Error: "next start" does not work with "output: export" configuration`
**解决方案**：
- ✅ **已修复**：项目现在使用 `npx serve@latest out` 替代 `next start`
- 确保 `package.json` 中的 start 命令正确配置

### 2. 部署失败

**问题**：Actions显示红色❌
**解决方案**：
- 检查Actions日志中的错误信息
- 确保仓库是Public的
- 检查是否启用了GitHub Pages权限

### 3. 页面404

**问题**：访问网站显示404错误
**解决方案**：
- 等待几分钟让DNS传播
- 检查仓库名称是否正确
- 确保推送到了`main`分支

### 4. 样式丢失

**问题**：网站显示但样式不正确
**解决方案**：
- 检查`basePath`配置
- 确保静态文件路径正确
- 查看浏览器控制台的错误信息
- ✅ **已优化**：静态资源（CSS/JS）自动添加basePath前缀

### 5. 导航链接不工作

**问题**：点击导航链接跳转到错误页面
**解决方案**：
- 这是正常现象，因为使用的是静态导出
- 导航链接使用绝对路径，在GitHub Pages中需要包含仓库名称
- ✅ **已优化**：可以考虑使用Next.js Link组件自动处理basePath

### 6. 图片不显示

**问题**：图片资源无法加载
**解决方案**：
- 这是正常的，因为我们禁用了图片优化以适配静态导出
- 使用相对路径引用图片

## 📝 本地开发

部署后，你仍然可以本地开发：

```bash
# 本地开发服务器
npm run dev

# 本地构建测试
npm run build
```

## 🔄 更新网站

更新网站很简单：

1. 修改代码
2. 提交更改：
   ```bash
   git add .
   git commit -m "更新内容"
   git push origin main
   ```
3. GitHub Actions会自动重新部署

## 📊 监控部署

- **Actions页面**：查看部署状态和日志
- **Pages页面**：查看部署历史
- **网站访问**：使用Google Analytics等工具监控访问量

## 🎉 完成！

恭喜！你的"小鼠帝国政府网"现在已经部署到GitHub Pages，全世界都可以访问这个充满创意的班级纪念网站了！

---

*如果遇到问题，请查看GitHub Actions的详细日志，通常能找到解决方案。* 🐭🧀