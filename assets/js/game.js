//tutorial at https://www.youtube.com/watch?v=5zcSpVKxMao&t=1344s
//It has been modified for my benefit
var types =["darkness", "water", "lightning", "fighting", "metal", "grass", "fire", "psychic", "fairy", "dragon", "colorless"];
var ajaxCalls = [];
var apiResponseArray = [];
results = ["-","-"];
resultsTime = ["-", "-"]
// countArray = ["placeholder", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
// pairCounterArray = ["placeholder", 0, 0, 0, 0, 0, 0];  
pairMatch = 0;


//***************************************************************Results

$("#startGame").click(function(){
    timeTaken = 0;
    movesTaken = 0; 

    function resultToString(){
        recordMoves = results.toString(",");        
        recordTimes = resultsTime.toString(",");        
    }

    function storageToArray(){
        results = sessionStorage.getItem("recordedMoves").split(",");
        resultsTime = sessionStorage.getItem("recordedTime").split(",");
    }

    if(sessionStorage.getItem("recordedMoves") === null || sessionStorage.getItem("recordedMoves") === null ){  
        resultToString();
        sessionStorage.setItem("recordedMoves", recordMoves);
        sessionStorage.setItem("recordedTime", recordTimes);

        storageToArray();
    } else {
    storageToArray();
    }

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
            resultToString();           

            sessionStorage.setItem("recordedMoves", recordMoves);
            sessionStorage.setItem("recordedTime", recordTimes);
           
               
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
    // for(i=1; i<13; i++){
    //     countArray[i] = 0;
    // } 

    for(j=1; j<7; j++){
        pairCounterArray[j] = 0;
    }     
});

function notAPair(){
    var wrongWait = setTimeout(pairNotFound, 750);
                        function pairNotFound(){
                        turningCardsFaceDown();
                        }
                    
    for(j=1; j<13; j++){
        pairCounterArray[j] = 0;
    }  
    // for(i=1; i<13; i++){
    //     countArray[i] = 0;
    // }  

    // var cardMatchingIDs =["placeholder",1,1,2,2,3,3,4,4,5,5,6,6];
    // for(k=1; k<13; k++){
    //     $(`#card${k}`).addClass(`cardMatchID${cardMatchingIDs[k]}`);
    // }                        
}

// var whichCardClicked; 

// $('#gameRow').on('click', '.cardMatchID1', function(){ 
//     whichCardClicked = 1;
// });

// $('#gameRow').on('click', '.cardMatchID2', function(){
//     whichCardClicked = 2;
// });

// $('#gameRow').on('click', '.cardMatchID3', function(){
//     whichCardClicked = 3;
// });

// $('#gameRow').on('click', '.cardMatchID4', function(){
//     whichCardClicked = 4;
// });

// $('#gameRow').on('click', '.cardMatchID5', function(){
//     whichCardClicked = 5;
// });

// $('#gameRow').on('click', '.cardMatchID6', function(){
//     whichCardClicked = 6;
// });



// var cardSelected;
// var concatTest;
// function cardFunction(whichCardClicked){
   
//         console.log(whichCardClicked);
//             if(whichCardClicked == 1) cardSelected = `.cardMatchID1`, concatTest = 7;
//             else if(whichCardClicked == 2) cardSelected = `.cardMatchID2`;
//             else if (whichCardClicked == 3) cardSelected = `.cardMatchID3`;
//             else if(whichCardClicked == 4) cardSelected = `.cardMatchID4`;
//             else if (whichCardClicked == 5) cardSelected = `.cardMatchID5`;
//             else cardSelected = `.cardMatch6`;
// }
// $('#gameRow').on('click', '.card', function(){
//     $(".cover", this).css("transform", "perspective( 600px ) rotateY( -180deg )");
//     $(".face", this).css("transform", "perspective( 600px ) rotateY( 0deg )");
//     cardFunction(whichCardClicked);
// });
// $('#gameRow').on('click', cardSelected, function(){    
//     console.log(cardSelected);
//     console.log("this is concat " + concatTest);
//     console.log(this);
//     movesTaken++
//                 if (pairCounterArray[whichCardClicked] == 1){
//                     pairCounterArray[whichCardClicked] = 2;
//                     pairMatch++;
//                     for (let i=1; i<7; i++){
//     if(pairCounterArray[i] == 2){
//         console.log("We have a pair!");
//         var wait = setTimeout(pairFound, 1000);
//         function pairFound(){
//         var cardMatchingIDs =["placeholder",1,1,2,2,3,3,4,4,5,5,6,6];
//         for(k=1; k<13; k++){
//         $(`#card${k}`).addClass(`cardMatchID${cardMatchingIDs[k]}`);
//         }
//         $(`.cardMatchID${i}`).fadeOut();
       
//         var wait2 = setTimeout(pairFound2, 400);
//         function pairFound2(){
//         $(`.pairFound${i}`).removeClass("display");}
//         }
//     }}
// } else {                        
//                         if ( pairCounterArray[1] == 1 || pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 
//                         || pairCounterArray[5] == 1 || pairCounterArray[6] == 1){
//                         notAPair();
//                             }else {
//                         pairCounterArray[whichCardClicked] = 1;
//                         console.log("this is which card was clicked" + whichCardClicked);
                        
//                          $(`.cardMatchID${whichCardClicked}`, this).removeClass(`cardMatchID${whichCardClicked}`);
//                         // $(`.cardMatchID${whichCardClicked}`).removeClass(`cardMatchID${whichCardClicked}`);
//                         //$(`.cardMatchID${whichCardClicked}`).attr("disabled", "true");
//                     }
//                     }
// }); 


pairCounterArray = ["placeholder", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  
var whichCardClicked;

$('#gameRow').on('click', '#card1', function(){ 
    whichCardClicked = 1;
});

$('#gameRow').on('click', '#card2', function(){
    whichCardClicked = 2;
});

$('#gameRow').on('click', '#card3', function(){
    whichCardClicked = 3;
});

$('#gameRow').on('click', '#card4', function(){
    whichCardClicked = 4;
});

$('#gameRow').on('click', '#card5', function(){
    whichCardClicked = 5;
});

$('#gameRow').on('click', '#card6', function(){
    whichCardClicked = 6;
   
});

$('#gameRow').on('click', '#card7', function(){ 
    whichCardClicked = 7;
   
});

$('#gameRow').on('click', '#card8', function(){
    whichCardClicked = 8;
  
});

$('#gameRow').on('click', '#card9', function(){
    whichCardClicked = 9;
   
});

$('#gameRow').on('click', '#card10', function(){
    whichCardClicked = 10;
   
});

$('#gameRow').on('click', '#card11', function(){
    whichCardClicked = 11;
   
});

$('#gameRow').on('click', '#card12', function(){
    whichCardClicked = 12; 
});

var cardSelected;
function clickedCard(whichCardClicked){
        console.log(whichCardClicked);
            if(whichCardClicked == 1) cardSelected = `#card1`;
            else if(whichCardClicked == 2) cardSelected = `#card2`;
            else if (whichCardClicked == 3) cardSelected = `#card3`;
            else if(whichCardClicked == 4) cardSelected = `#card4`;
            else if (whichCardClicked == 5) cardSelected = `#card5`;
             else if(whichCardClicked == 6) cardSelected = `#card6`;
            else if (whichCardClicked == 7) cardSelected = `#card7`;
            else if(whichCardClicked == 8) cardSelected = `#card8`;
            else if (whichCardClicked == 9) cardSelected = `#card9`;
            else if(whichCardClicked == 10) cardSelected = `#card10`;
            else if (whichCardClicked == 11) cardSelected = `#card11`;
            else cardSelected = `.cardMatch12`;
}

var cardA;
var cardB;
var cardPair;











































































































 //Opening up the finished modal
$("#game").click(function(){
     $("#startGame").addClass("display");
    if(pairMatch == 6){
        var revealTime = setTimeout(revealCards,2000);
        function revealCards(){
            toggleMainTheme();
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
        var wait = setTimeout(finishedModal, 4000);
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