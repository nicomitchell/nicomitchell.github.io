var audio = document.getElementById("musicPlayer");
var playing = false;
function toggleAudio() {
    if (playing) {
        audio.pause();
        playing = false;
        document.getElementById("musicButton").innerHTML = "Music off";
    } else {
        audio.play();
        playing = true;
        document.getElementById("musicButton").innerHTML = "Music on";
    }
}