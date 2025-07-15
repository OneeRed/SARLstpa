// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")
  const menuIcon = document.getElementById("menuIcon")

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    if (mobileNav.classList.contains("active")) {
      menuIcon.className = "fas fa-times"
    } else {
      menuIcon.className = "fas fa-bars"
    }
  })

          // // Mobile dropdown toggle
        const mobileProduitsLink = document.getElementById('mobileProduitsLink');
        const mobileDropdown = document.getElementById('mobileDropdown');

        mobileProduitsLink.addEventListener('click', function(e) {
            e.preventDefault();
            mobileDropdown.classList.toggle('active');
            
            const icon = this.querySelector('i');
            icon.style.transform = mobileDropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.header')) {
                mobileNav.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                mobileDropdown.classList.remove('active');
            }
        });


        // // Mobile dropdown toggle

        

        // Intersection Observer pour les animations au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 150);
                }
            });
        }, observerOptions);

        // Observer tous les éléments avec animation
        const animatedElements = document.querySelectorAll('.page-section .container .section .animate-on-scroll');
        animatedElements.forEach(element => {
            observer.observe(element);
        });

        // Animation des boutons produits
        function animateProductButtons() {
            const buttons = document.querySelectorAll('.btn');
            
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    // Effet de ripple
                    const ripple = document.createElement('span');
                    const rect = button.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.width = ripple.style.height = size + 'px';
                    ripple.style.left = x + 'px';
                    ripple.style.top = y + 'px';
                    ripple.style.position = 'absolute';
                    ripple.style.borderRadius = '50%';
                    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                    ripple.style.transform = 'scale(0)';
                    ripple.style.animation = 'ripple 0.6s linear';
                    ripple.style.pointerEvents = 'none';
                    
                    button.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });
        }

        // Animation des cartes au hover
        function addCardHoverEffects() {
            const advantageCards = document.querySelectorAll('.page-section .container .section .advantages-grid .advantage-card');
            const productCards = document.querySelectorAll('.page-section .container .section .products-grid .product-card');
            
            [...advantageCards, ...productCards].forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        // Animation des logos clients
        function animateClientLogos() {
            const logos = document.querySelectorAll('.page-section .container .section .clients-section .clients-grid .client-logo');
            
            logos.forEach((logo, index) => {
                setTimeout(() => {
                    logo.classList.add('visible');
                }, index * 100);
            });
        }

        // Initialisation au chargement de la page
        document.addEventListener('DOMContentLoaded', () => {
            animateProductButtons();
            addCardHoverEffects();
            
            // Animation des logos clients après un délai
            setTimeout(animateClientLogos, 2000);
        });

        // Animation CSS pour l'effet ripple
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);


        // Animation des éléments au scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 150);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            elements.forEach(element => {
                observer.observe(element);
            });
        }

        animateOnScroll()
  

        

  // Close mobile menu when clicking on a link
  // const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  // mobileNavLinks.forEach((link) => {
  //   link.addEventListener("click", () => {
  //     mobileNav.classList.remove("active")
  //     menuIcon.className = "fas fa-bars"
  //   })
  // })
})


/*

// Unified Script

// Wait for DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Animate on Scroll (General)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const globalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.page-section .container .section .animate-on-scroll').forEach(el => {
    globalObserver.observe(el);
  });

  // Ripple Effect on Buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add hover effect to cards
  const addHoverEffect = (selector) => {
    document.querySelectorAll(selector).forEach(card => {
      card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px) scale(1.02)');
      card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
    });
  };
  addHoverEffect('.advantages-grid .advantage-card');
  addHoverEffect('.products-grid .product-card');

  // Animate Client Logos
  setTimeout(() => {
    document.querySelectorAll('.clients-grid .client-logo').forEach((logo, i) => {
      setTimeout(() => logo.classList.add('visible'), i * 100);
    });
  }, 2000);

  // Animate Stats
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector('.stat-number');
        const finalValue = statNumber.textContent;
        let numericValue, unit = '';

        if (finalValue.includes('M DA')) {
          numericValue = parseFloat(finalValue.replace('M DA', ''));
          unit = 'M DA';
        } else if (finalValue.includes('M')) {
          numericValue = parseFloat(finalValue.replace('M', ''));
          unit = 'M';
        } else if (finalValue.includes('+')) {
          numericValue = parseInt(finalValue);
          unit = '+';
        } else {
          numericValue = parseInt(finalValue);
        }

        statNumber.textContent = '0' + unit;
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          const currentValue = numericValue * eased;

          if (unit === 'M DA') {
            statNumber.textContent = currentValue.toFixed(0) + 'M DA';
          } else if (unit === 'M') {
            statNumber.textContent = currentValue.toFixed(1) + 'M';
          } else if (unit === '+') {
            statNumber.textContent = Math.floor(currentValue) + '+';
          } else {
            statNumber.textContent = Math.floor(currentValue);
          }

          if (progress < 1) requestAnimationFrame(updateCounter);
          else statNumber.textContent = finalValue;
        }

        requestAnimationFrame(updateCounter);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-card').forEach(card => statObserver.observe(card));

  // Timeline animation
  function updateTimeline() {
    const timeline = document.getElementById('timeline');
    const progress = document.getElementById('progress');
    const steps = document.querySelectorAll('.process-step');

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const start = rect.top - windowHeight * 0.5;
    const end = rect.bottom - windowHeight * 0.5;

    let progressPercent = 0;
    if (start <= 0 && end >= 0) {
      progressPercent = Math.min(1, Math.max(0, Math.abs(start) / (Math.abs(start) + end)));
    } else if (end < 0) progressPercent = 1;

    progress.style.height = (progressPercent * 100) + '%';

    steps.forEach((step, index) => {
      const stepRect = step.getBoundingClientRect();
      if (stepRect.top < windowHeight * 0.7) {
        if (!step.classList.contains('visible')) {
          setTimeout(() => step.classList.add('visible'), index * 200);
        }
      } else if (stepRect.bottom > windowHeight * 0.3) {
        step.classList.remove('visible');
      }
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateTimeline();
        ticking = false;
      });
      ticking = true;
    }
  });
  window.addEventListener('load', updateTimeline);
  window.addEventListener('resize', updateTimeline);

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuIcon = document.getElementById('menuIcon');
  if (mobileMenuBtn && mobileNav && menuIcon) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-times');
    });
  }

  // Devis Form
  const devisForm = document.getElementById('devisForm');
  const successMessage = document.getElementById('successMessage');
  if (devisForm) {
    devisForm.addEventListener('submit', (e) => {
      e.preventDefault();
      setTimeout(() => {
        successMessage.classList.add('show');
        devisForm.reset();
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => successMessage.classList.remove('show'), 10000);
      }, 1000);
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      const submitBtn = this.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'Envoi en cours...';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.textContent = 'Message envoyé !';
        submitBtn.style.background = '#16a34a';
        this.reset();
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 2000);
      }, 1500);
    });
  }

  // Form validation styles
  document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
    input.addEventListener('blur', function () {
      if (this.hasAttribute('required') && !this.value.trim()) {
        this.style.borderColor = '#ef4444';
      } else {
        this.style.borderColor = '#e5e7eb';
      }
    });
    input.addEventListener('input', function () {
      if (this.style.borderColor === 'rgb(239, 68, 68)' && this.value.trim()) {
        this.style.borderColor = '#22c55e';
      }
    });
  });

  // Auto resize textareas
  document.querySelectorAll('.form-textarea').forEach(textarea => {
    textarea.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });
  });

  // Animate contact section
  document.querySelectorAll('.contact-form, .conftact-information').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    globalObserver.observe(el);
  });

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = document.querySelector('.header')?.offsetHeight || 0;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // Ripple keyframes
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
  document.head.appendChild(rippleStyle);
});




*/