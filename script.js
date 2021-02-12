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

function generatePassword() {
    var finalPassword = '';
    var charCount = prompt("How many characters would you like your password to contain? (8-128)"); 
    
    if (charCount < 8 || charCount > 128) {
      alert("Length must be 8-128 characters. Please try again.");
    } else {
      var upperCase = confirm("Would you like to use uppercase letters?");
      var lowerCase = confirm("Would you like to use lowercase letters?");
      var useNumbers = confirm("Would you like to use numbers?");
      var specialChar = confirm("Would you like to use special characters?");
      if (upperCase != true && lowerCase != true && useNumbers != true && specialChar != true) 
      { alert("You must select at least one character type!") }
    }

    for (let i = 0; i < charCount; i++) {
      finalPassword += getRandomChar(upperCase, lowerCase, useNumbers, specialChar);
    }
    return finalPassword;
}

function getRandomChar(upperCase, lowerCase, useNumbers, specialChar) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";          
    var numbers = "1234567890" 
    var symbols = "!@#$%^&*(){}[]=<>,./"                    
    
    var temp = "";

    if (upperCase == true)
      temp = temp.concat(upper);
    
    if (lowerCase == true)
      temp = temp.concat(lower);

    if (useNumbers == true)
      temp = temp.concat(numbers);

    if (specialChar == true)
      temp = temp.concat(symbols);

    return temp.charAt(Math.floor(Math.random() * temp.length));
}