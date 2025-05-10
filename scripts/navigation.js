const hamButton = document.getElementById('menu')
const navMenu = document.getElementById('navigation');

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('menu-selected');
    hamButton.classList.toggle('menu-selected');
});