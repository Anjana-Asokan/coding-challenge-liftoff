const readline = require("readline-sync");

function detectWord(str) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    let ascCd = str.charCodeAt(i);
    if (ascCd >= 97 && ascCd <= 122) {
      word += str[i];
    }
  }
  return word;
}

console.log(
  detectWord(
    readline.question("Enter a combination of upperCase & lowerCase letters : ")
  )
);
