// 统一页面交互逻辑

// 导航栏滚动效果
function initHeaderScroll() {
  const header = document.querySelector('.unified-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 手风琴组件
function initAccordions() {
  const accordionItems = document.querySelectorAll('.unified-accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.unified-accordion-header');
    const content = item.querySelector('.unified-accordion-content');
    
    if (header && content) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // 关闭所有其他手风琴项
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // 切换当前项
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });
}

// 卡片交互效果
function initCardInteractions() {
  const cards = document.querySelectorAll('.unified-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-3px)';
      card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    });
  });
}

// 按钮交互效果
function initButtonInteractions() {
  const buttons = document.querySelectorAll('.unified-btn');
  
  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.98)';
    });
    
    button.addEventListener('mouseup', () => {
      button.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
}

// 平滑滚动到锚点
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.unified-header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// 返回顶部功能
function initBackToTop() {
  const backToTopButton = document.createElement('a');
  backToTopButton.href = '#';
  backToTopButton.className = 'unified-back-to-top';
  backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--primary-blue);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  `;
  
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopButton.style.opacity = '1';
      backToTopButton.style.visibility = 'visible';
    } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.style.visibility = 'hidden';
    }
  });
  
  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 表单验证和交互
function initFormValidation() {
  const forms = document.querySelectorAll('.unified-form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    const submitButton = form.querySelector('.unified-btn[type="submit"]');
    
    function validateForm() {
      let isValid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
      
      if (submitButton) {
        submitButton.disabled = !isValid;
      }
      
      return isValid;
    }
    
    inputs.forEach(input => {
      input.addEventListener('blur', validateForm);
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          validateForm();
        }
      });
    });
    
    form.addEventListener('submit', (e) => {
      if (!validateForm()) {
        e.preventDefault();
        return;
      }
      
      // 显示提交成功消息
      const successMessage = document.createElement('div');
      successMessage.className = 'unified-success-message';
      successMessage.textContent = '提交成功！我们会尽快处理您的申请。';
      successMessage.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: #10B981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        animation: slideIn 0.3s ease-out;
      `;
      
      document.body.appendChild(successMessage);
      
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    });
  });
}

// 移动端菜单切换
function initMobileMenu() {
  const menuToggle = document.querySelector('.unified-menu-toggle');
  const navMenu = document.querySelector('.unified-nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      
      // 切换图标
      const icon = menuToggle.querySelector('i');
      if (icon) {
        if (menuToggle.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
    
    // 点击菜单项后关闭菜单
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        
        // 恢复图标
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
    
    // 点击外部关闭菜单
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        
        // 恢复图标
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }
}

// 页面加载动画
function initPageAnimations() {
  const animatedElements = document.querySelectorAll('.unified-fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });
}

// 工具函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initAccordions();
  initCardInteractions();
  initButtonInteractions();
  initSmoothScroll();
  initBackToTop();
  initFormValidation();
  initMobileMenu();
  initPageAnimations();
  
  console.log('统一页面框架初始化完成');
});

// 导出函数供其他脚本使用
window.UnifiedFramework = {
  initHeaderScroll,
  initAccordions,
  initCardInteractions,
  initButtonInteractions,
  initSmoothScroll,
  initBackToTop,
  initFormValidation,
  initMobileMenu,
  initPageAnimations,
  debounce,
  throttle
};