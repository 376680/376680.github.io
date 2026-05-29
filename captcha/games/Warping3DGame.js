class Warping3DGame {
    constructor(container, onSuccess, onFailure) {
        this.container = container;
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
        this.canvas = null;
        this.ctx = null;
        this.objects = [];
        this.targetIndex = -1;
        this.isActive = false;
        this.animationId = null;
        this.time = 0;
    }

    start() {
        this.isActive = true;
        this.time = 0;
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
        title.textContent = '点击运动方式不同的物体';
        title.style.cssText = `
            font-size: 16px;
            color: #fff;
            background: #00838f;
            padding: 12px 20px;
            border-radius: 6px;
            margin-bottom: 15px;
            width: 100%;
            text-align: center;
        `;
        gameWrapper.appendChild(title);
        
        // 创建画布容器
        const canvasContainer = document.createElement('div');
        canvasContainer.style.cssText = `
            position: relative;
            width: 280px;
            height: 280px;
            background: linear-gradient(45deg, #1a237e 25%, #00838f 25%, #00838f 50%, #1a237e 50%, #1a237e 75%, #00838f 75%);
            background-size: 80px 80px;
            border-radius: 8px;
            overflow: hidden;
        `;
        
        // 创建画布
        this.canvas = document.createElement('canvas');
        this.canvas.width = 280;
        this.canvas.height = 280;
        this.canvas.style.cssText = `
            cursor: pointer;
            display: block;
        `;
        
        this.ctx = this.canvas.getContext('2d');
        
        // 初始化物体
        this.initObjects();
        
        // 绑定点击事件
        this.canvas.addEventListener('click', this.handleClick.bind(this));
        
        canvasContainer.appendChild(this.canvas);
        gameWrapper.appendChild(canvasContainer);
        this.container.appendChild(gameWrapper);
        
        // 开始动画
        this.animate();
    }

    initObjects() {
        const count = 5;
        this.targetIndex = Math.floor(Math.random() * count);
        
        const positions = [
            { x: 70, y: 70 },
            { x: 210, y: 70 },
            { x: 140, y: 140 },
            { x: 70, y: 210 },
            { x: 210, y: 210 }
        ];
        
        for (let i = 0; i < count; i++) {
            this.objects.push({
                x: positions[i].x,
                y: positions[i].y,
                baseX: positions[i].x,
                baseY: positions[i].y,
                size: 45,
                isTarget: i === this.targetIndex,
                phase: Math.random() * Math.PI * 2,
                warpPhase: Math.random() * Math.PI * 2,
                rotation: Math.random() * Math.PI * 2,
                // 普通物体参数
                orbitRadius: 15 + Math.random() * 10,
                orbitSpeed: 0.02 + Math.random() * 0.02,
                // 目标物体参数（不同运动模式）
                driftX: (Math.random() - 0.5) * 2,
                driftY: (Math.random() - 0.5) * 2,
                warpSpeed: 0.05 + Math.random() * 0.03
            });
        }
    }

    animate() {
        if (!this.isActive) return;
        
        this.time += 1;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制棋盘格背景
        this.drawCheckerboard();
        
        // 绘制物体
        this.objects.forEach((obj, index) => {
            this.updateObject(obj);
            this.drawWarpedObject(obj);
        });
        
        this.animationId = requestAnimationFrame(this.animate.bind(this));
    }

    drawCheckerboard() {
        const size = 40;
        for (let y = 0; y < this.canvas.height; y += size) {
            for (let x = 0; x < this.canvas.width; x += size) {
                const isDark = ((x / size) + (y / size)) % 2 === 0;
                this.ctx.fillStyle = isDark ? '#1a237e' : '#00838f';
                this.ctx.fillRect(x, y, size, size);
            }
        }
    }

    updateObject(obj) {
        if (obj.isTarget) {
            // 目标物体：线性漂移 + 快速扭曲
            obj.x += obj.driftX;
            obj.y += obj.driftY;
            obj.warpPhase += obj.warpSpeed;
            
            // 边界反弹
            if (obj.x < 40 || obj.x > 240) obj.driftX *= -1;
            if (obj.y < 40 || obj.y > 240) obj.driftY *= -1;
        } else {
            // 普通物体：圆周运动 + 慢速扭曲
            obj.phase += obj.orbitSpeed;
            obj.x = obj.baseX + Math.cos(obj.phase) * obj.orbitRadius;
            obj.y = obj.baseY + Math.sin(obj.phase) * obj.orbitRadius;
            obj.warpPhase += 0.02;
        }
        
        obj.rotation += 0.03;
    }

    drawWarpedObject(obj) {
        this.ctx.save();
        this.ctx.translate(obj.x, obj.y);
        this.ctx.rotate(obj.rotation);
        
        // 创建扭曲效果
        const warpAmount = Math.sin(obj.warpPhase) * 0.3;
        const scaleX = 1 + warpAmount;
        const scaleY = 1 - warpAmount * 0.5;
        
        this.ctx.scale(scaleX, scaleY);
        
        // 绘制3D扭曲形状（扇形/贝壳状）
        this.ctx.beginPath();
        
        // 使用渐变创建3D效果
        const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, obj.size);
        gradient.addColorStop(0, '#f8bbd0');
        gradient.addColorStop(0.5, '#f48fb1');
        gradient.addColorStop(1, '#ec407a');
        
        this.ctx.fillStyle = gradient;
        
        // 绘制扭曲的扇形
        const segments = 8;
        for (let i = 0; i < segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            const nextAngle = ((i + 1) / segments) * Math.PI * 2;
            
            const r1 = obj.size * (0.7 + Math.sin(obj.warpPhase + i) * 0.3);
            const r2 = obj.size * (0.7 + Math.sin(obj.warpPhase + i + 1) * 0.3);
            
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(Math.cos(angle) * r1, Math.sin(angle) * r1);
            this.ctx.lineTo(Math.cos(nextAngle) * r2, Math.sin(nextAngle) * r2);
            this.ctx.closePath();
            this.ctx.fill();
        }
        
        // 添加高光效果
        this.ctx.beginPath();
        this.ctx.ellipse(-10, -10, 8, 4, Math.PI / 4, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        this.ctx.fill();
        
        // 添加阴影
        this.ctx.beginPath();
        this.ctx.ellipse(5, 15, 12, 6, 0, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        this.ctx.fill();
        
        this.ctx.restore();
    }

    handleClick(e) {
        if (!this.isActive) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // 检查是否点击到目标物体
        const targetObj = this.objects[this.targetIndex];
        const distance = Math.sqrt(
            Math.pow(clickX - targetObj.x, 2) +
            Math.pow(clickY - targetObj.y, 2)
        );
        
        if (distance <= targetObj.size + 10) {
            this.success();
        } else {
            // 检查是否点击到其他物体
            let hitOther = false;
            for (let i = 0; i < this.objects.length; i++) {
                if (i !== this.targetIndex) {
                    const obj = this.objects[i];
                    const d = Math.sqrt(
                        Math.pow(clickX - obj.x, 2) +
                        Math.pow(clickY - obj.y, 2)
                    );
                    if (d <= obj.size + 10) {
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
    }

    destroy() {
        this.cleanup();
        if (this.canvas) {
            this.canvas.removeEventListener('click', this.handleClick);
        }
    }
}
