import { isValidPokemon } from './filtered-pokemon-list.js';
import { convertMoveInfoFormat, inheritEggMove } from './utils/components/convert-move-data.js';
import { move } from './components/filter-menu/move-filter.js';

const POKEMON_SOURCE = 'https://play.pokemonshowdown.com/data/pokedex.json';
const LEARN_SETS_SOURCE = 'https://play.pokemonshowdown.com/data/learnsets.json';

async function fetchApiData(apiSource) {
  try {
    const response = await fetch(apiSource);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetch ${apiSource} error:`, error);
  }
}

export async function getValidPokemonData() {
  const PokemonData = await fetchApiData(POKEMON_SOURCE);
  const learnSetsData = await fetchApiData(LEARN_SETS_SOURCE);
  const validPokemonData = Object.entries(PokemonData)
    .map(([key, pokemonData]) => {
      const pokemonLearnSets = learnSetsData[key];

      return isValidPokemon(pokemonData.name, pokemonData.num) && pokemonData.tier !== 'Illegal'
        ? { ...pokemonData, ...pokemonLearnSets }
        : null;
    })
    .filter((mergedPokemon) => mergedPokemon !== null);

  return validPokemonData;
}

function getMoveInfo(validPokemonData, moveName) {
  inheritEggMove(validPokemonData, moveName);
  const validMoveInfo = validPokemonData.map((pokemonData) => {
    const moveData = pokemonData.learnset && pokemonData.learnset[moveName];

    return moveData ? convertMoveInfoFormat(moveData) : '';
  });

  return validMoveInfo;
}

export async function getMoveData() {
  const validPokemonData = await getValidPokemonData();
  return getMoveInfo(validPokemonData, move);
}
