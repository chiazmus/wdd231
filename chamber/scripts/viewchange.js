const changeButton = document.getElementById('viewButton');
const cards = document.getElementById('memberCards');

changeButton.addEventListener('click', () => {
    console.log('clicked');
    if (changeButton.textContent === 'Grid') {
        changeButton.textContent = 'List';
    } else {
        changeButton.textContent = 'Grid';
    }
    cards.classList.toggle('gridView');
});