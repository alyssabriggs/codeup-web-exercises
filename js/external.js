"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");
alert("Great, " + color + " is my favorite color too!");

var a = prompt("How many days did you have Little Mermaid?");
var b = prompt("How many days did you have Brother Bear");
var c = prompt("How many days did you have Hercules?");
var total = 3 * (parseInt(a) + parseInt(b) + parseInt(c));
alert("Your total is " + total + ".");

var google = prompt("How many hours did you work at Google?");
var amazon = prompt("How many hours did you work at Amazon");
var facebook = prompt("How many hours did you work at Facebook?");
var totalHours = (400 * parseInt(google)) + (380 * parseInt(amazon)) + (350 * parseInt(facebook));
alert("Your paycheck amount is " + totalHours + ".");


var classFull = confirm("Is your class full?");
var classSched = confirm ("Does this class conflict with your current schedule?")
    if (classFull == false && classSched === false) {
        alert("You may enroll in this class.");
    }
    else alert("You may not enroll in this class.");


var offerValid = confirm("Is the offer still valid?");
var numOfProducts = prompt("How many products are in your cart?");
var isPremium = confirm("Are you a premium member?")
    if ( offerValid && (numOfProducts >2 || isPremium)) {
        alert("The offer has been applied to your cart.");
}
    else alert("The offer has not been applied to your cart.");
