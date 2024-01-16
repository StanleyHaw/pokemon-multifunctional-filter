export function judgeFormeContent(data, pokemonFormResult) {
  pokemonFormResult.textContent = data.baseForme ? data.baseForme : data.forme ? data.forme : '';
}
