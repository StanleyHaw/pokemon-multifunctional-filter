import { judgeNullValue } from '../../../../utils/render-null-value-element.js';

export function toggleMoveFilterResult() {
  const moveHeadingTitle = document.querySelector('.pokemon-moves');
  const moveFilterResult = document.getElementById('move-filter-result');
  const isEmpty = moveFilterResult.textContent === '';

  moveHeadingTitle.classList.toggle('hide-element', isEmpty);
}

export function createMoveResultTitle(moveName) {
  const resultTitleWrapper = document.createElement('div');
  resultTitleWrapper.classList.add('subtitle');
  resultTitleWrapper.textContent = moveName;

  const moveFilterResult = document.getElementById('move-filter-result');
  moveFilterResult.appendChild(resultTitleWrapper);

  return resultTitleWrapper;
}

export function createPokemonMoveInfo(moveInfo) {
  const pokemonMoveInfo = document.createElement('div');
  pokemonMoveInfo.classList.add('result', 'result-move-info');

  const pokemonMoveInfoParagraph = document.createElement('p');
  pokemonMoveInfoParagraph.textContent = moveInfo;
  judgeNullValue(moveInfo, pokemonMoveInfo);

  pokemonMoveInfo.appendChild(pokemonMoveInfoParagraph);

  return pokemonMoveInfo;
}
