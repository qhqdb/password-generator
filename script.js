var availableCharacters = []
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "~!@#$%^&*()-_=+<>?,./"

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = ""
  var length = prompt("Password Length?");

  while (length < 8 || length > 128)
  length = prompt("Password length?");

  if (length>=8 && length<=128) {
    alert("Continue.")
  } else {
      alert("Choose a number between 8 and 128.");
      generatePassword();
  }

  inputLowercase = confirm("Lowercase letters?");
  if (inputLowercase) {
    availableCharacters += lowercaseLetters
  }
  inputUppercase = confirm("Uppercase letters?");
  if (inputUppercase) {
    availableCharacters += uppercaseLetters
  }
  inputNumber = confirm("Numbers?");
  if (inputNumber) {
  availableCharacters += numbers
  }
  inputSpecial = confirm("Special characters?");
  if (inputSpecial) {
    availableCharacters += specialCharacters
  }

  for (var i = 0; i < length; i++) {
    password += availableCharacters[Math.floor(Math.random()*availableCharacters.length)];
    console.log(password);
  }

  return password
}

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}