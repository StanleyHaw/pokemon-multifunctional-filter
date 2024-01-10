import { judgeNullValue } from './judge-forme-value.js';

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

export function getTextAfterNumber(inputString) {
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

export function findPriorityString(array) {
  const priorityStringWithL = array.find((item) => item.includes('L'));
  if (priorityStringWithL) {
    return priorityStringWithL;
  }
  const priorityStringWithE = array.find((item) => item.includes('E'));
  if (priorityStringWithE) {
    return priorityStringWithE;
  }
  const priorityStringWithM = array.find((item) => item.includes('M'));
  return priorityStringWithM;
}
