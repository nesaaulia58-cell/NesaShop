
const navbar = document.getElementById('navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.querySelector('.submit-btn');
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    submitBtn.disabled = true;
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    btnText.style.opacity = '0';
    btnLoading.classList.add('active');
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    contactForm.reset();
    
  
    submitBtn.disabled = false;
    btnText.style.opacity = '1';
    btnLoading.classList.remove('active');
    
   
    showMessage('Pesan berhasil dikirim! Kami akan balas dalam 24 jam.', 'success');
    
   
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


function showMessage(text, type) {
  
    const existingMsg = document.querySelector('.success-message, .error-message');
    if (existingMsg) existingMsg.remove();
    
    const message = document.createElement('div');
    message.className = type === 'success' ? 'success-message' : 'error-message';
    message.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        ${text}
    `;
    
    contactForm.parentElement.insertBefore(message, contactForm);
    message.style.display = 'block';
    
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => message.remove(), 300);
    }, 5000);
}
formInputs.forEach(input => {
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', validateInput);
});

function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();
    
    input.style.borderColor = '#e8d5ff';
    
    if (input.required && !value) {
        input.style.borderColor = '#ef4444';
        return false;
    }
    
    if (input.type === 'email' && value && !isValidEmail(value)) {
        input.style.borderColor = '#ef4444';
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});


document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        link.style.position = 'relative';
        link.style.overflow = 'hidden';
        link.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.contact-form-card, .info-item').forEach(el => {
    observer.observe(el);
});

contactForm.addEventListener('input', () => {
    const isValid = Array.from(formInputs).every(input => {
        const value = input.value.trim();
        if (input.required && !value) return false;
        if (input.type === 'email' && value && !isValidEmail(value)) return false;
        return true;
    });
    
    submitBtn.disabled = !isValid;
});

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

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