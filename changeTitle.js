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
