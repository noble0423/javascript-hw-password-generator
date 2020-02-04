  // series of questions (prompts) for password criteria that user selects whether to include in the password generator or not
    // password length prompt (must be at least 8 characters, no more than 128). 
    // validate selection
    
    // char type prompts (lowercase, uppercase, numeric, and/or special characters). 
    // validate selections

    // include atleast 1 of ea type of char type that user selected

  // after all selections have been answered, then the password is generated that matches the selected criteria

    // display password in alert or on the DOM

// Assignment Code
var generateBtn = document.querySelector("#generate");

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
