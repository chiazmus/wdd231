const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach(element => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const dateofBirth = document.createElement('p');
        const placeofBirth = document.createElement('p');

        fullName.textContent = `${element.name} ${element.lastname}`;
        portrait.src = element.imageurl;
        portrait.alt = `President ${element.name} ${element.lastname}`;
        portrait.loading = 'lazy';
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        dateofBirth.textContent = `Date of Birth: ${element.birthdate}`;
        placeofBirth.textContent = `Place of Birth: ${element.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(dateofBirth);
        card.appendChild(placeofBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

async function getProphetData() {
    const response = await fetch(url);
    const data =  await response.json();
    displayProphets(data.prophets);
}

getProphetData();