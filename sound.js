// ============================
// Kids Learning World
// Sound Manager
// ============================

let soundEnabled = true;

// Toggle Sound
function toggleSound(){

    soundEnabled = !soundEnabled;

    localStorage.setItem("soundEnabled", soundEnabled);

    updateSoundStatus();

}

// Load Sound Setting
function loadSoundSetting(){

    const saved = localStorage.getItem("soundEnabled");

    if(saved !== null){

        soundEnabled = saved === "true";

    }

    updateSoundStatus();

}

// Update UI
function updateSoundStatus(){

    const status = document.getElementById("soundStatus");

    if(status){

        status.innerHTML = soundEnabled ? "🔊 ON" : "🔇 OFF";

    }

}

// Play Click Sound
function playClick(){

    if(!soundEnabled) return;

    const audio = new Audio("https://actions.google.com/sounds/v1/cartoon/pop.ogg");

    audio.play();

}

// Play Success Sound
function playSuccess(){

    if(!soundEnabled) return;

    const audio = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");

    audio.play();

}

// Play Wrong Sound
function playWrong(){

    if(!soundEnabled) return;

    const audio = new Audio("https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg");

    audio.play();

}

// Play Reward Sound
function playReward(){

    if(!soundEnabled) return;

    const audio = new Audio("https://actions.google.com/sounds/v1/cartoon/slide_whistle_to_drum_hit.ogg");

    audio.play();

}

// Play Button Click
document.addEventListener("click",function(){

    playClick();

});

// Initialize
window.addEventListener("load",function(){

    loadSoundSetting();

});
