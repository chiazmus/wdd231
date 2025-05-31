const timestamp = document.getElementById('timestamp');
const now = new Date();

console.log(now.toLocaleString());
timestamp.value = now.toLocaleString();