console.log("start audio.js");

function rewind10sec(sec) {
 var rewind = sec-10;
 audio.currentTime = rewind;
}