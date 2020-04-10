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
    <div id="card-grid" class="card-grid-container-8">
        <div id="card1" class="eight-cards pair1" onclick="myfunction('card1');">card1</div>   
        <div id="card2" class="eight-cards pair1" onclick="myfunction('card2');">card2</div>
        <div id="card3" class="eight-cards pair2">card3</div>
        <div id="card4" class="eight-cards pair2">card4</div>
        <div id="card5" class="eight-cards pair3">card5</div>
        <div id="card6" class="eight-cards pair3">card6</div>
        <div id="card7" class="eight-cards pair4">card7</div>
        <div id="card8" class="eight-cards pair4">card8</div>    
    </div>`);
    $("#gridItemName").addClass("display");
    $("#gridItemResults").addClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
});

   

 
 
$("#medium").click(function(){
    $("#game").html(`
    <div id="card-grid" class="card-grid-container">
        <div id="card1" class="sixteen-cards pair1" onclick="myfunction('card1');">card1</div>   
        <div id="card2" class="sixteen-cards pair1" onclick="myfunction('card2');">card2</div>
        <div id="card3" class="sixteen-cards pair2">card3</div>
        <div id="card4" class="sixteen-cards pair2">card4</div>
        <div id="card5" class="sixteen-cards pair3">card5</div>
        <div id="card6" class="sixteen-cards pair3">card6</div>
        <div id="card7" class="sixteen-cards pair4">card7</div>
        <div id="card8" class="sixteen-cards pair4">card8</div>   
        <div id="card9" class="sixteen-cards pair1" onclick="myfunction('card1');">card1</div>   
        <div id="card10" class="sixteen-cards pair1" onclick="myfunction('card2');">card2</div>
        <div id="card11" class="sixteen-cards pair2">card3</div>
        <div id="card12" class="sixteen-cards pair2">card4</div>
        <div id="card13" class="sixteen-cards pair3">card5</div>
        <div id="card14" class="sixteen-cards pair3">card6</div>
        <div id="card15" class="sixteen-cards pair4">card7</div>
        <div id="card16" class="sixteen-cards pair4">card8</div> 
    </div>`);
    $("#gridItemName").addClass("display");
    $("#gridItemResults").addClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
  });

$("#hard").click(function(){
    $("#game").html(`
    <div id="card-grid" class="card-grid-container">     
        <div id="card1" class="sixteen-cards pair1" onclick="myfunction('card1');">card1</div>   
        <div id="card2" class="sixteen-cards pair1" onclick="myfunction('card2');">card2</div>
        <div id="card3" class="sixteen-cards pair2">card3</div>
        <div id="card4" class="sixteen-cards pair2">card4</div>
        <div id="card5" class="sixteen-cards pair3">card5</div>
        <div id="card6" class="sixteen-cards pair3">card6</div>
        <div id="card7" class="sixteen-cards pair4">card7</div>
        <div id="card8" class="sixteen-cards pair4">card8</div>   
        <div id="card9" class="sixteen-cards pair1" onclick="myfunction('card1');">card1</div>   
        <div id="card10" class="sixteen-cards pair1" onclick="myfunction('card2');">card2</div>
        <div id="card11" class="sixteen-cards pair2">card3</div>
        <div id="card12" class="sixteen-cards pair2">card4</div>
        <div id="card13" class="sixteen-cards pair3">card5</div>
        <div id="card14" class="sixteen-cards pair3">card6</div>
        <div id="card15" class="sixteen-cards pair4">card7</div>
        <div id="card16" class="sixteen-cards pair4">card8</div>     
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
