document.addEventListener('DOMContentLoaded', () => {
    // ===== DOM ELEMENTS =====
    const navbar = document.getElementById('navbar');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mengambil elemen tombol filter dan kartu produk
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // ===== LOGIKA FILTER JALAN =====
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // 1. Atur tombol mana yang terlihat "Aktif" warnanya
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Mengambil nilai atribut 'data-filter' dari HTML tombol Anda (all, serum, dll)
            const filterValue = button.getAttribute('data-filter');

            // 3. Logika menyaring produk yang tertulis di HTML
            productCards.forEach(card => {
                const productCategory = card.getAttribute('data-category');

                // Jika tombol "all" diklik, atau kategorinya cocok dengan tombol
                if (filterValue === 'all' || productCategory === filterValue) {
                    card.style.display = 'block'; // Tampilkan produk
                } else {
                    card.style.display = 'none';  // Sembunyikan produk
                }
            });
        });
    });

    // ===== NAVBAR SCROLL EFFECT =====
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
    });

    // ===== HAMBURGER MENU =====
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    }
});