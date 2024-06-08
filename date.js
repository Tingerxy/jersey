const date = new Date();
const year = date.getFullYear();
document.querySelector('footer p').innerHTML += ` | ${year}`;
