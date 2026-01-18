// 商业服务页面JavaScript功能

// 服务详情数据
const serviceDetails = {
  startup: {
    title: '创业服务',
    content: `
      <div class="service-detail">
        <h3>创业流程</h3>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>创业咨询</h4>
              <p>获取专业的创业建议和指导，了解市场需求和行业趋势</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>注册企业</h4>
              <p>完成企业名称核准、注册登记等手续</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>获取资质</h4>
              <p>申请相关行业资质和许可证</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>开业运营</h4>
              <p>开始企业运营，获取政府支持和补贴</p>
            </div>
          </div>
        </div>
        
        <h3>创业支持服务</h3>
        <p>我们提供全方位的创业支持服务，包括创业培训、资金支持、办公场地等。</p>
      </div>
    `
  },
  operations: {
    title: '运营服务',
    content: `
      <div class="service-detail">
        <h3>企业运营支持</h3>
        <p>我们提供全方位的企业运营支持，帮助企业提高效率和降低成本。</p>
        
        <h3>运营服务内容</h3>
        <ul>
          <li>财务和税务服务</li>
          <li>人力资源管理</li>
          <li>市场营销支持</li>
          <li>供应链管理</li>
        </ul>
      </div>
    `
  },
  expansion: {
    title: '企业扩张',
    content: `
      <div class="service-detail">
        <h3>企业扩张服务</h3>
        <p>我们提供全方位的企业扩张服务，帮助企业实现增长和发展。</p>
        
        <h3>扩张服务内容</h3>
        <ul>
          <li>融资支持</li>
          <li>市场拓展</li>
          <li>技术升级</li>
          <li>国际化支持</li>
        </ul>
      </div>
    `
  }
};

// 平滑滚动到服务部分
function scrollToServices() {
  const servicesSection = document.querySelector('.services-overview');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
}

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

// 开始商业服务
function startBusinessService() {
  // 这里可以添加开始服务的逻辑
  alert('开始商业服务');
  closeServiceModal();
}

// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
  // 添加表单提交逻辑
});