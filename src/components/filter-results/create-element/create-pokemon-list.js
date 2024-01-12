import { judgeFormeContent } from './create-forme-element.js';
import { judgeTypeAmount } from './create-type-element.js';
import { judgeAbilityAmount } from './create-ability-element.js';
import { createPokemonStat, createPokemonStatsTotal } from './create-stat-element.js';
import { createPokemonMoveInfo } from './create-move-element.js';
import { judgeNullValue } from '../../../utils/utils.js';

function serialNumberElement(data) {
  const serialNumberWrapper = document.createElement('div');
  const serialNumberResult = document.createElement('p');

  serialNumberWrapper.appendChild(serialNumberResult);

  serialNumberWrapper.classList.add('result', 'result-serial-number');
  serialNumberResult.textContent = `#${data.num.toString().padStart(4, '0')}`;

  return serialNumberWrapper;
}

function pokemonImageElement(data) {
  const imgNameSource = data.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const pokemonImageWrapper = document.createElement('div');
  const pokemonImageResult = document.createElement('div');

  pokemonImageWrapper.appendChild(pokemonImageResult);

  pokemonImageWrapper.classList.add('result', 'result-pokemon-image');
  pokemonImageResult.classList.add('pokemon-sprites', `bg-${imgNameSource}`);

  return pokemonImageWrapper;
}

function pokemonNameElement(data) {
  const pokemonNameWrapper = document.createElement('div');
  const pokemonNameResult = document.createElement('p');

  pokemonNameWrapper.appendChild(pokemonNameResult);

  pokemonNameWrapper.classList.add('result', 'result-pokemon-name');
  pokemonNameResult.textContent = `${data.name}`;

  return pokemonNameWrapper;
}

function pokemonFormElement(data) {
  const pokemonFormWrapper = document.createElement('div');
  const pokemonFormResult = document.createElement('p');

  pokemonFormWrapper.appendChild(pokemonFormResult);

  pokemonFormWrapper.classList.add('result', 'result-regional-form');

  judgeFormeContent(data, pokemonFormResult);
  judgeNullValue(pokemonFormResult.textContent, pokemonFormWrapper);

  return pokemonFormWrapper;
}

function speciesTypeElement(data) {
  const pokemonTypesWrapper = document.createElement('div');

  judgeTypeAmount(data, pokemonTypesWrapper);

  pokemonTypesWrapper.classList.add('result-species-group', 'pokemon-types');

  return pokemonTypesWrapper;
}

function speciesAbilityElement(data) {
  const pokemonAbilitiesWrapper = document.createElement('div');

  judgeAbilityAmount(data, pokemonAbilitiesWrapper);

  pokemonAbilitiesWrapper.classList.add('result-species-group', 'pokemon-abilities');

  return pokemonAbilitiesWrapper;
}

function statElement(data) {
  const pokemonStatsWrapper = document.createElement('div');

  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'hp'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'atk'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'def'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'spa'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'spd'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'spe'));
  pokemonStatsWrapper.appendChild(createPokemonStatsTotal(data, 'bst'));

  pokemonStatsWrapper.classList.add('result-species-group', 'pokemon-stats');

  return pokemonStatsWrapper;
}

export function moveElement(moveInfo) {
  const pokemonMovesWrapper = document.createElement('div');

  pokemonMovesWrapper.appendChild(createPokemonMoveInfo(moveInfo));

  pokemonMovesWrapper.classList.add('result-species-group', 'pokemon-moves');

  return pokemonMovesWrapper;
}

export function createPokemonIdentifyElement(data, pokemonName) {
  const resultIdentifyContainer = document.getElementById('result-identifies');
  const resultIdentifyWrapper = document.createElement('div');
  const serialNumberWrapper = serialNumberElement(data);
  const pokemonImageWrapper = pokemonImageElement(data);
  const pokemonNameWrapper = pokemonNameElement(data);
  const pokemonFormWrapper = pokemonFormElement(data);

  resultIdentifyWrapper.classList.add('result-identify', `${pokemonName}`);

  resultIdentifyContainer.appendChild(resultIdentifyWrapper);
  resultIdentifyWrapper.appendChild(serialNumberWrapper);
  resultIdentifyWrapper.appendChild(pokemonImageWrapper);
  resultIdentifyWrapper.appendChild(pokemonNameWrapper);
  resultIdentifyWrapper.appendChild(pokemonFormWrapper);

  return resultIdentifyWrapper;
}

export function createPokemonSpeciesElement(data, pokemonName, moveInfo) {
  const resultSpeciesContainer = document.getElementById('result-species');
  const resultSpeciesWrapper = document.createElement('div');
  const pokemonTypesWrapper = speciesTypeElement(data);
  const pokemonAbilitiesWrapper = speciesAbilityElement(data);
  const pokemonStatsWrapper = statElement(data);
  const pokemonMovesWrapper = moveElement(moveInfo);

  resultSpeciesWrapper.classList.add('result-species', `${pokemonName}`);

  resultSpeciesContainer.appendChild(resultSpeciesWrapper);
  resultSpeciesWrapper.appendChild(pokemonTypesWrapper);
  resultSpeciesWrapper.appendChild(pokemonAbilitiesWrapper);
  resultSpeciesWrapper.appendChild(pokemonStatsWrapper);
  resultSpeciesWrapper.appendChild(pokemonMovesWrapper);

  return resultSpeciesWrapper;
}
