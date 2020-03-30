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
});