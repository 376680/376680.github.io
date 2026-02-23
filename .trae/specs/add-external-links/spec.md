# 添加外部链接规格说明

## Why
用户希望在主页的服务卡片区域添加6个外部链接，指向小鼠帝国相关的其他政府网站，包括情报局、警务署、信息自由法案、中央通讯、旧版政府网和通缉犯页面。

## What Changes
- 在index.html的"所有主题和服务"区域添加6个新的服务卡片
- 每个卡片链接到对应的外部网站
- 保持与现有卡片一致的视觉风格

## Impact
- 文件: index.html
- 区域: "所有主题和服务"卡片组

## ADDED Requirements
### Requirement: 添加外部链接卡片
系统应在主页服务区域添加6个新的服务卡片，每个卡片包含：
- 图标（使用Font Awesome）
- 标题
- 简介描述
- 链接到指定外部URL

#### 外部链接列表
1. **小鼠帝国对外情报局 (MESIS)**
   - URL: https://376680.github.io/sis/
   - 图标: fa-user-secret
   - 简介: 小鼠帝国唯一合法对外情报机构

2. **小鼠帝国警务署**
   - URL: https://376680.github.io/mspd/
   - 图标: fa-shield-alt
   - 简介: "保护和服务"

3. **小鼠帝国信息自由法案**
   - URL: https://376680.github.io/foia/
   - 图标: fa-file-alt
   - 简介: 小鼠帝国信息自由法的基本功能是确保知情的小鼠公民，这对民主社会的运作至关重要

4. **小鼠帝国中央通讯**
   - URL: https://376680.github.io/news/
   - 图标: fa-newspaper
   - 简介: （无简介，显示简短描述）

5. **小鼠帝国政府网（旧版）**
   - URL: https://376680.github.io/old/
   - 图标: fa-history
   - 简介: 小鼠帝国政府官方网站，为所有帝国公民提供便捷的政府服务信息和在线办理

6. **通缉犯：卢昱书**
   - URL: https://376680.github.io/mspd/wanted-luyushu.html
   - 图标: fa-exclamation-triangle
   - 简介: 特级通缉犯 · 卢昱书

#### Scenario: 卡片显示
- **WHEN** 用户访问主页
- **THEN** 应看到6个新的服务卡片
- **AND** 卡片样式与现有卡片一致
- **AND** 点击卡片可跳转到对应外部网站
