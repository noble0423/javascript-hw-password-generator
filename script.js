// GLOBAL VARIABLES

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ["!", "@", "#", "$", "&", "*", "?"];
let password = [];
let randy;
let possiblePasswordChars = [];


let promptPasswordLength;
let confirmCharLowercase;
let confirmCharUppercase;
let confirmCharNumeric;
let confirmCharSpecial;

var generateBtn = document.querySelector("#generate");



// FUNCTIONS

// User Prompts Function
function askUserQuestions() {
  promptPasswordLength = parseInt(prompt("How long do you want your password to be (please enter number between 8 and 128)?"));

  if (promptPasswordLength >= 8 && promptPasswordLength <= 128) {
    confirmCharLowercase  = confirm("Would you like to include lowercase letters in your password?");
    confirmCharUppercase  = confirm("Would you like to include uppercase letters in your password?");
    confirmCharNumeric    = confirm("would you like to include numeric characters in your password?");
    confirmCharSpecial    = confirm("Would you like to include special characters in your password?");
  }
  else {
    alert("Please enter a number between 8 and 128.");

    askUserQuestions();
  }

}

// Randomizer Function
function randomizer(arrLength) {
  randy = Math.floor(Math.random() * arrLength);
}

// Generate Password Function
function generatePassword() {

  if (confirmCharLowercase) {
    possiblePasswordChars = possiblePasswordChars.concat(letters);
    console.log(possiblePasswordChars);
  }

  if (confirmCharUppercase) {
    var uppercaseLetters = letters.join("").toUpperCase().split("");
    possiblePasswordChars = possiblePasswordChars.concat(uppercaseLetters);
  }

  if (confirmCharNumeric) {
    possiblePasswordChars = possiblePasswordChars.concat(numbers);
  }

  if (confirmCharSpecial) {
    possiblePasswordChars = possiblePasswordChars.concat(specialCharacters);
  }

  for (let i = 0; i < promptPasswordLength; i++) {
    randomizer(possiblePasswordChars.length);
    password.push(possiblePasswordChars[randy]);
  }

  console.log(password);
  
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");

}


// LOGIC
window.addEventListener('DOMContentLoaded', (event) => {
  askUserQuestions();
  generatePassword();

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
});








