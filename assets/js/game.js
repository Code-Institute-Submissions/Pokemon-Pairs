//tutorial at https://www.youtube.com/watch?v=5zcSpVKxMao&t=1344s
//It has been modified for my benefit
var types =["darkness", "water", "lightning", "fighting", "metal", "grass", "fire", "psychic", "fairy", "dragon", "colorless"];
var ajaxCalls = [];
var test = [];
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
    if(test.length == 0){
        for (i = 0; i < 6; i++){
            var pokemonID = Math.floor((Math.random() * 645)+1); 
            $.ajax({
                    method:"GET",                
                    url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" + pokemonID 
                }).then(function(response){
                    ajaxCalls.push(Number(response.cards.length));
                    test.push(response.cards[Math.floor(Math.random() * response.cards.length)].imageUrlHiRes);
            });
        }
    }
});


$("#mediumButton").click(function(){
    if(test.length == 0){
        var pageNumber = [Math.floor(Math.random() * 4)];
            $.ajax({
                method:"GET",                
                url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?types=" + types[Math.floor(Math.random() * 11)] +"&&page" + pageNumber
            }).then(function(response){
                ajaxCalls.push(Number(response.cards.length));
                for(i=0; i<6; i++){
                    test.push(response.cards[Math.floor(Math.random() * response.cards.length)].imageUrlHiRes);
                }
            });
    }  
});

$("#hardButton").click(function(){
    if(test.length == 0){
        for (i = 0; i < 3; i++){
            var pokemonID = Math.floor((Math.random() * 645)+1); 
            $.ajax({
                method:"GET",                
                url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" + pokemonID 
            }).then(function(response){
                ajaxCalls.push(Number(response.cards.length));
                test.push(response.cards[0].imageUrlHiRes);
            //Make this Maths.random + 1 as it will never choose 0. 
                test.push(response.cards[Math.floor(Math.random() * response.cards.length)].imageUrlHiRes);
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




function cardFunction1(){
  
    //this makes sure if the card is already turned around, nothing happens.
    if(countArray[1] == 1){
        $("#card1 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card1 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
     
    } else {
        //this checks to see if the pair has already been selected. If it has it redeclares it as two
        
        countArray[1] = 1;
        if (pairCounterArray[1] == 1){
            pairCounterArray[1] = 2;
            pairMatch++;
            var wait = setTimeout(pairFound, 1000);
            function pairFound(){
                $("#card1, #card2").css("display", "none");
                $("#card1Match, #card2Match").removeClass("display");  
            }
        } else { 
                //if this is the first of the pair, it will put if as one.
                // pairCounterArray[1] = 1;
            pairCounterArray[1] = 1;
            } 
        
            //this checks no other card has been turned over.
        if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 || pairCounterArray[6] == 1){  
            for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
            }  

            for(i=1; i<13; i++){
                countArray[i] = 0;
            }  

            var wrongWait = setTimeout(pairNotFound, 750);
            function pairNotFound(){                  
                $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");    
            }          
        } 
    }  
        
};

function cardFunction2(){
    
    if(countArray[2] == 1){
        $("#card2 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card2 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
    } else {
        $("#card2 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card2 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");

        
        countArray[2] = 1;

        if (pairCounterArray[1] == 1){
                pairCounterArray[1] = 2;
                pairMatch++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                    $("#card1, #card2").css("display", "none");
                    $("#card1Match, #card2Match").removeClass("display");
                }
        } else { 
            pairCounterArray[1] = 1;
            if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 
             || pairCounterArray[6] == 1){
    
                for(j=1; j<7; j++){
                    pairCounterArray[j] = 0;
                } 

                for(i=1; i<13; i++){
                countArray[i] = 0;
                }

                var wrongWait = setTimeout(pairNotFound, 750);
                function pairNotFound(){            

                $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");              
                } 
            } 
        } 
    }
};
  

function cardFunction3(){
   
    //stops the same card being clicked twice.
        if(countArray[3] == 1){
            $("#card3 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
            $("#card3 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        } else {
            $("#card3 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
            $("#card3 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           
            countArray[3] = 1;
            if (pairCounterArray[2] == 1){
                pairCounterArray[2] = 2;
                pairMatch++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                    $("#card3, #card4").css("display", "none");
                    $("#card3Match, #card4Match").removeClass("display");
                }
            } else { 
                pairCounterArray[2] = 1;
                if ( pairCounterArray[1] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 
                || pairCounterArray[6] == 1){
                    for(j=1; j<7; j++){
                        pairCounterArray[j] = 0;
                    }  
                 
                    for(i=1; i<13; i++){
                        countArray[i] = 0;
                    }
                
                    var wrongWait = setTimeout(pairNotFound, 750);
                    function pairNotFound(){
                        
                    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
                    } 
                }   
            }
        }
};

function cardFunction4(){
  
    if(countArray[4] == 1){
        $("#card4 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card4 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
    } else {
        $("#card4 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card4 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        
        countArray[4] = 1;
        if (pairCounterArray[2] == 1){
                pairCounterArray[2] = 2;
                pairMatch++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                    $("#card3, #card4").css("display", "none");
                    $("#card3Match, #card4Match").removeClass("display");
                }
        } else { 
                pairCounterArray[2] = 1;
                if ( pairCounterArray[1] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 
                || pairCounterArray[6] == 1){
                    for(j=1; j<7; j++){
                        pairCounterArray[j] = 0;
                    }  
                    for(i=1; i<13; i++){
                        countArray[i] = 0;
                    } 
                    
                    var wrongWait = setTimeout(pairNotFound, 750);
                    function pairNotFound(){             
                        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
                    } 
                } 
        }
    }
};

function cardFunction5(){
        
        if(countArray[5] == 1){
            $("#card5 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
            $("#card5 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        } else {
            $("#card5 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
            $("#card5 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
          
            countArray[5] = 1;
            if (pairCounterArray[3] == 1){
                pairCounterArray[3] = 2;
                pairMatch++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                    $("#card5, #card6").css("display", "none");
                    $("#card5Match, #card6Match").removeClass("display");
                }
            } else { 
                pairCounterArray[3] = 1;
                if ( pairCounterArray[2] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 
                || pairCounterArray[6] == 1){
                    for(j=1; j<7; j++){
                        pairCounterArray[j] = 0;
                    }  

                    for(i=1; i<13; i++){
                        countArray[i] = 0;
                    }

                    var wrongWait = setTimeout(pairNotFound, 750);
                    function pairNotFound(){                 
                        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");              
                    } 
                }         
            }
        }
};
  

function cardFunction6(){
        
        if(countArray[6] == 1){
            $("#card6 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
            $("#card6 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        } else {
            $("#card6 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
            $("#card6 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
             
            countArray[6] = 1;
            if (pairCounterArray[3] == 1){
                pairCounterArray[3] = 2;
                pairMatch++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                    $("#card5, #card6").css("display", "none");
                    $("#card5Match, #card6Match").removeClass("display");
                }
            } else { 
                pairCounterArray[3] = 1;
                if ( pairCounterArray[2] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 
                || pairCounterArray[6] == 1){
                    for(j=1; j<7; j++){
                        pairCounterArray[j] = 0;
                    }  
                    for(i=1; i<13; i++){
                        countArray[i] = 0;
                    }  
                        
                    var wrongWait = setTimeout(pairNotFound, 750);
                    function pairNotFound(){
                        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");   
                    } 
                } 
            }
        }
};

function cardFunction7(){
    
       if(countArray[7] == 1){
            $("#card7 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
            $("#card7 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        } else {
            $("#card7 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
            $("#card7 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            
            countArray[7] = 1;
            if (pairCounterArray[4] == 1){
                pairCounterArray[4] = 2;
                pairMatch++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                    $("#card7, #card8").css("display", "none");
                    $("#card7Match, #card8Match").removeClass("display");    
                }
            } else { 
                pairCounterArray[4] = 1;      
                if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[5] == 1 
                || pairCounterArray[6] == 1){
                    for(j=1; j<7; j++){
                        pairCounterArray[j] = 0;
                    }  
                    for(i=1; i<13; i++){
                        countArray[i] = 0;
                    }  
                 
                    var wrongWait = setTimeout(pairNotFound, 750);
                    function pairNotFound(){
                        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");                
                    } 
                } 
            }
        }
};

   

function cardFunction8(){
    
    if(countArray[8] == 1){
        $("#card8 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card8 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
    } else {
        $("#card8 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card8 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
     
        countArray[8] = 1;
        if (pairCounterArray[4] == 1){
                pairCounterArray[4] = 2;
                pairMatch++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                    $("#card7, #card8").css("display", "none");
                    $("#card7Match, #card8Match").removeClass("display");
                }
        } else { 
            pairCounterArray[4] = 1;
            if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[5] == 1 
            || pairCounterArray[6] == 1){
                for(j=1; j<7; j++){
                    pairCounterArray[j] = 0;
                }  
                for(i=1; i<13; i++){
                    countArray[i] = 0;
                }  
                 
                var wrongWait = setTimeout(pairNotFound, 750);
                function pairNotFound(){                     
                    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
                } 
            } 
        }
    }
};


function cardFunction9(){ 
    
    if(countArray[9] == 1){
        $("#card9 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card9 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
    } else {
        $("#card9 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card9 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        
        countArray[9] = 1;
        if (pairCounterArray[5] == 1){
                pairCounterArray[5] = 2;
                pairMatch++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                    $("#card9, #card10").css("display", "none");
                    $("#card9Match, #card10Match").removeClass("display");
                }
        } else { 
            pairCounterArray[5] = 1;
            if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 
            || pairCounterArray[6] == 1){
                for(j=1; j<7; j++){
                    pairCounterArray[j] = 0;
                }  
                
                for(i=1; i<13; i++){
                    countArray[i] = 0;
                }  
            
                var wrongWait = setTimeout(pairNotFound, 750);
                function pairNotFound(){
                    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
                } 
            }
        }
    }
};


function cardFunction10(){
  
    if(countArray[10] == 1){
        $("#card10 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card10 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
    } else {
        $("#card10 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card10 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
     
        countArray[10] = 1;
        if (pairCounterArray[5] == 1){
                pairCounterArray[5] = 2;
                pairMatch++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                    $("#card9, #card10").css("display", "none");
                    $("#card9Match, #card10Match").removeClass("display");
                
                }
        } else { 
            pairCounterArray[5] = 1;
            if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 
            || pairCounterArray[6] == 1){
                for(j=1; j<7; j++){
                    pairCounterArray[j] = 0; 
                }  
                for(i=1; i<13; i++){
                    countArray[i] = 0;
                }  
                
                var wrongWait = setTimeout(pairNotFound, 750);
                function pairNotFound(){
                    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
                } 
            } 
        }    
    }
};
  
function cardFunction11(){ 
    if(countArray[11] == 1){
        $("#card11 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card11 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
    } else {
        $("#card11 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card11 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        
        countArray[11] = 1;
        if (pairCounterArray[6] == 1){
                pairCounterArray[6] = 2;
                pairMatch++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                    $("#card11, #card12").css("display", "none");
                    $("#card11Match, #card12Match").removeClass("display");
                }
        } else { 
            pairCounterArray[6] = 1;
            if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 
            || pairCounterArray[5] == 1){
                for(j=1; j<7; j++){
                    pairCounterArray[j] = 0;     
                }  
                for(i=1; i<13; i++){
                    countArray[i] = 0;
                }  
                 
                var wrongWait = setTimeout(pairNotFound, 750);
                function pairNotFound(){
                    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
                } 
            } 
        }
    }
};


function cardFunction12(){ 
    if(countArray[12] == 1){
        $("#card12 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card12 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        } else {
            $("#card12 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
            $("#card12 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            countArray[12] = 1;
            if (pairCounterArray[6] == 1){
                    pairCounterArray[6] = 2;
                    pairMatch++;
                    var wait = setTimeout(pairFound, 1000);
                        function pairFound(){
                            $("#card11, #card12").css("display", "none");
                            $("#card11Match, #card12Match").removeClass("display");
                        }
            } else { 
                pairCounterArray[6] = 1;
                if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 
                || pairCounterArray[5] == 1){
                    for(j=1; j<7; j++){
                        pairCounterArray[j] = 0;
                    }  
                    for(i=1; i<13; i++){
                        countArray[i] = 0;
                    }  
                    
                    var wrongWait = setTimeout(pairNotFound, 750);
                    function pairNotFound(){
                        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
                    }     
                }
            }        
    }
};
  
//End of code for animating cards 
 
 // This is the modal for finished  
 
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
            click = 0;
            for(k=0; k<7; k++){
                test.pop();
            }
        }
    }        
}); 

$('#gameRow').on('click', '.cover', function(){
    console.log("Card clicked");
    movesTaken++
    console.log(movesTaken);

    $(this).css("transform", "perspective( 600px ) rotateY( -180deg )");
    $(this > ".face").css("transform", "perspective( 600px ) rotateY( 0deg )");
});

