//tutorial at https://www.youtube.com/watch?v=5zcSpVKxMao&t=1344s
//It has been modified for my benefit
var types =[];
$(document).ready(function(){
    $.ajax({
        method:"GET",                
        url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/types" 
        }).then(function(response){
            console.log(response);
            for (i=0; i<response.types.length; i++){
            // make this random as it is only pushing the first card of the array
            types.push(response.types[i]);
            }
        });
        console.log(types);
});


var test = [];


 
$("#easyButton").click(function(){
    for (i = 0; i < 6; i++){
    var pokemonID = Math.floor((Math.random() * 645)+1); 
    $.ajax({
        method:"GET",                
        url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" + pokemonID 
        }).then(function(response){
            console.log(response); 
            //make this random as it is only pushing the first card of the array
            test.push(response.cards[Math.floor((Math.random() * 1))].imageUrlHiRes);
            if(test.length == 6){
        	console.log("Array is finished");
    }

});

}
 console.log(test);
});


$("#mediumButton").click(function(){
    
    // var pageNumber = Math.floor((Math.random() * 6)+1); 
    var pageNumber = 1;
    $.ajax({
        method:"GET",                
        url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?types=metal&&page" + pageNumber
        }).then(function(response){
            console.log(response);
            for(i=0; i<7; i++){
            test.push(response.cards[i].imageUrlHiRes);
            if(test.length == 6){
        	console.log("Array is finished");
}}
        });
 console.log(test);
});

$("#hardButton").click(function(){
    for (i = 0; i < 3; i++){
    var pokemonID = Math.floor((Math.random() * 645)+1); 
    $.ajax({
        method:"GET",                
        url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" + pokemonID 
        }).then(function(response){
            console.log(response); 
            //make this random as it is only pushing the first card of the array
            test.push(response.cards[0].imageUrlHiRes);
            test.push(response.cards[1].imageUrlHiRes);
            if(test.length == 6){
        	console.log("Array is finished");
    }

});

}
 console.log(test);
});



//This will be the code for animating the cards
/* Tutorial from http://www.developphp.com/video/JavaScript/Trigger-CSS-Transitions-to-Control-Animations
   It has been modified to fit my purpose */
$("#easyButton, #mediumButton, #hardButton").click(function(){
    click = 0;
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

  function card1Animation(){
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
    }

   function card2Animation(){
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
   }
  

   function card3Animation(){
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
    }

   function card4Animation(){
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
    }

   function card5Animation(){
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
}
  

   function card6Animation(){
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
}

   function card7Animation(){  
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
}

   

         function card8Animation(){  
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
}


function card9Animation(){  
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
}


function card10Animation(){  
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
}
  
function card11Animation(){  
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
}


function card12Animation(){  
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
}


  


  
//End of code for animating cards 
 
 // This is the modal for finished  
 

 //Opening up the finished modal
 $(".card").click(function(){
        console.log("This is the amount of clicks =" + click);
    if(click == 6){
        var revealTime = setTimeout(revealCards,1000);
        function revealCards(){
        $("#card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8, #card9, #card10, #card11, #card12").css("display", "block");
        $("#card1Match, #card2Match, #card3Match, #card4Match, #card5Match, #card6Match, #card7Match, #card8Match, #card9Match, #card10Match, #card11Match, #card12Match").addClass("display");
        }
        var wait = setTimeout(finishedModal, 3000);
        function finishedModal(){
        $("#finishedModal").css("display", "block");
        $("#finishedModal").addClass("in");
        $("#finishedModal").addClass("show");
        $("#indexBody").addClass("modal-open");
        
        }
    }        
}); 






// $("#start").click(function(){
//     let a = 0;
//     let b = 0;
//     let x = 0;
//     let y = 0;
//     let w = 0;   
//     let z = 0;
    
//  $("#card1").click(function(){
//      if (y == 1 || a == 1 || b == 1 ){
//          console.log("Sorry not a match!");
//          console.log(x);
//         // $(".box").css("background-color", "blue");
//          y = 0;
//          a = 0;
//          b = 0;
//          console.log(y);
//      }
//      else if(x == 1){
//              x++;
//              console.log(x);
//              console.log("Well done!");
//              $(this).css("display", "none");
//              $("#card2").css("display", "none");
//              z++;
//      } 
//      else {
//          x++;
//          console.log(x);
//      }
//  });

// $("#card2").click(function(){
//      if (y == 1 || a == 1 || b == 1 ){
//         console.log("Sorry not a match!");
//         console.log(x);
//        // $(".box").css("background-color", "blue");
//         y = 0;
//         a = 0;
//         b = 0;
//         console.log(y);
//     }
//     else if(x == 1){
//             x++;
//             console.log(x);
//             console.log("Well done!");
//             $(this).css("display", "none");
//             $("#card1").css("display", "none");
//             z++;
//         } 
//     else {
//         x++;
//         console.log(x);
//     }
// });

// $("#card3").click(function(){
//     if (x == 1) {
//         console.log("Sorry not a match!");
//         console.log(y);
//      // $(".box").css("background-color", "blue");
//         x = 0;
//         console.log(x);
//     }
//     else if(y == 1){
//             y++;
//             console.log(y);
//             console.log("Well done!");
//             $(this).css("display", "none");
//             $("#card4").css("display", "none");
//             z++;
//         } 
//     else {
//         y++;
//         console.log(y);
//     }
// });

// $("#card4").click(function(){
//    if (x == 1) {
//         console.log("Sorry not a match!");
//         console.log(y);
//     //  $(".box").css("background-color", "blue");
//         x = 0;
//         console.log(x);
//     }
//     else if(y == 1){
//             y++;
//             console.log(y);
//             console.log("Well done!");
//             $(this).css("display", "none");
//             $("#card3").css("display", "none");
//             z++;
//         } 
//     else {
//         y++;
//         console.log(y);
//     }
// });

// $("#card5").click(function(){
//      if (a == 1) {
//          console.log("Sorry not a match!");
//          console.log(b);
//       //   $(".box").css("background-color", "blue");
//          a = 0;
//          console.log(a);
//      }
//      else if(b == 1){
//              b++;
//              console.log(b);
//              console.log("Well done!");
//              $(this).css("display", "none");
//              $("#card6").css("display", "none");
//              z++;
//      } 
//      else {
//          b++;
//          console.log(b);
//      }
//  });

// $("#card6").click(function(){
//      if (a == 1) {
//          console.log("Sorry not a match!");
//          console.log(b);
//       //   $(".box").css("background-color", "blue");
//          a = 0;
//          console.log(a);
//      }
//      else if(b == 1){
//              b++;
//              console.log(b);
//              console.log("Well done!");
//              $(this).css("display", "none");
//              $("#card5").css("display", "none");
//              z++;
//      } 
//      else {
//          b++;
//          console.log(b);
//      }
//  });

// $("#card7").click(function(){
//     if (b == 1) {
//          console.log("Sorry not a match!");
//          console.log(a);
//       //   $(".box").css("background-color", "blue");
//          b = 0;
//          console.log(b);
//      }
//      else if(a == 1){
//              a++;
//              console.log(a);
//              console.log("Well done!");
//              $(this).css("display", "none");
//              $("#card8").css("display", "none");
//              z++;
//      } 
//      else {
//          a++;
//          console.log(a);
//      }
//  });

// $("#card8").click(function(){
//    if (b == 1) {
//          console.log("Sorry not a match!");
//          console.log(a);
//      //    $(".box").css("background-color", "blue");
//          b = 0;
//          console.log(b);
//      }
//      else if(a == 1){
//              a++;
//              console.log(a);
//              console.log("Well done!");
//              $(this).css("display", "none");
//              $("#card7").css("display", "none");
//              z++;
//      } 
//      else {
//          a++;
//          console.log(a);
//      }
//  });


// $(".box").click(function(){
//     $(this).css("background-color", "green");
//     w++;
//     console.log("You have used" + " " + w + " " + "moves!")
//     if(z == 4){
//         console.log("Game over!");
//     }
// });


// // support and initial ideas from the following URL. Answered by Michael Walter on Nov 20 '17 at 14:50
// // https://stackoverflow.com/questions/47394549/how-to-modify-grid-template-areas-with-javascript



// //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }
// var originalArray = ["pair1b", "pair1a", "pair2b", "pair2a", "pair3b", "pair3a", "pair4b", "pair4a"];
// var shuffledArray = shuffle(originalArray);
// console.log(shuffledArray);

// var array0 = [shuffledArray[0], shuffledArray[1]];
// var array1 = [shuffledArray[2], shuffledArray[3]];
// var array2 = [shuffledArray[4], shuffledArray[5]];
// var array3 = [shuffledArray[6], shuffledArray[7]];

// console.log(array0, array1, array2, array3);

// do {
//     var card1 = array0[Math.floor(Math.random() * 2)];
//     var card2 = array0[Math.floor(Math.random() * 2)];
// }while(card1 == card2); 


// do {
//     var card3 = array1[Math.floor(Math.random() * 2)];
//     var card4 = array1[Math.floor(Math.random() * 2)];
// }while(card3 == card4); 


// do {
//     var card5 = array2[Math.floor(Math.random() * 2)];
//     var card6 = array2[Math.floor(Math.random() * 2)];
// }while(card5 == card6); 


// do {
//     var card7 = array3[Math.floor(Math.random() * 2)];
//     var card8 = array3[Math.floor(Math.random() * 2)];
// }while(card7 == card8); 

// console.log(card1, card2);
// console.log(card3, card4);
// console.log(card5, card6);
// console.log(card7, card8);

// var cardArray = [card1, card2, card3, card4, card5, card6, card7, card8];
// console.log(cardArray);

// let elem= document.getElementById("card-grid");
//       elem.style.gridTemplateAreas =`'${cardArray[0]} ${cardArray[1]}' '${cardArray[2]} ${cardArray[3]}' '${cardArray[4]} ${cardArray[5]}' '${cardArray[6]} ${cardArray[7]}' `;
//       console.log("The grid-template area should have been redefined now.");
// });
      

// $("body").click(function(){
//     $("footer").css("display", "block");
// });