// GLOBAL VARIABLES

let promptPasswordLength;
let confirmCharLowercase;
let confirmCharUppercase;
let confirmCharNumeric;
let confirmCharSpecial;

var generateBtn = document.querySelector("#generate");



// FUNCTIONS

// User Prompts Function
function askUserQuestions() {

  promptPasswordLength = prompt("How many characters long do you want your password to be?");

  confirmCharLowercase = confirm("Would you like to inlude lowercase letters in your password?");

  confirmCharUppercase = confirm("Would you like to include uppercase letters in your password?");

  confirmCharNumeric = confirm("would you like to include numeric characters in your password?");

  confirmCharSpecial = confirm("Would you like to include special characters in your password?");
  
}

// Generate Password Function
function generatePassword() {
  console.log("we're here");
}

// Write password to the #password input
function writePassword() {
  console.log("clicked");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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







