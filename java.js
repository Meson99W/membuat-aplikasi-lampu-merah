// script.js
let lampuMerah = document.getElementById('lampu-merah');
let lampuKuning = document.getElementById('lampu-kuning');
let lampuHijau = document.getElementById('lampu-hijau');

function mulaiAnimasi() {
  setInterval(() => {
    // Menyalakan lampu merah, lalu matikan setelah 3 detik
    lampuMerah.classList.add('active');
    lampuKuning.classList.remove('active');
    lampuHijau.classList.remove('active');
    
    setTimeout(() => {
      // Menyalakan lampu kuning setelah lampu merah
      lampuMerah.classList.remove('active');
      lampuKuning.classList.add('active');
      
      setTimeout(() => {
        // Menyalakan lampu hijau setelah lampu kuning
        lampuKuning.classList.remove('active');
        lampuHijau.classList.add('active');
        
        setTimeout(() => {
          // Mengulang dari lampu merah
          lampuHijau.classList.remove('active');
        }, 5000); // Lampu hijau menyala selama 5 detik
      }, 2000); // Lampu kuning menyala selama 2 detik
    }, 3000); // Lampu merah menyala selama 3 detik
  }, 10000); // Siklus ulang setiap 10 detik
}

window.onload = mulaiAnimasi;