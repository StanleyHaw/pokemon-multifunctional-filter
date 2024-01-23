import { isNullContentElement } from '../../../../utils/render-null-content-element.js';

export function renderMoveSubtitleElement(moveList) {
  const moveHeadingWrapper = document.querySelector('.pokemon-moves');
  const moveNameWrapper = document.getElementById('move-filter-result');

  if (moveList.length === 0) {
    moveHeadingWrapper.classList.toggle('hide-element');
  } else {
    moveList.forEach((moveName) => {
      moveNameWrapper.innerHTML += `
        <div id="${moveName}" class="subtitle">
          <p>${moveName}</p>
        </div>
      `;
    });
  }
}

export function renderResultMoves(wrapper, moveInfoList) {
  const pokemonMovesWrapper = document.createElement('div');
  pokemonMovesWrapper.classList.add('result-species-group', 'pokemon-moves');

  moveInfoList.forEach((moveInfo) => {
    const nullContentElement = isNullContentElement(moveInfo);

    pokemonMovesWrapper.innerHTML += `
      <div class="result result-move-info${nullContentElement}">
        <p>${moveInfo}</p>
      </div>
    `;
  });

  wrapper.appendChild(pokemonMovesWrapper);
}
