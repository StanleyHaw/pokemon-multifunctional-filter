import { isNullContentElement } from '../../../../utils/render-null-content-element.js';

function renderAbilityElement(wrapper, ability, hasSecond) {
  const amount = hasSecond ? 'duo' : 'uni';
  const nullContentElement = isNullContentElement(ability.H) ? ' null-element' : '';
  const generateAbilityHTML = (content) => `
    <div class="result result-${amount}-ability">
      <p>${content}</p>
    </div>
  `;
  const hiddenAbilityInnerHTML = `
    <div class="result result-hidden-ability${nullContentElement}">
      <p>${ability.H !== undefined ? ability.H : ''}</p>
    </div>
  `;
  const uniAbilityInnerHTML = generateAbilityHTML(ability[0]);
  const duoAbilitiesInnerHTML = generateAbilityHTML(ability[0]) + generateAbilityHTML(ability[1]);

  if (hasSecond) {
    wrapper.innerHTML += duoAbilitiesInnerHTML + hiddenAbilityInnerHTML;
  } else if (!hasSecond) {
    wrapper.innerHTML += uniAbilityInnerHTML + hiddenAbilityInnerHTML;
  }
}

export function renderResultAbilitiesElement(wrapper, data) {
  const pokemonAbilitiesWrapper = document.createElement('div');
  const hasSecond = '1' in data.abilities;

  pokemonAbilitiesWrapper.classList.add('result-species-group', 'pokemon-abilities');
  renderAbilityElement(pokemonAbilitiesWrapper, data.abilities, hasSecond);

  wrapper.appendChild(pokemonAbilitiesWrapper);
}
