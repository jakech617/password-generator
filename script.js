// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// my code
function generatePassword() {
  
  // empty string for new password.
  var finalPassword = '';
  
  // prompts user to type how many characters the password will contain.
  var charCount = prompt("How many characters would you like your password to contain? (8-128)"); 
  
  // check if character count meets requirements.
  if (charCount < 8 || charCount > 128) {
    alert("Length must be 8-128 characters. Please try again.");
  
  // prompts user to select the different criteria for their password.
  } else {
    var upperCase = confirm("Would you like to use uppercase letters?");
    var lowerCase = confirm("Would you like to use lowercase letters?");
    var useNumbers = confirm("Would you like to use numbers?");
    var specialChar = confirm("Would you like to use special characters?");
    if (upperCase != true && lowerCase != true && useNumbers != true && specialChar != true) 
    { alert("You must select at least one character type!") }
  }

  // for loop to increment characters until it reaches the users selection.
  for (let i = 0; i < charCount; i++) {
    finalPassword += getRandomChar(upperCase, lowerCase, useNumbers, specialChar);
  }

  // displays generated password.
  return finalPassword;
}

// random character generator.
function getRandomChar(upperCase, lowerCase, useNumbers, specialChar) {
  
  // list of all possible characters.
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";          
  var numbers = "1234567890" 
  var symbols = "!@#$%^&*(){}[]=<>,./"                    
  
  // temporary string to hold all possible characters based on user choices.
  var temp = "";
  
  // check if user wants upper case letters.
  // if true, append all upper case letters to the list possible characters.
  if (upperCase == true)
    temp = temp.concat(upper);
  
  // check if user wants lower case letters.
  // if true, append all lower case letters to the list of possible characters.
  if (lowerCase == true)
    temp = temp.concat(lower);
  
  // check if user wants symbols.
  // if true, append all symbols to the list of possible characters.
  if (useNumbers == true)
    temp = temp.concat(numbers);
  
  // check if user wants numbers.
  // if true, append all numbers to the list of possible characters.
  if (specialChar == true)
    temp = temp.concat(symbols);
  
  // return a random character from our list
  return temp.charAt(Math.floor(Math.random() * temp.length));
}