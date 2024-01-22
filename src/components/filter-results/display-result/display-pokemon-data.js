import { showLoadingState, hideLoadingState } from '../../loading-overlay/index.js';
import { getValidPokemonData, getMoveData } from '../../../api.js';
import { renderPokemonIdentifiesElement } from '../render-element/render-identify-element.js';
import { renderPokemonSpeciesElement } from '../render-element/render-species-element.js';
import { renderMoveSubtitleElement } from '../render-element/species-result/render-move-element.js';
import { moveList } from '../../filter-menu/move-filter.js';

async function displayValidPokemonData() {
  showLoadingState();

  const validPokemonData = await getValidPokemonData();
  const validMoveInfoList = await getMoveData();
  renderMoveSubtitleElement(moveList);

  for (const pokemon in validPokemonData) {
    const pokemonData = validPokemonData[pokemon];
    const moveInfo = validMoveInfoList.map((moveInfo) => moveInfo[pokemon]);
    renderPokemonIdentifiesElement(pokemonData);
    renderPokemonSpeciesElement(pokemonData, moveInfo);
  }

  hideLoadingState();
}

displayValidPokemonData();
