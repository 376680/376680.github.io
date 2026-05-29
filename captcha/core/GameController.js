class GameController {
    constructor() {
        this.games = [
            { name: 'pipe', class: PipePuzzleGame, title: '拖动管道，帮助蜗牛到达另一边' },
            { name: 'tool', class: ToolMatchGame, title: '选择能用此工具修复的项目' },
            { name: 'classify', class: ImageClassifyGame, title: '查找休闲场所' },
            { name: 'warping', class: Warping3DGame, title: '点击运动方式不同的物体' },
            { name: 'motion', class: MotionDetectionGame, title: '请点击运动方式不同的图形' },
            { name: 'afterimage', class: AfterimageGame, title: '请点击停止运动的位置' }
        ];
        this.selectedGames = [];
        this.currentGameIndex = 0;
        this.currentGame = null;
        this.gameArea = null;
        this.onAllSuccess = null;
        this.onFailure = null;
    }

    init(gameArea, onAllSuccess, onFailure) {
        this.gameArea = gameArea;
        this.onAllSuccess = onAllSuccess;
        this.onFailure = onFailure;
        
        // 随机选择3-5个关卡
        const numGames = 3 + Math.floor(Math.random() * 3);
        this.selectedGames = this.shuffleArray([...this.games]).slice(0, numGames);
        this.currentGameIndex = 0;
    }

    start() {
        if (this.currentGameIndex < this.selectedGames.length) {
            this.startCurrentGame();
        }
    }

    startCurrentGame() {
        const gameConfig = this.selectedGames[this.currentGameIndex];
        
        // 更新标题
        const titleEl = document.getElementById('challenge-title');
        if (titleEl) {
            titleEl.textContent = gameConfig.title;
        }
        
        // 创建游戏实例
        this.currentGame = new gameConfig.class(
            this.gameArea,
            () => this.handleGameSuccess(),
            (reason) => this.handleGameFailure(reason)
        );
        
        // 开始游戏
        this.currentGame.start();
    }

    handleGameSuccess() {
        this.currentGameIndex++;
        
        if (this.currentGame) {
            this.currentGame.destroy();
            this.currentGame = null;
        }
        
        if (this.currentGameIndex >= this.selectedGames.length) {
            // 所有关卡完成
            if (this.onAllSuccess) {
                this.onAllSuccess();
            }
        } else {
            // 进入下一关
            setTimeout(() => {
                this.startCurrentGame();
            }, 300);
        }
    }

    handleGameFailure(reason) {
        if (this.currentGame) {
            this.currentGame.destroy();
            this.currentGame = null;
        }
        
        if (this.onFailure) {
            this.onFailure(reason);
        }
    }

    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    reset() {
        if (this.currentGame) {
            this.currentGame.destroy();
            this.currentGame = null;
        }
        this.currentGameIndex = 0;
        this.selectedGames = [];
    }

    destroy() {
        this.reset();
    }
}
