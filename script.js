// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = true;
var lowerCaseCharacters=true;
var upperCaseCharacters=true;
var numericCharacters=true;

// Write password to the #password input
generateBtn.onclick = function(){
   var length= window.prompt("How long do you want your password to be in characters?");
   specialCharacters=window.confirm("Do you want special characters in your password?");
   lowerCaseCharacters=window.confirm("Do you want lower case characters in your password?");
   upperCaseCharacters=window.confirm("Do you want upper case characters in your password?");
   numericCharacters=window.confirm("Do you want numberic characters in your password?");
   console.log(specialCharacters);

}


// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);
    


