// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = true;
var lowerCaseCharacters=true;
var upperCaseCharacters=true;
var numericCharacters=true;
var length =0;
// var usableCharacters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
// "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
//  "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
//  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
//   "y", "z"," ","!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[",,"]","^","_","`","{","|","}","~"]

  var lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var selectedSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


// Write password to the #password input
     generateBtn.onclick = function userPrompt(){
   length= window.prompt("How long do you want your password to be in characters?");
      if(length<8 ||length>128){
        alert("Please enter a lenght between 8 and 128");
        userPrompt();
      }
      else{
   specialCharacters=window.confirm("Do you want special characters in your password?");
   lowerCaseCharacters=window.confirm("Do you want lower case characters in your password?");
   upperCaseCharacters=window.confirm("Do you want upper case characters in your password?");
   numericCharacters=window.confirm("Do you want numberic characters in your password?");
  }
   var charactersToUse = "";
   var password = [];
   var truthCounter = 0;
  if(specialCharacters){
    charactersToUse=charactersToUse.concat(selectedSpecialCharacters);
    // var specialCharacterPickOne = selectedSpecialCharacters[(Math.floor(Math.random()*selectedSpecialCharacters.length))]; 
    // console.log(specialCharacterPickOne);
    // password.unshift(specialCharacterPickOne);
    // truthCounter++
  }
  if(lowerCaseCharacters){
    charactersToUse=charactersToUse.concat(lowerCaseLetters);
    // var lowerCaseCharactersPickOne = lowerCaseLetters[(Math.floor(Math.random()*lowerCaseLetters.length))];
    // console.log(lowerCaseCharactersPickOne);
    // password.unshift(lowerCaseCharactersPickOne);
    // truthCounter++
  }
 if(upperCaseCharacters){
  charactersToUse=charactersToUse.concat(upperCaseLetters);
  // password.unshift(upperCaseLetters[(Math.floor(Math.random()*upperCaseLetters.length))]);
  // password.unshift(Math.floor(Math.random()*upperCaseLetters.length));
  // truthCounter++
 }
 if(numericCharacters){
  charactersToUse = charactersToUse.concat(numbersZeroToNine);
  // password.unshift((numericCharacters[Math.floor(Math.random()*numericCharacters.length)]));
  // password.unshift(Math.floor(Math.random()*numbersZeroToNine.length));
  // truthCounter++
 }
//  password = password.join();
//  console.log(password);


 for(var i=truthCounter;i<length;i++){
  var arrayIndex =Math.floor(Math.random()*charactersToUse.length);
  password+=charactersToUse.substring(arrayIndex,arrayIndex+1);
 }


 document.getElementById("password").textContent=password;
}

  // my attempt to get it to make sure we have all of the characters requested. Does not work because we turned into string. 
// if(specialCharacters){
//   password.splice(0,1,selectedSpecialCharacters[Math.floor(Math.random()*selectedSpecialCharacters.length)])
// }

// }

   