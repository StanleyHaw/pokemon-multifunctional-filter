const chooseType = document.querySelector('.choose-type');
const buttonSelectAll = chooseType.querySelector('.select-clear-all-toggle');
const buttonReverseSelectAll = chooseType.querySelector('.reverse-all-toggle');

let checkedCount = 0;

function selectAllType() {
  const typeCheckboxes = document.querySelectorAll('.type-checkbox');

  typeCheckboxes.forEach((typeCheckbox) => {
    typeCheckbox.checked = true;
    checkAllCheckboxStatus(typeCheckbox);
  });
}

function reverseSelectAll() {
  const typeCheckboxes = document.querySelectorAll('.type-checkbox');

  typeCheckboxes.forEach((typeCheckbox) => {
    typeCheckbox.checked = !typeCheckbox.checked;
    checkAllCheckboxStatus(typeCheckbox);
  });
}

function checkAllCheckboxStatus() {
  const typeCheckboxes = document.querySelectorAll('.type-checkbox');
  checkedCount = Array.from(typeCheckboxes).filter((checkbox) => checkbox.checked).length;

  if (checkedCount === typeCheckboxes.length) {
    buttonReverseSelectAll.classList.add('button-disabled');
  } else {
    buttonReverseSelectAll.classList.remove('button-disabled');
  }

  if (checkedCount === 1) {
    typeCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.disabled = true;
      }
    });
  } else {
    typeCheckboxes.forEach((checkbox) => {
      checkbox.disabled = false;
    });
  }
}

const typeCheckboxes = document.querySelectorAll('.type-checkbox');
typeCheckboxes.forEach((typeCheckbox) => {
  typeCheckbox.addEventListener('click', () => checkAllCheckboxStatus(typeCheckbox));
});

checkAllCheckboxStatus();

buttonSelectAll.addEventListener('click', selectAllType);
buttonReverseSelectAll.addEventListener('click', reverseSelectAll);
