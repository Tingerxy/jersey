const date = new Date();
const year = date.getFullYear();
document.querySelector('footer p').innerHTML += ` | ${year}`;

const header = document.querySelector('header');

header.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#f0f0f0';
});

header.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '';
});

let originalTitle = document.title;

window.addEventListener('mouseout', function(event) {
    if (event.toElement === null && event.relatedTarget === null) {
        document.title = "Revenez vite !";
    }
});

window.addEventListener('mouseover', function(event) {
    if (event.fromElement === null && event.relatedTarget === null) {
        document.title = originalTitle;
    }
});
