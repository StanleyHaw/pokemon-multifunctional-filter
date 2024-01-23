import { isNullContentElement } from '../../../../utils/render-null-content-element.js';

function renderAbilitiesElement(wrapper, { firstAbility, secondAbility }) {
  const abilitiesWrapper = document.createElement('div');
  const abilities = secondAbility ? [firstAbility, secondAbility] : [firstAbility];

  abilitiesWrapper.classList.add('result-abilities');

  abilities.forEach((abilityName) => {
    abilitiesWrapper.innerHTML += `
      <div class="result result-ability">
        <p>${abilityName}</p>
      </div>
    `;
  });

  wrapper.appendChild(abilitiesWrapper);
}

function renderHiddenAbilityElement(wrapper, ability) {
  const nullContentElement = isNullContentElement(ability);

  wrapper.innerHTML += `
    <div class="result result-hidden-ability${nullContentElement}">
     ${ability ? `<p>${ability}</p>` : ''}
    </div>
  `;
}

export function renderResultAbilities(wrapper, data) {
  const pokemonAbilitiesWrapper = document.createElement('div');
  const { 0: firstAbility, 1: secondAbility, H: hiddenAbility } = data.abilities;

  pokemonAbilitiesWrapper.classList.add('result-species-group', 'pokemon-abilities');
  renderAbilitiesElement(pokemonAbilitiesWrapper, { firstAbility, secondAbility });
  renderHiddenAbilityElement(pokemonAbilitiesWrapper, hiddenAbility);

  wrapper.appendChild(pokemonAbilitiesWrapper);
}
