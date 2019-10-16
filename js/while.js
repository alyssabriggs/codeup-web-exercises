"use strict";

var i = 2;
while (i <= 65536) {
    console.log(i);
    i *= 2;
}

// This is how you get a random number between 50 and 100
//total # cones we start with
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5

do {
    //how many cones someone wants to buy
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought < allCones) {
        allCones -= conesBought;
        console.log(conesBought + " cones sold. There are " + allCones + " left in inventory.");
    } else if (allCones < conesBought)  {
        console.log("I cannot sell you " + conesBought + " cones, I only have " + allCones + " cones left.")
    } else {
        allCones -= conesBought;
        console.log("Yay! I sold them all!")
    }
}while (allCones > 0);

