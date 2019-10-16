"use strict";

function showMultiplicationTable(input){
    for (var x = 1; x < 11; x++) {
        console.log(input + " x " + x + " = " + (input * x));
    }
}
showMultiplicationTable(11);


for (var x = 0; x < 10; x++){
    var random = Math.floor(Math.random() * 181) + 20;
    if (random % 2 === 0){
        console.log(random + " is even");
    } else if (random % 2 !== 0){
        console.log(random + " is odd");
    }
}


for (var i = 1; i < 10; i++){
    console.log(("" + i).repeat(i));
}

for (var i = 105; i > 5;){
    console.log(i -= 5);
}

