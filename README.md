# StringHelper

This library is to assist people in doing some common and not so common string manipulation. Many of the operations are simple, yet can be tedious at times. I aim to help people cut down the time it takes to perform these tedious operations and place some neat string manipulation techniques within a few easy to use methods.

### Methods

**capitalize(str)** - takes in a string and capitalizes the first letter of the string. Returns a new version of the string.

> ex. capitalize("hello") -> "Hello"

**allCaps(str)** - takes in a string and uppercases the entire string.

> ex. allCaps("hello") -> "HELLO"

**capitalizeWords(str)** - takes in a string and capitalizes the first letter of each word in the string. Returns a single string.

> ex. capitalizeWords("hello world") -> "Hello World"

**capitalizeHeadline(str)** - takes in a string and capitalizes the first letter of each word UNLESS it is a common outlier like 'the', 'in', 'a', 'and', etc. If the outlier is the first word in the string, it WILL be capitalized.

> ex. capitalizeHeadline("in a world of people") -> "In a World of People"

**removeExtraSpaces(str)** - takes in a string and removes all spaces, including tabs, returns, and newlines and returns the string. Note: Keeps single spaces between words.

> ex. removeExtraSpaces(" Hello world! ") -> "Hello world!"

**kebobCase(str, delimiter)** - takes in a string and a delimiter. Delimiter is set to '-' by default for kebob case. Lowercases all words and characters in the string, and removes any special characters aside from the hyphen. Returns the string in correct kebob casing.

> ex. kebobCase("$Hello world!!!!!") -> "hello-world"

**snakeCase(str)** - takes in a string, lowercases the string and removes special characters aside from the hyphen. Concatenates separate words with an underscore ("\_")

> ex. snakeCase("$Hello world!!!") -> "hello_world"

**camelCase(str)** - takes in a string, lowercases the first letter of the first word, and capitalizes the first letter of other words in the string. Returns string of camelCased words with extra spaces removed around and between words.

> ex. camelCase(" The best camel case") -> theBestCamelCase

**shift(str, numChars)** - takes in a string and number of characters. Method shifts the first numChars characters to the end of the string, and returns the resulting string.

> ex. shift("fooBar", 3) -> Barfoo

**makeHashTag(str)** - takes in a string and returns the 3 longest words as hashtags. A hashtag in this method is defined as a string that begins with a '#' and is capitalized. If there are less than 3 words available, it will return all words as hashtags. Return strings are in an array.

> ex. makeHashTag("totally amazing game of basketball") -> [ '#Basketball', '#Amazing', '#Totally' ]

**isEmpty(str)** - takes in a string and removes all extra white space and spaces between any possible words. If nothing remains, the result is True (bool). If there is anything other than white space, returns false.

> ex. isEmpty(" \n \t ") -> True
