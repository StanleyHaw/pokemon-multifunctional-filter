import { specialPokemons } from '../constants/pokemon-categories-list.js';

function filterCondition(pokemonName) {
  return (
    specialPokemons.some((category) => category.id === 'restrictedLegengary' && category.data.includes(pokemonName)) ||
    specialPokemons.some((category) => category.id === 'mythical' && category.data.includes(pokemonName))
  );
}
// TODO: applied in pokemon-filter functional

function filteredInvalidForms(pokemonName) {
  return (
    specialPokemons.some((category) => category.id === 'invalidForms' && category.data.includes(pokemonName)) ||
    specialPokemons.some((category) => category.id === 'unusualFormsBanList' && category.data.includes(pokemonName))
  );
}

export function isValidPokemon(pokemonName, serialNumber) {
  return serialNumber > 0 && !filteredInvalidForms(pokemonName);
}
