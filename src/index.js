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
console.log(capitalizeHeadline("the most foo in bar"));
