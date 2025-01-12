const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const body = document.body;

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
    body.classList.toggle('menu-open');
});


const links = document.querySelectorAll('.nav a');
links.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('menu-open');
        nav.classList.remove('menu-open');
    });
});