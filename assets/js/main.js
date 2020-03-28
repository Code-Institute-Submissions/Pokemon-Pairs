$(".box").click(function(){
    $(this).css("background-color", "green");

});

let x = 0;
let y = 0;

$("#firstCard").click(function(){
    if (y == 1) {
        console.log("Sorry not a match!");
    }
    else if(x == 1){
            x++;
            console.log(x);
            console.log("Well done!");
        } 
    else {
        x++;
        console.log(x);
    }
});

$("#secondCard").click(function(){
     if (y == 1) {
        console.log("Sorry not a match!");
    }
    else if(x == 1){
            x++;
            console.log(x);
            console.log("Well done!");
        } 
    else {
        x++;
        console.log(x);
    }
});

$("#thirdCard").click(function(){
    if (x == 1) {
        console.log("Sorry not a match!");
    }
    else if(y == 1){
            y++;
            console.log(y);
            console.log("Well done!");
        } 
    else {
        y++;
        console.log(y);
    }
});

$("#fourthCard").click(function(){
  if (x == 1) {
        console.log("Sorry not a match!");
    }
    else if(y == 1){
            y++;
            console.log(y);
            console.log("Well done!");
        } 
    else {
        y++;
        console.log(y);
    }
});
