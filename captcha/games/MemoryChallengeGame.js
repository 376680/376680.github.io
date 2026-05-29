class MemoryChallengeGame {
    constructor(container, onSuccess, onFailure) {
        this.container = container;
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
        this.sequence = [];
        this.userSequence = [];
        this.sequenceLength = 20;
        this.flashDuration = 100; // 100ms
        this.isActive = false;
        this.isPlaying = false;
        this.gridCells = [];
        this.gridSize = 4; // 4x4 grid
    }

    start() {
        this.isActive = true;
        this.sequence = [];
        this.userSequence = [];
        this.container.innerHTML = '';
        
        // 生成随机序列
        this.generateSequence();
        
        // 创建网格
        this.createGrid();
        
        // 显示准备信息
        this.showMessage('准备记忆序列...', 1500, () => {
            // 开始播放序列
            this.playSequence();
        });
    }

    generateSequence() {
        for (let i = 0; i < this.sequenceLength; i++) {
            this.sequence.push(Math.floor(Math.random() * (this.gridSize * this.gridSize)));
        }
    }

    createGrid() {
        const grid = document.createElement('div');
        grid.className = 'grid-game';
        grid.style.cssText = `
            display: grid;
            grid-template-columns: repeat(${this.gridSize}, 1fr);
            gap: 10px;
            padding: 20px;
            width: 100%;
            height: 100%;
        `;
        
        this.gridCells = [];
        for (let i = 0; i < this.gridSize * this.gridSize; i++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.index = i;
            cell.style.cssText = `
                background: rgba(0, 243, 255, 0.1);
                border: 2px solid rgba(0, 243, 255, 0.3);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.1s;
            `;
            
            cell.addEventListener('click', () => this.handleCellClick(i));
            
            grid.appendChild(cell);
            this.gridCells.push(cell);
        }
        
        this.container.appendChild(grid);
    }

    showMessage(text, duration, callback) {
        const msg = document.createElement('div');
        msg.textContent = text;
        msg.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.5rem;
            color: #00f3ff;
            text-shadow: 0 0 20px #00f3ff;
            background: rgba(0, 0, 0, 0.8);
            padding: 20px 40px;
            border: 1px solid #00f3ff;
            border-radius: 8px;
            z-index: 100;
        `;
        this.container.appendChild(msg);
        
        setTimeout(() => {
            msg.remove();
            if (callback) callback();
        }, duration);
    }

    async playSequence() {
        this.isPlaying = true;
        
        // 禁用点击
        this.gridCells.forEach(cell => {
            cell.style.pointerEvents = 'none';
            cell.style.opacity = '0.5';
        });
        
        // 显示进度
        const progressDiv = document.createElement('div');
        progressDiv.style.cssText = `
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1rem;
            color: #ff00ff;
        `;
        this.container.appendChild(progressDiv);
        
        // 播放序列
        for (let i = 0; i < this.sequence.length; i++) {
            if (!this.isActive) return;
            
            progressDiv.textContent = `序列: ${i + 1}/${this.sequenceLength}`;
            
            const cellIndex = this.sequence[i];
            await this.flashCell(cellIndex);
            
            // 间隔时间
            await this.delay(50);
        }
        
        progressDiv.remove();
        
        // 启用点击
        this.isPlaying = false;
        this.gridCells.forEach(cell => {
            cell.style.pointerEvents = 'auto';
            cell.style.opacity = '1';
        });
        
        this.showMessage('轮到你了！', 800);
    }

    flashCell(index) {
        return new Promise(resolve => {
            const cell = this.gridCells[index];
            
            // 高亮
            cell.style.background = '#00f3ff';
            cell.style.boxShadow = '0 0 30px #00f3ff';
            cell.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                cell.style.background = 'rgba(0, 243, 255, 0.1)';
                cell.style.boxShadow = 'none';
                cell.style.transform = 'scale(1)';
                resolve();
            }, this.flashDuration);
        });
    }

    handleCellClick(index) {
        if (!this.isActive || this.isPlaying) return;
        
        const expectedIndex = this.sequence[this.userSequence.length];
        
        if (index === expectedIndex) {
            // 正确
            this.userSequence.push(index);
            
            // 视觉反馈
            const cell = this.gridCells[index];
            cell.style.background = '#00ff88';
            cell.style.boxShadow = '0 0 20px #00ff88';
            setTimeout(() => {
                cell.style.background = 'rgba(0, 243, 255, 0.1)';
                cell.style.boxShadow = 'none';
            }, 150);
            
            // 检查是否完成
            if (this.userSequence.length === this.sequence.length) {
                setTimeout(() => this.success(), 300);
            }
        } else {
            // 错误
            const cell = this.gridCells[index];
            cell.classList.add('wrong');
            cell.style.background = '#ff0044';
            cell.style.borderColor = '#ff0044';
            
            // 显示正确答案
            const correctCell = this.gridCells[expectedIndex];
            correctCell.style.background = '#00ff88';
            correctCell.style.boxShadow = '0 0 30px #00ff88';
            
            setTimeout(() => {
                this.fail(`记忆错误！第${this.userSequence.length + 1}个位置错了`);
            }, 500);
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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
        this.isPlaying = false;
    }

    destroy() {
        this.cleanup();
    }
}
