function renderStatElement(wrapper, data, baseStat) {
  const baseStatTotal = Object.values(data.baseStats).reduce((total, value) => total + value, 0);

  if (baseStat !== 'bst') {
    wrapper.innerHTML += `
    <div class="result result-base-stat stat-${baseStat}">
      <p>${data.baseStats[baseStat]}</p>
    </div>
  `;
  } else if (baseStat === 'bst') {
    wrapper.innerHTML += `
    <div class="result result-base-stat stat-bst">
      <p>${baseStatTotal}</p>
    </div>
  `;
  }
}

export function renderResultStatsElement(wrapper, data) {
  const pokemonStatsWrapper = document.createElement('div');
  const baseStats = ['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'bst'];

  pokemonStatsWrapper.classList.add('result-species-group', 'pokemon-stats');
  baseStats.forEach((baseStat) => {
    renderStatElement(pokemonStatsWrapper, data, baseStat);
  });

  wrapper.appendChild(pokemonStatsWrapper);
}
