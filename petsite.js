'use strict'

function favPet(){
    let favPet = prompt('What is your favorite pet?');
    if (favPet.toLowerCase() === 'all pets'){
        alert('We love all pets too!');
    }
}
function greeting(){
    let greeting = '';
    let today = new Date();
    let hourNow = today.getHours();
    // let greeting;

    if (hourNow >= 18) {
        greeting= 'Good Evening Fellow Pet Lovers!';
    } else if (hourNow > 12) {
        greeting= 'Good Afternoon Fellow Pet Lovers!';
    } else if (hourNow > 0) {
        greeting= 'Good Morning Fellow Pet Lovers!';
    }  else {
        greeting= 'Welcome!';
    }
    document.write(greeting);
}

function myFunction() {
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null || person != '') {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! Welcome to our ever growing pet community";
    }
  }

// document.write('<h3>' + greeting + '</h3>');