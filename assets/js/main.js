$("#start").click(function(){
    let a = 0;
    let b = 0;
    let x = 0;
    let y = 0;
    let w = 0;   
    let z = 0;
    
 $("#card1").click(function(){
     if (y == 1 || a == 1 || b == 1 ){
         console.log("Sorry not a match!");
         console.log(x);
        // $(".box").css("background-color", "blue");
         y = 0;
         a = 0;
         b = 0;
         console.log(y);
     }
     else if(x == 1){
             x++;
             console.log(x);
             console.log("Well done!");
             $(this).css("display", "none");
             $("#card2").css("display", "none");
             z++;
     } 
     else {
         x++;
         console.log(x);
     }
 });

$("#card2").click(function(){
     if (y == 1 || a == 1 || b == 1 ){
        console.log("Sorry not a match!");
        console.log(x);
       // $(".box").css("background-color", "blue");
        y = 0;
        a = 0;
        b = 0;
        console.log(y);
    }
    else if(x == 1){
            x++;
            console.log(x);
            console.log("Well done!");
            $(this).css("display", "none");
            $("#card1").css("display", "none");
            z++;
        } 
    else {
        x++;
        console.log(x);
    }
});

$("#card3").click(function(){
    if (x == 1) {
        console.log("Sorry not a match!");
        console.log(y);
     // $(".box").css("background-color", "blue");
        x = 0;
        console.log(x);
    }
    else if(y == 1){
            y++;
            console.log(y);
            console.log("Well done!");
            $(this).css("display", "none");
            $("#card4").css("display", "none");
            z++;
        } 
    else {
        y++;
        console.log(y);
    }
});

$("#card4").click(function(){
   if (x == 1) {
        console.log("Sorry not a match!");
        console.log(y);
    //  $(".box").css("background-color", "blue");
        x = 0;
        console.log(x);
    }
    else if(y == 1){
            y++;
            console.log(y);
            console.log("Well done!");
            $(this).css("display", "none");
            $("#card3").css("display", "none");
            z++;
        } 
    else {
        y++;
        console.log(y);
    }
});

$("#card5").click(function(){
     if (a == 1) {
         console.log("Sorry not a match!");
         console.log(b);
      //   $(".box").css("background-color", "blue");
         a = 0;
         console.log(a);
     }
     else if(b == 1){
             b++;
             console.log(b);
             console.log("Well done!");
             $(this).css("display", "none");
             $("#card6").css("display", "none");
             z++;
     } 
     else {
         b++;
         console.log(b);
     }
 });

$("#card6").click(function(){
     if (a == 1) {
         console.log("Sorry not a match!");
         console.log(b);
      //   $(".box").css("background-color", "blue");
         a = 0;
         console.log(a);
     }
     else if(b == 1){
             b++;
             console.log(b);
             console.log("Well done!");
             $(this).css("display", "none");
             $("#card5").css("display", "none");
             z++;
     } 
     else {
         b++;
         console.log(b);
     }
 });

$("#card7").click(function(){
    if (b == 1) {
         console.log("Sorry not a match!");
         console.log(a);
      //   $(".box").css("background-color", "blue");
         b = 0;
         console.log(b);
     }
     else if(a == 1){
             a++;
             console.log(a);
             console.log("Well done!");
             $(this).css("display", "none");
             $("#card8").css("display", "none");
             z++;
     } 
     else {
         a++;
         console.log(a);
     }
 });

$("#card8").click(function(){
   if (b == 1) {
         console.log("Sorry not a match!");
         console.log(a);
     //    $(".box").css("background-color", "blue");
         b = 0;
         console.log(b);
     }
     else if(a == 1){
             a++;
             console.log(a);
             console.log("Well done!");
             $(this).css("display", "none");
             $("#card7").css("display", "none");
             z++;
     } 
     else {
         a++;
         console.log(a);
     }
 });


$(".box").click(function(){
    $(this).css("background-color", "green");
    w++;
    console.log("You have used" + " " + w + " " + "moves!")
    if(z == 4){
        console.log("Game over!");
    }
});


// support and initial ideas from the following URL. Answered by Michael Walter on Nov 20 '17 at 14:50
// https://stackoverflow.com/questions/47394549/how-to-modify-grid-template-areas-with-javascript



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
var shuffledArray = shuffle(originalArray);
console.log(shuffledArray);

var array0 = [shuffledArray[0], shuffledArray[1]];
var array1 = [shuffledArray[2], shuffledArray[3]];
var array2 = [shuffledArray[4], shuffledArray[5]];
var array3 = [shuffledArray[6], shuffledArray[7]];

console.log(array0, array1, array2, array3);

do {
    var card1 = array0[Math.floor(Math.random() * 2)];
    var card2 = array0[Math.floor(Math.random() * 2)];
}while(card1 == card2); 


do {
    var card3 = array1[Math.floor(Math.random() * 2)];
    var card4 = array1[Math.floor(Math.random() * 2)];
}while(card3 == card4); 


do {
    var card5 = array2[Math.floor(Math.random() * 2)];
    var card6 = array2[Math.floor(Math.random() * 2)];
}while(card5 == card6); 


do {
    var card7 = array3[Math.floor(Math.random() * 2)];
    var card8 = array3[Math.floor(Math.random() * 2)];
}while(card7 == card8); 

console.log(card1, card2);
console.log(card3, card4);
console.log(card5, card6);
console.log(card7, card8);

var cardArray = [card1, card2, card3, card4, card5, card6, card7, card8];
console.log(cardArray);

let elem= document.getElementById("card-grid");
      elem.style.gridTemplateAreas =`'${cardArray[0]} ${cardArray[1]}' '${cardArray[2]} ${cardArray[3]}' '${cardArray[4]} ${cardArray[5]}' '${cardArray[6]} ${cardArray[7]}' `;
      console.log("The grid-template area should have been redefined now.");
});
      

$("body").click(function(){
    $("footer").css("display", "block");
});