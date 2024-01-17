const AMOUNT = {
  1: 'single',
  2: 'double',
};

export function renderTypeElement(wrapper, { type, length }) {
  const pokemonType = document.createElement('div');
  const pokemonTypeIcon = document.createElement('div');
  const pokemonTypeParagraph = document.createElement('p');

  pokemonType.classList.add(
    'result',
    `type-${type}`,
    `result-type-${AMOUNT[length]}`
  );
  pokemonTypeIcon.classList.add('type-sprites', `bg-type-${type}`);
  pokemonTypeParagraph.textContent = type;

  pokemonType.append(pokemonTypeIcon, pokemonTypeParagraph);

  wrapper.append(pokemonType);
}
