const checkLength = (string, maxLength) => string.length <= maxLength;

const checkPalindrome = (string) => {
  const normalizeString = string.replaceAll(' ','').toLowerCase();
  let cloneString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    cloneString += normalizeString[i];
  }
  return cloneString === normalizeString;
};


const getNumber = (value) => {
  const string = value.toString();
  let number = '';
  for (let i = 0; i < string.length; i++) {
    const symbol = string[i];
    if (!Number.isNaN(parseInt(symbol, 10))) {
      number += symbol;
    }
  }
  return parseInt(number, 10);
};

checkLength('проверяемая строка', 20);
checkPalindrome('ДовОд');
getNumber('2023 год');
