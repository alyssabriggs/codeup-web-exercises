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

function enrollment(a , b) {
    var capacity = prompt("Is your class full?");
    var time = prompt("Does this class conflict with your current schedule?")
    if (capacity = "no"){
        return true;
    }
    if (time = "no") {
        return true;
    }
    return a && b;
}
// function productOffer(products , valid , premium) {
//     return valid && (products > 2 || premium);
// }
//
// console.log(productOffer(1, false, true));
