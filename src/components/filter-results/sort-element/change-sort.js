const statHpTitle = document.getElementById('stat-hp');
const statAtkTitle = document.getElementById('stat-atk');
const statDefTitle = document.getElementById('stat-def');
const statSpaTitle = document.getElementById('stat-spa');
const statSpdTitle = document.getElementById('stat-spd');
const statSpeTitle = document.getElementById('stat-spe');
const statBstTitle = document.getElementById('stat-bst');

function extractValue(result, stat) {
  const statType = result.querySelector(`.stat-${stat} p`).textContent;
  return parseInt(statType);
}

function toggleSortClass(element) {
  element.classList.toggle('sorted');
}

let isDescending = false;
let lastSortedStat = null;

function sortResults(stat) {
  const speciesWrapper = document.getElementById('result-species');
  const speciesList = speciesWrapper.querySelectorAll('.result-species');
  const identifiesWrapper = document.getElementById('result-identifies');
  const identifiesList = identifiesWrapper.querySelectorAll('.result-identify');

  const speciesArray = Array.from(speciesList);
  const identifiesArray = Array.from(identifiesList);

  const originalIdentifiesOrder = Array.from(identifiesArray);

  speciesArray.sort(function (a, b) {
    const valueA = extractValue(a, stat);
    const valueB = extractValue(b, stat);

    if (isDescending) {
      return valueA - valueB;
    } else {
      return valueB - valueA;
    }
  });

  if (speciesArray.length > 0) {
    identifiesWrapper.innerHTML = '';

    identifiesArray.sort((a, b) => {
      const valueA = extractValue(document.querySelector(`.${a.classList[1]}`), stat);
      const valueB = extractValue(document.querySelector(`.${b.classList[1]}`), stat);

      if (isDescending) {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    });

    speciesArray.forEach(function (resultSpecies, index) {
      speciesWrapper.appendChild(resultSpecies);

      const originalIndex = originalIdentifiesOrder.indexOf(identifiesArray[index]);
      const resultIdentify = identifiesList[originalIndex];

      identifiesWrapper.appendChild(resultIdentify);
    });

    const currentStat = speciesArray[0].querySelector(`.stat-${stat}`);
    if (currentStat) {
      toggleSortClass(currentStat);
    }
  }
}

function toggleDefaultSort(stat) {
  const statButton = document.getElementById(`stat-${stat}`);

  if (lastSortedStat && lastSortedStat !== stat) {
    const lastSortedButton = document.getElementById(`stat-${lastSortedStat}`);
    lastSortedButton.classList.remove('sort-descending', 'sort-ascending');
    const icon = lastSortedButton.querySelector('i');
    if (icon) {
      icon.remove();
    }
  }

  if (lastSortedStat !== stat) {
    isDescending = false;
    lastSortedStat = stat;
    statButton.classList.add('sort-descending');
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-sort');
    statButton.appendChild(icon);
  } else {
    isDescending = !isDescending;
    statButton.classList.toggle('sort-descending', !isDescending);
    statButton.classList.toggle('sort-ascending', isDescending);
    const icon = statButton.querySelector('i');
    if (icon) {
      icon.remove();
    }
    const newIcon = document.createElement('i');
    newIcon.classList.add('fa-solid', 'fa-sort');
    statButton.appendChild(newIcon);
  }

  sortResults(stat, lastSortedStat);
}

statHpTitle.addEventListener('click', function () {
  toggleDefaultSort('hp');
});

statAtkTitle.addEventListener('click', function () {
  toggleDefaultSort('atk');
});

statDefTitle.addEventListener('click', function () {
  toggleDefaultSort('def');
});

statSpaTitle.addEventListener('click', function () {
  toggleDefaultSort('spa');
});

statSpdTitle.addEventListener('click', function () {
  toggleDefaultSort('spd');
});

statSpeTitle.addEventListener('click', function () {
  toggleDefaultSort('spe');
});

statBstTitle.addEventListener('click', function () {
  toggleDefaultSort('bst');
});
