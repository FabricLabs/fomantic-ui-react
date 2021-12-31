export const numberToWordMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
};

export const numberToWord = (value: number | string) => {
  const type = typeof value;
  if (type === 'string' || type === 'number') {
    return numberToWordMap[value] || value;
  }

  return '';
};
