import { createPokemonIdentifyElement, createPokemonSpeciesElement } from '../create-element/create-pokemon-list.js';
import { toggleMoveFilterResult, createMoveResultTitle } from '../create-element/species-result/create-move-element.js';
import { showLoadingState, hideLoadingState } from '../../loading-overlay/index.js';
import { getValidPokemonData, getMoveData } from '../../../api.js';
import { move } from '../../filter-menu/move-filter.js';

async function displayValidPokemonData() {
  showLoadingState();

  const validPokemonData = await getValidPokemonData();
  const validMoveInfoData = await getMoveData();
  createMoveResultTitle(move);
  toggleMoveFilterResult();

  for (const pokemon in validPokemonData) {
    const pokemonData = validPokemonData[pokemon];
    const moveInfoForPokemon = validMoveInfoData[pokemon];
    createPokemonIdentifyElement(pokemonData, pokemon);
    createPokemonSpeciesElement(pokemonData, moveInfoForPokemon);
  }

  hideLoadingState();
}

displayValidPokemonData();
