const capitalize = (str) => {
  const firstChar = str[0].toUpperCase();
  const newArray = [firstChar, str.slice(1)];
  return newArray.join("");
};

const allCaps = (str) => {
  return str.toUpperCase();
};

const capitalizeWords = (str) => {
  strArray = str.split(" ");
  return strArray.map(capitalize).join(" ");
};

const capitalizeHeadline = (str) => {
  const outliers = [
    "the",
    "in",
    "a",
    "an",
    "and",
    "but",
    "for",
    "at",
    "by",
    "from",
  ];
  const strArray = str.split(" ");
  const firstWord = capitalize(strArray[0]);
  const restOfWords = strArray
    .slice(1)
    .map((word) => {
      return outliers.indexOf(word) !== -1 ? word : capitalize(word);
    })
    .join(" ");

  return [firstWord, restOfWords].join(" ");
};

const removeExtraSpaces = (str) => {
  const trimmedStr = str.trim();
  return trimmedStr.split(/\s+/).join(" ");
};

const kebobCase = (str, delimiter = "-") => {
  const goodCodes = [
    32, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102,
    103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
    118, 119, 120, 121, 122,
  ];
  const lowerString = str.toLowerCase();
  const splitStr = lowerString.split("");
  const cleanStr = [];
  for (let i = 0; i < splitStr.length; i += 1) {
    if (goodCodes.indexOf(splitStr.join("").charCodeAt(i)) !== -1) {
      cleanStr.push(splitStr[i]);
    }
  }
  return removeExtraSpaces(cleanStr.join("")).split(" ").join(delimiter);
};

const snakeCase = (str) => {
  return kebobCase(str, "_");
};

const camelCase = (str) => {
  const strArray = str.trim().split(" ");
  const firstWord = strArray[0].toLowerCase();
  const restOfWords = strArray.slice(1).map(capitalize).join("");
  return [firstWord, restOfWords].join("");
};

const shift = (str, numChars) => {
  return str.slice(numChars) + str.slice(0, numChars);
};
