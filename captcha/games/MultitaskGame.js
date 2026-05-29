class MultitaskGame {
    constructor(container, onSuccess, onFailure) {
        this.container = container;
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
        this.isActive = false;
        this.panels = [];
        this.numbers = [0, 0, 0, 0];
        this.primeCount = 0;
        this.targetPrimes = 10; // 需要正确点击10个质数
    }

    start() {
        this.isActive = true;
        this.primeCount = 0;
        this.container.innerHTML = '';
        
        // 创建4分屏布局
        this.createPanels();
        
        // 创建进度显示
        this.createProgress();
        
        // 开始数字更新
        this.startNumberUpdates();
    }

    createPanels() {
        const container = document.createElement('div');
        container.className = 'multitask-container';
        
        for (let i = 0; i < 4; i++) {
            const panel = document.createElement('div');
            panel.className = 'task-panel';
            panel.dataset.index = i;
            panel.style.cssText = `
                border: 1px solid #d3d3d3;
                border-radius: 4px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.1s;
                background: #fafafa;
                position: relative;
            `;
            
            // 数字显示
            const numberDisplay = document.createElement('div');
            numberDisplay.className = 'task-number';
            numberDisplay.textContent = '0';
            numberDisplay.style.cssText = `
                font-size: 32px;
                font-weight: bold;
                color: #333;
                transition: all 0.1s;
            `;
            
            // 标签
            const label = document.createElement('div');
            label.className = 'task-label';
            label.textContent = `区域 ${i + 1}`;
            label.style.cssText = `
                font-size: 11px;
                color: #999;
                margin-top: 4px;
            `;
            
            panel.appendChild(numberDisplay);
            panel.appendChild(label);
            
            // 点击事件
            panel.addEventListener('click', () => this.handlePanelClick(i));
            
            container.appendChild(panel);
            this.panels.push({
                element: panel,
                numberDisplay: numberDisplay,
                isPrime: false
            });
        }
        
        this.container.appendChild(container);
    }

    createProgress() {
        const progressDiv = document.createElement('div');
        progressDiv.style.cssText = `
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 14px;
            color: #666;
            background: rgba(255,255,255,0.9);
            padding: 4px 12px;
            border-radius: 3px;
        `;
        progressDiv.id = 'multitask-progress';
        progressDiv.textContent = `已识别: ${this.primeCount}/${this.targetPrimes}`;
        this.container.appendChild(progressDiv);
    }

    startNumberUpdates() {
        // 立即更新一次
        this.updateNumbers();
        
        // 每400-800ms随机更新一个区域
        const scheduleNextUpdate = () => {
            if (!this.isActive) return;
            
            const delay = 400 + Math.random() * 400;
            setTimeout(() => {
                if (this.isActive) {
                    this.updateRandomPanel();
                    scheduleNextUpdate();
                }
            }, delay);
        };
        
        scheduleNextUpdate();
    }

    updateNumbers() {
        for (let i = 0; i < 4; i++) {
            this.updatePanelNumber(i);
        }
    }

    updateRandomPanel() {
        const panelIndex = Math.floor(Math.random() * 4);
        this.updatePanelNumber(panelIndex);
    }

    updatePanelNumber(index) {
        const panel = this.panels[index];
        const newNumber = Math.floor(Math.random() * 100) + 1;
        this.numbers[index] = newNumber;
        
        // 更新显示
        panel.numberDisplay.textContent = newNumber;
        
        // 检查是否是质数
        panel.isPrime = this.isPrime(newNumber);
        
        if (panel.isPrime) {
            // 质数高亮
            panel.element.style.borderColor = '#4CAF50';
            panel.element.style.background = '#e8f5e9';
            panel.numberDisplay.style.color = '#4CAF50';
        } else {
            // 非质数恢复普通样式
            panel.element.style.borderColor = '#d3d3d3';
            panel.element.style.background = '#fafafa';
            panel.numberDisplay.style.color = '#333';
        }
    }

    isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    handlePanelClick(index) {
        if (!this.isActive) return;
        
        const panel = this.panels[index];
        
        if (panel.isPrime) {
            // 正确点击质数
            panel.isPrime = false;
            this.primeCount++;
            
            // 更新进度
            const progressDiv = document.getElementById('multitask-progress');
            if (progressDiv) {
                progressDiv.textContent = `已识别: ${this.primeCount}/${this.targetPrimes}`;
            }
            
            // 成功反馈
            panel.element.style.background = '#4CAF50';
            panel.numberDisplay.style.color = '#fff';
            
            setTimeout(() => {
                panel.element.style.background = '#fafafa';
                panel.numberDisplay.style.color = '#333';
                panel.element.style.borderColor = '#d3d3d3';
                this.updatePanelNumber(index);
            }, 200);
            
            // 检查是否完成
            if (this.primeCount >= this.targetPrimes) {
                setTimeout(() => this.success(), 300);
            }
        } else {
            // 错误点击非质数
            this.fail('选择错误');
        }
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
