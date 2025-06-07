const currentVisit = Date.now();
const lastVisit = localStorage.getItem("lastVisit") || currentVisit;
const visitDistance = currentVisit-lastVisit;
const ONEDAY = 24*60*60*1000;

const displayMessage = visitDistance === 0 ? 'Welcome!  Let us know if you have any questions.' : 
visitDistance <= ONEDAY ? "Back so soon?  Awesome!" :  
visitDistance <= ONEDAY*2 ? "You last visited 1 day ago." : `You last visited ${visitDistance / ONEDAY} days ago.`;
const messageAside = document.getElementById('messageAside');
messageAside.innerHTML = displayMessage;

localStorage.setItem("lastVisit", currentVisit);