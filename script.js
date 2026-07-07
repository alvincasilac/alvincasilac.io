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
    
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
        // On mobile, redirect to another page instead of moving
        window.location.href = "no.html";
        return;
    }
    
    // Desktop behavior: move the button
    let button = document.getElementById("noButton");
    let maxX = window.innerWidth - button.offsetWidth;
    let maxY = window.innerHeight - button.offsetHeight;
    
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
