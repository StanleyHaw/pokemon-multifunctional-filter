import { isNullContentElement } from '../../../../utils/render-null-content-element.js';

function renderAbilitiesGroup(parentWrapper, { firstAbility, secondAbility }) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('result-abilities-group', 'pokemon-abilities');

  const abilities = secondAbility
    ? [firstAbility, secondAbility]
    : [firstAbility];

  abilities.forEach((ability) => {
    wrapper.innerHTML += `<div class="result result-ability">
      <p>${ability}</p>
    </div>`;
  });

  parentWrapper.appendChild(wrapper);
}

function renderHiddenAbility(parentWrapper, content) {
  const nullContentElement = isNullContentElement(content);
  const hiddenAbilityInnerHTML = `
    <div class="result result-hidden-ability${nullContentElement}">
      ${nullContentElement ? null : `<p>${content}</p>`}
    </div>
  `;

  parentWrapper.innerHTML += hiddenAbilityInnerHTML;
}

export function renderResultAbilities(parentWrapper, data) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('result-species-group');

  const {
    0: firstAbility,
    1: secondAbility,
    H: hiddenAbility,
  } = data.abilities;

  renderAbilitiesGroup(wrapper, { firstAbility, secondAbility });
  renderHiddenAbility(wrapper, hiddenAbility);
  parentWrapper.appendChild(wrapper);
}
