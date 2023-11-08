var video;

window.addEventListener("load", function() {
    console.log("Window opened successfully");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    updateVolumeDisplay();

    function updateVolumeDisplay() {
        document.getElementById("volume").innerHTML = video.volume * 100 + "%";
    }

    function updateSpeedDisplay() {
        console.log("New speed is " + video.playbackRate);
    }

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        updateVolumeDisplay();
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        updateSpeedDisplay();
    });

    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        updateSpeedDisplay();
    });

    document.querySelector("#skip").addEventListener("click", function() {
        video.currentTime = Math.min(video.currentTime + 10, video.duration);
        console.log("Current location is " + video.currentTime);
    });

    document.querySelector("#mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.innerHTML = video.muted ? "Unmute" : "Mute";
    });

    document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        updateVolumeDisplay();
        console.log("Volume is: " + video.volume * 100 + "%");
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});
