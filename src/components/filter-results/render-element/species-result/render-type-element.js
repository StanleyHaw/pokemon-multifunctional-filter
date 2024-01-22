const AMOUNT = {
  1: 'uni',
  2: 'duo',
};

export function renderResultTypesElement(wrapper, data) {
  const pokemonTypesWrapper = document.createElement('div');
  pokemonTypesWrapper.classList.add('result-species-group', 'pokemon-types');

  const length = data.types.length;
  data.types.forEach((type) => {
    const contentType = type.toLowerCase();

    pokemonTypesWrapper.innerHTML += `
      <div class="result type-${contentType} result-${AMOUNT[length]}-type">
        <div class="type-icon icon-type-${contentType}"></div>
        <p>${contentType}</p>
      </div>
    `;
  });

  wrapper.appendChild(pokemonTypesWrapper);
}
