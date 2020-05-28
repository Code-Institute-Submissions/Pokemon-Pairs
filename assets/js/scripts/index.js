// Set variables and arrays
let nameChosen;
let backupCardsArrayEasy = [
    "assets/images/backupcards/easy1.png",
    "assets/images/backupcards/easy2.png",
    "assets/images/backupcards/easy3.png",
    "assets/images/backupcards/easy4.png",
    "assets/images/backupcards/easy5.png",
    "assets/images/backupcards/easy6.png",
];
let backupCardsArrayMedium = [
    "assets/images/backupcards/medium1.png",
    "assets/images/backupcards/medium2.png",
    "assets/images/backupcards/medium3.png",
    "assets/images/backupcards/medium4.png",
    "assets/images/backupcards/medium5.png",
    "assets/images/backupcards/medium6.png",
];
let backupCardsArrayHard = [
    "assets/images/backupcards/hard1.png",
    "assets/images/backupcards/hard2.png",
    "assets/images/backupcards/hard3.png",
    "assets/images/backupcards/hard4.png",
    "assets/images/backupcards/hard5.png",
    "assets/images/backupcards/hard6.png",
];
const mainTheme = document.getElementById("mainThemeMusic");
const gameTheme = document.getElementById("gameThemeMusic");
const matchTheme = document.getElementById("matchingPairMusic");
const endTheme = document.getElementById("endOfGameThemeMusic");
let mute;
let userInteraction;
let theme;
let themeSelector;
let whichModal;
let modalSelected;

// Sound Support

//Allows switching between play and pause.
function activeTheme(themeSelector) {
    if (themeSelector == 1) theme = mainTheme;
    else if (themeSelector == 2) theme = gameTheme;
    else if (themeSelector == 3) theme = endTheme;
    else theme;
    return theme;
}

function toggleThemeMusic() {
    if (themeSelector == 2) {
        $(theme).prop("volume", "0.3");
    }
    return theme.paused ? theme.play() : theme.pause();
}

//Plays a theme on mute

function playThemeMusicOnMute() {
    $(theme).get(0).play();
    if (sessionStorage.muted == 1) {
        toggleSpeakerIconToMuted();
        $(theme).prop("muted", true);
    }
}

//Will mute all songs
$(".fa-volume-up, #volumeNotAllowed").click(function () {
    toggleSpeakerIconToMuted();

    $(theme).prop("muted", true);

    mute = 1;

    sessionStorage.setItem("muted", mute);
});

//Will allow songs to be played aloud.
$(".mainThemeControl, #volumeAllowed, .endGameThemeControl, #gameThemeControl").click(function () {
    toggleSpeakerIconToLoud();
    mute = 0;

    sessionStorage.setItem("muted", mute);

    //Support accessing properties from: https://codepen.io/calebzahnd/pen/VvZZeJ
    $(theme).prop("muted", false);
});

//Changes the visible sound icon
function toggleSpeakerIconToMuted() {
    $(".fa-volume-up").css("display", "none");
    $(".fa-volume-mute").css("display", "inline-block");
}

function toggleSpeakerIconToLoud() {
    $(".fa-volume-up").css("display", "inline-block");
    $(".fa-volume-mute").css("display", "none");
}

//Turning cards face down
function turningCardsFaceDown() {
    $(".cover").css("transform", "perspective( 600px ) rotateY( 0deg )");
    $(".face").css("transform", "perspective( 600px ) rotateY( 180deg )");
}

//Modal functions
function modalSelectionFunction(whichModal) {
    if (whichModal == 1) modalSelected = "#volumeModal";
    else if (whichModal == 2) modalSelected = "#welcomeModal";
    else if (whichModal == 3) modalSelected = "#difficultyModal";
    else if (whichModal == 4) modalSelected = "#finishedModal";
    else modalSelected;
    return modalSelected;
}

function closeModal(modalSelected) {
    $(modalSelected).css("display", "none").removeClass("in").removeClass("show");
    $("#indexBody").removeClass("modal-open");
}

function openModal(modalSelected) {
    $(modalSelected).css("display", "block").addClass("in").addClass("show").addClass("modal-open");
    $("#indexBody").removeClass("modal-open");
}

// *******************************************************************************

// Checking if this is the first time loggin on.
$(document).ready(function () {
    themeSelector = 1;

    activeTheme(themeSelector);

    if (sessionStorage.name == null) {
        whichModal = 1;

        modalSelectionFunction(whichModal);
        openModal(modalSelected);

        $(".volume").click(function () {
            $("#volumeModal").css("display", "none").removeClass("in").removeClass("show").removeClass("modal-open");
            if (sessionStorage.muted == 0) {
                $(theme).prop("muted", false);
                toggleThemeMusic();
                toggleSpeakerIconToLoud();
            } else {
                playThemeMusicOnMute();
            }

            let time = setTimeout(removeJumbo, 1500);
            function removeJumbo() {
                $(".jumbotron").slideUp("slow");
                $("#gridItemHeader, #gridItemGameInfo, #gridItemGame").removeClass("display");
                

                let welcomeModalTime = setTimeout(revealWelcomeModal, 750);
                function revealWelcomeModal() {
                    whichModal = 2;

                    modalSelectionFunction(whichModal);
                    openModal(modalSelected);
                }
            }
        });
    } else {
        if (sessionStorage.muted == 0) {
            toggleThemeMusic();
            toggleSpeakerIconToLoud();
        } else {
            playThemeMusicOnMute();
        }
        $("#playerName").html(sessionStorage.getItem("playerName"));
        $(".jumbotron").slideUp();
        $("#gridItemHeader, #gridItemGameInfo, #gridItemGame").removeClass("display");
        whichModal = 3;

        modalSelectionFunction(whichModal);
        openModal(modalSelected);
        $("#difficultyModalTitle").html("Are you ready, " + sessionStorage.getItem("playerName") + "?");
    }
});

// Storing the players name when the user inputs the data
$("#enterName").click(function () {
    userInteraction = 1;

    sessionStorage.setItem("userInteraction", userInteraction);

    let playerName = document.getElementById("nameInput").value;
    sessionStorage.setItem("playerName", playerName);
    sessionStorage.setItem("name", "1");

    whichModal = 2;

    modalSelectionFunction(whichModal);
    closeModal(modalSelected);

    $("#playerName").html(sessionStorage.getItem("playerName"));
    $("#difficultyModalTitle").html(`Welcome, ${playerName}!`);
});

// Triggering the loading modal
$("#easyButton, #mediumButton, #hardButton").click(function () {
    whichModal = 3;

    modalSelectionFunction(whichModal);
    closeModal(modalSelected);

    if (sessionStorage.muted == 0) {
        $(theme).prop("muted", false);
        $(theme).get(0).play();
        toggleSpeakerIconToLoud();
    } else {
        playThemeMusicOnMute();
    }

    let timeBackup = setTimeout(backupCards, 30000);

    function backupCards() {
        if (apiResponseArray.length < 7) {
            $("#startGame").removeClass("display");
            clearTimeout(timeBackup);
        }
    }

    let time = setInterval(loadingArray, 1000);

    function loadingArray() {
        if (apiResponseArray.length == 7) {
            $("#startGame").removeClass("display");
            clearInterval(time);
        }
    }
});

// Highlighting which difficulty the user has selected.
$("#easyButton").click(function () {
    difficultyMode = 1;
    selectingActiveLink();
});

$("#mediumButton").click(function () {
    difficultyMode = 2;
    selectingActiveLink();
});

$("#hardButton").click(function () {
    difficultyMode = 3;
    selectingActiveLink();
});

let activeLink;

function selectingActiveLink(difficultyMode2) {
    if (difficultyMode == 1) activeLink = "#easy";
    else if (difficultyMode == 2) activeLink = "#medium";
    else activeLink = "#hard";
    $(activeLink).addClass("active-mode");
}

//Opening up the display cards modal
$("#seeCardsButton").click(function () {
    whichModal = 4;

    modalSelectionFunction(whichModal);
    closeModal(modalSelected);
});

//Distributing card images.
let cardIDArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Shuffling the array ID number
//Shuffling array found in a tutorial - see README.md
$("#startGame").click(function () {
    toggleThemeMusic();
    themeSelector = 2;

    activeTheme(themeSelector);

    if (sessionStorage.muted == 0) {
        $(theme).prop("muted", false);
        toggleThemeMusic();
        toggleSpeakerIconToLoud();
    } else {
        playThemeMusicOnMute();
    }

    let shuffledCardID = shuffle(cardIDArray);

    function shuffle(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    //Generating html for each card
    let pairMatchID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];
    for (let i = 0; i < 12; i++) {
        $("#gameRow").append(`
                <div  class="gameIndividualCardWrapper col-6 col-sm-2  col-md-3 col-lg-2 col-xl-2 ">
                    <div id="card${shuffledCardID[i]}" class="eight-cards card">
                        <div id="card${shuffledCardID[i]}Cover" class=" eight-cards cover"></div> 
                        <div id="card${shuffledCardID[i]}Face" class=" eight-cards face"></div> 
                    </div>
                    <div id="card${shuffledCardID[i]}Match" class="col-6 col-sm-2  col-md-3 col-lg-2 col-xl-2 cover eight-cards match display"></div>
                </div>
                    `);
    }

    // Adding images to the correct cards and display cards
    for (let j = 1; j < 13; j++) {
        let pairArray = ["placeholder", 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
        $(`#card${j}Face`).addClass(`pair${pairArray[j]}`);
        $(`#card${j}`).addClass(`cardMatchID${pairArray[j]}`);
        $(`#card${j}Cover`).addClass(`pairMatchID${pairArray[j]}`);
        $(`#card${j}Match`).addClass(`pairFound${pairArray[j]}`);
    }

    for (let k = 1; k < 7; k++) {
        $(`#displayCard${k}`).addClass(`pair${k}`);
    }

    //Hiding the name to increase screen size
    $("#gridItemName").toggleClass("display");

    //Ensuring all the cards are face down
    turningCardsFaceDown();

    let imageContainerArray = [];
    let backupCardsArray;

    function selectImages() {
        if (apiResponseArray.length == 7) backupCardsArray = apiResponseArray;
        else if (difficultyMode == 1) backupCardsArray = backupCardsArrayEasy;
        else if (difficultyMode == 2) backupCardsArray = backupCardsArrayMedium;
        else backupCardsArray = backupCardsArrayHard;

        for (let i = 0; i < 6; i++) {
            let image = backupCardsArray[i].toString();
            imageContainerArray.push("url(" + '"' + image + '"' + ")");
        }
    }
    selectImages(difficultyMode);
    for (let j = 1; j < 7; j++) {
        $(`.pair${j}`).css("background-image", imageContainerArray[j - 1]);
    }
});

//Closing 'play again' modal
$("#playAgainButton").click(function () {
    whichModal = 4;

    modalSelectionFunction(whichModal);
});

// Calculating the number of ajax calls previously made and alerting the user if they are close to the limit
$("#playAgainButton, #playAgainButtonDisplay").click(function () {
    $("#easy, #medium, #hard").removeClass("active-mode");
    $("#gameRow").html(``);
    themeSelector = 1;
    activeTheme(themeSelector);

    let ajaxCallsSum = ajaxCalls.reduce(function (a, b) {
        return a + b;
    }, 0);
    let totalAjaxCalls = 5000 - ajaxCallsSum;

    if (totalAjaxCalls < 1000) {
        $("#usageWarning").removeClass("display");
        if (totalAjaxCalls < 400) {
            $("#usageWarning").html("This is your final game. Please play again in one hour!");
        } else {
            $("#usageWarning").html("You have only have a few games left before you reach the hourly limit! We will tell you when you have one game left.");
        }
    }

    $("#endOfGameThemeMusic").get(0).pause();

    if (sessionStorage.muted == 0) {
        $(theme).prop("muted", false);
        toggleThemeMusic();
        toggleSpeakerIconToLoud();
    } else {
        playThemeMusicOnMute();
    }

    // Displaying difficulty modal at the beginning of each new game.
    $("#gridItemTimerDisplay").html("0 seconds");
    turningCardsFaceDown();
    whichModal = 3;

    modalSelectionFunction(whichModal);
    openModal(modalSelected);
});
