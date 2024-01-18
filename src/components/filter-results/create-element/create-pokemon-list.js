import { convertToCleanString } from '../../../utils/convert-string.js';
import { appendInfoBlock } from './idenfity-result/create-identify-result.js';
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

  const { name, num, baseForme, forme } = data;
  const serialNumber = num.toString().padStart(4, '0');
  const imgName = data.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const formeContent = baseForme || forme || '';

  resultIdentifyWrapper.classList.add('result-identify', `${pokemonName}`);
  resultIdentifyContainer.appendChild(resultIdentifyWrapper);
  appendInfoBlock(resultIdentifyWrapper, 'serial-number', serialNumber);
  appendInfoBlock(resultIdentifyWrapper, 'pokemon-image', imgName);
  appendInfoBlock(resultIdentifyWrapper, 'pokemon-name', name);
  appendInfoBlock(resultIdentifyWrapper, 'regional-form', formeContent);

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
