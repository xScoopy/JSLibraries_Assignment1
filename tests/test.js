/* eslint-disable no-undef */
const strHelper = require('../src/index');

test('Verify tests working properly', () => {
  expect(1).toBe(1);
});

test('Captialize', () => {
  const result = strHelper.capitalize('hello');
  expect(result).toBe('Hello');
  const result2 = strHelper.capitalize('');
  expect(result2).toBe('');
});

test('allCaps', () => {
  const result = strHelper.allCaps('hello');
  expect(result).toBe('HELLO');
  const result2 = strHelper.allCaps('');
  expect(result2).toBe('');
});

test('capitalizeWords', () => {
  const result = strHelper.capitalizeWords('hello to the world');
  expect(result).toBe('Hello To The World');
  const result2 = strHelper.capitalizeWords('');
  expect(result2).toBe('');
});

test('capitalizeHeadline', () => {
  const result = strHelper.capitalizeHeadline('the world in a nutshell');
  expect(result).toBe('The World in a Nutshell');
});

test('removeExtraSpaces', () => {
  const result = strHelper.removeExtraSpaces('    hello friend     ');
  expect(result).toBe('hello friend');
});

test('kebobCase', () => {
  const result = strHelper.kebobCase('hello 5 buddies !!');
  expect(result).toBe('hello-5-buddies');
});

test('snakeCase', () => {
  const result = strHelper.snakeCase('hello 5 buddies !!');
  expect(result).toBe('hello_5_buddies');
});

test('camelCase', () => {
  const result = strHelper.camelCase('this is great camel case');
  expect(result).toBe('thisIsGreatCamelCase');
});

test('shift', () => {
  const result = strHelper.shift('fooBar', 3);
  expect(result).toBe('Barfoo');
});

test('makeHashTag', () => {
  const result = strHelper.makeHashTag('insane unit testing in development');
  expect(result).toStrictEqual(['#Development', '#Testing', '#Insane']);
  const result2 = strHelper.makeHashTag('brohammer');
  expect(result2).toStrictEqual(['#Brohammer']);
});

test('isEmpty', () => {
  const result = strHelper.isEmpty('      \n      \t  \t ');
  expect(result).toBe(true);
  const result2 = strHelper.isEmpty('      1 \n\n\n');
  expect(result2).toBe(false);
});
