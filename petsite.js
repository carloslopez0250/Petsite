'use strict'
let favPet = prompt('What is your favorite pet?');

if (favPet.toLowerCase() === 'all pets'){
    alert('We love all pets too!')
}



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

function myFunction() {
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! Welcome to our ever growing pet community";
    }
  }

// document.write('<h3>' + greeting + '</h3>');