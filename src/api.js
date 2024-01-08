import {
  createPokemonIdentifyElement,
  createPokemonSpeciesElement,
} from './components/filter-results/create-pokemon-list.js';
import filteredInvalidForms from './invalid-forms.js';
import { showLoadingState, hideLoadingState } from './components/loading-overlay/index.js';
import {
  toggleMoveFilterResult,
  createMoveResultTitle,
  getTextAfterNumber,
  findPriorityString,
} from './components/filter-results/create-move-element.js';

const POKEMON_SOURCE = 'https://play.pokemonshowdown.com/data/pokedex.json';
const LEARN_SETS_SOURCE = 'https://play.pokemonshowdown.com/data/learnsets.json';

function isValidPokemon(name, serialNumber) {
  return serialNumber > 0 && !filteredInvalidForms.some((form) => name.includes(form));
}

async function getAllPokemonData() {
  showLoadingState();
  try {
    const response = await fetch(POKEMON_SOURCE);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  } finally {
    hideLoadingState();
  }
}

async function getLearnSetsData() {
  showLoadingState();
  try {
    const response = await fetch(LEARN_SETS_SOURCE);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  } finally {
    hideLoadingState();
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
  const validPokemonList = await getValidPokemons();
  const learnSetsData = await getLearnSetsData(validPokemonList);
  const moveInfoData = [];
  const move = 'fakeout';
  createMoveResultTitle(move);
  toggleMoveFilterResult();

  for (const pokemonName in learnSetsData) {
    if (learnSetsData[pokemonName]) {
      const pokemon = learnSetsData[pokemonName];

      if (pokemon.learnset && pokemon.learnset[move]) {
        const selectedMove = pokemon.learnset[move];
        const nodesWith9 = selectedMove.filter((node) => node.startsWith('9'));
        const foundData = findPriorityString(nodesWith9);

        if (foundData !== undefined) {
          const moveInfoResult = getTextAfterNumber(foundData);
          moveInfoData.push({ pokemonName, moveInfoResult });
        }
      }
    }
  }
  return moveInfoData;
}

async function displayValidPokemons() {
  const { validPokemonList, validPokemonElement } = await getValidPokemons();
  const moveInfoData = await getPokemonMoveInfo();

  for (let i = 0; i < validPokemonList.length; i++) {
    const pokemonName = validPokemonList[i];
    const pokemonData = validPokemonElement[i];

    const moveInfoForPokemon = moveInfoData.find((info) => info.pokemonName === pokemonName);
    createPokemonIdentifyElement(pokemonData);
    createPokemonSpeciesElement(
      pokemonData,
      moveInfoForPokemon && moveInfoForPokemon.moveInfoResult ? moveInfoForPokemon.moveInfoResult : ''
    );
  }
}

displayValidPokemons();
