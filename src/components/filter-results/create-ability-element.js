import { judgeNullValue } from './judge-forme-value.js';

export function createSingleAbility(ability) {
  const pokemonAbility = document.createElement('div');
  pokemonAbility.classList.add('result', 'result-ability-single');

  const pokemonAbilityParagraph = document.createElement('p');
  pokemonAbilityParagraph.textContent = ability;

  pokemonAbility.appendChild(pokemonAbilityParagraph);

  return pokemonAbility;
}

export function createDoubleAbilities(ability1, ability2) {
  const pokemonAbility1 = document.createElement('div');
  pokemonAbility1.classList.add('result', 'result-ability-double');

  const pokemonAbilityParagraph1 = document.createElement('p');
  pokemonAbilityParagraph1.textContent = ability1;

  const pokemonAbility2 = document.createElement('div');
  pokemonAbility2.classList.add('result', 'result-ability-double');

  const pokemonAbilityParagraph2 = document.createElement('p');
  pokemonAbilityParagraph2.textContent = ability2;

  pokemonAbility1.appendChild(pokemonAbilityParagraph1);
  pokemonAbility2.appendChild(pokemonAbilityParagraph2);

  const pokemonAbilities = [pokemonAbility1, pokemonAbility2];

  return pokemonAbilities;
}

export function createHiddenAbilityElement(hiddenAbility) {
  const pokemonHiddenAbility = document.createElement('div');
  pokemonHiddenAbility.classList.add('result', 'result-ability-hidden');

  const pokemonHiddenAbilityParagraph = document.createElement('p');
  pokemonHiddenAbilityParagraph.textContent = hiddenAbility;
  judgeNullValue(hiddenAbility, pokemonHiddenAbility);

  pokemonHiddenAbility.appendChild(pokemonHiddenAbilityParagraph);

  return pokemonHiddenAbility;
}
