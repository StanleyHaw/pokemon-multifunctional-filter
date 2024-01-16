import {
  createSingleTypeElement,
  createDoubleTypesElement
} from '../../components/filter-results/create-element/species-result/create-type-element.js';

export function judgeTypeAmount(data, pokemonTypesWrapper) {
  const firstType = data.types[0]?.toLowerCase();
  const secondType = data.types[1]?.toLowerCase();

  if (!firstType) return;
  if (!secondType) {
    const pokemonSingleType = createSingleTypeElement(firstType, 'result-type-single');
    pokemonTypesWrapper.appendChild(pokemonSingleType);
  } else {
    const [pokemonFirstType, pokemonSecondType] = createDoubleTypesElement(firstType, secondType, 'result-type-double');
    pokemonTypesWrapper.append(pokemonFirstType, pokemonSecondType);
  }
}
