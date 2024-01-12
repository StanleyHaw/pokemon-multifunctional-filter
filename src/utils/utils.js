export async function fetchApiData(apiSource) {
  try {
    const response = await fetch(apiSource);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetch ${apiSource} error:`, error);
    throw error;
  }
}

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

export function judgeNullValue(paragraph, parentWrapper) {
  if (paragraph === '' || paragraph === 'undefined') {
    parentWrapper.classList.add('null-value');
  }
}
