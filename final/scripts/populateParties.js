const partyContainer = document.getElementById('joinCards');
const group = document.getElementById('groupMembership');

const addParty = (party) => {
    const card = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('ul');
    const dangerLevel = document.createElement('li');
    const partyLeader = document.createElement('li');
    const expectedLoot = document.createElement('li');
    const partyLocation = document.createElement('li');
    const partyMembers = document.createElement('li');
    const formOption = document.createElement('option');
    formOption.value = `party of ${party.partyLeader}`;
    formOption.textContent = `Party of ${party.partyLeader}`;
    title.textContent = `${party.adventurerType} wanted!`;
    dangerLevel.innerHTML = `<strong>Danger Level:</strong> ${party.dangerLevel}`;
    partyLeader.innerHTML = `<strong>Party Leader:</strong> ${party.partyLeader}`;
    expectedLoot.innerHTML = `<strong>Expected Loot:</strong> ${party.expectedLoot}`;
    partyLocation.innerHTML = `<strong>Location:</strong> ${party.location}`;
    partyMembers.innerHTML = `<strong>Total Party Members:</strong> ${party.totalPartyMembers}`;
    description.appendChild(partyLeader)
    description.appendChild(partyLocation);
    description.appendChild(expectedLoot);
    description.appendChild(dangerLevel);
    description.appendChild(partyMembers);
    card.appendChild(title);
    card.appendChild(description);

    card.classList.add('card');
    partyContainer.appendChild(card);
    group.appendChild(formOption);
};

const clearParties = () => {
    partyContainer.innerHTML = '';
};

const populateParties = (parties) => {
    clearParties();
    parties.forEach(addParty);
}

async function getPartyInfo() {
    try {
        let response = await fetch('./data/parties.json');
        let data = await response.json();
        populateParties(data);
    } catch (error) {
        console.log(error);
    }
}

getPartyInfo();