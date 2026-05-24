// 1. Fungsi Navigasi Hamburger Menu (Tampilan Mobile)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

// 2. Logika Perhitungan Matematika Jumlah Barang Keranjang
const btnKurang = document.querySelector(".btn-kurang");
const btnTambah = document.querySelector(".btn-tambah");
const jumlahItemTxt = document.querySelector(".jumlah-item");
const hargaSatuanTxt = document.querySelector(".harga-satuan");
const totalItemTxt = document.querySelector(".total-item");
const grandTotalTxt = document.getElementById("grand-total");

function updateHarga() {
    let jumlah = parseInt(jumlahItemTxt.textContent);
    let hargaSatuan = parseInt(hargaSatuanTxt.textContent);
    
    // Hitung total harga item
    let totalPerItem = jumlah * hargaSatuan;
    
    // Tampilkan hasil perhitungan ke teks web (menggunakan format mata uang lokal)
    totalItemTxt.textContent = totalPerItem.toLocaleString('id-ID');
    grandTotalTxt.textContent = totalPerItem.toLocaleString('id-ID');
}

// Event listener saat tombol tambah (+) diklik
if (btnTambah) {
    btnTambah.addEventListener("click", () => {
        let currentQty = parseInt(jumlahItemTxt.textContent);
        jumlahItemTxt.textContent = currentQty + 1;
        updateHarga();
    });
}

// Event listener saat tombol kurang (-) diklik
if (btnKurang) {
    btnKurang.addEventListener("click", () => {
        let currentQty = parseInt(jumlahItemTxt.textContent);
        if (currentQty > 1) { // Mencegah kuantitas minus atau 0
            jumlahItemTxt.textContent = currentQty - 1;
            updateHarga();
        }
    });
}