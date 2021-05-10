"use strict";
let body = document.querySelector('body');
console.log(body);
let divOne = document.createElement('div');
body.appendChild(divOne);
divOne.setAttribute("id", "root");
const testForm = document.querySelector('.test-form');
let userInput = document.querySelector('#in');
testForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userInput.value);
});
console.log(testForm.children);
