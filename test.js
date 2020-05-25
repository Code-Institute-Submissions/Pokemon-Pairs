
var whichCardClicked; 


$('#gameRow').on('click', '.cardMatchID1', function(){
    
    whichCardClicked = 1;
});

$('#gameRow').on('click', '.cardMatchID1', function(){
    
    whichCardClicked = 1;
});

$('#gameRow').on('click', '.cardMatchID2', function(){
    whichCardClicked = 2;
});

$('#gameRow').on('click', '.cardMatchID2', function(){
    whichCardClicked = 2;
});

$('#gameRow').on('click', '.cardMatchID3', function(){
    whichCardClicked = 3;
});

$('#gameRow').on('click', '.cardMatchID3', function(){
    whichCardClicked = 3;
});

$('#gameRow').on('click', '.cardMatchID4', function(){
    whichCardClicked = 4;
});

$('#gameRow').on('click', '.cardMatchID4', function(){
    whichCardClicked = 4;
});

$('#gameRow').on('click', '.cardMatchID5', function(){
    whichCardClicked = 5;
});

$('#gameRow').on('click', '.cardMatchID5', function(){
    whichCardClicked = 5;
});

$('#gameRow').on('click', '.cardMatchID6', function(){
    whichCardClicked = 6;
});

$('#gameRow').on('click', '.cardMatchID12', function(){
    whichCardClicked = 6;
});


var cardSelected;
function cardFunction(whichCardClicked){
            if(whichCardClicked == 1) cardSelected = '.cardMatchID1';
            else if(whichCardClicked == 2) cardSelected = '.cardMatchID2';
            else if (whichCardClicked == 3) cardSelected = '.cardMatchID3';
            else if(whichCardClicked == 4) cardSelected = '.cardMatchID4';
            else if (whichCardClicked == 5) cardSelected = '.cardMatchID5';
            else cardSelected = '.cardMatch6';
}



$('#gameRow').on('click', cardSelected, function(){ 


    
    console.log("this is which card is clicked = " + whichCardClicked);
    movesTaken++
    console.log(movesTaken);
                if (pairCounterArray[whichCardClicked] == 1){
                    pairCounterArray[whichCardClicked] = 2;
                    pairMatch++;



                    } else {                        
                        if ( pairCounterArray[1] == 1 || pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 
                        || pairCounterArray[5] == 1 || pairCounterArray[6] == 1){
                        notAPair();
                            }else {
                        pairCounterArray[whichCardClicked] = 1;
                        $(this).removeClass(`cardMatchID${whichCardClicked}`);
                        
                    }
                    }
                }); 




// $('#gameRow').on('click', '.cardMatchID1', function(){ 
//     movesTaken++
//     console.log(movesTaken);
//                 if (pairCounterArray[1] == 1){
//                     pairCounterArray[1] = 2;
//                     pairMatch++;
//                     console.log(pairCounterArray[1]);
//                     } else {
                        
//                         if ( pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1 
//                         || pairCounterArray[5] == 1 || pairCounterArray[6] == 1){  
//                         notAPair();
//                         }else {
//                         pairCounterArray[1] = 1;
//                         $(this).removeClass('cardMatchID1');
//                     }
//                     }
//                 });





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
function pairSelected(cardSelected){
    if(cardSelected == 1 || cardSelected == 2) cardA = 1, cardB = 2, cardPair = 1; 
    else if(cardSelected == 3 || cardSelected == 4) cardA = 3, cardB = 4, cardPair = 2; 
    else if(cardSelected == 5 || cardSelected == 6) cardA = 5, cardB = 6, cardPair = 3; 
    else if(cardSelected == 7 || cardSelected == 8) cardA = 7, cardB = 8, cardPair = 4; 
    else if(cardSelected == 9 || cardSelected == 10) cardA = 9, cardB = 10, cardPair = 5; 
    else cardA = 11, cardB = 12, cardPair = 6;   
}


$('#gameRow').on('click', '.card', function(){
    $(".cover", this).css("transform", "perspective( 600px ) rotateY( -180deg )");
    $(".face", this).css("transform", "perspective( 600px ) rotateY( 0deg )");
    clickedCard(whichCardClicked);
    pairSelected(cardSelected);
});
$('#gameRow').on('click', cardSelected, function(){    
    console.log(cardSelected);
    console.log(this);
    movesTaken++

   
                // if (pairCounterArray[whichCardClicked] == 1){
                //     pairCounterArray[whichCardClicked] = 2;
               if (pairCounterArray[cardA] == 1 && pairCounterArray[cardB] == 1){
                    pairMatch++;
    //                 for (let i=1; i<7; i++){
    // if(pairCounterArray[i] == 2){
        console.log("We have a pair!");
        var wait = setTimeout(pairFound, 1000);
        function pairFound(){
        // var cardMatchingIDs =["placeholder",1,1,2,2,3,3,4,4,5,5,6,6];
        // for(k=1; k<13; k++){
        // $(`#card${k}`).addClass(`cardMatchID${cardMatchingIDs[k]}`);
        // }
        $(`.cardMatchID${cardPair}`).fadeOut();
       
        var wait2 = setTimeout(pairFound2, 400);
        function pairFound2(){
        $(`.pairFound${cardPair}`).removeClass("display");}
        }
    
} else {  
     //if ( cardClicked already has a value )
    if (pairCounterArray[cardA] == 1 || pairCounterArray[cardB] == 1) {
        alert("You have already clicked this card");
    }                   
        else if(pairCounterArray[1] == 1 || pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1
                    || pairCounterArray[5] == 1 || pairCounterArray[6] == 1 || pairCounterArray[7] == 1 ||pairCounterArray[8] == 1
                    || pairCounterArray[9] == 1 || pairCounterArray[10] == 1 || pairCounterArray[11] == 1 || pairCounterArray[12] == 1){
            notAPair();
        }else {
                if(pairCounterArray[1] == 0 && pairCounterArray[2] == 0 && pairCounterArray[3] == 0 && pairCounterArray[4] == 0 
                    && pairCounterArray[5] == 0 && pairCounterArray[6] == 0 && pairCounterArray[7] == 0 &&pairCounterArray[8] == 0
                    && pairCounterArray[9] == 0 && pairCounterArray[10] == 0 && pairCounterArray[11] == 0 && pairCounterArray[12] == 0){
                pairCounterArray[whichCardClicked] = 1;
              console.log("this is which card was clicked" + whichCardClicked);}
                        
                        //  $(`.cardMatchID${whichCardClicked}`, this).removeClass(`cardMatchID${whichCardClicked}`);
                      
                    }
                    }
}); 























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
function pairSelected(whichCardClicked){
    if(whichCardClicked == 1 || whichCardClicked == 2) cardA = 1, cardB = 2, cardPair = 1; 
    else if(whichCardClicked == 3 || whichCardClicked == 4) cardA = 3, cardB = 4, cardPair = 2; 
    else if(whichCardClicked == 5 || whichCardClicked == 6) cardA = 5, cardB = 6, cardPair = 3; 
    else if(whichCardClicked == 7 || whichCardClicked == 8) cardA = 7, cardB = 8, cardPair = 4; 
    else if(whichCardClicked == 9 || whichCardClicked == 10) cardA = 9, cardB = 10, cardPair = 5; 
    else cardA = 11, cardB = 12, cardPair = 6;   
}


$('#gameRow').on('click', '.card', function(){
    $(".cover", this).css("transform", "perspective( 600px ) rotateY( -180deg )");
    $(".face", this).css("transform", "perspective( 600px ) rotateY( 0deg )");
    clickedCard(whichCardClicked);
     pairSelected(whichCardClicked); 
});
$('#gameRow').on('click', cardSelected, function(){ 
     
    console.log(cardSelected);
    console.log("card a is = " + pairCounterArray[cardA]);
    console.log(this);
    movesTaken++
     pairCounterArray[whichCardClicked] = 1;

   
               
               if (pairCounterArray[cardA] == 1 && pairCounterArray[cardB] == 1){
                    pairMatch++;
                    alert("pair match has been reached");

        console.log("We have a pair!");
        var wait = setTimeout(pairFound, 1000);
        function pairFound(){
        for(let i=0; i<13; i++){
            pairCounterArray[i] = 0;
        }
        $(`.cardMatchID${cardPair}`).fadeOut();
       
        var wait2 = setTimeout(pairFound2, 400);
        function pairFound2(){
        $(`.pairFound${cardPair}`).removeClass("display");}
        }
    
} else {  
     pairCounterArray[whichCardClicked] = 0;
     console.log(pairCounterArray);
     //if ( cardClicked already has a value )
    if (pairCounterArray[whichCardClicked] == 1 || pairCounterArray[whichCardClicked] == 1) {
        alert("Careful! You have already clicked this card");
    }                   
        else if(pairCounterArray[1] == 1 || pairCounterArray[2] == 1 || pairCounterArray[3] == 1 || pairCounterArray[4] == 1
                    || pairCounterArray[5] == 1 || pairCounterArray[6] == 1 || pairCounterArray[7] == 1 ||pairCounterArray[8] == 1
                    || pairCounterArray[9] == 1 || pairCounterArray[10] == 1 || pairCounterArray[11] == 1 || pairCounterArray[12] == 1){
            notAPair();
        }else {
                if(pairCounterArray[1] == 0 && pairCounterArray[2] == 0 && pairCounterArray[3] == 0 && pairCounterArray[4] == 0 
                    && pairCounterArray[5] == 0 && pairCounterArray[6] == 0 && pairCounterArray[7] == 0 &&pairCounterArray[8] == 0
                    && pairCounterArray[9] == 0 && pairCounterArray[10] == 0 && pairCounterArray[11] == 0 && pairCounterArray[12] == 0){
                pairCounterArray[whichCardClicked] = 1;
                console.log(pairCounterArray[whichCardClicked]);
                console.log(pairCounterArray);
              console.log("this is which card was clicked" + whichCardClicked);}
                        
                        //  $(`.cardMatchID${whichCardClicked}`, this).removeClass(`cardMatchID${whichCardClicked}`);
                      
                    }
                    }
}); 





















describe("Give an ID based on the card selected", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        card = new clickedCard(whichCardClicked);
    });

    
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(clickedCard).toBeDefined();
        });
        
        it("should return as #card1 when called as clickedCard(1)", function() {
            var result = clickedCard(1)
            expect(result).toBe("#card1");
        });
        
         it("should return as #card2 when called as clickedCard(2)", function() {
            var result = clickedCard(2)
            expect(result).toBe("#card2");
        });

         it("should return as #card3 when called as clickedCard(3)", function() {
            var result = clickedCard(3)
            expect(result).toBe("#card3");
        });
         it("should return as #card4 when called as clickedCard(4)", function() {
            var result = clickedCard(4)
            expect(result).toBe("#card4");
        });
         it("should return as #card5 when called as clickedCard(5)", function() {
            var result = clickedCard(5)
            expect(result).toBe("#card5");
        });
         it("should return as #card6 when called as clickedCard(6)", function() {
            var result = clickedCard(6)
            expect(result).toBe("#card6");
        });
         it("should return as #card7 when called as clickedCard(7)", function() {
            var result = clickedCard(7)
            expect(result).toBe("#card7");
        });
         it("should return as #card8 when called as clickedCard(8)", function() {
            var result = clickedCard(8)
            expect(result).toBe("#card8");
        });
         it("should return as #card9 when called as clickedCard(9)", function() {
            var result = clickedCard(9)
            expect(result).toBe("#card9");
             });
             it("should return as #card10 when called as clickedCard(10)", function() {
            var result = clickedCard(10)
            expect(result).toBe("#card10");
        }); it("should return as #card11 when called as clickedCard(11)", function() {
            var result = clickedCard(11)
            expect(result).toBe("#card11");
        }); 
        it("should return as #card12 when called as clickedCard(12)", function() {
            var result = clickedCard(12)
            expect(result).toBe("#card12");
        });
           
   
});




describe("Deciding which link to make active", function() {
   
    it("should exist", function() {
            expect(selectingActiveLink).toBeDefined();
        });

    it("should select #easy if the code is 1", function() {
            var result = selectingActiveLink(1)
            expect(result).toBe("#easy");
        });

    it("should select #medium if the code is 2", function() {
            var result = selectingActiveLink(2)
            expect(result).toBe("#medium");
        });

});


describe("Deciding which image array is picked", function() {
   
    it("should exist", function() {
            expect(selectImages).toBeDefined();
        });

    it("should select backUpCardsArrayEasy if the code is 1", function() {
            var result = selectImages(1)
            expect(result).toEqual(backupCardsArrayEasy);
        });
    
        it("should select backUpCardsArrayEasy if the code is 1", function() {
            var result = selectImages(2)
            expect(result).toEqual(backupCardsArrayMedium);
        });

 

});

