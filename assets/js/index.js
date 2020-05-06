var nameChosen = 0;

console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.getItem("playerName"));




$( document ).ready(function() {
    if (sessionStorage.name == null){
    $("#gridItemHeader, #gridItemGameInfo, #gridItemGame").addClass("display");
    var time = setTimeout(removeJumbo, 3000);
    function removeJumbo(){           
    $("#gridItemHeader, #gridItemGameInfo, #gridItemGame").removeClass("display");
    $(".jumbotron").slideUp("slow"); 
            var welcomeModalTime = setTimeout(revealWelcomeModal, 750)
            function revealWelcomeModal(){
            $("#welcomeModal").css("display", "block");
            $("#welcomeModal").addClass("in");
            $("#welcomeModal").addClass("show");
            $("#indexBody").addClass("modal-open");
            }
        }
}else {
        $("#playerName").html(sessionStorage.getItem("playerName"));
         $(".jumbotron").slideUp();
        $("#difficultyModalTitle").html("Are you ready, " + sessionStorage.getItem("playerName") + "?");
       
        $("#difficultyModal").css("display", "block");
        $("#difficultyModal").addClass("in");
        $("#difficultyModal").addClass("show");
        $("#difficultyModal").addClass("modal-open");
        }        
});



$("#enterName").click(function(){
    var playerName = document.getElementById("nameInput").value;
    console.log(playerName);
	sessionStorage.setItem("playerName", playerName);
    sessionStorage.setItem("name", "1");
    console.log(sessionStorage.getItem("name"));
    console.log(sessionStorage.getItem("playerName"));

    $("#welcomeModal").css("display", "none");
	$("#welcomeModal").removeClass("in");
	$("#welcomeModal").removeClass("show");
    $("indexBody").removeClass("modal-open");

    
    $("#playerName").html(sessionStorage.getItem("playerName"));
    $("#difficultyModalTitle").html(`Welcome, ${playerName}!`);
    

});

$("#easyButton, #mediumButton, #hardButton").click(function(){
    $("#difficultyModal").css("display", "none");
	$("#difficultyModal").removeClass("in");
	$("#difficultyModal").removeClass("show");
    $("indexBody").removeClass("modal-open");
    var time = setInterval(loadingArray, 3000);
    function loadingArray(){
            if(test.length >= 6){
                $("#startGame").removeClass("display");
                clearInterval(time);
            }
    }

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

//Opening up the display cards modal
$("#seeCardsButton").click(function(){
    $("#finishedModal").css("display", "none");
	$("#finishedModal").removeClass("in");
	$("#finishedModal").removeClass("show");
    $("#indexBody").removeClass("modal-open");
});



// //Menu opening Js
// $("#menuButton").click(function(){
//     $("#navList").slideToggle();
// });

  

//Distributing card images.

$("#startGame").click(function(){
    
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


    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var originalArray = ["pair1 ", "pair1 ", 
                         "pair2 ", "pair2 ", 
                         "pair3 ", "pair3 ", 
                         "pair4 ", "pair4 ", 
                         "pair5 ", "pair5 ", 
                         "pair6 ", "pair6 "];
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
    //for loop all of these.
    $("#card1Face").addClass(shuffledArray[0]);
    $("#card2Face").addClass(shuffledArray[1]);
    $("#card3Face").addClass(shuffledArray[2]);
    $("#card4Face").addClass(shuffledArray[3]);
    $("#card5Face").addClass(shuffledArray[4]);
    $("#card6Face").addClass(shuffledArray[5]);
    $("#card7Face").addClass(shuffledArray[6]);
    $("#card8Face").addClass(shuffledArray[7]);
    $("#card9Face").addClass(shuffledArray[8]);
    $("#card10Face").addClass(shuffledArray[9]);
    $("#card11Face").addClass(shuffledArray[10]);
    $("#card12Face").addClass(shuffledArray[11]);
    $("#card1").addClass(`"${shuffledArray[0]}A"`);
    $("#card2").addClass(`"${shuffledArray[1]}A"`);
    $("#card3").addClass(`"${shuffledArray[2]}A"`)
    $("#card4").addClass(`"${shuffledArray[3]}A"`);
    $("#card5").addClass(`"${shuffledArray[4]}A"`);
    $("#card6").addClass(`"${shuffledArray[5]}A"`);
    $("#card7").addClass(`"${shuffledArray[6]}A"`);
    $("#card8").addClass(`"${shuffledArray[7]}A"`);
    $("#card9").addClass(`"${shuffledArray[8]}A"`);
    $("#card10").addClass(`"${shuffledArray[9]}A"`);
    $("#card11").addClass(`"${shuffledArray[10]}A"`);
    $("#card12").addClass(`"${shuffledArray[11]}A"`);
    // var formattedShuffledArray = "'" + shuffledArray[0] + shuffledArray[1] + shuffledArray[2] + "'"
    //                             + "'" + shuffledArray[3] +shuffledArray[4] + shuffledArray[5] + "'" 
    //                             + "'" + shuffledArray[6] + shuffledArray[7] +shuffledArray[8] + "'"
    //                             + "'" + shuffledArray[9] + shuffledArray[10] +shuffledArray[11] + "'" ;
    // console.log(formattedShuffledArray);
    // $(".card-grid-container").css("grid-template-areas", formattedShuffledArray); 

    $(".pair1").css("background-image", imageContainerArray[0]);
    $(".pair2").css("background-image", imageContainerArray[1]);
    $(".pair3").css("background-image", imageContainerArray[2]);
    $(".pair4").css("background-image", imageContainerArray[3]);
    $(".pair5").css("background-image", imageContainerArray[4]);
    $(".pair6").css("background-image", imageContainerArray[5]);
});


$("#playAgainButton").click(function(){
    $("#finishedModal").css("display", "none");
	$("#finishedModal").removeClass("in");
	$("#finishedModal").removeClass("show");
    $("#indexBody").removeClass("modal-open");
});

$("#playAgainButton, #playAgainButtonDisplay").click(function(){
    for(i=0; i<7; i++){
        test.pop();
        console.log("This is emptying the test array " + test); 
    };
    
    var ajaxCallsSum = ajaxCalls.reduce(function(a, b){
            return a + b;
            }, 0);
    console.log(ajaxCallsSum);
    console.log(5000 - ajaxCallsSum);
    var totalAjaxCalls = (5000 - ajaxCallsSum);

    if(totalAjaxCalls < 1000){
        $("#usageWarning").removeClass("display");
        if(totalAjaxCalls < 400){
        $("#usageWarning").html("This is your final game. Please play again in one hour!");
        }else {$("#usageWarning").html("You have only have a few games left before you reach the hourly limit! We will tell you when you have one game left.");
    } 
    }

    $("#gridItemTimerDisplay").html("0 seconds");
    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");

     $("#difficultyModal").css("display", "block");
    $("#difficultyModal").addClass("in");
    $("#difficultyModal").addClass("show");
    $("#difficultyModal").addClass("modal-open");

});



