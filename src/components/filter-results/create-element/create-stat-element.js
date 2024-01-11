export function createPokemonStat(data, stat) {
  const statResult = data.baseStats[stat];
  const statWrapper = document.createElement('div');
  statWrapper.classList.add('result', 'result-stat', `stat-${stat}`);
  const statResultWrapper = document.createElement('p');
  statResultWrapper.textContent = statResult;
  statWrapper.appendChild(statResultWrapper);

  return statWrapper;
}

export function calculateTotalBaseStats(data) {
  let totalStats = 0;

  for (const stat in data.baseStats) {
    if (data.baseStats[stat] && typeof data.baseStats[stat] === 'number') {
      totalStats += data.baseStats[stat];
    }
  }

  return totalStats;
}

export function createPokemonStatsTotal(data, bst) {
  const statsTotal = calculateTotalBaseStats(data);
  const statsWrapper = document.createElement('div');
  statsWrapper.classList.add('result', 'result-stat', `stat-${bst}`);
  const statsTotalWrapper = document.createElement('p');
  const boldFont = document.createElement('b');
  boldFont.textContent = statsTotal;
  statsTotalWrapper.appendChild(boldFont);
  statsWrapper.appendChild(statsTotalWrapper);

  return statsWrapper;
}
