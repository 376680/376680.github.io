// 个人服务页面JavaScript功能

// 服务详情数据
const serviceDetails = {
  'basic-survival': {
    title: '基本生存保障',
    content: `
      <div class="service-detail">
        <h3>基本生存保障服务</h3>
        <p>我们为所有小鼠居民提供基本的生存保障服务，确保每只小鼠都能获得必要的生活资源。</p>
        
        <h3>服务内容</h3>
        <ul>
          <li>日常食物供应</li>
          <li>清洁水源</li>
          <li>安全的居住环境</li>
          <li>基本医疗保障</li>
        </ul>
      </div>
    `
  },
  welfare: {
    title: '福利保障',
    content: `
      <div class="service-detail">
        <h3>福利保障服务</h3>
        <p>我们提供全面的福利保障服务，帮助有需要的小鼠居民提高生活质量。</p>
        
        <h3>福利项目</h3>
        <ul>
          <li>老年小鼠补贴</li>
          <li>残疾小鼠护理</li>
          <li>单亲家庭支持</li>
          <li>紧急救助基金</li>
        </ul>
      </div>
    `
  },
  'life-support': {
    title: '生活支持',
    content: `
      <div class="service-detail">
        <h3>生活支持服务</h3>
        <p>我们提供全方位的生活支持服务，帮助居民解决生活中的各种问题。</p>
        
        <h3>支持服务内容</h3>
        <ul>
          <li>就业指导和培训</li>
          <li>教育资源分配</li>
          <li>社区活动组织</li>
          <li>心理咨询服务</li>
        </ul>
      </div>
    `
  }
};

// 打开服务详情模态框
function openServiceModal(serviceType) {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (modal && modalTitle && modalBody) {
    const serviceDetail = serviceDetails[serviceType];
    if (serviceDetail) {
      modalTitle.textContent = serviceDetail.title;
      modalBody.innerHTML = serviceDetail.content;
      modal.style.display = 'block';
    }
  }
}

// 关闭服务详情模态框
function closeServiceModal() {
  const modal = document.getElementById('serviceModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// 开始个人服务
function startPersonalService() {
  // 这里可以添加开始服务的逻辑
  alert('开始个人服务');
  closeServiceModal();
}

// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
  // 添加表单提交逻辑
});