$(".box").click(function(){
    $(this).css("background-color", "green");

});

let x = 0;
let y = 0;

$("#firstCard").click(function(){
    if (x == 0) {
        x++;
        console.log(x);
    } else if(x == 1){
            x++;
            console.log(x);
            console.log("Well done!");
        }
    });

$("#secondCard").click(function(){
    if (x == 0) {
        x++;
        console.log(x);
    } else if(x == 1){
            x++;
            console.log(x);
            console.log("Well done!");
        }
});

$("#thirdCard").click(function(){
   if (y == 0) {
        y++;
        console.log(y);
    } else if(y == 1){
            y++;
            console.log(y);
            console.log("Well done!");
        }
});

$("#fourthCard").click(function(){
    if (y == 0) {
        y++;
        console.log(y);
    } else if(y == 1){
            y++;
            console.log(y);
            console.log("Well done!");
        }
});
