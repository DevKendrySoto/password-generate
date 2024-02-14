let displayPassword = document.querySelector('#password');
let clipboard = document.querySelector('#copy');
let displayLength = document.querySelector('#length');
let button = document.querySelector('.btn-submit');

let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#uppercase');
let numbers = document.querySelector('#numbers');
let symbols = document.querySelector('#symbols');

let passwordAll = '';

const  lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const  uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const  numbersList = '0123456789';
const  symbolsList = '!@#$%^&*()_+';

addEventListener();
function addEventListener(){
    button.addEventListener('click', generatePassword);
}

function getRandonNumber(max) {
    return Math.floor(Math.random() * max);
}

function generatePassword(e) {
    passwordAll = '';
    if(lowercase.checked){
        passwordAll += getLowerCase();
    }
    if(uppercase.checked){
        passwordAll += getUpperCase();
    }
    if(numbers.checked){
        passwordAll += getNumber();
    }
    if(symbols.checked){
        passwordAll += getSymbol();
    }
    console.log(passwordAll);
}

function passwordComplete() {
    while(passwordAll.length < parseInt(displayLength.textContent)){
        passwordAll += getRandonPassword();
    }
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