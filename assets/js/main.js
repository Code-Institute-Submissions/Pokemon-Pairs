// $("#start").click(function(){
//     //Declaring the arrays
// let array1 = [1, 7];
// let array2 = [3, 4, 5];
// let array3 = [11, 13, 16];

// //Randomly giving each value from each array to its own variable, ensuring no duplicates.
// do {
// var number1 = array1[Math.floor(Math.random() * 2)];
// var number2 = array1[Math.floor(Math.random() * 2)];
// } while(number2 == number1);

// do {
//     var number3 = array2[Math.floor(Math.random() * 3)];
//     var number4 = array2[Math.floor(Math.random() * 3)];
//     var number5 = array2[Math.floor(Math.random() * 3)];
//     } while(number4 == number3 || number5 == number4 || number5 == number3);

// do {
// var number6 = array3[Math.floor(Math.random() * 3)];
// var number7 = array3[Math.floor(Math.random() * 3)];
// var number8 = array3[Math.floor(Math.random() * 3)];
// } while(number7 == number6 || number8 == number6 || number8 == number7);

// //Randomly generating numbers 9-16
// let number9 = number1 * 2;
// let number10 = number2 * 2;
// let number11 = number3 * 2;
// let number12 = number4 * 2;
// let number13 = number5 * 2;
// let number14 = number3 * 3;
// let number15 = number4 * 3;
// let number16 = number5 * 3;

// //Console.log the number plus automated test to check all the numbers are random.
// let test =  number1 + number2 + number3 + number4 +
//             number5 + number6 + number7 + number8 +
//             number9 + number10 + number11 + number12 +
//             number13 + number14 + number15 + number16;
// console.log(number1);
// console.log(number2);
// console.log(number3);
// console.log(number4);
// console.log(number5);
// console.log(number6);
// console.log(number7);
// console.log(number8);
// console.log(number9);
// console.log(number10);
// console.log(number11);
// console.log(number12);
// console.log(number13);
// console.log(number14);
// console.log(number15);
// console.log(number16);
// console.log("The total is" + " " + test + ". These numbers have no duplicates.");
// });



// let x = 0;
// let y = 0;
// let z = 0;

    
// $("#firstCard").click(function(){
//     if (y == 1) {
//         console.log("Sorry not a match!");
//         console.log(x);
//         $(".box").css("background-color", "blue");
//         y = 0;
//         console.log(y);
//     }
//     else if(x == 1){
//             x++;
//             console.log(x);
//             console.log("Well done!");
//             $(this).css("display", "none");
//             $("#secondCard").css("display", "none");
//     } 
//     else {
//         x++;
//         console.log(x);
//     }
// });

// $("#secondCard").click(function(){
//      if (y == 1) {
//         console.log("Sorry not a match!");
//         console.log(x);
//         $(".box").css("background-color", "blue");
//         y = 0;
//         console.log(y);
//     }
//     else if(x == 1){
//             x++;
//             console.log(x);
//             console.log("Well done!");
//             $(this).css("display", "none");
//             $("#firstCard").css("display", "none");
//         } 
//     else {
//         x++;
//         console.log(x);
//     }
// });

// $("#thirdCard").click(function(){
//     if (x == 1) {
//         console.log("Sorry not a match!");
//         console.log(y);
//       $(".box").css("background-color", "blue");
//         x = 0;
//         console.log(x);
//     }
//     else if(y == 1){
//             y++;
//             console.log(y);
//             console.log("Well done!");
//             $(this).css("display", "none");
//             $("#fourthCard").css("display", "none");
//         } 
//     else {
//         y++;
//         console.log(y);
//     }
// });

// $("#fourthCard").click(function(){
//    if (x == 1) {
//         console.log("Sorry not a match!");
//         console.log(y);
//       $(".box").css("background-color", "blue");
//         x = 0;
//         console.log(x);
//     }
//     else if(y == 1){
//             y++;
//             console.log(y);
//             console.log("Well done!");
//             $(this).css("display", "none");
//             $("#thirdCard").css("display", "none");
//         } 
//     else {
//         y++;
//         console.log(y);
//     }
// });

// $(".box").click(function(){
//     $(this).css("background-color", "green");
//     z++;
//     console.log("You have used" + " " + z + " " + "moves!")
//     if(x == 2 && y == 2){
//         console.log("Game over!");
//     }
// });


// support and initial ideas from the following URL. Answered by Michael Walter on Nov 20 '17 at 14:50
// https://stackoverflow.com/questions/47394549/how-to-modify-grid-template-areas-with-javascript
$("#start").click(function(){
var array4 = ["pair1b", "pair1a", "pair2b", "pair2a", "pair3b", "pair3a", "pair4b", "pair4a"];
do {
    var card1 = array4[Math.floor(Math.random() * 4)];
    var card2 = array4[Math.floor(Math.random() * 4)];
    var card3 = array4[Math.floor(Math.random() * 4)];
    var card4 = array4[Math.floor(Math.random() * 4)];
    // var card1 = array4[Math.floor(Math.random() * 8)];
    // var card2 = array4[Math.floor(Math.random() * 8)];
    // var card1 = array4[Math.floor(Math.random() * 8)];
    // var card2 = array4[Math.floor(Math.random() * 8)];
} while(card1 == card2 || card3 == card4 || card1 == card3 || card2 == card4 || card2 == card3 || card1 == card4);
console.log(card1, card2, card3, card4);

// let elem= document.getElementById("card-grid");
//       elem.style.gridTemplateAreas =`'${array4[0]} ${array4[1]}' '${array4[2]} ${array4[3]}' '${array4[4]} ${array4[5]}' '${array4[6]} ${array4[7]}' `;
//       console.log("The grid-template area should have been redefined now.");
});
      