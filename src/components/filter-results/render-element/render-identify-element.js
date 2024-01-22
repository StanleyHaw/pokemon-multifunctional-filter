import { isNullContentElement } from '../../../utils/render-null-content-element.js';

function renderIdentifyElement(wrapper, item, content) {
  const nullContentElement = isNullContentElement(content) ? ' null-element' : '';

  if (item === 'pokemon-image') {
    wrapper.innerHTML += `
    <div class="result result-${item}">
      <div class="pokemon-image img-${content}"></div>
    </div>
    `;
  } else {
    wrapper.innerHTML += `
    <div class="result result-${item}${nullContentElement}">
      <p>${content}</p>
    </div>
    `;
  }
}

export function renderPokemonIdentifiesElement(data) {
  const { num, name, baseForme, forme } = data;
  const serialNumber = `#${num.toString().padStart(4, '0')}`;
  const pokemonName = name;
  const convertedPokemonName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const pokemonForme = baseForme || forme || '';

  const resultIdentifiesContainer = document.getElementById('result-identifies');
  const resultIdentifyWrapper = document.createElement('div');

  resultIdentifyWrapper.classList.add('result-identify', `${convertedPokemonName}`);
  resultIdentifiesContainer.appendChild(resultIdentifyWrapper);

  renderIdentifyElement(resultIdentifyWrapper, 'serial-number', serialNumber);
  renderIdentifyElement(resultIdentifyWrapper, 'pokemon-image', convertedPokemonName);
  renderIdentifyElement(resultIdentifyWrapper, 'pokemon-name', pokemonName);
  renderIdentifyElement(resultIdentifyWrapper, 'pokemon-forme', pokemonForme);

  return resultIdentifyWrapper;
}
