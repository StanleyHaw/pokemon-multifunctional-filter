const filterMenuToggleButton = document.querySelector('.filter-button');
const filterDisplay = document.querySelector('.filter-display');
const filterArrowIcon = filterMenuToggleButton.querySelector('.fa-angle-left');
const filterMenu = document.querySelector('.filter-menu');
const filterResultHead = document.querySelector('.filter-result-head');
const filterResultBody = document.querySelector('.filter-result-body');

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

filterMenuToggleButton.addEventListener('click', toggleFilterMenu);
