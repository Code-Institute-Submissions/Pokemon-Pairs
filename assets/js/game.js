//tutorial at https://www.youtube.com/watch?v=5zcSpVKxMao&t=1344s
//It has been modified for my benefit
var types =[];
results = ["-","-"];
resultsTime = ["-", "-"]
var ajaxCalls = [];   
countArray = ["placeholder", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
pairCounterArray = ["placeholder", 0, 0, 0, 0, 0, 0];  
click = 0;


var test = [];

$(".card").click(function(){
    movesTaken++;
    console.log("You have made " + movesTaken + " moves.")
});

//***************************************************************Results

$("#startGame").click(function(){
    timeTaken = 0;
    movesTaken = 0;  
    var stopWatch = setInterval(timer, 1000);
    function timer(){
        if(click < 6){
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

        $("#gridItemTopResult1").html("1st: " + results[0]);
        $("#gridItemTopResult2").html("2nd: " +results[1]);
        $("#gridItemTopResult3").html("3rd: " +results[2]);

        $("#topTimeResult1").html("1st: " + resultsTime[0] + " seconds");
        $("#topTimeResult2").html("2nd: " +resultsTime[1] + " seconds");
        $("#topTimeResult3").html("3rd: " +resultsTime[2] + " seconds");
        
    }

}
});
 
$("#easyButton").click(function(){
    if(test.length == 0){
        $.ajax({
        method:"GET",                
        url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/types" 
        }).then(function(response){
            console.log(response);
            for (i=0; i<response.types.length; i++){
            // make this random as it is only pushing the first card of the array
            ajaxCalls.push(response.types.length);
            types.push(response.types[i]);
            }
        });
    for (i = 0; i < 6; i++){
    var pokemonID = Math.floor((Math.random() * 645)+1); 
    $.ajax({
        method:"GET",                
        url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" + pokemonID 
        }).then(function(response){
            console.log(response); 
            ajaxCalls.push(Number(response.cards.length));
            console.log(ajaxCalls);
            test.push(response.cards[Math.floor(Math.random() * response.cards.length)].imageUrlHiRes);
            if(test.length == 6){
        	console.log("Array is finished");
    }
    
});

}
 console.log(test);}
});


$("#mediumButton").click(function(){
    if(test.length == 0){
    
    // var pageNumber = Math.floor((Math.random() * 6)+1); 
  
    var pageNumber = [Math.floor(Math.random() * 4)] ;
    $.ajax({
        method:"GET",                
        url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?types="+ types[Math.floor(Math.random() * types.length)] +"&&page" + pageNumber
        }).then(function(response){
            console.log(response);
            ajaxCalls.push(Number(response.cards.length));
            console.log(ajaxCalls);
            for(i=0; i<6; i++){
            test.push(response.cards[Math.floor(Math.random() * response.cards.length)].imageUrlHiRes);
            if(test.length == 6){
        	console.log("Array is finished");
            }}
        });
    }
 console.log(test);
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
            console.log(ajaxCalls);

            //make this random as it is only pushing the first card of the array
            test.push(response.cards[0].imageUrlHiRes);
            //Make this Maths.random + 1 as it will never choose 0. 
            test.push(response.cards[Math.floor(Math.random() * response.cards.length)].imageUrlHiRes);
                if(test.length == 6){
        	    console.log("Array is finished");
    }

});

}}
 console.log(test);
});

//This will be the code for animating the cards
/* Tutorial from http://www.developphp.com/video/JavaScript/Trigger-CSS-Transitions-to-Control-Animations
   It has been modified to fit my purpose */
$("#easyButton, #mediumButton, #hardButton").click(function(){
    for(i=1; i<13; i++){
        countArray[i] = 0;
        console.log("Initial reset of countArray. Number " + i + " and it is " + countArray[i]);
    } 
    for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                 console.log("Initial reset of pairArray. Number " + j + " and it is " + pairCounterArray[j]);
        }     
});


 $("#card1").click(function(){
        //this turns the card around
        $("#card1 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card1 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");

        //this makes sure if the card is already turned around, nothing happens.
       if(countArray[1] == 1){
        $("#card1 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card1 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[1]);
        } else {

        //this checks to see if the pair has already been selected. If it has it redeclares it as two
            countArray[1] = 1;
            console.log("count array is now at " + countArray[1]);
            if (pairCounterArray[1] == 1){
                pairCounterArray[1] = 2;
                // if(pairCounterArray[1] == 2){ unsure if I need?
                    click++;
                    var wait = setTimeout(pairFound, 1000);
                    function pairFound(){
                    $("#card1, #card2").css("display", "none");
                    $("#card1Match, #card2Match").removeClass("display");  
                    }
                 console.log(pairCounterArray[1]);
                } else { 
                //if this is the first of the pair, it will put if as one.
                // pairCounterArray[1] = 1;
                pairCounterArray[1] = 1;
            } console.log("card 1 = " + pairCounterArray[1]);
        
        //this checks no other card has been turned over.
            if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 || pairCounterArray[6] == 1){  
                var wrongWait = setTimeout(pairNotFound, 1000);
                function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }      
                $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
                $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
                //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            }          
         } 
        }  
        }
    });

$("#card2").click(function(){
       if(countArray[2] == 1){
        $("#card2 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card2 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[1]);
        } else {
        $("#card2 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card2 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            countArray[2] = 1;
        if (pairCounterArray[1] == 1){
            pairCounterArray[1] = 2;
             click++;
            var wait = setTimeout(pairFound, 1000);
            function pairFound(){
            $("#card1, #card2").css("display", "none");
            $("#card1Match, #card2Match").removeClass("display");
            }
            console.log(pairCounterArray[1]);
        } else { 
            pairCounterArray[1] = 1;
        }        
        console.log("card 2 = " + pairCounterArray[1]);
        if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 
             || pairCounterArray[6] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
                //for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }  
                    
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            } 
            
    } 
        } 
       
    } 
   });
  

   $("#card3").click(function(){
       //stops the same card being clicked twice.
         if(countArray[3] == 1){
        $("#card3 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card3 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[1]);
        } else {
        $("#card3 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card3 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            countArray[3] = 1;
        if (pairCounterArray[2] == 1){
            pairCounterArray[2] = 2;
            click++;
            var wait = setTimeout(pairFound, 1000);
            function pairFound(){
            $("#card3, #card4").css("display", "none");
            $("#card3Match, #card4Match").removeClass("display");
                
           }
            console.log(pairCounterArray[1]);
        } else { 
            pairCounterArray[2] = 1;
        }
        console.log("card 3 = " + pairCounterArray[2]);
         if ( pairCounterArray[1] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 
             || pairCounterArray[6] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }          
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            } 
    } 
        } 
       
    }
    });

   $("#card4").click(function(){
         if(countArray[4] == 1){
        $("#card4 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card4 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[4]);
        } else {
        $("#card4 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card4 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            countArray[4] = 1;
        if (pairCounterArray[2] == 1){
            pairCounterArray[2] = 2;
             click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card3, #card4").css("display", "none");
                $("#card3Match, #card4Match").removeClass("display");
                }
            console.log(pairCounterArray[2]);
        } else { 
            pairCounterArray[2] = 1;
        }
        console.log("card 4 = " + pairCounterArray[2]);
         if ( pairCounterArray[1] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 
             || pairCounterArray[6] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }  
        
    
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            } 
     } 
        } 
        
    }
    });

$("#card5").click(function(){
         if(countArray[5] == 1){
        $("#card5 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card5 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[5]);
        } else {
        $("#card5 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card5 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            countArray[5] = 1;
        if (pairCounterArray[3] == 1){
            pairCounterArray[3] = 2;
            click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card5, #card6").css("display", "none");
                $("#card5Match, #card6Match").removeClass("display");
                
                }
            console.log(pairCounterArray[1]);
        } else { 
            pairCounterArray[3] = 1;
        }
        console.log("card 5 = " + pairCounterArray[3]);
         if ( pairCounterArray[2] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 
             || pairCounterArray[6] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }  
        
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            } 
     } 
        } 
        
    }
});
  

$("#card6").click(function(){
         if(countArray[6] == 1){
        $("#card6 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card6 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[6]);
        } else {
        $("#card6 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card6 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            countArray[6] = 1;
        if (pairCounterArray[3] == 1){
            pairCounterArray[3] = 2;
             click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
               $("#card5, #card6").css("display", "none");
                $("#card5Match, #card6Match").removeClass("display");
                }
            console.log(pairCounterArray[3]);
        } else { 
            pairCounterArray[3] = 1;
        }
        console.log("card 6 = " + pairCounterArray[3]);
         if ( pairCounterArray[2] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 || pairCounterArray[5] == 1 
             || pairCounterArray[6] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }  
        
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
         //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            }  
    } 
        } 
        
    }
});

$("#card7").click(function(){  
       if(countArray[7] == 1){
        $("#card7 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card7 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[1]);
        } else {
        $("#card7 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card7 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            countArray[7] = 1;
        if (pairCounterArray[4] == 1){
            pairCounterArray[4] = 2;
            click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card7, #card8").css("display", "none");
                $("#card7Match, #card8Match").removeClass("display");
                
                }
            console.log(pairCounterArray[1]);
        } else { 
            pairCounterArray[4] = 1;
        }
        console.log("card 7 = " + pairCounterArray[4]);
         if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[5] == 1 
             || pairCounterArray[6] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                } 
        
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");  
         //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            }  

    } 
        } 
        
   }
});

   

$("#card8").click(function(){
        if(countArray[8] == 1){
        $("#card8 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card8 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[8]);
        } else {
        $("#card8 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card8 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           countArray[8] = 1;
        if (pairCounterArray[4] == 1){
            pairCounterArray[4] = 2;
             click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card7, #card8").css("display", "none");
                $("#card7Match, #card8Match").removeClass("display");
                
                }
            console.log(pairCounterArray[4]);
        } else { 
            pairCounterArray[4] = 1;
        }
        console.log("card 8 = " + pairCounterArray[4]);
         if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[5] == 1 
             || pairCounterArray[6] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }          
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
         //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            }  

    } 
        } 
        
   }
});


$("#card9").click(function(){  
        if(countArray[9] == 1){
        $("#card9 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card9 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[9]);
        } else {
        $("#card9 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card9 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           countArray[9] = 1;
        if (pairCounterArray[5] == 1){
            pairCounterArray[5] = 2;
            click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card9, #card10").css("display", "none");
                $("#card9Match, #card10Match").removeClass("display");
                
                }
            console.log(pairCounterArray[5]);
        } else { 
            pairCounterArray[5] = 1;
        }
        console.log("card 9 = " + pairCounterArray[5]);
         if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 
             || pairCounterArray[6] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }  
       
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
         //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            }  
     } 
        } 
        else{
        if(pairCounterArray[5] == 2){
                
            }
        }
   }
});


$("#card10").click(function(){  
        if(countArray[10] == 1){
        $("#card10 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card10 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[10]);
        } else {
        $("#card10 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card10 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           countArray[10] = 1;
        if (pairCounterArray[5] == 1){
            pairCounterArray[5] = 2;
             click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card9, #card10").css("display", "none");
                $("#card9Match, #card10Match").removeClass("display");
                
                }
            console.log(pairCounterArray[5]);
        } else { 
            pairCounterArray[5] = 1;
        }
        console.log("card 10 = " + pairCounterArray[5]);
         if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 
             || pairCounterArray[6] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }         
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");

         //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            }  
    } 
        } 
        
   }
});
  
$("#card11").click(function(){  
        if(countArray[11] == 1){
        $("#card11 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card11 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[11]);
        } else {
        $("#card11 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card11 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           countArray[11] = 1;
        if (pairCounterArray[6] == 1){
            pairCounterArray[6] = 2;
             click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card11, #card12").css("display", "none");
                $("#card11Match, #card12Match").removeClass("display");
                
                }
            console.log(pairCounterArray[6]);
        } else { 
            pairCounterArray[6] = 1;
        }
        console.log("card 11 = " + pairCounterArray[5]);
         if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 
             || pairCounterArray[5] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }  
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
         //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            }  
   } 
        } 
        
   }
});


$("#card12").click(function(){  
        if(countArray[12] == 1){
        $("#card12 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card12 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(countArray[12]);
        } else {
        $("#card12 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card12 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           countArray[12] = 1;
        if (pairCounterArray[6] == 1){
            pairCounterArray[6] = 2;
            click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card11, #card12").css("display", "none");
                $("#card11Match, #card12Match").removeClass("display");
                }
        } else { 
            pairCounterArray[6] = 1;
        }
        console.log("card 12 = " + pairCounterArray[5]);
         if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[1] == 1 || pairCounterArray[4] == 1 
             || pairCounterArray[5] == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
//for loop to reset them all. 
                for(i=1; i<13; i++){
                countArray[i] = 0;
                console.log("This is array number" + i + " and it is " + countArray[i]);
                }        
        
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
         //for loop to reset them all.
                for(j=1; j<7; j++){
                pairCounterArray[j] = 0;
                console.log("This is array number" + j + " and it is " + pairCounterArray[j]);
            }  

    } 
        
        
        }
   }
});


  


  
//End of code for animating cards 
 
 // This is the modal for finished  
 

 //Opening up the finished modal
 $(".card").click(function(){
        console.log("This is the amount of clicks =" + click);
    if(click == 6){
        var revealTime = setTimeout(revealCards,1000);
        function revealCards(){
        //change this to a for loop.
        for(j=1; j<13; j++){
            $(`#card${[j]}Match`).addClass("display");
        }
        // $("#card1Match, #card2Match, #card3Match, #card4Match, #card5Match, #card6Match, #card7Match, #card8Match, #card9Match, #card10Match, #card11Match, #card12Match").addClass("display");
        //change this to a for loop.
        $("#card1, #card2, #card3, #card4, #card5, #card6").css("display", "block");
        $("#card7, #card8, #card9, #card10, #card11, #card12").css("display", "block");
        $(".card > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $(".card > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        }
        var wait = setTimeout(finishedModal, 2000);
        function finishedModal(){
        
        $("#finishedModal").css("display", "block");
        $("#finishedModal").addClass("in");
        $("#finishedModal").addClass("show");
        $("#indexBody").addClass("modal-open");
        click = 0;
        }
        
    }        
}); 







    





