'use strict'

function favPet(){
    let favPet = prompt('What is your favorite pet?');
    if (favPet.toLowerCase() === 'all pets'){
        alert('We love all pets too!');

    }
}

let numberOfpets = 12

do{
    numberOfpets = prompt('Guess how many pet blogs we currently have on our page');

    if (numberOfpets == 11){
        alert('Very close. Think months of the year');
    } else if (numberOfpets > 12){
        alert('Our plan is to have that many one day. But for now, the amount is a bit lower.');  
    } else if (numberOfpets < 12){
        alert('You will be shocked, but we have a lot more than that!');
    }
} while(numberOfpets != 12);
    alert('Very Impressive! Someone has been keeping up with our updates!');

function numbers(){
    let answer = '';
    let total = 5;

    for(let i = 1;i <= total; i++){
    answer = prompt('can you guess how many buddies turbo has?');
      if(answer != 2){
        alert('try again. you have ' + (total - i) + ' attempts left');
      } else{
        i = 5;
        // alert('GREAT JOB! You got it right!');
        document.getElementById("looppic").innerHTML = alert('GREAT JOB! You got it right!');
        //break;
        }
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