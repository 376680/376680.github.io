class ReactionTestGame {
    constructor(container, onSuccess, onFailure) {
        this.container = container;
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
        this.combo = 0;
        this.targetCombo = 10;
        this.isActive = false;
        this.targetElement = null;
        this.timeoutId = null;
        this.gameArea = null;
        this.comboBar = null;
        this.comboCounter = null;
    }

    start() {
        this.isActive = true;
        this.combo = 0;
        this.container.innerHTML = '';
        
        this.gameArea = document.createElement('div');
        this.gameArea.style.cssText = `
            width: 100%;
            height: 100%;
            position: relative;
            cursor: crosshair;
            background: #fafafa;
        `;
        this.container.appendChild(this.gameArea);
        
        this.createComboUI();
        
        setTimeout(() => {
            if (this.isActive) {
                this.spawnTarget();
            }
        }, 1000);
    }

    createComboUI() {
        this.comboCounter = document.createElement('div');
        this.comboCounter.className = 'combo-counter';
        this.comboCounter.textContent = `${this.combo}/${this.targetCombo}`;
        this.gameArea.appendChild(this.comboCounter);
        
        const comboBarContainer = document.createElement('div');
        comboBarContainer.className = 'combo-bar';
        this.comboBar = document.createElement('div');
        this.comboBar.className = 'combo-fill';
        this.comboBar.style.width = '0%';
        comboBarContainer.appendChild(this.comboBar);
        this.gameArea.appendChild(comboBarContainer);
    }

    spawnTarget() {
        if (!this.isActive) return;
        
        if (this.targetElement) {
            this.targetElement.remove();
            this.targetElement = null;
        }
        
        this.targetElement = document.createElement('div');
        this.targetElement.className = 'reaction-target';
        
        const margin = 60;
        const maxX = this.gameArea.clientWidth - margin * 2;
        const maxY = this.gameArea.clientHeight - margin * 2;
        const x = margin + Math.random() * maxX;
        const y = margin + Math.random() * maxY;
        
        this.targetElement.style.left = x + 'px';
        this.targetElement.style.top = y + 'px';
        
        this.targetElement.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            this.handleHit();
        });
        
        this.gameArea.appendChild(this.targetElement);
        
        const displayTime = 50 + Math.random() * 50;
        
        this.timeoutId = setTimeout(() => {
            if (this.targetElement && this.isActive) {
                this.targetElement.remove();
                this.targetElement = null;
                this.fail('未命中目标');
            }
        }, displayTime);
        
        this.gameArea.onmousedown = (e) => {
            if (e.target === this.gameArea) {
                this.fail('点击错误');
            }
        };
    }

    handleHit() {
        if (!this.isActive) return;
        
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        
        if (this.targetElement) {
            this.targetElement.remove();
            this.targetElement = null;
        }
        
        this.combo++;
        this.updateComboUI();
        
        if (this.combo >= this.targetCombo) {
            setTimeout(() => this.success(), 200);
        } else {
            setTimeout(() => {
                if (this.isActive) {
                    this.spawnTarget();
                }
            }, 100 + Math.random() * 150);
        }
    }

    updateComboUI() {
        this.comboCounter.textContent = `${this.combo}/${this.targetCombo}`;
        const progress = (this.combo / this.targetCombo) * 100;
        this.comboBar.style.width = progress + '%';
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
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        if (this.targetElement) {
            this.targetElement.remove();
            this.targetElement = null;
        }
        this.gameArea = null;
    }

    destroy() {
        this.cleanup();
    }
}
