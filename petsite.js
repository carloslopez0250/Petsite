'use strict'

const greeting = document.getElementById('greeting');
let today = new Date();
let hourNow = today.getHours();
// let greeting;

if (hourNow > 18) {
    greeting.innerText = 'Good Evening Fellow Pet Lovers!';
} else if (hourNow > 12) {
    greeting.innerText = 'Good Afternoon Fellow Pet Lovers!';
} else if (hourNow > 0) {
    greeting.innerText = 'Good Morning Fellow Pet Lovers!';
}  else {
    greeting.innerText = 'Welcome!';
}

// document.write('<h3>' + greeting + '</h3>');

