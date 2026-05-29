class PipePuzzleGame {
    constructor(container, onSuccess, onFailure) {
        this.container = container;
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
        this.gridSize = 4;
        this.cellSize = 60;
        this.pipes = [];
        this.snailPos = { x: 0, y: 2 };
        this.targetPos = { x: 3, y: 2 };
        this.isActive = false;
        this.selectedPipe = null;
    }

    start() {
        this.isActive = true;
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
        title.textContent = '拖动管道，帮助蜗牛到达另一边';
        title.style.cssText = `
            font-size: 14px;
            color: #333;
            margin-bottom: 15px;
            text-align: center;
        `;
        gameWrapper.appendChild(title);
        
        // 创建游戏区域
        const gameArea = document.createElement('div');
        gameArea.style.cssText = `
            position: relative;
            width: ${this.cellSize * this.gridSize}px;
            height: ${this.cellSize * this.gridSize}px;
            background: #2c3e50;
            border: 3px solid #34495e;
            border-radius: 8px;
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
            background-image: 
                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px);
            pointer-events: none;
        `;
        gameArea.appendChild(noise);
        
        // 初始化管道
        this.initPipes();
        
        // 渲染管道
        this.renderPipes(gameArea);
        
        // 添加蜗牛
        this.renderSnail(gameArea);
        
        // 添加目标
        this.renderTarget(gameArea);
        
        gameWrapper.appendChild(gameArea);
        
        // 添加验证按钮
        const verifyBtn = document.createElement('button');
        verifyBtn.textContent = '验证';
        verifyBtn.style.cssText = `
            margin-top: 15px;
            padding: 10px 40px;
            background: #4285f4;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        `;
        verifyBtn.onclick = () => this.checkSolution();
        gameWrapper.appendChild(verifyBtn);
        
        this.container.appendChild(gameWrapper);
    }

    initPipes() {
        // 管道类型: 0=直管(水平), 1=直管(垂直), 2=弯管(┐), 3=弯管(┌), 4=弯管(└), 5=弯管(┘)
        const pipeTypes = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
        
        for (let y = 0; y < this.gridSize; y++) {
            for (let x = 0; x < this.gridSize; x++) {
                // 起点和终点不放管道
                if ((x === this.snailPos.x && y === this.snailPos.y) ||
                    (x === this.targetPos.x && y === this.targetPos.y)) {
                    this.pipes.push({
                        x, y,
                        type: -1,
                        rotation: 0
                    });
                    continue;
                }
                
                const type = pipeTypes[Math.floor(Math.random() * pipeTypes.length)];
                this.pipes.push({
                    x, y,
                    type,
                    rotation: Math.floor(Math.random() * 4) * 90
                });
            }
        }
    }

    renderPipes(container) {
        this.pipes.forEach(pipe => {
            if (pipe.type === -1) return;
            
            const pipeEl = document.createElement('div');
            pipeEl.style.cssText = `
                position: absolute;
                width: ${this.cellSize - 4}px;
                height: ${this.cellSize - 4}px;
                left: ${pipe.x * this.cellSize + 2}px;
                top: ${pipe.y * this.cellSize + 2}px;
                cursor: pointer;
                transition: transform 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            // 创建管道图形
            const svg = this.createPipeSVG(pipe.type);
            svg.style.cssText = `
                width: 100%;
                height: 100%;
                transform: rotate(${pipe.rotation}deg);
                transition: transform 0.3s;
            `;
            pipeEl.appendChild(svg);
            
            // 点击旋转
            pipeEl.onclick = () => {
                if (!this.isActive) return;
                pipe.rotation = (pipe.rotation + 90) % 360;
                svg.style.transform = `rotate(${pipe.rotation}deg)`;
            };
            
            container.appendChild(pipeEl);
        });
    }

    createPipeSVG(type) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 60 60');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', '#95a5a6');
        path.setAttribute('stroke-width', '12');
        path.setAttribute('stroke-linecap', 'round');
        
        switch(type) {
            case 0: // 水平直管
                path.setAttribute('d', 'M5,30 L55,30');
                break;
            case 1: // 垂直直管
                path.setAttribute('d', 'M30,5 L30,55');
                break;
            case 2: // 弯管 ┐
                path.setAttribute('d', 'M30,55 L30,30 L5,30');
                break;
            case 3: // 弯管 ┌
                path.setAttribute('d', 'M30,55 L30,30 L55,30');
                break;
            case 4: // 弯管 └
                path.setAttribute('d', 'M30,5 L30,30 L55,30');
                break;
            case 5: // 弯管 ┘
                path.setAttribute('d', 'M30,5 L30,30 L5,30');
                break;
        }
        
        svg.appendChild(path);
        return svg;
    }

    renderSnail(container) {
        const snail = document.createElement('div');
        snail.textContent = '🐌';
        snail.style.cssText = `
            position: absolute;
            width: ${this.cellSize}px;
            height: ${this.cellSize}px;
            left: ${this.snailPos.x * this.cellSize}px;
            top: ${this.snailPos.y * this.cellSize}px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            z-index: 10;
        `;
        container.appendChild(snail);
    }

    renderTarget(container) {
        const target = document.createElement('div');
        target.style.cssText = `
            position: absolute;
            width: ${this.cellSize - 10}px;
            height: ${this.cellSize - 10}px;
            left: ${this.targetPos.x * this.cellSize + 5}px;
            top: ${this.targetPos.y * this.cellSize + 5}px;
            background: radial-gradient(circle, #3498db, #2980b9);
            border-radius: 50%;
            box-shadow: 0 0 15px #3498db;
            z-index: 5;
        `;
        container.appendChild(target);
    }

    checkSolution() {
        if (!this.isActive) return;
        
        // 这是一个不可能完成的谜题，所以总是失败
        this.fail('路径不通');
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
