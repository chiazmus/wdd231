const dungeonSpotlight = document.getElementById('dungeons');
const partySpotlight = document.getElementById('parties');

const addDungeon = (dungeon) => {
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const learnButton = document.createElement('button');
    title.textContent = dungeon.name;
    description.textContent = dungeon.description;
    learnButton.textContent = 'Learn More';
    learnButton.addEventListener('click', () => {
        try {
            window.location.href = './dungeons.html';
        } catch (error) {
            alert('There was an error going to that page.');
        }
    });
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(learnButton);
    card.classList.add('card');
    dungeonSpotlight.appendChild(card);
};

const addParty = (party) => {
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const descriptions = document.createElement('ul');
    const partyLeader = document.createElement('li');
    const partyLocation = document.createElement('li');
    const lootExpected = document.createElement('li');
    const joinButton = document.createElement('button');
    title.textContent = `${party.adventurerType} Wanted!`;
    partyLeader.innerHTML = `<strong>Party Leader:</strong> ${party.partyLeader}`;
    partyLocation.innerHTML = `<strong>Venturing to:</strong> ${party.location}`;
    lootExpected.innerHTML = `<strong>Expected Loot:</strong> ${party.expectedLoot}`;
    joinButton.textContent = 'Join Party';
    joinButton.addEventListener('click', () => {
        try {
            window.location.href = './join.html';
        } catch (error) {
            alert('There was an error going to that page.');
        }
    });
    descriptions.appendChild(partyLeader);
    descriptions.appendChild(partyLocation);
    descriptions.appendChild(lootExpected);
    card.appendChild(title);
    card.appendChild(descriptions);
    card.appendChild(joinButton);
    card.classList.add('card');
    partySpotlight.appendChild(card);
}

const clearParties = () => {
    partySpotlight.innerHTML = '';
}

const clearDungeons = () => {
    dungeonSpotlight.innerHTML = '';
};

const populateDungeons = (dungeons) => {
    clearDungeons();
    let dungeonSample = dungeons.filter(dungeon => dungeon.dangerLevel <= 3);
    dungeonSample = dungeonSample.sort(() => Math.random() - 0.5);
    let dungeonslice = dungeonSample.slice(0,3);
    dungeonslice.forEach(addDungeon);
};

const populateParties = (parties) => {
    clearParties();
    let partySample = parties.sort(() => Math.random() - 0.5);
    partySample = parties.slice(0,2);
    partySample.forEach(addParty);
};

async function getDungeonInfo() {
    try {
        let response = await fetch('./data/dungeons.json');
        let data = await response.json();
        populateDungeons(data);
    } catch (error) {
        alert(error);
    }
}

async function getPartyInfo() {
    try {
        let response = await fetch('./data/parties.json');
        let data = await response.json();
        populateParties(data);
    } catch (error) {
        alert(error);
    }
}


getDungeonInfo();
getPartyInfo();