$("#start").click(function(){
let array1 = [1, 7];
let array2 = [3, 4, 5];
let array3 = [11, 13];

var number1 = array1[Math.floor(Math.random() * 2)];

do {
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

var number6 = array3[Math.floor(Math.random() * 2)];

do {
var number7 = array3[Math.floor(Math.random() * 2)];
} while(number7 == number6);

console.log(number6);
console.log(number7);

let number8 = number1 * 2;
let number9 = number2 * 2;

console.log(number8);
console.log(number9);



});