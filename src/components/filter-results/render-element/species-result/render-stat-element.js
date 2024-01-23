export function renderResultBaseStats(wrapper, data) {
  const pokemonStatsWrapper = document.createElement('div');
  const baseStats = ['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'bst'];

  pokemonStatsWrapper.classList.add('result-species-group', 'pokemon-stats');

  baseStats.forEach((baseStat) => {
    const baseStatTotal = Object.values(data.baseStats).reduce((total, value) => total + value, 0);

    if (baseStat !== 'bst') {
      pokemonStatsWrapper.innerHTML += `
      <div class="result result-base-stat stat-${baseStat}">
        <p>${data.baseStats[baseStat]}</p>
      </div>
    `;
    } else {
      pokemonStatsWrapper.innerHTML += `
      <div class="result result-base-stat stat-bst">
        <p>${baseStatTotal}</p>
      </div>
    `;
    }
  });

  wrapper.appendChild(pokemonStatsWrapper);
}
