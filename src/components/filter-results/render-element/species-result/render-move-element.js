import { isNullContentElement } from '../../../../utils/render-null-content-element.js';

export function renderMoveSubtitleElement(moveList) {
  const moveHeadingWrapper = document.querySelector('.pokemon-moves');
  const moveFilterResult = document.getElementById('move-filter-result');

  if (moveFilterResult === '' || !moveList || moveList.length === 0) {
    return moveHeadingWrapper.classList.toggle('hide-element');
  }

  moveList.forEach((moveName) => {
    moveFilterResult.innerHTML += `
    <div id="${moveName}" class="subtitle">
      <p>${moveName}</p>
    </div>
  `;
  });
}

function renderMoveInfoElement(wrapper, moveInfo) {
  const nullContentElement = isNullContentElement(moveInfo) ? ' null-element' : '';

  wrapper.innerHTML += `
    <div class="result result-move-info${nullContentElement}">
      <p>${moveInfo}</p>
    </div>
`;
}

export function renderResultMovesElement(wrapper, moveInfoList) {
  const pokemonMovesWrapper = document.createElement('div');
  pokemonMovesWrapper.classList.add('result-species-group', 'pokemon-moves');

  moveInfoList.forEach((moveInfo) => {
    renderMoveInfoElement(pokemonMovesWrapper, moveInfo);
  });

  wrapper.appendChild(pokemonMovesWrapper);
}
