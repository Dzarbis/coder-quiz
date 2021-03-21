// Stored questions
var questions = [
    {
        question: "A boolean is ____?",
        options: ["a true/false statement", "an array containing another array", "a listing of variables", "a particularly lazy ghost"],
        answer: "a true/false statement"
    },
    {
        question: "A great way to check if your code is working is ____.",
        options: ["console.log()", "debugger", "testing it yourself in the browser", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["Object", "String", "Null", "Console"],
        answer: "Console"
    },
    {
        question: "An 'else if' statement must be preceded by _____",
        options: ["an 'else' statement", "a variable", "an 'if' statement", "a for loop"],
        answer: "an 'if' statement"
    },
    {
        question: "Which is the proper way to show 'or' in a condition?",
        options: ["or", "||", "!==", "&&"],
        answer: "||"
    }
];

// Set variables here
var main = document.querySelector("#main");
var timer = document.querySelector("#timer");
var quiz = document.querySelector("#quiz");
var quizBtn = document.querySelector("#quiz-button");
var optionMaker = document.createElement("ul");
var timeRemaining = 60;
var wrong = 10;
var qIndex = 0;
var timeSet = 0;

// Quiz logic
var begin = function() {
    quiz.innerHTML = "";
    optionMaker.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[qIndex].question;
        var currentOptions = questions[qIndex].options;
        quiz.textContent = currentQuestion;
    }
    currentOptions.forEach(function(choice) {
        var option = document.createElement("li");
        option.textContent = choice;
        quiz.appendChild(optionMaker);
        optionMaker.appendChild(option);
        option.addEventListener("click", (grader));
    })
};

var grader = function(event) {
    var chosen = event.target;
    
    if (chosen.matches("li")) {
        var info = document.createElement("div");
        info.setAttribute("id", "info");

        if (chosen.textContent === questions[qIndex].answer) {
            info.textContent = "🤘Nailed It!🤘";
        }
        else {
            timeRemaining = timeRemaining - wrong;
            info.textContent = "👎Nope. Say goodbye to 10 seconds off the timer!👎";
        }
    }

    qIndex++;

    if (qIndex >= questions.length) {
        // endGame();
    }
    else {
        begin(qIndex);
    }
    quiz.appendChild(info);
}

var endGame = function () {}

// Timer & quiz start
quizBtn.addEventListener("click", function() {
    if (timeSet === 0) {
        timeSet = setInterval(function() {
            timeRemaining--;
            timer.textContent = "Time Left: " + timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(timeSet);
                timer.textContent = "Out of time!";
            }
        }, 1000);
    }
    begin();
})