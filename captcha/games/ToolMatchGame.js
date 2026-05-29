class ToolMatchGame {
    constructor(container, onSuccess, onFailure) {
        this.container = container;
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
        this.isActive = false;
        this.selectedCount = 0;
        this.targetCount = 3;
    }

    start() {
        this.isActive = true;
        this.selectedCount = 0;
        this.container.innerHTML = '';
        
        // 创建游戏容器
        const gameWrapper = document.createElement('div');
        gameWrapper.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background: #f5f5f5;
        `;
        
        // 创建标题和参考工具
        const header = document.createElement('div');
        header.style.cssText = `
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        `;
        
        const title = document.createElement('span');
        title.textContent = '选择能用此工具修复的项目';
        title.style.cssText = `
            font-size: 14px;
            color: #333;
        `;
        
        const toolIcon = document.createElement('div');
        toolIcon.textContent = '🔧';
        toolIcon.style.cssText = `
            font-size: 40px;
            padding: 10px;
            background: white;
            border-radius: 8px;
            border: 2px solid #ddd;
        `;
        
        header.appendChild(title);
        header.appendChild(toolIcon);
        gameWrapper.appendChild(header);
        
        // 创建3x3网格
        const grid = document.createElement('div');
        grid.style.cssText = `
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            width: 100%;
            max-width: 300px;
        `;
        
        // 项目列表（故意模糊或不相关）
        const items = [
            { icon: '🥛', name: '牛奶盒', fixable: false },
            { icon: '🏄', name: '冲浪板', fixable: false },
            { icon: '⌚', name: '手表', fixable: false },
            { icon: '🧃', name: '果汁盒', fixable: false },
            { icon: '🚐', name: '面包车', fixable: false },
            { icon: '⏱️', name: '秒表', fixable: false },
            { icon: '🚌', name: '公交车', fixable: false },
            { icon: '⏰', name: '闹钟', fixable: false },
            { icon: '🥤', name: '饮料杯', fixable: false }
        ];
        
        items.forEach((item, index) => {
            const cell = document.createElement('div');
            cell.style.cssText = `
                aspect-ratio: 1;
                background: white;
                border: 2px solid #ddd;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s;
                position: relative;
                overflow: hidden;
            `;
            
            // 添加干扰纹理
            const noise = document.createElement('div');
            noise.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0,0,0,0.03) 2px,
                    rgba(0,0,0,0.03) 4px
                );
                pointer-events: none;
            `;
            cell.appendChild(noise);
            
            const icon = document.createElement('span');
            icon.textContent = item.icon;
            icon.style.cssText = `
                font-size: 32px;
                margin-bottom: 4px;
                filter: blur(0.5px);
            `;
            
            const name = document.createElement('span');
            name.textContent = item.name;
            name.style.cssText = `
                font-size: 10px;
                color: #666;
            `;
            
            cell.appendChild(icon);
            cell.appendChild(name);
            
            cell.onclick = () => {
                if (!this.isActive) return;
                
                // 无论选哪个都是错的
                cell.style.borderColor = '#e74c3c';
                cell.style.background = '#ffebee';
                
                setTimeout(() => {
                    this.fail('选择错误');
                }, 300);
            };
            
            grid.appendChild(cell);
        });
        
        gameWrapper.appendChild(grid);
        
        // 添加进度提示
        const hint = document.createElement('div');
        hint.textContent = `已选择: ${this.selectedCount}/${this.targetCount}`;
        hint.style.cssText = `
            margin-top: 15px;
            font-size: 12px;
            color: #666;
        `;
        gameWrapper.appendChild(hint);
        
        this.container.appendChild(gameWrapper);
    }

    success() {
        this.cleanup();
        if (this.onSuccess) this.onSuccess();
    }

    fail(reason) {
        this.cleanup();
        if (this.onFailure) this.onFailure(reason);
    }

    cleanup() {
        this.isActive = false;
    }

    destroy() {
        this.cleanup();
    }
}
