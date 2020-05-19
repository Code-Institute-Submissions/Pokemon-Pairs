// Set variables and arrays
var nameChosen = 0;
var backupCardsArrayEasy = ["https://images.pokemontcg.io/xy7/4_hires.png", "https://images.pokemontcg.io/xyp/XY05_hires.png", "https://images.pokemontcg.io/xy11/41_hires.png", "https://images.pokemontcg.io/xy7/21_hires.png", "https://images.pokemontcg.io/dp6/107_hires.png", "https://images.pokemontcg.io/xy0/14_hires.png"]
var backupCardsArrayMedium = ["https://images.pokemontcg.io/xy0/15_hires.png", "https://images.pokemontcg.io/dp1/9_hires.png", "https://images.pokemontcg.io/ex16/56_hires.png", "https://images.pokemontcg.io/ex16/64_hires.png", "https://images.pokemontcg.io/ex8/34_hires.png", "https://images.pokemontcg.io/ex16/99_hires.png"]
var backupCardsArrayHard = ["https://images.pokemontcg.io/pl4/1_hires.png", "https://images.pokemontcg.io/ex3/100_hires.png", "https://images.pokemontcg.io/xy7/98_hires.png", "https://images.pokemontcg.io/bw6/85_hires.png", "https://images.pokemontcg.io/xy8/144_hires.png", "https://images.pokemontcg.io/dp6/11_hires.png"]

// Checking if this is the first time 
$( document ).ready(function(){
//     sessionStorage.setItem("recordedMoves", recordMoves);
//     sessionStorage.setItem("recordedTime", recordTimes);
//     console.log("Storage  " + sessionStorage.getItem("recordedMoves"));
   
// if(sessionStorage.getItem("recordedMoves")== null){
//     results.unshift("-", "-");
// }
// results = sessionStorage.getItem("recordedMoves").split(',');

console.log(results);


//resultsTime = ["-", "-"]

    if (sessionStorage.name == null){
        $("#gridItemHeader, #gridItemGameInfo, #gridItemGame").addClass("display");
        var time = setTimeout(removeJumbo, 2000);
        function removeJumbo(){           
            $("#gridItemHeader, #gridItemGameInfo, #gridItemGame").removeClass("display");
             $(".jumbotron").slideUp("slow"); 
            var welcomeModalTime = setTimeout(revealWelcomeModal, 750)
            function revealWelcomeModal(){
                $("#welcomeModal").css("display", "block").addClass("in").addClass("show");
                $("#indexBody").addClass("modal-open");
            }
        }
    } else {
                $("#playerName").html(sessionStorage.getItem("playerName"));
                $(".jumbotron").slideUp();
                $("#difficultyModalTitle").html("Are you ready, " + sessionStorage.getItem("playerName") + "?");
                $("#difficultyModal").css("display", "block").addClass("in").addClass("show").addClass("modal-open");
            }        
});

// Storing the players name when the user inputs the data
$("#enterName").click(function(){
    var playerName = document.getElementById("nameInput").value;
	sessionStorage.setItem("playerName", playerName);
    sessionStorage.setItem("name", "1");

    $("#welcomeModal").css("display", "none").removeClass("in").removeClass("show");
    $("#indexBody").removeClass("modal-open");

    $("#playerName").html(sessionStorage.getItem("playerName"));
    $("#difficultyModalTitle").html(`Welcome, ${playerName}!`);
});

// Triggering the loading modal
$("#easyButton, #mediumButton, #hardButton").click(function(){
    $("#difficultyModal").css("display", "none").removeClass("in").removeClass("show");
    $("#indexBody").removeClass("modal-open");
    
    var timeBackup = setTimeout(backupCards, 60000);
    function backupCards(){
        if(apiResponseArray.length < 6){
            $("#startGame").removeClass("display");
        }
    }

    var time = setInterval(loadingArray, 1000);
    function loadingArray(){
            if(apiResponseArray.length == 6){
                $("#startGame").removeClass("display");
                clearInterval(time);
            }
    }
});

// Highlighting which difficulty the user has selected.
$("#easyButton").click(function(){
    $("#easy").addClass("active-mode");
    $("#medium, #hard").removeClass("active-mode");
    difficultyMode = 1;
});

$("#mediumButton").click(function(){
    $("#medium").addClass("active-mode");
    $("#easy, #hard").removeClass("active-mode");
    difficultyMode = 2;
});

$("#hardButton").click(function(){
    $("#hard").addClass("active-mode");
    $("#medium, #easy").removeClass("active-mode");
    difficultyMode = 3;
});

//Opening up the display cards modal
$("#seeCardsButton").click(function(){
    $("#finishedModal").css("display", "none").removeClass("in").removeClass("show");
    $("#indexBody").removeClass("modal-open");
});
 
//Distributing card images.
var cardIDArray = [1,2,3,4,5,6,7,8,9,10,11,12];

//Shuffling the array ID number
//Shuffling array found at this tutorial
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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
    
    //Generating html for each card
    var pairMatchID = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12];
    for(i=0; i<12; i++){
        $("#gameRow").append(`
                    <div id="card${shuffledCardID[i]}" class="col-6 col-sm-2  col-md-3 col-lg-2 col-xl-2 eight-cards card">
                        <div id="card${shuffledCardID[i]}Cover" class=" eight-cards cover"></div> 
                        <div id="card${shuffledCardID[i]}Face" class=" eight-cards face"></div> 
                    </div>
                    <div id="card${shuffledCardID[i]}Match" class="col-6 col-sm-2  col-md-3 col-lg-2 col-xl-2 cover eight-cards match card display"></div>
                    `);
    }
    
    // Adding images to the correct cards and display cards
    for(j=1;j<13;j++){
        var pairArray =["placeholder",1,1,2,2,3,3,4,4,5,5,6,6];
        $(`#card${j}Face`).addClass(`pair${pairArray[j]}`);
        $(`#card${j}`).addClass(`cardMatchID${pairArray[j]}`);
        $(`#card${j}Cover`).addClass(`pairMatchID${pairArray[j]}`);
        $(`#card${j}Match`).addClass(`pairFound${pairArray[j]}`)
    }   
            
    for(k=1; k<7; k++){
        $(`#displayCard${k}`).addClass(`pair${k}`);
    }     
    
    //Hiding the name to increase screen size
    $("#gridItemName").toggleClass("display");

    //Ensuring all the cards are face down
    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
   
     var imageContainerArray = [];
        var backupCardsArray;
        function selectImages(difficultyMode){
            if(apiResponseArray.length == 6) backupCardsArray = apiResponseArray;
            else if(difficultyMode == 1) backupCardsArray = backupCardsArrayEasy;
            else if (difficultyMode == 2) backupCardsArray = backupCardsArrayMedium;
            else backupCardsArray = backupCardsArrayHard;

            for(let i=0; i<6; i++){
               var image = backupCardsArray[i].toString();
               imageContainerArray.push('url('+ '"' + image + '"' + ')');
            }
        }
        selectImages(difficultyMode);
        for (j=1; j<7; j++){
            $(`.pair${j}`).css("background-image", imageContainerArray[j-1]);
        }
    
    
});


//Closing 'play again' modal
$("#playAgainButton").click(function(){
    $("#finishedModal").css("display", "none").removeClass("in").removeClass("show");
    $("#indexBody").removeClass("modal-open");
});

// Calculating the number of ajax calls previously made and alerting the user if they are close to the limit
$("#playAgainButton, #playAgainButtonDisplay").click(function(){
    $("#gameRow").html(``);
        var ajaxCallsSum = ajaxCalls.reduce(function(a, b){
                return a + b;
                }, 0);
        var totalAjaxCalls = (5000 - ajaxCallsSum);

        if(totalAjaxCalls < 1000){
            $("#usageWarning").removeClass("display");
            if(totalAjaxCalls < 400){
            $("#usageWarning").html("This is your final game. Please play again in one hour!");
            } else {$("#usageWarning").html("You have only have a few games left before you reach the hourly limit! We will tell you when you have one game left.");
        } 
    }

    // Displaying difficulty modal at the beginning of each new game.
    $("#gridItemTimerDisplay").html("0 seconds");
    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
    $("#difficultyModal").css("display", "block").addClass("in").addClass("show").addClass("modal-open");
});


