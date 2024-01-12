import { isValidPokemon } from './filtered-pokemon-list.js';
import {
  getContentAfterNumber,
  findPriorityMove
} from './components/filter-results/create-element/create-move-element.js';
import { fetchApiData, convertToCleanString } from './utils/utils.js';
import { MOVE } from './components/filter-menu/move-filter.js';

const POKEMON_SOURCE = 'https://play.pokemonshowdown.com/data/pokedex.json';
const LEARN_SETS_SOURCE = 'https://play.pokemonshowdown.com/data/learnsets.json';

fetchApiData(POKEMON_SOURCE);
fetchApiData(LEARN_SETS_SOURCE);

export async function getValidPokemons() {
  const allPokemonData = await fetchApiData(POKEMON_SOURCE);
  const rawPokemonData = [];
  const rawPokemonNameList = [];
  const validPokemonData = [];
  const validPokemonNameList = [];

  for (const pokemonName in allPokemonData) {
    if (!allPokemonData[pokemonName]) return;
    const pokemonData = allPokemonData[pokemonName];
    const serialNumber = pokemonData.num;

    if (isValidPokemon(pokemonName, serialNumber) && pokemonData.tier !== 'Illegal') {
      rawPokemonData.push(pokemonData);
      rawPokemonNameList.push(pokemonName);
    }
  }

  rawPokemonNameList.forEach((pokemonName) => {
    validPokemonNameList[convertToCleanString(pokemonName)] = pokemonName;
  });

  rawPokemonData.forEach((pokemon) => {
    validPokemonData[convertToCleanString(pokemon.name)] = pokemon;
  });

  return { validPokemonData, validPokemonNameList };
}

export async function getPokemonMoveInfo() {
  const learnSetsData = await fetchApiData(LEARN_SETS_SOURCE);
  const { validPokemonData } = await getValidPokemons();
  const rawMoveInfoData = [];
  const validMoveInfoData = [];

  let moveInfoResult = [];

  for (const pokemonName in learnSetsData) {
    if (!learnSetsData[pokemonName]) return;
    const pokemonMove = learnSetsData[pokemonName].learnset;
    const selectedMove = pokemonMove?.[MOVE];

    if (pokemonMove && selectedMove) {
      const GEN_VERSION = '9';
      const MoveWithCurrentGen = selectedMove.filter((node) => node.startsWith(GEN_VERSION));
      const foundMoveData = findPriorityMove(MoveWithCurrentGen);

      if (foundMoveData) {
        moveInfoResult = getContentAfterNumber(foundMoveData);
        rawMoveInfoData.push({ pokemonName, moveInfoResult });
      }

      inheritEggMoveToEvos(validPokemonData, pokemonName, function evolutionHandler(pokemonAfterEvo) {
        learnSetsData[pokemonAfterEvo].learnset[MOVE] = learnSetsData[pokemonName].learnset[MOVE];
      });
    }
  }

  rawMoveInfoData.forEach((pokemon) => {
    validMoveInfoData[convertToCleanString(pokemon.pokemonName)] = pokemon;
  });
  return validMoveInfoData;
}

function inheritEggMoveToEvos(validPokemonData, pokemonName, evolutionHandler) {
  const numMaxEvos = 8;
  for (let i = 0; i < numMaxEvos; i++) {
    const pokemonAfterEvo = convertToCleanString(validPokemonData[pokemonName]?.evos?.[i]);
    const parentPokemonBeforeEvo = convertToCleanString(validPokemonData[pokemonAfterEvo]?.prevo);

    if (parentPokemonBeforeEvo !== pokemonName) return;
    evolutionHandler(pokemonAfterEvo);
  }
}
