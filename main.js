let displayPassword = document.querySelector("#password");
let clipboard = document.querySelector("#copy");
let displayLength = document.querySelector("#length");
let button = document.querySelector(".btn-submit");

let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");

let passwordAll = "";

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersList = "0123456789";
const symbolsList = "!@#$%^&*()_+";

addEventListener();
function addEventListener() {
  button.addEventListener("click", generatePassword);
  clipboard.addEventListener("click", copyPassword);
}
function copyPassword(e) {
  e.preventDefault();
  const pw = displayPassword.textContent;
  if (pw) {
    const textarea = document.createElement("textarea");
    textarea.value = pw;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();      
  } 
}
function getRandonNumber(max) {
  return Math.floor(Math.random() * max);
}
function randomNumbers() {
  return Math.floor(Math.random() * 4);
}   
function generatePassword(e) {
  passwordAll = "";
  if (lowercase.checked) {
    passwordAll += getLowerCase();
  }
  if (uppercase.checked) {
    passwordAll += getUpperCase();
  }
  if (numbers.checked) {
    passwordAll += getNumber();
  }
  if (symbols.checked) {
    passwordAll += getSymbol();
  }
  if(uppercase.checked || lowercase.checked || numbers.checked || symbols.checked){
    passwordComplete();
}
}

function passwordComplete() {
  while (passwordAll.length < parseInt(displayLength.textContent)) {
    let x = randomNumbers();
    if (lowercase.checked && x === 0) {
      passwordAll += getLowerCase();
    }
    if (uppercase.checked && x === 1) {
      passwordAll += getUpperCase();
    }
    if (numbers.checked && x === 2) {
      passwordAll += getNumber();
    }
    if (symbols.checked && x === 3) {
      passwordAll += getSymbol();
    }
  }
  displayPassword.textContent = passwordAll;
}

function getUpperCase() {
  return uppercaseLetters[getRandonNumber(uppercaseLetters.length)];
}
function getLowerCase() {
  return lowercaseLetters[getRandonNumber(lowercaseLetters.length)];
}
function getNumber() {
  return numbersList[getRandonNumber(numbersList.length)];
}
function getSymbol() {
  return symbolsList[getRandonNumber(symbolsList.length)];
}

function showValue(value) {
  displayLength.textContent = value;
}
