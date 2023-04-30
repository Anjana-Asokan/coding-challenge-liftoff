/*
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
Examples
Input: "coderbyte"
Output: etybredoc
Input: "I Love Code"
Output: edoC evoL I
*/

const readline = require('readline-sync');

function FirstReverse(str) { 

    // code goes here  
  let newString = "";
      for (let i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
      return newString;
  
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline.question("Enter a string: ")));