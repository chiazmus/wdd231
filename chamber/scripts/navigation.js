const hamButton = document.getElementById('menuButton')
const navMenu = document.getElementById('navigation');

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
});