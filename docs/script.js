window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

// Add this script at the end of your body or in a separate JS file
document.addEventListener('DOMContentLoaded', function() {
    const flagImage = document.getElementById('flag');
    const indonesiaFlag = document.getElementById('indonesia-flag');

    indonesiaFlag.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action
        flagImage.src = 'https://img.icons8.com/color/48/indonesia.png'; // Change to Indonesia
    });
});

