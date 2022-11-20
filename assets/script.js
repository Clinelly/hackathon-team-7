//Global variables
const question = document.getElementById("question-content");

// List of worlds
const words = ["css", "dublin", "javascript", "code"]

//Select a random world from from list
let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

// Tracks user answers 
let userAnswersCounter = 0

let questions = [{
    question: 'In which FIFA world cup was "Waka Waka" played?',
    choice1: '2002',
    choice2: '2006',
    choice3: '2010',
    choice4: '2014',
    answer: 4,
},
{
    question: "Who sings the song 'La camisa negra'? ",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    answer: "" ,
},

]
// start the quiz
let startQuiz = () => {
    availableQuestions = [...questions];
    loadKeyboard();
    getNewQuestion();
}

// display answers
let getNewQuestion = () => {
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
}

// display keyboard
function loadKeyboard() {
    //Create keys
    for (let i = 0; i < selectedWord.length; i++) {
        let newKey = document.createElement('div');
        newKey.setAttribute('id','keyboard'+i);
        let keyboardArea = document.getElementById('keyboard-area');
        newKey.classList.add('col', 'border', 'border-dark', 'text-center', 'key-style');
        keyboardArea.appendChild(newKey);
    }    
}

// check final answer
function checkAnswer() {
    let answerValue = document.getElementById('finalAnswer').value;
    if (answerValue == selectedWord) {
        alert("You won!");
        location.reload();
    } else {
        if (userAnswersCounter >=2) {
            alert("You lost the game.");
            window.location = "https://8000-marcellomuy-hackathonte-t5d6ye6aw8i.ws-eu77.gitpod.io/index.html"
        } else {
            alert("Wrong answer.");
            userAnswersCounter++;
        }
    }
}

startQuiz()