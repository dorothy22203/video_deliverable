var video;

window.addEventListener("load", function() {
    
    video = document.querySelector("video");
    video.autoplay = false;
    video.loop = false;

    function updateVolumeInfo() {
        console.log("Current Volume: " + (video.volume * 100).toFixed(1) + "%");
    }

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        if (video.paused) {
            video.play();
            updateVolumeInfo();
        }
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        if (!video.paused) {
            video.pause();
        }
    });

    document.querySelector("#slowDown").addEventListener("click", function() {
        console.log("Slow Down Video");
        video.playbackRate -= 0.1;
        console.log("New Speed: " + video.playbackRate.toFixed(1));
    });

    document.querySelector("#speedUp").addEventListener("click", function() {
        console.log("Speed Up Video");
        video.playbackRate += 0.1;
        console.log("New Speed: " + video.playbackRate.toFixed(1));
    });

    document.querySelector("#skipAhead").addEventListener("click", function() {
        console.log("Skip Ahead");
        video.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log("Current Time: " + video.currentTime.toFixed(1));
    });

    document.querySelector("#mute").addEventListener("click", function() {
        console.log("Toggle Mute");
        video.muted = !video.muted;
        document.querySelector("#mute").textContent = video.muted ? "Unmute" : "Mute";
        updateVolumeInfo();
    });

    document.querySelector("#volumeSlider").addEventListener("input", function() {
        console.log("Volume Changed");
        video.volume = document.querySelector("#volumeSlider").value / 100;
        updateVolumeInfo();
    });

});
