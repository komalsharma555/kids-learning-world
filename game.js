// =============================
// Kids Learning World Game Engine
// =============================

let score = 0;
let coins = 0;
let level = 1;
let currentQuestion = 0;

const quiz = [

{
question:"🍎 Apple starts with?",
options:["A","B","C","D"],
answer:"A"
},

{
question:"🐱 Cat starts with?",
options:["A","B","C","D"],
answer:"C"
},

{
question:"🐘 Elephant starts with?",
options:["E","F","G","H"],
answer:"E"
},

{
question:"🍌 Banana starts with?",
options:["A","B","C","D"],
answer:"B"
},

{
question:"🐶 Dog starts with?",
options:["A","B","C","D"],
answer:"D"
}

];

// -----------------------------

function startGame(){

currentQuestion = 0;
score = 0;

showQuestion();

}

// -----------------------------

function showQuestion(){

const q=document.getElementById("question");

const a=document.getElementById("answerArea");

if(!q || !a) return;

const item=quiz[currentQuestion];

q.innerHTML=item.question;

a.innerHTML="";

item.options.forEach(option=>{

const btn=document.createElement("button");

btn.innerHTML=option;

btn.onclick=function(){

checkAnswer(option);

};

a.appendChild(btn);

});

}

// -----------------------------

function checkAnswer(answer){

if(answer===quiz[currentQuestion].answer){

score+=10;

coins+=5;

alert("✅ Correct");

}else{

alert("❌ Wrong");

}

currentQuestion++;

if(currentQuestion<quiz.length){

showQuestion();

}else{

finishGame();

}

}

// -----------------------------

function finishGame(){

if(score>=40){

level++;

}

alert(

"🎉 Game Finished\n\n"+
"Score : "+score+
"\nCoins : "+coins+
"\nLevel : "+level

);

saveGame();

}

// -----------------------------

function saveGame(){

localStorage.setItem("gameScore",score);

localStorage.setItem("gameCoins",coins);

localStorage.setItem("gameLevel",level);

}

// -----------------------------

function loadGame(){

score=Number(localStorage.getItem("gameScore"))||0;

coins=Number(localStorage.getItem("gameCoins"))||0;

level=Number(localStorage.getItem("gameLevel"))||1;

}

// -----------------------------

window.onload=function(){

loadGame();

};
