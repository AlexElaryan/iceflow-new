const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
})