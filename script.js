const themeToggle = document.getElementById('themeToggle');
const h2minat= document.querySelector('#interests h2'); // Mengambil elemen h2 di dalam section "interests"
const h2bakat = document.querySelector('#skills h2'); // Mengambil elemen h2 di dalam section "interests"
const h2intro = document.querySelector('#intro h2'); // Mengambil elemen h2 di dalam section "interests"
const pintro = document.querySelector('#intro p'); // Mengambil elemen h2 di dalam section "interests"

themeToggle.addEventListener('click', () => {
    // Toggle theme for body
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Toggle theme for h2 in interests
    h2bakat.classList.toggle('dark-theme'); // Menambahkan kelas dark-theme pada h2
    h2bakat.classList.toggle('light-theme'); // Menambahkan kelas dark-theme pada h2
    h2minat.classList.toggle('dark-theme'); // Menambahkan kelas dark-theme pada h2
    h2minat.classList.toggle('light-theme'); // Menambahkan kelas dark-theme pada h2
    h2intro.classList.toggle('dark-theme'); // Menambahkan kelas dark-theme pada h2
    h2intro.classList.toggle('light-theme'); // Menambahkan kelas dark-theme pada h2
    pintro.classList.toggle('dark-theme'); // Menambahkan kelas dark-theme pada h2
    pintro.classList.toggle('light-theme'); // Menambahkan kelas dark-theme pada h2

    // Update button text based on the current theme
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Tema Terang';
    } else {
        themeToggle.textContent = 'Tema Gelap';
    }
});