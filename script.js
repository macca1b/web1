document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        console.log('Toggle menu');
        navLinks.classList.toggle('active');
    }

    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
        console.log('Menu icon found and event listener added');
    } else {
        console.log('Menu icon not found');
    }

    const navLinkElements = document.querySelectorAll('.nav-links a');
    navLinkElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            console.log('Nav link clicked');

            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active'); // Ensure the menu closes

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Smooth scroll to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});