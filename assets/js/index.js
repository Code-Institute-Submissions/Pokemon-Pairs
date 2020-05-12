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
 

//Distributing card images.
var cardIDArray = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log("This is the cardID array " + cardIDArray);

$("#startGame").click(function(){
var shuffledCardID = shuffle(cardIDArray);
    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
         }

         return array;
      }
      
    for(i=0; i<12; i++){
    $("#gameRow").append(`
                    <div id="card${shuffledCardID[i]}" class="col-4 col-sm-2  col-md-3 col-xl-2 eight-cards cards" onclick="cardFunction${shuffledCardID[i]}();">
                        <div id="card${shuffledCardID[i]}Cover" class=" eight-cards cover"></div> 
                        <div id="card${shuffledCardID[i]}Face" class=" eight-cards face"></div> 
                    </div>
                    <div id="card${shuffledCardID[i]}Match" class="col-4 col-sm-2  col-md-3 col-xl-2 cover eight-cards match card display"></div>
                    `
                    );
            
            for(j=1;j<13;j++){
                var pairArray =["placeholder",1,1,2,2,3,3,4,4,5,5,6,6];
                $(`#card${j}Face`).addClass(`pair${pairArray[j]}`);
            }   
            
            for(k=1; k<7; k++){
                $(`#displayCard${k}`).addClass(`pair${k}`);
            }
     
    }
    
    
    $("#gridItemName").toggleClass("display");
    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
    //Enter - shuffle array here.
    //for loop here 
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


    // //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    //for loop here
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
    
    $("#gameRow").html(``);


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



