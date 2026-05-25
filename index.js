const navbar = document.getElementById('navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
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

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
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


document.querySelectorAll('.product-card, .feature-item, .testimonial-card').forEach(el => {
    observer.observe(el);
});


window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}` || 
            (current === '' && link.textContent.trim() === 'Home')) {
            link.classList.add('active');
        }
    });
});

document.querySelectorAll('.buy-btn, .cta-button').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.classList.contains('buy-btn')) {
            e.preventDefault();
            window.open('https://wa.me/6281234567890?text=Saya%20ingin%20pesan%20produk%20ini!', '_blank');
        }
    });
});
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});