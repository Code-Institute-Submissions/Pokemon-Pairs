// $("#start").click(function(){


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



// $("#start").click(function(){

//Put in a function to randomly generate these arrays. 


//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var originalArray = ["pair1b", "pair1a", "pair2b", "pair2a", "pair3b", "pair3a", "pair4b", "pair4a"];
// Used like so
shuffle(originalArray);
console.log(originalArray);




  
// var array0 = ["pair3b", "pair1a"];
// var array1 = ["pair2b", "pair4a"];
// var array2 = ["pair1b", "pair3a"];
// var array3 = ["pair2a", "pair4b"];
// var totalArray = [array0, array1, array2, array3];

// //This block will give each choice a random array.
// do{
//     var arrayChoice1 = totalArray[Math.floor(Math.random() * 4)];
//     var arrayChoice2 = totalArray[Math.floor(Math.random() * 4)];
//     var arrayChoice3 = totalArray[Math.floor(Math.random() * 4)];
//     var arrayChoice4 = totalArray[Math.floor(Math.random() * 4)];
// }while(arrayChoice1 == arrayChoice2 || arrayChoice3 == arrayChoice4 || arrayChoice1 == arrayChoice3 || arrayChoice2 == arrayChoice4 || arrayChoice2 == arrayChoice3 || arrayChoice1 == arrayChoice4);
// // console.log(arrayChoice1, arrayChoice2, arrayChoice3, arrayChoice4);


// //This block of code will randomly give the card a choice.
//  var arrayChoices = [arrayChoice1, arrayChoice2, arrayChoice3, arrayChoice4];

//      do{
//     var card1ArrayChoice = arrayChoices[Math.floor(Math.random() * 4)];
//     var card2ArrayChoice = arrayChoices[Math.floor(Math.random() * 4)];
//     var card3ArrayChoice = arrayChoices[Math.floor(Math.random() * 4)];
//     var card4ArrayChoice = arrayChoices[Math.floor(Math.random() * 4)];
// }while(card1ArrayChoice == arrayChoice2 || arrayChoice3 == arrayChoice4 || arrayChoice1 == arrayChoice3 || arrayChoice2 == arrayChoice4 || arrayChoice2 == arrayChoice3 || arrayChoice1 == arrayChoice4);
// // console.log(arrayChoice1, arrayChoice2, arrayChoice3, arrayChoice4);



// do {
//     var card1 = arrayChoices[0][Math.floor(Math.random() * 2)];
//     console.log(card1);
//     var card5 = arrayChoice1[Math.floor(Math.random() * 2)];
//     console.log(card5);
// }while(card1 == card5); 
// console.log(card1, card5);

// do {
//     var card2 = arrayChoice2[Math.floor(Math.random() * 2)];
//     var card6 = arrayChoice2[Math.floor(Math.random() * 2)];
// }while(card2 == card6); 
// console.log(card2, card6);

// do {
//     var card3 = arrayChoice3[Math.floor(Math.random() * 2)];
//     var card7 = arrayChoice3[Math.floor(Math.random() * 2)];
// }while(card3 == card7); 
// console.log(card3, card7);

// do {
//     var card4 = arrayChoice4[Math.floor(Math.random() * 2)];
//     var card8 = arrayChoice4[Math.floor(Math.random() * 2)];
// }while(card4 == card8); 
// console.log(card4, card8);


  

    


    // arrayX[Y]
 
//card1 will be chosen from a random array and a random value of that array. 


// do {
//     // var card1 = array4[Math.floor(Math.random() * 8)];
//     // var card2 = array4[Math.floor(Math.random() * 8)];
//     // var card1 = array4[Math.floor(Math.random() * 8)];
//     // var card2 = array4[Math.floor(Math.random() * 8)];
// } while(card1 == card2 || card3 == card4 || card1 == card3 || card2 == card4 || card2 == card3 || card1 == card4);
// console.log(card1, card2, card3, card4);

// let elem= document.getElementById("card-grid");
//       elem.style.gridTemplateAreas =`'${array4[0]} ${array4[1]}' '${array4[2]} ${array4[3]}' '${array4[4]} ${array4[5]}' '${array4[6]} ${array4[7]}' `;
//       console.log("The grid-template area should have been redefined now.");
// });
      