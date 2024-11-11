let currentSlide = 0;
const slides = document.querySelectorAll(".illustration");
const descriptions = [
  "fitur to-do list yang sederhana namun kuat, ProActive mempermudah perencanaan harian hingga pengelolaan proyek besar.",
  "To-do list yang praktis namun bertenaga, ProActive memudahkan pengelolaan dari tugas harian hingga manajemen proyek kompleks.",
  "Dengan fitur to-do list yang intuitif namun andal, ProActive memfasilitasi perencanaan dari aktivitas sehari-hari hingga pengelolaan proyek besar."
];
const descriptionElement = document.querySelector(".description");

function changeSlide(direction) {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
  descriptionElement.textContent = descriptions[currentSlide];
}

// Tambahkan event listener ke form "Forgot Password"
const forgotPasswordForm = document.getElementById("forgot-password-form");
if (forgotPasswordForm) {
  forgotPasswordForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form ke server
    window.location.href = "verifikasi.html"; // Arahkan ke halaman verifikasi
  });
}

// Tambahkan event listener ke form "Verifikasi"
const verifikasiForm = document.getElementById("verifikasi-form");
if (verifikasiForm) {
  verifikasiForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form ke server
    window.location.href = "masuk.html"; // Arahkan ke halaman masuk
  });
}

// Tambahkan event listener ke form "Daftar"
const daftarForm = document.getElementById("daftar-form");
if (daftarForm) {
  daftarForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form ke server
    window.location.href = "masuk.html"; // Arahkan ke halaman masuk
  });
}
