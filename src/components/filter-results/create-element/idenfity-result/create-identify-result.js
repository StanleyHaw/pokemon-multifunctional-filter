export function appendInfoBlock(wrapper, type, content) {
  if (type === 'pokemon-image') {
    wrapper.innerHTML += `<div class='result result-${type}'><div class='pokemon-sprites bg-${content}'></div></div>`;
  } else {
    wrapper.innerHTML += `<div class='result result-${type}'><p>${content}</p></div>`;
  }
}
