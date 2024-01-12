import { createPokemonIdentifyElement, createPokemonSpeciesElement } from '../create-element/create-pokemon-list.js';
import { toggleMoveFilterResult, createMoveResultTitle } from '../create-element/create-move-element.js';
import { showLoadingState, hideLoadingState } from '../../loading-overlay/index.js';
import { getValidPokemons, getPokemonMoveInfo } from '../../../api.js';
import { MOVE } from '../../filter-menu/move-filter.js';

async function displayValidPokemonData() {
  showLoadingState();
  const { validPokemonData } = await getValidPokemons();
  const validMoveInfoData = await getPokemonMoveInfo();
  createMoveResultTitle(MOVE);
  toggleMoveFilterResult();

  for (const pokemonName in validPokemonData) {
    const pokemonData = validPokemonData[pokemonName];
    const moveInfoForPokemon = validMoveInfoData[pokemonName]?.moveInfoResult;

    createPokemonIdentifyElement(pokemonData, pokemonName);
    createPokemonSpeciesElement(
      pokemonData,
      pokemonName,
      moveInfoForPokemon && moveInfoForPokemon ? moveInfoForPokemon : ''
    );
  }
  hideLoadingState();
}

displayValidPokemonData();
