console.log("start audio.js");
var h1, player;
h1 = document.querySelector("#title");
player = document.querySelector("audio");

player.play();
player.pause();


function rewind10sec(sec) {
 var rewind = sec-10;
 player.currentTime = rewind;
}

function forward10sec(sec) {
 var forward = sec+10;
 player.currentTime = forward;
}

function play(){
    player.play();
}
function pause(){
    player.pause();
}

function play(event){
    var player = document.querySelector("audio");
    console.log("play");
    player.play();
}

var playButton = document.querySelector("[data-role=play]");
playButton.addEventListener("click", play);

function pause(event){
    var player = document.querySelector("audio");
    console.log("pause");
    player.pause();
}

var pauseButton = document.querySelector("[data-role=pause]");
pauseButton.addEventListener("click", pause);