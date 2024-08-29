
  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    menuButton.addEventListener('click', function () {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      
      menuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      hamburgerIcon.classList.toggle('scale-90');
      hamburgerIcon.classList.toggle('opacity-0');
      closeIcon.classList.toggle('scale-90');
      closeIcon.classList.toggle('opacity-0');
    });
  });