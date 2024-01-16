import { calculateTotalBaseStats } from '../../../../utils/components/calculate-stat-BST.js';

export function createPokemonStatElement(data, stat) {
  const statResult = data.baseStats[stat];
  return createStatWrapper(statResult, stat);
}

export function createPokemonStatsTotal(data, bst) {
  const statResult = calculateTotalBaseStats(data);
  return createStatWrapper(statResult, bst);
}

function createStatWrapper(statResult, statName) {
  const statWrapper = document.createElement('div');
  const statResultWrapper = document.createElement('p');

  statWrapper.classList.add('result', 'result-stat', `stat-${statName}`);
  statResultWrapper.textContent = statResult;
  statWrapper.appendChild(statResultWrapper);

  return statWrapper;
}
