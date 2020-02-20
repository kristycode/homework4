

// home page vars //
const startContainer = document.getElementById("startContainer");
const startButton = document.getElementById("startButton");
const playAgainButton =  document.getElementById("playAgainButton");
const highScoresButton =  document.getElementById("highScoresButton");

// quiz //
const quizContainer = document.getElementById("quizContainer");
const optionA = document.getElementById("a");
const optionB = document.getElementById("b");
const optionC = document.getElementById("c");
const optionD =  document.getElementById("d");

// final score page //
const answerResultContainer = document.getElementById("answerResultContainer");
const scoreResult = document.getElementById("scoreResult");
const scoreAmount = document.getElementById("scoreAmount");

// score submission and list //
const highScoresList = document.getElementById("highScoresList");
const highScoreContainer = document.getElementById("highScoreContainer");
const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreButton");
const mostRecentScore = localStorage.getItem("mostRecentScore");

////////////////////////////////////

// the questions //
let questions = [
    {
    question: "Commonly used data types do NOT include:",
    optionA : "a. strings",
    optionB : "b. booleans",
    optionC : "c. alerts",
    optionD : "d. numbers",
    answer : "c"
},{
    question : "The condition in an if/else statement is enclosed within ______:",
    optionA : "a. quotes",
    optionB : "b. curly brackets",
    optionC : "c. parenthesis",
    optionD : "d. square brackets",
    answer : "c"
},{
    question : "Arrays in Javascript can be used to store ______:",
    optionA : "a. numbers and strings",
    optionB : "b. other arrays",
    optionC : "c. booleans",
    optionD : "d. all of the above",
    answer : "d"
},{
    question : "String values must be enclosed within _____ when being assigned to variables:",
    optionA : "a. commas",
    optionB : "b. curly brackets",
    optionC : "c. quotes",
    optionD : "d. parenthesis",
    answer : "c"
},{
    question : "A very useful tool used during development and debugging for printing content to the debugger is:",
    optionA : "a. JavaScript",
    optionB : "b. terminal/bash",
    optionC : "c. for loops",
    optionD : "d. console.log",
    answer : "d"
}]


// variables //
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

//rendering the question //
function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
}

startButton.addEventListener("click", startQuiz);
// start quiz //
function startQuiz (){
    startContainer.style.display = "none";
    renderQuestion();
    quizContainer.style.display = "block";
    var timeoutID;
}

//check answers//
function checkAnswer(answer){
    if (answer == questions[runningQuestion].answer){
        //answer is correct
        score++;
        // change the answer alert div
        answerResult.innerText = "last answer was correct";
    }
    else{
        answerResult.innerText = "last answer was wrong";
    }
    // run renderQuestion function again but i can't get the setTimeout to work on it? //
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else{
        scoreCalculate();
    }
}

//show the final score//

function scoreCalculate(){
    quizContainer.style.display = "none";
    scoreResultContainer.style.display = "block";

    // calculate and save the score //
    const scorePercent = Math.round(100 * score/questions.length);
    finalScore.innerText = scorePercent;
    localStorage.setItem("userScore", scorePercent);
    console.log(scorePercent);
}

//save score functions//
username.addEventListener("keyup", () => {
    saveScoreButton.disabled =! username.value;
});

saveHighScore = e => {
    e.preventDefault();
        var userName = username.value;
        localStorage.setItem("userName", userName);
            userInfo = {
            Name : localStorage.getItem("userName"),
            Score: localStorage.getItem("userScore")
            };
    console.log(userName);
    console.log(highScoresList);

        highScoresList.innerHTML += userInfo.Name + ": " + userInfo.Score + "</br>";
};



highScoresButton.addEventListener("click", displayHighScores);
function displayHighScores (){
    startContainer.style.display = "none";
    scoreResultContainer.style.display = "none";
    highScoreContainer.style.display = "block";
    answerResult.innerText = "";
}

playAgainButton.addEventListener("click", startNewQuiz);
function startNewQuiz (){
    highScoreContainer.style.display= "none";
    startContainer.style.display = "none";
    scoreResultContainer.style.display = "none";
    runningQuestion = 0;
    score = 0;
    answerResult.innerText = "";
    renderQuestion();
    quizContainer.style.display = "block";
    // start my timer function here when i make it //
};
