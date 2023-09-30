let gameLevel = 0;
let started = 0;
const buttonColors = ["green", "red", "yellow", "blue"];
$(document).ready(function () {
    // press any key to start the game
    $(document).keypress(function (e) {
        if (!started) {
            gameLevel++;
            started = true;

            emptyHeading();
            changeLevel(gameLevel);
        }
    });


    $(".btn").click(function () {
        let btnId = $(this).attr("id");
        playGame(btnId);

    });


});

// changing headings
function emptyHeading() {
    $("h1").empty();
}

function changeLevel(gameLevel) {
    $("h1").append(" Level " + gameLevel);
}
function playGame(btnId) {
    let userSelectedId = buttonColors.indexOf(btnId);
    let randomId = randomNumber();
    $("#"+btnId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // alert("hi "+userSelectedId+"\n Random Number -"+randomId);
    if (userSelectedId === randomId) {
        // alert("hi I'm ramdom num "+randomId);
        gameLevel++;
        emptyHeading();
        changeLevel(gameLevel);
        playMusic(btnId);
    } else {
        emptyHeading();
        gameOver();
        musicWrong();
    }
}
// callback function
function gameOver() {
    $("h1").append(" Game Over, Press Any Key to Restart");
    gameLevel = 0;
    started = false;
}

// adding music sounds
function playMusic(name) {
    var audioMusic = new Audio("https://thejagit.github.io/simon-game/sounds/" + name + ".mp3");
    audioMusic.play();
}
function musicWrong() {
    var audioWrong = new Audio("../sounds/wrong.mp3");
    audioWrong.play();
}

//generate random number
function randomNumber() {
    // Returns a random integer from 0 to 3:
    let randomNum = Math.floor(Math.random() * 4);
    return randomNum;

}