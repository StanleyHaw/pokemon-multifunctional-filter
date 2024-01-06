import {
  createPokemonIdentifyElement,
  createPokemonSpeciesElement,
} from './components/filter-results/create-pokemon-list.js';
import INVALID_FORMS from './invalid-forms.js';
import { showLoadingState, hideLoadingState } from './components/loading-overlay/index.js';

const POKEMON_SOURCE = 'https://play.pokemonshowdown.com/data/pokedex.json';

function isValidPokemon(serialNumber, name) {
  return serialNumber > 0 && !INVALID_FORMS.some((form) => name.includes(form));
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

async function renderAllPokemonElements() {
  const allPokemonData = await getAllPokemonData();
  const resultIdentifies = document.getElementById('result-identifies');
  const resultSpecies = document.getElementById('result-species');

  for (const pokemonName in allPokemonData) {
    if (allPokemonData.hasOwnProperty(pokemonName)) {
      const pokemonData = allPokemonData[pokemonName];
      const validSerialNumber = pokemonData.num;

      if (isValidPokemon(validSerialNumber, pokemonName)) {
        const resultIdentifyElement = createPokemonIdentifyElement(pokemonData);
        const resultSpeciesElement = createPokemonSpeciesElement(pokemonData);

        resultIdentifies.appendChild(resultIdentifyElement);
        resultSpecies.appendChild(resultSpeciesElement);
      }
    }
  }
}

renderAllPokemonElements();
