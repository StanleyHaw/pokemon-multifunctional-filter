export function renderResultTypes(wrapper, data) {
  const pokemonTypesWrapper = document.createElement('div');

  pokemonTypesWrapper.classList.add('result-species-group', 'pokemon-types');

  data.types.forEach((type) => {
    const typeName = type.toLowerCase();

    pokemonTypesWrapper.innerHTML += `
    <div class="result type-${typeName} result-type">
      <div class="type-icon icon-type-${typeName}"></div>
      <p>${typeName}</p>
    </div>
      `;
  });

  wrapper.appendChild(pokemonTypesWrapper);
}
