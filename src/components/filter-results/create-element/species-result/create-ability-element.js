import { judgeNullValue } from '../../../../utils/render-null-value-element.js';

export function createSingleAbilityElement(ability, className) {
  const pokemonAbility = document.createElement('div');
  const pokemonAbilityParagraph = document.createElement('p');

  pokemonAbility.classList.add('result', className);
  pokemonAbilityParagraph.textContent = ability;

  pokemonAbility.appendChild(pokemonAbilityParagraph);

  return pokemonAbility;
}

export function createDoubleAbilitiesElement(ability1, ability2, className) {
  const pokemonAbility1 = createSingleAbilityElement(ability1, className);
  const pokemonAbility2 = createSingleAbilityElement(ability2, className);

  return [pokemonAbility1, pokemonAbility2];
}

export function createHiddenAbilityElement(hiddenAbility) {
  const pokemonHiddenAbility = document.createElement('div');
  const pokemonHiddenAbilityParagraph = document.createElement('p');

  pokemonHiddenAbility.classList.add('result', 'result-ability-hidden');
  pokemonHiddenAbilityParagraph.textContent = hiddenAbility;

  pokemonHiddenAbility.appendChild(pokemonHiddenAbilityParagraph);
  judgeNullValue(hiddenAbility, pokemonHiddenAbility);

  return pokemonHiddenAbility;
}
