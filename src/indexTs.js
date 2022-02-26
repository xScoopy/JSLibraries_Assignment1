/* eslint-disable no-param-reassign */
/* eslint-disable no-void */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line func-names
const capitalize = function (str) {
  if (str.length === 0) {
    return '';
  }
  const firstChar = str[0].toUpperCase();
  const newArray = [firstChar, str.slice(1)];
  return newArray.join('');
};
const allCaps = function (str) {
  return str.toUpperCase();
};
const capitalizeWords = function (str) {
  if (str.length === 0) {
    return '';
  }
  const strArray = str.split(' ');
  return strArray.map(capitalize).join(' ');
};
const capitalizeHeadline = function (str) {
  const outliers = [
    'the',
    'in',
    'a',
    'an',
    'and',
    'but',
    'for',
    'at',
    'by',
    'from',
  ];
  const strArray = str.split(' ');
  const firstWord = capitalize(strArray[0]);
  const restOfWords = strArray
    .slice(1)
    .map((word) => (outliers.indexOf(word) !== -1 ? word : capitalize(word)))
    .join(' ');
  return [firstWord, restOfWords].join(' ');
};
const removeExtraSpaces = function (str) {
  const trimmedStr = str.trim();
  return trimmedStr.split(/\s+/).join(' ');
};
const kebobCase = function (str, delimiter) {
  if (delimiter === void 0) {
    delimiter = '-';
  }
  const goodCodes = [
    32, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102,
    103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
    118, 119, 120, 121, 122,
  ];
  const lowerString = str.toLowerCase();
  const splitStr = lowerString.split('');
  const cleanStr = [];
  for (let i = 0; i < splitStr.length; i += 1) {
    if (goodCodes.indexOf(splitStr.join('').charCodeAt(i)) !== -1) {
      cleanStr.push(splitStr[i]);
    }
  }
  return removeExtraSpaces(cleanStr.join('')).split(' ').join(delimiter);
};
const snakeCase = function (str) {
  return kebobCase(str, '_');
};
const camelCase = function (str) {
  const strArray = str.trim().split(' ');
  const firstWord = strArray[0].toLowerCase();
  const restOfWords = strArray.slice(1).map(capitalize).join('');
  return [firstWord, restOfWords].join('');
};
const shift = function (str, numChars) {
  return str.slice(numChars) + str.slice(0, numChars);
};
const makeHashTag = function (str) {
  const sortedWords = str.split(' ').sort((a, b) => b.length - a.length || a.localeCompare(b));
  if (sortedWords.length < 3) {
    return sortedWords.map((word) => '#'.concat(capitalize(word.toLowerCase())));
  }
  return sortedWords.slice(0, 3).map((word) => '#'.concat(capitalize(word.toLowerCase())));
};
const isEmpty = function (str) {
  const trimmedStr = str.trim();
  return trimmedStr.split(/\s+/).join('').length === 0;
};
module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.capitalizeHeadline = capitalizeHeadline;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kebobCase = kebobCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashTag = makeHashTag;
module.exports.isEmpty = isEmpty;
