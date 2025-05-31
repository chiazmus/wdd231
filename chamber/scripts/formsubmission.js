const results = document.getElementById('results');
const formInfo = new URLSearchParams(window.location.search);
const firstName = formInfo.get('firstName');
const lastName = formInfo.get('lastName');
const email = formInfo.get('email');
const organization = formInfo.get('organization');
const membershipLevel = formInfo.get('membershipLevel');
const timeStamp = formInfo.get('timestamp');

results.innerHTML = `
    <h2>Thank you for your interest in the Palmerston North Chamber of Commerce!</h2>
    <h3>Your Submission has been sent, and we will reach out to you shortly.</h3>
    <p><b>Name: </b>${firstName} ${lastName}</p>
    <p><b>Email: </b>${email}</p>
    <p><b>Organization: </b>${organization}</p>
    <p><b>Membership Level: </b>${membershipLevel}</p>
    <p><b>Date of Submission: </b>${timeStamp}</p>
`;
