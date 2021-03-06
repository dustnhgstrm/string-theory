/******************
 * YOUR CODE HERE *
 ******************/

//returns string of the same length, but instead of spitting out original string it returns a string of "xxxxx's" of equal length. "hey how are you" -> "xxxxxxxxxxxxxxx".
//Plan: find out length of original string and then return xString with that many x's.

function xify(str) {
  let xString = "";
  for (i = 0; i < str.length; i++) {
    xString = xString + "x";
  }
  return xString;
}

//takes in a string and returns each char with an '!' after.plan: run through string and push each char to new string with an ! and then return new string.

function yellingChars(str) {
  let superChars = "";
  for (const value of str) {
    superChars = superChars + value + "!";
  }
  return superChars;
}

//given a str it places the index of value prior to returning value.

function indexedChars(str) {
  let indexStr = "";
  let indexValue = 0;
  for (const value of str) {
    indexStr = indexStr + indexValue + value;
    indexValue++;
  }
  return indexStr;
}

//given a str it keeps count of how many chars. It displays running count and each char. running count starts at value 1 and first char placed after followed by 2 ... until all chars counted.

function numberedChars(str) {
  let runningCountStr = "";
  let count = 1;
  for (const value of str) {
    runningCountStr = runningCountStr + "(" + count + ")" + value;
    count++;
  }
  return runningCountStr;
}

//given a str, it replaces all question marks (?) or periods (.) with an exclamation (!). it goes through each char and adds it to new string and filter/replaces ?.

function exclaim(str) {
  let hypedSent = "";
  for (const value of str) {
    if (value === "." || value === "?") {
      hypedSent = hypedSent + "!";
    } else hypedSent = hypedSent + value;
  }
  return hypedSent;
}

//repeats an input string by given input num of times.

function repeatIt(str, num) {
  let repeatedStr = "";
  let countNum = 0;
  while (countNum < num) {
    repeatedStr = repeatedStr + str;
    countNum++;
  }
  return repeatedStr;
}

//shortens an input str to 15 characters plus "..." a map?

function truncate(str) {
  let shorterStr = "";
  if (str.length <= 18) {
    return str;
  } else
    for (let i = 0; i < 15; i++) {
      shorterStr = shorterStr + str[i];
    }
  return shorterStr + "...";
}

//takes one string that is two words and a space and puts them together in order with a period seperating the two and puts @codeimmersives.com at end. plan: have a blank email string then an email tail and a period variable if i want to be super variables. then loop through string and as long as it isn't a space then lowercase and add to our str. if space then replace with period and at the end slap tail on them.

function ciEmailify(str) {
  let ourEmail = "";
  let emailTail = "@codeimmersives.com";
  let thisPeriod = ".";
  for (let value of str) {
    if (value !== " ") {
      ourEmail = ourEmail + value.toLowerCase();
    }
    if (value === " ") {
      ourEmail = ourEmail + thisPeriod;
    }
  }
  return ourEmail + emailTail;
}

//reverse an input string using a loop.

function reverse(str) {
  let rts = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rts = rts + str[i];
  }
  return rts;
}

//returns nly th vwls. Alex basically did this problem for a code wars. I remember being slightly confused on how he did it. I will replicate what he did tho.

function onlyVowels(str) {
  let rStr = "";
  for (const letter of str) {
    const alexShowedMeThis = letter.toLowerCase();
    const isVowel =
      alexShowedMeThis === "e" ||
      alexShowedMeThis === "i" ||
      alexShowedMeThis === "a" ||
      alexShowedMeThis === "o" ||
      alexShowedMeThis === "u";
    if (isVowel) {
      rStr += letter;
    }
  }
  return rStr;
}

// returns input string with alternating lower and upper case letters. plan: make str lower case then if the index number modulo 2 !== 0 make that letter uppercase.

function crazyCase(str) {
  let crazyStr = str.toLowerCase();
  let newStr = "";
  for (i = 0; i < crazyStr.length; i++) {
    if (i % 2 !== 0) {
      newStr = newStr + crazyStr[i].toUpperCase();
    } else if (i % 2 === 0) {
      newStr = newStr + crazyStr[i];
    }
  }
  return newStr;
}

// returns a string where every word begins with a capital and all the other letters are lowercase. plan: str to lowercase version and a str to uppercase version to isolate first Char. Then start loop at index of 1 so that I can ignore first char and easily add it at the end. tricky part is the if statement. it needs to talk about the char one space to the left => the current char of the string - 1 is space then add current char to uppercase, else return chars as is. at the end slap the first char which is already uppercase to the beginning.

function titleCase(str) {
  let stringLower = str.toLowerCase();
  let stringUpper = str.toUpperCase();
  let titleString = "";
  for (let i = 1; i < stringLower.length; i++) {
    if (stringLower[i - 1] === " ") {
      titleString = titleString + stringLower[i].toUpperCase();
    } else titleString = titleString + stringLower[i];
  }

  return stringUpper[0] + titleString;
}

//returns a string of words and spaces w/o spaces and i camelcase. plan: uppercase and lowercase versions ignore beginning entirely this time. if char to left is space then uppercase current char. return w/o spaces.

function camelCase(str) {
  let lowerVersion = str.toLowerCase();
  let camelStr = "";
  for (i = 0; i < lowerVersion.length; i++) {
    if (lowerVersion[i - 1] === " ") {
      camelStr = camelStr + lowerVersion[i].toUpperCase();
    } else if (lowerVersion[i] !== " ") {
      camelStr = camelStr + lowerVersion[i];
    }
  }
  return camelStr;
}

// returns input string with alternating lower and upper case letters, however, if there is a space then it continues the alternating pattern on the first letter after the space. plan: make str lower case then if the index number modulo 2 !== 0 make that letter uppercase but keep track of number of spaces and then apply that count to the index value prior to modulo 2.

function crazyCase2ReturnOfCrazyCase(str) {
  let stringDown = str.toLowerCase();
  let spaceCount = 0;
  let returnString = "";
  for (i = 0; i < str.length; i++) {
    const myBoolean = stringDown[i] === " ";
    if (myBoolean) {
      returnString = returnString + " ";
      spaceCount++;
    } else if (i % 2 === 0 && spaceCount % 2 === 0) {
      returnString = returnString + stringDown[i];
    } else if (i % 2 !== 0 && spaceCount % 2 === 0) {
      returnString = returnString + stringDown[i].toUpperCase();
    } else if (i % 2 !== 0 && spaceCount % 2 !== 0) {
      returnString = returnString + stringDown[i];
    } else if (i % 2 === 0 && spaceCount % 2 !== 0) {
      returnString = returnString + stringDown[i].toUpperCase();
    }
  }
  return returnString;
}
/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === "undefined") {
  xify = undefined;
}

if (typeof smilify === "undefined") {
  smilify = undefined;
}

if (typeof yellingChars === "undefined") {
  yellingChars = undefined;
}

if (typeof numberedChars === "undefined") {
  numberedChars = undefined;
}

if (typeof indexedChars === "undefined") {
  indexedChars = undefined;
}

if (typeof exclaim === "undefined") {
  exclaim = undefined;
}

if (typeof repeatIt === "undefined") {
  repeatIt = undefined;
}

if (typeof truncate === "undefined") {
  truncate = undefined;
}

if (typeof ciEmailify === "undefined") {
  ciEmailify = undefined;
}

if (typeof reverse === "undefined") {
  reverse = undefined;
}

if (typeof onlyVowels === "undefined") {
  onlyVowels = undefined;
}

if (typeof crazyCase === "undefined") {
  crazyCase = undefined;
}

if (typeof titleCase === "undefined") {
  titleCase = undefined;
}

if (typeof camelCase === "undefined") {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === "undefined") {
  crazyCase2ReturnOfCrazyCase = undefined;
}

module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
};
