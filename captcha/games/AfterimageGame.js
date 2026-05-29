class AfterimageGame {
    constructor(container, onSuccess, onFailure) {
        this.container = container;
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
        this.canvas = null;
        this.ctx = null;
        this.isActive = false;
        this.animationId = null;
        this.target = null;
        this.trail = [];
        this.gamePhase = 'moving';
    }

    start() {
        this.isActive = true;
        this.gamePhase = 'moving';
        this.trail = [];
        this.container.innerHTML = '';
        
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'canvas-game';
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.createTarget();
        
        this.canvas.addEventListener('click', this.handleClick.bind(this));
        
        this.animate();
        
        // 3-5秒后停止
        const stopTime = 3000 + Math.random() * 2000;
        setTimeout(() => {
            if (this.isActive) {
                this.stopTarget();
            }
        }, stopTime);
    }

    createTarget() {
        const margin = 50;
        this.target = {
            x: margin + Math.random() * (this.canvas.width - margin * 2),
            y: margin + Math.random() * (this.canvas.height - margin * 2),
            radius: 20,
            speedX: (Math.random() - 0.5) * 15,
            speedY: (Math.random() - 0.5) * 15,
            visible: true,
            stopPosition: null
        };
    }

    animate() {
        if (!this.isActive) return;
        
        this.ctx.fillStyle = '#fafafa';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.gamePhase === 'moving') {
            this.target.x += this.target.speedX;
            this.target.y += this.target.speedY;
            
            const margin = this.target.radius;
            if (this.target.x < margin || this.target.x > this.canvas.width - margin) {
                this.target.speedX *= -1;
                this.target.x = Math.max(margin, Math.min(this.canvas.width - margin, this.target.x));
            }
            if (this.target.y < margin || this.target.y > this.canvas.height - margin) {
                this.target.speedY *= -1;
                this.target.y = Math.max(margin, Math.min(this.canvas.height - margin, this.target.y));
            }
            
            this.trail.push({
                x: this.target.x,
                y: this.target.y,
                time: Date.now()
            });
            
            const maxTrailLength = 12;
            if (this.trail.length > maxTrailLength) {
                this.trail.shift();
            }
            
            this.drawTrail();
            this.drawTarget();
        } else if (this.gamePhase === 'stopped') {
            this.drawTrail();
        }
        
        this.animationId = requestAnimationFrame(this.animate.bind(this));
    }

    drawTrail() {
        const now = Date.now();
        const trailDuration = 400;
        
        this.trail.forEach((point) => {
            const age = now - point.time;
            if (age < trailDuration) {
                const alpha = (1 - age / trailDuration) * 0.4;
                const size = this.target.radius * (1 - age / trailDuration);
                
                this.ctx.beginPath();
                this.ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(102, 102, 102, ${alpha})`;
                this.ctx.fill();
            }
        });
        
        this.trail = this.trail.filter(point => now - point.time < trailDuration);
    }

    drawTarget() {
        if (!this.target.visible) return;
        
        const { x, y, radius } = this.target;
        
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#666';
        this.ctx.fill();
        
        this.ctx.beginPath();
        this.ctx.arc(x - 4, y - 4, radius / 3, 0, Math.PI * 2);
        this.ctx.fillStyle = '#999';
        this.ctx.fill();
    }

    stopTarget() {
        if (!this.isActive || this.gamePhase !== 'moving') return;
        
        this.gamePhase = 'stopped';
        this.target.visible = false;
        this.target.stopPosition = { x: this.target.x, y: this.target.y };
    }

    handleClick(e) {
        if (!this.isActive || this.gamePhase !== 'stopped') {
            if (this.gamePhase === 'moving') {
                this.fail('点击过早');
            }
            return;
        }
        
        const rect = this.canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        const distance = Math.sqrt(
            Math.pow(clickX - this.target.stopPosition.x, 2) +
            Math.pow(clickY - this.target.stopPosition.y, 2)
        );
        
        if (distance <= 50) {
            this.success();
        } else {
            this.fail('位置偏差');
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
        this.gamePhase = 'ended';
        
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    destroy() {
        this.cleanup();
        if (this.canvas) {
            this.canvas.removeEventListener('click', this.handleClick);
        }
    }
}
