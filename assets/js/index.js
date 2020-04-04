$("#menuButton").click(function(){
    $("#gridItemMenu").toggleClass("show");
    $("#index-grid").toggleClass("insertMenu");
});


$("#linkPlay").click(function(){
    $("#iframe").attr("src", "game.html");
});

$("#linkHelp").click(function(){
    $("#iframe").attr("src", "help.html");
});

$("#linkContactUs").click(function(){
    $("#iframe").attr("src", "contactUs.html");
});
