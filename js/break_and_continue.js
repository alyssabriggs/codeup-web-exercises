"use strict";

// do {
//   var number = prompt("Please enter an odd number between 1 and 50:");
//   if (number % 2 !== 0 && number > 0 && number < 51){
//       for (var b = 1; b < 51; b++){
//           if (b == number){
//               console.log("Number to skip is " + number);
//           } else if (b % 2 !== 0){
//               console.log("Here is an odd number: " + b);
//           }
//       }
//       break;
//   } else {
//       continue;
//   }
// } while(number);

//infinite loop

while(true) {
    var num = parseInt(prompt("Give me an odd number between 1 and 50."));
    if (num % 2 !== 0 && num <= 50 && num >=1){
        break;
    }
}

console.log("Skipping the number: " + num);

for (var q = 1; q <= 50; q += 2){
    if (q === num) {
        console.log("Yikes, skipping that number.")
        continue;
    }
    console.log("Here is an odd number: "+ q);
}