const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

const btnKurang = document.querySelector(".btn-kurang");
const btnTambah = document.querySelector(".btn-tambah");
const jumlahItemTxt = document.querySelector(".jumlah-item");
const hargaSatuanTxt = document.querySelector(".harga-satuan");
const totalItemTxt = document.querySelector(".total-item");
const grandTotalTxt = document.getElementById("grand-total");

function updateHarga() {
    let jumlah = parseInt(jumlahItemTxt.textContent);
    let hargaSatuan = parseInt(hargaSatuanTxt.textContent);
    
    let totalPerItem = jumlah * hargaSatuan;
    
    totalItemTxt.textContent = totalPerItem.toLocaleString('id-ID');
    grandTotalTxt.textContent = totalPerItem.toLocaleString('id-ID');
}

if (btnTambah) {
    btnTambah.addEventListener("click", () => {
        let currentQty = parseInt(jumlahItemTxt.textContent);
        jumlahItemTxt.textContent = currentQty + 1;
        updateHarga();
    });
}

if (btnKurang) {
    btnKurang.addEventListener("click", () => {
        let currentQty = parseInt(jumlahItemTxt.textContent);
        if (currentQty > 1) { 
            jumlahItemTxt.textContent = currentQty - 1;
            updateHarga();
        }
    });
}