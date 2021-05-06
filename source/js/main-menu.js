const pageHeader = document.querySelector('.page-header');
const pageHeaderNavigationToggle = pageHeader.querySelector('.page-header__navigation__toggle');
const mainNavigation = pageHeader.querySelector('.main-navigation');

pageHeaderNavigationToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  pageHeader.classList.toggle('page-header--navigation-closed');
  pageHeader.classList.toggle('page-header--navigation-open');
  mainNavigation.classList.toggle('main-navigation--disabled');
  mainNavigation.classList.toggle('main-navigation--show');
})
