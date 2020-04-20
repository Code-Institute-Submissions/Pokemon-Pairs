var nameChosen = 0;

$( document ).ready(function() {
    console.log( "ready!" );
    console.log(nameChosen);
    if (nameChosen == 0){
    $("#welcomeModal").css("display", "block");
    $("#welcomeModal").addClass("in");
    $("#welcomeModal").addClass("show");
    $("#indexBody").addClass("modal-open");
    } 
});


function insertName() {
	var playerName = document.getElementById("nameInput").value;
    console.log(playerName)
    nameChosen++;
    $("#welcomeModal").css("display", "none");
	$("#welcomeModal").removeClass("in");
	$("#welcomeModal").removeClass("show");
	$("body").removeClass("modal-open");
    $("#playerName").html(playerName);
    console.log(nameChosen);
    //open new modal.
    $("#difficultyModal").css("display", "block");
    $("#difficultyModal").addClass("in");
    $("#difficultyModal").addClass("show");
    $("#difficultyModal").addClass("modal-open");
}




//Menu opening Js
$("#menuButton").click(function(){
    $("#navList").slideToggle();
});

//Broken - fix later
// //Game information display
// $("#gridItemResults").click(function(){
//     $("#topResultsWrapper").toggle("display", "block");
// });

$("#gameInfoHide").click(function(){
    $("#gridItemName").toggleClass("display");
    $("#gridItemResults").toggleClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
  });

$("#gameInfoShow").click(function(){
    $("#gridItemName").toggleClass("display");
    $("#gridItemResults").toggleClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
  });

  var imageArray = ["https://images.pokemontcg.io/base1/51_hires.png", "https://images.pokemontcg.io/base1/50_hires.png", "https://images.pokemontcg.io/base1/49_hires.png"]
  console.log(imageArray[2]);
  



//JS for selecting difficulty

$("#easyButton").click(function(){
    $("#difficultyModal").css("display", "none");
	$("#difficultyModal").removeClass("in");
	$("#difficultyModal").removeClass("show");
    $("body").removeClass("modal-open");
    var pair1Image = test[2].toString();
    var pair1ImageContainer = 'url('+ '"' + pair1Image + '"' + ')'; 
    $(".pair1").css("background-image", pair1ImageContainer);
    console.log(pair1ImageContainer);
    $("#easy").addClass("active-mode");
    $("#medium, #hard").removeClass("active-mode");

});


$("#mediumButton").click(function(){
    $("#difficultyModal").css("display", "none");
	$("#difficultyModal").removeClass("in");
	$("#difficultyModal").removeClass("show");
    $("body").removeClass("modal-open");
    $("#medium").addClass("active-mode");
    $("#easy, #hard").removeClass("active-mode");
});


$("#hardButton").click(function(){
    $("#difficultyModal").css("display", "none");
	$("#difficultyModal").removeClass("in");
	$("#difficultyModal").removeClass("show");
    $("body").removeClass("modal-open");
    $("#hard").addClass("active-mode");
    $("#medium, #easy").removeClass("active-mode");
});

