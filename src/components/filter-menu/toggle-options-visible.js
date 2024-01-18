const toggleButtons = document.querySelectorAll('.option-visible-toggle');
const filterOptionContainers = document.querySelectorAll('.filter-option-container');

function toggleVisibility(button, index, filterOptionContainers) {
  const filterTitle = button.closest('.filter-title');
  const filterOptionContainer = filterTitle.nextElementSibling;

  if (filterOptionContainer.classList.contains('option-visible')) {
    filterOptionContainer.classList.replace('option-visible', 'option-invisible');
    filterOptionContainer.disabled = true;
  } else {
    filterOptionContainer.classList.replace('option-invisible', 'option-visible');
    filterOptionContainer.disabled = false;
  }

  filterOptionContainers.forEach((container, i) => {
    if (i !== index) {
      container.classList.replace('option-visible', 'option-invisible');
    }
  });
}

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleVisibility(button, index, filterOptionContainers);
  });
});

export function invisibleAllOption(containers) {
  if (containers && containers.length) {
    containers.forEach((container) => {
      container.classList.remove('option-visible');
      container.classList.add('option-invisible');
      setTimeout(() => {
        container.style.transition = '0';
      }, 300);
    });
  }
}
