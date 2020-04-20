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

var cardSelection = []
  



//JS for selecting difficulty

$("#easyButton").click(function(){
    $("#difficultyModal").css("display", "none");
	$("#difficultyModal").removeClass("in");
	$("#difficultyModal").removeClass("show");
    $("body").removeClass("modal-open");

    // var image1 = test[0].toString();
    // var image2 = test[1].toString();
    // var image3 = test[2].toString();
    // var image4 = test[3].toString();
    // var imageContainerArray = ['url('+ '"' + image1 + '"' + ')', 
    //                            'url('+ '"' + image2 + '"' + ')', 
    //                            'url('+ '"' + image3 + '"' + ')', 
    //                            'url('+ '"' + image4 + '"' + ')'];

    // $(".pair1").css("background-image", imageContainerArray[0]);
    // $(".pair2").css("background-image", imageContainerArray[1]);
    // $(".pair3").css("background-image", imageContainerArray[2]);
    // $(".pair4").css("background-image", imageContainerArray[3]);

    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var originalArray = ["pair1a ", "pair1b ", 
                         "pair2a ", "pair2b ", 
                         "pair3a ", "pair3b ", 
                         "pair4a ", "pair4b ", 
                         "pair5a ", "pair5b ", 
                         "pair6a ", "pair6b "];
    console.log("this is the original array " + originalArray);
    var shuffledArray = shuffle(originalArray);
     function shuffle(array) {

        
     }



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

