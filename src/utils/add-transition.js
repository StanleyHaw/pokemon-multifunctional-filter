export function toggleTransition(item) {
  item.classList.add('run-transition');
  setTimeout(function () {
    item.classList.remove('run-transition');
  }, 300);
}
