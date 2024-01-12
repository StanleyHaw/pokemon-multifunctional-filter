export function judgeFormeContent(data, pokemonFormResult) {
  if (data.baseForme) {
    pokemonFormResult.textContent = data.baseForme;
  } else if (data.forme) {
    pokemonFormResult.textContent = data.forme;
  } else {
    pokemonFormResult.textContent = '';
  }
}
