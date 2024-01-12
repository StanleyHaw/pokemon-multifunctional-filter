import './filter-display.scss';
import './scroll-inset-shadow.js';
import { toggleTransition } from '../../utils/add-transition.js';
import { invisibleAllOption } from '../filter-menu/toggle-options-UI.js';

const filterMenuToggleButton = document.querySelector('.filter-button');
const filterDisplay = document.querySelector('.filter-display');
const filterArrowIcon = filterMenuToggleButton.querySelector('.fa-angle-left');
const filterMenu = document.querySelector('.filter-menu');
const filterResultHead = document.querySelector('.filter-result-head');
const filterResultBody = document.querySelector('.filter-result-body');
const filterMenuCloseButton = document.querySelector('.close-menu');
const filterOptionContainers = document.querySelectorAll('.filter-option-container');

function toggleFilterDisplayCollapse(menuVisible) {
  filterDisplay.classList.toggle('display-default-size', !menuVisible);
  filterDisplay.classList.toggle('display-collapse', menuVisible);
  toggleTransition(filterDisplay);
}

function toggleFilterResultCollapse(menuVisible) {
  filterResultHead.classList.toggle('result-default-size', !menuVisible);
  filterResultHead.classList.toggle('result-collapse', menuVisible);
  toggleTransition(filterResultHead);

  filterResultBody.classList.toggle('result-default-size', !menuVisible);
  filterResultBody.classList.toggle('result-collapse', menuVisible);
  toggleTransition(filterResultBody);
}

function toggleMenuVisible(menuVisible) {
  filterMenu.classList.toggle('menu-invisible', !menuVisible);
  filterMenu.classList.toggle('menu-visible', menuVisible);
  toggleTransition(filterMenu);
}

function toggleFilterMenu() {
  const menuVisible = filterMenu.classList.contains('menu-invisible');

  toggleFilterDisplayCollapse(menuVisible);
  toggleFilterResultCollapse(menuVisible);
  toggleMenuVisible(menuVisible);
  filterArrowIcon.classList.toggle('fa-angle-left', !menuVisible);
  filterArrowIcon.classList.toggle('fa-angle-right', menuVisible);

  if (menuVisible) {
    invisibleAllOption(filterOptionContainers);
  }
}

function closeFilterMenu() {
  toggleFilterResultCollapse(false);
  toggleMenuVisible(false);
  filterDisplay.classList.remove('display-collapse');
  filterDisplay.classList.add('display-default-size');

  if (filterArrowIcon.classList.contains('fa-angle-right')) {
    filterArrowIcon.classList.remove('fa-angle-right');
    filterArrowIcon.classList.add('fa-angle-left');
  }
}

filterMenuToggleButton.addEventListener('click', toggleFilterMenu);
filterMenuCloseButton.addEventListener('click', closeFilterMenu);
