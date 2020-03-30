$("#start").click(function(){
let array1 = [1, 7];
let array2 = [3, 4, 5];
let array3 = [11, 13, 16];

do {
var number1 = array1[Math.floor(Math.random() * 2)];
var number2 = array1[Math.floor(Math.random() * 2)];
} while(number2 == number1);

console.log(number1);
console.log(number2);

var number3 = array2[Math.floor(Math.random() * 3)];

do {
     var number4 = array2[Math.floor(Math.random() * 3)];
    } while(number4 == number3);

do {
var number5 = array2[Math.floor(Math.random() * 3)];
} while(number5 == number4 || number5 == number3 );

console.log(number3);
console.log(number4);
console.log(number5);

var number6 = array3[Math.floor(Math.random() * 3)];

do {
var number7 = array3[Math.floor(Math.random() * 3)];
} while(number7 == number6);

do {
    var number8 = array3[Math.floor(Math.random() * 3)];
} while(number8 == number6 || number8 == number7);

console.log(number6);
console.log(number7);

let number9 = number1 * 2;
let number10 = number2 * 2;
let number11 = number3 * 2;
let number12 = number4 * 2;
let number13 = number5 * 2;
let number14 = number3 * 3;
let number15 = number4 * 3;
let number16 = number5 * 3;

console.log(number8);
console.log(number9);
console.log(number10);
console.log(number11);
console.log(number12);
console.log(number13);
console.log(number14);
console.log(number15);
console.log(number16);


console.log(number1 + number2 + number3 + number4 +
            number5 + number6 + number7 + number8 +
            number9 + number10 + number11 + number12 +
            number13 + number14 + number15 + number16);
});
