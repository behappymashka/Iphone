const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const body = document.body;


btn.addEventListener('click', (e) => {
    nav.classList.toggle('menu-open');
});



btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
    body.classList.toggle('menu-open');
});