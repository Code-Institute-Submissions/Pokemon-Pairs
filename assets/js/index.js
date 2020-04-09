//Menu opening JS
$("#menuButton").click(function(){
    $("#indexGrid").toggleClass("index-grid");
    $("#indexGrid").toggleClass("index-grid-menuShow");
    $("#gridItemMenu").toggleClass("display");
});

//Game information display
$("#gridItemResults").click(function(){
    $("#topResultsWrapper").toggle("display", "block");
});

$("#gameInfoHide").click(function(){
    $("#gridItemName").toggleClass("display");
    $("#gridItemResults").toggleClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
  });

$("#gameInfoShow").click(function(){
    $("#gridItemName").toggleClass("display");
    $("#gridItemResults").toggleClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
  });



//JS for selecting difficulty
$("#easy").click(function(){
    $("#game").html(`
    <div id="card-grid" class="card-grid-container">
        <div id="card1" class="easy pair1" onclick="myfunction('card1');">card1</div>   
        <div id="card2" class="easy pair1" onclick="myfunction('card2');">card2</div>
        <div id="card3" class="easy pair2">card3</div>
        <div id="card4" class="easy pair2">card4</div>
        <div id="card5" class="easy pair3">card5</div>
        <div id="card6" class="easy pair3">card6</div>
        <div id="card7" class="easy pair4">card7</div>
        <div id="card8" class="easy pair4">card8</div>    
    </div>`);
    $("#gridItemName").addClass("display");
    $("#gridItemResults").addClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
});

   

 
 
$("#medium").click(function(){
    $("#game").html(`
    <div id="card-grid" class="card-grid-container">
        <div id="card1" class="box pair1" onclick="myfunction('card1');">card1</div>   
        <div id="card2" class="box pair1" onclick="myfunction('card2');">card2</div>
        <div id="card3" class="box pair2">card3</div>
        <div id="card4" class="box pair2">card4</div>
        <div id="card5" class="box pair3">card5</div>
        <div id="card6" class="box pair3">card6</div>
        <div id="card7" class="box pair4">card7</div>
        <div id="card8" class="box pair4">card8</div>    
    </div>`);
    $("#gridItemName").addClass("display");
    $("#gridItemResults").addClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
  });

$("#hard").click(function(){
    $("#game").html(`
    <div id="card-grid" class="card-grid-container">
        <div id="card1" class="box pair1" onclick="pair1();">card1</div>   
        <div id="card2" class="box pair1" onclick="pair1();">card2</div>
        <div id="card3" class="box pair2">card3</div>
        <div id="card4" class="box pair2">card4</div>
        <div id="card5" class="box pair3">card5</div>
        <div id="card6" class="box pair3">card6</div>
        <div id="card7" class="box pair4">card7</div>
        <div id="card8" class="box pair4">card8</div>    
    </div>`);
    $("#gridItemName").addClass("display");
    $("#gridItemResults").addClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
  });





//JS for the game

//  var color = "blue";
//   function pair1(){
//     //   console.log("This has worked!");
//     //   document.getElementById().style.backgroundColor = color;
//       $('#card1').css("color", "yellow");
//       $('#card1').css("background-color", color)
//   }; 
