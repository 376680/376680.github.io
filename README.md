# 小鼠帝国政府网 🐭

一个纪念班级创意梗"低盐大鼠"的政府门户网站，从课堂黑板画发展到数字化帝国纪念馆。

## 🌟 项目特色

- **完整的政府网站体验**：模仿USA.GOV风格，提供严肃的官方界面
- **丰富的帝国文化**：奶酪经济体系、猫头鹰威胁预警、身份芯片ID
- **响应式设计**：完美适配手机、平板和桌面设备
- **现代技术栈**：Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（推荐方式）
npx next dev --port 3001

# 或者使用端口3000（如果未被占用）
npx next dev

# 在浏览器中打开 http://localhost:3001
```

### 预览生产构建

```bash
# 构建项目
npm run build

# 预览静态网站
npm start

# 访问 http://localhost:3000
```

### 构建和部署

```bash
# 构建项目
npm run build

# 静态导出（用于GitHub Pages）
npm run export
```

## 🐛 故障排除

### 常见问题

#### 1. 端口被占用错误
```
Error: listen EADDRINUSE: address already in use 127.0.0.1:3000
```

**解决方案**：
```bash
# 使用不同端口
npx next dev --port 3001

# 或者停止占用端口的进程
pkill -f "node.*3000"
```

#### 2. 模块找不到错误
```
Error: Cannot find module './447.js'
```

**解决方案**：
```bash
# 清理缓存并重新构建
rm -rf .next out node_modules/.cache
npm install
npm run build
```

#### 3. 构建失败
**解决方案**：
```bash
# 清理并重新安装
rm -rf .next out node_modules
npm install
npm run build
```

## 📱 页面结构

- **首页** (`/`) - 政府门户主页，包含快捷入口和最新公告
- **关于帝国** (`/about`) - 帝国历史、政府结构、核心价值
- **政府福利** (`/benefits`) - 基础奶酪保障、幼鼠奶粉补贴等
- **移民入籍** (`/immigration`) - 外来小鼠入籍流程和证件办理
- **服务中心** (`/services`) - 税收、旅行、工作、企业开办服务

## 🛠️ 技术栈

- **框架**: Next.js 15 with App Router
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **组件**: shadcn/ui (New York style)
- **图标**: Lucide React
- **构建**: 静态导出支持

## 📦 GitHub Pages 部署

### 自动部署设置

1. **Fork 此仓库**到你的GitHub账户
2. **重命名仓库**为 `mouse-empire-gov`
3. **启用GitHub Pages**：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

4. **推送代码**到main分支，GitHub Actions会自动部署

### 手动部署

```bash
# 构建并导出静态文件
npm run build

# 生成的静态文件在 out/ 目录
# 将 out/ 目录内容上传到GitHub Pages
```

## ⚙️ 配置说明

### GitHub Pages 配置

项目已配置以下设置以适配GitHub Pages：

- `output: 'export'` - 静态导出
- `trailingSlash: true` - 确保路由正确
- `images.unoptimized: true` - 禁用图片优化
- `basePath: '/mouse-empire-gov'` - 适配子目录
- `assetPrefix: '/mouse-empire-gov'` - 资源路径前缀

### 自定义仓库名称

如果你的仓库名称不是 `mouse-empire-gov`，需要修改：

1. **Next.js配置** (`next.config.ts`)：
   ```typescript
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   ```

2. **GitHub Actions** (`.github/workflows/deploy.yml`)：
   ```yaml
   # 仓库名称会自动获取，无需修改
   ```

## 🎨 帝国特色

### 核心概念

- **低盐大鼠**：独立思考、不随波逐流的象征
- **奶酪经济**：以奶酪为基础的帝国经济体系
- **猫头鹰威胁**：帝国面临的主要安全威胁
- **身份芯片ID**：未来感的公民身份认证

### 政府部门

- **帝国总务管理局 (IGSA)**：日常运营管理
- **帝国福利局**：公民福利保障
- **帝国财政部**：奶酪贡品征收
- **帝国监察院**：监督和投诉处理
- **帝国文化部**：文化传承保护

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🎯 项目起源

> 从一篇阅读理解中的"高盐小鼠"，到黑板上的"低盐大鼠"，再到全班参与的小鼠帝国创作，这个网站记录了一段珍贵的班级友谊和集体创造力。

**致所有参与小鼠帝国建设的同学们！** 🎊

---

*Built with ❤️ and lots of cheese* 🧀

## 📞 获取帮助

如果遇到问题：

1. 查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 详细部署指南
2. 查看 [CHECKLIST.md](./CHECKLIST.md) 部署检查清单
3. 检查GitHub Actions的详细日志
4. 在GitHub Issues中寻求帮助

**记住：这是你们班级的创意作品，享受开发和部署的过程！** 🐭✨