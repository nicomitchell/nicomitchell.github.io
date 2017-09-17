var audio = document.getElementById("musicPlayer");
var playing = true;
function toggleAudio() {
    if (playing) {
        audio.pause();
    } else {
        audio.play();
    }
}