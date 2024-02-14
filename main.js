let displayPassword = document.querySelector('#password');
let clipboard = document.querySelector('#copy');
let displayLength = document.querySelector('#length');
let button = document.querySelector('.btn-submit');

let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#uppercase');
let numbers = document.querySelector('#numbers');
let symbols = document.querySelector('#symbols');

const  lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const  uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const  numbersList = '0123456789';
const  symbolsList = '!@#$%^&*()_+';

addEventListener();
function addEventListener(){
    button.addEventListener('click', generatePassword);
}


function generatePassword() {
    console.log('enter');}


function showValue(value) {
    displayLength.textContent = value;
}