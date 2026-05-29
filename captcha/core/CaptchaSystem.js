class CaptchaSystem {
    constructor() {
        this.gameController = new GameController();
        
        // UI元素
        this.checkbox = document.getElementById('verify-checkbox');
        this.spinner = this.checkbox.querySelector('.spinner');
        this.checkmark = this.checkbox.querySelector('.checkmark');
        this.checkboxArea = document.getElementById('checkbox-area');
        this.challengeArea = document.getElementById('challenge-area');
        this.errorArea = document.getElementById('error-area');
        this.successArea = document.getElementById('success-area');
        this.gameContainer = document.getElementById('game-container');
        
        this.init();
    }

    init() {
        // 绑定复选框点击
        this.checkbox.addEventListener('click', () => {
            this.onCheckboxClick();
        });
        
        // 绑定刷新按钮
        document.getElementById('refresh-btn').addEventListener('click', () => {
            this.restart();
        });
        
        // 绑定重试按钮
        document.getElementById('retry-btn').addEventListener('click', () => {
            this.hideError();
            this.startChallenge();
        });
        
        // 绑定跳过按钮（假按钮，点击也失败）
        document.getElementById('skip-btn').addEventListener('click', () => {
            this.handleFailure('无法跳过验证');
        });
        
        // 绑定菜单按钮（无功能）
        document.getElementById('menu-btn').addEventListener('click', () => {
            // 菜单按钮无实际功能
        });
    }

    onCheckboxClick() {
        if (this.checkbox.classList.contains('loading') || 
            this.checkbox.classList.contains('checked')) {
            return;
        }
        
        // 显示加载状态
        this.checkbox.classList.add('loading');
        this.spinner.classList.remove('hidden');
        
        // 模拟验证延迟
        setTimeout(() => {
            this.checkbox.classList.remove('loading');
            this.spinner.classList.add('hidden');
            
            // 显示挑战
            this.startChallenge();
        }, 800);
    }

    startChallenge() {
        // 隐藏复选框区域，显示挑战区域
        this.checkboxArea.classList.add('hidden');
        this.challengeArea.classList.remove('hidden');
        this.errorArea.classList.add('hidden');
        
        // 初始化游戏控制器
        this.gameController.init(
            this.gameContainer,
            () => this.handleSuccess(),
            (reason) => this.handleFailure(reason)
        );
        
        // 开始游戏
        this.gameController.start();
    }

    handleSuccess() {
        // 显示成功状态
        this.challengeArea.classList.add('hidden');
        this.successArea.classList.remove('hidden');
        
        // 勾选复选框
        this.checkbox.classList.add('checked');
        this.checkmark.classList.remove('hidden');
        
        // 触发成功回调（如果有）
        setTimeout(() => {
            if (window.parent !== window) {
                window.parent.postMessage({ type: 'captcha-success' }, '*');
            }
        }, 500);
    }

    handleFailure(reason) {
        // 显示错误（使用嘲讽消息作为错误信息）
        this.showError(reason);
    }

    showError(reason) {
        this.challengeArea.classList.add('hidden');
        this.errorArea.classList.remove('hidden');
        
        const errorMessage = document.getElementById('error-message');
        // 显示正常的验证失败提示
        errorMessage.textContent = '请重新验证';
    }

    hideError() {
        this.errorArea.classList.add('hidden');
    }

    restart() {
        // 重置所有状态
        this.checkbox.classList.remove('checked', 'loading');
        this.spinner.classList.add('hidden');
        this.checkmark.classList.add('hidden');
        
        this.checkboxArea.classList.remove('hidden');
        this.challengeArea.classList.add('hidden');
        this.errorArea.classList.add('hidden');
        this.successArea.classList.add('hidden');
        
        // 重置游戏控制器
        this.gameController.reset();
        
        // 清空游戏区域
        this.gameContainer.innerHTML = '';
    }
}

// 初始化系统
document.addEventListener('DOMContentLoaded', () => {
    window.captchaSystem = new CaptchaSystem();
});
