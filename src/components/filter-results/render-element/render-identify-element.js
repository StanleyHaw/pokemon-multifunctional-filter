import { isNullContentElement } from '../../../utils/render-null-content-element.js';

function renderIdentifyElement(wrapper, item, content) {
  const nullContentElement = isNullContentElement(content);

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

export function renderIdentifiesElement(data) {
  const { num, name, baseForme, forme } = data;
  const serialNumber = `#${num.toString().padStart(4, '0')}`;
  const convertedName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const validForme = baseForme || forme || '';

  const container = document.getElementById('result-identifies');
  const wrapper = document.createElement('div');

  wrapper.classList.add('result-identify', `${convertedName}`);
  container.appendChild(wrapper);

  renderIdentifyElement(wrapper, 'serial-number', serialNumber);
  renderIdentifyElement(wrapper, 'pokemon-image', convertedName);
  renderIdentifyElement(wrapper, 'pokemon-name', name);
  renderIdentifyElement(wrapper, 'pokemon-forme', validForme);

  return wrapper;
}
