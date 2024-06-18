document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var scroll = window.scrollY; // Get the vertical scroll position
        var navbar = document.querySelector('.netflix-navbar');
        
        if (scroll > 100) {
            navbar.style.background = '#0c0c0c';
        } else {
            navbar.style.background = 'transparent';
        }
    });
});