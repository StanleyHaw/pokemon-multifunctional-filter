export function convertToCleanString(input) {
  if (input === undefined || input === null) {
    return '';
  }

  return input
    .toString()
    .toLowerCase()
    .replace('é', 'e')
    .replace(/ /g, '')
    .replace(/_/g, '')
    .replace(/-/g, '')
    .replace(/'/g, '');
}
