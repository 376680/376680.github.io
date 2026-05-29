class ImageClassifyGame {
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
        
        // 创建标题
        const title = document.createElement('div');
        title.textContent = '查找休闲场所';
        title.style.cssText = `
            font-size: 16px;
            color: #fff;
            background: #4a7c7e;
            padding: 12px 20px;
            border-radius: 6px;
            margin-bottom: 15px;
            width: 100%;
            text-align: center;
        `;
        gameWrapper.appendChild(title);
        
        // 创建3x3网格
        const grid = document.createElement('div');
        grid.style.cssText = `
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            width: 100%;
            max-width: 280px;
        `;
        
        // 图片项目（使用emoji代替实际图片）
        const items = [
            { icon: '🏗️', name: '工地', isLeisure: false },
            { icon: '🚜', name: '越野车', isLeisure: false },
            { icon: '🚙', name: '吉普车', isLeisure: false },
            { icon: '🛋️', name: '沙发', isLeisure: false },
            { icon: '📦', name: '包裹', isLeisure: false },
            { icon: '🪑', name: '椅子', isLeisure: false },
            { icon: '🚛', name: '卡车', isLeisure: false },
            { icon: '🛏️', name: '床', isLeisure: false },
            { icon: '🏎️', name: '赛车', isLeisure: false }
        ];
        
        items.forEach((item, index) => {
            const cell = document.createElement('div');
            cell.style.cssText = `
                aspect-ratio: 1;
                background: white;
                border: 2px solid #ddd;
                border-radius: 4px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s;
                position: relative;
                overflow: hidden;
            `;
            
            // 添加干扰纹理（类似伪基百科的扭曲效果）
            const noise = document.createElement('div');
            noise.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: 
                    repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(74,124,126,0.05) 3px, rgba(74,124,126,0.05) 6px),
                    repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(74,124,126,0.05) 3px, rgba(74,124,126,0.05) 6px);
                pointer-events: none;
            `;
            cell.appendChild(noise);
            
            // 添加波浪扭曲效果
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(74,124,126,0.03) 2px,
                    rgba(74,124,126,0.03) 4px
                );
                pointer-events: none;
                transform: skewX(-5deg);
            `;
            cell.appendChild(wave);
            
            const icon = document.createElement('span');
            icon.textContent = item.icon;
            icon.style.cssText = `
                font-size: 36px;
                margin-bottom: 2px;
                filter: blur(0.3px);
                opacity: 0.9;
            `;
            
            cell.appendChild(icon);
            
            cell.onclick = () => {
                if (!this.isActive) return;
                
                // 无论选哪个都是错的
                cell.style.borderColor = '#e74c3c';
                cell.style.background = '#ffebee';
                
                setTimeout(() => {
                    this.fail('选择错误');
                }, 200);
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
