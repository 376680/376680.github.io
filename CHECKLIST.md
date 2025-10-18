# 🚀 GitHub Pages 部署检查清单

## ✅ 部署前检查

### 代码准备
- [ ] 所有页面都能正常显示
- [ ] 导航链接正确工作
- [ ] 响应式设计在不同设备上正常
- [ ] 图片和图标正确显示
- [ ] 没有控制台错误

### 项目配置
- [ ] `next.config.ts` 配置正确
- [ ] `package.json` 包含构建脚本
- [ ] `.gitignore` 排除不必要文件
- [ ] GitHub Actions 工作流文件存在

### Git仓库
- [ ] 仓库名称设置（建议：`mouse-empire-gov`）
- [ ] 仓库设置为Public
- [ ] 远程仓库地址正确
- [ ] 本地Git配置正确

## ⚙️ GitHub设置

### GitHub Pages
- [ ] 进入仓库 Settings → Pages
- [ ] Source 选择 "GitHub Actions"
- [ ] Pages权限已启用

### GitHub Actions权限
- [ ] 仓库Settings → Actions → General
- [ ] Actions permissions: "Allow all actions"
- [ ] Workflow permissions: "Read and write permissions"
- [ ] "Allow GitHub Actions to create and approve pull requests" 已启用

## 🔄 部署流程

### 自动部署
1. [ ] 推送代码到main分支
2. [ ] 查看Actions页面工作流状态
3. [ ] 等待部署完成（通常2-3分钟）
4. [ ] 访问部署的网站

### 手动触发
1. [ ] 进入Actions页面
2. [ ] 选择"Deploy to GitHub Pages"工作流
3. [ ] 点击"Run workflow"
4. [ ] 等待部署完成

## 🌐 部署后验证

### 网站功能
- [ ] 首页正确加载
- [ ] 所有页面可以访问
- [ ] 导航菜单正常工作
- [ ] 样式和布局正确
- [ ] 移动端适配正常

### 技术检查
- [ ] 没有404错误
- [ ] 控制台没有错误信息
- [ ] 网络请求正常加载
- [ ] 页面加载速度合理

## 🔧 故障排除

### 常见问题检查
- [ ] 仓库名称与配置匹配
- [ ] 推送到了正确的分支（main）
- [ ] GitHub Actions权限正确
- [ ] 没有语法错误或构建失败

### 日志检查
- [ ] 查看GitHub Actions日志
- [ ] 检查构建错误信息
- [ ] 查看部署步骤详情
- [ ] 确认静态文件生成成功

## 📱 测试清单

### 浏览器测试
- [ ] Chrome 浏览器测试
- [ ] Firefox 浏览器测试
- [ ] Safari 浏览器测试（如果有Mac）
- [ ] Edge 浏览器测试

### 设备测试
- [ ] 桌面端测试（1920x1080）
- [ ] 平板端测试（768x1024）
- [ ] 手机端测试（375x667）
- [ ] 大屏幕测试（2560x1440）

### 功能测试
- [ ] 点击所有导航链接
- [ ] 测试所有按钮和交互
- [ ] 检查表单和输入（如果有）
- [ ] 验证响应式菜单

## 🎉 部署成功！

### 完成后任务
- [ ] 分享网站链接给同学
- [ ] 在班级群里宣布网站上线
- [ ] 收集反馈和建议
- [ ] 计划后续更新内容

### 维护计划
- [ ] 定期检查网站状态
- [ ] 根据反馈更新内容
- [ ] 添加新的功能和页面
- [ ] 备份重要数据和代码

---

## 📞 需要帮助？

如果遇到问题，请：
1. 查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 详细指南
2. 检查GitHub Actions日志
3. 搜索GitHub Pages文档
4. 在GitHub Issues中寻求帮助

**记住：这是你们班级的创意作品，享受这个过程！** 🐭🧀✨