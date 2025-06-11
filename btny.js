window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('backToTop');
    if (window.pageYOffset > 300) { // Показывать кнопку после прокрутки 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

document.getElementById('backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});