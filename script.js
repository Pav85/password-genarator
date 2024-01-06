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
  passwordLength = prompt("Enter password length: 10 to 64 characters"); // Prompt user for password length
  console.log("Password Length:", passwordLength);

  if (passwordLength < 10 || passwordLength > 64) {
    alert("Password must be between 10 and 64 characters. Please try again."); // Display error message

    return false;
  }

  passwordArray = []; // Empty array of password options stored in variable

  if (confirm("Do you want special characters in your password?")) {
    // Prompt user for special chatcters options
    passwordArray = passwordArray.concat(specialCharacters);
  }
  console.log("Special Characters:", passwordArray);

  if (confirm("Do you want numeric characters in your password?")) {
    //  Prompt user for numeric characters options
    passwordArray = passwordArray.concat(numericCharacters);
  }
  console.log("Numeric Characters:", passwordArray);

  if (confirm("Do you want lowercase characters in your password?")) {
    // Prompt user for lowercase options
    passwordArray = passwordArray.concat(lowerCasedCharacters);
  }
  console.log("Lowercase Characters:", passwordArray);

  if (confirm("Do you want uppercase characters in your password?")) {
    // Prompt user for uppercase options
    passwordArray = passwordArray.concat(upperCasedCharacters);
  }
  console.log("Uppercase Characters:", passwordArray);

  if (passwordArray.length == 0) {
    alert("You must choose at least one character type. Please try again."); // Display error message
    return false;
  }
  console.log("Final Password Array", passwordArray);

  return true;
}

// Function to generate password with user input
function generatePassword() {
  // Function to generate password with user input
  var randomPassword = "";

  for (var i = 0; i <= passwordLength; i++) {
    var generatedPassword = Math.floor(Math.random() * passwordArray.length);
    randomPassword += passwordArray[generatedPassword];
    console.log("Generated Char:", passwordArray[generatedPassword]);
  }
  console.log("Random Password:", randomPassword);
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
    console.log("Password in Textbox:", passwordText.value);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
