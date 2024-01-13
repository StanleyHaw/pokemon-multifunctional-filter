import { closeFilterMenu } from '../components/filter-menu/toggle-menu-visible.js';

let overlayContainer = [];

function createOverlay(overlayClassName) {
  const main = document.querySelector('main');
  overlayContainer = document.createElement('div');
  overlayContainer.classList.add(`${overlayClassName}-invisible`);
  main.insertBefore(overlayContainer, main.firstChild);

  setTimeout(() => {
    overlayContainer.classList.remove(`${overlayClassName}-invisible`);
    overlayContainer.classList.add(`${overlayClassName}-visible`);
  }, 0);
}

function removeOverlay(overlayClassName) {
  const main = document.querySelector('main');
  overlayContainer.classList.remove(`${overlayClassName}-visible`);
  overlayContainer.classList.add(`${overlayClassName}-invisible`);

  setTimeout(() => {
    if (!overlayContainer) return;
    main.removeChild(overlayContainer);
  }, 300);
}

export function toggleFullScreenOverlay(menuVisible, overlayClassName) {
  if (menuVisible) {
    createOverlay(overlayClassName);
  } else if (menuVisible === false) {
    removeOverlay(overlayClassName);
  }

  overlayContainer.addEventListener('click', () => {
    closeFilterMenu();
  });
  // HACK: This function is used in closeFilterMenu(), but it also appears within this function.
}
