import { judgeNullValue } from '../../../utils/utils.js';

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

export function getContentAfterNumber(inputString) {
  const index = 1;
  const textAfter9 = inputString.charAt(index);
  const text = {
    E: () => 'egg move',
    L: () => getNumberAfterL(inputString),
    M: () => 'TM'
  };
  return text[textAfter9]();
}

export function getNumberAfterL(inputString) {
  const substringAfterL = inputString.substring(2);
  return substringAfterL;
}

export function findPriorityMove(array) {
  const priorityMoveWithL = array.find((item) => item.includes('L'));
  if (priorityMoveWithL) {
    return priorityMoveWithL;
  }
  const priorityMoveWithE = array.find((item) => item.includes('E'));
  if (priorityMoveWithE) {
    return priorityMoveWithE;
  }
  const priorityMoveWithM = array.find((item) => item.includes('M'));
  return priorityMoveWithM;
}
