// GLOBAL VARIABLES

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = "!@#$&*?";
let password = [];
let randy;


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
  console.log(`randy: ${randy}`); 
}

// Generate Password Function
function generatePassword() {

  // for loop to loop thru the promptPasswordLength
  for (let i = 1; i <= promptPasswordLength; i++) {
    // if CharLowercase is true, must push atleast 1 value at random into password
    // was lowercase selected?
    if (password.length < promptPasswordLength) {
      if (confirmCharLowercase) {
        randomizer(letters.length);
        password.push(letters[randy]);
      }
    }
    // if CharUppercase is true, must push atleast 1 value at random into password
    if (password.length < promptPasswordLength) {
      if (confirmCharUppercase) {
        randomizer(letters.length);
        password.push(letters[randy].toUpperCase());
      }
    }
    // if CharNumeric is true, must push atleast 1 value at random into password
    if (password.length < promptPasswordLength) {
      if (confirmCharNumeric) {
        randomizer(numbers.length);
        password.push(numbers[randy]);
      }
    }
    // if CharSpecial is true, must push atleast 1 value at random into password
    if (password.length < promptPasswordLength) {
      if (confirmCharSpecial) {
        randomizer(specialCharacters.length);
        password.push(specialCharacters[randy]);
      }
    }
  }
  console.log(password);
  
}

// Write password to the #password input
function writePassword() {
  console.log("clicked");
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}


// LOGIC
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  askUserQuestions();

  console.log(`length: ${promptPasswordLength}`);
  console.log(`lowercase: ${confirmCharLowercase}`);
  console.log(`uppercase: ${confirmCharUppercase}`);
  console.log(`numeric: ${confirmCharNumeric}`);
  console.log(`special: ${confirmCharSpecial}`);

  generatePassword();

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  



});
// series of questions (prompts) for password criteria that user selects whether to include in the password generator or not
  // password length prompt (must be at least 8 characters, no more than 128). 
  // validate selection
  
  // char type prompts (lowercase, uppercase, numeric, and/or special characters). 
  // validate selections

  // include atleast 1 of ea type of char type that user selected

// after all selections have been answered, then the password is generated that matches the selected criteria

  // display password in alert or on the DOM







