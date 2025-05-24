const spotlights = document.getElementById('spotlights');

function createSpotlightCard(member) {
    const card = document.createElement('div');
    const tagdiv = document.createElement('div');
    const infodiv = document.createElement('div');
    const name = document.createElement('h3');
    const tagline = document.createElement('p');
    const address = document.createElement('p');
    const phoneNumber = document.createElement('p');
    const webUrlContainer = document.createElement('p');
    const webUrl = document.createElement('a');
    const icon = document.createElement('img');

    card.classList.add('business-card');
    tagdiv.classList.add('tag');
    infodiv.classList.add('info');

    name.textContent = member.name;
    tagline.textContent = 'insert tagline here';
    address.innerHTML = `<b>Address:</b> ${member.address}`;
    phoneNumber.innerHTML = `<b>Phone:</b> ${member.phoneNumber}`;
    webUrl.href = member.websiteUrl;
    webUrl.textContent = `${member.websiteUrl}`;
    webUrlContainer.innerHTML = `<b>Url:</b> `;
    webUrlContainer.appendChild(webUrl);
    icon.setAttribute('alt', 'business-logo');
    icon.setAttribute('src', member.iconFileName);

    tagdiv.appendChild(name);
    tagdiv.appendChild(tagline);
    infodiv.appendChild(address);
    infodiv.appendChild(phoneNumber);
    infodiv.appendChild(webUrlContainer);
    card.appendChild(tagdiv);
    card.appendChild(icon);
    card.appendChild(infodiv);

    spotlights.appendChild(card);
}

async function fetchData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    // console.log(data);
    const members = data.members;
    members.sort(() => Math.random() - 0.5); //This makes sure there is a random selection that way i dont have to really worry ab it.
    let card_count = 0;
    members.forEach(member => {
        if (card_count < 3 && member.membershipLevel > 1) {
            createSpotlightCard(member);
            ++card_count;
        }
    });
}

fetchData()