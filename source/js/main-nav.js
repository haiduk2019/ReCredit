let navMain = document.querySelector('.js-main-nav');
let navToggle = document.querySelector('.js-main-nav__toggle');
let langMenu = document.querySelector('.js-lang-menu');


navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('main-nav__toggle--active');
  navMain.classList.toggle('main-nav--active');
  langMenu.classList.toggle('lang-menu--active');
});


