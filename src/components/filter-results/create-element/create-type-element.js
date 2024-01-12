export function createSingleType(type) {
  const pokemonType = document.createElement('div');
  const pokemonTypeIcon = document.createElement('div');
  const pokemonTypeParagraph = document.createElement('p');

  pokemonType.classList.add('result', `type-${type}`, 'result-type-single');
  pokemonTypeIcon.classList.add('type-sprites', `bg-type-${type}`);
  pokemonTypeParagraph.textContent = type;

  pokemonType.append(pokemonTypeIcon, pokemonTypeParagraph);

  return pokemonType;
}

export function createDoubleTypes(type1, type2) {
  const pokemonType1 = document.createElement('div');
  const pokemonTypeIcon1 = document.createElement('div');
  const pokemonTypeParagraph1 = document.createElement('p');
  const pokemonType2 = document.createElement('div');
  const pokemonTypeIcon2 = document.createElement('div');
  const pokemonTypeParagraph2 = document.createElement('p');
  const pokemonTypes = [pokemonType1, pokemonType2];

  pokemonType1.classList.add('result', `type-${type1}`, 'result-type-double');
  pokemonTypeIcon1.classList.add('type-sprites', `bg-type-${type1}`);
  pokemonTypeParagraph1.textContent = type1;
  pokemonType2.classList.add('result', `type-${type2}`, 'result-type-double');
  pokemonTypeIcon2.classList.add('type-sprites', `bg-type-${type2}`);
  pokemonTypeParagraph2.textContent = type2;

  pokemonType1.append(pokemonTypeIcon1, pokemonTypeParagraph1);
  pokemonType2.append(pokemonTypeIcon2, pokemonTypeParagraph2);

  return pokemonTypes;
}

export function judgeTypeAmount(data, pokemonTypesWrapper) {
  const firstType = data.types[0]?.toLowerCase();
  const secondType = data.types[1]?.toLowerCase();

  if (!secondType) {
    const pokemonSingleType = createSingleType(firstType);
    pokemonTypesWrapper.appendChild(pokemonSingleType);
  } else if (secondType) {
    const [pokemonFirstType, pokemonSecondType] = createDoubleTypes(firstType, secondType);
    pokemonTypesWrapper.append(pokemonFirstType, pokemonSecondType);
  }
}
