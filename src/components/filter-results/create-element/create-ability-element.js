import { judgeNullValue } from '../../../utils/utils.js';

export function createSingleAbility(ability) {
  const pokemonAbility = document.createElement('div');
  const pokemonAbilityParagraph = document.createElement('p');

  pokemonAbility.classList.add('result', 'result-ability-single');
  pokemonAbilityParagraph.textContent = ability;

  pokemonAbility.appendChild(pokemonAbilityParagraph);

  return pokemonAbility;
}

export function createDoubleAbilities(ability1, ability2) {
  const pokemonAbility1 = document.createElement('div');
  const pokemonAbilityParagraph1 = document.createElement('p');
  const pokemonAbility2 = document.createElement('div');
  const pokemonAbilityParagraph2 = document.createElement('p');

  pokemonAbility1.classList.add('result', 'result-ability-double');
  pokemonAbilityParagraph1.textContent = ability1;
  pokemonAbility2.classList.add('result', 'result-ability-double');
  pokemonAbilityParagraph2.textContent = ability2;

  pokemonAbility1.appendChild(pokemonAbilityParagraph1);
  pokemonAbility2.appendChild(pokemonAbilityParagraph2);

  const pokemonAbilities = [pokemonAbility1, pokemonAbility2];

  return pokemonAbilities;
}

export function createHiddenAbilityElement(hiddenAbility) {
  const pokemonHiddenAbility = document.createElement('div');
  const pokemonHiddenAbilityParagraph = document.createElement('p');

  pokemonHiddenAbility.classList.add('result', 'result-ability-hidden');
  pokemonHiddenAbilityParagraph.textContent = hiddenAbility;

  judgeNullValue(hiddenAbility, pokemonHiddenAbility);

  pokemonHiddenAbility.appendChild(pokemonHiddenAbilityParagraph);

  return pokemonHiddenAbility;
}

export function judgeAbilityAmount(data, pokemonAbilitiesWrapper) {
  const firstAbility = data.abilities[0]?.toLowerCase();
  const secondAbility = data.abilities[1]?.toLowerCase();
  const hiddenAbility = data.abilities['H']?.toLowerCase();

  if (firstAbility && !secondAbility && !hiddenAbility) {
    const pokemonSingleAbility = createSingleAbility(firstAbility);
    const pokemonHiddenAbility = createHiddenAbilityElement('');
    pokemonAbilitiesWrapper.append(pokemonSingleAbility, pokemonHiddenAbility);
  } else if (firstAbility && secondAbility && hiddenAbility) {
    const [pokemonFirstAbility, pokemonSecondAbility] = createDoubleAbilities(firstAbility, secondAbility);
    const pokemonHiddenAbility = createHiddenAbilityElement(hiddenAbility);
    pokemonAbilitiesWrapper.append(pokemonFirstAbility, pokemonSecondAbility, pokemonHiddenAbility);
  } else if (firstAbility && !secondAbility && hiddenAbility) {
    const pokemonFirstAbility = createSingleAbility(firstAbility);
    const pokemonHiddenAbility = createHiddenAbilityElement(hiddenAbility);
    pokemonAbilitiesWrapper.append(pokemonFirstAbility, pokemonHiddenAbility);
  }
}
