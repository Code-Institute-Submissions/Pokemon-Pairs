//tutorial at https://www.youtube.com/watch?v=5zcSpVKxMao&t=1344s
//It has been modified for my benefit
var types =[];
var movesTaken = 0;
var timeTaken = 0; 
var results = ["-","-"];
var resultsTime = ["-", "-"]
var ajaxCalls = [];    
    // Getting sum of numbers
    
click = 0;

var movesTaken = 0;
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
    pair1Counter = 0;
    pair2Counter = 0;
    pair3Counter = 0;
    pair4Counter = 0;
    pair5Counter = 0;
    pair6Counter = 0;
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;
    count6 = 0;
    count7 = 0;
    count8 = 0;
    count9 = 0;
    count10 = 0;
    count11 = 0;
    count12 = 0;

});


 $("#card1").click(function(){
        $("#card1 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card1 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
       if(count1 == 1){
        $("#card1 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card1 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count1);
        } else {
            count1 = 1;
        if (pair1Counter == 1){
            pair1Counter = 2;
            console.log(pair1Counter);
        } else { 
            pair1Counter = 1;
        }
        console.log("card 1 = " + pair1Counter);
        if ( pair2Counter == 1 || pair3Counter == 1 || pair4Counter == 1 || pair5Counter == 1 
             || pair6Counter == 1){  
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        //for loop to reset them all.
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        //for loop to reset them all.
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;
     } 
        }
        else{
            if(pair1Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card1").css("display", "none");
                $("#card2").css("display", "none");
                $("#card1Match, #card2Match").removeClass("display");
                
                }
            }
        }
    }
    });

   $("#card2").click(function(){
       if(count2 == 1){
        $("#card2 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card2 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count1);
        } else {
        $("#card2 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card2 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            count2 = 1;
        if (pair1Counter == 1){
            pair1Counter = 2;
            console.log(pair1Counter);
        } else { 
            pair1Counter = 1;
        }        
        console.log("card 2 = " + pair1Counter);
        if ( pair2Counter == 1 || pair3Counter == 1 || pair4Counter == 1 || pair5Counter == 1 
             || pair6Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;

    } 
        } 
        else{
        if(pair1Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card1").css("display", "none");
                $("#card2").css("display", "none");
                $("#card1Match, #card2Match").removeClass("display");
                
                }
            }
        }
    } 
   });
  

   $("#card3").click(function(){
       //stops the same card being clicked twice.
         if(count3 == 1){
        $("#card3 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card3 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count1);
        } else {
        $("#card3 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card3 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            count3 = 1;
        if (pair2Counter == 1){
            pair2Counter = 2;
            console.log(pair1Counter);
        } else { 
            pair2Counter = 1;
        }
        console.log("card 3 = " + pair2Counter);
         if ( pair1Counter == 1 || pair3Counter == 1 || pair4Counter == 1 || pair5Counter == 1 
             || pair6Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;
          
    } 
        } 
        else{
        if(pair2Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card3").css("display", "none");
                $("#card4").css("display", "none");
                $("#card3Match, #card4Match").removeClass("display");
                
                }
            }
        }
    }
    });

   $("#card4").click(function(){
         if(count4 == 1){
        $("#card4 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card4 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count4);
        } else {
        $("#card4 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card4 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            count4 = 1;
        if (pair2Counter == 1){
            pair2Counter = 2;
            console.log(pair2Counter);
        } else { 
            pair2Counter = 1;
        }
        console.log("card 4 = " + pair2Counter);
         if ( pair1Counter == 1 || pair3Counter == 1 || pair4Counter == 1 || pair5Counter == 1 
             || pair6Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;
     } 
        } 
        else{
        if(pair2Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card3").css("display", "none");
                $("#card4").css("display", "none");
                $("#card3Match, #card4Match").removeClass("display");
                
                }
            }
        }
    }
    });

$("#card5").click(function(){
         if(count5 == 1){
        $("#card5 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card5 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count5);
        } else {
        $("#card5 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card5 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            count5 = 1;
        if (pair3Counter == 1){
            pair3Counter = 2;
            console.log(pair1Counter);
        } else { 
            pair3Counter = 1;
        }
        console.log("card 5 = " + pair3Counter);
         if ( pair2Counter == 1 || pair1Counter == 1 || pair4Counter == 1 || pair5Counter == 1 
             || pair6Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
         pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;

     } 
        } 
        else{
        if(pair3Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card5").css("display", "none");
                $("#card6").css("display", "none");
                $("#card5Match, #card6Match").removeClass("display");
                
                }
            }
        }
    }
});
  

   $("#card6").click(function(){
         if(count6 == 1){
        $("#card6 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card6 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count6);
        } else {
        $("#card6 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card6 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            count6 = 1;
        if (pair3Counter == 1){
            pair3Counter = 2;
            console.log(pair3Counter);
        } else { 
            pair3Counter = 1;
        }
        console.log("card 6 = " + pair3Counter);
         if ( pair2Counter == 1 || pair1Counter == 1 || pair4Counter == 1 || pair5Counter == 1 
             || pair6Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;

    } 
        } 
        else{
        if(pair3Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card5").css("display", "none");
                $("#card6").css("display", "none");
                $("#card5Match, #card6Match").removeClass("display");
                
                }
            }
        }
    }
});

$("#card7").click(function(){  
       if(count7 == 1){
        $("#card7 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card7 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count1);
        } else {
        $("#card7 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card7 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
            count7 = 1;
        if (pair4Counter == 1){
            pair4Counter = 2;
            console.log(pair1Counter);
        } else { 
            pair4Counter = 1;
        }
        console.log("card 7 = " + pair4Counter);
         if ( pair2Counter == 1 || pair3Counter == 1 || pair1Counter == 1 || pair5Counter == 1 
             || pair6Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;

    } 
        } 
        else{
        if(pair4Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card7").css("display", "none");
                $("#card8").css("display", "none");
                $("#card7Match, #card8Match").removeClass("display");
                
                }
            }
        }
   }
});

   

$("#card8").click(function(){
        if(count8 == 1){
        $("#card8 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card8 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count8);
        } else {
        $("#card8 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card8 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           count8 = 1;
        if (pair4Counter == 1){
            pair4Counter = 2;
            console.log(pair4Counter);
        } else { 
            pair4Counter = 1;
        }
        console.log("card 8 = " + pair4Counter);
         if ( pair2Counter == 1 || pair3Counter == 1 || pair1Counter == 1 || pair5Counter == 1 
             || pair6Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;

    } 
        } 
        else{
        if(pair4Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card7").css("display", "none");
                $("#card8").css("display", "none");
                $("#card7Match, #card8Match").removeClass("display");
                
                }
            }
        }
   }
});


$("#card9").click(function(){  
        if(count9 == 1){
        $("#card9 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card9 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count9);
        } else {
        $("#card9 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card9 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           count9 = 1;
        if (pair5Counter == 1){
            pair5Counter = 2;
            console.log(pair5Counter);
        } else { 
            pair5Counter = 1;
        }
        console.log("card 9 = " + pair5Counter);
         if ( pair2Counter == 1 || pair3Counter == 1 || pair1Counter == 1 || pair4Counter == 1 
             || pair6Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;

    } 
        } 
        else{
        if(pair5Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card9").css("display", "none");
                $("#card10").css("display", "none");
                $("#card9Match, #card10Match").removeClass("display");
                
                }
            }
        }
   }
});


$("#card10").click(function(){  
        if(count10 == 1){
        $("#card10 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card10 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count10);
        } else {
        $("#card10 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card10 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           count10 = 1;
        if (pair5Counter == 1){
            pair5Counter = 2;
            console.log(pair5Counter);
        } else { 
            pair5Counter = 1;
        }
        console.log("card 10 = " + pair5Counter);
         if ( pair2Counter == 1 || pair3Counter == 1 || pair1Counter == 1 || pair4Counter == 1 
             || pair6Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;

    } 
        } 
        else{
        if(pair5Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card9").css("display", "none");
                $("#card10").css("display", "none");
                $("#card9Match, #card10Match").removeClass("display");
                
                }
            }
        }
   }
});
  
$("#card11").click(function(){  
        if(count11 == 1){
        $("#card11 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card11 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count11);
        } else {
        $("#card11 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card11 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           count11 = 1;
        if (pair6Counter == 1){
            pair6Counter = 2;
            console.log(pair6Counter);
        } else { 
            pair6Counter = 1;
        }
        console.log("card 11 = " + pair5Counter);
         if ( pair2Counter == 1 || pair3Counter == 1 || pair1Counter == 1 || pair4Counter == 1 
             || pair5Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;
    } 
        } 
        else{
        if(pair6Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card11").css("display", "none");
                $("#card12").css("display", "none");
                $("#card11Match, #card12Match").removeClass("display");
                
                }
            }
        }
   }
});


$("#card12").click(function(){  
        if(count12 == 1){
        $("#card12 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card12 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
        console.log(count12);
        } else {
        $("#card12 > .cover").css("transform", "perspective( 600px ) rotateY( -180deg )");
        $("#card12 > .face").css("transform", "perspective( 600px ) rotateY( 0deg )");
           count12 = 1;
        if (pair6Counter == 1){
            pair6Counter = 2;
            console.log(pair5Counter);
        } else { 
            pair6Counter = 1;
        }
        console.log("card 12 = " + pair5Counter);
         if ( pair2Counter == 1 || pair3Counter == 1 || pair1Counter == 1 || pair4Counter == 1 
             || pair5Counter == 1){
        var wrongWait = setTimeout(pairNotFound, 1000);
        function pairNotFound(){
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0; 
        count5 = 0;
        count6 = 0;
        count7 = 0;
        count8 = 0;
        count9 = 0;
        count10 = 0;
        count11 = 0;
        count12 = 0;
        $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
        $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
        pair1Counter = 0;
        pair2Counter = 0;
        pair3Counter = 0;
        pair4Counter = 0;
        pair5Counter = 0;
        pair6Counter = 0;

    } 
        } 
        else{
        if(pair6Counter == 2){
                click++;
                var wait = setTimeout(pairFound, 1000);
                function pairFound(){
                $("#card11").css("display", "none");
                $("#card12").css("display", "none");
                $("#card11Match, #card12Match").removeClass("display");
                
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
        $("#card1Match, #card2Match, #card3Match, #card4Match, #card5Match, #card6Match, #card7Match, #card8Match, #card9Match, #card10Match, #card11Match, #card12Match").addClass("display");
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







    





