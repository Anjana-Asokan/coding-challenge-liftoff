/*Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"*/

const readline = require("readline-sync");

function LongestWord(sen) {
  // code goes here
  let arr = sen.split(" ");

  let largestIndex = 0;
  let largestLen = 0;

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];

    // if string contains punctuation:
    let invalidCharsLen = 0;
    for (let j = 0; j < str.length; j++) {
      let validChar = false;

      let ascCd = str.charCodeAt(j);
      if (
        (ascCd >= 48 && ascCd <= 57) ||
        (ascCd >= 65 && ascCd <= 90) ||
        (ascCd >= 97 && ascCd <= 122)
      ) {
        validChar = true;
      }

      if (!validChar) {
        invalidCharsLen++;
      }
    }

    let len = str.length - invalidCharsLen;
    if (len > largestLen) {
      largestLen = len;
      largestIndex = i;
    }
  }

  return arr[largestIndex];
}

// keep this function call here
console.log(LongestWord(readline.question("Enter a sentence : ")));
