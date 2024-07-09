document.addEventListener('DOMContentLoaded', function() {
    function toggleMenu() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    }

    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', toggleMenu);

    const navLinkElements = document.querySelectorAll('.nav-links a');
    navLinkElements.forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.getElementById('nav-links');
            navLinks.classList.remove('active'); // Ensure the menu closes
        });
    });
});