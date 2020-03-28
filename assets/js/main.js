$(".box").click(function(){
    $(this).css("background-color", "green");

});

let x = 0;
let y = 0;

$("#firstCard").click(function(){
    x++;
    console.log(x);
});

$("#secondCard").click(function(){
    x++;
    console.log(x);
});

$("#thirdCard").click(function(){
    y++;
    console.log(y);
});

$("#fourthCard").click(function(){
    y++;
    console.log(y);
});

