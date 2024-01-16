import {
  createSingleAbilityElement,
  createDoubleAbilitiesElement,
  createHiddenAbilityElement
} from '../../components/filter-results/create-element/species-result/create-ability-element.js';

export function judgeAbilityAmount(data, pokemonAbilitiesWrapper) {
  const firstAbility = data.abilities[0]?.toLowerCase();
  const secondAbility = data.abilities[1]?.toLowerCase();
  const hiddenAbility = data.abilities['H']?.toLowerCase();

  if (!firstAbility) return;
  if (!secondAbility && !hiddenAbility) {
    const ability1 = createSingleAbilityElement(firstAbility, 'result-ability-single');
    const abilityH = createHiddenAbilityElement('');
    pokemonAbilitiesWrapper.append(ability1, abilityH);
  } else if (!secondAbility && hiddenAbility) {
    const ability1 = createSingleAbilityElement(firstAbility, 'result-ability-single');
    const abilityH = createHiddenAbilityElement(hiddenAbility);
    pokemonAbilitiesWrapper.append(ability1, abilityH);
  } else if (secondAbility && hiddenAbility) {
    const [ability1, ability2] = createDoubleAbilitiesElement(firstAbility, secondAbility, 'result-ability-double');
    const abilityH = createHiddenAbilityElement(hiddenAbility);
    pokemonAbilitiesWrapper.append(ability1, ability2, abilityH);
  }
}
