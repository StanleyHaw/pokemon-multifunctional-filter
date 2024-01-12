export function convertToString(input) {
  if (input == null) {
    return '';
  }

  return input.toString();
}

export function convertToLowerCaseWithoutHyphen(input) {
  const stringResult = convertToString(input);
  return stringResult.toLowerCase().replace(/-/g, '');
}
