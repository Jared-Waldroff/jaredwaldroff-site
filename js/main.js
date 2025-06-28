// Main JavaScript for Jared Waldroff DJ Website

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80; // Adjust based on your header height
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Form handling and validation
    function initFormHandling() {
        const form = document.querySelector('.contact-form');
        const submitButton = form.querySelector('.submit-button');
        
        form.addEventListener('submit', function(e) {
            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                } else {
                    field.style.borderColor = '#e0e0e0';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailField = form.querySelector('[type="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailField.value && !emailRegex.test(emailField.value)) {
                e.preventDefault();
                emailField.style.borderColor = '#e74c3c';
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
        });
        
        // Reset button state on form reset
        form.addEventListener('reset', function() {
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        });
    }
    
    // Show success/error messages
    function showMessage(text, type = 'success') {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const message = document.createElement('div');
        message.className = `form-message form-message--${type}`;
        message.textContent = text;
        
        // Style the message
        Object.assign(message.style, {
            padding: '1rem',
            marginTop: '1rem',
            borderRadius: '8px',
            backgroundColor: type === 'error' ? '#fee' : '#efe',
            color: type === 'error' ? '#c33' : '#363',
            border: `1px solid ${type === 'error' ? '#fcc' : '#cfc'}`,
            fontSize: '0.9rem'
        });
        
        const form = document.querySelector('.contact-form');
        form.appendChild(message);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (message && message.parentNode) {
                message.remove();
            }
        }, 5000);
    }
    
    // Intersection Observer for scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate in
        const animateElements = document.querySelectorAll('.service-card, .music-platform');
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    // Loading state for embedded content
    function initEmbedLoading() {
        const embeds = document.querySelectorAll('.embed-container iframe');
        
        embeds.forEach(iframe => {
            const container = iframe.parentElement;
            
            // Add loading indicator
            const loader = document.createElement('div');
            loader.className = 'embed-loader';
            loader.innerHTML = 'Loading...';
            loader.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #666;
                font-size: 0.9rem;
            `;
            
            container.style.position = 'relative';
            container.appendChild(loader);
            
            // Remove loader when iframe loads
            iframe.addEventListener('load', function() {
                if (loader && loader.parentNode) {
                    loader.remove();
                }
            });
        });
    }
    
    // Handle responsive navigation (if needed later)
    function initResponsiveFeatures() {
        // Add scroll-to-top functionality
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '↑';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 50%;
            background: var(--secondary-color);
            color: white;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: var(--shadow);
        `;
        
        document.body.appendChild(scrollToTopBtn);
        
        // Show/hide scroll to top button
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        });
        
        // Scroll to top functionality
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Initialize all functions
    initSmoothScrolling();
    initFormHandling();
    initScrollAnimations();
    initEmbedLoading();
    initResponsiveFeatures();
    
    // Debug log
    console.log('Jared Waldroff DJ Website initialized successfully!');
});

// Utility functions
const utils = {
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};
