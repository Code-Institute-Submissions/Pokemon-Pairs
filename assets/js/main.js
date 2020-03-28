$(".box").click(function(){
    $(this).css("background-color", "green");

});

let x = 0;
let y = 0;

$("#firstCard").click(function(){
    x++;
    console.log(x);
    if ( x == 2){
        console.log("Well done!")
    }
});

$("#secondCard").click(function(){
    x++;
    console.log(x);
    if ( x == 2){
        console.log("Well done!")
    }
});

$("#thirdCard").click(function(){
    y++;
    console.log(y);
    if ( y == 2){
        console.log("Well done!")
    }
});

$("#fourthCard").click(function(){
    y++;
    console.log(y);
    if ( y == 2){
        console.log("Well done!")
    }
});

