import { judgeNullValue } from '../../../../utils/render-null-value-element.js';
import { judgeFormeContent } from '../../../../utils/components/judge-forme-result.js';

function createResultElement(wrapperClass, resultContent) {
  const resultWrapper = document.createElement('div');
  const resultParagraph = document.createElement('p');

  resultWrapper.appendChild(resultParagraph);
  resultWrapper.classList.add('result', `result-${wrapperClass}`);
  resultParagraph.textContent = resultContent;

  return resultWrapper;
}

export function serialNumberElement(data) {
  const serialNumber = `#${data.num.toString().padStart(4, '0')}`;
  return createResultElement('serial-number', serialNumber);
}

export function pokemonImageElement(data) {
  const imgNameSource = data.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const pokemonImageWrapper = document.createElement('div');
  const pokemonImageResult = document.createElement('div');

  pokemonImageWrapper.appendChild(pokemonImageResult);

  pokemonImageWrapper.classList.add('result', 'result-pokemon-image');
  pokemonImageResult.classList.add('pokemon-sprites', `bg-${imgNameSource}`);

  return pokemonImageWrapper;
}

export function pokemonNameElement(data) {
  const pokemonName = data.name;
  return createResultElement('pokemon-name', pokemonName);
}

export function pokemonFormElement(data) {
  const resultContent = '';
  const pokemonFormWrapper = createResultElement('regional-form', resultContent);
  const pokemonFormResult = pokemonFormWrapper.querySelector('p');

  judgeFormeContent(data, pokemonFormResult);
  judgeNullValue(pokemonFormResult.textContent, pokemonFormWrapper);

  return pokemonFormWrapper;
}
