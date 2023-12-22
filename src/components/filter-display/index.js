const filterMenuToggleButton = document.querySelector('.filter-button');
const filterDisplay = document.querySelector('.filter-display');
const filterArrowIcon = filterMenuToggleButton.querySelector('.fa-angle-left');
const filterMenu = document.querySelector('.filter-menu');
const filterResultHead = document.querySelector('.filter-result-head');
const filterResultBody = document.querySelector('.filter-result-body');
const filterMenuCloseButton = document.querySelector('.close-menu');

function toggleFilterMenu() {
  const isExpanded = filterDisplay.classList.contains('display-expand');

  filterDisplay.classList.toggle('display-expand', !isExpanded);
  filterDisplay.classList.toggle('display-collapse', isExpanded);

  filterArrowIcon.classList.toggle('fa-angle-left', !isExpanded);
  filterArrowIcon.classList.toggle('fa-angle-right', isExpanded);

  filterMenu.classList.toggle('menu-visible', isExpanded);
  filterMenu.classList.toggle('menu-invisible', !isExpanded);

  filterResultHead.classList.toggle('result-expand', !isExpanded);
  filterResultHead.classList.toggle('result-collapse', isExpanded);

  filterResultBody.classList.toggle('result-expand', !isExpanded);
  filterResultBody.classList.toggle('result-collapse', isExpanded);
}

function closeFilterMenu() {
  filterDisplay.classList.remove('display-collapse');
  filterDisplay.classList.add('display-expand');

  filterArrowIcon.classList.remove('fa-angle-right');
  filterArrowIcon.classList.add('fa-angle-left');

  filterMenu.classList.remove('menu-visible');
  filterMenu.classList.add('menu-invisible');

  filterResultHead.classList.remove('result-collapse');
  filterResultHead.classList.add('result-expand');

  filterResultBody.classList.remove('result-collapse');
  filterResultBody.classList.add('result-expand');
}

filterMenuToggleButton.addEventListener('click', toggleFilterMenu);
filterMenuCloseButton.addEventListener('click', closeFilterMenu);
// TODO: At resolutions of 1024px or below, pressing the `filterMenuToggleButton` will display an overlay.
// Pressing the `filterMenuCloseButton` will make the overlay disappear.
