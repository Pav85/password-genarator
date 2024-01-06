// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var passwordArray = []; // Empty array of password options stored in variable
var passwordLength = 0; // Password length stored in variable

// Function to prompt user for password options
function getPasswordOptions() {
  var isValidLength = false;

  while (!isValidLength) {
    passwordLength = prompt("Enter password length: 10 to 64 characters"); // Prompt user for password length

    if (passwordLength >= 10 && passwordLength <= 64) {
      isValidLength = true;
    } else {
      alert("Password must be between 10 and 64 characters. Please try again."); // Display error message
    }
  }

  var hasCharacterType = false;

  while (!hasCharacterType) {
    passwordArray = [];

    if (confirm("Do you want special characters in your password?")) {
      // Prompt user for special chatcters options
      passwordArray = passwordArray.concat(specialCharacters);
      hasCharacterType = true;
    }

    if (confirm("Do you want numeric characters in your password?")) {
      //  Prompt user for numeric characters options
      passwordArray = passwordArray.concat(numericCharacters);
      hasCharacterType = true;
    }

    if (confirm("Do you want lowercase characters in your password?")) {
      // Prompt user for lowercase options
      passwordArray = passwordArray.concat(lowerCasedCharacters);
      hasCharacterType = true;
    }

    if (confirm("Do you want uppercase characters in your password?")) {
      // Prompt user for uppercase options
      passwordArray = passwordArray.concat(upperCasedCharacters);
      hasCharacterType = true;
    }

    if (!hasCharacterType) {
      alert("You must choose at least one character type. Please try again.");
    }
  }

  if (passwordArray.length == 0) {
    alert("You must choose at least one character type. Please try again."); // Display error message
    return false;
  }

  return true;
}

// Function to generate password with user input
function generatePassword() {
  // Function to generate password with user input
  var randomPassword = "";

  for (var i = 0; i <= passwordLength; i++) {
    var generatedPassword = Math.floor(Math.random() * passwordArray.length);
    randomPassword += passwordArray[generatedPassword];
  }

  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  if (getPasswordOptions()) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
