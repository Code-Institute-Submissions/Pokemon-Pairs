$("#start").click(function(){
let array1 = [1, 7];
let array2 = [3, 4, 5];
let array3 = [11, 13];

let comparison = 0;

do {
var number1 = array1[Math.floor(Math.random() * 2)];
} while(number1 == comparison);

do {
var number2 = array1[Math.floor(Math.random() * 2)];
} while(number2 == comparison || number2 == number1);

console.log(number1);
console.log(number2);

do {
var number3 = array2[Math.floor(Math.random() * 3)];
} while(number3 == comparison);

do {
var number4 = array2[Math.floor(Math.random() * 3)];
} while(number4 == comparison || number4 == number3);

do {
var number5 = array2[Math.floor(Math.random() * 3)];
} while(number5 == comparison || number5 == number4 || number5 == number4 );

console.log(number3);
console.log(number4);
console.log(number5);

do {
var number6 = array3[Math.floor(Math.random() * 2)];
} while(number6 == comparison);

do {
var number7 = array3[Math.floor(Math.random() * 2)];
} while(number7 == comparison || number7 == number1);

console.log(number6);
console.log(number7);
});