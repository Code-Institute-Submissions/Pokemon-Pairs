

let x = 0;
let y = 0;
let z = 0;

    
$("#firstCard").click(function(){
    if (y == 1) {
        console.log("Sorry not a match!");
        console.log(x);
        $(".box").css("background-color", "blue");
        y = 0;
        console.log(y);
    }
    else if(x == 1){
            x++;
            console.log(x);
            console.log("Well done!");
            $(this).css("display", "none");
            $("#secondCard").css("display", "none");
    } 
    else {
        x++;
        console.log(x);
    }
});

$("#secondCard").click(function(){
     if (y == 1) {
        console.log("Sorry not a match!");
        console.log(x);
        $(".box").css("background-color", "blue");
        y = 0;
        console.log(y);
    }
    else if(x == 1){
            x++;
            console.log(x);
            console.log("Well done!");
            $(this).css("display", "none");
            $("#firstCard").css("display", "none");
        } 
    else {
        x++;
        console.log(x);
    }
});

$("#thirdCard").click(function(){
    if (x == 1) {
        console.log("Sorry not a match!");
        console.log(y);
      $(".box").css("background-color", "blue");
        x = 0;
        console.log(x);
    }
    else if(y == 1){
            y++;
            console.log(y);
            console.log("Well done!");
            $(this).css("display", "none");
            $("#fourthCard").css("display", "none");
        } 
    else {
        y++;
        console.log(y);
    }
});

$("#fourthCard").click(function(){
   if (x == 1) {
        console.log("Sorry not a match!");
        console.log(y);
      $(".box").css("background-color", "blue");
        x = 0;
        console.log(x);
    }
    else if(y == 1){
            y++;
            console.log(y);
            console.log("Well done!");
            $(this).css("display", "none");
            $("#thirdCard").css("display", "none");
        } 
    else {
        y++;
        console.log(y);
    }
});

$(".box").click(function(){
    $(this).css("background-color", "green");
    z++;
    console.log("You have used" + " " + z + " " + "moves!")
    if(x == 2 && y == 2){
        console.log("Game over!");
    }
});


