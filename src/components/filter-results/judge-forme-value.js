export function judgeNullValue(paragraph, parentWrapper) {
  if (paragraph === '' || paragraph === 'undefined') {
    parentWrapper.classList.add('null-value');
  }
}
