class MotionDetectionGame {
    constructor(container, onSuccess, onFailure) {
        this.container = container;
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
        this.canvas = null;
        this.ctx = null;
        this.balls = [];
        this.animationId = null;
        this.targetBallIndex = -1;
        this.isActive = false;
    }

    start() {
        this.isActive = true;
        this.container.innerHTML = '';
        
        // 创建画布
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'canvas-game';
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        // 创建12个小球
        this.createBalls();
        
        // 开始动画
        this.animate();
        
        // 绑定点击事件
        this.canvas.addEventListener('click', this.handleClick.bind(this));
    }

    createBalls() {
        const ballCount = 12;
        const radius = 18;
        this.targetBallIndex = Math.floor(Math.random() * ballCount);
        
        for (let i = 0; i < ballCount; i++) {
            const ball = {
                x: Math.random() * (this.canvas.width - radius * 4) + radius * 2,
                y: Math.random() * (this.canvas.height - radius * 4) + radius * 2,
                radius: radius,
                isTarget: i === this.targetBallIndex,
                baseX: 0,
                baseY: 0,
                phase: Math.random() * Math.PI * 2,
                speed: 0.03 + Math.random() * 0.02,
                amplitude: 30 + Math.random() * 20,
                targetSpeedX: (Math.random() - 0.5) * 8,
                targetSpeedY: (Math.random() - 0.5) * 8,
            };
            ball.baseX = ball.x;
            ball.baseY = ball.y;
            this.balls.push(ball);
        }
    }

    animate() {
        if (!this.isActive) return;
        
        this.ctx.fillStyle = '#fafafa';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        const time = Date.now() / 1000;
        
        this.balls.forEach((ball) => {
            if (ball.isTarget) {
                ball.x += ball.targetSpeedX;
                ball.y += ball.targetSpeedY;
                
                if (ball.x - ball.radius < 0 || ball.x + ball.radius > this.canvas.width) {
                    ball.targetSpeedX *= -1;
                }
                if (ball.y - ball.radius < 0 || ball.y + ball.radius > this.canvas.height) {
                    ball.targetSpeedY *= -1;
                }
            } else {
                ball.x = ball.baseX + Math.sin(time * ball.speed * 10 + ball.phase) * ball.amplitude;
                ball.y = ball.baseY + Math.cos(time * ball.speed * 8 + ball.phase) * ball.amplitude;
            }
            
            this.drawBall(ball);
        });
        
        this.animationId = requestAnimationFrame(this.animate.bind(this));
    }

    drawBall(ball) {
        this.ctx.beginPath();
        this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#666';
        this.ctx.fill();
        
        this.ctx.beginPath();
        this.ctx.arc(ball.x - 4, ball.y - 4, ball.radius / 3, 0, Math.PI * 2);
        this.ctx.fillStyle = '#999';
        this.ctx.fill();
    }

    handleClick(e) {
        if (!this.isActive) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        const targetBall = this.balls[this.targetBallIndex];
        const distance = Math.sqrt(
            Math.pow(clickX - targetBall.x, 2) + 
            Math.pow(clickY - targetBall.y, 2)
        );
        
        if (distance <= targetBall.radius * 1.5) {
            this.success();
        } else {
            let hitOther = false;
            for (let ball of this.balls) {
                if (!ball.isTarget) {
                    const d = Math.sqrt(
                        Math.pow(clickX - ball.x, 2) + 
                        Math.pow(clickY - ball.y, 2)
                    );
                    if (d <= ball.radius * 1.5) {
                        hitOther = true;
                        break;
                    }
                }
            }
            
            if (hitOther) {
                this.fail('选择错误');
            }
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
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.balls = [];
    }

    destroy() {
        this.cleanup();
        if (this.canvas) {
            this.canvas.removeEventListener('click', this.handleClick);
        }
    }
}
