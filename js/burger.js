// Тот же JS, но теперь работаем с .mobile-menu
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('active');
  });
  
  // Закрытие меню при клике на ссылку
  document.querySelectorAll('.mobile-menu .menu-link').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('is-active');
      mobileMenu.classList.remove('active');
    });
  });
});