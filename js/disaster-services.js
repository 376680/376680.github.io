// Disaster Services Page JavaScript

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Disaster Services Page Initialized');

  // Add page-specific interaction effects
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });

  // Emergency button click effects
  const emergencyButtons = document.querySelectorAll('.usa-button--primary');
  emergencyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Prevent default if it's an anchor tag
      if (this.tagName === 'A') {
        e.preventDefault();
      }

      // Add loading effect
      const originalContent = this.innerHTML;
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 处理中...';
      this.disabled = true;

      // Simulate processing time
      setTimeout(() => {
        this.innerHTML = originalContent;
        this.disabled = false;

        // Show success message
        showSuccessMessage('操作成功！我们会尽快为您处理。');
      }, 1500);
    });
  });

  // FAQ accordion enhancements
  const accordionButtons = document.querySelectorAll('.usa-accordion__button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Add animation class if expanded
      if (!isExpanded) {
        content.style.maxHeight = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.3s ease-out';
        
        setTimeout(() => {
          content.style.maxHeight = content.scrollHeight + 'px';
        }, 10);
      } else {
        content.style.maxHeight = '0';
      }
    });
  });

  // Search functionality
  const searchForm = document.querySelector('.service-search-form form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchQuery = this.querySelector('input[type="search"]').value.trim();
      if (searchQuery) {
        showSuccessMessage(`搜索: ${searchQuery}`);
      }
    });
  }

  // Helper function to show success messages
  function showSuccessMessage(message) {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      font-weight: 500;
      animation: slideInRight 0.3s ease-out;
      display: flex;
      align-items: center;
      gap: 10px;
    `;
    
    messageEl.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>${message}</span>
    `;
    
    // Add to document
    document.body.appendChild(messageEl);
    
    // Remove after 3 seconds
    setTimeout(() => {
      messageEl.style.animation = 'slideOutRight 0.3s ease-in';
      setTimeout(() => {
        messageEl.remove();
      }, 300);
    }, 3000);
  }

  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Emergency notice highlight effect
  const emergencyNotice = document.querySelector('.emergency-notice');
  if (emergencyNotice) {
    // Add pulse animation
    emergencyNotice.style.animation = 'pulse 2s infinite';
    
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
        }
      }
    `;
    document.head.appendChild(pulseStyle);
  }

  // Initialize accordion content heights
  const accordionContents = document.querySelectorAll('.usa-accordion__content');
  accordionContents.forEach(content => {
    content.style.maxHeight = content.scrollHeight + 'px';
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});