import {
  createPokemonIdentifyElement,
  createPokemonSpeciesElement
} from './components/filter-results/create-pokemon-list.js';
import filteredInvalidForms from './invalid-forms.js';
import { showLoadingState, hideLoadingState } from './components/loading-overlay/index.js';
import {
  toggleMoveFilterResult,
  createMoveResultTitle,
  getTextAfterNumber,
  findPriorityString
} from './components/filter-results/create-move-element.js';
import { convertToLowerCaseWithoutHyphen } from './utils/utils.js';

const POKEMON_SOURCE = 'https://play.pokemonshowdown.com/data/pokedex.json';
const LEARN_SETS_SOURCE = 'https://play.pokemonshowdown.com/data/learnsets.json';

function isValidPokemon(name, serialNumber) {
  return serialNumber > 0 && !filteredInvalidForms.some((form) => name.includes(form));
}

async function getAllPokemonData() {
  try {
    const response = await fetch(POKEMON_SOURCE);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

async function getLearnSetsData() {
  try {
    const response = await fetch(LEARN_SETS_SOURCE);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

async function getValidPokemons() {
  const allPokemonData = await getAllPokemonData();
  const validPokemonList = [];
  const validPokemonElement = [];

  for (const pokemonName in allPokemonData) {
    if (allPokemonData[pokemonName]) {
      const pokemonData = allPokemonData[pokemonName];
      const validSerialNumber = pokemonData.num;

      if (isValidPokemon(pokemonName, validSerialNumber)) {
        validPokemonList.push(pokemonName);
        validPokemonElement.push(pokemonData);
      }
    }
  }
  return { validPokemonList, validPokemonElement };
}

async function getPokemonMoveInfo() {
  const learnSetsData = await getLearnSetsData();
  const validPokemonData = await getValidPokemons();
  const validPokemonsArray = validPokemonData.validPokemonElement.reduce((result, pokemon) => {
    const lowerCaseName = convertToLowerCaseWithoutHyphen(pokemon.name);
    result[lowerCaseName] = pokemon;
    return result;
  }, {});
  const moveInfoData = [];
  const move = 'yawn';

  createMoveResultTitle(move);
  toggleMoveFilterResult();
  let moveInfoResult;

  for (const pokemonName in learnSetsData) {
    if (learnSetsData && learnSetsData[pokemonName]) {
      const pokemon = learnSetsData[pokemonName];

      if (pokemon.learnset && pokemon.learnset?.[move]) {
        const selectedMove = pokemon.learnset?.[move];
        const nodesWith9 = selectedMove.filter((node) => node.startsWith('9'));
        const foundData = findPriorityString(nodesWith9);

        if (foundData) {
          moveInfoResult = getTextAfterNumber(foundData);
          moveInfoData.push({ pokemonName, moveInfoResult });
        }

        inheritEggMoveToEvos(validPokemonsArray, pokemonName, (pokemonAfterEvo) => {
          learnSetsData[pokemonAfterEvo].learnset[move] = learnSetsData[pokemonName].learnset[move];
        });
      }
    }
  }

  return moveInfoData;
}

function inheritEggMoveToEvos(validPokemonsArray, pokemonName, evolutionHandler) {
  const numMaxEvos = 8;
  for (let i = 0; i < numMaxEvos; i++) {
    const pokemonAfterEvo = convertToLowerCaseWithoutHyphen(validPokemonsArray[pokemonName]?.evos?.[i]);
    const parentPokemonBeforeEvo = convertToLowerCaseWithoutHyphen(validPokemonsArray[pokemonAfterEvo]?.prevo);

    if (parentPokemonBeforeEvo === pokemonName) {
      evolutionHandler(pokemonAfterEvo);
    }
  }
}

async function displayValidPokemons() {
  showLoadingState();
  try {
    const { validPokemonList, validPokemonElement } = await getValidPokemons();
    const moveInfoData = await getPokemonMoveInfo();

    for (let i = 0; i < validPokemonList.length; i++) {
      const pokemonName = validPokemonList[i];
      const pokemonData = validPokemonElement[i];

      const moveInfoForPokemon = moveInfoData.find((info) => info.pokemonName === pokemonName);
      createPokemonIdentifyElement(pokemonData, pokemonName);
      createPokemonSpeciesElement(
        pokemonData,
        pokemonName,
        moveInfoForPokemon && moveInfoForPokemon.moveInfoResult ? moveInfoForPokemon.moveInfoResult : ''
      );
    }
  } catch (error) {
    console.error('Display pokemon error', error);
  } finally {
    hideLoadingState();
  }
}

displayValidPokemons();
