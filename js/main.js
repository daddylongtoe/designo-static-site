// Selectors
const menuIcon = document.querySelector('.navbar__menu-icon');
const menuIconItems = document.querySelectorAll('.navbar__menu-icon-item');
const menu = document.querySelector('.navbar__menu');

// Functions
const toggleOpenMenuClass = () => {
  menu.classList.toggle('navbar__menu--open');
  menuIconItems.forEach((item) =>
    item.classList.toggle('navbar__menu-icon-item--active')
  );
};

// Event Listenenrs
menuIcon.addEventListener('click', toggleOpenMenuClass);
