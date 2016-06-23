console.log("start audio.js");
var html, body, audio;
html = document.children[0];
body = html.children[1];
audio = body.children[1];

audio.play();
audio.pause();


function rewind10sec(sec) {
 var rewind = sec-10;
 audio.currentTime = rewind;
}

function forward10sec(sec) {
 var forward = sec+10;
 audio.currentTime = forward;
}

function play(){
    audio.play();
}
function pause(){
    audio.pause();
}