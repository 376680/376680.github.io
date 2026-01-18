// 生活事件页面JavaScript功能

// 服务详情数据
const serviceDetails = {
  birth: {
    title: '出生与育儿',
    content: `
      <div class="service-detail">
        <h3>出生登记流程</h3>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>准备材料</h4>
              <p>准备父母身份证明、医院出生证明、家庭住址证明等必要材料</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>提交申请</h4>
              <p>在线或到当地政府办公处提交出生登记申请</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>审核材料</h4>
              <p>政府工作人员审核提交的材料</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>领取证件</h4>
              <p>审核通过后，领取出生证明和相关证件</p>
            </div>
          </div>
        </div>
        
        <h3>育儿支持服务</h3>
        <p>我们提供全方位的育儿支持服务，包括育儿补贴、健康检查、育儿指导等。</p>
      </div>
    `
  },
  education: {
    title: '教育成长',
    content: `
      <div class="service-detail">
        <h3>教育服务概览</h3>
        <p>从学前教育到高等教育，我们为所有年龄段的小鼠提供优质的教育资源和支持。</p>
        
        <h3>学生资助计划</h3>
        <div class="price-table">
          <div class="price-item">
            <span class="service-name">学前教育补贴</span>
            <span class="price">免费</span>
          </div>
          <div class="price-item">
            <span class="service-name">义务教育</span>
            <span class="price">免费</span>
          </div>
          <div class="price-item">
            <span class="service-name">高等教育奖学金</span>
            <span class="price">最高¥5000/年</span>
          </div>
        </div>
      </div>
    `
  },
  career: {
    title: '职业发展',
    content: `
      <div class="service-detail">
        <h3>职业发展支持</h3>
        <p>我们提供全方位的职业发展支持，包括就业指导、职业培训、创业支持等。</p>
        
        <h3>职业培训项目</h3>
        <ul>
          <li>奶酪制作技术培训</li>
          <li>洞穴挖掘安全培训</li>
          <li>数字营销培训</li>
          <li>管理技能培训</li>
        </ul>
      </div>
    `
  },
  marriage: {
    title: '婚姻家庭',
    content: `
      <div class="service-detail">
        <h3>婚姻登记流程</h3>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>准备材料</h4>
              <p>准备双方身份证明、单身证明、健康检查报告等</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>预约登记</h4>
              <p>在线或电话预约婚姻登记时间</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>现场登记</h4>
              <p>双方到登记处办理婚姻登记手续</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>领取证件</h4>
              <p>领取结婚证</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  health: {
    title: '健康保障',
    content: `
      <div class="service-detail">
        <h3>健康保障服务</h3>
        <p>我们提供全面的健康保障服务，包括基础医疗、专业治疗、健康管理和紧急救助。</p>
        
        <h3>医疗保险计划</h3>
        <div class="price-table">
          <div class="price-item">
            <span class="service-name">基本医疗保险</span>
            <span class="price">免费</span>
          </div>
          <div class="price-item">
            <span class="service-name">补充医疗保险</span>
            <span class="price">¥50-200/月</span>
          </div>
          <div class="price-item">
            <span class="service-name">高端医疗保险</span>
            <span class="price">¥300-1000/月</span>
          </div>
        </div>
      </div>
    `
  },
  retirement: {
    title: '退休生活',
    content: `
      <div class="service-detail">
        <h3>退休规划服务</h3>
        <p>我们提供全面的退休规划服务，帮助您规划美好的退休生活。</p>
        
        <h3>养老金计算</h3>
        <p>根据您的工作年限和缴费情况，我们可以为您计算预期的养老金金额。</p>
        
        <h3>养老服务选项</h3>
        <ul>
          <li>居家养老服务</li>
          <li>养老社区服务</li>
          <li>专业护理服务</li>
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

// 打开生活规划模态框
function openLifePlanner() {
  const modal = document.getElementById('lifePlannerModal');
  if (modal) {
    modal.style.display = 'block';
  }
}

// 关闭生活规划模态框
function closeLifePlanner() {
  const modal = document.getElementById('lifePlannerModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// 开始生活服务
function startLifeService() {
  // 这里可以添加开始服务的逻辑
  alert('开始生活服务');
  closeServiceModal();
}

// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
  const lifePlannerForm = document.getElementById('lifePlannerForm');
  if (lifePlannerForm) {
    lifePlannerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const plannerResult = document.getElementById('plannerResult');
      if (plannerResult) {
        plannerResult.style.display = 'block';
        // 这里可以添加表单处理逻辑
      }
    });
  }
  
  // 关闭模态框
  const closeButtons = document.querySelectorAll('.close, .usa-button--outline');
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      closeServiceModal();
      closeLifePlanner();
    });
  });
  
  // 点击模态框外部关闭
  window.addEventListener('click', function(e) {
    const serviceModal = document.getElementById('serviceModal');
    const lifePlannerModal = document.getElementById('lifePlannerModal');
    
    if (e.target === serviceModal) {
      closeServiceModal();
    }
    if (e.target === lifePlannerModal) {
      closeLifePlanner();
    }
  });
});