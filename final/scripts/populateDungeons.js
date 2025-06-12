const dungeonContainer = document.getElementById('dungeonCards');
const dialogBox = document.getElementById('dungeonDialog');

const showDialog = (dungeon) => {
    dialogBox.innerHTML = '';
    dialogBox.innerHTML = `
    <h3>${dungeon.name}</h3>
    <p class="description">${dungeon.deepDescription}</p>
    <button id="closeModal">❌</button>
    `;
    dialogBox.showModal();
    const closeButton = document.getElementById('closeModal');
    closeButton.addEventListener('click', () => {
        dialogBox.close();
    });
}

const addDungeon = (dungeon) => {
    const card = document.createElement('div');
    const title = document.createElement('h3');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const dangerLevel = document.createElement('p');
    const learnMore = document.createElement('button');
    title.textContent = dungeon.name;
    image.src = dungeon.img;
    image.alt = `Image of ${dungeon.name}`;
    image.width = 800;
    image.height = 450;
    image.loading = 'lazy';
    description.textContent = dungeon.description;
    dangerLevel.innerHTML = `<strong>Danger Level:</strong> ${dungeon.dangerLevel}`;
    learnMore.textContent = 'learn more';
    learnMore.addEventListener('click', () => showDialog(dungeon));
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(dangerLevel);
    card.appendChild(learnMore);

    card.classList.add('card');
    dungeonContainer.appendChild(card);
};

const clearDungeons = () => {
    dungeonContainer.innerHTML = '';
};

const populateDungeons = (dungeons) => {
    clearDungeons();
    dungeons.forEach(addDungeon);
}

async function getDungeonInfo() {
    try {
        let response = await fetch('./data/dungeons.json');
        let data = await response.json();
        populateDungeons(data);
    } catch (error) {
        alert(error);
    }
}

getDungeonInfo();