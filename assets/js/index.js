//Menu opening JS
$("#menuButton").click(function(){
    $("#indexGrid").toggleClass("index-grid");
    $("#indexGrid").toggleClass("index-grid-menuShow");
    $("#gridItemMenu").toggle("display", "block");
});

//Game information display
$("#gridItemResults").click(function(){
    $("#topResultsWrapper").toggle("display", "block");
});

$("#gridItemTimer").click(function(){
    $("#gridItemTimerDisplay").toggle("display", "block");
});



//NAV - Changing the contents of the iframe
$("#linkPlay").click(function(){
    $("#iframe").attr("src", "game.html");
});

$("#linkHelp").click(function(){
    $("#iframe").attr("src", "help.html");
});

$("#linkContactUs").click(function(){
    $("#iframe").attr("src", "contactUs.html");
});
