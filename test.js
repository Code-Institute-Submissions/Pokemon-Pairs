
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