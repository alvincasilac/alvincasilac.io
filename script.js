function nextPage() {
    // Track yes button click
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'button',
            'event_label': 'yes'
        });
    }
    window.location.href = "yes.html";
}

function moveButton() {
    // Track no button click
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'button',
            'event_label': 'no'
        });
    }

    const button = document.getElementById("noButton");
    if (!button) {
        return;
    }

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const maxX = Math.max(0, viewportWidth - button.offsetWidth);
    const maxY = Math.max(0, viewportHeight - button.offsetHeight);

    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.transform = "none";
    button.blur();
}
