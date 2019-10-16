"use strict";

//Number 2
function showMultiplicationTable(input){
    for (var x = 1; x < 11; x++) {
        console.log(input + " x " + x + " = " + (input * x));
    }
}
showMultiplicationTable(11);

//Number 3
for (var x = 0; x < 10; x++){
    var random = Math.floor(Math.random() * 180) + 20;
    if (random % 2 === 0){
        console.log(random + " is even");
    } else {
        console.log(random + " is odd");
    }
}

//Number 4
for (var i = 1; i < 10; i++){
    console.log(("" + i).repeat(i));
}

// //Number 4 - ALT
// for (var k =1; k< 10; k++){
//     var str = "";
//     for (var y =1; y <= k; y++){
//         str += k;
//     }
//     console.log(str);
// }


for (var i = 100; i >= 5; i -= 5){
    console.log(i);
}

