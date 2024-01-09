export function createSingleType(type) {
  const pokemonType = document.createElement('div');
  pokemonType.classList.add('result', `type-${type}`, 'result-type-single');

  const pokemonTypeIcon = document.createElement('div');
  pokemonTypeIcon.classList.add('type-sprites', `bg-type-${type}`);

  const pokemonTypeParagraph = document.createElement('p');
  pokemonTypeParagraph.textContent = type;

  pokemonType.appendChild(pokemonTypeIcon);
  pokemonType.appendChild(pokemonTypeParagraph);

  return pokemonType;
}

export function createDoubleTypes(type1, type2) {
  const pokemonType1 = document.createElement('div');
  pokemonType1.classList.add('result', `type-${type1}`, 'result-type-double');

  const pokemonTypeIcon1 = document.createElement('div');
  pokemonTypeIcon1.classList.add('type-sprites', `bg-type-${type1}`);

  const pokemonTypeParagraph1 = document.createElement('p');
  pokemonTypeParagraph1.textContent = type1;

  const pokemonType2 = document.createElement('div');
  pokemonType2.classList.add('result', `type-${type2}`, 'result-type-double');

  const pokemonTypeIcon2 = document.createElement('div');
  pokemonTypeIcon2.classList.add('type-sprites', `bg-type-${type2}`);

  const pokemonTypeParagraph2 = document.createElement('p');
  pokemonTypeParagraph2.textContent = type2;

  pokemonType1.appendChild(pokemonTypeIcon1);
  pokemonType1.appendChild(pokemonTypeParagraph1);
  pokemonType2.appendChild(pokemonTypeIcon2);
  pokemonType2.appendChild(pokemonTypeParagraph2);

  const pokemonTypes = [pokemonType1, pokemonType2];

  return pokemonTypes;
}
