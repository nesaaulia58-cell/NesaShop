document.addEventListener('DOMContentLoaded', () => {
   const navbar = document.getElementById('navbar');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav-link');

    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            productCards.forEach(card => {
                const productCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || productCategory === filterValue) {
                    card.style.display = 'block'; 
                } else {
                    card.style.display = 'none';  
                }
            });
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

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    }
});