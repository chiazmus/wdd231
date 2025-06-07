import {places} from '../data/places.mjs'

const placeCards = document.getElementById('placeCards');

const generateCard = (place) => {
    const card = document.createElement('div');
    const name = document.createElement('h2');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const location = document.createElement('address');
    const learnMore = document.createElement('button');
    card.className = 'place-card';
    name.textContent = place.name;
    img.src = place.imgUrl;
    img.alt = `Photo of ${place.name}`;
    img.width = 600;
    img.height = 337;
    // img.loading = 'lazy';
    description.textContent = place.description;
    location.textContent = place.address;
    learnMore.textContent = 'Learn More';
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(description);
    card.appendChild(location);
    card.appendChild(learnMore);
    placeCards.appendChild(card);
}

places.forEach(generateCard);