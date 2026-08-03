// ============================
// Kids Learning World
// Storage System
// ============================

const STORAGE_KEY = "kids_learning_world";

// Save User Data
function saveData(data){

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

}

// Load User Data
function loadData(){

    const data = localStorage.getItem(STORAGE_KEY);

    if(data){

        return JSON.parse(data);

    }

    return {

        coins:0,
        stars:0,
        level:1,
        lesson:0,
        score:0

    };

}

// Save Coins
function saveCoins(coins){

    let data = loadData();

    data.coins = coins;

    saveData(data);

}

// Save Stars
function saveStars(stars){

    let data = loadData();

    data.stars = stars;

    saveData(data);

}

// Save Level
function saveLevel(level){

    let data = loadData();

    data.level = level;

    saveData(data);

}

// Save Lesson
function saveLesson(lesson){

    let data = loadData();

    data.lesson = lesson;

    saveData(data);

}

// Save Score
function saveScore(score){

    let data = loadData();

    data.score = score;

    saveData(data);

}

// Reset Progress
function resetData(){

    localStorage.removeItem(STORAGE_KEY);

    alert("Progress Reset Successfully!");

}

// Get Progress
function getProgress(){

    return loadData();

}

// Auto Save Every 10 Seconds
setInterval(function(){

    saveData(loadData());

},10000);
