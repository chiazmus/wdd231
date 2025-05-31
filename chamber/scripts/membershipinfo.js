const dialogBox = document.querySelector('#membershipDialog');
const nonProfitButton = document.getElementById('nonProfitButton');
const bronzeButton = document.getElementById('bronzeButton');
const silverButton = document.getElementById('silverButton');
const goldButton = document.getElementById('goldButton');

const showMemberInfo = (membershipType) => {
    const types = [
        {name: 'Non Profit Membership', description: 'Non Profit Memberships are our cheapest option with minimal perks, but are perfect for a small business or non-profit organization.', 
        cost: 0, benefits: 'Its free!'},
        {name: 'Bronze Membership', description: 'Our Bronze membership is one of our cheaper options, but is usually best for small business owners looking to get started with the Chamber of Commerce.', 
        cost: 15.99, benefits: 'Free business training, premium advertising.'},
        {name: 'Silver Membership', description: 'Our Silver Membership is our middle option, perfect for small, medium, and large businesses looking to expand their advertising options and be part of the palmerston north community!', 
        cost: 24.99, benefits: 'Spotlight on the front page, free business training, premium advertising.'},
        {name: 'Gold Membership', description: 'Our Gold Membership is our most expensive option, but offers the most perks, including numerous special events and advertising options for your business!', 
        cost: 35.99, benefits: 'The works.  Weekly spotlights, free business training, premium advertising, special events, and more!'}
    ];
    dialogBox.innerHTML = '';
    dialogBox.innerHTML = `
    <h3>${types[membershipType].name}</h3>
    <p class="description">${types[membershipType].description}</p>
    <p><b>Cost:</b> $${types[membershipType].cost.toFixed(2)} per month</p>
    <p><b>Benefits:</b> ${types[membershipType].benefits}</p>
    <button id="closeModal">❌</button>
    `;
    dialogBox.showModal();
    const closeButton = document.getElementById('closeModal');
    closeButton.addEventListener('click', () => {
        dialogBox.close();
    });

};

nonProfitButton.addEventListener('click', () => {
    showMemberInfo(0);
});

bronzeButton.addEventListener('click', () => {
    showMemberInfo(1);
});

silverButton.addEventListener('click', () => {
    showMemberInfo(2);
});

goldButton.addEventListener('click', () => {
    showMemberInfo(3);
});