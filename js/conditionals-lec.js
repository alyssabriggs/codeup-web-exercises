"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin

// if (isAdmin) {
//     //show a specific navbar
// }

//Together: Send a 20% off coupon if its users birthday

// if(isBirthday){
//     //send 20% off bday email
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;
//
//  if (isRainy) {
//      alert("It's raining!");
//  }

// //Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var itemCost = 100;
// var currentBalance = 200;
//
// if(itemCost < currentBalance) {
//     alert("You have enough money! Yay!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// function gameOver(numberOfLives){
//     if (numberOfLives === 0){
//         alert("Sorry, game over.");
//     }
// }
//
// console.log(gameOver(0));

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// function weatherCondition(weather) {
//     if (weather === "snowing"){
//         alert("It's snowing!");
//     }
// }
//
// console.log(weatherCondition("snowing"));

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// function number(numberInput){
//     if (numberInput > 10){
//         alert(true);
//     }
// }
//
// console.log(number(12));

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = false;
//
// if (isAdmin){
//     //show a specific navbar
//     alert("User is admin!");
// } else {
//     //show regular navbar
//     alert("User is a regular user.");
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isRainy = true;
//
// if (isRainy) {
//     //show a raining icon or a dark blue background
//     alert("It's raining");
// } else {
//     //show a regular weather icon or nice yellow background
//     alert("Have a nice day!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//
// var numberOfLives = 0;
//
// if (numberOfLives === 0) {
//     alert("Sorry, game over.");
// } else {
//     alert("Next level!");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "raining";
//
// if (weather === "snowing"){
//     alert("It's snowing!");
// } else {
//     alert("Check back later for more details!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 18;
//
// if (numberInput > 10){
//     alert(true);
// } else {
//     alert("The number is less than 10");
// }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// function checkIfGameIsOver(numberOfLives) {
//     var returnMessage;
//
//     if (numberOfLives === 0) {
//         returnMessage = "Sorry, game over";
//     } else {
//         returnMessage = "Next Level!";
//     }
//     return returnMessage;
// }
//
// console.log(checkIfGameIsOver(10));

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

// function weatherAlert(weather) {
//     if (weather === "snowing") {
//         alert("It's snowing!");
//     } else {
//         alert("Check back later for more details!");
//     }
// }
//
// console.log(weatherAlert("snowing"));

// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var ageOfUser = confirm("Are you 13 year of age or older?");
//
// console.log("The value of the confirm is: " + ageOfUser);
//
// if (ageOfUser) {
//     // Authorize access
//     alert("You may proceed.");
// } else {
//     alert("Sorry, you are not able to proceed.");
// }



// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
//
// var weather = "snowing";
//
// if(weather === "snowing"){
//     alert("It's snowing!");
// } else if (weather === "raining") {
//     alert("It's raining!");
// } else if (weather === "sunny") {
//     alert("It's sunny!");
// } else {
//     alert("Have a nice day.");
// }


//Together: refactor the above statement as a function

// function checkWeather(weather) {
//     if (weather === "snowing") {
//         alert("It's snowing!");
//     } else if (weather === "raining") {
//         alert("It's raining!");
//     } else if (weather === "sunny") {
//         alert("It's sunny!");
//     } else {
//         alert("Have a nice day.");
//     }
// }
//
// checkWeather("sunny");

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.


// function trafficLight(color){
//     if (color === "red") {
//         return "STOP!";
//     } else if (color === "yellow") {
//         return "Slow down...";
//     } else if ( color === "green") {
//         return "GO!";
//     } else {
//         return "I don't think that's a stoplight...";
//     }
// }
//
// console.log(trafficLight("red"));


// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license. 

// var userAge = 16;
// var hasPermit = false;
//
// if (userAge < 15) {
//     alert("Sorry, you're not eligible for a permit!");
// } else {
//     if (userAge === 15) {
//         alert("You can have a permit. Yay!");
//     } else if (userAge >= 16 && hasPermit) {
//         alert("You can have a license.");
//     } else if (userAge >= 16 && !hasPermit) {
//         alert("Sorry, you need a permit first.");
//     }
// }





// ================ TERNARY STATEMENT ================

// Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

// var weather = "sunny";
// var weatherMessage = (weather === "rainy") ? "It's raining" : "Have a nice day!";
//
// console.log(weatherMessage);


// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//         //default represents the "else" or the catch-all for cases that aren't represented above.
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

// var weather = "rainy";
//
// switch (weather) {
//     case "rainy" :
//         alert("Better bring an umbrella!");
//         break;
//     case "sunny" :
//         alert("Try and keep cool in the heat.");
//         break;
//     case "windy" :
//         alert("Bring a coat to keep warm.");
//         break;
//     default:
//         alert("Have a good day!");
//         break;
// }


//TODO: Rewrite the intersection function from earlier as a switch statement.

// function trafficLight(color){
//     switch (color) {
//         case "red" :
//             alert("STOP!");
//             break;
//         case "yellow" :
//             alert("Slow down...");
//             break;
//         case "green" :
//             alert("GO!");
//             break;
//         default :
//             alert("I don't think that's a stoplight...");
//             break;
//     }
// }
//
// console.log(trafficLight("red"));

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

//if shopping has been done
    //allowance increases to $10
//else shopping has not been done
    //allowance remains the same

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

//if user selects sunny from dropdown
    // print sunny statement
//else if user selects raining from dropdown
    // print rainy statement
//else if user selects snowing from dropdown
    //print snowing statement
//else if user selects overcast from dropdown
    //print overcast statement
//else
    // leave page without statement like default


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

//if user selects white from dropdown
    //change background to white and text to black
//else user selects black from dropdown
    //change background to black with white text

