var timer = 100;
var score = 0;
var questions = 0;


function timerFunction() {
    document.getElementById("timer").textContent = `Time Remainer; ${timer}`;
    var interval = setInterval(()=> {
        timer--
        document.getElementById("timer").textContent = `Time Remaining: ${timer}`;
        }, 1000)
    };

    // setInterval(function(){
    //     timer--
    //     console.log(timer)
    // },1000)

var questionAnswers = [
    {
        question: "Git is the version control software on your computer. Github is a website that can host remote Git repositiries.",
        answer: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The DOM is built into the JavaScript language?",
        answer: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "What does CSS stand for?",
        answer: ["Colorful Styles cheet", "Class Styles Sheet", "Cascading Style Sheet", "Computer Sheet Style"],
        correctAnswer: "Cascading Style Sheet"
    },
    {
        question: "Which statement correctly stores date into the Web storage API?",
        answer: ["localStorage.getItem('lunch', 'sandwich');", "localStorage.setItem('lunch', 'sandwich');", "setItem.localStorage('lunch', 'sandwich');",],
        correctAnswer: "localStorage.setItem('lunch', 'sandwich');"
    },
]

var questionIndex = 0
//var titleElement = document.getElementById("question-title")

function getAnswers() {
    var titleElement = document.getElementById("question"); 
    titleElement.textContent = questionAnswers[questionIndex].question

    for (var i = 0; i < questionAnswers[questionIndex].answer.length; i++) {
        var listEl = document.createElement("li");
        listEl.textContent = questionAnswers[questionIndex].answer[i];
        listEl.setAttribute("onclick", "nextQuestion(event)")
        document.getElementById("answer").appendChild(listEl);
    }
    questionIndex++;
    document.querySelector("button")
}
function nextQuestion(e) {
    if (e.target.textContent=== questionAnswers[questionIndex].correctAnswer) {
        console.log("this is correct")
    } else(
        timer -= 15,
        console.log("this is wrong")
        )
        getAnswers()
}

function startQuiz() {
    var buttonEl = document.querySelector("button")
    getAnswers()
}

function submitScore() {
    //document.getElmentById"initials"
    console.log(document.getElementById ("initials").ariaValueMax, score);
    var initials = document.getElementById("initials").ariaValueMax;
    var points = score;
    localStorage.setItem(initials, points);
    quizScores();
}
//buttonEl.addEventListener("click", function () {

//buttonEl.addEventListener("click", function() {

//})

document.getElementById("startGameBtn").addEventListener("click", function(){
    if (timer ===100) {
        timerFunction()
        startQuiz()
    }else {
        startQuiz()
    }
})