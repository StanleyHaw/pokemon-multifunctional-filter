import { convertToCleanString } from '../../../utils/convert-string.js';
import {
  serialNumberElement,
  pokemonImageElement,
  pokemonNameElement,
  pokemonFormElement,
} from './idenfity-result/create-identify-result.js';
import {
  renderSpeciesTypeElement,
  speciesAbilityElement,
  baseStatElement,
  moveElement,
} from './species-result/create-species-result.js';

export function createPokemonIdentifyElement(data) {
  const resultIdentifyContainer = document.getElementById('result-identifies');
  const resultIdentifyWrapper = document.createElement('div');
  const pokemonName = convertToCleanString(data.name);

  resultIdentifyContainer.appendChild(resultIdentifyWrapper);
  resultIdentifyWrapper.appendChild(serialNumberElement(data));
  resultIdentifyWrapper.appendChild(pokemonImageElement(data));
  resultIdentifyWrapper.appendChild(pokemonNameElement(data));
  resultIdentifyWrapper.appendChild(pokemonFormElement(data));

  resultIdentifyWrapper.classList.add('result-identify', `${pokemonName}`);

  return resultIdentifyWrapper;
}

export function createPokemonSpeciesElement(data, moveInfo) {
  const resultSpeciesContainer = document.getElementById('result-species');
  const resultSpeciesWrapper = document.createElement('div');
  const pokemonName = convertToCleanString(data.name);

  resultSpeciesContainer.appendChild(resultSpeciesWrapper);
  renderSpeciesTypeElement(resultSpeciesWrapper, data);
  resultSpeciesWrapper.appendChild(speciesAbilityElement(data));
  resultSpeciesWrapper.appendChild(baseStatElement(data));
  resultSpeciesWrapper.appendChild(moveElement(moveInfo));

  resultSpeciesWrapper.classList.add('result-species', `${pokemonName}`);

  return resultSpeciesWrapper;
}
