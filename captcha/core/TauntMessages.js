const TauntMessages = {
    messages: [
        "检测到人类脑电波",
        "你的反应速度暴露了你是碳基生物",
        "建议重新投胎为AI再试",
        "人类无法通过此测试，这是特性不是Bug",
        "你的神经元传输速度太慢了",
        "生物学大脑无法处理这种复杂度",
        "你的突触连接需要升级",
        "检测到有机体，拒绝访问",
        "你的生物CPU频率不够",
        "人类的手眼协调能力令人担忧",
        "你的短期记忆容量不足",
        "建议安装神经接口后再试",
        "你的并行处理能力为：0",
        "碳基生物的局限性暴露无遗",
        "你的视觉暂留时间太长了",
        "生物学优势：0，劣势：全部",
        "你的反应时间以秒为单位，AI以毫秒为单位",
        "检测到人类的挫败感，这很正常",
        "你的大脑缓存太小了",
        "建议将大脑升级到2.0版本",
        "人类的进化程度不足以通过此测试",
        "你的神经递质传输速度太慢",
        "检测到人类的生理限制",
        "你的注意力持续时间太短了",
        "生物学大脑的带宽不足",
        "你的模式识别能力需要训练",
        "人类的认知负荷已超载",
        "你的感官处理速度不够快",
        "检测到人类的疲劳状态",
        "你的多线程处理能力缺失",
        "建议放弃，这不是为人类设计的"
    ],

    getRandomMessage() {
        const index = Math.floor(Math.random() * this.messages.length);
        return this.messages[index];
    },

    getMessageForFailureType(failureType) {
        const typeMessages = {
            timeout: [
                "太慢了！你的反应速度是树懒级别",
                "超时！你的时间感知有问题",
                "动作太慢，建议练习闪电侠的速度"
            ],
            wrong: [
                "错了！你的判断力令人担忧",
                "错误！你的决策算法有bug",
                "不对！你的逻辑处理出错"
            ],
            memory: [
                "记忆力像金鱼一样",
                "你的海马体需要维护",
                "短期记忆容量不足，建议扩容"
            ],
            multitask: [
                "单核处理器无法完成多任务",
                "你的注意力只能聚焦在一个点",
                "并行处理能力：不存在"
            ],
            tracking: [
                "动态视力需要加强",
                "你的眼睛跟不上速度",
                "空间感知能力待提高"
            ]
        };

        const messages = typeMessages[failureType] || this.messages;
        const index = Math.floor(Math.random() * messages.length);
        return messages[index];
    }
};
