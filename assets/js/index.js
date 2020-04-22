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


$("#enterName").click(function(){
	var playerName = document.getElementById("nameInput").value;
    console.log(playerName)
    nameChosen++;
    $("#welcomeModal").css("display", "none");
	$("#welcomeModal").removeClass("in");
	$("#welcomeModal").removeClass("show");
    $("indexBody").removeClass("modal-open");
    
    $("#playerName").html(playerName);
    $("#loadingModalHeader").html(`<h5 class="modal-title" id="loadingModalTitle">Welcome, ${playerName}!</h5>`);
    console.log(nameChosen);

    var time= setInterval(loadingArray, 1000);
    function loadingArray(){
        if(test.length >= 6){
            $("#startGame").removeClass("display");
            clearInterval(loadingArray);
        }
    }

});

$("#easyButton, #mediumButton, #hardButton").click(function(){
    $("#difficultyModal").css("display", "none");
	$("#difficultyModal").removeClass("in");
	$("#difficultyModal").removeClass("show");
    $("indexBody").removeClass("modal-open");
});

$("#playAgainButton, #playAgainButtonDisplay").click(function(){
    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
    $("#difficultyModal").css("display", "block");
    $("#difficultyModal").addClass("in");
    $("#difficultyModal").addClass("show");
    $("#difficultyModal").addClass("modal-open");
});

$("#playAgainButton").click(function(){
    $("#finishedModal").css("display", "none");
	$("#finishedModal").removeClass("in");
	$("#finishedModal").removeClass("show");
    $("#indexBody").removeClass("modal-open");
});


//Opening up the display cards modal
$("#seeCardsButton").click(function(){
    $("#finishedModal").css("display", "none");
	$("#finishedModal").removeClass("in");
	$("#finishedModal").removeClass("show");
    $("#indexBody").removeClass("modal-open");
});



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
  



//Distributing card images.

$("#startGame").click(function(){
    $("#gridItemResults").toggleClass("display");
    $("#gridItemName").toggleClass("display");
    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
    //Enter - shuffle array here. 
    var image1 = test[0].toString();
    var image2 = test[1].toString();
    var image3 = test[2].toString();
    var image4 = test[3].toString();
    var image5 = test[4].toString();
    var image6 = test[5].toString();
    var imageContainerArray = ['url('+ '"' + image1 + '"' + ')', 
                               'url('+ '"' + image2 + '"' + ')', 
                               'url('+ '"' + image3 + '"' + ')', 
                               'url('+ '"' + image4 + '"' + ')',
                               'url('+ '"' + image5 + '"' + ')', 
                               'url('+ '"' + image6 + '"' + ')'];

    $(".pair1").css("background-image", imageContainerArray[0]);
    $(".pair2").css("background-image", imageContainerArray[1]);
    $(".pair3").css("background-image", imageContainerArray[2]);
    $(".pair4").css("background-image", imageContainerArray[3]);
    $(".pair5").css("background-image", imageContainerArray[4]);
    $(".pair6").css("background-image", imageContainerArray[5]);

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

    //End of tutorial code
    console.log("this is the shuffled array " + shuffledArray);
    var formattedShuffledArray = "'" + shuffledArray[0] + shuffledArray[1] + shuffledArray[2] + "'"
                                + "'" + shuffledArray[3] +shuffledArray[4] + shuffledArray[5] + "'" 
                                + "'" + shuffledArray[6] + shuffledArray[7] +shuffledArray[8] + "'"
                                + "'" + shuffledArray[9] + shuffledArray[10] +shuffledArray[11] + "'" ;
    console.log(formattedShuffledArray);
    $(".card-grid-container").css("grid-template-areas", formattedShuffledArray); 
});

$("#easyButton").click(function(){
    $("#easy").addClass("active-mode");
    $("#medium, #hard").removeClass("active-mode");
});

$("#mediumButton").click(function(){
    $("#medium").addClass("active-mode");
    $("#easy, #hard").removeClass("active-mode");
});


$("#hardButton").click(function(){
    $("#hard").addClass("active-mode");
    $("#medium, #easy").removeClass("active-mode");
});

