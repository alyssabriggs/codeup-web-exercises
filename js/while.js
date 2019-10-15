"use strict";

var i = 2;
while (i < 65536) {
    console.log('while loop iteration #' + (i*=2));
}

// This is how you get a random number between 50 and 100
//total # cones we start with
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5

do {
    //how many cones someone wants to buy
    var randomNum = Math.floor(Math.random() * 5) + 1;
    if (randomNum < allCones) {
        console.log(randomNum + " cones sold.");
    } else if (randomNum > allCones) {
        console.log("I cannot sell you " + randomNum + " cones, I only have " + allCones)
    } else if (allCones === 0) {
        console.log("Yay! I sold them all!")
    }
}while (allCones > 0);