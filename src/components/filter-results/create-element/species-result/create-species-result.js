import {
  createPokemonStatElement,
  createPokemonStatsTotal,
} from './create-stat-element.js';
import { renderTypeElement } from './create-type-element.js';
import { createPokemonMoveInfo } from '../species-result/create-move-element.js';
import { judgeAbilityAmount } from '../../../../utils/components/judge-ability-amount.js';

export function renderSpeciesTypeElement(wrapper, data) {
  const pokemonTypesWrapper = document.createElement('div');
  pokemonTypesWrapper.classList.add('result-species-group', 'pokemon-types');

  data.types.forEach((type) => {
    const content = {
      type: type.toLowerCase(),
      length: data.types.length,
    };
    renderTypeElement(pokemonTypesWrapper, content);
  });

  wrapper.appendChild(pokemonTypesWrapper);
}

export function speciesAbilityElement(data) {
  const pokemonAbilitiesWrapper = document.createElement('div');

  pokemonAbilitiesWrapper.classList.add(
    'result-species-group',
    'pokemon-abilities'
  );

  judgeAbilityAmount(data, pokemonAbilitiesWrapper);

  return pokemonAbilitiesWrapper;
}

export function baseStatElement(data) {
  const pokemonStatsWrapper = document.createElement('div');
  const statNames = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];

  statNames.forEach((stat) => {
    pokemonStatsWrapper.appendChild(createPokemonStatElement(data, stat));
  });

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
