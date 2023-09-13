const d = new Date();
document.getElementById('demo').innerHTML = 'Copyright ' + d.getFullYear();

// script.js

function toggleMenu() {
    const menu = document.querySelector('.responsive-menu');
    menu.classList.toggle('active');
}
