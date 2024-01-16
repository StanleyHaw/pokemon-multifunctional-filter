export function judgeNullValue(paragraph, parentWrapper) {
  if (!(paragraph === '' || paragraph === 'undefined')) return;
  parentWrapper.classList.add('null-value');
}
