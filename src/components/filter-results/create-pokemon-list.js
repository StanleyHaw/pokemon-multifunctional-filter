import { createSingleType, createDoubleTypes } from './create-type-element.js';
import { createSingleAbility, createDoubleAbilities, createHiddenAbilityElement } from './create-ability-element.js';
import { judgeNullValue } from './judge-forme-value.js';
import { createPokemonStat, createPokemonStatsTotal } from './create-stat-element.js';
import { createPokemonMoveInfo } from './create-move-element.js';

function serialNumberElement(data) {
  const serialNumberWrapper = document.createElement('div');
  serialNumberWrapper.classList.add('result', 'result-serial-number');
  const serialNumberResult = document.createElement('p');
  serialNumberResult.textContent = `#${data.num.toString().padStart(4, '0')}`;
  serialNumberWrapper.appendChild(serialNumberResult);

  return serialNumberWrapper;
}

function pokemonImageElement() {
  const pokemonImageWrapper = document.createElement('div');
  pokemonImageWrapper.classList.add('result', 'result-pokemon-image');
  const pokemonImageResult = document.createElement('div');
  pokemonImageResult.classList.add('pokemon-image');
  //   pokemonImageResult.id = `${data.img}-image`;
  pokemonImageWrapper.appendChild(pokemonImageResult);

  return pokemonImageWrapper;
}

function pokemonNameElement(data) {
  const pokemonNameWrapper = document.createElement('div');
  pokemonNameWrapper.classList.add('result', 'result-pokemon-name');
  const pokemonNameResult = document.createElement('p');
  pokemonNameResult.textContent = `${data.name}`;
  pokemonNameWrapper.appendChild(pokemonNameResult);

  return pokemonNameWrapper;
}

function pokemonFormElement(data) {
  const pokemonFormWrapper = document.createElement('div');
  pokemonFormWrapper.classList.add('result', 'result-regional-form');
  const pokemonFormResult = document.createElement('p');
  pokemonFormResult.textContent = `${data.forme}`;
  judgeNullValue(pokemonFormResult.textContent, pokemonFormWrapper);
  pokemonFormWrapper.appendChild(pokemonFormResult);

  return pokemonFormWrapper;
}

function typeElement(data) {
  const pokemonTypesWrapper = document.createElement('div');
  pokemonTypesWrapper.classList.add('result-species-group', 'pokemon-types');
  const firstType = data.types[0]?.toLowerCase();
  const secondType = data.types[1]?.toLowerCase();
  if (!secondType) {
    const pokemonSingleType = createSingleType(firstType);
    pokemonTypesWrapper.appendChild(pokemonSingleType);
  } else if (secondType) {
    const [pokemonFirstType, pokemonSecondType] = createDoubleTypes(firstType, secondType);
    pokemonTypesWrapper.appendChild(pokemonFirstType);
    pokemonTypesWrapper.appendChild(pokemonSecondType);
  }

  return pokemonTypesWrapper;
}

function abilityElement(data) {
  const pokemonAbilitiesWrapper = document.createElement('div');
  pokemonAbilitiesWrapper.classList.add('result-species-group', 'pokemon-abilities');
  const firstAbility = data.abilities[0]?.toLowerCase();
  const secondAbility = data.abilities[1]?.toLowerCase();
  const hiddenAbility = data.abilities['H']?.toLowerCase();
  if (firstAbility && !secondAbility && !hiddenAbility) {
    const pokemonSingleAbility = createSingleAbility(firstAbility);
    const pokemonHiddenAbility = createHiddenAbilityElement('');
    pokemonAbilitiesWrapper.appendChild(pokemonSingleAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonHiddenAbility);
  } else if (firstAbility && secondAbility && hiddenAbility) {
    const [pokemonFirstAbility, pokemonSecondAbility] = createDoubleAbilities(firstAbility, secondAbility);
    const pokemonHiddenAbility = createHiddenAbilityElement(hiddenAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonFirstAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonSecondAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonHiddenAbility);
  } else if (firstAbility && !secondAbility && hiddenAbility) {
    const pokemonFirstAbility = createSingleAbility(firstAbility);
    const pokemonHiddenAbility = createHiddenAbilityElement(hiddenAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonFirstAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonHiddenAbility);
  }

  return pokemonAbilitiesWrapper;
}

function statElement(data) {
  const pokemonStatsWrapper = document.createElement('div');
  pokemonStatsWrapper.classList.add('result-species-group', 'pokemon-stats');
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'hp'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'atk'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'def'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'spa'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'spd'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'spe'));
  pokemonStatsWrapper.appendChild(createPokemonStatsTotal(data, ''));

  return pokemonStatsWrapper;
}

export function moveElement(moveInfo) {
  const pokemonMovesWrapper = document.createElement('div');
  pokemonMovesWrapper.classList.add('result-species-group', 'pokemon-moves');

  pokemonMovesWrapper.appendChild(createPokemonMoveInfo(moveInfo));

  return pokemonMovesWrapper;
}

export function createPokemonIdentifyElement(data) {
  const resultIdentifyWrapper = document.createElement('div');
  resultIdentifyWrapper.classList.add('result-identify');

  const serialNumberWrapper = serialNumberElement(data);
  resultIdentifyWrapper.appendChild(serialNumberWrapper);

  const pokemonImageWrapper = pokemonImageElement(data);
  resultIdentifyWrapper.appendChild(pokemonImageWrapper);

  const pokemonNameWrapper = pokemonNameElement(data);
  resultIdentifyWrapper.appendChild(pokemonNameWrapper);

  const pokemonFormWrapper = pokemonFormElement(data);
  resultIdentifyWrapper.appendChild(pokemonFormWrapper);

  const resultIdentifyContainer = document.getElementById('result-identifies');
  resultIdentifyContainer.appendChild(resultIdentifyWrapper);
  return resultIdentifyWrapper;
}

export function createPokemonSpeciesElement(data, moveInfo) {
  const resultSpeciesWrapper = document.createElement('div');
  resultSpeciesWrapper.classList.add('result-species');

  const pokemonTypesWrapper = typeElement(data);
  resultSpeciesWrapper.appendChild(pokemonTypesWrapper);

  const pokemonAbilitiesWrapper = abilityElement(data);
  resultSpeciesWrapper.appendChild(pokemonAbilitiesWrapper);

  const pokemonStatsWrapper = statElement(data);
  resultSpeciesWrapper.appendChild(pokemonStatsWrapper);

  const pokemonMovesWrapper = moveElement(moveInfo);
  resultSpeciesWrapper.appendChild(pokemonMovesWrapper);

  const resultSpeciesContainer = document.getElementById('result-species');
  resultSpeciesContainer.appendChild(resultSpeciesWrapper);
  return resultSpeciesWrapper;
}
