import { renderResultTypes } from './species-result/render-type-element.js';
import { renderResultAbilities } from './species-result/render-ability-element.js';
import { renderResultBaseStats } from './species-result/render-stat-element.js';
import { renderResultMoves } from './species-result/render-move-element.js';

export function renderPokemonSpeciesElement(data, moveInfoList) {
  const resultSpeciesContainer = document.getElementById('result-species');
  const resultSpeciesWrapper = document.createElement('div');
  const pokemonName = data.name.toLowerCase().replace(/[^a-z0-9]/g, '');

  resultSpeciesContainer.appendChild(resultSpeciesWrapper);
  renderResultTypes(resultSpeciesWrapper, data);
  renderResultAbilities(resultSpeciesWrapper, data);
  renderResultBaseStats(resultSpeciesWrapper, data);
  renderResultMoves(resultSpeciesWrapper, moveInfoList);

  resultSpeciesWrapper.classList.add('result-species', `${pokemonName}`);

  return resultSpeciesWrapper;
}
