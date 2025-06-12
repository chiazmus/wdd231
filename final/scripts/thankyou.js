const card = document.querySelector('#thankyouCard');
const timesVisited = Number(localStorage.getItem('timesVisited')) || 0;
const formInfo = new URLSearchParams(window.location.search);
const group = localStorage.getItem('group') || formInfo.get('groupMembership');
let thankYouMessage;

if (timesVisited < 1) {
    thankYouMessage = `Thank you for submitting an application to join the ${group}!  Your application has been submitted!`;
} else if (timesVisited > 1) {
    thankYouMessage = `You've already submitted an application to join the ${group}!  You will be notified when your application is approved.`;
}

const message = document.createElement('h2');
message.textContent = thankYouMessage;
card.appendChild(message);

localStorage.setItem('timesVisited', Number(timesVisited) + 1);
if (!localStorage.getItem('group')) localStorage.setItem('group', group);