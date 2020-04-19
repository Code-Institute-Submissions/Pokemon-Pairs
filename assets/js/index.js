var nameChosen = 0;

$( document ).ready(function() {
    console.log( "ready!" );
    console.log(nameChosen);
    if (nameChosen == 0){
    $("#welcomeModal").css("display", "block");
    $("#welcomeModal").addClass("in");
    $("#welcomeModal").addClass("show");
    $("#indexBody").addClass("modal-open");
    } 
});

function insertName() {
	var playerName = document.getElementById("nameInput").value;
    console.log(playerName)
    nameChosen++;
    $("#welcomeModal").css("display", "none");
	$("#welcomeModal").removeClass("in");
	$("#welcomeModal").removeClass("show");
	$("body").removeClass("modal-open");
    $("#playerName").html(playerName);
    console.log(nameChosen);
}

//Menu opening Js
$("#menuButton").click(function(){
    $("#navList").slideToggle();
});

//Broken - fix later
// //Game information display
// $("#gridItemResults").click(function(){
//     $("#topResultsWrapper").toggle("display", "block");
// });

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
            <div id="card1" class="eight-cards card" onclick="myfunction('card1');">
                <div id="card1Cover" class="eight-cards cover" onclick="myfunction('card1');">card1</div> 
                <div id="card1face" class="eight-cards pair1 face" onclick="myfunction('card1');">card1</div>
            </div>
            <div id="card2" class="eight-cards  card" onclick="myfunction('card2');">
                <div id="card2Cover" class="eight-cards cover" onclick="myfunction('card2');">card2</div> 
                <div id="card2face" class="eight-cards pair1 face" onclick="myfunction('card2');">card2</div>
            </div>
            <div id="card3" class="eight-cards card" onclick="myfunction('card3');">
                <div id="card3Cover" class="eight-cards cover" onclick="myfunction('card3');">card3</div> 
                <div id="card3face" class="eight-cards pair2 face" onclick="myfunction('card3');">card3</div>
            </div>
            <div id="card4" class="eight-cards card" onclick="myfunction('card4');">
                <div id="card4Cover" class="eight-cards cover" onclick="myfunction('card4');">card4</div> 
                <div id="card4face" class="eight-cards pair2 face" onclick="myfunction('card4');">card4</div>
            </div>
            <div id="card5" class="eight-cards card" onclick="myfunction('card5');">
                <div id="card5Cover" class="eight-cards  cover" onclick="myfunction('card5');">card5</div> 
                <div id="card5face" class="eight-cards pair3 face" onclick="myfunction('card5');">card5</div>
            </div>
            <div id="card6" class="eight-cards card" onclick="myfunction('card6');">
                <div id="card6Cover" class="eight-cards cover" onclick="myfunction('card6');">card6</div> 
                <div id="card6face" class="eight-cards pair3 face" onclick="myfunction('card6');">card6</div>
            </div>
        </div>
        <div id="card-grid-final" class="card-grid-container-final">
                <div id="card7" class="eight-cards  card" onclick="myfunction('card7');">
                    <div id="card7Cover" class="eight-cards  cover" onclick="myfunction('card7');">card7</div> 
                    <div id="card7face" class="eight-cards pair4 face" onclick="myfunction('card7');">card7</div>
                </div>
                <div id="card8" class="eight-cards  card" onclick="myfunction('card8');">
                    <div id="card8Cover" class="eight-cards cover" onclick="myfunction('card8');">card8</div> 
                    <div id="card8face" class="eight-cards pair4 face" onclick="myfunction('card8');">card8</div>
                </div>
        </div>`);





    // $("#game").html(`
    // <div id="card-grid" class="card-grid-container">
    //     <div id="card1Cover" class="eight-cards pair1 cover" onclick="myfunction('card1');">card1</div> 
    //     <div id="card1" class="eight-cards pair1 face" onclick="myfunction('card1');">card1</div>
    //     <div id="card2Cover" class="eight-cards pair1 cover" onclick="myfunction('card2');">card1</div>   
    //     <div id="card2" class="eight-cards pair1 face" onclick="myfunction('card2');">card2</div>
    //     <div id="card3Cover" class="eight-cards pair1 cover" onclick="myfunction('card3');">card2</div>
    //     <div id="card3" class="eight-cards pair2 face" onclick="myfunction('card3');">card3</div>
    //     <div id="card4Cover" class="eight-cards pair1 cover" onclick="myfunction('card4');">card3</div>
    //     <div id="card4" class="eight-cards pair2 face" onclick="myfunction('card4');">card4</div>
    //     <div id="card5Cover" class="eight-cards pair1 cover" onclick="myfunction('card5');">card4</div>
    //     <div id="card5" class="eight-cards pair3 face" onclick="myfunction('card5');">card5</div>
    //     <div id="card6Cover" class="eight-cards pair1 cover" onclick="myfunction('card6');">card5</div>
    //     <div id="card6" class="eight-cards pair3 face" onclick="myfunction('card6');">card6</div>
    // </div>
    // <div id="card-grid-final" class="card-grid-container-final">
    //     <div id="card7" class="eight-cards pair4" onclick="myfunction('card7');">card7</div>
    //     <div id="card8" class="eight-cards pair4" onclick="myfunction('card8');">card8</div>    
    // </div>`);
    $("#gridItemName").addClass("display");
    $("#gridItemResults").addClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
    $(this).addClass("active-mode");
    $("#medium").removeClass("active-mode");
    $("#hard").removeClass("active-mode");
});

   

 
 
$("#medium").click(function(){
    $("#game").html(`
    <div id="card-grid" class="card-grid-container-sixteen">
        <div id="card1" class="sixteen-cards pair1mh" onclick="myfunction('card1');">card1</div>   
        <div id="card2" class="sixteen-cards pair1mh" onclick="myfunction('card2');">card2</div>
        <div id="card3" class="sixteen-cards pair2mh">card3</div>
        <div id="card4" class="sixteen-cards pair2mh">card4</div>
        <div id="card5" class="sixteen-cards pair3mh">card5</div>
        <div id="card6" class="sixteen-cards pair3mh">card6</div>
        <div id="card7" class="sixteen-cards pair4mh">card7</div>
        <div id="card8" class="sixteen-cards pair4mh">card8</div>   
        <div id="card9" class="sixteen-cards pair1mh" onclick="myfunction('card1');">card1</div>   
        <div id="card10" class="sixteen-cards pair1mh" onclick="myfunction('card2');">card2</div>
        <div id="card11" class="sixteen-cards pair2mh">card3</div>
        <div id="card12" class="sixteen-cards pair2mh">card4</div>
        <div id="card13" class="sixteen-cards pair3mh">card5</div>
        <div id="card14" class="sixteen-cards pair3mh">card6</div>
        <div id="card15" class="sixteen-cards pair4mh">card7</div>
        <div id="card16" class="sixteen-cards pair4mh">card8</div> 
    </div>`);
    $("#gridItemName").addClass("display");
    $("#gridItemResults").addClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
    $(this).addClass("active-mode");
    $("#easy").removeClass("active-mode");
    $("#hard").removeClass("active-mode");
  });

$("#hard").click(function(){
    $("#game").html(`
    <div id="card-grid" class="card-grid-container-sixteen">     
        <div id="card1" class="sixteen-cards pair1mh" onclick="myfunction('card1');">card1</div>   
        <div id="card2" class="sixteen-cards pair1mh" onclick="myfunction('card2');">card2</div>
        <div id="card3" class="sixteen-cards pair2mh">card3</div>
        <div id="card4" class="sixteen-cards pair2mh">card4</div>
        <div id="card5" class="sixteen-cards pair3mh">card5</div>
        <div id="card6" class="sixteen-cards pair3mh">card6</div>
        <div id="card7" class="sixteen-cards pair4mh">card7</div>
        <div id="card8" class="sixteen-cards pair4mh">card8</div>   
        <div id="card9" class="sixteen-cards pair1mh" onclick="myfunction('card1');">card1</div>   
        <div id="card10" class="sixteen-cards pair1mh" onclick="myfunction('card2');">card2</div>
        <div id="card11" class="sixteen-cards pair2mh">card3</div>
        <div id="card12" class="sixteen-cards pair2mh">card4</div>
        <div id="card13" class="sixteen-cards pair3mh">card5</div>
        <div id="card14" class="sixteen-cards pair3mh">card6</div>
        <div id="card15" class="sixteen-cards pair4mh">card7</div>
        <div id="card16" class="sixteen-cards pair4mh">card8</div>     
    </div>`);
    $("#gridItemName").addClass("display");
    $("#gridItemResults").addClass("display");
    $("#gameInfoShow").toggleClass("display");
    $("#gameInfoHide").toggleClass("display");
    $(this).addClass("active-mode");
    $("#easy").removeClass("active-mode");
    $("#medium").removeClass("active-mode");
  });





//JS for the game

//  var color = "blue";
//   function pair1(){
//     //   console.log("This has worked!");
//     //   document.getElementById().style.backgroundColor = color;
//       $('#card1').css("color", "yellow");
//       $('#card1').css("background-color", color)
//   }; 
