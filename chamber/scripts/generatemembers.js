const memberCards = document.getElementById('memberCards');

const fillMemberCards = (members) => {
    members.forEach(member => {
        const card = document.createElement('div');
        const name = document.createElement('h3');
        const address = document.createElement('p');
        const phoneNumber = document.createElement('p');
        const webUrl = document.createElement('a');
        const membershipLevel = document.createElement('p');
        const icon = document.createElement('img');
        const businessType = document.createElement('p');

        name.textContent = member.name;

        address.textContent = member.address;
        phoneNumber.textContent = member.phoneNumber;
        webUrl.href = member.websiteUrl;
        webUrl.textContent = member.websiteUrl;
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        membershipLevel.classList.add('list-invisible');
        icon.src = member.iconFileName;
        icon.alt = 'icon';
        icon.loading = 'lazy';
        icon.width = 500;
        icon.height = 500;
        icon.classList.add('list-invisible');
        businessType.textContent = member.businessType;
        businessType.classList.add('list-invisible');

        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(webUrl);
        card.appendChild(membershipLevel);
        card.appendChild(businessType);

        card.classList.add('card');


        memberCards.appendChild(card);
    });
};

async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    fillMemberCards(data.members);
};

getMembers();