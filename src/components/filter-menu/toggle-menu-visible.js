import { toggleTransition } from '../../utils/add-transition.js';
import { invisibleAllOption } from './toggle-options-visible.js';
import { toggleFullScreenOverlay } from '../../utils/toggle-overlay.js';

const filterMenuToggleButton = document.querySelector('.filter-button');
const filterDisplay = document.querySelector('.filter-display');
const filterArrowIcon = filterMenuToggleButton.querySelector('.fa-angle-left');
const filterMenu = document.querySelector('.filter-menu');
const filterResultHead = document.querySelector('.filter-result-head');
const filterResultBody = document.querySelector('.filter-result-body');
const filterMenuCloseButton = document.querySelector('.close-menu');
const filterOptionContainers = document.querySelectorAll('.filter-option-container');

function toggleElementClassName(element, className1, className2, menuVisible) {
  element.classList.toggle(className1, !menuVisible);
  element.classList.toggle(className2, menuVisible);
  toggleTransition(element);
}

function toggleFilterDisplayCollapse(menuVisible) {
  toggleElementClassName(filterDisplay, 'display-default-size', 'display-collapse', menuVisible);
}

function toggleFilterResultCollapse(menuVisible) {
  toggleElementClassName(filterResultHead, 'result-default-size', 'result-collapse', menuVisible);
  toggleElementClassName(filterResultBody, 'result-default-size', 'result-collapse', menuVisible);
}

function toggleMenuVisible(menuVisible) {
  toggleElementClassName(filterMenu, 'menu-invisible', 'menu-visible', menuVisible);
}

function toggleFilterMenu() {
  const menuVisible = filterMenu.classList.contains('menu-invisible');

  toggleFilterDisplayCollapse(menuVisible);
  toggleFilterResultCollapse(menuVisible);
  toggleMenuVisible(menuVisible);
  toggleFullScreenOverlay(menuVisible, 'menu-overlay');
  invisibleAllOption(filterOptionContainers);

  filterArrowIcon.classList.toggle('fa-angle-left', !menuVisible);
  filterArrowIcon.classList.toggle('fa-angle-right', menuVisible);
}

export function closeFilterMenu() {
  toggleFilterResultCollapse(false);
  toggleMenuVisible(false);
  toggleFullScreenOverlay(false, 'menu-overlay');
  invisibleAllOption(filterOptionContainers);

  filterDisplay.classList.replace('display-collapse', 'display-default-size');

  if (filterArrowIcon.classList.contains('fa-angle-right')) {
    filterArrowIcon.classList.replace('fa-angle-right', 'fa-angle-left');
  }
}

filterMenuToggleButton.addEventListener('click', toggleFilterMenu);
filterMenuCloseButton.addEventListener('click', closeFilterMenu);
