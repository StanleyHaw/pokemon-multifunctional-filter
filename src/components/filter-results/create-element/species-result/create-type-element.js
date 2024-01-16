export function createSingleTypeElement(type, className) {
  const pokemonType = document.createElement('div');
  const pokemonTypeIcon = document.createElement('div');
  const pokemonTypeParagraph = document.createElement('p');

  pokemonType.classList.add('result', `type-${type}`, className);
  pokemonTypeIcon.classList.add('type-sprites', `bg-type-${type}`);
  pokemonTypeParagraph.textContent = type;

  pokemonType.append(pokemonTypeIcon, pokemonTypeParagraph);

  return pokemonType;
}

export function createDoubleTypesElement(type1, type2, className) {
  const pokemonType1 = createSingleTypeElement(type1, className);
  const pokemonType2 = createSingleTypeElement(type2, className);

  return [pokemonType1, pokemonType2];
}
