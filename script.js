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
    // Track no button click/hover
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'button',
            'event_label': 'no'
        });
    }
    
    let button = document.getElementById("noButton");
    let maxX = window.innerWidth - button.offsetWidth;
    let maxY = window.innerHeight - button.offsetHeight;
    
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
