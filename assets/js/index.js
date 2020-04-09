

//Menu opening JS
$("#menuButton").click(function(){
    $("#indexGrid").toggleClass("index-grid");
    $("#indexGrid").toggleClass("index-grid-menuShow");
    $("#gridItemMenu").toggle("display", "block");
});

//Game information display
$("#gridItemResults").click(function(){
    $("#topResultsWrapper").toggle("display", "block");
});

$("#gridItemTimer").click(function(){
    $("#gridItemTimerDisplay").toggle("display", "block");
});



//NAV - Changing the contents of the iframe
$("#linkPlay").click(function(){
    $("#iframe").attr("src", "game.html");
});

$("#linkHelp").click(function(){
    $("#iframe").attr("src", "help.html");
});

$("#linkContactUs").click(function(){
    $("#iframe").attr("src", "contactUs.html");
});



//JS for selecting difficulty
$("#easy").click(function(){
    $("#message").html(`<button id="start">Click to start</button> 
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
    
  });

   

 
 
$("#medium").click(function(){
    $("#message").html(`<button id="start">Click to start</button> 
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
    
  });

$("#hard").click(function(){
    $("#message").html(`<button id="start">Click to start</button> 
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
    
  });




// $(".gridItemCollapsedBar").click(function(){
//     $("#gridItemName").toggleClass("d-none");
//     $("#gridItemResults").toggleClass("d-none");
//     $("#gridItemTimer").toggleClass("d-none");
//     $("#gameInfoShow").toggleClass("display");
//     $("#gameInfoHide").toggleClass("display");    
//   });




//JS for the game

 var color = "blue";
  function pair1(){
    //   console.log("This has worked!");
    //   document.getElementById().style.backgroundColor = color;
      $('#card1').css("color", "yellow");
      $('#card1').css("background-color", color)
  }; 
