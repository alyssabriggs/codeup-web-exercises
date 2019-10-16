"use strict";

do {
  var number = prompt("Please enter an odd number between 1 and 50:");
  if (number % 2 !== 0 && number > 0 && number < 51){
      for (var b = 1; b < 51; b++){
          if (b == number){
              console.log("Number to skip is " + number);
              continue;
          } else if (b % 2 !== 0){
              console.log("Here is an odd number: " + b);
          }
      }
      break;
  } else {
      continue;
  }
} while(number);


