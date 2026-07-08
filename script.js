const questions=[

{
question:"What does HTML stand for?",
options:["Hyper Text Markup Language","High Text Machine Language","Home Tool Markup Language","Hyperlinks Text Markup Language"],
answer:0
},

{
question:"Which language styles web pages?",
options:["Python","Java","CSS","SQL"],
answer:2
},

{
question:"Which language makes websites interactive?",
options:["HTML","CSS","JavaScript","PHP"],
answer:2
},

{
question: "Which HTML tag is used for creating links?",
options: ["img", "div", "a", "p"],
answer: "a"
},

{
question:"Which company created JavaScript?",
options:["Google","Apple","Netscape","IBM"],
answer:2
},

{
 question: "Which HTML tag inserts an image?",
  options: ["img", "image", "src", "picture"],
  answer: 0
},

{
question:"Which CSS property changes text color?",
options:["font-color","color","text-style","text-color"],
answer:1
},

{
question:"Which symbol selects ID in CSS?",
options:[".","#","*","@"],
answer:1
},

{
question:"Which function prints output in browser console?",
options:["console.log()","print()","echo()","write()"],
answer:0
},

{
question:"Which HTML heading is largest?",
options:["<h6>","<h4>","<h1>","<h2>"],
answer:2
}

];

let currentQuestion=0;
let score=0;
let timer=60;
let timerInterval;

let studentName="";
let registerNo="";

const loginPage=document.getElementById("loginPage");
const instructionPage=document.getElementById("instructionPage");
const quizPage=document.getElementById("quizPage");
const resultPage=document.getElementById("resultPage");

function showInstructions(){

studentName=document.getElementById("studentName").value.trim();
registerNo=document.getElementById("registerNo").value.trim();

if(studentName==""||registerNo==""){

alert("Please fill all details");
return;

}

loginPage.classList.add("hidden");
instructionPage.classList.remove("hidden");

}

function startQuiz(){

instructionPage.classList.add("hidden");
quizPage.classList.remove("hidden");

document.getElementById("studentInfo").innerHTML=studentName+"<br>"+registerNo;

startTimer();

showQuestion();

}

function startTimer(){

document.getElementById("timer").innerHTML=timer+" s";

timerInterval=setInterval(()=>{

timer--;

document.getElementById("timer").innerHTML=timer+" s";

if(timer<=0){

clearInterval(timerInterval);

showResult();

}

},1000);

}

function showQuestion(){

document.getElementById("nextBtn").style.display="none";

const q=questions[currentQuestion];

document.getElementById("questionCount").innerHTML="Question "+(currentQuestion+1)+" / "+questions.length;

document.getElementById("question").innerHTML=q.question;

const answers=document.getElementById("answerButtons");

answers.innerHTML="";

q.options.forEach((option,index)=>{

const btn=document.createElement("button");

btn.innerHTML=option;

btn.classList.add("option");

btn.onclick=()=>selectAnswer(btn,index);

answers.appendChild(btn);

});

updateProgress();

}

function selectAnswer(btn,index){

const correct=questions[currentQuestion].answer;

const buttons=document.querySelectorAll(".option");

buttons.forEach(button=>button.disabled=true);

if(index===correct){

btn.classList.add("correct");

score++;

}

else{

btn.classList.add("wrong");

buttons[correct].classList.add("correct");

}

document.getElementById("nextBtn").style.display="block";

}

document.getElementById("nextBtn").onclick=()=>{

currentQuestion++;

if(currentQuestion<questions.length){

showQuestion();

}

else{

showResult();

}

};

function updateProgress(){

let progress=((currentQuestion+1)/questions.length)*100;

document.getElementById("progressBar").style.width=progress+"%";

}

function showResult(){

clearInterval(timerInterval);

quizPage.classList.add("hidden");

resultPage.classList.remove("hidden");

let percentage=(score/questions.length)*100;

let grade="F";

if(percentage>=90) grade="A+";
else if(percentage>=80) grade="A";
else if(percentage>=70) grade="B";
else if(percentage>=60) grade="C";
else if(percentage>=50) grade="D";

document.getElementById("studentResult").innerHTML="Student : "+studentName+"<br>Register No : "+registerNo;

document.getElementById("scoreText").innerHTML="Score : "+score+" / "+questions.length;

document.getElementById("percentage").innerHTML="Percentage : "+percentage+"%";

document.getElementById("grade").innerHTML="Grade : "+grade;

}
