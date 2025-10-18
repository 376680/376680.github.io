#!/bin/bash

echo "🐭 启动小鼠帝国政府网 - 简化版本"
echo "================================"

# 检查端口是否被占用
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  端口3000被占用，正在停止..."
    pkill -f "node.*3000" || true
    sleep 2
fi

# 启动开发服务器
echo "🚀 启动开发服务器..."
echo "📱 访问地址: http://localhost:3000"
echo "🛑 按 Ctrl+C 停止服务器"
echo ""

# 使用Next.js内置的开发服务器
npx next dev --port 3000