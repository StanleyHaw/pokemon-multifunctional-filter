import { renderResultTypesElement } from './species-result/render-type-element.js';
import { renderResultAbilities } from './species-result/render-ability-element.js';
import { renderResultStatsElement } from './species-result/render-stat-element.js';
import { renderResultMovesElement } from './species-result/render-move-element.js';

export function renderPokemonSpeciesElement(data, moveInfoList) {
  const resultSpeciesContainer = document.getElementById('result-species');
  const resultSpeciesWrapper = document.createElement('div');
  const pokemonName = data.name.toLowerCase().replace(/[^a-z0-9]/g, '');

  resultSpeciesContainer.appendChild(resultSpeciesWrapper);
  renderResultTypesElement(resultSpeciesWrapper, data);
  renderResultAbilities(resultSpeciesWrapper, data);
  renderResultStatsElement(resultSpeciesWrapper, data);
  renderResultMovesElement(resultSpeciesWrapper, moveInfoList);

  resultSpeciesWrapper.classList.add('result-species', `${pokemonName}`);

  return resultSpeciesWrapper;
}
