import { createSingleTypeElement, createDoubleTypesElement } from './type-element-creator.js';
import {
  createSingleAbilityElement,
  createDoubleAbilitiesElement,
  createHiddenAbilityElement,
} from './create-ability-element.js';
import { judgeNullValue } from './judge-forme-value.js';
import { createPokemonStat, createPokemonStatsTotal } from './create-stat-element.js';

export function createPokemonIdentifyElement(data) {
  const resultIdentifyWrapper = document.createElement('div');
  resultIdentifyWrapper.classList.add('result-identify');

  const serialNumberWrapper = document.createElement('div');
  serialNumberWrapper.classList.add('result', 'result-serial-number');
  const serialNumberResult = document.createElement('p');
  serialNumberResult.textContent = `#${data.num.toString().padStart(4, '0')}`;
  serialNumberWrapper.appendChild(serialNumberResult);

  const pokemonPictureWrapper = document.createElement('div');
  pokemonPictureWrapper.classList.add('result', 'result-pokemon-picture');
  const pokemonPictureResult = document.createElement('div');
  pokemonPictureResult.classList.add('pokemon-image');
  //   pokemonPictureResult.id = `${data.img}-image`;
  pokemonPictureWrapper.appendChild(pokemonPictureResult);

  const pokemonNameWrapper = document.createElement('div');
  pokemonNameWrapper.classList.add('result', 'result-pokemon-name');
  const pokemonNameResult = document.createElement('p');
  pokemonNameResult.textContent = `${data.name}`;
  pokemonNameWrapper.appendChild(pokemonNameResult);

  const pokemonFormWrapper = document.createElement('div');
  pokemonFormWrapper.classList.add('result', 'result-regional-form');
  const pokemonFormResult = document.createElement('p');
  pokemonFormResult.textContent = `${data.forme}`;
  judgeNullValue(pokemonFormResult.textContent, pokemonFormWrapper);
  pokemonFormWrapper.appendChild(pokemonFormResult);

  resultIdentifyWrapper.appendChild(serialNumberWrapper);
  resultIdentifyWrapper.appendChild(pokemonPictureWrapper);
  resultIdentifyWrapper.appendChild(pokemonNameWrapper);
  resultIdentifyWrapper.appendChild(pokemonFormWrapper);

  const resultIdentifyContainer = document.getElementById('result-identifies');
  resultIdentifyContainer.appendChild(resultIdentifyWrapper);
  return resultIdentifyWrapper;
}

export function createPokemonSpeciesElement(data) {
  const resultSpeciesWrapper = document.createElement('div');
  resultSpeciesWrapper.classList.add('result-species');

  const pokemonTypesWrapper = document.createElement('div');
  pokemonTypesWrapper.classList.add('result-species-group', 'pokemon-types');
  const firstType = data.types[0]?.toLowerCase();
  const secondType = data.types[1]?.toLowerCase();
  if (!secondType) {
    const pokemonSingleType = createSingleTypeElement(firstType);
    pokemonTypesWrapper.appendChild(pokemonSingleType);
  } else if (secondType) {
    const [pokemonFirstType, pokemonSecondType] = createDoubleTypesElement(firstType, secondType);
    pokemonTypesWrapper.appendChild(pokemonFirstType);
    pokemonTypesWrapper.appendChild(pokemonSecondType);
  }

  const pokemonAbilitiesWrapper = document.createElement('div');
  pokemonAbilitiesWrapper.classList.add('result-species-group', 'pokemon-abilities');
  const firstAbility = data.abilities[0]?.toLowerCase();
  const secondAbility = data.abilities[1]?.toLowerCase();
  const hiddenAbility = data.abilities['H']?.toLowerCase();
  if (firstAbility && !secondAbility && !hiddenAbility) {
    const pokemonSingleAbility = createSingleAbilityElement(firstAbility);
    const pokemonHiddenAbility = createHiddenAbilityElement('');

    pokemonAbilitiesWrapper.appendChild(pokemonSingleAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonHiddenAbility);
  } else if (firstAbility && secondAbility && hiddenAbility) {
    const [pokemonFirstAbility, pokemonSecondAbility] = createDoubleAbilitiesElement(
      firstAbility,
      secondAbility,
    );
    const pokemonHiddenAbility = createHiddenAbilityElement(hiddenAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonFirstAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonSecondAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonHiddenAbility);
  } else if (firstAbility && !secondAbility && hiddenAbility) {
    const pokemonFirstAbility = createSingleAbilityElement(firstAbility);
    const pokemonHiddenAbility = createHiddenAbilityElement(hiddenAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonFirstAbility);
    pokemonAbilitiesWrapper.appendChild(pokemonHiddenAbility);
  }

  const pokemonStatsWrapper = document.createElement('div');
  pokemonStatsWrapper.classList.add('result-species-group', 'pokemon-stats');
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'hp'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'atk'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'def'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'spa'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'spd'));
  pokemonStatsWrapper.appendChild(createPokemonStat(data, 'spe'));
  pokemonStatsWrapper.appendChild(createPokemonStatsTotal(data, ''));

  resultSpeciesWrapper.appendChild(pokemonTypesWrapper);
  resultSpeciesWrapper.appendChild(pokemonAbilitiesWrapper);
  resultSpeciesWrapper.appendChild(pokemonStatsWrapper);
  // resultSpeciesWrapper.appendChild(pokemonMovesWrapper);

  const resultSpeciesContainer = document.getElementById('result-species');
  resultSpeciesContainer.appendChild(resultSpeciesWrapper);
  return resultSpeciesWrapper;
}
