// 旅游服务页面JavaScript功能

// 服务详情数据
const serviceDetails = {
  passport: {
    title: '护照申请服务',
    content: `
      <div class="service-detail">
        <h3>护照申请流程</h3>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>准备材料</h4>
              <p>准备身份证明、照片、申请表格等必要材料</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>提交申请</h4>
              <p>在线或现场提交护照申请材料</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>缴纳费用</h4>
              <p>支付护照申请费用，可选择加急服务</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>等待处理</h4>
              <p>等待护照制作完成，可选择邮寄或自取</p>
            </div>
          </div>
        </div>
        
        <h3>服务费用</h3>
        <div class="price-table">
          <div class="price-item">
            <span class="service-name">标准护照（成人）</span>
            <span class="price">¥200</span>
          </div>
          <div class="price-item">
            <span class="service-name">标准护照（儿童）</span>
            <span class="price">¥150</span>
          </div>
          <div class="price-item">
            <span class="service-name">加急服务</span>
            <span class="price">+¥100</span>
          </div>
          <div class="price-item">
            <span class="service-name">紧急加急</span>
            <span class="price">+¥200</span>
          </div>
        </div>
        
        <h3>所需材料</h3>
        <ul class="required-documents">
          <li>有效身份证明原件及复印件</li>
          <li>近期免冠彩色照片2张</li>
          <li>填写完整的护照申请表</li>
          <li>户口本原件及复印件</li>
          <li>现有护照（如为更新申请）</li>
        </ul>
      </div>
    `
  },
  'minor-travel': {
    title: '未成年人旅行服务',
    content: `
      <div class="service-detail">
        <h3>未成年人旅行证件</h3>
        <div class="service-categories">
          <div class="category-card">
            <h4>儿童护照</h4>
            <p>专为未成年人设计的护照，有效期较短，需要定期更新</p>
            <ul>
              <li>适用于16岁以下儿童</li>
              <li>有效期为5年</li>
              <li>需要父母双方同意</li>
            </ul>
          </div>
          <div class="category-card">
            <h4>旅行同意书</h4>
            <p>当未成年人与一方父母或他人旅行时需要的法律文件</p>
            <ul>
              <li>证明旅行已获得监护人同意</li>
              <li>包含旅行详细信息和联系方式</li>
              <li>需要公证认证</li>
            </ul>
          </div>
        </div>
        
        <h3>监护要求</h3>
        <div class="guardian-requirements">
          <div class="requirement-item">
            <i class="fas fa-user-check"></i>
            <div>
              <h4>父母同意</h4>
              <p>未成年人旅行需要父母或法定监护人的书面同意</p>
            </div>
          </div>
          <div class="requirement-item">
            <i class="fas fa-file-alt"></i>
            <div>
              <h4>监护证明</h4>
              <p>提供有效的监护关系证明文件</p>
            </div>
          </div>
          <div class="requirement-item">
            <i class="fas fa-phone"></i>
            <div>
              <h4>紧急联系</h4>
              <p>提供监护人紧急联系方式和授权信息</p>
            </div>
          </div>
        </div>
        
        <h3>特殊注意事项</h3>
        <div class="special-notices">
          <div class="notice warning">
            <i class="fas fa-exclamation-triangle"></i>
            <p>未成年人护照申请必须由父母或法定监护人陪同办理</p>
          </div>
          <div class="notice info">
            <i class="fas fa-info-circle"></i>
            <p>建议提前至少6周申请，以确保有足够时间处理</p>
          </div>
        </div>
      </div>
    `
  },
  visa: {
    title: '入境签证服务',
    content: `
      <div class="service-detail">
        <h3>签证类型</h3>
        <div class="visa-types">
          <div class="visa-card">
            <div class="visa-icon">
              <i class="fas fa-camera"></i>
            </div>
            <h4>旅游签证</h4>
            <p>适用于来小鼠帝国观光旅游的外国游客</p>
            <div class="visa-details">
              <span class="duration">有效期：30-90天</span>
              <span class="fee">费用：¥500</span>
            </div>
          </div>
          <div class="visa-card">
            <div class="visa-icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <h4>商务签证</h4>
            <p>适用于来小鼠帝国进行商务活动的外国人士</p>
            <div class="visa-details">
              <span class="duration">有效期：30-180天</span>
              <span class="fee">费用：¥800</span>
            </div>
          </div>
          <div class="visa-card">
            <div class="visa-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h4>学生签证</h4>
            <p>适用于来小鼠帝国留学的外国学生</p>
            <div class="visa-details">
              <span class="duration">有效期：1-4年</span>
              <span class="fee">费用：¥1000</span>
            </div>
          </div>
          <div class="visa-card">
            <div class="visa-icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <h4>工作签证</h4>
            <p>适用于来小鼠帝国工作的外国人士</p>
            <div class="visa-details">
              <span class="duration">有效期：1-3年</span>
              <span class="fee">费用：¥1200</span>
            </div>
          </div>
        </div>
        
        <h3>申请流程</h3>
        <div class="application-process">
          <div class="process-step">
            <div class="step-icon">
              <i class="fas fa-file-alt"></i>
            </div>
            <div class="step-info">
              <h4>在线申请</h4>
              <p>填写在线签证申请表，上传所需材料</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-icon">
              <i class="fas fa-credit-card"></i>
            </div>
            <div class="step-info">
              <h4>缴纳费用</h4>
              <p>支付签证申请费用，费用根据签证类型而定</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-icon">
              <i class="fas fa-calendar-check"></i>
            </div>
            <div class="step-info">
              <h4>预约面试</h4>
              <p>根据需要预约签证面试时间</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-icon">
              <i class="fas fa-passport"></i>
            </div>
            <div class="step-info">
              <h4>获得签证</h4>
              <p>签证获批后，护照将寄回给您</p>
            </div>
          </div>
        </div>
        
        <h3>所需材料</h3>
        <div class="required-materials">
          <div class="material-category">
            <h4>基本材料</h4>
            <ul>
              <li>有效护照原件及复印件</li>
              <li>签证申请表</li>
              <li>近期证件照片</li>
              <li>行程安排</li>
            </ul>
          </div>
          <div class="material-category">
            <h4>支持材料</h4>
            <ul>
              <li>财务证明</li>
              <li>住宿预订</li>
              <li>往返机票</li>
              <li>邀请函（如适用）</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  'domestic-travel': {
    title: '境内旅行服务',
    content: `
      <div class="service-detail">
        <h3>境内交通</h3>
        <div class="transport-options">
          <div class="transport-card">
            <div class="transport-icon">
              <i class="fas fa-train"></i>
            </div>
            <h4>铁路交通</h4>
            <p>小鼠帝国高速铁路网络覆盖全国主要城市</p>
            <ul>
              <li>高速列车：时速300公里</li>
              <li>城际列车：连接主要城市</li>
              <li>旅游专列：观光列车服务</li>
            </ul>
          </div>
          <div class="transport-card">
            <div class="transport-icon">
              <i class="fas fa-bus"></i>
            </div>
            <h4>公路交通</h4>
            <p>完善的公路网络和长途客运服务</p>
            <ul>
              <li>高速公路：连接各大城市</li>
              <li>长途客车：经济实惠的选择</li>
              <li>租车服务：自驾游首选</li>
            </ul>
          </div>
          <div class="transport-card">
            <div class="transport-icon">
              <i class="fas fa-plane"></i>
            </div>
            <h4>航空交通</h4>
            <p>国内航班连接偏远地区和主要城市</p>
            <ul>
              <li>定期航班：主要城市间</li>
              <li>包机服务：定制化出行</li>
              <li>直升机服务：特殊地区</li>
            </ul>
          </div>
        </div>
        
        <h3>旅行安全</h3>
        <div class="safety-guidelines">
          <div class="safety-category">
            <h4>基本安全</h4>
            <ul>
              <li>随身携带身份证明</li>
              <li>告知家人行程安排</li>
              <li>购买旅行保险</li>
              <li>了解当地紧急联系方式</li>
            </ul>
          </div>
          <div class="safety-category">
            <h4>健康安全</h4>
            <ul>
              <li>携带常用药品</li>
              <li>了解当地医疗资源</li>
              <li>注意饮食卫生</li>
              <li>保持充足休息</li>
            </ul>
          </div>
          <div class="safety-category">
            <h4>财产安全</h4>
            <ul>
              <li>分散存放现金和证件</li>
              <li>使用酒店保险箱</li>
              <li>避免携带大量现金</li>
              <li>备份重要文件</li>
            </ul>
          </div>
        </div>
        
        <h3>紧急联系</h3>
        <div class="emergency-contacts">
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="contact-info">
              <h4>24小时热线</h4>
              <p>1-844-小鼠-政府</p>
              <span class="contact-desc">旅行支持和紧急援助</span>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-ambulance"></i>
            </div>
            <div class="contact-info">
              <h4>医疗急救</h4>
              <p>911</p>
              <span class="contact-desc">医疗紧急情况</span>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div class="contact-info">
              <h4>警察</h4>
              <p>911</p>
              <span class="contact-desc">安全和法律问题</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  'outbound-travel': {
    title: '出境旅行服务',
    content: `
      <div class="service-detail">
        <h3>出境手续</h3>
        <div class="exit-procedures">
          <div class="procedure-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>检查证件</h4>
              <p>确保护照有效期至少6个月，检查签证要求</p>
            </div>
          </div>
          <div class="procedure-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>健康准备</h4>
              <p>了解目的地健康要求，准备必要的疫苗接种</p>
            </div>
          </div>
          <div class="procedure-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>海关申报</h4>
              <p>了解海关规定，准备必要的申报文件</p>
            </div>
          </div>
          <div class="procedure-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>安全检查</h4>
              <p>通过安全检查，遵守航空安全规定</p>
            </div>
          </div>
        </div>
        
        <h3>海关规定</h3>
        <div class="customs-regulations">
          <div class="regulation-category">
            <h4>禁止物品</h4>
            <ul>
              <li>毒品和违禁药品</li>
              <li>武器和爆炸物</li>
              <li>濒危动植物制品</li>
              <li>假冒伪劣商品</li>
            </ul>
          </div>
          <div class="regulation-category">
            <h4>限制物品</h4>
            <ul>
              <li>现金超过等值1万美元</li>
              <li>药品（需处方证明）</li>
              <li>食品和农产品</li>
              <li>文物和艺术品</li>
            </ul>
          </div>
          <div class="regulation-category">
            <h4>免税额度</h4>
            <ul>
              <li>个人用品：合理数量免税</li>
              <li>礼品：价值不超过¥3000</li>
              <li>烟酒：限量免税</li>
              <li>电子产品：1件免税</li>
            </ul>
          </div>
        </div>
        
        <h3>税务申报</h3>
        <div class="tax-declaration">
          <div class="declaration-requirements">
            <div class="requirement-item">
              <i class="fas fa-money-bill-wave"></i>
              <div>
                <h4>现金申报</h4>
                <p>携带等值1万美元以上现金必须申报</p>
              </div>
            </div>
            <div class="requirement-item">
              <i class="fas fa-gift"></i>
              <div>
                <h4>礼品申报</h4>
                <p>价值超过¥3000的礼品需要申报</p>
              </div>
            </div>
            <div class="requirement-item">
              <i class="fas fa-laptop"></i>
              <div>
                <h4>电子产品</h4>
                <p>新购买的电子产品可能需要缴纳关税</p>
              </div>
            </div>
          </div>
          
          <div class="declaration-process">
            <h4>申报流程</h4>
            <ol>
              <li>填写海关申报单</li>
              <li>如实申报携带物品</li>
              <li>接受海关检查</li>
              <li>缴纳应缴税款</li>
            </ol>
          </div>
        </div>
        
        <h3>旅行禁令查询</h3>
        <div class="travel-ban-check">
          <div class="check-form">
            <p>出境前请查询是否有旅行限制或禁令</p>
            <button class="usa-button usa-button--outline" onclick="checkTravelBan()">
              <i class="fas fa-search"></i>
              查询旅行禁令
            </button>
          </div>
          
          <div class="ban-notices">
            <div class="notice warning">
              <i class="fas fa-exclamation-triangle"></i>
              <p>某些国家可能有旅行警告或限制，请提前查询</p>
            </div>
            <div class="notice info">
              <i class="fas fa-info-circle"></i>
              <p>建议购买包含政治风险保障的旅行保险</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  'travel-support': {
    title: '旅行支持服务',
    content: `
      <div class="service-detail">
        <h3>24小时热线服务</h3>
        <div class="hotline-services">
          <div class="hotline-category">
            <h4>紧急援助</h4>
            <ul>
              <li>医疗紧急情况协助</li>
              <li>法律援助服务</li>
              <li>领事保护服务</li>
              <li>紧急资金转账</li>
            </ul>
          </div>
          <div class="hotline-category">
            <h4>旅行咨询</h4>
            <ul>
              <li>目的地安全信息</li>
              <li>签证和入境要求</li>
              <li>健康和疫苗建议</li>
              <li>文化和习俗指导</li>
            </ul>
          </div>
          <div class="hotline-category">
            <h4>技术支持</h4>
            <ul>
              <li>证件丢失协助</li>
              <li>航班信息查询</li>
              <li>住宿预订帮助</li>
              <li>翻译服务安排</li>
            </ul>
          </div>
        </div>
        
        <h3>紧急援助服务</h3>
        <div class="emergency-services">
          <div class="service-grid">
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-medkit"></i>
              </div>
              <h4>医疗援助</h4>
              <p>提供医疗紧急情况下的协助，包括医院推荐、医疗费用垫付等</p>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-gavel"></i>
              </div>
              <h4>法律援助</h4>
              <p>在海外遇到法律问题时提供法律咨询和协助服务</p>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-home"></i>
              </div>
              <h4>住宿安排</h4>
              <p>紧急情况下协助安排临时住宿，确保您的安全和舒适</p>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-plane"></i>
              </div>
              <h4>交通安排</h4>
              <p>协助安排紧急交通，包括航班改签、紧急回国等</p>
            </div>
          </div>
        </div>
        
        <h3>旅行保险服务</h3>
        <div class="insurance-services">
          <div class="insurance-types">
            <div class="insurance-card">
              <h4>基础保险</h4>
              <div class="coverage">
                <span class="coverage-item">医疗费用</span>
                <span class="coverage-item">行程取消</span>
                <span class="coverage-item">行李延误</span>
              </div>
              <div class="premium">
                <span class="price">¥50</span>
                <span class="period">/次</span>
              </div>
            </div>
            <div class="insurance-card">
              <h4>全面保险</h4>
              <div class="coverage">
                <span class="coverage-item">医疗费用</span>
                <span class="coverage-item">行程取消</span>
                <span class="coverage-item">行李延误</span>
                <span class="coverage-item">个人责任</span>
                <span class="coverage-item">紧急撤离</span>
              </div>
              <div class="premium">
                <span class="price">¥150</span>
                <span class="period">/次</span>
              </div>
            </div>
            <div class="insurance-card">
              <h4>豪华保险</h4>
              <div class="coverage">
                <span class="coverage-item">医疗费用</span>
                <span class="coverage-item">行程取消</span>
                <span class="coverage-item">行李延误</span>
                <span class="coverage-item">个人责任</span>
                <span class="coverage-item">紧急撤离</span>
                <span class="coverage-item">政治风险</span>
                <span class="coverage-item">恐怖主义</span>
              </div>
              <div class="premium">
                <span class="price">¥300</span>
                <span class="period">/次</span>
              </div>
            </div>
          </div>
          
          <div class="insurance-benefits">
            <h4>保险优势</h4>
            <div class="benefits-grid">
              <div class="benefit-item">
                <i class="fas fa-clock"></i>
                <span>24小时全球服务</span>
              </div>
              <div class="benefit-item">
                <i class="fas fa-globe"></i>
                <span>全球网络覆盖</span>
              </div>
              <div class="benefit-item">
                <i class="fas fa-mobile-alt"></i>
                <span>移动应用支持</span>
              </div>
              <div class="benefit-item">
                <i class="fas fa-language"></i>
                <span>多语言服务</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-info">
          <h3>联系我们</h3>
          <div class="contact-methods">
            <div class="contact-method">
              <i class="fas fa-phone"></i>
              <div>
                <h4>24小时热线</h4>
                <p>1-844-小鼠-政府</p>
              </div>
            </div>
            <div class="contact-method">
              <i class="fas fa-envelope"></i>
              <div>
                <h4>邮件咨询</h4>
                <p>travel-support@mousegov.gov</p>
              </div>
            </div>
            <div class="contact-method">
              <i class="fas fa-comments"></i>
              <div>
                <h4>在线客服</h4>
                <p>官方网站在线聊天</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};

// 旅行费用计算器
const travelCosts = {
  document: {
    domestic: 200,
    international: 500
  },
  transport: {
    domestic: {
      public: 50,
      rental: 200,
      flight: 500
    },
    international: {
      public: 100,
      rental: 300,
      flight: 2000
    }
  },
  accommodation: {
    budget: 100,
    mid: 300,
    luxury: 800
  },
  other: {
    domestic: 100,
    international: 500
  }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  initializeTravelServices();
});

function initializeTravelServices() {
  // 设置服务卡片动画
  setupServiceCardAnimations();
  
  // 设置计算器表单
  setupCalculatorForm();
  
  // 设置模态框事件
  setupModalEvents();
}

// 设置服务卡片动画
function setupServiceCardAnimations() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
      this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    });
  });
}

// 设置计算器表单
function setupCalculatorForm() {
  const form = document.getElementById('travelCalculatorForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      calculateTravelCost();
    });
  }
}

// 设置模态框事件
function setupModalEvents() {
  // 关闭按钮事件
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // 点击模态框外部关闭
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.display = 'none';
      }
    });
  });
}

// 滚动到服务区域
function scrollToServices() {
  const servicesSection = document.querySelector('.services-overview');
  if (servicesSection) {
    servicesSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// 打开服务详情模态框
function openServiceModal(serviceType) {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  const serviceDetail = serviceDetails[serviceType];
  if (serviceDetail) {
    modalTitle.textContent = serviceDetail.title;
    modalBody.innerHTML = serviceDetail.content;
    modal.style.display = 'block';
    
    // 添加动画效果
    setTimeout(() => {
      modal.querySelector('.modal-content').style.transform = 'scale(1)';
      modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
  }
}

// 关闭服务详情模态框
function closeServiceModal() {
  const modal = document.getElementById('serviceModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// 打开旅行计算器
function openTravelCalculator() {
  const modal = document.getElementById('travelCalculatorModal');
  if (modal) {
    modal.style.display = 'block';
    
    // 添加动画效果
    setTimeout(() => {
      modal.querySelector('.modal-content').style.transform = 'scale(1)';
      modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
  }
}

// 计算旅行费用
function calculateTravelCost() {
  const destination = document.getElementById('destination').value;
  const duration = parseInt(document.getElementById('duration').value);
  const travelers = parseInt(document.getElementById('travelers').value);
  const accommodation = document.getElementById('accommodation').value;
  const transport = document.getElementById('transport').value;
  
  if (!destination || !duration || !travelers || !accommodation || !transport) {
    alert('请填写所有必填项');
    return;
  }
  
  // 计算各项费用
  const documentCost = travelCosts.document[destination] * travelers;
  const transportCost = travelCosts.transport[destination][transport] * travelers;
  const accommodationCost = travelCosts.accommodation[accommodation] * duration * travelers;
  const otherCost = travelCosts.other[destination] * duration * travelers;
  const totalCost = documentCost + transportCost + accommodationCost + otherCost;
  
  // 显示结果
  document.getElementById('documentCost').textContent = `¥${documentCost.toLocaleString()}`;
  document.getElementById('transportCost').textContent = `¥${transportCost.toLocaleString()}`;
  document.getElementById('accommodationCost').textContent = `¥${accommodationCost.toLocaleString()}`;
  document.getElementById('otherCost').textContent = `¥${otherCost.toLocaleString()}`;
  document.getElementById('totalCost').textContent = `¥${totalCost.toLocaleString()}`;
  
  // 显示结果区域
  document.getElementById('calculationResult').style.display = 'block';
  
  // 添加动画效果
  const resultContainer = document.getElementById('calculationResult');
  resultContainer.style.opacity = '0';
  resultContainer.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    resultContainer.style.transition = 'all 0.5s ease';
    resultContainer.style.opacity = '1';
    resultContainer.style.transform = 'translateY(0)';
  }, 100);
}

// 查询旅行禁令
function checkTravelBan() {
  // 模拟查询功能
  alert('正在查询旅行禁令信息...\n\n当前没有针对小鼠帝国公民的旅行禁令。\n但建议您在出行前查看最新的旅行建议和安全信息。');
}

// 开始申请
function startApplication() {
  const modalTitle = document.getElementById('modalTitle').textContent;
  alert(`正在跳转到${modalTitle}申请页面...`);
  closeServiceModal();
}

// 添加CSS样式
const additionalStyles = `
  <style>
    .service-detail {
      padding: 20px 0;
    }
    
    .service-detail h3 {
      color: #1b1b1b;
      font-size: 1.5rem;
      margin: 30px 0 20px 0;
      font-weight: 600;
    }
    
    .service-detail h4 {
      color: #1E3A8A;
      font-size: 1.2rem;
      margin: 20px 0 10px 0;
      font-weight: 600;
    }
    
    .process-steps {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 20px 0;
    }
    
    .step {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #1E3A8A;
    }
    
    .step-number {
      background: #1E3A8A;
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
    }
    
    .step-content h4 {
      margin: 0 0 5px 0;
      color: #1b1b1b;
    }
    
    .step-content p {
      margin: 0;
      color: #5c5c5c;
    }
    
    .price-table {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      margin: 20px 0;
    }
    
    .price-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .price-item:last-child {
      border-bottom: none;
    }
    
    .service-name {
      font-weight: 500;
      color: #1b1b1b;
    }
    
    .price {
      font-weight: bold;
      color: #d83933;
      font-size: 1.1rem;
    }
    
    .required-documents {
      background: #f0f7ff;
      border: 1px solid #b3d9ff;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    
    .required-documents li {
      margin: 8px 0;
      color: #1b1b1b;
    }
    
    .service-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .category-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .category-card h4 {
      color: #1E3A8A;
      margin: 0 0 10px 0;
    }
    
    .category-card ul {
      margin: 10px 0 0 0;
      padding-left: 20px;
    }
    
    .category-card li {
      margin: 5px 0;
      color: #5c5c5c;
    }
    
    .guardian-requirements {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: 20px 0;
    }
    
    .requirement-item {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 8px;
    }
    
    .requirement-item i {
      color: #1E3A8A;
      font-size: 1.2rem;
      margin-top: 2px;
    }
    
    .requirement-item h4 {
      margin: 0 0 5px 0;
      color: #1b1b1b;
    }
    
    .requirement-item p {
      margin: 0;
      color: #5c5c5c;
    }
    
    .special-notices {
      margin: 20px 0;
    }
    
    .notice {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
    }
    
    .notice.warning {
      background: #fff3cd;
      border: 1px solid #ffeaa7;
      color: #856404;
    }
    
    .notice.info {
      background: #d1ecf1;
      border: 1px solid #bee5eb;
      color: #0c5460;
    }
    
    .notice i {
      margin-top: 2px;
    }
    
    .visa-types {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .visa-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    .visa-card:hover {
      transform: translateY(-5px);
    }
    
    .visa-icon {
      font-size: 2rem;
      color: #1E3A8A;
      margin-bottom: 15px;
    }
    
    .visa-card h4 {
      color: #1b1b1b;
      margin: 0 0 10px 0;
    }
    
    .visa-details {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 15px;
    }
    
    .duration, .fee {
      font-size: 0.9rem;
      color: #5c5c5c;
    }
    
    .application-process {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 20px 0;
    }
    
    .process-step {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 8px;
    }
    
    .step-icon {
      background: #1E3A8A;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      flex-shrink: 0;
    }
    
    .step-info h4 {
      margin: 0 0 5px 0;
      color: #1b1b1b;
    }
    
    .step-info p {
      margin: 0;
      color: #5c5c5c;
    }
    
    .required-materials {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .material-category {
      background: #f8f9fa;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
    }
    
    .material-category h4 {
      color: #1E3A8A;
      margin: 0 0 15px 0;
    }
    
    .material-category ul {
      margin: 0;
      padding-left: 20px;
    }
    
    .material-category li {
      margin: 8px 0;
      color: #5c5c5c;
    }
    
    .transport-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .transport-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .transport-icon {
      font-size: 2.5rem;
      color: #1E3A8A;
      margin-bottom: 15px;
    }
    
    .transport-card h4 {
      color: #1b1b1b;
      margin: 0 0 10px 0;
    }
    
    .transport-card ul {
      text-align: left;
      margin: 15px 0 0 0;
      padding-left: 20px;
    }
    
    .transport-card li {
      margin: 5px 0;
      color: #5c5c5c;
    }
    
    .safety-guidelines {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .safety-category {
      background: #f8f9fa;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
    }
    
    .safety-category h4 {
      color: #d83933;
      margin: 0 0 15px 0;
    }
    
    .safety-category ul {
      margin: 0;
      padding-left: 20px;
    }
    
    .safety-category li {
      margin: 8px 0;
      color: #5c5c5c;
    }
    
    .emergency-contacts {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: 20px 0;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;
      background: #f0f7ff;
      border: 1px solid #b3d9ff;
      border-radius: 8px;
    }
    
    .contact-icon {
      font-size: 1.5rem;
      color: #1E3A8A;
    }
    
    .contact-info h4 {
      margin: 0 0 5px 0;
      color: #1b1b1b;
    }
    
    .contact-info p {
      margin: 0;
      font-weight: bold;
      color: #1E3A8A;
      font-size: 1.1rem;
    }
    
    .contact-desc {
      font-size: 0.9rem;
      color: #5c5c5c;
      font-weight: normal !important;
    }
    
    .exit-procedures {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 20px 0;
    }
    
    .procedure-step {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #1E3A8A;
    }
    
    .customs-regulations {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .regulation-category {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .regulation-category h4 {
      color: #d83933;
      margin: 0 0 15px 0;
    }
    
    .regulation-category ul {
      margin: 0;
      padding-left: 20px;
    }
    
    .regulation-category li {
      margin: 8px 0;
      color: #5c5c5c;
    }
    
    .declaration-requirements {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: 20px 0;
    }
    
    .declaration-process {
      background: #f8f9fa;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    
    .declaration-process ol {
      margin: 15px 0 0 0;
      padding-left: 25px;
    }
    
    .declaration-process li {
      margin: 10px 0;
      color: #5c5c5c;
    }
    
    .travel-ban-check {
      text-align: center;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
      margin: 20px 0;
    }
    
    .check-form p {
      margin: 0 0 20px 0;
      color: #5c5c5c;
    }
    
    .ban-notices {
      margin-top: 20px;
    }
    
    .hotline-services {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .hotline-category {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .hotline-category h4 {
      color: #1E3A8A;
      margin: 0 0 15px 0;
    }
    
    .hotline-category ul {
      margin: 0;
      padding-left: 20px;
    }
    
    .hotline-category li {
      margin: 8px 0;
      color: #5c5c5c;
    }
    
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .service-item {
      text-align: center;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
    }
    
    .service-icon {
      font-size: 2.5rem;
      color: #1E3A8A;
      margin-bottom: 15px;
    }
    
    .service-item h4 {
      color: #1b1b1b;
      margin: 0 0 10px 0;
    }
    
    .service-item p {
      color: #5c5c5c;
      margin: 0;
    }
    
    .insurance-types {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .insurance-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    .insurance-card:hover {
      transform: translateY(-5px);
    }
    
    .insurance-card h4 {
      color: #1E3A8A;
      margin: 0 0 15px 0;
    }
    
    .coverage {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      margin: 15px 0;
    }
    
    .coverage-item {
      background: #e7f3ff;
      color: #1E3A8A;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.85rem;
      font-weight: 500;
    }
    
    .premium {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid #e0e0e0;
    }
    
    .premium .price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #d83933;
    }
    
    .premium .period {
      color: #5c5c5c;
      font-size: 0.9rem;
    }
    
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 20px 0;
    }
    
    .benefit-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      background: #f0f7ff;
      border-radius: 6px;
      border: 1px solid #b3d9ff;
    }
    
    .benefit-item i {
      color: #1E3A8A;
      font-size: 1.1rem;
    }
    
    .benefit-item span {
      color: #1E3A8A;
      font-weight: 500;
      font-size: 0.9rem;
    }
    
    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: 20px 0;
    }
    
    .contact-method {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;
      background: #f0f7ff;
      border: 1px solid #b3d9ff;
      border-radius: 8px;
    }
    
    .contact-method i {
      color: #1E3A8A;
      font-size: 1.3rem;
    }
    
    .contact-method h4 {
      margin: 0 0 5px 0;
      color: #1b1b1b;
    }
    
    .contact-method p {
      margin: 0;
      font-weight: bold;
      color: #1E3A8A;
    }
    
    .calculator-form {
      max-width: 500px;
      margin: 0 auto;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
      color: #1b1b1b;
    }
    
    .result-container {
      margin-top: 30px;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
    }
    
    .result-container h3 {
      color: #1E3A8A;
      margin: 0 0 20px 0;
      text