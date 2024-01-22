const AMOUNT = {
  1: 'uni',
  2: 'duo'
};

function renderTypeElement(wrapper, { type, length }) {
  wrapper.innerHTML += `
  <div class="result type-${type} result-${AMOUNT[length]}-type">
    <div class="type-icon icon-type-${type}"></div>
    <p>${type}</p>
  </div>
    `;
}

export function renderResultTypesElement(wrapper, data) {
  const pokemonTypesWrapper = document.createElement('div');
  pokemonTypesWrapper.classList.add('result-species-group', 'pokemon-types');

  data.types.forEach((type) => {
    const content = {
      type: type.toLowerCase(),
      length: data.types.length
    };

    renderTypeElement(pokemonTypesWrapper, content);
  });

  wrapper.appendChild(pokemonTypesWrapper);
}
