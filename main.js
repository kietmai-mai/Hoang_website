// Team MAI Mortgage Website - Main JavaScript
class TeamMAIWebsite {
    constructor() {
        this.currentLanguage = 'en';
        this.init();
    }

    init() {
        this.setupLanguageToggle();
        this.setupSmoothScrolling();
        this.setupAnimations();
        this.setupCarousels();
        this.setupCalculators();
        this.setupForms();
        this.setupMobileMenu();
    }

    // Language Toggle Functionality
    setupLanguageToggle() {
        const langToggle = document.getElementById('language-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.currentLanguage = this.currentLanguage === 'en' ? 'vi' : 'en';
                this.updateLanguage();
                this.saveLanguagePreference();
            });
        }
        this.loadLanguagePreference();
    }

updateLanguage() {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
            element.textContent = this.translations[this.currentLanguage][key];
        }
    });

    // Re-init Typed.js after language change
    const typewriter = document.querySelector('.typewriter');
    if (typewriter && typeof Typed !== 'undefined') {
        typewriter.textContent = ''; // clear
        new Typed('.typewriter', {
            strings: [this.translations[this.currentLanguage]['hero-headline']],
            typeSpeed: 50,
            showCursor: false,
            loop: false,
            contentType: 'html',
            onComplete: () => typewriter.classList.add('typing-complete')
        });
    }

    // Update toggle button
    const langToggle = document.getElementById('language-toggle');
    if (langToggle) {
        langToggle.textContent = this.currentLanguage === 'en' ? 'VI' : 'EN';
    }
}

    translations = {
        en: {
            'hero-headline': 'Ready to Start<br>Your Journey?',
            'hero-subtext': 'Breaking the Ceiling - 53 Units Funded',
            'cta-apply': 'Apply Now',
            'cta-schedule': 'Schedule a Call',
            'purchase-tile': 'Mua nhà / Purchase',
            'refinance-tile': 'Refinance',
            'self-employed-tile': 'Self-Employed / DSCR',
            'success-story-1': 'They thought owning a home was impossible',
            'success-story-2': 'Paying $2,200 in rent felt like throwing money away',
            'success-story-3': 'Still renting? 2% down payment assistance available',
            'meet-team': 'Meet the Team',
            'closed-funded': 'Closed & Funded',
            'loan-programs': 'Loan Programs',
            'calculators': 'Calculators',
            'knowledge': 'Knowledge',
            'reviews': 'Reviews',
            'about': 'About',
            'apply': 'Apply'
        },
        vi: {
            'hero-headline': 'Sẵn Sàng Bắt Đầu<br>Hành Trình?',
            'hero-subtext': 'Vượt Qua Giới Hạn - 53 Giao Dịch Được Tài Trợ',
            'cta-apply': 'Nộp Đơn Ngay',
            'cta-schedule': 'Đặt Lịch Tư Vấn',
            'purchase-tile': 'Mua nhà',
            'refinance-tile': 'Tái Tài Trợ',
            'self-employed-tile': 'Tự Kinh Doanh / DSCR',
            'success-story-1': 'Họ tưởng rằng sở hữu nhà là không thể',
            'success-story-2': 'Trả $2,200 tiền thuê nhà như vứt tiền qua cửa sổ',
            'success-story-3': 'Vẫn đang thuê? Hỗ trợ 2% tiền đặt cọc',
            'meet-team': 'Gặp Gỡ Đội Ngũ',
            'closed-funded': 'Đã Đóng & Tài Trợ',
            'loan-programs': 'Chương Trình Vay',
            'calculators': 'Máy Tính',
            'knowledge': 'Kiến Thức',
            'reviews': 'Đánh Giá',
            'about': 'Về Chúng Tôi',
            'apply': 'Nộp Đơn'
        }
    };

    saveLanguagePreference() {
        localStorage.setItem('team-mai-language', this.currentLanguage);
    }

    loadLanguagePreference() {
        const saved = localStorage.getItem('team-mai-language');
        if (saved) {
            this.currentLanguage = saved;
            this.updateLanguage();
        }
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Animation Setup
    setupAnimations() {
        // Scroll reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for scroll animations
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Hero typewriter effect
        if (document.querySelector('.typewriter')) {
            this.setupTypewriter();
        }

        // Number counter animations
        this.setupCounterAnimations();
    }

    setupTypewriter() {
        const element = document.querySelector('.typewriter');
        if (element && typeof Typed !== 'undefined') {
            new Typed('.typewriter', {
                strings: [element.textContent],
                typeSpeed: 50,
                showCursor: false,
                loop: false,
                contentType: 'html',
                onComplete: () => {
                    element.classList.add('typing-complete');
                }
            });
        }
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            // Start animation when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(counter);
        });
    }

    // Carousel Setup
    setupCarousels() {
        // Success stories slider
        if (document.querySelector('.success-stories-slider')) {
            new Splide('.success-stories-slider', {
                type: 'loop',
                autoplay: true,
                interval: 4000,
                pauseOnHover: true,
                arrows: false,
                pagination: true,
                speed: 800
            }).mount();
        }

        // Closed deals carousel
        if (document.querySelector('.closed-deals-carousel')) {
            new Splide('.closed-deals-carousel', {
                type: 'loop',
                autoplay: true,
                interval: 3000,
                perPage: 3,
                perMove: 1,
                gap: '2rem',
                breakpoints: {
                    768: { perPage: 1 },
                    1024: { perPage: 2 }
                }
            }).mount();
        }

        // Loan program tiles hover effects
        this.setupTileHoverEffects();
    }

    setupTileHoverEffects() {
        const tiles = document.querySelectorAll('.program-tile');
        tiles.forEach(tile => {
            tile.addEventListener('mouseenter', () => {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: tile,
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: 5,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                }
            });

            tile.addEventListener('mouseleave', () => {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: tile,
                        scale: 1,
                        rotateY: 0,
                        rotateX: 0,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                }
            });
        });
    }

    // Calculator Setup
    setupCalculators() {
        const calcForms = document.querySelectorAll('.calculator-form');
        calcForms.forEach(form => {
            form.addEventListener('input', this.calculateMortgage.bind(this));
        });
    }

    calculateMortgage(event) {
        const form = event.target.closest('.calculator-form');
        const formData = new FormData(form);
        const loanAmount = parseFloat(formData.get('loanAmount')) || 0;
        const interestRate = parseFloat(formData.get('interestRate')) || 0;
        const loanTerm = parseFloat(formData.get('loanTerm')) || 30;

        if (loanAmount > 0 && interestRate > 0) {
            const monthlyRate = interestRate / 100 / 12;
            const numPayments = loanTerm * 12;
            const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                                  (Math.pow(1 + monthlyRate, numPayments) - 1);

            const resultElement = form.querySelector('.calculation-result');
            if (resultElement) {
                resultElement.textContent = `$${monthlyPayment.toLocaleString('en-US', {maximumFractionDigits: 0})}/month`;
                
                // Animate the result
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: resultElement,
                        scale: [0.8, 1],
                        opacity: [0, 1],
                        duration: 500,
                        easing: 'easeOutBack'
                    });
                }
            }
        }
    }

    // Form Setup
    setupForms() {
        // Application forms
        const forms = document.querySelectorAll('.application-form');
        forms.forEach(form => {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        });

        // Modal setup for CTAs
        this.setupModals();
    }

    setupModals() {
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = button.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close modal functionality
        document.querySelectorAll('.modal-close').forEach(close => {
            close.addEventListener('click', () => {
                const modal = close.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Close modal on backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        // Show success message
        const successMessage = form.querySelector('.success-message');
        if (successMessage) {
            successMessage.style.display = 'block';
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    }

    // Mobile Menu

    setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Optional: make hamburger look like X when open
            menuToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open (good UX)
            document.body.classList.toggle('overflow-hidden', !mobileMenu.classList.contains('hidden'));
        });
    }
}
  body.overflow-hidden {
    overflow: hidden;
    height: 100vh;
}  
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TeamMAIWebsite();
});

// Utility functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    if (typeof anime !== 'undefined') {
        anime({
            targets: notification,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutBack'
        });
    }
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (typeof anime !== 'undefined') {
            anime({
                targets: notification,
                translateY: [0, -50],
                opacity: [1, 0],
                duration: 300,
                complete: () => notification.remove()
            });
        } else {
            notification.remove();
        }
    }, 3000);
}
