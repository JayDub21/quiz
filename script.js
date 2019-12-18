// var score = 0;
// var ul=document.getElementById('ul');
// var btn=document.getElementById('button');
// var scoreCard=document.getElementById('scoreCard');
// var quizBox=document.getElementById('questionBox');
// var op1=document.getElementById('op1');
// var op2=document.getElementById('op2');
// var op3=document.getElementById('op3');
// var op4=document.getElementById('op4');
var questionIndex = 0;
var correct = 0;
var wrong = 0;
console.log(questions)
function qloop(){
    var titleh1 = $("<h1>").text(questions[questionIndex].title);
    $("#questionBox").append(titleh1);

    for(var i = 0; i < questions[0].choices.length; i++){
        var qu = $("<button>").text(questions[questionIndex].choices[i]);
        qu.addClass("qustyle")
        $(".options").append(qu);
    }
}
qloop();
$(document).on("click", ".qustyle", function(){
    console.log($(this).text());
    $("#questionBox").empty();
    $(".options").empty();
    

//scorekeeping
console.log(questions[questionIndex].answer)
console.log($(this).text())
if($(this).text()===questions[questionIndex].answer){
    console.log("guess correct");
    correct++;
}
else{
wrong++;

}
//
console.log("Correct Score",correct);
console.log("Wrong Score",wrong);
questionIndex++;
    qloop();
})







let countdown;
const timerDisplay = document.querySelector(".display-time-left");

function timer (seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
   displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000);
        //check if it should stop
        if(secondsLeft <= 0){
            clearInterval(countdown);
            return;
        }
        //display it
        displayTimeLeft(secondsLeft);
    },1000);
}

function displayTimeLeft(seconds) {
    console.log(seconds);
} 
