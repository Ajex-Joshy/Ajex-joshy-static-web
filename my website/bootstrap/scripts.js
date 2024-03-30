// JavaScript to add a class to the navbar when scrolled

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var navLinks = document.querySelectorAll('.nav-link');
    var current = '';

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(function(navLink) {
        navLink.classList.remove('active');
        if (navLink.getAttribute('href').substring(1) === current) {
            navLink.classList.add('active');
        }
    });
});
