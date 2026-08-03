// ==========================
// Kids Learning World
// Main App
// ==========================

// User Progress
let player = {
    name: "Guest",
    coins: 0,
    stars: 0,
    lesson: 0
};

// Learning Data
const lessons = [

{
emoji:"🍎",
title:"A for Apple",
color:"#ff5252"
},

{
emoji:"⚽",
title:"B for Ball",
color:"#42a5f5"
},

{
emoji:"🐱",
title:"C for Cat",
color:"#66bb6a"
},

{
emoji:"🐶",
title:"D for Dog",
color:"#ffca28"
},

{
emoji:"🐘",
title:"E for Elephant",
color:"#ab47bc"
}

];

let currentLesson = 0;

// Start Learning
function startLearning(){

window.location.href="learn.html";

}

// Next Lesson
function nextLesson(){

if(currentLesson<lessons.length-1){

currentLesson++;

showLesson();

}

}

// Previous Lesson
function previousLesson(){

if(currentLesson>0){

currentLesson--;

showLesson();

}

}

// Show Lesson
function showLesson(){

const emoji=document.getElementById("lessonEmoji");
const title=document.getElementById("lessonTitle");

if(emoji) emoji.innerHTML=lessons[currentLesson].emoji;

if(title) title.innerHTML=lessons[currentLesson].title;

}

// Reward
function rewardPlayer(){

player.coins+=10;
player.stars+=1;

updateHeader();

}

// Header Update
function updateHeader(){

const coin=document.getElementById("coins");

const star=document.getElementById("stars");

if(coin){

coin.innerHTML="🪙 "+player.coins;

}

if(star){

star.innerHTML="⭐ "+player.stars;

}

}

// Daily Reward
function claimReward(){

rewardPlayer();

alert("🎉 Daily Reward Claimed!");

}

// Reset Progress
function resetProgress(){

player.coins=0;
player.stars=0;
player.lesson=0;

updateHeader();

alert("Progress Reset");

}

// Save Progress
function saveProgress(){

localStorage.setItem("kidsPlayer",JSON.stringify(player));

}

// Load Progress
function loadProgress(){

const data=localStorage.getItem("kidsPlayer");

if(data){

player=JSON.parse(data);

updateHeader();

}

}

// Auto Save
setInterval(saveProgress,5000);

// On Load
window.onload=function(){

loadProgress();

showLesson();

updateHeader();

};
