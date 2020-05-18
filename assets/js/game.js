//tutorial at https://www.youtube.com/watch?v=5zcSpVKxMao&t=1344s
//It has been modified for my benefit
var types =["darkness", "water", "lightning", "fighting", "metal", "grass", "fire", "psychic", "fairy", "dragon", "colorless"];
var ajaxCalls = [];
var apiResponseArray = [];
results = ["-","-"];
resultsTime = ["-", "-"]
countArray = ["placeholder", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
pairCounterArray = ["placeholder", 0, 0, 0, 0, 0, 0];  
pairMatch = 0;


//***************************************************************Results

$("#startGame").click(function(){
    timeTaken = 0;
    movesTaken = 0;  
    var stopWatch = setInterval(timer, 1000);
    function timer(){
        if(pairMatch < 6){
            timeTaken++;
            $("#gridItemTimerDisplay").html(timeTaken + " seconds");
        } else{
            clearInterval(stopWatch);
            results.unshift(movesTaken);
            results.sort(function(a, b){return a - b});
            resultsTime.unshift(timeTaken);
            resultsTime.sort(function(a, b){return a - b});

            $("#totalMoves").html(`<h6>Total moves: ${movesTaken} </h6>`);
            $("#timeTaken").html(`<h6>Time taken: ${timeTaken} seconds<h6>`);

            for(i=1; i<4; i++){
            $(`#resultMove${i}`).html(` ${results[i-1]}`);
            }

            for(j=1; j<4; j++){
            $(`#resultTime${j}`).html(` ${resultsTime[j-1]} seconds`);
            }   
        }
    }
});
 
$("#easyButton").click(function(){
    if(apiResponseArray.length == 0){
        for (i = 0; i < 6; i++){
            var pokemonID = Math.floor((Math.random() * 645)+1); 
            $.ajax({
                    method:"GET",                
                    url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" + pokemonID 
                }).then(function(response){
                    ajaxCalls.push(Number(response.cards.length));
                    apiResponseArray.push(response.cards[Math.floor(Math.random() * response.cards.length)].imageUrlHiRes);
            });
        }
    }
});


$("#mediumButton").click(function(){
    if(apiResponseArray.length == 0){
        var pageNumber = [Math.floor(Math.random() * 4)];
            $.ajax({
                method:"GET",                
                url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?types=" + types[Math.floor(Math.random() * 11)] +"&&page" + pageNumber
            }).then(function(response){
                ajaxCalls.push(Number(response.cards.length));
                for(i=0; i<6; i++){
                    apiResponseArray.push(response.cards[Math.floor(Math.random() * response.cards.length)].imageUrlHiRes);
                }
            });
    }  
});

$("#hardButton").click(function(){
    if(apiResponseArray.length == 0){
        for (i = 0; i < 3; i++){
            var pokemonID = Math.floor((Math.random() * 645)+1); 
            $.ajax({
                method:"GET",                
                url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" + pokemonID 
            }).then(function(response){
                ajaxCalls.push(Number(response.cards.length));
                apiResponseArray.push(response.cards[0].imageUrlHiRes);
            //Make this Maths.random + 1 as it will never choose 0. 
                apiResponseArray.push(response.cards[Math.floor(Math.random() * response.cards.length)].imageUrlHiRes);
            });
        }
    }
});

//This will be the code for animating the cards
/* Tutorial from http://www.developphp.com/video/JavaScript/Trigger-CSS-Transitions-to-Control-Animations
   It has been modified to fit my purpose */
$("#easyButton, #mediumButton, #hardButton").click(function(){
    for(i=1; i<13; i++){
        countArray[i] = 0;
    } 

    for(j=1; j<7; j++){
        pairCounterArray[j] = 0;
    }     
});

function notAPair(){
    var wrongWait = setTimeout(pairNotFound, 750);
                        function pairNotFound(){
                        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
                        }
                    
    for(j=1; j<7; j++){
        pairCounterArray[j] = 0;
    }  
    for(i=1; i<13; i++){
        countArray[i] = 0;
    }  

    var cardMatchingIDs =["placeholder",1,1,2,2,3,3,4,4,5,5,6,6];
    for(k=1; k<13; k++){
        $(`#card${k}`).addClass(`cardMatchID${cardMatchingIDs[k]}`);
    }                        
}

$('#gameRow').on('click', '.cardMatchID1', function(){ 
    movesTaken++
    console.log(movesTaken);
                if (pairCounterArray[1] == 1){
                    pairCounterArray[1] = 2;
                    pairMatch++;
                    console.log(pairCounterArray[1]);
                    } else {
                        pairCounterArray[1] = 1;
                        console.log("This is pairCounter1 " + pairCounterArray[1]);
                        if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 
                        || pairCounterArray[5] == 1 || pairCounterArray[6] == 1){  
                        notAPair();
                        }else {
                        pairCounterArray[1] = 1;
                        $(this).removeClass('cardMatchID1');
                    }
                    }
                });

$('#gameRow').on('click', '.cardMatchID2', function(){ 
    movesTaken++
    console.log(movesTaken);
                if (pairCounterArray[2] == 1){
                    pairCounterArray[2] = 2;
                    pairMatch++;
                    console.log(pairCounterArray[2]);
                    } else {
                        pairCounterArray[2] = 1;
                        console.log("This is pairCounter1 " + pairCounterArray[1]);
                        if ( pairCounterArray[5] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 
                            || pairCounterArray[4] == 1 || pairCounterArray[6] == 1){
                                notAPair();
                            }else {
                        pairCounterArray[2] = 1;
                        $(this).removeClass('cardMatchID2');
                    }
                    }
                });

$('#gameRow').on('click', '.cardMatchID3', function(){ 
    movesTaken++
    console.log(movesTaken);
                if (pairCounterArray[3] == 1){
                    pairCounterArray[3] = 2;
                    pairMatch++;
                    console.log(pairCounterArray[3]);
                    } else {
                        pairCounterArray[3] = 1;
                        console.log("This is pairCounter1 " + pairCounterArray[1]);
                        if ( pairCounterArray[2] == 1 || pairCounterArray[5] == 1 || pairCounterArray[1] == 1 
                            || pairCounterArray[4] == 1 || pairCounterArray[6] == 1){
                                notAPair();
                            }else {
                        pairCounterArray[3] = 1;
                        $(this).removeClass('cardMatchID3');
                    }
                    }
                });

$('#gameRow').on('click', '.cardMatchID4', function(){ 
    movesTaken++
    console.log(movesTaken);
                if (pairCounterArray[4] == 1){
                    pairCounterArray[4] = 2;
                    pairMatch++;
                    console.log(pairCounterArray[4]);
                    } else {
                        pairCounterArray[4] = 1;
                        console.log("This is pairCounter1 " + pairCounterArray[1]);
                        if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 
                            || pairCounterArray[5] == 1 || pairCounterArray[6] == 1){
                                notAPair();
                            }else {
                        pairCounterArray[4] = 1;
                        $(this).removeClass('cardMatchID4');
                    }
                    }
                });                



$('#gameRow').on('click', '.cardMatchID5', function(){ 
movesTaken++
    console.log(movesTaken);
                if (pairCounterArray[5] == 1){
                    pairCounterArray[5] = 2;
                    pairMatch++;
                    console.log(pairCounterArray[5]);
                    } else {
                        pairCounterArray[5] = 1;
                        console.log("This is pairCounter1 " + pairCounterArray[1]);
                        if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 
                            || pairCounterArray[4] == 1 || pairCounterArray[6] == 1){
                                notAPair();
                            }else {
                        pairCounterArray[5] = 1;
                        $(this).removeClass('cardMatchID5');
                    }
                    }
                });


$('#gameRow').on('click', '.cardMatchID6', function(){
                    movesTaken++
                    console.log(movesTaken);
                    if (pairCounterArray[6] == 1){
                    pairCounterArray[6] = 2;
                    pairMatch++;
                    console.log(pairCounterArray[6]);
                    } else {
                        
                        if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 
                        || pairCounterArray[5] == 1){
                        notAPair();
                    } else {
                        pairCounterArray[6] = 1;
                        $(this).removeClass('cardMatchID6');
                    }
                }
            
});

 
 //Opening up the finished modal
$("#game").click(function(){
    $("#startGame").addClass("display");
    if(pairMatch == 6){
        var revealTime = setTimeout(revealCards,1000);
        function revealCards(){
        //change this to a for loop.
            for(j=1; j<13; j++){
                $(`#card${j}Match`).addClass("display");
            }
            for(i=1; i<13; i++){
                $(`#card${i}`).css("display", "block");
            }
            $(".card > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
            $(".card > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        }
        var wait = setTimeout(finishedModal, 2000);
        function finishedModal(){
            $("#finishedModal").css("display", "block").addClass("in").addClass("show");
            $("#indexBody").addClass("modal-open");
            pairMatch = 0;
            for(k=0; k<7; k++){
                apiResponseArray.pop();
            }
        }
    }        
}); 

$('#gameRow').on('click', '.card', function(){
    $(".cover", this).css("transform", "perspective( 600px ) rotateY( -180deg )");
    $(".face", this).css("transform", "perspective( 600px ) rotateY( 0deg )");
    for (let i=1; i<7; i++)
    if(pairCounterArray[i] == 2){
        

        console.log("We have a pair!");
        var wait = setTimeout(pairFound, 1000);
        function pairFound(){
        var cardMatchingIDs =["placeholder",1,1,2,2,3,3,4,4,5,5,6,6];
        for(k=1; k<13; k++){
        $(`#card${k}`).addClass(`cardMatchID${cardMatchingIDs[k]}`);
        }
        $(`.cardMatchID${i}`).fadeOut();
        //$(`.cardMatchID${i}`).css("display", "none");

        var delay = setTimeout(matchCardsAppear, 400);
        function matchCardsAppear(){
        $(`.pairFound${i}`).removeClass("display");
        }
        
        }
    }

});


