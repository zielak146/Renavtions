const navBtn = document.querySelector('.navbar-toggler');
const navbarItems = document.querySelector('.navbar-items');

navBtn.addEventListener('click', () => {
    navbarItems.classList.toggle('navbar-items--active');
});

// Close the navigation menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarItems.classList.remove('navbar-items--active');
    });
});





 


