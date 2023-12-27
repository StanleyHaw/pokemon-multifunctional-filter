import './scroll-inset-shadow.js';

const filterMenuToggleButton = document.querySelector('.filter-button');
const filterDisplay = document.querySelector('.filter-display');
const filterArrowIcon = filterMenuToggleButton.querySelector('.fa-angle-left');
const filterMenu = document.querySelector('.filter-menu');
const filterResultHead = document.querySelector('.filter-result-head');
const filterResultBody = document.querySelector('.filter-result-body');
const filterMenuCloseButton = document.querySelector('.close-menu');

function toggleTransition(item) {
  item.classList.add('run-transition');
  setTimeout(function () {
    item.classList.remove('run-transition');
  }, 300);
}

function toggleCollapse(item, transitionClass, menuVisible) {
  item.classList.toggle(`${transitionClass}-default-size`, !menuVisible);
  item.classList.toggle(`${transitionClass}-collapse`, menuVisible);
  toggleTransition(item);
}

function toggleVisibleAndInvisible(item, transitionClass, menuVisible) {
  item.classList.toggle(`${transitionClass}-invisible`, !menuVisible);
  item.classList.toggle(`${transitionClass}-visible`, menuVisible);
  toggleTransition(item);
}

function toggleFilterMenu() {
  const menuVisible = filterMenu.classList.contains('menu-invisible');

  toggleCollapse(filterDisplay, 'display', menuVisible);
  toggleCollapse(filterResultHead, 'result', menuVisible);
  toggleCollapse(filterResultBody, 'result', menuVisible);
  toggleVisibleAndInvisible(filterMenu, 'menu', menuVisible);
  filterArrowIcon.classList.toggle('fa-angle-left', !menuVisible);
  filterArrowIcon.classList.toggle('fa-angle-right', menuVisible);
}

function closeFilterMenu() {
  toggleCollapse(filterResultHead, 'result', false);
  toggleCollapse(filterResultBody, 'result', false);
  toggleVisibleAndInvisible(filterMenu, 'menu', false);
  filterDisplay.classList.remove('display-collapse');
  filterDisplay.classList.add('display-default-size');

  if (filterArrowIcon.classList.contains('fa-angle-right')) {
    filterArrowIcon.classList.remove('fa-angle-right');
    filterArrowIcon.classList.add('fa-angle-left');
  }
}

filterMenuToggleButton.addEventListener('click', toggleFilterMenu);
filterMenuCloseButton.addEventListener('click', closeFilterMenu);
// TODO: At resolutions of 1024px or below, pressing the `filterMenuToggleButton` will display an overlay.
// Pressing the `filterMenuCloseButton` will make the overlay disappear.
