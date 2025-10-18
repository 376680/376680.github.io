#!/bin/bash

# 小鼠帝国政府网 - 快速部署脚本
# 使用方法: ./deploy.sh "提交信息"

echo "🐭 小鼠帝国政府网 - 部署脚本"
echo "================================"

# 检查是否提供了提交信息
if [ -z "$1" ]; then
    echo "❌ 错误: 请提供提交信息"
    echo "使用方法: ./deploy.sh \"你的提交信息\""
    exit 1
fi

COMMIT_MESSAGE="$1"

echo "📝 提交信息: $COMMIT_MESSAGE"
echo ""

# 检查Git状态
echo "🔍 检查Git状态..."
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ 没有需要提交的更改"
    exit 0
fi

echo "📋 发现以下更改:"
git status --short
echo ""

# 添加所有更改
echo "➕ 添加所有更改..."
git add .

# 提交更改
echo "💾 提交更改..."
git commit -m "$COMMIT_MESSAGE"

# 推送到远程仓库
echo "🚀 推送到GitHub..."
git push origin main

echo ""
echo "✅ 部署完成！"
echo "🌐 网站将在几分钟后更新"
echo "📊 查看部署状态: https://github.com/$(git config remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')/actions"
echo ""
echo "🎉 小鼠帝国万岁！"