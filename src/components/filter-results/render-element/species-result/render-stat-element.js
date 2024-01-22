export function renderResultStatsElement(wrapper, data) {
  const pokemonStatsWrapper = document.createElement('div');
  const statList = ['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'bst'];
  const baseStatTotal = Object.values(data.baseStats).reduce(
    (total, value) => total + value,
    0
  );

  pokemonStatsWrapper.classList.add('result-species-group', 'pokemon-stats');
  statList.forEach((baseStat) => {
    const isTotalStat = baseStat === 'bst';
    const content = isTotalStat ? baseStatTotal : data.baseStats[baseStat];

    pokemonStatsWrapper.innerHTML += `
    <div class="result result-base-stat stat-${baseStat}">
      <p>${content}</p>
    </div>
  `;
  });

  wrapper.appendChild(pokemonStatsWrapper);
}
